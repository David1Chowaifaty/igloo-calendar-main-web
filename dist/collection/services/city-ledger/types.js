import moment from "moment";
import * as z from "zod";
// ---------------------------------------------------------------------------
// Shared / Base types
// ---------------------------------------------------------------------------
export const CategorySchema = z.string().nullable();
export const RelEntitySchema = z.enum(['TBL_BSAD', 'TBL_BSP']);
export const CLAgencyContextSchema = z.object({
    AGENCY_ID: z.number(),
    CURRENCY_ID: z.number(),
});
// ---------------------------------------------------------------------------
// Transaction record & fetch
// ---------------------------------------------------------------------------
export const MyClTxSchema = z.object({
    BH_ID: z.number(),
    BSA_REF: z.union([z.null(), z.string()]),
    CATEGORY: CategorySchema,
    // booking info
    BOOK_NBR: z.string(),
    AGENT_BOOKING_NBR: z.union([z.string(), z.null()]),
    // guest counts
    ADULTS_NBR: z.number(),
    CHILD_NBR: z.number(),
    INFANT_NBR: z.number(),
    // guest info
    GUEST_FIRST_NAME: z.string(),
    GUEST_LAST_NAME: z.string(),
    // room info
    ROOM_CATEGORY_ID: z.number(),
    ROOM_TYPE_ID: z.number(),
    RATE_PLAN_ID: z.union([z.number(), z.null()]),
    PR_ID: z.number(),
    // dates
    FROM_DATE: z.string(),
    TO_DATE: z.string(),
    SERVICE_DATE: z.string(),
    ENTRY_DATE: z.string(),
    CITY_TAX_AMOUNT: z.number(),
    CITY_TAX_PERCENT: z.number(),
    CL_TX_ID: z.number(),
    CL_TX_TYPE_CODE: z.union([z.string(), z.null()]),
    CREDIT: z.number(),
    DEBIT: z.number(),
    CURRENCY_ID: z.number(),
    DESCRIPTION: z.string(),
    ENTRY_USER_ID: z.number(),
    EXTERNAL_REF: z.union([z.string(), z.null()]),
    FD_ID: z.union([z.number(), z.null()]),
    IS_HOLD: z.boolean(),
    IS_LOCKED: z.boolean(),
    My_Bh: z.any().nullable(),
    My_Currency: z.any().nullable(),
    My_Fd: z.any().nullable(),
    My_Pr: z.any().nullable(),
    My_Room_category: z.any().nullable(),
    RUNNING_BALANCE: z.number().nullable(),
    My_Room_type: z.any().nullable(),
    My_Travel_agency: z.null(),
    NET_AMOUNT: z.number(),
    OWNER_ID: z.number(),
    PAY_METHOD_CODE: z.union([z.string(), z.null()]),
    REL_ENTITY: RelEntitySchema,
    REL_ENTITY_KEY: z.number(),
    TAX_AMOUNT: z.number(),
    TOTAL_AMOUNT: z.number(),
    TRAVEL_AGENCY_ID: z.number(),
    VAT_AMOUNT: z.number(),
    VAT_PERCENT: z.number(),
});
export const FetchCLParamsSchema = z.object({
    AGENCY_ID: z.number(),
    START_DATE: z.string(),
    END_DATE: z.string(),
    START_ROW: z.number().default(0),
    END_ROW: z.number().default(20),
    SEARCH_QUERY: z.string().nullable().optional().default(null),
    IS_LOCKED: z.boolean().optional().nullable().default(null),
    IS_HOLD: z.boolean().optional().nullable().default(null),
});
export const FetchCLResultSchema = z.object({
    My_Cl_tx: z.array(MyClTxSchema),
    TOTAL_COUNT: z.number(),
});
// ---------------------------------------------------------------------------
// Transaction mutations
// ---------------------------------------------------------------------------
export const ToggleCLTxHoldParamsSchema = z.object({
    CL_TX_ID: z.number(),
    IS_HOLD: z.boolean(),
});
export const IssueManualCLTxParamsSchema = z.object({
    CL_TX_ID: z.number(),
    AGENCY_ID: z.number(),
    SERVICE_DATE: z.string(),
    // CATEGORY: z.string(),
    CL_TX_TYPE_CODE: z.string(),
    DESCRIPTION: z.string(),
    DEBIT: z.number(),
    CREDIT: z.number(),
    CURRENCY_ID: z.number(),
    PAY_METHOD_CODE: z.string(),
    EXTERNAL_REF: z.string(),
    // VAT handling for the transaction
    // 001 = VAT included in amount
    // 002 = VAT not applicable
    VAT_INCLUDED_CODE: z.enum(['001', '002', '']).default(''),
    // VAT percentage (used only when VAT is included)
    VAT_PCT: z.number().optional().nullable().default(null),
    IS_DELETE: z.boolean().optional().default(false),
});
export const AllocateCLCreditParamsSchema = z.object({
    CL_TX_ID: z.number(),
    List_Cl_tx_allocation: z.array(z.object({
        FD_ID: z.number(),
        AMOUNT: z.number(),
        DESCRIPTION: z.string(),
    })),
});
export const SyncBookingToCityLedgerParamsSchema = z.object({
    booking_nbr: z.number(),
    is_force_post: z.boolean(),
});
export const TransferCLTransactionsParamsSchema = z.object({
    AGENCY_ID: z.number(),
    List_CL_TX_ID: z.array(z.number()),
});
export const GetCLAgingReportParamsSchema = CLAgencyContextSchema.extend({
    AS_OF_DATE: z.string(),
});
export const GetCLStatementParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: z.string(),
    END_DATE: z.string(),
});
// ---------------------------------------------------------------------------
// Fiscal documents
// ---------------------------------------------------------------------------
export const IssueFiscalDocumentParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: z.string(),
    END_DATE: z.string(),
    LIST_CL_TX_ID: z.array(z.number()).optional().default([]),
    BOOKING_NBR: z.number().optional().nullable().default(null),
    FD_TYPE_CODE: z.string(),
    FD_STATUS_CODE: z.string().optional().default('SENT'),
});
export const GetFiscalDocumentsParamsSchema = z.object({
    DOC_NUMBER: z.string().optional().default(''),
    FROM_DATE: z.string(),
    END_DATE: z.string().optional(),
    FD_TYPE_CODE: z.string().optional().nullable().default(null),
    AGENCY_ID: z.number(),
});
export const IssueInvoiceFromDraftParamsSchema = z.object({
    FD_ID: z.number(),
});
export const VoidInvoiceByCreditNoteParamsSchema = z.object({
    FD_ID: z.number(),
    VOID_DATE: z.string().optional().default(moment().format('YYYY-MM-DD')),
    REASON: z.string().optional(),
});
export const DeleteDraftFiscalDocumentParamsSchema = z.object({
    FD_ID: z.number(),
});
export const FD_TYPES = {
    Draft: 'DFT',
    Invoice: 'INV',
    CreditNote: 'CN',
    DebitNote: 'DN',
    Receipt: 'REC',
};
//# sourceMappingURL=types.js.map
