import { a as axios } from './axios-B50ozOIF.js';
import { l as libExports } from './index-DeW5X45W.js';
import { Z as ZIEntrySchema } from './IBooking-xt_aVEnI.js';
import { h as hooks } from './moment-Mki5YqAR.js';

// ---------------------------------------------------------------------------
// Get_Setup_Entries_By_TBL_NAME
// ---------------------------------------------------------------------------
const GetSetupEntriesByTblNameParamsSchema = libExports.object({
    TBL_NAME: libExports.string().min(1),
});
// ---------------------------------------------------------------------------
// Get_Setup_Entries_By_TBL_NAME_Multi
// ---------------------------------------------------------------------------
const GetSetupEntriesByTblNameMultiParamsSchema = libExports.object({
    TBL_NAMES: libExports.array(libExports.string().min(1)),
});
// ---------------------------------------------------------------------------
// Get_Distinct_Setup_Tables
// ---------------------------------------------------------------------------
// The API has been observed to return either plain table-name strings or row
// objects carrying a TBL_NAME field — normalized to string[] in the service.
const DistinctSetupTableSchema = libExports.union([libExports.string(), libExports.object({ TBL_NAME: libExports.string() }).passthrough()]);
const DistinctSetupTablesResponseSchema = libExports.array(DistinctSetupTableSchema);
// ---------------------------------------------------------------------------
// Get_SetupEntry_By_Code
// ---------------------------------------------------------------------------
const GetSetupEntryByCodeParamsSchema = libExports.object({
    TBL_NAME: libExports.string().min(1),
    CODE_NAME: libExports.string().min(1),
});
// ---------------------------------------------------------------------------
// Edit_Setup
// ---------------------------------------------------------------------------
const EditSetupParamsSchema = libExports.object({
    // OWNER_ID: z.number(),
    TBL_NAME: libExports.string().min(1),
    CODE_NAME: libExports.string().min(1),
    // Administrative flags — default to a normal, fully-editable custom entry so
    // callers only need to override them when round-tripping an existing row's flags.
    ISSYSTEM: libExports.boolean().default(false),
    ISDELETEABLE: libExports.boolean().default(true),
    ISUPDATEABLE: libExports.boolean().default(true),
    ISVISIBLE: libExports.boolean().default(true),
    ISDELETED: libExports.boolean().default(false),
    DISPLAY_ORDER: libExports.number().optional().default(0),
    CODE_VALUE_EN: libExports.string().default(''),
    CODE_VALUE_FR: libExports.string().default(''),
    CODE_VALUE_AR: libExports.string().default(''),
    CODE_VALUE_RU: libExports.string().default(''),
    CODE_VALUE_EL: libExports.string().default(''),
    CODE_VALUE_HE: libExports.string().default(''),
    CODE_VALUE_PL: libExports.string().default(''),
    CODE_VALUE_DE: libExports.string().default(''),
    CODE_VALUE_UA: libExports.string().default(''),
    ENTRY_DATE: libExports.string(),
    // ENTRY_USER_ID: z.number().optional(),
    NOTES: libExports.string().default(''),
    INVARIANT_VALUE: libExports.string().nullable().default(null),
});
const EditSetupManyParamsSchema = libExports.array(EditSetupParamsSchema);
const ZExposedLanguageSchema = libExports.object({
    code: libExports.string(),
    culture: libExports.string(),
    description: libExports.string(),
    direction: libExports.string(),
    entries: libExports.null(),
    flag: libExports.string(),
    id: libExports.number(),
});
const ZExposedLanguagesSchema = libExports.array(ZExposedLanguageSchema);

