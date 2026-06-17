'use strict';

var axios = require('./axios-C-Phc0sj.js');
var index = require('./index-DyWMrNm8.js');
var utils = require('./utils-BZv1W7LE.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-BbZbFHz-.js');
require('./locales.store-BaDo11sT.js');
require('./booking.dto-_IwrBIs_.js');

class CityLedgerService {
    async fetchCL(params) {
        const payload = index.FetchCLParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Fetch_CL', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        if (payload.is_export_to_excel && data.My_Params_Fetch_CL.Link_excel) {
            utils.downloadFile(data.My_Params_Fetch_CL.Link_excel);
        }
        return data.My_Result;
    }
    async printClFiscalDocument(params) {
        const payload = index.PrintClFiscalDocumentParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Print_CL_Fiscal_Document', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getClProformaLink(params) {
        const payload = index.GetClProformaLinkParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Proforma_Link', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async printClProforma(params) {
        const payload = index.PrintClProformaParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Print_CL_Proforma', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async printClStatement(params) {
        const payload = index.PrintClStatementParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Print_CL_Statement', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async toggleCLTxHold(params) {
        const payload = index.ToggleCLTxHoldParamsSchema.parse(params);
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
        const payload = index.SyncBookingToCityLedgerParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Sync_Booking_To_City_Ledger', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async issueManualCLTx(params) {
        const payload = index.IssueManualCLTxParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Issue_Manual_CL_Tx', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async allocateCLCredit(params) {
        const payload = index.AllocateCLCreditParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Allocate_CL_Credit', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLAccountBalance(params) {
        const payload = index.CLAgencyContextSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Account_Balance', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLUnallocatedTransactions(params) {
        const payload = index.CLAgencyContextSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Unallocated_Transactions', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLAccountOverview(params) {
        const payload = index.CLAgencyContextSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Account_Overview', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLAgingReport(params) {
        const payload = index.GetCLAgingReportParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Aging_Report', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getCLStatement(params) {
        const payload = index.GetCLStatementParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_CL_Statement', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async transferCLTransactions(params) {
        const payload = index.TransferCLTransactionsParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Transfer_CL_Transactions', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async issueFiscalDocument(params) {
        const payload = index.IssueFiscalDocumentParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Issue_Fiscal_Document', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async voidInvoiceByCreditNote(params) {
        const payload = index.VoidInvoiceByCreditNoteParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Void_Invoice_By_Credit_Note', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async voidReceiptByCreditReceipt(params) {
        const payload = index.VoidReceiptByCreditReceiptParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Void_Receipt_By_Credit_Receipt', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async getFiscalDocuments(params) {
        const payload = index.GetFiscalDocumentsParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Get_Fiscal_Documents', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result?.My_Rows;
    }
    async issueInvoiceFromDraft(params) {
        const payload = index.IssueInvoiceFromDraftParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Issue_Invoice_From_Draft', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
    async deleteDraftFiscalDocument(params) {
        const payload = index.DeleteDraftFiscalDocumentParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Delete_Draft_Fiscal_Document', payload);
        if (data.ExceptionMsg !== '')
            throw new Error(data.ExceptionMsg);
        return data.My_Result;
    }
}

const actionableClTypes = new Set([index.ClTxTypeCode.Adjustment, index.ClTxTypeCode.CancellationPenalty, index.ClTxTypeCode.Discount, index.ClTxTypeCode.StandardChargeDebit]);
const debitFdTypeCode = new Set([index.FdTypes.Invoice, index.FdTypes.DebitNote, index.FdTypes.Draft, index.FdTypes.CreditReceipt]);

exports.CityLedgerService = CityLedgerService;
exports.actionableClTypes = actionableClTypes;
exports.debitFdTypeCode = debitFdTypeCode;
