import { Booking } from "../../../models/booking.dto";
export declare class IrBookingListing {
    propertyid: number;
    baseUrl: string;
    headerShown: boolean;
    footerShown: boolean;
    isLoading: boolean;
    token: string;
    bookings: Booking[];
    private bookingListingService;
    private commonService;
    private propertyService;
    componentWillLoad(): Promise<void>;
    initializeServices(): void;
    initializeApp(): Promise<void>;
    handleAuthFinish(e: CustomEvent): void;
    getBadgeVariant(code: string): "error" | "success" | "pending";
    render(): any;
}
