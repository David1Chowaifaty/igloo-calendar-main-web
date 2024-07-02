import app_store from "../../stores/app.store";
import { isBefore } from "date-fns";
export class BookingListingAppService {
    getBookingActions(booking) {
        const view = booking.status.code !== '003';
        const cancel = booking.status.code !== '003' && isBefore(new Date(), new Date(booking.to_date));
        const payment = booking.status.code === '001' && booking.financial.due_amount > 0 && app_store.property.allowed_payment_methods.some(p => p.is_payment_gateway);
        return { cancel, payment, view };
    }
}
//# sourceMappingURL=booking-listing.service.js.map
