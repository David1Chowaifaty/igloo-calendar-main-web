import { createStore } from "@stencil/store";
import moment from "moment";
const initialState = {
    filters: {
        from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD'),
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
export const { state: uninvoiced_bookings, onChange: onUninvoicedBookingsChange } = createStore(initialState);
export function updateUninvoicedBookingsFilters(filters) {
    uninvoiced_bookings.filters = { ...uninvoiced_bookings.filters, ...filters };
}
export function setUninvoicedBookingsCriteria(criteria) {
    uninvoiced_bookings.channels = criteria.channels ?? [];
    uninvoiced_bookings.statuses = criteria.statuses ?? [];
    uninvoiced_bookings.types = criteria.types ?? [];
}
export function setUninvoicedBookingsTablePage(page) {
    uninvoiced_bookings.tablePagination = { ...uninvoiced_bookings.tablePagination, currentPage: page };
}
export function setUninvoicedBookingsTablePageSize(pageSize) {
    uninvoiced_bookings.tablePagination = { ...uninvoiced_bookings.tablePagination, pageSize, currentPage: 1 };
}
export default uninvoiced_bookings;
