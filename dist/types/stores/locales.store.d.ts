export interface ILocale {
    entries: TLocaleEntries;
    direction: 'ltr' | 'rtl';
    /** Selected language; `null` until a screen root seeds it via `LocaleController.load`. */
    language: string | null;
    /**
     * Setup tables whose strings are currently in `entries`. Written by
     * `LocaleController`; typed as plain strings to keep this store free of a
     * `stores -> services` import.
     */
    loadedTables: string[];
    status: 'idle' | 'loading' | 'ready' | 'error';
}
export type TLocaleEntries = Record<string, string>;
export declare const locales: ILocale, onCalendarDatesChange: import("@stencil/store/dist/types").OnChangeHandler<ILocale>;
export default locales;
