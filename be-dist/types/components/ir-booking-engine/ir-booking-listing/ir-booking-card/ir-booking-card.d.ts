import { Booking } from "../../../../models/booking.dto";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingCard {
    booking: Booking;
    aff: boolean;
    optionClicked: EventEmitter<{
        tag: string;
        id: number;
    }>;
    private totalNights;
    private bookingListingAppService;
    componentWillLoad(): void;
    handleBookingChange(newValue: any): void;
    getBadgeVariant(code: string): "error" | "success" | "pending";
    private init;
    render(): any;
}
