import { Booking, ExposedBookingEvent } from "../../../../models/booking.dto";
export declare class IrEventsLog {
    bookingNumber: string;
    booking: Booking;
    bookingEvents: ExposedBookingEvent[];
    componentWillLoad(): void;
    private init;
    render(): any;
}
