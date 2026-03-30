'use strict';

const axios = require('./axios-6e678d52.js');
const moment = require('./moment-1780b03a.js');
const index = require('./index-8bb117a0.js');
const booking_service = require('./booking.service-56109c03.js');

// ---------------------------------------------------------------------------
// Shared / Base types
// ---------------------------------------------------------------------------
const CategorySchema = index.stringType().nullable();
const RelEntitySchema = index.enumType(['TBL_BSAD', 'TBL_BSP']);
const CLAgencyContextSchema = index.objectType({
    AGENCY_ID: index.numberType(),
    CURRENCY_ID: index.numberType(),
});
// ---------------------------------------------------------------------------
// Transaction record & fetch
// ---------------------------------------------------------------------------
const MyClTxSchema = index.objectType({
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
    My_Fd: index.anyType().nullable(),
    My_Pr: index.anyType().nullable(),
    My_Room_category: index.anyType().nullable(),
    RUNNING_BALANCE: index.numberType().nullable(),
    My_Room_type: index.anyType().nullable(),
    My_Travel_agency: index.nullType(),
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
    START_DATE: index.stringType(),
    END_DATE: index.stringType(),
    START_ROW: index.numberType().default(0),
    END_ROW: index.numberType().default(20),
    SEARCH_QUERY: index.stringType().nullable().optional().default(null),
    IS_LOCKED: index.booleanType().optional().nullable().default(null),
    IS_HOLD: index.booleanType().optional().nullable().default(null),
});
index.objectType({
    My_Cl_tx: index.arrayType(MyClTxSchema),
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
    CL_TX_ID: index.numberType(),
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
    BOOKING_NBR: index.numberType().optional().nullable().default(null),
    FD_TYPE_CODE: index.stringType(),
    FD_STATUS_CODE: index.stringType().optional().default('SENT'),
});
const GetFiscalDocumentsParamsSchema = index.objectType({
    DOC_NUMBER: index.stringType().optional().default(''),
    FROM_DATE: index.stringType(),
    END_DATE: index.stringType().optional(),
    FD_TYPE_CODE: index.stringType().optional().nullable().default(null),
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
        const { data } = await axios.axios.post('/Fetch_CL', payload);
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

function mapClTxToFolioRow(tx) {
    const status = tx.IS_LOCKED
        ? { id: 'billed', label: 'Billed', variant: 'success', description: '' }
        : tx.IS_HOLD
            ? { id: 'held', label: 'Held', variant: 'warning', description: '' }
            : { id: 'unbilled', label: 'Unbilled', variant: 'neutral', description: '' };
    return {
        _raw: tx,
        status,
        type: tx.CATEGORY,
        serviceDate: tx.SERVICE_DATE,
        bookingNumber: tx.BOOK_NBR ? Number(tx.BOOK_NBR) : null,
        docNumber: tx.EXTERNAL_REF,
        description: tx.DESCRIPTION,
        debit: tx.DEBIT,
        credit: tx.CREDIT,
        balance: tx.RUNNING_BALANCE,
    };
}

/**
 * Builds a grouped payment types record from raw entries and groups.
 *
 * @param paymentEntries - The flat list of all available payment  entries.
 * @returns A record where each key is a group CODE_NAME and the value is the
 *          ordered array of payment type entries belonging to that group.
 *
 * @example
 * const result = buildPaymentTypes(paymentEntries);
 * // {
 * //   PAYMENTS: [ { CODE_NAME: "001", CODE_VALUE_EN: "Cash", ... }, ... ],
 * //   ADJUSTMENTS: [ ... ],
 * //   ...
 * // }
 */
function buildPaymentTypes(paymentEntries) {
    try {
        const { groups, types } = index.z
            .object({
            types: booking_service.ZIEntrySchema.array().min(1),
            groups: booking_service.ZIEntrySchema.array().min(1),
            methods: booking_service.ZIEntrySchema.array().min(1),
        })
            .parse(paymentEntries);
        const items = [...types];
        const byCodes = (codes) => codes.map(code => items.find(i => i.CODE_NAME === code)).filter((x) => Boolean(x));
        const extractGroupCodes = (code) => {
            const paymentGroup = groups.find(pt => pt.CODE_NAME === code);
            return paymentGroup ? paymentGroup.CODE_VALUE_EN.split(',') : [];
        };
        let rec = {};
        groups.forEach(group => {
            // if (group.CODE_NAME === 'PAYMENTS') {
            //   rec[group.CODE_NAME] = methods.map(entry => ({
            //     ...entry,
            //     CODE_VALUE_EN: `Payment: ${entry.CODE_VALUE_EN}`,
            //   })) as IEntries[];
            // } else if (group.CODE_NAME === 'REFUND') {
            //   rec[group.CODE_NAME] = methods.map(entry => ({
            //     ...entry,
            //     CODE_VALUE_EN: `Refund: ${entry.CODE_VALUE_EN}`,
            //   })) as IEntries[];
            rec[group.CODE_NAME] = byCodes(extractGroupCodes(group.CODE_NAME));
        });
        return rec;
    }
    catch (error) {
        console.log(error);
        return {};
    }
}

exports.CityLedgerService = CityLedgerService;
exports.FD_TYPES = FD_TYPES;
exports.buildPaymentTypes = buildPaymentTypes;
exports.mapClTxToFolioRow = mapClTxToFolioRow;

//# sourceMappingURL=utils-894ab133.js.map