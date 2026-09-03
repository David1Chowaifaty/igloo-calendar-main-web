import { a as axios } from './axios-B50ozOIF.js';
import { l as libExports } from './index-DeW5X45W.js';
import { t as toSetupEntries, g as groupEntryTablesResult, D as DistinctSetupTablesResponseSchema, G as GetSetupEntryByCodeParamsSchema, E as EditSetupParamsSchema, a as EditSetupManyParamsSchema, Z as ZExposedLanguagesSchema, M as MissingSetupEntriesParamsSchema, b as MoveSetupEntryParamsSchema, c as ZSearchSetupByDescriptionParamsSchema } from './utils-DbzivNBs.js';
import { Z as ZIEntrySchema } from './IBooking-xt_aVEnI.js';

class SetupService {
    /**
     * POSTs to an IglooRooms endpoint, throws on `ExceptionMsg`, and returns
     * `My_Result`. Every method below is a thin wrapper around this.
     */
    async request(url, body = {}) {
        const { data } = await axios.post(url, body);
        if (data.ExceptionMsg) {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    /** All entries belonging to a single setup table. */
    getSetupEntriesByTableName(TBL_NAME) {
        return this.request('/Get_Setup_Entries_By_TBL_NAME', { TBL_NAME }).then(res => res ?? []);
    }
    /**
     * Entries across several setup tables in one round trip.
     *
     * NOTE: the endpoint string is ALL CAPS (`..._MULTI`); `igl-book-property.tsx`
     * calls `isRequestPending('/Get_Setup_Entries_By_TBL_NAME_MULTI')` — keep in sync.
     */
    getSetupEntriesByTableNameMulti(entries) {
        return this.request('/Get_Setup_Entries_By_TBL_NAME_MULTI', { TBL_NAMES: entries }).then(res => res ?? []);
    }
    /**
     * Arrival-time, rate-pricing-mode and bed-preference tables, shaped as
     * {@link ISetupEntries} for the booking editors.
     */
    async fetchSetupEntries() {
        const data = await this.getSetupEntriesByTableNameMulti(['_ARRIVAL_TIME', '_RATE_PRICING_MODE', '_BED_PREFERENCE_TYPE']);
        return toSetupEntries(groupEntryTablesResult(data));
    }
    /** Calendar "blocked till" entries (`_CALENDAR_BLOCKED_TILL`). */
    getBlockedInfo() {
        return this.getSetupEntriesByTableNameMulti(['_CALENDAR_BLOCKED_TILL']);
    }
    /**
     * The `_PAY_TYPE` / `_PAY_TYPE_GROUP` / `_PAY_METHOD` tables in one round trip,
     * grouped into the {@link PaymentEntries} shape the payment folio consumes.
     */
    async getPaymentEntries() {
        const { pay_type, pay_type_group, pay_method } = groupEntryTablesResult(await this.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']));
        return { types: pay_type, groups: pay_type_group, methods: pay_method };
    }
    /**
     * Every distinct TBL_NAME that currently has at least one setup entry.
     * Normalizes the response to plain strings regardless of whether the API
     * returns bare names or row objects carrying a TBL_NAME field.
     */
    async getDistinctSetupTables() {
        const rows = DistinctSetupTablesResponseSchema.parse((await this.request('/Get_Distinct_Setup_Tables')) ?? []);
        return rows.map(row => (typeof row === 'string' ? row : row.TBL_NAME));
    }
    /**
     * A single entry by its natural key (table + code). Returns null when no
     * matching row exists.
     */
    async getSetupEntryByCode(params) {
        const result = await this.request('/Get_SetupEntry_By_Code', GetSetupEntryByCodeParamsSchema.parse(params));
        return result ? ZIEntrySchema.parse(result) : null;
    }
    /**
     * Creates or updates a setup entry. There is no separate delete endpoint —
     * soft-delete a row by resubmitting it with `ISDELETED: true`.
     */
    async editSetup(params) {
        const payload = EditSetupParamsSchema.parse(params);
        await this.request('/Edit_Setup', payload);
        return payload;
    }
    /**
     * Creates or updates a setup entry in bulk. There is no separate delete endpoint —
     * soft-delete a row by resubmitting it with `ISDELETED: true`.
     */
    async editSetupMany(params) {
        const payload = EditSetupManyParamsSchema.parse(params);
        await this.request('/Edit_Setup_Many', { list_setup_entries: payload });
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
        return ZExposedLanguagesSchema.parse(await this.request('https://gateway.igloorooms.com/IRBE/Get_Exposed_Languages'));
    }
    /**
     * Fetches setup entries that are missing for the specified language.
     *
     * @param language Language code to check, e.g. "AR".
     * @returns A validated list of missing setup entries and their translated values.
     * @throws If the API returns an exception or the response fails validation.
     */
    async getMissingSetupEntries(params) {
        const result = await this.request('/Get_Missing_Setup_Entries', MissingSetupEntriesParamsSchema.parse(params));
        return libExports.array(ZIEntrySchema).parse(result ?? []);
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
        await this.request('/Move_Setup_Entry', MoveSetupEntryParamsSchema.parse(params));
    }
    /**
     * Searches setup entries by their description/value.
     *
     * @param query Text to search for in setup descriptions.
     * @returns A validated list of matching setup entries.
     * @throws If the API returns an exception or the response fails validation.
     */
    async searchSetupByDescription(params) {
        const result = await this.request('/Search_Setup_By_Description', ZSearchSetupByDescriptionParamsSchema.parse(params));
        return libExports.array(ZIEntrySchema).parse(result ?? []);
    }
    /**
     * Fetches duplicated setup entries that exist across multiple setup tables.
     *
     * Each result contains the duplicated description, the number of occurrences,
     * and the setup entries/tables where that description is used.
     *
     * @returns A list of duplicated setup entries grouped by description.
     * @throws If the API returns an exception.
     */
    getDuplicatedSetupEntriesAcrossTables() {
        return this.request('/Get_Duplicated_Setup_Entries_Across_Tables');
    }
}

export { SetupService as S };
