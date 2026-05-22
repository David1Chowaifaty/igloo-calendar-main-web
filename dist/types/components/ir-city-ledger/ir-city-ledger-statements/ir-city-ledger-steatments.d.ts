import { ICurrency } from "../../../models/property";
import { EventEmitter } from '../../../stencil-public-runtime';
import type { StatementFilters } from './ir-city-ledger-statements-filter/ir-city-ledger-statements-filter';
export declare class IrCityLedgerStatements {
    agentId: number | null;
    agentName: string;
    currencySymbol: string;
    currencies: ICurrency[];
    ticket: string;
    propertyId: number;
    initialFilters: StatementFilters;
    clStmtFiltersChange: EventEmitter<StatementFilters>;
    private filters;
    componentWillLoad(): void;
    private statement;
    private rows;
    private isLoading;
    private hasFetched;
    private printFilters;
    private isFetchingPdf;
    private pdfUrl;
    private cityLedgerService;
    handleAgentIdChange(): void;
    handlePrintFiltersChange(next: StatementFilters | null): Promise<void>;
    private handleDownload;
    private fetchStatement;
    private getPrintLabel;
    render(): any;
}
