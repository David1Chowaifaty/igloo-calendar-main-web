'use strict';

require('./IBooking-BtFRLVyo.js');
var index = require('./index-CLqkDPTC.js');
require('./locales.store-v9LoZcAK.js');

// ---------------------------------------------------------------------------
// Get_Distinct_Setup_Tables
// ---------------------------------------------------------------------------
// The API has been observed to return either plain table-name strings or row
// objects carrying a TBL_NAME field — normalized to string[] in the service.
const DistinctSetupTableSchema = index.libExports.union([index.libExports.string(), index.libExports.object({ TBL_NAME: index.libExports.string() }).passthrough()]);
const DistinctSetupTablesResponseSchema = index.libExports.array(DistinctSetupTableSchema);
// ---------------------------------------------------------------------------
// Get_SetupEntry_By_Code
// ---------------------------------------------------------------------------
const GetSetupEntryByCodeParamsSchema = index.libExports.object({
    TBL_NAME: index.libExports.string().min(1),
    CODE_NAME: index.libExports.string().min(1),
});
// ---------------------------------------------------------------------------
// Edit_Setup
// ---------------------------------------------------------------------------
const EditSetupParamsSchema = index.libExports.object({
    // OWNER_ID: z.number(),
    TBL_NAME: index.libExports.string().min(1),
    CODE_NAME: index.libExports.string().min(1),
    // Administrative flags — default to a normal, fully-editable custom entry so
    // callers only need to override them when round-tripping an existing row's flags.
    ISSYSTEM: index.libExports.boolean().default(false),
    ISDELETEABLE: index.libExports.boolean().default(true),
    ISUPDATEABLE: index.libExports.boolean().default(true),
    ISVISIBLE: index.libExports.boolean().default(true),
    ISDELETED: index.libExports.boolean().default(false),
    DISPLAY_ORDER: index.libExports.number().optional().default(0),
    CODE_VALUE_EN: index.libExports.string().default(''),
    CODE_VALUE_FR: index.libExports.string().default(''),
    CODE_VALUE_AR: index.libExports.string().default(''),
    CODE_VALUE_RU: index.libExports.string().default(''),
    CODE_VALUE_EL: index.libExports.string().default(''),
    CODE_VALUE_HE: index.libExports.string().default(''),
    CODE_VALUE_PL: index.libExports.string().default(''),
    CODE_VALUE_DE: index.libExports.string().default(''),
    CODE_VALUE_UA: index.libExports.string().default(''),
    ENTRY_DATE: index.libExports.string(),
    // ENTRY_USER_ID: z.number().optional(),
    NOTES: index.libExports.string().default(''),
    INVARIANT_VALUE: index.libExports.string().nullable().default(null),
});
const EditSetupManyParamsSchema = index.libExports.array(EditSetupParamsSchema);
const ZExposedLanguageSchema = index.libExports.object({
    code: index.libExports.string(),
    culture: index.libExports.string(),
    description: index.libExports.string(),
    direction: index.libExports.string(),
    entries: index.libExports.null(),
    flag: index.libExports.string(),
    id: index.libExports.number(),
});
const ZExposedLanguagesSchema = index.libExports.array(ZExposedLanguageSchema);
/* -------------------------------------------------------------------------- */
/*                              Move Setup Entry                              */
/* -------------------------------------------------------------------------- */
const MoveSetupEntryParamsSchema = index.libExports.object({
    old_tbl_name: index.libExports.string(),
    code_name: index.libExports.string(),
    new_tbl_name: index.libExports.string(),
});
/* -------------------------------------------------------------------------- */
/*                              Move Setup Entry                              */
/* -------------------------------------------------------------------------- */
const MissingSetupEntriesParamsSchema = index.libExports.object({
    language: index.libExports.string(),
});
/* -------------------------------------------------------------------------- */
/*                       Search Setup By Description                          */
/* -------------------------------------------------------------------------- */
const ZSearchSetupByDescriptionParamsSchema = index.libExports.object({
    query: index.libExports.string(),
});
const ZEntrySchema = index.libExports.object({
    CODE_NAME: index.libExports.string(),
    TBL_NAME: index.libExports.string(),
});
index.libExports.object({
    DESCRIPTION: index.libExports.string(),
    ENTRIES: index.libExports.array(ZEntrySchema),
    OCCURRENCES: index.libExports.number(),
});

/** Maps a supported language code to its `CODE_VALUE_*` column on {@link IEntries}. */
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
 * @param entry - The `IEntries` object to translate.
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
exports.groupEntryTablesResult = groupEntryTablesResult;
exports.toSetupEntries = toSetupEntries;
