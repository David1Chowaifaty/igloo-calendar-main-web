'use strict';

var axios = require('./axios-EresIryl.js');
var index = require('./index-CLqkDPTC.js');
var IBooking = require('./IBooking-BtFRLVyo.js');
var moment = require('./moment-CdViwxPQ.js');

// ---------------------------------------------------------------------------
// Get_Setup_Entries_By_TBL_NAME
// ---------------------------------------------------------------------------
const GetSetupEntriesByTblNameParamsSchema = index.libExports.object({
    TBL_NAME: index.libExports.string().min(1),
});
// ---------------------------------------------------------------------------
// Get_Setup_Entries_By_TBL_NAME_Multi
// ---------------------------------------------------------------------------
const GetSetupEntriesByTblNameMultiParamsSchema = index.libExports.object({
    TBL_NAMES: index.libExports.array(index.libExports.string().min(1)),
});
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

class SetupService {
    /**
     * All entries belonging to a single setup table (e.g. one translation table).
     */
    async getSetupEntriesByTblName(params) {
        const payload = GetSetupEntriesByTblNameParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_Setup_Entries_By_TBL_NAME', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return index.libExports.array(IBooking.ZIEntrySchema).parse(data.My_Result ?? []);
    }
    /**
     * Entries across several setup tables in a single round trip — used to load
     * every translation table's rows at once instead of one request per table.
     */
    async getSetupEntriesByTblNameMulti(params) {
        const payload = GetSetupEntriesByTblNameMultiParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_Setup_Entries_By_TBL_NAME_Multi', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return index.libExports.array(IBooking.ZIEntrySchema).parse(data.My_Result ?? []);
    }
    /**
     * Every distinct TBL_NAME that currently has at least one setup entry.
     * Normalizes the response to plain strings regardless of whether the API
     * returns bare names or row objects carrying a TBL_NAME field.
     */
    async getDistinctSetupTables() {
        const { data } = await axios.axios.post('/Get_Distinct_Setup_Tables', {});
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
        const { data } = await axios.axios.post('/Get_SetupEntry_By_Code', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result ? IBooking.ZIEntrySchema.parse(data.My_Result) : null;
    }
    /**
     * Creates or updates a setup entry. There is no separate delete endpoint —
     * soft-delete a row by resubmitting it with `ISDELETED: true`.
     */
    async editSetup(params) {
        const payload = EditSetupParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Edit_Setup', payload);
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
        const { data } = await axios.axios.post('/Edit_Setup_Many', { list_setup_entries: payload });
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
        const { data } = await axios.axios.post('https://gateway.igloorooms.com/IRBE/Get_Exposed_Languages', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return ZExposedLanguagesSchema.parse(data.My_Result);
    }
    /**
     * Fetches setup entries that are missing for the specified language.
     *
     * @param language Language code to check, e.g. "AR".
     * @returns A validated list of missing setup entries and their translated values.
     * @throws If the API returns an exception or the response fails validation.
     */
    async getMissingSetupEntries(params) {
        const payload = MissingSetupEntriesParamsSchema.parse(params);
        const { data } = await axios.axios.post(`/Get_Missing_Setup_Entries`, payload);
        if (data.ExceptionMsg) {
            throw new Error(data.ExceptionMsg);
        }
        return index.libExports.array(IBooking.ZIEntrySchema).parse(data.My_Result ?? []);
    }
    /**
     * Moves a setup entry from one setup table to another.
     *
     * The API throws a business exception when the requested code is already
     * being used by another table.
     *
     * @param params Source table, setup code, and destination table.
     * @throws If the API returns an exception or the request parameters fail validation.
     */
    async moveSetupEntry(params) {
        const payload = MoveSetupEntryParamsSchema.parse(params);
        const { data } = await axios.axios.post(`/Move_Setup_Entry`, payload);
        if (data.ExceptionMsg) {
            throw new Error(data.ExceptionMsg);
        }
    }
    /**
     * Searches setup entries by their description/value.
     *
     * @param query Text to search for in setup descriptions.
     * @returns A validated list of matching setup entries.
     * @throws If the API returns an exception or the response fails validation.
     */
    async searchSetupByDescription(params) {
        const payload = ZSearchSetupByDescriptionParamsSchema.parse(params);
        const { data } = await axios.axios.post(`/Search_Setup_By_Description`, payload);
        if (data.ExceptionMsg) {
            throw new Error(data.ExceptionMsg);
        }
        return index.libExports.array(IBooking.ZIEntrySchema).parse(data.My_Result ?? []);
    }
    /**
     * Fetches duplicated setup entries that exist across multiple setup tables.
     *
     * Each result contains the duplicated description, the number of occurrences,
     * and the setup entries/tables where that description is used.
     *
     * @returns A validated list of duplicated setup entries grouped by description.
     * @throws If the API returns an exception or the response fails validation.
     */
    async getDuplicatedSetupEntriesAcrossTables() {
        const { data } = await axios.axios.post(`/Get_Duplicated_Setup_Entries_Across_Tables`, {});
        if (data.ExceptionMsg) {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
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
/**
 * CODE_NAME is unique within a table but not across tables, so the local id is
 * table-qualified — the cross-table "missing translations" view holds rows from
 * several tables in one list and would otherwise collide on shared codes.
 */
function setupEntryToTranslationEntry(entry) {
    const values = {};
    for (const code of SETUP_LANGUAGE_CODES) {
        values[code] = readSetupValue(entry, code);
    }
    return {
        id: `${entry.TBL_NAME}::${entry.CODE_NAME}`,
        key: entry.CODE_NAME,
        tableName: entry.TBL_NAME,
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
        ENTRY_DATE: input.touch || !meta?.entryDate ? moment.hooks().toISOString() : meta.entryDate,
        // ENTRY_USER_ID: input.entryUserId,
        NOTES: meta?.notes ?? '',
        INVARIANT_VALUE: meta?.invariantValue ?? null,
    };
}

exports.SetupService = SetupService;
exports.buildEditSetupParams = buildEditSetupParams;
exports.exposedLanguagesToTranslationLanguages = exposedLanguagesToTranslationLanguages;
exports.setupEntryToTranslationEntry = setupEntryToTranslationEntry;
