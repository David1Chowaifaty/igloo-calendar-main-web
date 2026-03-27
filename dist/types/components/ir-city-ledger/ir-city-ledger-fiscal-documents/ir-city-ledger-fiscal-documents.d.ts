import type { ICurrency } from "../../../models/property";
export declare class IrCityLedgerFiscalDocuments {
    agentId: number | null;
    currencySymbol: string;
    currencies: ICurrency[];
    ticket: string;
    propertyId: number;
    private filters;
    private fiscalDocuments;
    private isLoading;
    private cityLedgerService;
    private get filteredDocuments();
    private fetchFiscalDocuments;
    render(): any;
}
