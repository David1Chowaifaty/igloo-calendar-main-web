import type { EditSetupParams, ExposedLanguages, SetupEntry } from "../../services/setup/types";
import { TranslationEntry, TranslationEntryMeta, TranslationLanguage } from './types';
/**
 * Setup only has a fixed set of CODE_VALUE_* columns, so the manager cannot
 * offer arbitrary languages the way a purely local prototype could — every
 * language shown must map to one of these codes to be persisted.
 */
export declare const SETUP_LANGUAGE_CODES: readonly ["en", "fr", "ar", "ru", "el", "he", "pl", "de", "ua"];
export type SetupLanguageCode = (typeof SETUP_LANGUAGE_CODES)[number];
export declare function isSetupLanguageCode(code: string): code is SetupLanguageCode;
/**
 * Which languages this property actually wants translated, and their display
 * names, come from Get_Exposed_Languages — narrowed to the codes Setup can
 * actually persist, since a property may expose a language with no matching
 * CODE_VALUE_* column.
 */
export declare function exposedLanguagesToTranslationLanguages(exposed: ExposedLanguages): TranslationLanguage[];
/**
 * CODE_NAME is unique within a table but not across tables, so the local id is
 * table-qualified — the cross-table "missing translations" view holds rows from
 * several tables in one list and would otherwise collide on shared codes.
 */
export declare function setupEntryToTranslationEntry(entry: SetupEntry): TranslationEntry;
/**
 * Builds a full Edit_Setup payload for creating or updating one entry.
 * Administrative flags fall back to "normal, fully-editable custom entry"
 * defaults when `meta` is absent (i.e. the entry is being created).
 */
export declare function buildEditSetupParams(input: {
    ownerId: number;
    entryUserId: number;
    tableName: string;
    key: string;
    values: Record<string, string>;
    meta?: TranslationEntryMeta;
    isDeleted?: boolean;
    /** True for a genuine content edit — stamps a fresh ENTRY_DATE. Omitted (e.g. reorder, bulk delete) preserves the entry's existing date. */
    touch?: boolean;
    /** Overrides DISPLAY_ORDER regardless of `meta` — used to place a brand-new row at the end of the table. */
    displayOrder?: number;
}): EditSetupParams;
