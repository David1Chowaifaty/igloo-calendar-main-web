import { Booking } from "../../../models/booking.dto";
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
    isLoading: boolean;
    token: string;
    bookingNumber: any;
    page_mode: 'single' | 'multi';
    currentPage: 'bookings' | 'booking-details';
    selectedBooking: Booking | null;
    private commonService;
    private propertyService;
    componentWillLoad(): Promise<void>;
    initializeApp(): Promise<void>;
    initializeServices(): void;
    handleRouting(e: CustomEvent): void;
    private renderPages;
    render(): any;
}
