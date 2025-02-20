import { Booking } from "../../models/booking.dto";
type TBookingActions = {
    cancel: {
        show: boolean;
        label: string;
    };
    payment: {
        show: boolean;
        label: string;
        formattedAmount: string;
    };
    view: {
        show: boolean;
        label: string;
    };
};
export declare class BookingListingAppService {
    detectPaymentOrigin(booking: Booking): import("../../models/property").AllowedPaymentMethod;
    getBookingActions(booking: Booking): TBookingActions;
}
export {};
