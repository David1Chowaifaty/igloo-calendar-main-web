'use strict';

const utils = require('./utils-7adffbb7.js');

class BookingListingAppService {
    getBookingActions(booking) {
        const cancel = booking.status.code !== '003' && utils.dateFns.isBefore(new Date(), new Date(booking.to_date));
        const payment = cancel && booking.financial.due_amount > 0;
        return { cancel, payment };
    }
}

exports.BookingListingAppService = BookingListingAppService;

//# sourceMappingURL=booking-listing.service-118a9e1c.js.map