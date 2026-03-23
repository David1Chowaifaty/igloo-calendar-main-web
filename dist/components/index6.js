import { a as axios } from './axios.js';
import { h as hooks } from './moment.js';
import { s as stringType, e as enumType, o as objectType, n as numberType, u as unionType, d as nullType, b as booleanType, f as anyType, a as arrayType } from './index2.js';

// ---------------------------------------------------------------------------
// Shared / Base types
// ---------------------------------------------------------------------------
const CategorySchema = stringType().nullable();
const RelEntitySchema = enumType(['TBL_BSAD', 'TBL_BSP']);
const CLAgencyContextSchema = objectType({
    AGENCY_ID: numberType(),
    CURRENCY_ID: numberType(),
});
// ---------------------------------------------------------------------------
// Transaction record & fetch
// ---------------------------------------------------------------------------
const MyClTxSchema = objectType({
    BH_ID: numberType(),
    BSA_REF: unionType([nullType(), stringType()]),
    CATEGORY: CategorySchema,
    // booking info
    BOOK_NBR: stringType(),
    AGENT_BOOKING_NBR: unionType([stringType(), nullType()]),
    // guest counts
    ADULTS_NBR: numberType(),
    CHILD_NBR: numberType(),
    INFANT_NBR: numberType(),
    // guest info
    GUEST_FIRST_NAME: stringType(),
    GUEST_LAST_NAME: stringType(),
    // room info
    ROOM_CATEGORY_ID: numberType(),
    ROOM_TYPE_ID: numberType(),
    RATE_PLAN_ID: unionType([numberType(), nullType()]),
    PR_ID: numberType(),
    // dates
    FROM_DATE: stringType(),
    TO_DATE: stringType(),
    SERVICE_DATE: stringType(),
    ENTRY_DATE: stringType(),
    CITY_TAX_AMOUNT: numberType(),
    CITY_TAX_PERCENT: numberType(),
    CL_TX_ID: numberType(),
    CL_TX_TYPE_CODE: unionType([stringType(), nullType()]),
    CREDIT: numberType(),
    DEBIT: numberType(),
    CURRENCY_ID: numberType(),
    DESCRIPTION: stringType(),
    ENTRY_USER_ID: numberType(),
    EXTERNAL_REF: unionType([stringType(), nullType()]),
    FD_ID: unionType([numberType(), nullType()]),
    IS_HOLD: booleanType(),
    IS_LOCKED: booleanType(),
    My_Bh: anyType().nullable(),
    My_Currency: anyType().nullable(),
    My_Fd: anyType().nullable(),
    My_Pr: anyType().nullable(),
    My_Room_category: anyType().nullable(),
    RUNNING_BALANCE: numberType().nullable(),
    My_Room_type: anyType().nullable(),
    My_Travel_agency: nullType(),
    NET_AMOUNT: numberType(),
    OWNER_ID: numberType(),
    PAY_METHOD_CODE: unionType([stringType(), nullType()]),
    REL_ENTITY: RelEntitySchema,
    REL_ENTITY_KEY: numberType(),
    TAX_AMOUNT: numberType(),
    TOTAL_AMOUNT: numberType(),
    TRAVEL_AGENCY_ID: numberType(),
    VAT_AMOUNT: numberType(),
    VAT_PERCENT: numberType(),
});
const FetchCLParamsSchema = objectType({
    AGENCY_ID: numberType(),
    START_DATE: stringType(),
    END_DATE: stringType(),
    START_ROW: numberType().default(0),
    END_ROW: numberType().default(20),
    SEARCH_QUERY: stringType().nullable().optional().default(null),
    IS_LOCKED: booleanType().optional().nullable().default(null),
    IS_HOLD: booleanType().optional().nullable().default(null),
});
objectType({
    My_Cl_tx: arrayType(MyClTxSchema),
    TOTAL_COUNT: numberType(),
});
// ---------------------------------------------------------------------------
// Transaction mutations
// ---------------------------------------------------------------------------
const ToggleCLTxHoldParamsSchema = objectType({
    CL_TX_ID: numberType(),
    IS_HOLD: booleanType(),
});
const IssueManualCLTxParamsSchema = objectType({
    CL_TX_ID: numberType(),
    AGENCY_ID: numberType(),
    SERVICE_DATE: stringType(),
    // CATEGORY: z.string(),
    CL_TX_TYPE_CODE: stringType(),
    DESCRIPTION: stringType(),
    DEBIT: numberType(),
    CREDIT: numberType(),
    CURRENCY_ID: numberType(),
    PAY_METHOD_CODE: stringType(),
    EXTERNAL_REF: stringType(),
    // VAT handling for the transaction
    // 001 = VAT included in amount
    // 002 = VAT not applicable
    VAT_INCLUDED_CODE: enumType(['001', '002', '']).default(''),
    // VAT percentage (used only when VAT is included)
    VAT_PCT: numberType().optional().nullable().default(null),
    IS_DELETE: booleanType().optional().default(false),
});
const AllocateCLCreditParamsSchema = objectType({
    CL_TX_ID: numberType(),
    List_Cl_tx_allocation: arrayType(objectType({
        FD_ID: numberType(),
        AMOUNT: numberType(),
        DESCRIPTION: stringType(),
    })),
});
const SyncBookingToCityLedgerParamsSchema = objectType({
    booking_nbr: numberType(),
    is_force_post: booleanType(),
});
const TransferCLTransactionsParamsSchema = objectType({
    AGENCY_ID: numberType(),
    List_CL_TX_ID: arrayType(numberType()),
});
const GetCLAgingReportParamsSchema = CLAgencyContextSchema.extend({
    AS_OF_DATE: stringType(),
});
const GetCLStatementParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: stringType(),
    END_DATE: stringType(),
});
// ---------------------------------------------------------------------------
// Fiscal documents
// ---------------------------------------------------------------------------
const IssueFiscalDocumentParamsSchema = CLAgencyContextSchema.extend({
    START_DATE: stringType(),
    END_DATE: stringType(),
    LIST_CL_TX_ID: arrayType(numberType()).optional().default([]),
    BOOKING_NBR: numberType().optional().nullable().default(null),
    FD_TYPE_CODE: stringType(),
    FD_STATUS_CODE: stringType().optional().default('SENT'),
});
const GetFiscalDocumentsParamsSchema = objectType({
    DOC_NUMBER: stringType().optional().default(''),
    FROM_DATE: stringType(),
    END_DATE: stringType().optional(),
    FD_TYPE_CODE: stringType().optional().nullable().default(null),
    AGENCY_ID: numberType(),
});
const IssueInvoiceFromDraftParamsSchema = objectType({
    FD_ID: numberType(),
});
const VoidInvoiceByCreditNoteParamsSchema = objectType({
    FD_ID: numberType(),
    VOID_DATE: stringType().optional().default(hooks().format('YYYY-MM-DD')),
    REASON: stringType().optional(),
});
const DeleteDraftFiscalDocumentParamsSchema = objectType({
    FD_ID: numberType(),
});
const FD_TYPES = {
    Draft: 'DFT',
    Invoice: 'INV',
    CreditNote: 'CN',
    DebitNote: 'DN',
    Receipt: 'REC',
};

class CityLedgerService {
    async fetchCL(params) {
        const payload = FetchCLParamsSchema.parse(params);
        const { data } = await axios.post('/Fetch_CL', payload);
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

export { CityLedgerService as C, FD_TYPES as F };

//# sourceMappingURL=index6.js.map