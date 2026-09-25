'use strict';

var axios = require('./axios-EresIryl.js');
var enums = require('./enums-BSCnMYlE.js');
var moment = require('./moment-CdViwxPQ.js');
var types = require('./types-BVJQZ50e.js');
var utils = require('./utils-CVHsag7R.js');

// ---------------------------------------------------------------------------
// Shared / Base types
// ---------------------------------------------------------------------------
const CategorySchema = types.stringType().nullable();
const RelEntitySchema = types.enumType(['TBL_BSAD', 'TBL_BSP', 'TBL_BSE']);
const CLAgencyContextSchema = types.objectType({
    AGENCY_ID: types.numberType(),
    CURRENCY_ID: types.numberType(),
});
const FiscalDocumentSchema = types.objectType({
    AGENCY_ID: types.numberType().nullable().optional(),
    AGENCY_NAME: types.stringType().nullable().optional(),
    CREDIT: types.numberType().nullable().optional(),
    CREDIT_DISPLAY: types.stringType().nullable().optional(),
    CURRENCY_CODE: types.stringType().nullable().optional(),
    CURRENCY_ID: types.numberType().nullable().optional(),
    DEBIT: types.numberType().nullable().optional(),
    DEBIT_DISPLAY: types.stringType().nullable().optional(),
    DOC_NUMBER: types.stringType().nullable().optional(),
    EXTERNAL_REF: types.stringType().nullable().optional(),
    FD_ID: types.numberType().nullable().optional(),
    FD_STATUS_CODE: types.stringType().nullable().optional(),
    FD_STATUS_NAME: types.stringType().nullable().optional(),
    FD_TYPE_CODE: types.stringType().nullable().optional(),
    FD_TYPE_NAME: types.stringType().nullable().optional(),
    ISSUE_DATE: types.stringType().nullable().optional(),
    ISSUE_DATE_DISPLAY: types.stringType().nullable().optional(),
    ISSUE_HOUR: types.numberType().nullable().optional(),
    ISSUE_MINUTE: types.numberType().nullable().optional(),
    IS_PRINTED: types.booleanType().nullable().optional(),
    NET_AMOUNT: types.numberType().nullable().optional(),
    NET_AMOUNT_DISPLAY: types.stringType().nullable().optional(),
    TAX_AMOUNT: types.numberType().nullable().optional(),
    TAX_AMOUNT_DISPLAY: types.stringType().nullable().optional(),
    TOTAL_AMOUNT: types.numberType().nullable().optional(),
    BALANCE_BEFORE_TX: types.numberType().nullable(),
    BALANCE_AFTER_TX: types.numberType().nullable(),
    FROM_DATE: types.stringType().nullable().optional(),
    TO_DATE: types.stringType().nullable().optional(),
    BOOK_NBR: types.stringType().nullable().optional(),
});
// ---------------------------------------------------------------------------
// Transaction record & fetch
// ---------------------------------------------------------------------------
const ClTxSchema = types.objectType({
    BH_ID: types.numberType(),
    BSA_REF: types.unionType([types.nullType(), types.stringType()]),
    CATEGORY: CategorySchema,
    // booking info
    BOOK_NBR: types.stringType(),
    AGENT_BOOKING_NBR: types.unionType([types.stringType(), types.nullType()]),
    // guest counts
    ADULTS_NBR: types.numberType(),
    CHILD_NBR: types.numberType(),
    INFANT_NBR: types.numberType(),
    // guest info
    GUEST_FIRST_NAME: types.stringType(),
    GUEST_LAST_NAME: types.stringType(),
    // room info
    ROOM_CATEGORY_ID: types.numberType(),
    ROOM_TYPE_ID: types.numberType(),
    RATE_PLAN_ID: types.unionType([types.numberType(), types.nullType()]),
    PR_ID: types.numberType(),
    // dates
    FROM_DATE: types.stringType(),
    TO_DATE: types.stringType(),
    SERVICE_DATE: types.stringType(),
    ENTRY_DATE: types.stringType(),
    CITY_TAX_AMOUNT: types.numberType(),
    CITY_TAX_PERCENT: types.numberType(),
    CL_TX_ID: types.numberType(),
    CL_TX_TYPE_CODE: types.unionType([types.stringType(), types.nullType()]),
    CREDIT: types.numberType(),
    DEBIT: types.numberType(),
    CURRENCY_ID: types.numberType(),
    DESCRIPTION: types.stringType(),
    ENTRY_USER_ID: types.numberType(),
    EXTERNAL_REF: types.unionType([types.stringType(), types.nullType()]),
    FD_ID: types.unionType([types.numberType(), types.nullType()]),
    IS_HOLD: types.booleanType(),
    IS_LOCKED: types.booleanType(),
    My_Bh: types.anyType().nullable(),
    My_Currency: types.anyType().nullable(),
    My_Fd: FiscalDocumentSchema.nullable(),
    My_Pr: types.anyType().nullable(),
    My_Room_category: types.anyType().nullable(),
    RUNNING_BALANCE: types.numberType().nullable(),
    My_Room_type: types.anyType().nullable(),
    My_Travel_agency: types.nullType(),
    DOC_NUMBER: types.stringType().nullable().optional().default(null),
    NET_AMOUNT: types.numberType(),
    OWNER_ID: types.numberType(),
    PAY_METHOD_CODE: types.unionType([types.stringType(), types.nullType()]),
    REL_ENTITY: RelEntitySchema,
    REL_ENTITY_KEY: types.numberType(),
    TAX_AMOUNT: types.numberType(),
    TOTAL_AMOUNT: types.numberType(),
    TRAVEL_AGENCY_ID: types.numberType(),
    VAT_AMOUNT: types.numberType(),
    VAT_PERCENT: types.numberType(),
});
const FetchCLParamsSchema = types.objectType({
    AGENCY_ID: types.numberType(),
    START_DATE: types.stringType().optional().nullable().default(null),
    END_DATE: types.stringType().optional().nullable().default(null),
    START_ROW: types.numberType().default(0),
    END_ROW: types.numberType().default(20),
    SEARCH_QUERY: types.stringType().nullable().optional().default(null),
    IS_LOCKED: types.booleanType().optional().nullable().default(null),
    IS_HOLD: types.booleanType().optional().nullable().default(null),
    IS_CHECKED_OUT_ONLY: types.booleanType().optional().nullable().default(null),
    is_export_to_excel: types.booleanType().optional().nullable().default(false),
});
types.objectType({
    My_Cl_tx: types.arrayType(ClTxSchema),
    TOTAL_COUNT: types.numberType(),
});
// ---------------------------------------------------------------------------
// Transaction mutations
// ---------------------------------------------------------------------------
const ToggleCLTxHoldParamsSchema = types.objectType({
    CL_TX_ID: types.numberType(),
    IS_HOLD: types.booleanType(),
});
const IssueManualCLTxParamsSchema = types.objectType({
    CL_TX_ID: types.numberType().optional().default(-1),
    AGENCY_ID: types.numberType(),
    SERVICE_DATE: types.stringType(),
    // CATEGORY: z.string(),
    CL_TX_TYPE_CODE: types.stringType(),
    DESCRIPTION: types.stringType(),
    DEBIT: types.numberType(),
    CREDIT: types.numberType(),
    CURRENCY_ID: types.numberType(),
    PAY_METHOD_CODE: types.stringType().optional().default(''),
    EXTERNAL_REF: types.stringType(),
    // VAT handling for the transaction
    // 001 = VAT included in amount
    // 002 = VAT not applicable
    VAT_INCLUDED_CODE: types.enumType(['001', '002', '']).default(''),
    // VAT percentage (used only when VAT is included)
    VAT_PCT: types.numberType().optional().nullable().default(null),
    //Booking number system id.
    BH_ID: types.numberType().optional().nullable().default(null),
    IS_DELETE: types.booleanType().optional().default(false),
}).superRefine((data, ctx) => {
    if (data.CL_TX_TYPE_CODE === enums.ClTxTypeCode.Payment && !data.PAY_METHOD_CODE) {
        ctx.addIssue({
            code: types.ZodIssueCode.custom,
            path: ['PAY_METHOD_CODE'],
            message: 'PAY_METHOD_CODE is required for payment transactions',
        });
    }
});
const AllocateCLCreditParamsSchema = types.objectType({
    CL_TX_ID: types.numberType(),
    List_Cl_tx_allocation: types.arrayType(types.objectType({
        FD_ID: types.numberType(),
        AMOUNT: types.numberType(),
        DESCRIPTION: types.stringType(),
    })),
});
const SyncBookingToCityLedgerParamsSchema = types.objectType({
    booking_nbr: types.numberType(),
    is_force_post: types.booleanType(),
});
const TransferCLTransactionsParamsSchema = types.objectType({
    AGENCY_ID: types.numberType(),
    List_CL_TX_ID: types.arrayType(types.numberType()),
});
const GetCLAgingReportParamsSchema = CLAgencyContextSchema.extend({
    AS_OF_DATE: types.stringType(),
});
const GetCLStatementParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: types.stringType(),
    END_DATE: types.stringType(),
});
// ---------------------------------------------------------------------------
// Fiscal documents
// ---------------------------------------------------------------------------
const IssueFiscalDocumentParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: types.stringType(),
    END_DATE: types.stringType(),
    LIST_CL_TX_ID: types.arrayType(types.numberType()).optional().default([]),
    BOOKING_NBR: types.stringType().optional().nullable().default(null),
    FD_TYPE_CODE: types.stringType(),
    FD_STATUS_CODE: types.stringType().optional().default(enums.FdStatus.Issued),
});
const GetFiscalDocumentsParamsSchema = types.objectType({
    DOC_NUMBER: types.stringType().optional().default(''),
    START_DATE: types.stringType().optional().nullable(),
    END_DATE: types.stringType().optional().nullable(),
    BOOK_NBR: types.stringType().optional().nullable(),
    LIST_FD_TYPE_CODE: types.arrayType(types.stringType()).optional().nullable().default(null),
    LIST_FD_STATUS_CODE: types.arrayType(types.stringType()).optional().nullable().default(null),
    AGENCY_ID: types.numberType(),
});
const IssueInvoiceFromDraftParamsSchema = types.objectType({
    FD_ID: types.numberType(),
});
const VoidInvoiceByCreditNoteParamsSchema = types.objectType({
    FD_ID: types.numberType(),
    VOID_DATE: types.stringType().optional().default(moment.hooks().format('YYYY-MM-DD')),
    REASON: types.stringType().optional(),
});
const DeleteDraftFiscalDocumentParamsSchema = types.objectType({
    FD_ID: types.numberType(),
});
const PrintClFiscalDocumentParamsSchema = types.objectType({
    doc_number: types.stringType(),
    lang: types.stringType().optional().default('en'),
});
const PrintClStatementParamsSchema = types.objectType({
    agency_id: types.stringType(),
    from_date: types.stringType(),
    to_date: types.stringType(),
    lang: types.stringType().optional().default('en'),
});
const PrintClProformaParamsSchema = types.objectType({
    agency_id: types.stringType(),
    from_date: types.stringType(),
    to_date: types.stringType(),
    lang: types.stringType().optional().default('en'),
    booking_nbr: types.stringType().optional().nullable().default(null),
});
const GetClProformaLinkParamsSchema = types.objectType({
    FD_ID: types.numberType(),
});
const VoidReceiptByCreditReceiptParamsSchema = types.objectType({
    FD_ID: types.numberType(),
    VOID_DATE: types.stringType().optional().default(moment.hooks().format('YYYY-MM-DD')),
    REASON: types.stringType().optional().default(''),
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
