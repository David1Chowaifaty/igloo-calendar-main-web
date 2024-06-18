import { Booking } from "../../../../models/booking.dto";
export declare class IrBookingCard {
    booking: Booking;
    private totalNights;
    private bookingListingAppService;
    componentWillLoad(): void;
    handleBookingChange(newValue: any): void;
    getBadgeVariant(code: string): "error" | "success" | "pending";
    private init;
    render(): any;
}
