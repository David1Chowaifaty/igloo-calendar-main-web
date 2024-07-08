export declare class IrBookingListing {
    propertyid: number;
    baseUrl: string;
    language: string;
    headerShown: boolean;
    footerShown: boolean;
    maxPages: number;
    perma_link: string;
    aName: string;
    showAllBookings: boolean;
    be: boolean;
    startScreen: {
        screen: 'bookings' | 'booking-details';
        params: unknown;
    };
    aff: string;
    isLoading: boolean;
    token: string;
    bookingNumber: any;
    page_mode: 'single' | 'multi';
    currentPage: 'bookings' | 'booking-details';
    selectedBooking: {
        email: string;
        booking_nbr: string;
    } | null;
    isAffiliate: boolean;
    private commonService;
    private propertyService;
    componentWillLoad(): Promise<void>;
    handleAffiliateChange(newValue: string, oldValue: string): void;
    initializeApp(): Promise<void>;
    initializeServices(): void;
    handleAuthFinish(e: CustomEvent): void;
    handleSignout(): void;
    handleRouting(e: CustomEvent): void;
    private renderPages;
    render(): any;
}
