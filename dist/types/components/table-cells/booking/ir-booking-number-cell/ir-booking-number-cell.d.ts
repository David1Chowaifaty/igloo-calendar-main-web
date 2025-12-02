import { Booking } from "../../../../models/booking.dto";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingNumberCell {
    bookingNumber: Booking['booking_nbr'];
    channelBookingNumber: Booking['channel_booking_nbr'];
    openBookingDetails: EventEmitter<Booking['booking_nbr']>;
    render(): any;
}
