import { Crdt, CompositeCrdt, CrdtEvent, CrdtEventsRecord } from "./crdt_core";
import { MultiValueRegister } from "./basic_crdts";
import { LazyMap, MapCrdt } from "./standard";
import {
  DefaultElementSerializer,
  ElementSerializer,
  TextSerializer,
} from "./utils";
import { TreedocPrimitiveList, TreedocSource } from "./list";

export interface JsonEvent extends CrdtEvent {
  readonly key: string;
  readonly value: Crdt;
}

export interface JsonEventsRecord extends CrdtEventsRecord {
  Add: JsonEvent;
  Delete: JsonEvent;
}

enum InternalType {
  Nested,
  List,
}

export class JsonCrdt extends CompositeCrdt<JsonEventsRecord> {
  private readonly internalMap: MapCrdt<
    string,
    MultiValueRegister<number | string | boolean | InternalType>
  >;
  private readonly internalListMap: LazyMap<
    string,
    TreedocPrimitiveList<string>
  >;
  private readonly internalNestedKeys: Map<string, Set<string>>;

  constructor() {
    super();

    let keySerializer: ElementSerializer<string> = DefaultElementSerializer.getInstance();
    this.internalMap = this.addChild(
      "internalMap",
      new MapCrdt(() => new MultiValueRegister(), keySerializer, true)
    );

    this.internalListMap = this.addChild(
      "internalListMap",
      new LazyMap(
        () => new TreedocPrimitiveList(TextSerializer.instance),
        keySerializer,
        true
      )
    );

    this.internalNestedKeys = new Map();

    this.internalMap.on("KeyAdd", (event) => {
      let keys = event.key.split(":");
      keys?.pop();
      let key = keys.pop() || "";
      let cursor = keys.join(":");
      this.addKey(cursor + ":", key);
    });

    this.internalMap.on("KeyDelete", (event) => {
      let keys = event.key.split(":");
      keys?.pop();
      let key = keys.pop() || "";
      let cursor = keys.join(":");
      this.deleteKey(cursor + ":", key);
    })
  }

  addKey(cursor: string, key: string) {
    let keys = this.internalNestedKeys.get(cursor)
    if (keys !== undefined) {
      keys.add(key);
    } else {
      this.internalNestedKeys.set(cursor, new Set([key]));
    }
  }

  deleteKey(cursor: string, key: string) {
    this.internalNestedKeys.get(cursor)?.delete(key);
  }

  set(key: string, val: number | string | boolean | InternalType) {
    // Reset an existing map or list
    this.deleteSubKeys(key);
    if (val === InternalType.List) {
      this.internalListMap.get(key).reset();
    }

    let mvr = this.internalMap.getForce(key);
    mvr.value = val;
  }

  get(
    key: string
  ): (number | string | boolean | TreedocPrimitiveList<string> | JsonCursor)[] {
    let vals: any[] = [];
    let mvr = this.internalMap.get(key);
    if (mvr) {
      for (let val of mvr.valueSet) {
        switch (val) {
          case InternalType.Nested:
            vals.push(new JsonCursor(this, key));
            break;

          case InternalType.List:
            vals.push(this.internalListMap.get(key));
            break;

          default:
            vals.push(val);
            break;
        }
      }
    }

    return vals;
  }

  deleteSubKeys(key: string) {
    let nestedKeys = this.internalNestedKeys.get(key);
    if (nestedKeys !== undefined) {
      for (let subkey of [...nestedKeys]) {
        this.deleteKey(key, subkey);
        this.delete(key + subkey + ":");
      }
    }
  }

  delete(key: string) {
    this.internalMap.delete(key);
    this.deleteSubKeys(key);
  }

  keys(cursor: string): string[] {
    let keys = this.internalNestedKeys.get(cursor);
    if (keys !== undefined) {
      return [...keys];
    } else {
      return [];
    }
  }

  values(
    cursor: string
  ): (number | string | boolean | TreedocPrimitiveList<string> | JsonCursor)[] {
    let vals: (
      | number
      | string
      | boolean
      | TreedocPrimitiveList<string>
      | JsonCursor
    )[] = [];

    for (let key of this.keys(cursor)) {
      vals.push(...this.get(cursor + key + ":"));
    }

    return vals;
  }

  hasKey(key: string): boolean {
    return this.internalMap.has(key);
  }

  setIsMap(key: string) {
    this.set(key, InternalType.Nested);
  }

  setIsList(key: string) {
    this.set(key, InternalType.List);
  }

  addExtChild(name: string, child: Crdt) {
    this.addChild(name, child);
  }
}

export class JsonCursor {
  private internal: JsonCrdt;
  private cursor: string;

  constructor(internal?: JsonCrdt, cursor?: string) {
    if (!internal) internal = new JsonCrdt();
    this.internal = internal;

    if (!cursor) cursor = ":";
    this.cursor = cursor;
  }

  get(
    key: string
  ): (number | string | boolean | TreedocPrimitiveList<string> | JsonCursor)[] {
    return this.internal.get(this.cursor + key + ":");
  }

  set(key: string, val: number | string | boolean) {
    this.internal.addKey(this.cursor, key);
    this.internal.set(this.cursor + key + ":", val);
  }

  setIsMap(key: string) {
    this.internal.addKey(this.cursor, key);
    this.internal.setIsMap(this.cursor + key + ":");
  }

  setIsList(key: string) {
    this.internal.addKey(this.cursor, key);
    this.internal.setIsList(this.cursor + key + ":");
  }

  delete(key: string) {
    this.internal.deleteKey(this.cursor, key);
    this.internal.delete(this.cursor + key + ":");
  }

  keys(): string[] {
    return this.internal.keys(this.cursor);
  }

  values(): (
    | number
    | string
    | boolean
    | TreedocPrimitiveList<string>
    | JsonCursor
  )[] {
    return this.internal.values(this.cursor);
  }
}
