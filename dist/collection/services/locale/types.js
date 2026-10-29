import * as z from "zod";
/**
 * The setup tables `Get_Exposed_Language` can be asked for.
 *
 * These are exactly the types intersected into {@link TLocaleEntries} in
 * `src/stores/locales.store.ts` — keep the two lists in sync, otherwise a table
 * can be fetched whose keys are not declared on {@link LocaleKey}.
 */
export const LOCALE_TABLES = [
    '_PMS_FRONT',
    '_USER_MGT',
    '_BOOKING_LIST_FRONT',
    '_HK_FRONT',
    '_CHANNEL_FRONT',
    '_PAYMENT_BACK',
    '_COMMON',
    '_FINANCIALS',
    '_BOOKING',
    '_CALENDAR',
    '_FRONTDESK',
    '_HOUSEKEEPING',
    '_AGENTS',
    '_REPORTS',
    '_SETTINGS',
    '_GUESTS',
    '_AUTH',
    '_PMS',
];
/**
 * The backend tables `Get_Exposed_Language` served before the label catalog
 * (`lcz-labels.json`) existed — the six in `legacy-locale-keys.json`.
 *
 * Most of them were never translated in Setup: `_USER_MGT` answers `fr` and `ar`
 * with its English text. Many of their keys were later re-declared in a catalog
 * table (`Lcz_Email` in `_COMMON`, `Lcz_EditUser` in `_SETTINGS`, …) that *is*
 * translated, so a legacy value must never replace a catalog one — otherwise the
 * last table in the response, or the last screen to load, decides the language.
 */
export const LEGACY_LOCALE_TABLES = ['_PMS_FRONT', '_USER_MGT', '_BOOKING_LIST_FRONT', '_HK_FRONT', '_CHANNEL_FRONT', '_PAYMENT_BACK'];
/** Whether a response row's `table_name` is one of {@link LEGACY_LOCALE_TABLES}. Rows without one count as catalog rows. */
export function isLegacyTable(table) {
    return !!table && LEGACY_LOCALE_TABLES.includes(table);
}
/** One row of `My_Result.entries` — the key/value pair for a single string. */
export const LocaleEntryRowSchema = z.object({
    code: z.string(),
    description: z.string().nullable().default(''),
    table_name: z.string().nullable().optional(),
});
/** `My_Result` of `Get_Exposed_Language`. */
export const ExposedLanguageResultSchema = z.object({
    entries: z.array(LocaleEntryRowSchema).nullable().default([]),
    direction: z.string().nullable().default('LTR'),
});
