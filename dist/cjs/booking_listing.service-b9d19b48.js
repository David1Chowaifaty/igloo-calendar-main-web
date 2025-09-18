'use strict';

const index = require('./index-7564ffa1.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-bf9b1b25.js');
const axios = require('./axios-6e678d52.js');

const initialState = {
    channels: [],
    settlement_methods: [],
    statuses: [],
    types: [],
    token: '',
    rowCount: 10,
    bookings: [],
    balance_filter: [],
    userSelection: {
        from: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
        to: moment.hooks().format('YYYY-MM-DD'),
        channel: '',
        balance_filter: null,
        property_id: null,
        start_row: 0,
        end_row: 20,
        total_count: 0,
        filter_type: null,
        name: '',
        book_nbr: '',
        booking_status: '',
        affiliate_id: 0,
        is_mpo_managed: false,
        is_mpo_used: false,
        is_for_mobile: false,
        is_combined_view: false,
        is_to_export: false,
    },
    download_url: null,
};
const { state: booking_listing, onChange: onBookingListingChange } = index.createStore(initialState);
function initializeUserSelection() {
    //booking_listing.channels[0].name
    booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { channel: '', booking_status: booking_listing.statuses[0].code, filter_type: booking_listing.types[0].id, book_nbr: '', name: '', from: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'), to: moment.hooks().format('YYYY-MM-DD'), start_row: 0, end_row: booking_listing.rowCount, balance_filter: booking_listing.balance_filter[0].value });
}
function updateUserSelections(params) {
    booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), params);
}
function updateUserSelection(key, value) {
    booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { [key]: value });
}

class BookingListingService {
    async getExposedBookingsCriteria(property_id) {
        const { data } = await axios.axios.post(`/Get_Exposed_Bookings_Criteria`, {
            property_id,
        });
        const result = data.My_Result;
        booking_listing.channels = result.channels;
        booking_listing.settlement_methods = result.settlement_methods;
        booking_listing.statuses = result.statuses;
        booking_listing.types = result.types;
        booking_listing.balance_filter = result.balance_filter;
        initializeUserSelection();
    }
    async getExposedBookings(params) {
        const { data } = await axios.axios.post(`/Get_Exposed_Bookings`, Object.assign(Object.assign({}, params), { extras: utils.extras }));
        const result = data.My_Result;
        const header = data.My_Params_Get_Exposed_Bookings;
        booking_listing.bookings = [...result];
        booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { total_count: header.total_count });
        booking_listing.download_url = header.exported_data_url;
    }
    async removeExposedBooking(booking_nbr, is_to_revover) {
        await axios.axios.post(`/Remove_Exposed_Booking`, {
            booking_nbr,
            is_to_revover,
        });
    }
}

exports.BookingListingService = BookingListingService;
exports.booking_listing = booking_listing;
exports.initializeUserSelection = initializeUserSelection;
exports.onBookingListingChange = onBookingListingChange;
exports.updateUserSelection = updateUserSelection;
exports.updateUserSelections = updateUserSelections;

//# sourceMappingURL=booking_listing.service-b9d19b48.js.map