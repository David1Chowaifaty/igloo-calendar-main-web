import type { ICurrency } from "../../../../models/property";
import type { FiscalDocument } from "../../../../services/city-ledger/index";
export declare class IrCityLedgerStatementsTable {
    rows: FiscalDocument[];
    startingBalance: number;
    endingBalance: number;
    currencySymbol: string;
    currencies: ICurrency[];
    isLoading: boolean;
    hasFetched: boolean;
    fromDate: string | null;
    toDate: string | null;
    private columnHelper;
    private formatDate;
    private getSymbol;
    private renderMoney;
    private get runningBalances();
    private get columns();
    private renderStartingBalanceRow;
    private renderEndingBalanceRow;
    render(): any;
}
