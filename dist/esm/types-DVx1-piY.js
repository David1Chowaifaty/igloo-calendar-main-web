import { o as objectType, s as stringType, d as arrayType } from './types-CB66a07H.js';

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
const LEGACY_LOCALE_TABLES = ['_PMS_FRONT', '_USER_MGT', '_BOOKING_LIST_FRONT', '_HK_FRONT', '_CHANNEL_FRONT', '_PAYMENT_BACK'];
/** Whether a response row's `table_name` is one of {@link LEGACY_LOCALE_TABLES}. Rows without one count as catalog rows. */
function isLegacyTable(table) {
    return !!table && LEGACY_LOCALE_TABLES.includes(table);
}
/** One row of `My_Result.entries` — the key/value pair for a single string. */
const LocaleEntryRowSchema = objectType({
    code: stringType(),
    description: stringType().nullable().default(''),
    table_name: stringType().nullable().optional(),
});
/** `My_Result` of `Get_Exposed_Language`. */
const ExposedLanguageResultSchema = objectType({
    entries: arrayType(LocaleEntryRowSchema).nullable().default([]),
    direction: stringType().nullable().default('LTR'),
});

export { ExposedLanguageResultSchema as E, isLegacyTable as i };
