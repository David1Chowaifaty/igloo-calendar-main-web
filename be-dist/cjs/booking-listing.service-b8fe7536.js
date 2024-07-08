'use strict';

const utils = require('./utils-db6f248d.js');

class BookingListingAppService {
    getBookingActions(booking) {
        // const canView = booking.status.code !== '003';
        const canView = true;
        const canCancel = booking.status.code !== '003' && utils.dateFns.isBefore(new Date(), new Date(booking.to_date));
        const canMakePayment = booking.status.code === '001' && utils.app_store.property.allowed_payment_methods.some(paymentMethod => paymentMethod.is_payment_gateway);
        let makePaymentLabel = '';
        if (canMakePayment) {
            const prepayment_amount = booking.extras.find(e => e.key === 'prepayment_amount');
            if (prepayment_amount) {
                makePaymentLabel = `Pay ${utils.formatAmount(prepayment_amount.value || 0, booking.currency.code)} to guarentee`;
            }
        }
        return {
            cancel: { show: canCancel, label: 'Cancel booking' },
            payment: { show: canMakePayment, label: makePaymentLabel },
            view: { show: canView, label: 'Booking Details' },
        };
    }
}

exports.BookingListingAppService = BookingListingAppService;

//# sourceMappingURL=booking-listing.service-b8fe7536.js.map