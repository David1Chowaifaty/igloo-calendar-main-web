import * as z from 'zod';
export declare const CategorySchema: z.ZodNullable<z.ZodString>;
/** Optional transaction category code. */
export type Category = z.infer<typeof CategorySchema>;
export declare const RelEntitySchema: z.ZodEnum<["TBL_BSAD", "TBL_BSP"]>;
/** Related entity table name for a city-ledger record. */
export type RelEntity = z.infer<typeof RelEntitySchema>;
export declare const CLAgencyContextSchema: z.ZodObject<{
    AGENCY_ID: z.ZodNumber;
    CURRENCY_ID: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
}, {
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
}>;
/** Base agency context required by city-ledger endpoints. */
export type CLAgencyContext = z.infer<typeof CLAgencyContextSchema>;
export declare const MyClTxSchema: z.ZodObject<{
    BH_ID: z.ZodNumber;
    BSA_REF: z.ZodUnion<[z.ZodNull, z.ZodString]>;
    CATEGORY: z.ZodNullable<z.ZodString>;
    BOOK_NBR: z.ZodString;
    AGENT_BOOKING_NBR: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    ADULTS_NBR: z.ZodNumber;
    CHILD_NBR: z.ZodNumber;
    INFANT_NBR: z.ZodNumber;
    GUEST_FIRST_NAME: z.ZodString;
    GUEST_LAST_NAME: z.ZodString;
    ROOM_CATEGORY_ID: z.ZodNumber;
    ROOM_TYPE_ID: z.ZodNumber;
    RATE_PLAN_ID: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    PR_ID: z.ZodNumber;
    FROM_DATE: z.ZodString;
    TO_DATE: z.ZodString;
    SERVICE_DATE: z.ZodString;
    ENTRY_DATE: z.ZodString;
    CITY_TAX_AMOUNT: z.ZodNumber;
    CITY_TAX_PERCENT: z.ZodNumber;
    CL_TX_ID: z.ZodNumber;
    CL_TX_TYPE_CODE: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    CREDIT: z.ZodNumber;
    DEBIT: z.ZodNumber;
    CURRENCY_ID: z.ZodNumber;
    DESCRIPTION: z.ZodString;
    ENTRY_USER_ID: z.ZodNumber;
    EXTERNAL_REF: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    FD_ID: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
    IS_HOLD: z.ZodBoolean;
    IS_LOCKED: z.ZodBoolean;
    My_Bh: z.ZodNullable<z.ZodAny>;
    My_Currency: z.ZodNullable<z.ZodAny>;
    My_Fd: z.ZodNullable<z.ZodAny>;
    My_Pr: z.ZodNullable<z.ZodAny>;
    My_Room_category: z.ZodNullable<z.ZodAny>;
    RUNNING_BALANCE: z.ZodNullable<z.ZodNumber>;
    My_Room_type: z.ZodNullable<z.ZodAny>;
    My_Travel_agency: z.ZodNull;
    NET_AMOUNT: z.ZodNumber;
    OWNER_ID: z.ZodNumber;
    PAY_METHOD_CODE: z.ZodUnion<[z.ZodString, z.ZodNull]>;
    REL_ENTITY: z.ZodEnum<["TBL_BSAD", "TBL_BSP"]>;
    REL_ENTITY_KEY: z.ZodNumber;
    TAX_AMOUNT: z.ZodNumber;
    TOTAL_AMOUNT: z.ZodNumber;
    TRAVEL_AGENCY_ID: z.ZodNumber;
    VAT_AMOUNT: z.ZodNumber;
    VAT_PERCENT: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    PR_ID?: number;
    ENTRY_DATE?: string;
    ENTRY_USER_ID?: number;
    OWNER_ID?: number;
    FROM_DATE?: string;
    TO_DATE?: string;
    BOOK_NBR?: string;
    CURRENCY_ID?: number;
    BH_ID?: number;
    BSA_REF?: string;
    CATEGORY?: string;
    AGENT_BOOKING_NBR?: string;
    ADULTS_NBR?: number;
    CHILD_NBR?: number;
    INFANT_NBR?: number;
    GUEST_FIRST_NAME?: string;
    GUEST_LAST_NAME?: string;
    ROOM_CATEGORY_ID?: number;
    ROOM_TYPE_ID?: number;
    RATE_PLAN_ID?: number;
    SERVICE_DATE?: string;
    CITY_TAX_AMOUNT?: number;
    CITY_TAX_PERCENT?: number;
    CL_TX_ID?: number;
    CL_TX_TYPE_CODE?: string;
    CREDIT?: number;
    DEBIT?: number;
    DESCRIPTION?: string;
    EXTERNAL_REF?: string;
    FD_ID?: number;
    IS_HOLD?: boolean;
    IS_LOCKED?: boolean;
    My_Bh?: any;
    My_Currency?: any;
    My_Fd?: any;
    My_Pr?: any;
    My_Room_category?: any;
    RUNNING_BALANCE?: number;
    My_Room_type?: any;
    My_Travel_agency?: null;
    NET_AMOUNT?: number;
    PAY_METHOD_CODE?: string;
    REL_ENTITY?: "TBL_BSAD" | "TBL_BSP";
    REL_ENTITY_KEY?: number;
    TAX_AMOUNT?: number;
    TOTAL_AMOUNT?: number;
    TRAVEL_AGENCY_ID?: number;
    VAT_AMOUNT?: number;
    VAT_PERCENT?: number;
}, {
    PR_ID?: number;
    ENTRY_DATE?: string;
    ENTRY_USER_ID?: number;
    OWNER_ID?: number;
    FROM_DATE?: string;
    TO_DATE?: string;
    BOOK_NBR?: string;
    CURRENCY_ID?: number;
    BH_ID?: number;
    BSA_REF?: string;
    CATEGORY?: string;
    AGENT_BOOKING_NBR?: string;
    ADULTS_NBR?: number;
    CHILD_NBR?: number;
    INFANT_NBR?: number;
    GUEST_FIRST_NAME?: string;
    GUEST_LAST_NAME?: string;
    ROOM_CATEGORY_ID?: number;
    ROOM_TYPE_ID?: number;
    RATE_PLAN_ID?: number;
    SERVICE_DATE?: string;
    CITY_TAX_AMOUNT?: number;
    CITY_TAX_PERCENT?: number;
    CL_TX_ID?: number;
    CL_TX_TYPE_CODE?: string;
    CREDIT?: number;
    DEBIT?: number;
    DESCRIPTION?: string;
    EXTERNAL_REF?: string;
    FD_ID?: number;
    IS_HOLD?: boolean;
    IS_LOCKED?: boolean;
    My_Bh?: any;
    My_Currency?: any;
    My_Fd?: any;
    My_Pr?: any;
    My_Room_category?: any;
    RUNNING_BALANCE?: number;
    My_Room_type?: any;
    My_Travel_agency?: null;
    NET_AMOUNT?: number;
    PAY_METHOD_CODE?: string;
    REL_ENTITY?: "TBL_BSAD" | "TBL_BSP";
    REL_ENTITY_KEY?: number;
    TAX_AMOUNT?: number;
    TOTAL_AMOUNT?: number;
    TRAVEL_AGENCY_ID?: number;
    VAT_AMOUNT?: number;
    VAT_PERCENT?: number;
}>;
/** City-ledger transaction row returned by the API. */
export type MyClTx = z.infer<typeof MyClTxSchema>;
export declare const FetchCLParamsSchema: z.ZodObject<{
    AGENCY_ID: z.ZodNumber;
    START_DATE: z.ZodString;
    END_DATE: z.ZodString;
    START_ROW: z.ZodDefault<z.ZodNumber>;
    END_ROW: z.ZodDefault<z.ZodNumber>;
    SEARCH_QUERY: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    IS_LOCKED: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodBoolean>>>;
    IS_HOLD: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodBoolean>>>;
}, "strip", z.ZodTypeAny, {
    AGENCY_ID?: number;
    IS_HOLD?: boolean;
    IS_LOCKED?: boolean;
    START_DATE?: string;
    END_DATE?: string;
    START_ROW?: number;
    END_ROW?: number;
    SEARCH_QUERY?: string;
}, {
    AGENCY_ID?: number;
    IS_HOLD?: boolean;
    IS_LOCKED?: boolean;
    START_DATE?: string;
    END_DATE?: string;
    START_ROW?: number;
    END_ROW?: number;
    SEARCH_QUERY?: string;
}>;
/** Filters and pagination for fetching city-ledger transactions. */
export type FetchCLParams = z.infer<typeof FetchCLParamsSchema>;
export declare const FetchCLResultSchema: z.ZodObject<{
    My_Cl_tx: z.ZodArray<z.ZodObject<{
        BH_ID: z.ZodNumber;
        BSA_REF: z.ZodUnion<[z.ZodNull, z.ZodString]>;
        CATEGORY: z.ZodNullable<z.ZodString>;
        BOOK_NBR: z.ZodString;
        AGENT_BOOKING_NBR: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        ADULTS_NBR: z.ZodNumber;
        CHILD_NBR: z.ZodNumber;
        INFANT_NBR: z.ZodNumber;
        GUEST_FIRST_NAME: z.ZodString;
        GUEST_LAST_NAME: z.ZodString;
        ROOM_CATEGORY_ID: z.ZodNumber;
        ROOM_TYPE_ID: z.ZodNumber;
        RATE_PLAN_ID: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        PR_ID: z.ZodNumber;
        FROM_DATE: z.ZodString;
        TO_DATE: z.ZodString;
        SERVICE_DATE: z.ZodString;
        ENTRY_DATE: z.ZodString;
        CITY_TAX_AMOUNT: z.ZodNumber;
        CITY_TAX_PERCENT: z.ZodNumber;
        CL_TX_ID: z.ZodNumber;
        CL_TX_TYPE_CODE: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        CREDIT: z.ZodNumber;
        DEBIT: z.ZodNumber;
        CURRENCY_ID: z.ZodNumber;
        DESCRIPTION: z.ZodString;
        ENTRY_USER_ID: z.ZodNumber;
        EXTERNAL_REF: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        FD_ID: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
        IS_HOLD: z.ZodBoolean;
        IS_LOCKED: z.ZodBoolean;
        My_Bh: z.ZodNullable<z.ZodAny>;
        My_Currency: z.ZodNullable<z.ZodAny>;
        My_Fd: z.ZodNullable<z.ZodAny>;
        My_Pr: z.ZodNullable<z.ZodAny>;
        My_Room_category: z.ZodNullable<z.ZodAny>;
        RUNNING_BALANCE: z.ZodNullable<z.ZodNumber>;
        My_Room_type: z.ZodNullable<z.ZodAny>;
        My_Travel_agency: z.ZodNull;
        NET_AMOUNT: z.ZodNumber;
        OWNER_ID: z.ZodNumber;
        PAY_METHOD_CODE: z.ZodUnion<[z.ZodString, z.ZodNull]>;
        REL_ENTITY: z.ZodEnum<["TBL_BSAD", "TBL_BSP"]>;
        REL_ENTITY_KEY: z.ZodNumber;
        TAX_AMOUNT: z.ZodNumber;
        TOTAL_AMOUNT: z.ZodNumber;
        TRAVEL_AGENCY_ID: z.ZodNumber;
        VAT_AMOUNT: z.ZodNumber;
        VAT_PERCENT: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        PR_ID?: number;
        ENTRY_DATE?: string;
        ENTRY_USER_ID?: number;
        OWNER_ID?: number;
        FROM_DATE?: string;
        TO_DATE?: string;
        BOOK_NBR?: string;
        CURRENCY_ID?: number;
        BH_ID?: number;
        BSA_REF?: string;
        CATEGORY?: string;
        AGENT_BOOKING_NBR?: string;
        ADULTS_NBR?: number;
        CHILD_NBR?: number;
        INFANT_NBR?: number;
        GUEST_FIRST_NAME?: string;
        GUEST_LAST_NAME?: string;
        ROOM_CATEGORY_ID?: number;
        ROOM_TYPE_ID?: number;
        RATE_PLAN_ID?: number;
        SERVICE_DATE?: string;
        CITY_TAX_AMOUNT?: number;
        CITY_TAX_PERCENT?: number;
        CL_TX_ID?: number;
        CL_TX_TYPE_CODE?: string;
        CREDIT?: number;
        DEBIT?: number;
        DESCRIPTION?: string;
        EXTERNAL_REF?: string;
        FD_ID?: number;
        IS_HOLD?: boolean;
        IS_LOCKED?: boolean;
        My_Bh?: any;
        My_Currency?: any;
        My_Fd?: any;
        My_Pr?: any;
        My_Room_category?: any;
        RUNNING_BALANCE?: number;
        My_Room_type?: any;
        My_Travel_agency?: null;
        NET_AMOUNT?: number;
        PAY_METHOD_CODE?: string;
        REL_ENTITY?: "TBL_BSAD" | "TBL_BSP";
        REL_ENTITY_KEY?: number;
        TAX_AMOUNT?: number;
        TOTAL_AMOUNT?: number;
        TRAVEL_AGENCY_ID?: number;
        VAT_AMOUNT?: number;
        VAT_PERCENT?: number;
    }, {
        PR_ID?: number;
        ENTRY_DATE?: string;
        ENTRY_USER_ID?: number;
        OWNER_ID?: number;
        FROM_DATE?: string;
        TO_DATE?: string;
        BOOK_NBR?: string;
        CURRENCY_ID?: number;
        BH_ID?: number;
        BSA_REF?: string;
        CATEGORY?: string;
        AGENT_BOOKING_NBR?: string;
        ADULTS_NBR?: number;
        CHILD_NBR?: number;
        INFANT_NBR?: number;
        GUEST_FIRST_NAME?: string;
        GUEST_LAST_NAME?: string;
        ROOM_CATEGORY_ID?: number;
        ROOM_TYPE_ID?: number;
        RATE_PLAN_ID?: number;
        SERVICE_DATE?: string;
        CITY_TAX_AMOUNT?: number;
        CITY_TAX_PERCENT?: number;
        CL_TX_ID?: number;
        CL_TX_TYPE_CODE?: string;
        CREDIT?: number;
        DEBIT?: number;
        DESCRIPTION?: string;
        EXTERNAL_REF?: string;
        FD_ID?: number;
        IS_HOLD?: boolean;
        IS_LOCKED?: boolean;
        My_Bh?: any;
        My_Currency?: any;
        My_Fd?: any;
        My_Pr?: any;
        My_Room_category?: any;
        RUNNING_BALANCE?: number;
        My_Room_type?: any;
        My_Travel_agency?: null;
        NET_AMOUNT?: number;
        PAY_METHOD_CODE?: string;
        REL_ENTITY?: "TBL_BSAD" | "TBL_BSP";
        REL_ENTITY_KEY?: number;
        TAX_AMOUNT?: number;
        TOTAL_AMOUNT?: number;
        TRAVEL_AGENCY_ID?: number;
        VAT_AMOUNT?: number;
        VAT_PERCENT?: number;
    }>, "many">;
    TOTAL_COUNT: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    My_Cl_tx?: {
        PR_ID?: number;
        ENTRY_DATE?: string;
        ENTRY_USER_ID?: number;
        OWNER_ID?: number;
        FROM_DATE?: string;
        TO_DATE?: string;
        BOOK_NBR?: string;
        CURRENCY_ID?: number;
        BH_ID?: number;
        BSA_REF?: string;
        CATEGORY?: string;
        AGENT_BOOKING_NBR?: string;
        ADULTS_NBR?: number;
        CHILD_NBR?: number;
        INFANT_NBR?: number;
        GUEST_FIRST_NAME?: string;
        GUEST_LAST_NAME?: string;
        ROOM_CATEGORY_ID?: number;
        ROOM_TYPE_ID?: number;
        RATE_PLAN_ID?: number;
        SERVICE_DATE?: string;
        CITY_TAX_AMOUNT?: number;
        CITY_TAX_PERCENT?: number;
        CL_TX_ID?: number;
        CL_TX_TYPE_CODE?: string;
        CREDIT?: number;
        DEBIT?: number;
        DESCRIPTION?: string;
        EXTERNAL_REF?: string;
        FD_ID?: number;
        IS_HOLD?: boolean;
        IS_LOCKED?: boolean;
        My_Bh?: any;
        My_Currency?: any;
        My_Fd?: any;
        My_Pr?: any;
        My_Room_category?: any;
        RUNNING_BALANCE?: number;
        My_Room_type?: any;
        My_Travel_agency?: null;
        NET_AMOUNT?: number;
        PAY_METHOD_CODE?: string;
        REL_ENTITY?: "TBL_BSAD" | "TBL_BSP";
        REL_ENTITY_KEY?: number;
        TAX_AMOUNT?: number;
        TOTAL_AMOUNT?: number;
        TRAVEL_AGENCY_ID?: number;
        VAT_AMOUNT?: number;
        VAT_PERCENT?: number;
    }[];
    TOTAL_COUNT?: number;
}, {
    My_Cl_tx?: {
        PR_ID?: number;
        ENTRY_DATE?: string;
        ENTRY_USER_ID?: number;
        OWNER_ID?: number;
        FROM_DATE?: string;
        TO_DATE?: string;
        BOOK_NBR?: string;
        CURRENCY_ID?: number;
        BH_ID?: number;
        BSA_REF?: string;
        CATEGORY?: string;
        AGENT_BOOKING_NBR?: string;
        ADULTS_NBR?: number;
        CHILD_NBR?: number;
        INFANT_NBR?: number;
        GUEST_FIRST_NAME?: string;
        GUEST_LAST_NAME?: string;
        ROOM_CATEGORY_ID?: number;
        ROOM_TYPE_ID?: number;
        RATE_PLAN_ID?: number;
        SERVICE_DATE?: string;
        CITY_TAX_AMOUNT?: number;
        CITY_TAX_PERCENT?: number;
        CL_TX_ID?: number;
        CL_TX_TYPE_CODE?: string;
        CREDIT?: number;
        DEBIT?: number;
        DESCRIPTION?: string;
        EXTERNAL_REF?: string;
        FD_ID?: number;
        IS_HOLD?: boolean;
        IS_LOCKED?: boolean;
        My_Bh?: any;
        My_Currency?: any;
        My_Fd?: any;
        My_Pr?: any;
        My_Room_category?: any;
        RUNNING_BALANCE?: number;
        My_Room_type?: any;
        My_Travel_agency?: null;
        NET_AMOUNT?: number;
        PAY_METHOD_CODE?: string;
        REL_ENTITY?: "TBL_BSAD" | "TBL_BSP";
        REL_ENTITY_KEY?: number;
        TAX_AMOUNT?: number;
        TOTAL_AMOUNT?: number;
        TRAVEL_AGENCY_ID?: number;
        VAT_AMOUNT?: number;
        VAT_PERCENT?: number;
    }[];
    TOTAL_COUNT?: number;
}>;
/** Paginated city-ledger transaction response payload. */
export type FetchCLResult = z.infer<typeof FetchCLResultSchema>;
export declare const ToggleCLTxHoldParamsSchema: z.ZodObject<{
    CL_TX_ID: z.ZodNumber;
    IS_HOLD: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    CL_TX_ID?: number;
    IS_HOLD?: boolean;
}, {
    CL_TX_ID?: number;
    IS_HOLD?: boolean;
}>;
/** Payload for toggling a transaction hold status. */
export type ToggleCLTxHoldParams = z.infer<typeof ToggleCLTxHoldParamsSchema>;
export declare const IssueManualCLTxParamsSchema: z.ZodObject<{
    CL_TX_ID: z.ZodNumber;
    AGENCY_ID: z.ZodNumber;
    SERVICE_DATE: z.ZodString;
    CL_TX_TYPE_CODE: z.ZodString;
    DESCRIPTION: z.ZodString;
    DEBIT: z.ZodNumber;
    CREDIT: z.ZodNumber;
    CURRENCY_ID: z.ZodNumber;
    PAY_METHOD_CODE: z.ZodString;
    EXTERNAL_REF: z.ZodString;
    VAT_INCLUDED_CODE: z.ZodDefault<z.ZodEnum<["001", "002", ""]>>;
    VAT_PCT: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
    IS_DELETE: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    VAT_INCLUDED_CODE?: "" | "001" | "002";
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
    SERVICE_DATE?: string;
    CL_TX_ID?: number;
    CL_TX_TYPE_CODE?: string;
    CREDIT?: number;
    DEBIT?: number;
    DESCRIPTION?: string;
    EXTERNAL_REF?: string;
    PAY_METHOD_CODE?: string;
    VAT_PCT?: number;
    IS_DELETE?: boolean;
}, {
    VAT_INCLUDED_CODE?: "" | "001" | "002";
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
    SERVICE_DATE?: string;
    CL_TX_ID?: number;
    CL_TX_TYPE_CODE?: string;
    CREDIT?: number;
    DEBIT?: number;
    DESCRIPTION?: string;
    EXTERNAL_REF?: string;
    PAY_METHOD_CODE?: string;
    VAT_PCT?: number;
    IS_DELETE?: boolean;
}>;
/** Payload for issuing a manual city-ledger transaction. */
export type IssueManualCLTxParams = z.infer<typeof IssueManualCLTxParamsSchema>;
export declare const AllocateCLCreditParamsSchema: z.ZodObject<{
    CL_TX_ID: z.ZodNumber;
    List_Cl_tx_allocation: z.ZodArray<z.ZodObject<{
        FD_ID: z.ZodNumber;
        AMOUNT: z.ZodNumber;
        DESCRIPTION: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        DESCRIPTION?: string;
        FD_ID?: number;
        AMOUNT?: number;
    }, {
        DESCRIPTION?: string;
        FD_ID?: number;
        AMOUNT?: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    CL_TX_ID?: number;
    List_Cl_tx_allocation?: {
        DESCRIPTION?: string;
        FD_ID?: number;
        AMOUNT?: number;
    }[];
}, {
    CL_TX_ID?: number;
    List_Cl_tx_allocation?: {
        DESCRIPTION?: string;
        FD_ID?: number;
        AMOUNT?: number;
    }[];
}>;
/** Payload for allocating a credit transaction to folios. */
export type AllocateCLCreditParams = z.infer<typeof AllocateCLCreditParamsSchema>;
export declare const SyncBookingToCityLedgerParamsSchema: z.ZodObject<{
    booking_nbr: z.ZodNumber;
    is_force_post: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    booking_nbr?: number;
    is_force_post?: boolean;
}, {
    booking_nbr?: number;
    is_force_post?: boolean;
}>;
/** Payload for syncing a booking into city ledger. */
export type SyncBookingToCityLedgerParams = z.infer<typeof SyncBookingToCityLedgerParamsSchema>;
export declare const TransferCLTransactionsParamsSchema: z.ZodObject<{
    AGENCY_ID: z.ZodNumber;
    List_CL_TX_ID: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    AGENCY_ID?: number;
    List_CL_TX_ID?: number[];
}, {
    AGENCY_ID?: number;
    List_CL_TX_ID?: number[];
}>;
/** Payload for transferring city-ledger transactions. */
export type TransferCLTransactionsParams = z.infer<typeof TransferCLTransactionsParamsSchema>;
/** Params for fetching account balance. */
export type GetCLAccountBalanceParams = CLAgencyContext;
/** Params for fetching unallocated transactions. */
export type GetCLUnallocatedTransactionsParams = CLAgencyContext;
/** Params for fetching account overview. */
export type GetCLAccountOverviewParams = CLAgencyContext;
/** Aggregated city-ledger account totals. */
export type CLAccountBalance = {
    NET_BALANCE: number;
    TOTAL_CREDIT: number;
    TOTAL_DEBIT: number;
};
/** High-level city-ledger account summary metrics. */
export type CLAccountOverview = {
    ACCOUNT_NET_BALANCE: number;
    STARTING_BALANCE: number;
    TOTAL_DUE_INVOICED: number;
    TOTAL_UNINVOICED: number;
};
export declare const GetCLAgingReportParamsSchema: z.ZodObject<z.objectUtil.extendShape<{
    AGENCY_ID: z.ZodNumber;
    CURRENCY_ID: z.ZodNumber;
}, {
    AS_OF_DATE: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
    AS_OF_DATE?: string;
}, {
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
    AS_OF_DATE?: string;
}>;
/** Params for generating an aging report snapshot. */
export type GetCLAgingReportParams = z.infer<typeof GetCLAgingReportParamsSchema>;
export declare const GetCLStatementParamsSchema: z.ZodObject<z.objectUtil.extendShape<{
    AGENCY_ID: z.ZodNumber;
    CURRENCY_ID: z.ZodNumber;
}, {
    START_DATE: z.ZodString;
    END_DATE: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
    START_DATE?: string;
    END_DATE?: string;
}, {
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
    START_DATE?: string;
    END_DATE?: string;
}>;
/** Params for fetching a city-ledger statement range. */
export type GetCLStatementParams = z.infer<typeof GetCLStatementParamsSchema>;
/** City-ledger statement data with running balances. */
export type CLStatements = {
    ENDING_BALANCE: number;
    My_Rows: any[];
    STARTING_BALANCE: number;
};
export declare const IssueFiscalDocumentParamsSchema: z.ZodObject<z.objectUtil.extendShape<{
    AGENCY_ID: z.ZodNumber;
    CURRENCY_ID: z.ZodNumber;
}, {
    START_DATE: z.ZodString;
    END_DATE: z.ZodString;
    LIST_CL_TX_ID: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
    BOOKING_NBR: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
    FD_TYPE_CODE: z.ZodString;
    FD_STATUS_CODE: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
    START_DATE?: string;
    END_DATE?: string;
    LIST_CL_TX_ID?: number[];
    BOOKING_NBR?: number;
    FD_TYPE_CODE?: string;
    FD_STATUS_CODE?: string;
}, {
    AGENCY_ID?: number;
    CURRENCY_ID?: number;
    START_DATE?: string;
    END_DATE?: string;
    LIST_CL_TX_ID?: number[];
    BOOKING_NBR?: number;
    FD_TYPE_CODE?: string;
    FD_STATUS_CODE?: string;
}>;
/** Params for issuing fiscal documents from city-ledger entries. */
export type IssueFiscalDocumentParams = z.infer<typeof IssueFiscalDocumentParamsSchema>;
export declare const GetFiscalDocumentsParamsSchema: z.ZodObject<{
    DOC_NUMBER: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    FROM_DATE: z.ZodString;
    END_DATE: z.ZodOptional<z.ZodString>;
    FD_TYPE_CODE: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    AGENCY_ID: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    FROM_DATE?: string;
    AGENCY_ID?: number;
    END_DATE?: string;
    FD_TYPE_CODE?: string;
    DOC_NUMBER?: string;
}, {
    FROM_DATE?: string;
    AGENCY_ID?: number;
    END_DATE?: string;
    FD_TYPE_CODE?: string;
    DOC_NUMBER?: string;
}>;
/** Filters for listing fiscal documents. */
export type GetFiscalDocumentsParams = z.infer<typeof GetFiscalDocumentsParamsSchema>;
export declare const IssueInvoiceFromDraftParamsSchema: z.ZodObject<{
    FD_ID: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    FD_ID?: number;
}, {
    FD_ID?: number;
}>;
/** Payload for issuing an invoice from a draft document. */
export type IssueInvoiceFromDraftParams = z.infer<typeof IssueInvoiceFromDraftParamsSchema>;
export declare const VoidInvoiceByCreditNoteParamsSchema: z.ZodObject<{
    FD_ID: z.ZodNumber;
    VOID_DATE: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    REASON: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    REASON?: string;
    FD_ID?: number;
    VOID_DATE?: string;
}, {
    REASON?: string;
    FD_ID?: number;
    VOID_DATE?: string;
}>;
/** Payload for voiding an invoice via credit note. */
export type VoidInvoiceByCreditNoteParams = z.infer<typeof VoidInvoiceByCreditNoteParamsSchema>;
export declare const DeleteDraftFiscalDocumentParamsSchema: z.ZodObject<{
    FD_ID: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    FD_ID?: number;
}, {
    FD_ID?: number;
}>;
/** Payload for deleting a draft fiscal document. */
export type DeleteDraftFiscalDocumentParams = z.infer<typeof DeleteDraftFiscalDocumentParamsSchema>;
export type FiscalDocument = {
    AGENCY_ID: null;
    AGENCY_NAME: string;
    CREDIT: number;
    CREDIT_DISPLAY: string;
    CURRENCY_CODE: string;
    CURRENCY_ID: number;
    DEBIT: number;
    DEBIT_DISPLAY: string;
    DOC_NUMBER: string;
    EXTERNAL_REF: null;
    FD_ID: number;
    FD_STATUS_CODE: string;
    FD_STATUS_NAME: string;
    FD_TYPE_CODE: string;
    FD_TYPE_NAME: string;
    ISSUE_DATE: string;
    ISSUE_DATE_DISPLAY: string;
    IS_PRINTED: boolean;
    NET_AMOUNT: number;
    NET_AMOUNT_DISPLAY: string;
    TAX_AMOUNT: number;
    TAX_AMOUNT_DISPLAY: string;
    TOTAL_AMOUNT: number;
};
export type FiscalDocuments = FiscalDocument[];
export declare const FD_TYPES: {
    readonly Draft: "DFT";
    readonly Invoice: "INV";
    readonly CreditNote: "CN";
    readonly DebitNote: "DN";
    readonly Receipt: "REC";
};
export type FdType = (typeof FD_TYPES)[keyof typeof FD_TYPES];
