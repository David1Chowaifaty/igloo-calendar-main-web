import { a as createStore } from './index-C63jMJYk.js';
import { h as hooks } from './moment-Mki5YqAR.js';

const initialState = {
    filters: {
        from: hooks().subtract(30, 'days').format('YYYY-MM-DD'),
        to: hooks().format('YYYY-MM-DD'),
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
const { state: uninvoiced_bookings} = createStore(initialState);
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

export { uninvoiced_bookings as a, setUninvoicedBookingsTablePageSize as b, setUninvoicedBookingsCriteria as c, setUninvoicedBookingsTablePage as s, updateUninvoicedBookingsFilters as u };
