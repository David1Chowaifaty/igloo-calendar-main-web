import { a as app_store } from './app.store.js';
import { d as dateFns } from './utils.js';

class BookingListingAppService {
    getBookingActions(booking) {
        const view = booking.status.code !== '003';
        const cancel = booking.status.code !== '003' && dateFns.isBefore(new Date(), new Date(booking.to_date));
        const payment = booking.status.code === '001' && booking.financial.due_amount > 0 && app_store.property.allowed_payment_methods.some(p => p.is_payment_gateway);
        return { cancel, payment, view };
    }
}

export { BookingListingAppService as B };

//# sourceMappingURL=booking-listing.service.js.map