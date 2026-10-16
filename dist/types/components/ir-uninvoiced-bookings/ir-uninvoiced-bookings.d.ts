export declare class IrUninvoicedBookings {
    el: HTMLElement;
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    baseUrl: string;
    isPageLoading: boolean;
    activeBookingNbr: string | null;
    activeGuestBookingNbr: string | null;
    private token;
    private roomService;
    private propertyService;
    private bookingListingService;
    private propertyId;
    componentWillLoad(): void;
    ticketChanged(newValue: string, oldValue: string): void;
    handleFiltersChange(e: CustomEvent<{
        from: string;
        to: string;
        source: string;
    }>): Promise<void>;
    handlePageChange(e: CustomEvent<void>): Promise<void>;
    handleOpenBookingDetails(e: CustomEvent<string>): void;
    handleGuestSelected(e: CustomEvent<string>): void;
    private initializeApp;
    private fetchUninvoicedBookings;
    private findRow;
    render(): any;
}
