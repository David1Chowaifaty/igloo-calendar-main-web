import { Booking } from "../../../models/booking.dto";
export declare class IrPrintingExtraService {
    /** Extra services attached to the booking */
    extraServices: Booking['extra_services'];
    /** Booking currency */
    currency: Booking['currency'];
    invocableKeys: Set<string | number>;
    render(): any;
}
