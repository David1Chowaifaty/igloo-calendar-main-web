import type { ClTx } from "../../../../../services/city-ledger/index";
export declare class IrClFiscalDocumentTable {
    transactions: ClTx[];
    currencySymbol: string;
    /** When true all monetary amounts are negated — used for credit notes. */
    invertAmounts: boolean;
    private applySign;
    private renderMoney;
    private get prIdDict();
    private get roomTypesDict();
    private get rateplanDict();
    private get showCityTax();
    private get totals();
    private renderTxRow;
    private renderUnitGroup;
    private renderBookingGroup;
    private renderTopLevelItem;
    private renderTotals;
    render(): any;
}
