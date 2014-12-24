declare module JxrLib {
    function isNativelySupported(): Promise<boolean>;
    interface DecodingOptionBag {
    }
    function decode(blob: Blob, options?: DecodingOptionBag): Promise<Uint8Array>;
    function decode(arraybuffer: ArrayBuffer, options?: DecodingOptionBag): Promise<Uint8Array>;
    function decodeAsBlob(blob: Blob, options?: DecodingOptionBag): Promise<Blob>;
    function decodeAsBlob(arraybuffer: ArrayBuffer, options?: DecodingOptionBag): Promise<Blob>;
    function decodeAsElement(blob: Blob, options?: DecodingOptionBag): Promise<HTMLImageElement>;
    function decodeAsElement(arraybuffer: ArrayBuffer, options?: DecodingOptionBag): Promise<HTMLImageElement>;
    interface EncodingOptionBag {
    }
    function encode(blob: Blob, options?: EncodingOptionBag): Promise<Uint8Array>;
    function encode(arraybuffer: ArrayBuffer, options?: EncodingOptionBag): Promise<Uint8Array>;
    function encodeAsBlob(blob: Blob, options?: EncodingOptionBag): Promise<Blob>;
    function encodeAsBlob(arraybuffer: ArrayBuffer, options?: EncodingOptionBag): Promise<Blob>;
    function encodeAsElement(blob: Blob, options?: EncodingOptionBag): Promise<HTMLImageElement>;
    function encodeAsElement(arraybuffer: ArrayBuffer, options?: EncodingOptionBag): Promise<HTMLImageElement>;
}
declare module EmscriptenUtility {
    interface AllocatedArray {
        content: any[];
        pointer: number;
    }
    function allocateStringArray(input: string[]): AllocatedArray;
    function deleteStringArray(input: AllocatedArray): void;
}
declare module EmscriptenUtility.FileSystem {
    function writeBlob(path: string, blob: Blob): Promise<void>;
    function synchronize(populate: boolean): Promise<void>;
}
