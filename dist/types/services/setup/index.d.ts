import type { IEntries, ISetupEntries } from "../../models/IBooking";
import { type EditSetupParams, type EditSetupManyParams, type GetSetupEntryByCodeParams, type SetupEntry, type ExposedLanguages, type TableEntries, type PaymentEntries, MoveSetupEntryParams, MissingSetupEntriesParams, SearchSetupByDescriptionParams, DuplicatedSetupEntriesAcrossTables } from './types';
export * from './types';
export * from './utils';
export declare class SetupService {
    /**
     * POSTs to an IglooRooms endpoint, throws on `ExceptionMsg`, and returns
     * `My_Result`. Every method below is a thin wrapper around this.
     */
    private request;
    /** All entries belonging to a single setup table. */
    getSetupEntriesByTableName(TBL_NAME: TableEntries): Promise<IEntries[]>;
    /**
     * Entries across several setup tables in one round trip.
     *
     * NOTE: the endpoint string is ALL CAPS (`..._MULTI`); `igl-book-property.tsx`
     * calls `isRequestPending('/Get_Setup_Entries_By_TBL_NAME_MULTI')` — keep in sync.
     */
    getSetupEntriesByTableNameMulti(entries: TableEntries[]): Promise<IEntries[]>;
    /**
     * Arrival-time, rate-pricing-mode and bed-preference tables, shaped as
     * {@link ISetupEntries} for the booking editors.
     */
    fetchSetupEntries(): Promise<ISetupEntries>;
    /** Calendar "blocked till" entries (`_CALENDAR_BLOCKED_TILL`). */
    getBlockedInfo(): Promise<IEntries[]>;
    /**
     * The `_PAY_TYPE` / `_PAY_TYPE_GROUP` / `_PAY_METHOD` tables in one round trip,
     * grouped into the {@link PaymentEntries} shape the payment folio consumes.
     */
    getPaymentEntries(): Promise<PaymentEntries>;
    /**
     * Every distinct TBL_NAME that currently has at least one setup entry.
     * Normalizes the response to plain strings regardless of whether the API
     * returns bare names or row objects carrying a TBL_NAME field.
     */
    getDistinctSetupTables(): Promise<string[]>;
    /**
     * A single entry by its natural key (table + code). Returns null when no
     * matching row exists.
     */
    getSetupEntryByCode(params: GetSetupEntryByCodeParams): Promise<SetupEntry | null>;
    /**
     * Creates or updates a setup entry. There is no separate delete endpoint —
     * soft-delete a row by resubmitting it with `ISDELETED: true`.
     */
    editSetup(params: EditSetupParams): Promise<{
        CODE_NAME?: string;
        CODE_VALUE_AR?: string;
        CODE_VALUE_DE?: string;
        CODE_VALUE_EL?: string;
        CODE_VALUE_EN?: string;
        CODE_VALUE_FR?: string;
        CODE_VALUE_HE?: string;
        CODE_VALUE_PL?: string;
        CODE_VALUE_RU?: string;
        CODE_VALUE_UA?: string;
        DISPLAY_ORDER?: number;
        ENTRY_DATE?: string;
        INVARIANT_VALUE?: string;
        ISDELETEABLE?: boolean;
        ISDELETED?: boolean;
        ISSYSTEM?: boolean;
        ISUPDATEABLE?: boolean;
        ISVISIBLE?: boolean;
        NOTES?: string;
        TBL_NAME?: string;
    }>;
    /**
     * Creates or updates a setup entry in bulk. There is no separate delete endpoint —
     * soft-delete a row by resubmitting it with `ISDELETED: true`.
     */
    editSetupMany(params: EditSetupManyParams): Promise<SetupEntry[]>;
    /**
     * Fetches the exposed languages available to the engine.
     *
     * @returns A validated list of languages including code, culture, name,
     * text direction, flag URL, and identifier.
     * @throws If the API returns an exception or the response fails validation.
     */
    getExposedLanguages(): Promise<ExposedLanguages>;
    /**
     * Fetches setup entries that are missing for the specified language.
     *
     * @param language Language code to check, e.g. "AR".
     * @returns A validated list of missing setup entries and their translated values.
     * @throws If the API returns an exception or the response fails validation.
     */
    getMissingSetupEntries(params: MissingSetupEntriesParams): Promise<SetupEntry[]>;
    /**
     * Moves a setup entry from one setup table to another.
     *
     * The API throws a business exception when the requested code is already
     * being used by another table.
     *
     * @param params Source table, setup code, and destination table.
     * @throws If the API returns an exception or the request parameters fail validation.
     */
    moveSetupEntry(params: MoveSetupEntryParams): Promise<void>;
    /**
     * Searches setup entries by their description/value.
     *
     * @param query Text to search for in setup descriptions.
     * @returns A validated list of matching setup entries.
     * @throws If the API returns an exception or the response fails validation.
     */
    searchSetupByDescription(params: SearchSetupByDescriptionParams): Promise<SetupEntry[]>;
    /**
     * Fetches duplicated setup entries that exist across multiple setup tables.
     *
     * Each result contains the duplicated description, the number of occurrences,
     * and the setup entries/tables where that description is used.
     *
     * @returns A list of duplicated setup entries grouped by description.
     * @throws If the API returns an exception.
     */
    getDuplicatedSetupEntriesAcrossTables(): Promise<DuplicatedSetupEntriesAcrossTables[]>;
}
