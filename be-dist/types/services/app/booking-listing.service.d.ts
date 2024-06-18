import { Booking } from "../../models/booking.dto";
type TBookingActions = {
    cancel: boolean;
    payment: boolean;
};
export declare class BookingListingAppService {
    getBookingActions(booking: Booking): TBookingActions;
}
export {};
