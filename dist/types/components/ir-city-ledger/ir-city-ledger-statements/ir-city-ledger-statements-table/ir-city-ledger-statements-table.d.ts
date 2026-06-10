import { EventEmitter } from '../../../../stencil-public-runtime';
import type { ICurrency } from "../../../../models/property";
import type { FiscalDocument } from "../../../../services/city-ledger/index";
import { ClFiscalDocumentPreviewRequest } from '../../ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types';
export declare class IrCityLedgerStatementsTable {
    rows: FiscalDocument[];
    agentId: number;
    startingBalance: number;
    endingBalance: number;
    currencySymbol: string;
    currencies: ICurrency[];
    isLoading: boolean;
    hasFetched: boolean;
    fromDate: string | null;
    toDate: string | null;
    clFiscalDocumentPreview: EventEmitter<ClFiscalDocumentPreviewRequest>;
    private columnHelper;
    private formatDate;
    private getSymbol;
    private renderMoney;
    private get runningBalances();
    private getCredit;
    private get columns();
    private renderStartingBalanceRow;
    private renderEndingBalanceRow;
    render(): any;
}
