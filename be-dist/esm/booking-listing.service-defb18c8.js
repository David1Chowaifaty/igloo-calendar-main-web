import { d as dateFns } from './utils-9a5c698f.js';

class BookingListingAppService {
    getBookingActions(booking) {
        const cancel = booking.status.code !== '003' && dateFns.isBefore(new Date(), new Date(booking.to_date));
        const payment = cancel && booking.financial.due_amount > 0;
        return { cancel, payment };
    }
}

export { BookingListingAppService as B };

//# sourceMappingURL=booking-listing.service-defb18c8.js.map