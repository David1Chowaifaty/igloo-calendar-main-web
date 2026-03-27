import axios from "axios";
import { AllocateCLCreditParamsSchema, CLAgencyContextSchema, GetCLAgingReportParamsSchema, GetCLStatementParamsSchema, IssueManualCLTxParamsSchema, SyncBookingToCityLedgerParamsSchema, ToggleCLTxHoldParamsSchema, TransferCLTransactionsParamsSchema, IssueFiscalDocumentParamsSchema, VoidInvoiceByCreditNoteParamsSchema, GetFiscalDocumentsParamsSchema, IssueInvoiceFromDraftParamsSchema, DeleteDraftFiscalDocumentParamsSchema, FetchCLParamsSchema, } from "./types";
export * from './types';
export class CityLedgerService {
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
//# sourceMappingURL=index.js.map
