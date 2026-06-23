'use strict';

var axios = require('./axios-EresIryl.js');
var enums = require('./enums-BfYSWFRQ.js');
var moment = require('./moment-CdViwxPQ.js');
var index = require('./index-CLqkDPTC.js');
var utils = require('./utils-DgT4kKsD.js');

// ---------------------------------------------------------------------------
// Shared / Base types
// ---------------------------------------------------------------------------
const CategorySchema = index.libExports.string().nullable();
const RelEntitySchema = index.libExports.enum(['TBL_BSAD', 'TBL_BSP']);
const CLAgencyContextSchema = index.libExports.object({
    AGENCY_ID: index.libExports.number(),
    CURRENCY_ID: index.libExports.number(),
});
const FiscalDocumentSchema = index.libExports.object({
    AGENCY_ID: index.libExports.number().nullable().optional(),
    AGENCY_NAME: index.libExports.string().nullable().optional(),
    CREDIT: index.libExports.number().nullable().optional(),
    CREDIT_DISPLAY: index.libExports.string().nullable().optional(),
    CURRENCY_CODE: index.libExports.string().nullable().optional(),
    CURRENCY_ID: index.libExports.number().nullable().optional(),
    DEBIT: index.libExports.number().nullable().optional(),
    DEBIT_DISPLAY: index.libExports.string().nullable().optional(),
    DOC_NUMBER: index.libExports.string().nullable().optional(),
    EXTERNAL_REF: index.libExports.string().nullable().optional(),
    FD_ID: index.libExports.number().nullable().optional(),
    FD_STATUS_CODE: index.libExports.string().nullable().optional(),
    FD_STATUS_NAME: index.libExports.string().nullable().optional(),
    FD_TYPE_CODE: index.libExports.string().nullable().optional(),
    FD_TYPE_NAME: index.libExports.string().nullable().optional(),
    ISSUE_DATE: index.libExports.string().nullable().optional(),
    ISSUE_DATE_DISPLAY: index.libExports.string().nullable().optional(),
    IS_PRINTED: index.libExports.boolean().nullable().optional(),
    NET_AMOUNT: index.libExports.number().nullable().optional(),
    NET_AMOUNT_DISPLAY: index.libExports.string().nullable().optional(),
    TAX_AMOUNT: index.libExports.number().nullable().optional(),
    TAX_AMOUNT_DISPLAY: index.libExports.string().nullable().optional(),
    TOTAL_AMOUNT: index.libExports.number().nullable().optional(),
    BALANCE_BEFORE_TX: index.libExports.number().nullable(),
    BALANCE_AFTER_TX: index.libExports.number().nullable(),
    FROM_DATE: index.libExports.string().nullable().optional(),
    TO_DATE: index.libExports.string().nullable().optional(),
    BOOK_NBR: index.libExports.string().nullable().optional(),
});
// ---------------------------------------------------------------------------
// Transaction record & fetch
// ---------------------------------------------------------------------------
const ClTxSchema = index.libExports.object({
    BH_ID: index.libExports.number(),
    BSA_REF: index.libExports.union([index.libExports.null(), index.libExports.string()]),
    CATEGORY: CategorySchema,
    // booking info
    BOOK_NBR: index.libExports.string(),
    AGENT_BOOKING_NBR: index.libExports.union([index.libExports.string(), index.libExports.null()]),
    // guest counts
    ADULTS_NBR: index.libExports.number(),
    CHILD_NBR: index.libExports.number(),
    INFANT_NBR: index.libExports.number(),
    // guest info
    GUEST_FIRST_NAME: index.libExports.string(),
    GUEST_LAST_NAME: index.libExports.string(),
    // room info
    ROOM_CATEGORY_ID: index.libExports.number(),
    ROOM_TYPE_ID: index.libExports.number(),
    RATE_PLAN_ID: index.libExports.union([index.libExports.number(), index.libExports.null()]),
    PR_ID: index.libExports.number(),
    // dates
    FROM_DATE: index.libExports.string(),
    TO_DATE: index.libExports.string(),
    SERVICE_DATE: index.libExports.string(),
    ENTRY_DATE: index.libExports.string(),
    CITY_TAX_AMOUNT: index.libExports.number(),
    CITY_TAX_PERCENT: index.libExports.number(),
    CL_TX_ID: index.libExports.number(),
    CL_TX_TYPE_CODE: index.libExports.union([index.libExports.string(), index.libExports.null()]),
    CREDIT: index.libExports.number(),
    DEBIT: index.libExports.number(),
    CURRENCY_ID: index.libExports.number(),
    DESCRIPTION: index.libExports.string(),
    ENTRY_USER_ID: index.libExports.number(),
    EXTERNAL_REF: index.libExports.union([index.libExports.string(), index.libExports.null()]),
    FD_ID: index.libExports.union([index.libExports.number(), index.libExports.null()]),
    IS_HOLD: index.libExports.boolean(),
    IS_LOCKED: index.libExports.boolean(),
    My_Bh: index.libExports.any().nullable(),
    My_Currency: index.libExports.any().nullable(),
    My_Fd: FiscalDocumentSchema.nullable(),
    My_Pr: index.libExports.any().nullable(),
    My_Room_category: index.libExports.any().nullable(),
    RUNNING_BALANCE: index.libExports.number().nullable(),
    My_Room_type: index.libExports.any().nullable(),
    My_Travel_agency: index.libExports.null(),
    DOC_NUMBER: index.libExports.string().nullable().optional().default(null),
    NET_AMOUNT: index.libExports.number(),
    OWNER_ID: index.libExports.number(),
    PAY_METHOD_CODE: index.libExports.union([index.libExports.string(), index.libExports.null()]),
    REL_ENTITY: RelEntitySchema,
    REL_ENTITY_KEY: index.libExports.number(),
    TAX_AMOUNT: index.libExports.number(),
    TOTAL_AMOUNT: index.libExports.number(),
    TRAVEL_AGENCY_ID: index.libExports.number(),
    VAT_AMOUNT: index.libExports.number(),
    VAT_PERCENT: index.libExports.number(),
});
const FetchCLParamsSchema = index.libExports.object({
    AGENCY_ID: index.libExports.number(),
    START_DATE: index.libExports.string().optional().nullable().default(null),
    END_DATE: index.libExports.string().optional().nullable().default(null),
    START_ROW: index.libExports.number().default(0),
    END_ROW: index.libExports.number().default(20),
    SEARCH_QUERY: index.libExports.string().nullable().optional().default(null),
    IS_LOCKED: index.libExports.boolean().optional().nullable().default(null),
    IS_HOLD: index.libExports.boolean().optional().nullable().default(null),
    IS_CHECKED_OUT_ONLY: index.libExports.boolean().optional().nullable().default(null),
    is_export_to_excel: index.libExports.boolean().optional().nullable().default(false),
});
index.libExports.object({
    My_Cl_tx: index.libExports.array(ClTxSchema),
    TOTAL_COUNT: index.libExports.number(),
});
// ---------------------------------------------------------------------------
// Transaction mutations
// ---------------------------------------------------------------------------
const ToggleCLTxHoldParamsSchema = index.libExports.object({
    CL_TX_ID: index.libExports.number(),
    IS_HOLD: index.libExports.boolean(),
});
const IssueManualCLTxParamsSchema = index.libExports.object({
    CL_TX_ID: index.libExports.number().optional().default(-1),
    AGENCY_ID: index.libExports.number(),
    SERVICE_DATE: index.libExports.string(),
    // CATEGORY: z.string(),
    CL_TX_TYPE_CODE: index.libExports.string(),
    DESCRIPTION: index.libExports.string(),
    DEBIT: index.libExports.number(),
    CREDIT: index.libExports.number(),
    CURRENCY_ID: index.libExports.number(),
    PAY_METHOD_CODE: index.libExports.string(),
    EXTERNAL_REF: index.libExports.string(),
    // VAT handling for the transaction
    // 001 = VAT included in amount
    // 002 = VAT not applicable
    VAT_INCLUDED_CODE: index.libExports.enum(['001', '002', '']).default(''),
    // VAT percentage (used only when VAT is included)
    VAT_PCT: index.libExports.number().optional().nullable().default(null),
    //Booking number system id.
    BH_ID: index.libExports.number().optional().nullable().default(null),
    IS_DELETE: index.libExports.boolean().optional().default(false),
});
const AllocateCLCreditParamsSchema = index.libExports.object({
    CL_TX_ID: index.libExports.number(),
    List_Cl_tx_allocation: index.libExports.array(index.libExports.object({
        FD_ID: index.libExports.number(),
        AMOUNT: index.libExports.number(),
        DESCRIPTION: index.libExports.string(),
    })),
});
const SyncBookingToCityLedgerParamsSchema = index.libExports.object({
    booking_nbr: index.libExports.number(),
    is_force_post: index.libExports.boolean(),
});
const TransferCLTransactionsParamsSchema = index.libExports.object({
    AGENCY_ID: index.libExports.number(),
    List_CL_TX_ID: index.libExports.array(index.libExports.number()),
});
const GetCLAgingReportParamsSchema = CLAgencyContextSchema.extend({
    AS_OF_DATE: index.libExports.string(),
});
const GetCLStatementParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: index.libExports.string(),
    END_DATE: index.libExports.string(),
});
// ---------------------------------------------------------------------------
// Fiscal documents
// ---------------------------------------------------------------------------
const IssueFiscalDocumentParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: index.libExports.string(),
    END_DATE: index.libExports.string(),
    LIST_CL_TX_ID: index.libExports.array(index.libExports.number()).optional().default([]),
    BOOKING_NBR: index.libExports.string().optional().nullable().default(null),
    FD_TYPE_CODE: index.libExports.string(),
    FD_STATUS_CODE: index.libExports.string().optional().default(enums.FdStatus.Issued),
});
const GetFiscalDocumentsParamsSchema = index.libExports.object({
    DOC_NUMBER: index.libExports.string().optional().default(''),
    START_DATE: index.libExports.string().optional().nullable(),
    END_DATE: index.libExports.string().optional().nullable(),
    BOOK_NBR: index.libExports.string().optional().nullable(),
    LIST_FD_TYPE_CODE: index.libExports.array(index.libExports.string()).optional().nullable().default(null),
    LIST_FD_STATUS_CODE: index.libExports.array(index.libExports.string()).optional().nullable().default(null),
    AGENCY_ID: index.libExports.number(),
});
const IssueInvoiceFromDraftParamsSchema = index.libExports.object({
    FD_ID: index.libExports.number(),
});
const VoidInvoiceByCreditNoteParamsSchema = index.libExports.object({
    FD_ID: index.libExports.number(),
    VOID_DATE: index.libExports.string().optional().default(moment.hooks().format('YYYY-MM-DD')),
    REASON: index.libExports.string().optional(),
});
const DeleteDraftFiscalDocumentParamsSchema = index.libExports.object({
    FD_ID: index.libExports.number(),
});
const PrintClFiscalDocumentParamsSchema = index.libExports.object({
    doc_number: index.libExports.string(),
    lang: index.libExports.string().optional().default('en'),
});
const PrintClStatementParamsSchema = index.libExports.object({
    agency_id: index.libExports.string(),
    from_date: index.libExports.string(),
    to_date: index.libExports.string(),
    lang: index.libExports.string().optional().default('en'),
});
const PrintClProformaParamsSchema = index.libExports.object({
    agency_id: index.libExports.string(),
    from_date: index.libExports.string(),
    to_date: index.libExports.string(),
    lang: index.libExports.string().optional().default('en'),
    booking_nbr: index.libExports.string().optional().nullable().default(null),
});
const GetClProformaLinkParamsSchema = index.libExports.object({
    FD_ID: index.libExports.number(),
});
const VoidReceiptByCreditReceiptParamsSchema = index.libExports.object({
    FD_ID: index.libExports.number(),
    VOID_DATE: index.libExports.string().optional().default(moment.hooks().format('YYYY-MM-DD')),
    REASON: index.libExports.string().optional().default(''),
});

