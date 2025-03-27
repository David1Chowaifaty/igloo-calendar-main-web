import { b as app_store, d as dateFns, t as formatAmount, l as localizedWords } from './utils-496d66fc.js';

class BookingListingAppService {
    detectPaymentOrigin(booking) {
        var _a, _b;
        console.log(booking.extras);
        if (!booking.extras) {
            return null;
        }
        const code = (_a = booking.extras.find(e => e.key === 'payment_code')) === null || _a === void 0 ? void 0 : _a.value;
        if (!code) {
            return null;
        }
        return (_b = app_store.property.allowed_payment_methods.find(apm => apm.code === code)) !== null && _b !== void 0 ? _b : null;
    }
    getBookingActions(booking) {
        // const canView = booking.status.code !== '003';
        const canView = true;
        const canCancel = booking.status.code !== '003' && dateFns.isBefore(new Date(), new Date(booking.from_date));
        const canMakePayment = booking.status.code === '001' && app_store.property.allowed_payment_methods.some(paymentMethod => paymentMethod.is_payment_gateway);
        let makePaymentLabel = '';
        let formattedAmount = '';
        if (canMakePayment) {
            const prepayment_amount = booking.extras.find(e => e.key === 'prepayment_amount');
            if (prepayment_amount) {
                formattedAmount = formatAmount(prepayment_amount.value || 0, booking.currency.code);
                makePaymentLabel = localizedWords.entries.Lcz_PayToGuarantee.replace('%1', formattedAmount);
            }
        }
        return {
            cancel: { show: canCancel, label: localizedWords.entries.Lcz_CancelBooking },
            payment: { show: canMakePayment, label: makePaymentLabel, formattedAmount },
            view: { show: canView, label: localizedWords.entries.Lcz_BookingDetails },
        };
    }
}

export { BookingListingAppService as B };

//# sourceMappingURL=booking-listing.service-21f47cba.js.map