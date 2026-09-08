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
    private ApiClient;
    private roomService;
    private propertyService;
    private bookingListingService;
    private propertyId;
    /** Re-runs init when the language changes so server-localized data follows. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
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
