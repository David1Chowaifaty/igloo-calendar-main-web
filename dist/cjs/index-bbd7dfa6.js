'use strict';

const axios = require('./axios-6e678d52.js');
const moment = require('./moment-1780b03a.js');
const index = require('./index-8bb117a0.js');
const utils = require('./utils-535ec4cf.js');

// ---------------------------------------------------------------------------
// Shared / Base types
// ---------------------------------------------------------------------------
const CategorySchema = index.stringType().nullable();
const RelEntitySchema = index.enumType(['TBL_BSAD', 'TBL_BSP']);
const CLAgencyContextSchema = index.objectType({
    AGENCY_ID: index.numberType(),
    CURRENCY_ID: index.numberType(),
});
const FiscalDocumentSchema = index.objectType({
    AGENCY_ID: index.numberType().nullable().optional(),
    AGENCY_NAME: index.stringType().nullable().optional(),
    CREDIT: index.numberType().nullable().optional(),
    CREDIT_DISPLAY: index.stringType().nullable().optional(),
    CURRENCY_CODE: index.stringType().nullable().optional(),
    CURRENCY_ID: index.numberType().nullable().optional(),
    DEBIT: index.numberType().nullable().optional(),
    DEBIT_DISPLAY: index.stringType().nullable().optional(),
    DOC_NUMBER: index.stringType().nullable().optional(),
    EXTERNAL_REF: index.stringType().nullable().optional(),
    FD_ID: index.numberType().nullable().optional(),
    FD_STATUS_CODE: index.stringType().nullable().optional(),
    FD_STATUS_NAME: index.stringType().nullable().optional(),
    FD_TYPE_CODE: index.stringType().nullable().optional(),
    FD_TYPE_NAME: index.stringType().nullable().optional(),
    ISSUE_DATE: index.stringType().nullable().optional(),
    ISSUE_DATE_DISPLAY: index.stringType().nullable().optional(),
    IS_PRINTED: index.booleanType().nullable().optional(),
    NET_AMOUNT: index.numberType().nullable().optional(),
    NET_AMOUNT_DISPLAY: index.stringType().nullable().optional(),
    TAX_AMOUNT: index.numberType().nullable().optional(),
    TAX_AMOUNT_DISPLAY: index.stringType().nullable().optional(),
    TOTAL_AMOUNT: index.numberType().nullable().optional(),
    BALANCE_BEFORE_TX: index.numberType().nullable(),
    BALANCE_AFTER_TX: index.numberType().nullable(),
    FROM_DATE: index.stringType().nullable().optional(),
    TO_DATE: index.stringType().nullable().optional(),
    BOOK_NBR: index.stringType().nullable().optional(),
});
// ---------------------------------------------------------------------------
// Transaction record & fetch
// ---------------------------------------------------------------------------
const ClTxSchema = index.objectType({
    BH_ID: index.numberType(),
    BSA_REF: index.unionType([index.nullType(), index.stringType()]),
    CATEGORY: CategorySchema,
    // booking info
    BOOK_NBR: index.stringType(),
    AGENT_BOOKING_NBR: index.unionType([index.stringType(), index.nullType()]),
    // guest counts
    ADULTS_NBR: index.numberType(),
    CHILD_NBR: index.numberType(),
    INFANT_NBR: index.numberType(),
    // guest info
    GUEST_FIRST_NAME: index.stringType(),
    GUEST_LAST_NAME: index.stringType(),
    // room info
    ROOM_CATEGORY_ID: index.numberType(),
    ROOM_TYPE_ID: index.numberType(),
    RATE_PLAN_ID: index.unionType([index.numberType(), index.nullType()]),
    PR_ID: index.numberType(),
    // dates
    FROM_DATE: index.stringType(),
    TO_DATE: index.stringType(),
    SERVICE_DATE: index.stringType(),
    ENTRY_DATE: index.stringType(),
    CITY_TAX_AMOUNT: index.numberType(),
    CITY_TAX_PERCENT: index.numberType(),
    CL_TX_ID: index.numberType(),
    CL_TX_TYPE_CODE: index.unionType([index.stringType(), index.nullType()]),
    CREDIT: index.numberType(),
    DEBIT: index.numberType(),
    CURRENCY_ID: index.numberType(),
    DESCRIPTION: index.stringType(),
    ENTRY_USER_ID: index.numberType(),
    EXTERNAL_REF: index.unionType([index.stringType(), index.nullType()]),
    FD_ID: index.unionType([index.numberType(), index.nullType()]),
    IS_HOLD: index.booleanType(),
    IS_LOCKED: index.booleanType(),
    My_Bh: index.anyType().nullable(),
    My_Currency: index.anyType().nullable(),
    My_Fd: FiscalDocumentSchema.nullable(),
    My_Pr: index.anyType().nullable(),
    My_Room_category: index.anyType().nullable(),
    RUNNING_BALANCE: index.numberType().nullable(),
    My_Room_type: index.anyType().nullable(),
    My_Travel_agency: index.nullType(),
    DOC_NUMBER: index.stringType().nullable().optional().default(null),
    NET_AMOUNT: index.numberType(),
    OWNER_ID: index.numberType(),
    PAY_METHOD_CODE: index.unionType([index.stringType(), index.nullType()]),
    REL_ENTITY: RelEntitySchema,
    REL_ENTITY_KEY: index.numberType(),
    TAX_AMOUNT: index.numberType(),
    TOTAL_AMOUNT: index.numberType(),
    TRAVEL_AGENCY_ID: index.numberType(),
    VAT_AMOUNT: index.numberType(),
    VAT_PERCENT: index.numberType(),
});
const FetchCLParamsSchema = index.objectType({
    AGENCY_ID: index.numberType(),
    START_DATE: index.stringType().optional().nullable().default(null),
    END_DATE: index.stringType().optional().nullable().default(null),
    START_ROW: index.numberType().default(0),
    END_ROW: index.numberType().default(20),
    SEARCH_QUERY: index.stringType().nullable().optional().default(null),
    IS_LOCKED: index.booleanType().optional().nullable().default(null),
    IS_HOLD: index.booleanType().optional().nullable().default(null),
    IS_CHECKED_OUT_ONLY: index.booleanType().optional().nullable().default(null),
    is_export_to_excel: index.booleanType().optional().nullable().default(false),
});
index.objectType({
    My_Cl_tx: index.arrayType(ClTxSchema),
    TOTAL_COUNT: index.numberType(),
});
// ---------------------------------------------------------------------------
// Transaction mutations
// ---------------------------------------------------------------------------
const ToggleCLTxHoldParamsSchema = index.objectType({
    CL_TX_ID: index.numberType(),
    IS_HOLD: index.booleanType(),
});
const IssueManualCLTxParamsSchema = index.objectType({
    CL_TX_ID: index.numberType().optional().default(-1),
    AGENCY_ID: index.numberType(),
    SERVICE_DATE: index.stringType(),
    // CATEGORY: z.string(),
    CL_TX_TYPE_CODE: index.stringType(),
    DESCRIPTION: index.stringType(),
    DEBIT: index.numberType(),
    CREDIT: index.numberType(),
    CURRENCY_ID: index.numberType(),
    PAY_METHOD_CODE: index.stringType(),
    EXTERNAL_REF: index.stringType(),
    // VAT handling for the transaction
    // 001 = VAT included in amount
    // 002 = VAT not applicable
    VAT_INCLUDED_CODE: index.enumType(['001', '002', '']).default(''),
    // VAT percentage (used only when VAT is included)
    VAT_PCT: index.numberType().optional().nullable().default(null),
    //Booking number system id.
    BH_ID: index.numberType().optional().nullable().default(null),
    IS_DELETE: index.booleanType().optional().default(false),
});
const AllocateCLCreditParamsSchema = index.objectType({
    CL_TX_ID: index.numberType(),
    List_Cl_tx_allocation: index.arrayType(index.objectType({
        FD_ID: index.numberType(),
        AMOUNT: index.numberType(),
        DESCRIPTION: index.stringType(),
    })),
});
const SyncBookingToCityLedgerParamsSchema = index.objectType({
    booking_nbr: index.numberType(),
    is_force_post: index.booleanType(),
});
const TransferCLTransactionsParamsSchema = index.objectType({
    AGENCY_ID: index.numberType(),
    List_CL_TX_ID: index.arrayType(index.numberType()),
});
const GetCLAgingReportParamsSchema = CLAgencyContextSchema.extend({
    AS_OF_DATE: index.stringType(),
});
const GetCLStatementParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: index.stringType(),
    END_DATE: index.stringType(),
});
// ---------------------------------------------------------------------------
// Fiscal documents
// ---------------------------------------------------------------------------
const IssueFiscalDocumentParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: index.stringType(),
    END_DATE: index.stringType(),
    LIST_CL_TX_ID: index.arrayType(index.numberType()).optional().default([]),
    BOOKING_NBR: index.stringType().optional().nullable().default(null),
    FD_TYPE_CODE: index.stringType(),
    FD_STATUS_CODE: index.stringType().optional().default('SENT'),
});
const GetFiscalDocumentsParamsSchema = index.objectType({
    DOC_NUMBER: index.stringType().optional().default(''),
    START_DATE: index.stringType().optional().nullable(),
    END_DATE: index.stringType().optional().nullable(),
    BOOK_NBR: index.stringType().optional().nullable(),
    LIST_FD_TYPE_CODE: index.arrayType(index.stringType()).optional().nullable().default(null),
    FD_STATUS_CODE: index.arrayType(index.stringType()).optional().nullable().default(null),
    AGENCY_ID: index.numberType(),
});
const IssueInvoiceFromDraftParamsSchema = index.objectType({
    FD_ID: index.numberType(),
});
const VoidInvoiceByCreditNoteParamsSchema = index.objectType({
    FD_ID: index.numberType(),
    VOID_DATE: index.stringType().optional().default(moment.hooks().format('YYYY-MM-DD')),
    REASON: index.stringType().optional(),
});
const DeleteDraftFiscalDocumentParamsSchema = index.objectType({
    FD_ID: index.numberType(),
});
const PrintClFiscalDocumentParamsSchema = index.objectType({
    doc_number: index.stringType(),
    lang: index.stringType().optional().default('en'),
});
const PrintClStatementParamsSchema = index.objectType({
    agency_id: index.stringType(),
    from_date: index.stringType(),
    to_date: index.stringType(),
    lang: index.stringType().optional().default('en'),
});
const PrintClProformaParamsSchema = index.objectType({
    agency_id: index.stringType(),
    from_date: index.stringType(),
    to_date: index.stringType(),
    lang: index.stringType().optional().default('en'),
    booking_nbr: index.stringType().optional().nullable().default(null),
});
const GetClProformaLinkParamsSchema = index.objectType({
    FD_ID: index.numberType(),
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

//# sourceMappingURL=index-bbd7dfa6.js.map