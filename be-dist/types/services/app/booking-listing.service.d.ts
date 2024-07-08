import { Booking } from "../../models/booking.dto";
type TBookingActions = {
    cancel: {
        show: boolean;
        label: string;
    };
    payment: {
        show: boolean;
        label: string;
    };
    view: {
        show: boolean;
        label: string;
    };
};
export declare class BookingListingAppService {
    getBookingActions(booking: Booking): TBookingActions;
}
export {};
