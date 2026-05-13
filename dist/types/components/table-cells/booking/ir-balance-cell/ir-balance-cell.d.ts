import { Payment } from "../../../ir-booking-details/types";
import { Booking } from "../../../../models/booking.dto";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBalanceCell {
    label: string;
    display: 'inline' | 'block';
    financial: Booking['financial'];
    guestFinancial: Booking['guest_financial'];
    statusCode: string;
    isDirect: boolean;
    bookingNumber: string;
    currencySymbol: string;
    removeBalance: boolean;
    payBookingBalance: EventEmitter<{
        booking_nbr: string;
        payment: Payment;
    }>;
    render(): any;
}
