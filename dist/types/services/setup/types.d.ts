import { ZIEntrySchema } from "../../models/IBooking";
import type { IEntries } from "../../models/IBooking";
import * as z from 'zod';
export { ZIEntrySchema };
/** A single labeled setup row (one translated string across all supported languages). */
export type SetupEntry = z.infer<typeof ZIEntrySchema>;
/**
 * Every setup `TBL_NAME` the app reads at runtime, as string literals, plus an
 * open `(string & {})` member so ad-hoc names still type-check while keeping
 * editor autocomplete for the known ones.
 *
 * Canonical definition — `@/services/booking-service/types` and
 * `booking.service.ts` re-export this. Superset of the two historical unions.
 * Keep in sync with `USED_SETUP_TABLES` in
 * `src/components/ir-translations-manager/used-setup-tables.ts`.
 */
export type TableEntries = '_CALENDAR_BLOCKED_TILL' | '_DEPARTURE_TIME' | '_ARRIVAL_TIME' | '_RATE_PRICING_MODE' | '_BED_PREFERENCE_TYPE' | '_PAY_TYPE' | '_PAY_TYPE_GROUP' | '_PAY_METHOD' | '_AGENT_RATE_TYPE' | '_AGENT_TYPE' | '_TA_PAYMENT_METHOD' | '_VAT_INCLUDED' | '_CITY_TAX_INCLUDED' | '_SERVICE_CHARGE_INCLUDED' | '_TAXATION_STRATEGY' | '_SVC_CATEGORY' | '_CL_TX_TYPE' | '_FD_TYPE' | '_FD_STATUS' | '_CL_POST_TIMING' | '_GAP_RANGE' | '_GAP_RULE' | '_INVOICE_TARGET' | '_ID_TYPE' | '_USER_TYPE' | '_HK_FREQUENCY' | '_MEAL_TYPE' | '_HB_PREFERENCE' | (string & {});
/**
 * Setup entries grouped by table: the key is the lower-cased `TBL_NAME` with its
 * leading underscore stripped (`_PAY_TYPE` -> `pay_type`).
 */
export type GroupedTableEntries = {
    [K in TableEntries as K extends `_${infer Rest}` ? Lowercase<Rest> : never]: IEntries[];
};
/**
 * The `_PAY_TYPE` / `_PAY_TYPE_GROUP` / `_PAY_METHOD` setup tables, grouped for
 * the payment folio. Produced by {@link SetupService.getPaymentEntries}.
 */
export type PaymentEntries = {
    types: IEntries[];
    groups: IEntries[];
    methods: IEntries[];
};
/** Language codes that map to the `CODE_VALUE_*` columns on a setup entry. */
export type EntryLanguage = 'en' | 'ar' | 'de' | 'el' | 'fr' | 'he' | 'pl' | 'ru' | 'ua';
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
    culture?: string;
    description?: string;
    direction?: string;
    flag?: string;
}, {
    id?: number;
    code?: string;
    entries?: null;
    culture?: string;
    description?: string;
    direction?: string;
    flag?: string;
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
    culture?: string;
    description?: string;
    direction?: string;
    flag?: string;
}, {
    id?: number;
    code?: string;
    entries?: null;
    culture?: string;
    description?: string;
    direction?: string;
    flag?: string;
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
