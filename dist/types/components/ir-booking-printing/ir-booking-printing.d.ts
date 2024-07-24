import { Booking } from "../../models/booking.dto";
export declare class IrBookingPrinting {
    language: string;
    ticket: string;
    bookingNumber: string;
    baseurl: string;
    propertyid: number;
    mode: 'invoice' | 'default';
    booking: Booking;
    private bookingService;
    private roomService;
    ticketChanged(): Promise<void>;
    initializeApp(): Promise<void>;
    render(): any;
}
