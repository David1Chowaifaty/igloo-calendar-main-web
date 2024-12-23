import { ExposedBookingEvent } from "../../../../services/booking.service";
export declare class IrRevisions {
    bookingNumber: string;
    bookingEvents: ExposedBookingEvent[];
    private bookingService;
    componentWillLoad(): void;
    private init;
    render(): any;
}
