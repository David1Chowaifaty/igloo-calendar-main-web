import { ZIEntrySchema } from "../../models/IBooking";
import * as z from 'zod';
export { ZIEntrySchema };
/** A single labeled setup row (one translated string across all supported languages). */
export type SetupEntry = z.infer<typeof ZIEntrySchema>;
export declare const GetSetupEntriesByTblNameParamsSchema: z.ZodObject<{
    TBL_NAME: z.ZodString;
}, "strip", z.ZodTypeAny, {
    TBL_NAME?: string;
}, {
    TBL_NAME?: string;
}>;
/** Params for fetching every entry belonging to one setup table. */
export type GetSetupEntriesByTblNameParams = z.infer<typeof GetSetupEntriesByTblNameParamsSchema>;
export declare const GetSetupEntriesByTblNameMultiParamsSchema: z.ZodObject<{
    TBL_NAMES: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    TBL_NAMES?: string[];
}, {
    TBL_NAMES?: string[];
}>;
/** Params for fetching entries across several setup tables in one call. */
export type GetSetupEntriesByTblNameMultiParams = z.infer<typeof GetSetupEntriesByTblNameMultiParamsSchema>;
export declare const DistinctSetupTableSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    TBL_NAME: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    TBL_NAME: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    TBL_NAME: z.ZodString;
}, z.ZodTypeAny, "passthrough">>]>;
export declare const DistinctSetupTablesResponseSchema: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
    TBL_NAME: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    TBL_NAME: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    TBL_NAME: z.ZodString;
}, z.ZodTypeAny, "passthrough">>]>, "many">;
export type DistinctSetupTablesResponse = z.infer<typeof DistinctSetupTablesResponseSchema>;
export declare const GetSetupEntryByCodeParamsSchema: z.ZodObject<{
    TBL_NAME: z.ZodString;
    CODE_NAME: z.ZodString;
}, "strip", z.ZodTypeAny, {
    CODE_NAME?: string;
    TBL_NAME?: string;
}, {
    CODE_NAME?: string;
    TBL_NAME?: string;
}>;
/** Params for fetching a single entry by its table + code. */
export type GetSetupEntryByCodeParams = z.infer<typeof GetSetupEntryByCodeParamsSchema>;
export declare const EditSetupParamsSchema: z.ZodObject<{
    TBL_NAME: z.ZodString;
    CODE_NAME: z.ZodString;
    ISSYSTEM: z.ZodDefault<z.ZodBoolean>;
    ISDELETEABLE: z.ZodDefault<z.ZodBoolean>;
    ISUPDATEABLE: z.ZodDefault<z.ZodBoolean>;
    ISVISIBLE: z.ZodDefault<z.ZodBoolean>;
    ISDELETED: z.ZodDefault<z.ZodBoolean>;
    DISPLAY_ORDER: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    CODE_VALUE_EN: z.ZodDefault<z.ZodString>;
    CODE_VALUE_FR: z.ZodDefault<z.ZodString>;
    CODE_VALUE_AR: z.ZodDefault<z.ZodString>;
    CODE_VALUE_RU: z.ZodDefault<z.ZodString>;
    CODE_VALUE_EL: z.ZodDefault<z.ZodString>;
    CODE_VALUE_HE: z.ZodDefault<z.ZodString>;
    CODE_VALUE_PL: z.ZodDefault<z.ZodString>;
    CODE_VALUE_DE: z.ZodDefault<z.ZodString>;
    CODE_VALUE_UA: z.ZodDefault<z.ZodString>;
    ENTRY_DATE: z.ZodString;
    NOTES: z.ZodDefault<z.ZodString>;
    INVARIANT_VALUE: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
/** Payload for creating or updating a setup entry (translation key/value row). */
export type EditSetupParams = z.infer<typeof EditSetupParamsSchema>;
export declare const EditSetupManyParamsSchema: z.ZodArray<z.ZodObject<{
    TBL_NAME: z.ZodString;
    CODE_NAME: z.ZodString;
    ISSYSTEM: z.ZodDefault<z.ZodBoolean>;
    ISDELETEABLE: z.ZodDefault<z.ZodBoolean>;
    ISUPDATEABLE: z.ZodDefault<z.ZodBoolean>;
    ISVISIBLE: z.ZodDefault<z.ZodBoolean>;
    ISDELETED: z.ZodDefault<z.ZodBoolean>;
    DISPLAY_ORDER: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    CODE_VALUE_EN: z.ZodDefault<z.ZodString>;
    CODE_VALUE_FR: z.ZodDefault<z.ZodString>;
    CODE_VALUE_AR: z.ZodDefault<z.ZodString>;
    CODE_VALUE_RU: z.ZodDefault<z.ZodString>;
    CODE_VALUE_EL: z.ZodDefault<z.ZodString>;
    CODE_VALUE_HE: z.ZodDefault<z.ZodString>;
    CODE_VALUE_PL: z.ZodDefault<z.ZodString>;
    CODE_VALUE_DE: z.ZodDefault<z.ZodString>;
    CODE_VALUE_UA: z.ZodDefault<z.ZodString>;
    ENTRY_DATE: z.ZodString;
    NOTES: z.ZodDefault<z.ZodString>;
    INVARIANT_VALUE: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, "many">;
export type EditSetupManyParams = z.infer<typeof EditSetupManyParamsSchema>;
export declare const ZExposedLanguageSchema: z.ZodObject<{
    code: z.ZodString;
    culture: z.ZodString;
    description: z.ZodString;
    direction: z.ZodString;
    entries: z.ZodNull;
    flag: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id?: number;
    code?: string;
    entries?: null;
    description?: string;
    flag?: string;
    direction?: string;
    culture?: string;
}, {
    id?: number;
    code?: string;
    entries?: null;
    description?: string;
    flag?: string;
    direction?: string;
    culture?: string;
}>;
export type ExposedLanguage = z.infer<typeof ZExposedLanguageSchema>;
export declare const ZExposedLanguagesSchema: z.ZodArray<z.ZodObject<{
    code: z.ZodString;
    culture: z.ZodString;
    description: z.ZodString;
    direction: z.ZodString;
    entries: z.ZodNull;
    flag: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id?: number;
    code?: string;
    entries?: null;
    description?: string;
    flag?: string;
    direction?: string;
    culture?: string;
}, {
    id?: number;
    code?: string;
    entries?: null;
    description?: string;
    flag?: string;
    direction?: string;
    culture?: string;
}>, "many">;
export type ExposedLanguages = z.infer<typeof ZExposedLanguagesSchema>;
export declare const MoveSetupEntryParamsSchema: z.ZodObject<{
    old_tbl_name: z.ZodString;
    code_name: z.ZodString;
    new_tbl_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    old_tbl_name?: string;
    code_name?: string;
    new_tbl_name?: string;
}, {
    old_tbl_name?: string;
    code_name?: string;
    new_tbl_name?: string;
}>;
export type MoveSetupEntryParams = z.infer<typeof MoveSetupEntryParamsSchema>;
export declare const MissingSetupEntriesParamsSchema: z.ZodObject<{
    language: z.ZodString;
}, "strip", z.ZodTypeAny, {
    language?: string;
}, {
    language?: string;
}>;
export type MissingSetupEntriesParams = z.infer<typeof MissingSetupEntriesParamsSchema>;
export declare const ZSearchSetupByDescriptionParamsSchema: z.ZodObject<{
    query: z.ZodString;
}, "strip", z.ZodTypeAny, {
    query?: string;
}, {
    query?: string;
}>;
export type SearchSetupByDescriptionParams = z.infer<typeof ZSearchSetupByDescriptionParamsSchema>;
export declare const ZEntrySchema: z.ZodObject<{
    CODE_NAME: z.ZodString;
    TBL_NAME: z.ZodString;
}, "strip", z.ZodTypeAny, {
    CODE_NAME?: string;
    TBL_NAME?: string;
}, {
    CODE_NAME?: string;
    TBL_NAME?: string;
}>;
export declare const ZDuplicatedSetupEntriesAcrossTablesSchema: z.ZodObject<{
    DESCRIPTION: z.ZodString;
    ENTRIES: z.ZodArray<z.ZodObject<{
        CODE_NAME: z.ZodString;
        TBL_NAME: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        CODE_NAME?: string;
        TBL_NAME?: string;
    }, {
        CODE_NAME?: string;
        TBL_NAME?: string;
    }>, "many">;
    OCCURRENCES: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    DESCRIPTION?: string;
    ENTRIES?: {
        CODE_NAME?: string;
        TBL_NAME?: string;
    }[];
    OCCURRENCES?: number;
}, {
    DESCRIPTION?: string;
    ENTRIES?: {
        CODE_NAME?: string;
        TBL_NAME?: string;
    }[];
    OCCURRENCES?: number;
}>;
export type Entry = z.infer<typeof ZEntrySchema>;
export type DuplicatedSetupEntriesAcrossTables = z.infer<typeof ZDuplicatedSetupEntriesAcrossTablesSchema>;
