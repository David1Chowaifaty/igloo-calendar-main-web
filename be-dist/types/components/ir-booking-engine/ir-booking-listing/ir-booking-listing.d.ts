import { Booking } from "../../../models/booking.dto";
export declare class IrBookingListing {
    propertyid: number;
    baseUrl: string;
    language: string;
    headerShown: boolean;
    footerShown: boolean;
    maxPages: number;
    isLoading: boolean;
    token: string;
    bookings: Booking[];
    currentPage: number;
    total_count: number;
    private bookingListingService;
    private commonService;
    private propertyService;
    componentWillLoad(): Promise<void>;
    initializeServices(): void;
    initializeApp(): Promise<void>;
    getBookings(): Promise<any>;
    handleAuthFinish(e: CustomEvent): void;
    getBadgeVariant(code: string): "error" | "success" | "pending";
    handlePageChange(e: CustomEvent<number>): Promise<void>;
    render(): any;
}
