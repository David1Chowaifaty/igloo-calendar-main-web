import { d as dateFns, a as app_store, f as formatAmount } from './utils-402f3439.js';

class BookingListingAppService {
    getBookingActions(booking) {
        // const canView = booking.status.code !== '003';
        const canView = true;
        const canCancel = booking.status.code !== '003' && dateFns.isBefore(new Date(), new Date(booking.to_date));
        const canMakePayment = booking.status.code === '001' && app_store.property.allowed_payment_methods.some(paymentMethod => paymentMethod.is_payment_gateway);
        let makePaymentLabel = '';
        if (canMakePayment) {
            const prepayment_amount = booking.extras.find(e => e.key === 'prepayment_amount');
            if (prepayment_amount) {
                makePaymentLabel = `Pay ${formatAmount(prepayment_amount.value || 0, booking.currency.code)} to guarentee`;
            }
        }
        return {
            cancel: { show: canCancel, label: 'Cancel booking' },
            payment: { show: canMakePayment, label: makePaymentLabel },
            view: { show: canView, label: 'Booking Details' },
        };
    }
}

export { BookingListingAppService as B };

//# sourceMappingURL=booking-listing.service-8bf599b2.js.map