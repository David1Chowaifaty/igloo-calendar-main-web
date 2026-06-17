import { a as axios } from './axios-B50ozOIF.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as libExports } from './index-DeW5X45W.js';
import { k as downloadFile } from './utils-DoV0ybBP.js';

const ClTxTypeCode = {
    Payment: 'PAY',
    OpeningBalance: 'OB',
    Adjustment: 'ADJ',
    CreditNote: 'CN',
    DebitNote: 'DN',
    StandardChargeDebit: 'DB',
    Discount: 'DSC',
    CancellationPenalty: 'CPN',
};
const FdTypes = {
    Draft: 'DFT',
    Invoice: 'INV',
    CreditNote: 'CN',
    DebitNote: 'DN',
    Receipt: 'REC',
    Proforma: 'PRF',
    CreditReceipt: 'CREC',
};
const InvoiceableItemReason = {
    AlreadyInvoiced: '001',
    NotCheckedOutYet: '002',
    PickupCancellationPolicy: '003',
};
const VatIncludedCodes = {
    Inclusive: '001'};
const FdStatus = {
    Sent: 'SENT',
    Paid: 'PAID',
    Issued: 'ISSUED',
    Voided: 'VOIDED',
};
const InOut = {
    CheckedOut: '002',
};

// ---------------------------------------------------------------------------
// Shared / Base types
// ---------------------------------------------------------------------------
const CategorySchema = libExports.string().nullable();
const RelEntitySchema = libExports.enum(['TBL_BSAD', 'TBL_BSP']);
const CLAgencyContextSchema = libExports.object({
    AGENCY_ID: libExports.number(),
    CURRENCY_ID: libExports.number(),
});
const FiscalDocumentSchema = libExports.object({
    AGENCY_ID: libExports.number().nullable().optional(),
    AGENCY_NAME: libExports.string().nullable().optional(),
    CREDIT: libExports.number().nullable().optional(),
    CREDIT_DISPLAY: libExports.string().nullable().optional(),
    CURRENCY_CODE: libExports.string().nullable().optional(),
    CURRENCY_ID: libExports.number().nullable().optional(),
    DEBIT: libExports.number().nullable().optional(),
    DEBIT_DISPLAY: libExports.string().nullable().optional(),
    DOC_NUMBER: libExports.string().nullable().optional(),
    EXTERNAL_REF: libExports.string().nullable().optional(),
    FD_ID: libExports.number().nullable().optional(),
    FD_STATUS_CODE: libExports.string().nullable().optional(),
    FD_STATUS_NAME: libExports.string().nullable().optional(),
    FD_TYPE_CODE: libExports.string().nullable().optional(),
    FD_TYPE_NAME: libExports.string().nullable().optional(),
    ISSUE_DATE: libExports.string().nullable().optional(),
    ISSUE_DATE_DISPLAY: libExports.string().nullable().optional(),
    IS_PRINTED: libExports.boolean().nullable().optional(),
    NET_AMOUNT: libExports.number().nullable().optional(),
    NET_AMOUNT_DISPLAY: libExports.string().nullable().optional(),
    TAX_AMOUNT: libExports.number().nullable().optional(),
    TAX_AMOUNT_DISPLAY: libExports.string().nullable().optional(),
    TOTAL_AMOUNT: libExports.number().nullable().optional(),
    BALANCE_BEFORE_TX: libExports.number().nullable(),
    BALANCE_AFTER_TX: libExports.number().nullable(),
    FROM_DATE: libExports.string().nullable().optional(),
    TO_DATE: libExports.string().nullable().optional(),
    BOOK_NBR: libExports.string().nullable().optional(),
});
// ---------------------------------------------------------------------------
// Transaction record & fetch
// ---------------------------------------------------------------------------
const ClTxSchema = libExports.object({
    BH_ID: libExports.number(),
    BSA_REF: libExports.union([libExports.null(), libExports.string()]),
    CATEGORY: CategorySchema,
    // booking info
    BOOK_NBR: libExports.string(),
    AGENT_BOOKING_NBR: libExports.union([libExports.string(), libExports.null()]),
    // guest counts
    ADULTS_NBR: libExports.number(),
    CHILD_NBR: libExports.number(),
    INFANT_NBR: libExports.number(),
    // guest info
    GUEST_FIRST_NAME: libExports.string(),
    GUEST_LAST_NAME: libExports.string(),
    // room info
    ROOM_CATEGORY_ID: libExports.number(),
    ROOM_TYPE_ID: libExports.number(),
    RATE_PLAN_ID: libExports.union([libExports.number(), libExports.null()]),
    PR_ID: libExports.number(),
    // dates
    FROM_DATE: libExports.string(),
    TO_DATE: libExports.string(),
    SERVICE_DATE: libExports.string(),
    ENTRY_DATE: libExports.string(),
    CITY_TAX_AMOUNT: libExports.number(),
    CITY_TAX_PERCENT: libExports.number(),
    CL_TX_ID: libExports.number(),
    CL_TX_TYPE_CODE: libExports.union([libExports.string(), libExports.null()]),
    CREDIT: libExports.number(),
    DEBIT: libExports.number(),
    CURRENCY_ID: libExports.number(),
    DESCRIPTION: libExports.string(),
    ENTRY_USER_ID: libExports.number(),
    EXTERNAL_REF: libExports.union([libExports.string(), libExports.null()]),
    FD_ID: libExports.union([libExports.number(), libExports.null()]),
    IS_HOLD: libExports.boolean(),
    IS_LOCKED: libExports.boolean(),
    My_Bh: libExports.any().nullable(),
    My_Currency: libExports.any().nullable(),
    My_Fd: FiscalDocumentSchema.nullable(),
    My_Pr: libExports.any().nullable(),
    My_Room_category: libExports.any().nullable(),
    RUNNING_BALANCE: libExports.number().nullable(),
    My_Room_type: libExports.any().nullable(),
    My_Travel_agency: libExports.null(),
    DOC_NUMBER: libExports.string().nullable().optional().default(null),
    NET_AMOUNT: libExports.number(),
    OWNER_ID: libExports.number(),
    PAY_METHOD_CODE: libExports.union([libExports.string(), libExports.null()]),
    REL_ENTITY: RelEntitySchema,
    REL_ENTITY_KEY: libExports.number(),
    TAX_AMOUNT: libExports.number(),
    TOTAL_AMOUNT: libExports.number(),
    TRAVEL_AGENCY_ID: libExports.number(),
    VAT_AMOUNT: libExports.number(),
    VAT_PERCENT: libExports.number(),
});
const FetchCLParamsSchema = libExports.object({
    AGENCY_ID: libExports.number(),
    START_DATE: libExports.string().optional().nullable().default(null),
    END_DATE: libExports.string().optional().nullable().default(null),
    START_ROW: libExports.number().default(0),
    END_ROW: libExports.number().default(20),
    SEARCH_QUERY: libExports.string().nullable().optional().default(null),
    IS_LOCKED: libExports.boolean().optional().nullable().default(null),
    IS_HOLD: libExports.boolean().optional().nullable().default(null),
    IS_CHECKED_OUT_ONLY: libExports.boolean().optional().nullable().default(null),
    is_export_to_excel: libExports.boolean().optional().nullable().default(false),
});
libExports.object({
    My_Cl_tx: libExports.array(ClTxSchema),
    TOTAL_COUNT: libExports.number(),
});
// ---------------------------------------------------------------------------
// Transaction mutations
// ---------------------------------------------------------------------------
const ToggleCLTxHoldParamsSchema = libExports.object({
    CL_TX_ID: libExports.number(),
    IS_HOLD: libExports.boolean(),
});
const IssueManualCLTxParamsSchema = libExports.object({
    CL_TX_ID: libExports.number().optional().default(-1),
    AGENCY_ID: libExports.number(),
    SERVICE_DATE: libExports.string(),
    // CATEGORY: z.string(),
    CL_TX_TYPE_CODE: libExports.string(),
    DESCRIPTION: libExports.string(),
    DEBIT: libExports.number(),
    CREDIT: libExports.number(),
    CURRENCY_ID: libExports.number(),
    PAY_METHOD_CODE: libExports.string(),
    EXTERNAL_REF: libExports.string(),
    // VAT handling for the transaction
    // 001 = VAT included in amount
    // 002 = VAT not applicable
    VAT_INCLUDED_CODE: libExports.enum(['001', '002', '']).default(''),
    // VAT percentage (used only when VAT is included)
    VAT_PCT: libExports.number().optional().nullable().default(null),
    //Booking number system id.
    BH_ID: libExports.number().optional().nullable().default(null),
    IS_DELETE: libExports.boolean().optional().default(false),
});
const AllocateCLCreditParamsSchema = libExports.object({
    CL_TX_ID: libExports.number(),
    List_Cl_tx_allocation: libExports.array(libExports.object({
        FD_ID: libExports.number(),
        AMOUNT: libExports.number(),
        DESCRIPTION: libExports.string(),
    })),
});
const SyncBookingToCityLedgerParamsSchema = libExports.object({
    booking_nbr: libExports.number(),
    is_force_post: libExports.boolean(),
});
const TransferCLTransactionsParamsSchema = libExports.object({
    AGENCY_ID: libExports.number(),
    List_CL_TX_ID: libExports.array(libExports.number()),
});
const GetCLAgingReportParamsSchema = CLAgencyContextSchema.extend({
    AS_OF_DATE: libExports.string(),
});
const GetCLStatementParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: libExports.string(),
    END_DATE: libExports.string(),
});
// ---------------------------------------------------------------------------
// Fiscal documents
// ---------------------------------------------------------------------------
const IssueFiscalDocumentParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: libExports.string(),
    END_DATE: libExports.string(),
    LIST_CL_TX_ID: libExports.array(libExports.number()).optional().default([]),
    BOOKING_NBR: libExports.string().optional().nullable().default(null),
    FD_TYPE_CODE: libExports.string(),
    FD_STATUS_CODE: libExports.string().optional().default(FdStatus.Issued),
});
const GetFiscalDocumentsParamsSchema = libExports.object({
    DOC_NUMBER: libExports.string().optional().default(''),
    START_DATE: libExports.string().optional().nullable(),
    END_DATE: libExports.string().optional().nullable(),
    BOOK_NBR: libExports.string().optional().nullable(),
    LIST_FD_TYPE_CODE: libExports.array(libExports.string()).optional().nullable().default(null),
    LIST_FD_STATUS_CODE: libExports.array(libExports.string()).optional().nullable().default(null),
    AGENCY_ID: libExports.number(),
});
const IssueInvoiceFromDraftParamsSchema = libExports.object({
    FD_ID: libExports.number(),
});
const VoidInvoiceByCreditNoteParamsSchema = libExports.object({
    FD_ID: libExports.number(),
    VOID_DATE: libExports.string().optional().default(hooks().format('YYYY-MM-DD')),
    REASON: libExports.string().optional(),
});
const DeleteDraftFiscalDocumentParamsSchema = libExports.object({
    FD_ID: libExports.number(),
});
const PrintClFiscalDocumentParamsSchema = libExports.object({
    doc_number: libExports.string(),
    lang: libExports.string().optional().default('en'),
});
const PrintClStatementParamsSchema = libExports.object({
    agency_id: libExports.string(),
    from_date: libExports.string(),
    to_date: libExports.string(),
    lang: libExports.string().optional().default('en'),
});
const PrintClProformaParamsSchema = libExports.object({
    agency_id: libExports.string(),
    from_date: libExports.string(),
    to_date: libExports.string(),
    lang: libExports.string().optional().default('en'),
    booking_nbr: libExports.string().optional().nullable().default(null),
});
const GetClProformaLinkParamsSchema = libExports.object({
    FD_ID: libExports.number(),
});
const VoidReceiptByCreditReceiptParamsSchema = libExports.object({
    FD_ID: libExports.number(),
    VOID_DATE: libExports.string().optional().default(hooks().format('YYYY-MM-DD')),
    REASON: libExports.string().optional().default(''),
});

