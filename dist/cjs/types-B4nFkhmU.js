'use strict';

var types = require('./types-BVJQZ50e.js');

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
const LocaleEntryRowSchema = types.objectType({
    code: types.stringType(),
    description: types.stringType().nullable().default(''),
    table_name: types.stringType().nullable().optional(),
});
/** `My_Result` of `Get_Exposed_Language`. */
const ExposedLanguageResultSchema = types.objectType({
    entries: types.arrayType(LocaleEntryRowSchema).nullable().default([]),
    direction: types.stringType().nullable().default('LTR'),
});

exports.ExposedLanguageResultSchema = ExposedLanguageResultSchema;
exports.isLegacyTable = isLegacyTable;
