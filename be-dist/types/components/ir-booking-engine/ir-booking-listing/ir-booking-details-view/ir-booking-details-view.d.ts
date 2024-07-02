import { EventEmitter } from '../../../../stencil-public-runtime';
import { Booking } from "../../../../models/booking.dto";
export declare class IrBookingDetailsView {
    booking: Booking | null;
    bl_routing: EventEmitter<{
        route: 'booking' | 'booking-details';
        params?: unknown;
    }>;
    private bookingCancelation;
    private bookingListingAppService;
    private email;
    componentWillLoad(): void;
    renderBookingDetailHeader(): string;
    renderLocation(): string;
    renderPropertyEmail(): any;
    formatGuest(): string;
    render(): any;
}
