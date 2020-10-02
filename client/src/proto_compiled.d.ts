import * as $protobuf from "protobufjs";
/** Properties of a CrdtRuntimeMessage. */
export interface ICrdtRuntimeMessage {

    /** CrdtRuntimeMessage innerMessage */
    innerMessage: Uint8Array;

    /** CrdtRuntimeMessage fullId */
    fullId?: (string[]|null);
}

/** Represents a CrdtRuntimeMessage. */
export class CrdtRuntimeMessage implements ICrdtRuntimeMessage {

    /**
     * Constructs a new CrdtRuntimeMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICrdtRuntimeMessage);

    /** CrdtRuntimeMessage innerMessage. */
    public innerMessage: Uint8Array;

    /** CrdtRuntimeMessage fullId. */
    public fullId: string[];

    /**
     * Creates a new CrdtRuntimeMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CrdtRuntimeMessage instance
     */
    public static create(properties?: ICrdtRuntimeMessage): CrdtRuntimeMessage;

    /**
     * Encodes the specified CrdtRuntimeMessage message. Does not implicitly {@link CrdtRuntimeMessage.verify|verify} messages.
     * @param message CrdtRuntimeMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICrdtRuntimeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CrdtRuntimeMessage message, length delimited. Does not implicitly {@link CrdtRuntimeMessage.verify|verify} messages.
     * @param message CrdtRuntimeMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICrdtRuntimeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CrdtRuntimeMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CrdtRuntimeMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CrdtRuntimeMessage;

    /**
     * Decodes a CrdtRuntimeMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CrdtRuntimeMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CrdtRuntimeMessage;

    /**
     * Verifies a CrdtRuntimeMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CrdtRuntimeMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CrdtRuntimeMessage
     */
    public static fromObject(object: { [k: string]: any }): CrdtRuntimeMessage;

    /**
     * Creates a plain object from a CrdtRuntimeMessage message. Also converts values to other types if specified.
     * @param message CrdtRuntimeMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CrdtRuntimeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CrdtRuntimeMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CounterMessage. */
export interface ICounterMessage {

    /** CounterMessage toAdd */
    toAdd: number;
}

/** Represents a CounterMessage. */
export class CounterMessage implements ICounterMessage {

    /**
     * Constructs a new CounterMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICounterMessage);

    /** CounterMessage toAdd. */
    public toAdd: number;

    /**
     * Creates a new CounterMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CounterMessage instance
     */
    public static create(properties?: ICounterMessage): CounterMessage;

    /**
     * Encodes the specified CounterMessage message. Does not implicitly {@link CounterMessage.verify|verify} messages.
     * @param message CounterMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CounterMessage message, length delimited. Does not implicitly {@link CounterMessage.verify|verify} messages.
     * @param message CounterMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CounterMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CounterMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CounterMessage;

    /**
     * Decodes a CounterMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CounterMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CounterMessage;

    /**
     * Verifies a CounterMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CounterMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CounterMessage
     */
    public static fromObject(object: { [k: string]: any }): CounterMessage;

    /**
     * Creates a plain object from a CounterMessage message. Also converts values to other types if specified.
     * @param message CounterMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CounterMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CounterMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MultRegisterMessage. */
export interface IMultRegisterMessage {

    /** MultRegisterMessage toMult */
    toMult: number;
}

/** Represents a MultRegisterMessage. */
export class MultRegisterMessage implements IMultRegisterMessage {

    /**
     * Constructs a new MultRegisterMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMultRegisterMessage);

    /** MultRegisterMessage toMult. */
    public toMult: number;

    /**
     * Creates a new MultRegisterMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultRegisterMessage instance
     */
    public static create(properties?: IMultRegisterMessage): MultRegisterMessage;

    /**
     * Encodes the specified MultRegisterMessage message. Does not implicitly {@link MultRegisterMessage.verify|verify} messages.
     * @param message MultRegisterMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMultRegisterMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MultRegisterMessage message, length delimited. Does not implicitly {@link MultRegisterMessage.verify|verify} messages.
     * @param message MultRegisterMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMultRegisterMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MultRegisterMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultRegisterMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MultRegisterMessage;

    /**
     * Decodes a MultRegisterMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultRegisterMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MultRegisterMessage;

    /**
     * Verifies a MultRegisterMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MultRegisterMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultRegisterMessage
     */
    public static fromObject(object: { [k: string]: any }): MultRegisterMessage;

    /**
     * Creates a plain object from a MultRegisterMessage message. Also converts values to other types if specified.
     * @param message MultRegisterMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MultRegisterMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MultRegisterMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GSetMessage. */
export interface IGSetMessage {

    /** GSetMessage toAdd */
    toAdd: Uint8Array;
}

/** Represents a GSetMessage. */
export class GSetMessage implements IGSetMessage {

    /**
     * Constructs a new GSetMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGSetMessage);

    /** GSetMessage toAdd. */
    public toAdd: Uint8Array;

    /**
     * Creates a new GSetMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GSetMessage instance
     */
    public static create(properties?: IGSetMessage): GSetMessage;

    /**
     * Encodes the specified GSetMessage message. Does not implicitly {@link GSetMessage.verify|verify} messages.
     * @param message GSetMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGSetMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GSetMessage message, length delimited. Does not implicitly {@link GSetMessage.verify|verify} messages.
     * @param message GSetMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGSetMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GSetMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GSetMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GSetMessage;

    /**
     * Decodes a GSetMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GSetMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GSetMessage;

    /**
     * Verifies a GSetMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GSetMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GSetMessage
     */
    public static fromObject(object: { [k: string]: any }): GSetMessage;

    /**
     * Creates a plain object from a GSetMessage message. Also converts values to other types if specified.
     * @param message GSetMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GSetMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GSetMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MvrMessage. */
export interface IMvrMessage {

    /** MvrMessage value */
    value: Uint8Array;
}

/** Represents a MvrMessage. */
export class MvrMessage implements IMvrMessage {

    /**
     * Constructs a new MvrMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMvrMessage);

    /** MvrMessage value. */
    public value: Uint8Array;

    /**
     * Creates a new MvrMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MvrMessage instance
     */
    public static create(properties?: IMvrMessage): MvrMessage;

    /**
     * Encodes the specified MvrMessage message. Does not implicitly {@link MvrMessage.verify|verify} messages.
     * @param message MvrMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMvrMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MvrMessage message, length delimited. Does not implicitly {@link MvrMessage.verify|verify} messages.
     * @param message MvrMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMvrMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MvrMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MvrMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MvrMessage;

    /**
     * Decodes a MvrMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MvrMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MvrMessage;

    /**
     * Verifies a MvrMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MvrMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MvrMessage
     */
    public static fromObject(object: { [k: string]: any }): MvrMessage;

    /**
     * Creates a plain object from a MvrMessage message. Also converts values to other types if specified.
     * @param message MvrMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MvrMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MvrMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
