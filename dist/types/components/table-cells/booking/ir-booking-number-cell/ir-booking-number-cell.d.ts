import { Booking } from "../../../../models/booking.dto";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingNumberCell {
    bookingNumber: Booking['booking_nbr'];
    /**
     * Source of the booking (e.g. website, channel).
     */
    source: Booking['source'];
    /**
     * Origin metadata containing label + icon used as logo.
     */
    origin: Booking['origin'];
    channelBookingNumber: Booking['channel_booking_nbr'];
    openBookingDetails: EventEmitter<Booking['booking_nbr']>;
    render(): any;
}
