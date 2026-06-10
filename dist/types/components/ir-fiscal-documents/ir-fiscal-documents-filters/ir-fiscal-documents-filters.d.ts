import { EventEmitter } from '../../../stencil-public-runtime';
import { FiscalDocumentFilters } from '../types';
export declare class IrFiscalDocumentsFilters {
    propertyId: number;
    filters: FiscalDocumentFilters;
    private docNumber;
    private agents;
    private agentSearch;
    private guests;
    filtersChange: EventEmitter<FiscalDocumentFilters>;
    applyFilters: EventEmitter<FiscalDocumentFilters>;
    private agentsService;
    private bookingService;
    componentWillLoad(): void;
    handlePropertyIdChange(newValue: number, oldValue: number): void;
    private typeOptions;
    private folioOptions;
    private get filteredAgents();
    private get searchPlaceholder();
    private fetchAgents;
    private fetchGuests;
    private updateFilters;
    private handleFolioTypeChange;
    private handleGuestSelect;
    private emitSearchDebounced;
    render(): any;
}
