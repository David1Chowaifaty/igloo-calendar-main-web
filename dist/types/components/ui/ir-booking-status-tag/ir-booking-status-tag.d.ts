import { Booking } from "../../../models/booking.dto";
export declare class IrBookingStatusTag {
    status: Booking['status'];
    isRequestToCancel: Booking['is_requested_to_cancel'];
    private badgeVariant;
    render(): any;
}
