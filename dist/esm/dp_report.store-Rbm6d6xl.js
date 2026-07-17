import { c as createStore } from './index-CR94o8Bs.js';
import { h as hooks } from './moment-Mki5YqAR.js';

const initialState = {
    filters: {
        from: hooks().add(-14, 'days').format('YYYY-MM-DD'),
        to: hooks().format('YYYY-MM-DD'),
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
const { state: dp_report, onChange: onDpReportChange } = createStore(initialState);
function updateDpReportFilters(filters) {
    dp_report.filters = { ...dp_report.filters, ...filters };
}
function setDpReportTablePage(page) {
    dp_report.tablePagination = { ...dp_report.tablePagination, currentPage: page };
}
function setDpReportTablePageSize(pageSize) {
    dp_report.tablePagination = { ...dp_report.tablePagination, pageSize, currentPage: 1 };
}

export { setDpReportTablePageSize as a, dp_report as d, onDpReportChange as o, setDpReportTablePage as s, updateDpReportFilters as u };
