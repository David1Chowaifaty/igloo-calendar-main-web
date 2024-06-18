import { d as dateFns } from './utils-96dfe43d.js';

class BookingListingAppService {
    getBookingActions(booking) {
        const cancel = booking.status.code !== '003' && dateFns.isBefore(new Date(), new Date(booking.to_date));
        const payment = cancel && booking.financial.due_amount > 0;
        return { cancel, payment };
    }
}

export { BookingListingAppService as B };

//# sourceMappingURL=booking-listing.service-5b0c6d9b.js.map