'use strict';

const utils = require('./utils-fa74e114.js');

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
        return (_b = utils.app_store.property.allowed_payment_methods.find(apm => apm.code === code)) !== null && _b !== void 0 ? _b : null;
    }
    getBookingActions(booking) {
        // const canView = booking.status.code !== '003';
        const canView = true;
        const canCancel = booking.status.code !== '003' && utils.dateFns.isBefore(new Date(), new Date(booking.from_date));
        const canMakePayment = booking.status.code === '001' && utils.app_store.property.allowed_payment_methods.some(paymentMethod => paymentMethod.is_payment_gateway);
        let makePaymentLabel = '';
        let formattedAmount = '';
        if (canMakePayment) {
            const prepayment_amount = booking.extras.find(e => e.key === 'prepayment_amount');
            if (prepayment_amount) {
                formattedAmount = utils.formatAmount(prepayment_amount.value || 0, booking.currency.code);
                makePaymentLabel = utils.localizedWords.entries.Lcz_PayToGuarantee.replace('%1', formattedAmount);
            }
        }
        return {
            cancel: { show: canCancel, label: utils.localizedWords.entries.Lcz_CancelBooking },
            payment: { show: canMakePayment, label: makePaymentLabel, formattedAmount },
            view: { show: canView, label: utils.localizedWords.entries.Lcz_BookingDetails },
        };
    }
}

exports.BookingListingAppService = BookingListingAppService;

//# sourceMappingURL=booking-listing.service-fc0d2b76.js.map