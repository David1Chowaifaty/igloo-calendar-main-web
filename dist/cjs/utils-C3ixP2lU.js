'use strict';

require('./IBooking-hDE_y33g.js');
var commonSchemas = require('./commonSchemas-D4iFLV5-.js');
var types = require('./types-BVJQZ50e.js');
var locales_store = require('./locales.store-BMTss6fG.js');

// ---------------------------------------------------------------------------
// Get_Distinct_Setup_Tables
// ---------------------------------------------------------------------------
// The API has been observed to return either plain table-name strings or row
// objects carrying a TBL_NAME field — normalized to string[] in the service.
const DistinctSetupTableSchema = types.unionType([types.stringType(), types.objectType({ TBL_NAME: types.stringType() }).passthrough()]);
const DistinctSetupTablesResponseSchema = types.arrayType(DistinctSetupTableSchema);
// ---------------------------------------------------------------------------
// Get_SetupEntry_By_Code
// ---------------------------------------------------------------------------
const GetSetupEntryByCodeParamsSchema = types.objectType({
    TBL_NAME: types.stringType().min(1),
    CODE_NAME: types.stringType().min(1),
});
// ---------------------------------------------------------------------------
// Edit_Setup
// ---------------------------------------------------------------------------
const EditSetupParamsSchema = types.objectType({
    // OWNER_ID: z.number(),
    TBL_NAME: types.stringType().min(1),
    CODE_NAME: types.stringType().min(1),
    // Administrative flags — default to a normal, fully-editable custom entry so
    // callers only need to override them when round-tripping an existing row's flags.
    ISSYSTEM: types.booleanType().default(false),
    ISDELETEABLE: types.booleanType().default(true),
    ISUPDATEABLE: types.booleanType().default(true),
    ISVISIBLE: types.booleanType().default(true),
    ISDELETED: types.booleanType().default(false),
    DISPLAY_ORDER: types.numberType().optional().default(0),
    CODE_VALUE_EN: types.stringType().default(''),
    CODE_VALUE_FR: types.stringType().default(''),
    CODE_VALUE_AR: types.stringType().default(''),
    CODE_VALUE_RU: types.stringType().default(''),
    CODE_VALUE_EL: types.stringType().default(''),
    CODE_VALUE_HE: types.stringType().default(''),
    CODE_VALUE_PL: types.stringType().default(''),
    CODE_VALUE_DE: types.stringType().default(''),
    CODE_VALUE_UA: types.stringType().default(''),
    ENTRY_DATE: types.stringType(),
    // ENTRY_USER_ID: z.number().optional(),
    NOTES: types.stringType().default(''),
    INVARIANT_VALUE: types.stringType().nullable().default(null),
});
const EditSetupManyParamsSchema = types.arrayType(EditSetupParamsSchema);
const ZExposedLanguageSchema = types.objectType({
    code: types.stringType(),
    culture: types.stringType(),
    description: types.stringType(),
    direction: types.stringType(),
    entries: types.nullType(),
    flag: types.stringType(),
    id: types.numberType(),
});
const ZExposedLanguagesSchema = types.arrayType(ZExposedLanguageSchema);
/* -------------------------------------------------------------------------- */
/*                              Move Setup Entry                              */
/* -------------------------------------------------------------------------- */
const MoveSetupEntryParamsSchema = types.objectType({
    old_tbl_name: types.stringType(),
    code_name: types.stringType(),
    new_tbl_name: types.stringType(),
});
/* -------------------------------------------------------------------------- */
/*                              Move Setup Entry                              */
/* -------------------------------------------------------------------------- */
const MissingSetupEntriesParamsSchema = commonSchemas.LanguageSchema;
/* -------------------------------------------------------------------------- */
/*                       Search Setup By Description                          */
/* -------------------------------------------------------------------------- */
const ZSearchSetupByDescriptionParamsSchema = types.objectType({
    query: types.stringType(),
});
const ZEntrySchema = types.objectType({
    CODE_NAME: types.stringType(),
    TBL_NAME: types.stringType(),
});
types.objectType({
    DESCRIPTION: types.stringType(),
    ENTRIES: types.arrayType(ZEntrySchema),
    OCCURRENCES: types.numberType(),
});