class SetupService {
    /**
     * All entries belonging to a single setup table (e.g. one translation table).
     */
    async getSetupEntriesByTblName(params) {
        const payload = GetSetupEntriesByTblNameParamsSchema.parse(params);
        const { data } = await axios.post('/Get_Setup_Entries_By_TBL_NAME', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return libExports.array(ZIEntrySchema).parse(data.My_Result ?? []);
    }
    /**
     * Entries across several setup tables in a single round trip — used to load
     * every translation table's rows at once instead of one request per table.
     */
    async getSetupEntriesByTblNameMulti(params) {
        const payload = GetSetupEntriesByTblNameMultiParamsSchema.parse(params);
        const { data } = await axios.post('/Get_Setup_Entries_By_TBL_NAME_Multi', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return libExports.array(ZIEntrySchema).parse(data.My_Result ?? []);
    }
    /**
     * Every distinct TBL_NAME that currently has at least one setup entry.
     * Normalizes the response to plain strings regardless of whether the API
     * returns bare names or row objects carrying a TBL_NAME field.
     */
    async getDistinctSetupTables() {
        const { data } = await axios.post('/Get_Distinct_Setup_Tables', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const rows = DistinctSetupTablesResponseSchema.parse(data.My_Result ?? []);
        return rows.map(row => (typeof row === 'string' ? row : row.TBL_NAME));
    }
    /**
     * A single entry by its natural key (table + code). Returns null when no
     * matching row exists.
     */
    async getSetupEntryByCode(params) {
        const payload = GetSetupEntryByCodeParamsSchema.parse(params);
        const { data } = await axios.post('/Get_SetupEntry_By_Code', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result ? ZIEntrySchema.parse(data.My_Result) : null;
    }
    /**
     * Creates or updates a setup entry. There is no separate delete endpoint —
     * soft-delete a row by resubmitting it with `ISDELETED: true`.
     */
    async editSetup(params) {
        const payload = EditSetupParamsSchema.parse(params);
        const { data } = await axios.post('/Edit_Setup', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return payload;
    }
    /**
     * Creates or updates a setup entry in bulk. There is no separate delete endpoint —
     * soft-delete a row by resubmitting it with `ISDELETED: true`.
     */
    async editSetupMany(params) {
        const payload = EditSetupManyParamsSchema.parse(params);
        const { data } = await axios.post('/Edit_Setup_Many', { list_setup_entries: payload });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return payload;
    }
    /**
     * Fetches the exposed languages available to the engine.
     *
     * @returns A validated list of languages including code, culture, name,
     * text direction, flag URL, and identifier.
     * @throws If the API returns an exception or the response fails validation.
     */
    async getExposedLanguages() {
        const { data } = await axios.post('https://gateway.igloorooms.com/IRBE/Get_Exposed_Languages', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return ZExposedLanguagesSchema.parse(data.My_Result);
    }
}

/**
 * Setup only has a fixed set of CODE_VALUE_* columns, so the manager cannot
 * offer arbitrary languages the way a purely local prototype could — every
 * language shown must map to one of these codes to be persisted.
 */
const SETUP_LANGUAGE_CODES = ['en', 'fr', 'ar', 'ru', 'el', 'he', 'pl', 'de', 'ua'];
function isSetupLanguageCode(code) {
    return SETUP_LANGUAGE_CODES.includes(code);
}
/**
 * Which languages this property actually wants translated, and their display
 * names, come from Get_Exposed_Languages — narrowed to the codes Setup can
 * actually persist, since a property may expose a language with no matching
 * CODE_VALUE_* column.
 */
function exposedLanguagesToTranslationLanguages(exposed) {
    return exposed
        .map(language => ({ code: language.code.toLowerCase(), name: language.description }))
        .filter((language) => isSetupLanguageCode(language.code))
        .map(language => ({ ...language, isSource: language.code === 'en' }));
}
function readSetupValue(entry, code) {
    switch (code) {
        case 'en':
            return entry.CODE_VALUE_EN ?? '';
        case 'fr':
            return entry.CODE_VALUE_FR ?? '';
        case 'ar':
            return entry.CODE_VALUE_AR ?? '';
        case 'ru':
            return entry.CODE_VALUE_RU ?? '';
        case 'el':
            return entry.CODE_VALUE_EL ?? '';
        case 'he':
            return entry.CODE_VALUE_HE ?? '';
        case 'pl':
            return entry.CODE_VALUE_PL ?? '';
        case 'de':
            return entry.CODE_VALUE_DE ?? '';
        case 'ua':
            return entry.CODE_VALUE_UA ?? '';
    }
}
/** CODE_NAME is unique within a table, so it doubles as a stable local id. */
function setupEntryToTranslationEntry(entry) {
    const values = {};
    for (const code of SETUP_LANGUAGE_CODES) {
        values[code] = readSetupValue(entry, code);
    }
    return {
        id: entry.CODE_NAME,
        key: entry.CODE_NAME,
        values,
        meta: {
            ownerId: entry.OWNER_ID ?? 0,
            isSystem: entry.ISSYSTEM,
            isDeleteable: entry.ISDELETEABLE,
            isUpdateable: entry.ISUPDATEABLE,
            isVisible: entry.ISVISIBLE,
            isDeleted: entry.ISDELETED,
            displayOrder: entry.DISPLAY_ORDER ?? 0,
            notes: entry.NOTES ?? '',
            invariantValue: entry.INVARIANT_VALUE,
            entryDate: entry.ENTRY_DATE,
        },
    };
}
/**
 * Builds a full Edit_Setup payload for creating or updating one entry.
 * Administrative flags fall back to "normal, fully-editable custom entry"
 * defaults when `meta` is absent (i.e. the entry is being created).
 */
function buildEditSetupParams(input) {
    const { meta } = input;
    return {
        // OWNER_ID: meta?.ownerId ?? input.ownerId,
        TBL_NAME: input.tableName,
        CODE_NAME: input.key,
        ISSYSTEM: meta?.isSystem ?? false,
        ISDELETEABLE: meta?.isDeleteable ?? true,
        ISUPDATEABLE: meta?.isUpdateable ?? true,
        ISVISIBLE: meta?.isVisible ?? true,
        ISDELETED: input.isDeleted ?? false,
        DISPLAY_ORDER: input.displayOrder ?? meta?.displayOrder ?? 0,
        CODE_VALUE_EN: input.values.en ?? '',
        CODE_VALUE_FR: input.values.fr ?? '',
        CODE_VALUE_AR: input.values.ar ?? '',
        CODE_VALUE_RU: input.values.ru ?? '',
        CODE_VALUE_EL: input.values.el ?? '',
        CODE_VALUE_HE: input.values.he ?? '',
        CODE_VALUE_PL: input.values.pl ?? '',
        CODE_VALUE_DE: input.values.de ?? '',
        CODE_VALUE_UA: input.values.ua ?? '',
        ENTRY_DATE: input.touch || !meta?.entryDate ? hooks().toISOString() : meta.entryDate,
        // ENTRY_USER_ID: input.entryUserId,
        NOTES: meta?.notes ?? '',
        INVARIANT_VALUE: meta?.invariantValue ?? null,
    };
}

export { SetupService as S, buildEditSetupParams as b, exposedLanguagesToTranslationLanguages as e, setupEntryToTranslationEntry as s };
