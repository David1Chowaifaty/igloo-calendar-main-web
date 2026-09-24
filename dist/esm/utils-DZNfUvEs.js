import './IBooking-BEkHqAPo.js';
import { u as unionType, s as stringType, o as objectType, d as arrayType, n as numberType, b as booleanType, f as nullType } from './types-BWKgfE54.js';
import { l as locales } from './locales.store-CXJn6ls-.js';

// ---------------------------------------------------------------------------
// Get_Distinct_Setup_Tables
// ---------------------------------------------------------------------------
// The API has been observed to return either plain table-name strings or row
// objects carrying a TBL_NAME field — normalized to string[] in the service.
const DistinctSetupTableSchema = unionType([stringType(), objectType({ TBL_NAME: stringType() }).passthrough()]);
const DistinctSetupTablesResponseSchema = arrayType(DistinctSetupTableSchema);
// ---------------------------------------------------------------------------
// Get_SetupEntry_By_Code
// ---------------------------------------------------------------------------
const GetSetupEntryByCodeParamsSchema = objectType({
    TBL_NAME: stringType().min(1),
    CODE_NAME: stringType().min(1),
});
// ---------------------------------------------------------------------------
// Edit_Setup
// ---------------------------------------------------------------------------
const EditSetupParamsSchema = objectType({
    // OWNER_ID: z.number(),
    TBL_NAME: stringType().min(1),
    CODE_NAME: stringType().min(1),
    // Administrative flags — default to a normal, fully-editable custom entry so
    // callers only need to override them when round-tripping an existing row's flags.
    ISSYSTEM: booleanType().default(false),
    ISDELETEABLE: booleanType().default(true),
    ISUPDATEABLE: booleanType().default(true),
    ISVISIBLE: booleanType().default(true),
    ISDELETED: booleanType().default(false),
    DISPLAY_ORDER: numberType().optional().default(0),
    CODE_VALUE_EN: stringType().default(''),
    CODE_VALUE_FR: stringType().default(''),
    CODE_VALUE_AR: stringType().default(''),
    CODE_VALUE_RU: stringType().default(''),
    CODE_VALUE_EL: stringType().default(''),
    CODE_VALUE_HE: stringType().default(''),
    CODE_VALUE_PL: stringType().default(''),
    CODE_VALUE_DE: stringType().default(''),
    CODE_VALUE_UA: stringType().default(''),
    ENTRY_DATE: stringType(),
    // ENTRY_USER_ID: z.number().optional(),
    NOTES: stringType().default(''),
    INVARIANT_VALUE: stringType().nullable().default(null),
});
const EditSetupManyParamsSchema = arrayType(EditSetupParamsSchema);
const ZExposedLanguageSchema = objectType({
    code: stringType(),
    culture: stringType(),
    description: stringType(),
    direction: stringType(),
    entries: nullType(),
    flag: stringType(),
    id: numberType(),
});
const ZExposedLanguagesSchema = arrayType(ZExposedLanguageSchema);
/* -------------------------------------------------------------------------- */
/*                              Move Setup Entry                              */
/* -------------------------------------------------------------------------- */
const MoveSetupEntryParamsSchema = objectType({
    old_tbl_name: stringType(),
    code_name: stringType(),
    new_tbl_name: stringType(),
});
/* -------------------------------------------------------------------------- */
/*                              Move Setup Entry                              */
/* -------------------------------------------------------------------------- */
const MissingSetupEntriesParamsSchema = objectType({
    language: stringType(),
});
/* -------------------------------------------------------------------------- */
/*                       Search Setup By Description                          */
/* -------------------------------------------------------------------------- */
const ZSearchSetupByDescriptionParamsSchema = objectType({
    query: stringType(),
});
const ZEntrySchema = objectType({
    CODE_NAME: stringType(),
    TBL_NAME: stringType(),
});
objectType({
    DESCRIPTION: stringType(),
    ENTRIES: arrayType(ZEntrySchema),
    OCCURRENCES: numberType(),
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
    return getEntryValue({ entry, language: language ?? locales.language });
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

export { DistinctSetupTablesResponseSchema as D, EditSetupParamsSchema as E, GetSetupEntryByCodeParamsSchema as G, MissingSetupEntriesParamsSchema as M, ZExposedLanguagesSchema as Z, EditSetupManyParamsSchema as a, MoveSetupEntryParamsSchema as b, ZSearchSetupByDescriptionParamsSchema as c, getSetupEntryLabel as d, getEntryValue as e, groupEntryTablesResult as g, toSetupEntries as t };
