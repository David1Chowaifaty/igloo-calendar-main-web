import { Booking, OTAManipulations } from "../../../../models/booking.dto";
export declare class IrStatusActivityCell {
    isRequestToCancel: boolean;
    status: Booking['status'];
    showModifiedBadge: boolean;
    showManipulationBadge: boolean;
    lastManipulation: OTAManipulations;
    bookingNumber: string;
    render(): any;
}
