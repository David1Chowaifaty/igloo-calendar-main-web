import { EventEmitter } from '../../../stencil-public-runtime';
import type { ClFiscalDocumentFilters } from './types';
import type { ICurrency } from "../../../models/property";
export declare class IrCityLedgerFiscalDocuments {
    agentId: number | null;
    currencySymbol: string;
    currencies: ICurrency[];
    ticket: string;
    propertyId: number;
    initialFilters: ClFiscalDocumentFilters;
    clFiscalFiltersChange: EventEmitter<ClFiscalDocumentFilters>;
    private filters;
    componentWillLoad(): void;
    private fiscalDocuments;
    private isLoading;
    private hasFetched;
    private cityLedgerService;
    handleAgentIdChange(): void;
    private get filteredDocuments();
    private fetchFiscalDocuments;
    render(): any;
}
