import { EventEmitter } from '../../../stencil-public-runtime';
import { FiscalDocumentFilters } from '../types';
export declare class IrFiscalDocumentsFilters {
    propertyId: number;
    loading: boolean;
    /** Initial filter values. Edits are kept locally and only sent on submit. */
    filters: FiscalDocumentFilters;
    /** Working copy of the filters — edited locally, emitted to the parent only on submit. */
    private draft;
    private agents;
    private agentSearch;
    private guests;
    applyFilters: EventEmitter<FiscalDocumentFilters>;
    filterChanged: EventEmitter<FiscalDocumentFilters>;
    private agentsService;
    private bookingService;
    componentWillLoad(): void;
    handleFiltersChange(newValue: FiscalDocumentFilters): void;
    handlePropertyIdChange(newValue: number, oldValue: number): void;
    private typeOptions;
    private folioOptions;
    private get filteredAgents();
    private get searchPlaceholder();
    private fetchAgents;
    private fetchGuests;
    /** Updates the local draft only — nothing is sent to the parent until submit. */
    private updateDraft;
    private handleFolioTypeChange;
    private handleGuestSelect;
    render(): any;
}
