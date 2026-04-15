import type { ICurrency } from "../../../../models/property";
import type { FolioRow } from "../../ir-city-ledger-folio/types";
export declare class IrCityLedgerStatementsTable {
    rows: FolioRow[];
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
    private get columns();
    private renderStartingBalanceRow;
    private renderEndingBalanceRow;
    render(): any;
}
