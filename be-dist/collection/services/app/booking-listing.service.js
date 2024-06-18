import { isBefore } from "date-fns";
export class BookingListingAppService {
    getBookingActions(booking) {
        const cancel = booking.status.code !== '003' && isBefore(new Date(), new Date(booking.to_date));
        const payment = cancel && booking.financial.due_amount > 0;
        return { cancel, payment };
    }
}
//# sourceMappingURL=booking-listing.service.js.map
