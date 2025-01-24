'use strict';

const localization_store = require('./localization.store-19c9046c.js');
const utils = require('./utils-195bddf5.js');
const index = require('./index-ac85ebdb.js');

class BookingListingAppService {
    getBookingActions(booking) {
        // const canView = booking.status.code !== '003';
        const canView = true;
        const canCancel = booking.status.code !== '003' && index.dateFns.isBefore(new Date(), new Date(booking.from_date));
        const canMakePayment = booking.status.code === '001' && localization_store.app_store.property.allowed_payment_methods.some(paymentMethod => paymentMethod.is_payment_gateway);
        let makePaymentLabel = '';
        if (canMakePayment) {
            const prepayment_amount = booking.extras.find(e => e.key === 'prepayment_amount');
            if (prepayment_amount) {
                makePaymentLabel = `Pay ${utils.formatAmount(prepayment_amount.value || 0, booking.currency.code)} to guarentee`;
            }
        }
        return {
            cancel: { show: canCancel, label: localization_store.localizedWords.entries.Lcz_CancelBooking },
            payment: { show: canMakePayment, label: makePaymentLabel },
            view: { show: canView, label: localization_store.localizedWords.entries.Lcz_BookingDetails },
        };
    }
}

exports.BookingListingAppService = BookingListingAppService;

//# sourceMappingURL=booking-listing.service-0116c624.js.map