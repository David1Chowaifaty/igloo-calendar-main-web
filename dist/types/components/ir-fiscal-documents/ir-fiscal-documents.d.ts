import { FiscalDocumentFilters } from './types';
export declare class IrFiscalDocuments {
    ticket: string;
    baseurl: string;
    language: string;
    propertyid: number;
    /** Property username (aname). When provided without `propertyid`, the id is resolved from it. */
    p: string;
    filters: FiscalDocumentFilters;
    private isPageLoading;
    private property_id;
    /** `_FD_TYPE` setup entries — used to display the document type in the table. */
    private fdTypes;
    private rows;
    private isLoading;
    private hasFetched;
    private pageSize;
    private currentPage;
    private totalRows;
    /** Booking number whose details drawer is currently open. */
    private selectedBookingNumber;
    private tokenService;
    private propertyService;
    private roomService;
    private bookingService;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    /**
     * Page bootstrap: resolves the property id (from `propertyid`, or from the
     * aname `p` when only that is provided), then fetches the remaining setup in
     * parallel — the `_FD_TYPE` entries and the exposed property.
     */
    private init;
    private targetTypeFromFolio;
    private resolveFdTypeCode;
    private fetchFiscalDocuments;
    private handleApplyFilters;
    private handlePageChange;
    private handlePageSizeChange;
    render(): any;
}