class CityLedgerService {
    async fetchCL(params) {
        const payload = FetchCLParamsSchema.parse(params);
        const { data } = await axios.post('/Fetch_CL', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        if (payload.is_export_to_excel && data.My_Params_Fetch_CL.Link_excel) {
            downloadFile(data.My_Params_Fetch_CL.Link_excel);
        }
        return data.My_Result;
    }
    async printClFiscalDocument(params) {
        const payload = PrintClFiscalDocumentParamsSchema.parse(params);
        const { data } = await axios.post('/Print_CL_Fiscal_Document', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getClProformaLink(params) {
        const payload = GetClProformaLinkParamsSchema.parse(params);
        const { data } = await axios.post('/Get_CL_Proforma_Link', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async printClProforma(params) {
        const payload = PrintClProformaParamsSchema.parse(params);
        const { data } = await axios.post('/Print_CL_Proforma', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async printClStatement(params) {
        const payload = PrintClStatementParamsSchema.parse(params);
        const { data } = await axios.post('/Print_CL_Statement', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async toggleCLTxHold(params) {
        const payload = ToggleCLTxHoldParamsSchema.parse(params);
        const { data } = await axios.post('/Toggle_CL_Tx_Hold', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async handleCityLedgerTransaction(params) {
        const { data } = await axios.post('/Handle_City_Ledger_Transaction', params);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async syncBookingToCityLedger(params) {
        const payload = SyncBookingToCityLedgerParamsSchema.parse(params);
        const { data } = await axios.post('/Sync_Booking_To_City_Ledger', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async issueManualCLTx(params) {
        const payload = IssueManualCLTxParamsSchema.parse(params);
        const { data } = await axios.post('/Issue_Manual_CL_Tx', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async allocateCLCredit(params) {
        const payload = AllocateCLCreditParamsSchema.parse(params);
        const { data } = await axios.post('/Allocate_CL_Credit', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLAccountBalance(params) {
        const payload = CLAgencyContextSchema.parse(params);
        const { data } = await axios.post('/Get_CL_Account_Balance', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLUnallocatedTransactions(params) {
        const payload = CLAgencyContextSchema.parse(params);
        const { data } = await axios.post('/Get_CL_Unallocated_Transactions', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLAccountOverview(params) {
        const payload = CLAgencyContextSchema.parse(params);
        const { data } = await axios.post('/Get_CL_Account_Overview', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLAgingReport(params) {
        const payload = GetCLAgingReportParamsSchema.parse(params);
        const { data } = await axios.post('/Get_CL_Aging_Report', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLStatement(params) {
        const payload = GetCLStatementParamsSchema.parse(params);
        const { data } = await axios.post('/Get_CL_Statement', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async transferCLTransactions(params) {
        const payload = TransferCLTransactionsParamsSchema.parse(params);
        const { data } = await axios.post('/Transfer_CL_Transactions', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async issueFiscalDocument(params) {
        const payload = IssueFiscalDocumentParamsSchema.parse(params);
        const { data } = await axios.post('/Issue_Fiscal_Document', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async voidInvoiceByCreditNote(params) {
        const payload = VoidInvoiceByCreditNoteParamsSchema.parse(params);
        const { data } = await axios.post('/Void_Invoice_By_Credit_Note', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async voidReceiptByCreditReceipt(params) {
        const payload = VoidReceiptByCreditReceiptParamsSchema.parse(params);
        const { data } = await axios.post('/Void_Receipt_By_Credit_Receipt', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getFiscalDocuments(params) {
        const payload = GetFiscalDocumentsParamsSchema.parse(params);
        const { data } = await axios.post('/Get_Fiscal_Documents', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result?.My_Rows;
    }
    async issueInvoiceFromDraft(params) {
        const payload = IssueInvoiceFromDraftParamsSchema.parse(params);
        const { data } = await axios.post('/Issue_Invoice_From_Draft', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async deleteDraftFiscalDocument(params) {
        const payload = DeleteDraftFiscalDocumentParamsSchema.parse(params);
        const { data } = await axios.post('/Delete_Draft_Fiscal_Document', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
}

export { CityLedgerService as C, FdTypes as F, InvoiceableItemReason as I, VatIncludedCodes as V, FdStatus as a, ClTxTypeCode as b, InOut as c };