class CityLedgerService {
    async fetchCL(params) {
        const payload = FetchCLParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Fetch_CL', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        if (payload.is_export_to_excel && data.My_Params_Fetch_CL.Link_excel) {
            utils.downloadFile(data.My_Params_Fetch_CL.Link_excel);
        }
        return data.My_Result;
    }
    async printClFiscalDocument(params) {
        const payload = PrintClFiscalDocumentParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Print_CL_Fiscal_Document', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getClProformaLink(params) {
        const payload = GetClProformaLinkParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Proforma_Link', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async printClProforma(params) {
        const payload = PrintClProformaParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Print_CL_Proforma', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async printClStatement(params) {
        const payload = PrintClStatementParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Print_CL_Statement', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async toggleCLTxHold(params) {
        const payload = ToggleCLTxHoldParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Toggle_CL_Tx_Hold', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async handleCityLedgerTransaction(params) {
        const { data } = await axios.axios.post('/Handle_City_Ledger_Transaction', params);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async syncBookingToCityLedger(params) {
        const payload = SyncBookingToCityLedgerParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Sync_Booking_To_City_Ledger', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async issueManualCLTx(params) {
        const payload = IssueManualCLTxParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Issue_Manual_CL_Tx', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async allocateCLCredit(params) {
        const payload = AllocateCLCreditParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Allocate_CL_Credit', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLAccountBalance(params) {
        const payload = CLAgencyContextSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Account_Balance', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLUnallocatedTransactions(params) {
        const payload = CLAgencyContextSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Unallocated_Transactions', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLAccountOverview(params) {
        const payload = CLAgencyContextSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Account_Overview', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLAgingReport(params) {
        const payload = GetCLAgingReportParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Aging_Report', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLStatement(params) {
        const payload = GetCLStatementParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Statement', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async transferCLTransactions(params) {
        const payload = TransferCLTransactionsParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Transfer_CL_Transactions', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async issueFiscalDocument(params) {
        const payload = IssueFiscalDocumentParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Issue_Fiscal_Document', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async voidInvoiceByCreditNote(params) {
        const payload = VoidInvoiceByCreditNoteParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Void_Invoice_By_Credit_Note', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async voidReceiptByCreditReceipt(params) {
        const payload = VoidReceiptByCreditReceiptParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Void_Receipt_By_Credit_Receipt', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getFiscalDocuments(params) {
        const payload = GetFiscalDocumentsParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_Fiscal_Documents', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result?.My_Rows;
    }
    async issueInvoiceFromDraft(params) {
        const payload = IssueInvoiceFromDraftParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Issue_Invoice_From_Draft', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async deleteDraftFiscalDocument(params) {
        const payload = DeleteDraftFiscalDocumentParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Delete_Draft_Fiscal_Document', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
}

exports.CityLedgerService = CityLedgerService;
