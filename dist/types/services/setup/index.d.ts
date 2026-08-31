import { type EditSetupParams, type EditSetupManyParams, type GetSetupEntriesByTblNameMultiParams, type GetSetupEntriesByTblNameParams, type GetSetupEntryByCodeParams, type SetupEntry, type ExposedLanguages } from './types';
export * from './types';
export declare class SetupService {
    /**
     * All entries belonging to a single setup table (e.g. one translation table).
     */
    getSetupEntriesByTblName(params: GetSetupEntriesByTblNameParams): Promise<SetupEntry[]>;
    /**
     * Entries across several setup tables in a single round trip — used to load
     * every translation table's rows at once instead of one request per table.
     */
    getSetupEntriesByTblNameMulti(params: GetSetupEntriesByTblNameMultiParams): Promise<SetupEntry[]>;
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
}
