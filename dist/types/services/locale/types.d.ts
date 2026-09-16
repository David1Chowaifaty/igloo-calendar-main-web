import * as z from 'zod';
import type { TLocaleEntries } from "../../stores/locales.store";
/**
 * The setup tables `Get_Exposed_Language` can be asked for.
 *
 * These are exactly the types intersected into {@link TLocaleEntries} in
 * `src/stores/locales.store.ts` — keep the two lists in sync, otherwise a table
 * can be fetched whose keys are not declared on {@link LocaleKey}.
 */
export declare const LOCALE_TABLES: readonly ["_PMS_FRONT", "_USER_MGT", "_BOOKING_LIST_FRONT", "_HK_FRONT", "_CHANNEL_FRONT", "_PAYMENT_BACK", "_COMMON", "_FINANCIALS", "_BOOKING", "_CALENDAR", "_FRONTDESK", "_HOUSEKEEPING", "_AGENTS", "_REPORTS", "_SETTINGS", "_GUESTS", "_AUTH", "_PMS"];
export type LocaleTable = (typeof LOCALE_TABLES)[number];
/**
 * The `sections` payload. `LocaleController` builds it by merging its base set
 * with whatever the screen asked for, so it is never empty — but it is often a
 * single table (`['_PMS_FRONT']`), which the endpoint has always accepted.
 */
export type LocaleSections = readonly LocaleTable[];
/** Every `Lcz_*` key the store declares. Gives `t()` autocomplete and typo errors. */
export type LocaleKey = keyof NonNullable<TLocaleEntries>;
export type TranslateOptions = {
    /** Positional values for the API's `%1`, `%2`, … placeholders. */
    params?: ReadonlyArray<string | number>;
    /** Rendered when the key is missing. Defaults to the key itself. */
    fallback?: string;
};
export type LoadLocaleParams = {
    /** Falls back to the loaded language, then `<html lang>`, then `'en'`. */
    language?: string;
    /** Extra tables on top of `LocaleController.BASE_TABLES` — use a `SCREEN_TABLES` entry. */
    tables?: readonly LocaleTable[];
    /** Refetch even when every requested table is already loaded. */
    force?: boolean;
};
/** One row of `My_Result.entries` — the key/value pair for a single string. */
export declare const LocaleEntryRowSchema: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: string;
}, {
    code?: string;
    description?: string;
}>;
export type LocaleEntryRow = z.infer<typeof LocaleEntryRowSchema>;
/** `My_Result` of `Get_Exposed_Language`. */
export declare const ExposedLanguageResultSchema: z.ZodObject<{
    entries: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>, "many">>>;
    direction: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    entries?: {
        code?: string;
        description?: string;
    }[];
    direction?: string;
}, {
    entries?: {
        code?: string;
        description?: string;
    }[];
    direction?: string;
}>;
export type ExposedLanguageResult = z.infer<typeof ExposedLanguageResultSchema>;
/** What {@link LocaleService.getExposedLanguage} hands back, normalized. */
export type LocaleBundle = {
    entries: Record<string, string>;
    direction: 'ltr' | 'rtl';
};
