/**
 * A small utility for reading and writing browser history
 * and manipulating URL search params in a type-safe way.
 */
type Parser<T> = (value: string | null) => T;
export declare const ParamTypes: {
    readonly string: {
        readonly parse: (v: string | null) => string;
        readonly serialize: (v: string) => string;
    };
    readonly number: {
        readonly parse: (v: string | null) => number;
        readonly serialize: (v: number) => string;
    };
    readonly boolean: {
        readonly parse: (v: string | null) => boolean;
        readonly serialize: (v: boolean) => string;
    };
};
/**
 * Read a single search‑param, parse it, and return a typed value.
 * Falls back to defaultValue if missing or parse fails.
 */
export declare function getParam<T>(key: string, { parse }: {
    parse: Parser<T>;
}, defaultValue: T): T;
/** Helpers for the three built‑in types */
export declare function getStringParam(key: string, defaultValue?: string): string;
export declare function getNumberParam(key: string, defaultValue?: number): number;
export declare function getBooleanParam(key: string, defaultValue?: boolean): boolean;
/**
 * Read all current search params into a Record<string, string>
 */
export declare function getAllParams(): Record<string, string>;
interface SetParamsOptions {
    /** if true, uses replaceState instead of pushState */
    replace?: boolean;
}
/**
 * Update one or more search params.
 * Pass null to delete a param.
 * By default uses history.pushState; set replace: true to call replaceState.
 */
export declare function setParams(updates: Record<string, string | number | boolean | null>, options?: SetParamsOptions): void;
/**
 * Push a new history entry.
 * `path` may include search or hash.
 * `state` is the history state object.
 */
export declare function pushHistory(path: string, state?: any): void;
/**
 * Replace the current history entry.
 * `path` may include search or hash.
 * `state` is the history state object.
 */
export declare function replaceHistory(path: string, state?: any): void;
export {};
