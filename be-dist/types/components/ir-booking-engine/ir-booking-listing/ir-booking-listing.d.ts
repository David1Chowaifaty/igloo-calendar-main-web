import { pages } from "../../../components";
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
    version: string;
    isLoading: boolean;
    token: string;
    bookingNumber: any;
    currentPage: 'bookings' | 'booking-details' | 'user-profile';
    selectedBooking: {
        email: string;
        booking_nbr: string;
    } | null;
    isAffiliate: boolean;
    private commonService;
    private propertyService;
    componentWillLoad(): Promise<void>;
    handleAffiliateChange(newValue: string, oldValue: string): void;
    handleScreenChanged(e: CustomEvent<pages>): void;
    initializeApp(): Promise<void>;
    initializeServices(): void;
    handleAuthFinish(e: CustomEvent): void;
    handleSignout(): void;
    handleRouting(e: CustomEvent): void;
    private renderPages;
    private renderAuthScreen;
    private renderBookingsScreen;
    render(): any;
}
