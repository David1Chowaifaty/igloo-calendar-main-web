import { createStore } from "@stencil/store";
import moment from "moment";
const initialState = {
    filters: {
        from: moment().add(-14, 'days').format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD'),
    },
    rows: [],
    summary: {
        avg_gain: 0,
        avg_loss: 0,
        bookings_above_base: 0,
        bookings_below_base: 0,
        total_bookings: 0,
        total_profit: 0,
    },
    isLoading: false,
    tablePagination: {
        currentPage: 1,
        pageSize: 20,
    },
};
export const { state: dp_report, onChange: onDpReportChange } = createStore(initialState);
export function updateDpReportFilters(filters) {
    dp_report.filters = { ...dp_report.filters, ...filters };
}
export function setDpReportTablePage(page) {
    dp_report.tablePagination = { ...dp_report.tablePagination, currentPage: page };
}
export function setDpReportTablePageSize(pageSize) {
    dp_report.tablePagination = { ...dp_report.tablePagination, pageSize, currentPage: 1 };
}
export default dp_report;
