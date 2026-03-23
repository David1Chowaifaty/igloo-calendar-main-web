import { type CLAccountBalance, type AllocateCLCreditParams, type FetchCLParams, type FetchCLResult, type GetCLAccountBalanceParams, type GetCLAccountOverviewParams, type GetCLAgingReportParams, type GetCLStatementParams, type GetCLUnallocatedTransactionsParams, type IssueManualCLTxParams, type SyncBookingToCityLedgerParams, type ToggleCLTxHoldParams, type TransferCLTransactionsParams, type CLStatements, type IssueFiscalDocumentParams, type VoidInvoiceByCreditNoteParams, type CLAccountOverview, type GetFiscalDocumentsParams, type IssueInvoiceFromDraftParams, type DeleteDraftFiscalDocumentParams, type FiscalDocuments } from './types';
export * from './types';
export declare class CityLedgerService {
    fetchCL(params: FetchCLParams): Promise<FetchCLResult>;
    toggleCLTxHold(params: ToggleCLTxHoldParams): Promise<any>;
    handleCityLedgerTransaction(params: Record<string, unknown>): Promise<any>;
    syncBookingToCityLedger(params: SyncBookingToCityLedgerParams): Promise<any>;
    issueManualCLTx(params: IssueManualCLTxParams): Promise<any>;
    allocateCLCredit(params: AllocateCLCreditParams): Promise<any>;
    getCLAccountBalance(params: GetCLAccountBalanceParams): Promise<CLAccountBalance>;
    getCLUnallocatedTransactions(params: GetCLUnallocatedTransactionsParams): Promise<any>;
    getCLAccountOverview(params: GetCLAccountOverviewParams): Promise<CLAccountOverview>;
    getCLAgingReport(params: GetCLAgingReportParams): Promise<any>;
    getCLStatement(params: GetCLStatementParams): Promise<CLStatements>;
    transferCLTransactions(params: TransferCLTransactionsParams): Promise<any>;
    issueFiscalDocument(params: IssueFiscalDocumentParams): Promise<any>;
    voidInvoiceByCreditNote(params: VoidInvoiceByCreditNoteParams): Promise<any>;
    getFiscalDocuments(params: GetFiscalDocumentsParams): Promise<FiscalDocuments>;
    issueInvoiceFromDraft(params: IssueInvoiceFromDraftParams): Promise<any>;
    deleteDraftFiscalDocument(params: DeleteDraftFiscalDocumentParams): Promise<any>;
}
