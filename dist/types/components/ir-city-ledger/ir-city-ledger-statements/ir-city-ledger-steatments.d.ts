import { ICurrency } from "../../../models/property";
export declare class IrCityLedgerStatements {
    agentId: number | null;
    agentName: string;
    currencySymbol: string;
    currencies: ICurrency[];
    ticket: string;
    propertyId: number;
    private filters;
    private statement;
    private rows;
    private isLoading;
    private hasFetched;
    private printFilters;
    private cityLedgerService;
    handleAgentIdChange(): void;
    private fetchStatement;
    private getPrintLabel;
    render(): any;
}
