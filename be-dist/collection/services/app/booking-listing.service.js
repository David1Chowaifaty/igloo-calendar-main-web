import app_store from "../../stores/app.store";
import localizedWords from "../../stores/localization.store";
import { formatAmount } from "../../utils/utils";
import { isBefore } from "date-fns";
export class BookingListingAppService {
    getBookingActions(booking) {
        // const canView = booking.status.code !== '003';
        const canView = true;
        const canCancel = booking.status.code !== '003' && isBefore(new Date(), new Date(booking.from_date));
        const canMakePayment = booking.status.code === '001' && app_store.property.allowed_payment_methods.some(paymentMethod => paymentMethod.is_payment_gateway);
        let makePaymentLabel = '';
        if (canMakePayment) {
            const prepayment_amount = booking.extras.find(e => e.key === 'prepayment_amount');
            if (prepayment_amount) {
                makePaymentLabel = `Pay ${formatAmount(prepayment_amount.value || 0, booking.currency.code)} to guarentee`;
            }
        }
        return {
            cancel: { show: canCancel, label: localizedWords.entries.Lcz_CancelBooking },
            payment: { show: canMakePayment, label: makePaymentLabel },
            view: { show: canView, label: localizedWords.entries.Lcz_BookingDetails },
        };
    }
}
//# sourceMappingURL=booking-listing.service.js.map
