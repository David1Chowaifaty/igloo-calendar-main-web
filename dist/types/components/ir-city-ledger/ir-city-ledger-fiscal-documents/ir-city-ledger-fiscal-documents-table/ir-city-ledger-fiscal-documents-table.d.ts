import { type FiscalDocument } from '../../../../services/city-ledger';
import type { ICurrency } from "../../../../models/property";
export declare class IrCityLedgerFiscalDocumentsTable {
    rows: FiscalDocument[];
    currencySymbol: string;
    currencies: ICurrency[];
    taxableOnly: boolean;
    isLoading: boolean;
    hasDates: boolean;
    ticket: string;
    propertyId: number;
    agentId: number | null;
    fromDate: string | null;
    toDate: string | null;
    private previewRow;
    private columnHelper;
    private cityLedgerService;
    private previewDialogRef;
    private getStatusVariant;
    private handleAction;
    private get columns();
    private getSymbol;
    private renderMoney;
    render(): any;
}
