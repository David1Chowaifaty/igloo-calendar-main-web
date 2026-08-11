'use strict';

var index = require('./index-BXsYsiHK.js');
var moment = require('./moment-CdViwxPQ.js');

const initialState = {
    filters: {
        from: moment.hooks().subtract(30, 'days').format('YYYY-MM-DD'),
        to: moment.hooks().format('YYYY-MM-DD'),
        source: '',
    },
    rows: [],
    totalCount: 0,
    channels: [],
    statuses: [],
    types: [],
    isLoading: false,
    tablePagination: {
        currentPage: 1,
        pageSize: 20,
    },
};
const { state: uninvoiced_bookings} = index.createStore(initialState);
function updateUninvoicedBookingsFilters(filters) {
    uninvoiced_bookings.filters = { ...uninvoiced_bookings.filters, ...filters };
}
function setUninvoicedBookingsCriteria(criteria) {
    uninvoiced_bookings.channels = criteria.channels ?? [];
    uninvoiced_bookings.statuses = criteria.statuses ?? [];
    uninvoiced_bookings.types = criteria.types ?? [];
}
function setUninvoicedBookingsTablePage(page) {
    uninvoiced_bookings.tablePagination = { ...uninvoiced_bookings.tablePagination, currentPage: page };
}
function setUninvoicedBookingsTablePageSize(pageSize) {
    uninvoiced_bookings.tablePagination = { ...uninvoiced_bookings.tablePagination, pageSize, currentPage: 1 };
}

exports.setUninvoicedBookingsCriteria = setUninvoicedBookingsCriteria;
exports.setUninvoicedBookingsTablePage = setUninvoicedBookingsTablePage;
exports.setUninvoicedBookingsTablePageSize = setUninvoicedBookingsTablePageSize;
exports.uninvoiced_bookings = uninvoiced_bookings;
exports.updateUninvoicedBookingsFilters = updateUninvoicedBookingsFilters;