/** Maps a supported language code to its `CODE_VALUE_*` column on {@link SetupEntries}. */
const LANGUAGE_KEY_MAP = {
    en: 'CODE_VALUE_EN',
    ar: 'CODE_VALUE_AR',
    de: 'CODE_VALUE_DE',
    el: 'CODE_VALUE_EL',
    fr: 'CODE_VALUE_FR',
    he: 'CODE_VALUE_HE',
    pl: 'CODE_VALUE_PL',
    ru: 'CODE_VALUE_RU',
    ua: 'CODE_VALUE_UA',
};
/**
 * Normalises any raw language string — a `@Prop() language`, `<html lang>`, the
 * `locales.language` store value — to a supported {@link EntryLanguage}. Case is
 * ignored; anything unrecognised falls back to `'en'`.
 */
function toEntryLanguage(language) {
    const normalized = (language ?? '').toLowerCase();
    return normalized in LANGUAGE_KEY_MAP ? normalized : 'en';
}
/**
 * Returns the localised display string for a setup entry.
 *
 * Resolution order:
 * 1. `CODE_VALUE_<language>` — if present and non-empty.
 * 2. `CODE_VALUE_EN` — English fallback.
 * 3. `CODE_NAME` — last-resort fallback when both are absent.
 *
 * @param entry - The `SetupEntries` object to translate.
 * @param language - Language code, any case (e.g. `"fr"`, `"AR"`). Defaults to `"en"`.
 *
 * @example
 * const label = getEntryValue({ entry: someEntry, language: 'fr' });
 * // → "Petit-déjeuner" (falls back to "Breakfast" if French is null)
 */
function getEntryValue({ entry, language = 'en' }) {
    const key = LANGUAGE_KEY_MAP[toEntryLanguage(language)];
    const localised = entry[key];
    if (localised)
        return localised;
    const english = entry['CODE_VALUE_EN'];
    if (english)
        return english;
    return entry.CODE_NAME;
}
/**
 * The localised label for a setup entry in the **currently selected UI language**.
 *
 * When `language` is omitted it reads `locales.language` (the `@stencil/store`
 * value kept in sync with `<html lang>` by `ir-locale-switcher`). Because it
 * reads a store-proxied value, calling this in a component `render()` makes the
 * component re-render automatically when the user switches language.
 */
function getSetupEntryLabel(entry, language) {
    return getEntryValue({ entry, language: language ?? locales_store.locales.language });
}
/**
 * Groups a flat setup-entry list by table. The key is the lower-cased `TBL_NAME`
 * with its leading underscore stripped (`_PAY_TYPE` -> `pay_type`). Null-safe:
 * entries without a `TBL_NAME` are skipped, and names without a leading `_` are
 * tolerated.
 */
function groupEntryTablesResult(entries) {
    const result = {};
    for (const entry of entries) {
        if (!entry.TBL_NAME) {
            continue;
        }
        const key = entry.TBL_NAME.startsWith('_') ? entry.TBL_NAME.substring(1).toLowerCase() : entry.TBL_NAME.toLowerCase();
        if (!result[key]) {
            result[key] = [];
        }
        result[key] = [...result[key], entry];
    }
    return result;
}
/**
 * Maps the arrival-time / rate-pricing-mode / bed-preference groups of a
 * {@link groupEntryTablesResult} output to the {@link ISetupEntries} shape the
 * booking editors consume.
 */
function toSetupEntries(grouped) {
    return {
        arrivalTime: grouped.arrival_time,
        ratePricingMode: grouped.rate_pricing_mode,
        bedPreferenceType: grouped.bed_preference_type,
    };
}

exports.DistinctSetupTablesResponseSchema = DistinctSetupTablesResponseSchema;
exports.EditSetupManyParamsSchema = EditSetupManyParamsSchema;
exports.EditSetupParamsSchema = EditSetupParamsSchema;
exports.GetSetupEntryByCodeParamsSchema = GetSetupEntryByCodeParamsSchema;
exports.MissingSetupEntriesParamsSchema = MissingSetupEntriesParamsSchema;
exports.MoveSetupEntryParamsSchema = MoveSetupEntryParamsSchema;
exports.ZExposedLanguagesSchema = ZExposedLanguagesSchema;
exports.ZSearchSetupByDescriptionParamsSchema = ZSearchSetupByDescriptionParamsSchema;
exports.getEntryValue = getEntryValue;
exports.getSetupEntryLabel = getSetupEntryLabel;
exports.groupEntryTablesResult = groupEntryTablesResult;
exports.toSetupEntries = toSetupEntries;
