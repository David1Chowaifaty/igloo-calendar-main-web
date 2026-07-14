'use strict';

var index = require('./index-BTAleJGz.js');
var moment = require('./moment-CdViwxPQ.js');

const initialState = {
    filters: {
        from: moment.hooks().add(-14, 'days').format('YYYY-MM-DD'),
        to: moment.hooks().format('YYYY-MM-DD'),
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
const { state: dp_report, onChange: onDpReportChange } = index.createStore(initialState);
function updateDpReportFilters(filters) {
    dp_report.filters = { ...dp_report.filters, ...filters };
}
function setDpReportTablePage(page) {
    dp_report.tablePagination = { ...dp_report.tablePagination, currentPage: page };
}
function setDpReportTablePageSize(pageSize) {
    dp_report.tablePagination = { ...dp_report.tablePagination, pageSize, currentPage: 1 };
}

exports.dp_report = dp_report;
exports.onDpReportChange = onDpReportChange;
exports.setDpReportTablePage = setDpReportTablePage;
exports.setDpReportTablePageSize = setDpReportTablePageSize;
exports.updateDpReportFilters = updateDpReportFilters;
