import { Booking } from "../../models/booking.dto";
import { Payment, PaymentEntries } from '../ir-booking-details/types';
export declare class IrDepartures {
    ticket: string;
    propertyid: number;
    language: string;
    p: string;
    bookingNumber: number;
    booking: Booking;
    paymentEntries: PaymentEntries;
    isPageLoading: boolean;
    payment: Payment;
    private tokenService;
    private roomService;
    private bookingService;
    private paymentFolioRef;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handleOpen(e: CustomEvent): void;
    handleBookingPayment(e: CustomEvent): void;
    private init;
    render(): any;
}
