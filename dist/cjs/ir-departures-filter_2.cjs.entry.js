'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const departures_store = require('./departures.store-121ab8af.js');
const moment = require('./moment-1780b03a.js');
require('./index-6299b0f7.js');
require('./_data-c8673ac9.js');

const irDeparturesFilterCss = ".sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}";
const IrDeparturesFilterStyle0 = irDeparturesFilterCss;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        departures_store.setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: 'e4d14ec80ba531876d2f68496381146bdaddfe73', class: "departures-filters__container" }, index.h("ir-custom-date-picker", { key: '594c8bb69c43c740615b6b4191e4b9651b369361', class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '4ae766913dd33a84f36fa94ee0d72bbe305f9eb4', name: "calendar", slot: "start" }), index.h("wa-spinner", { key: 'c643df9d1d4a48b63fbefb121a753ca5fbdd93cf', slot: "end" })), index.h("ir-custom-input", { key: '60e888b175f8891ac44d5c2c6ddf84380a5f3668', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '5276c7015b8db8046fdacb2c819c2a20c03f70ef', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = IrDeparturesFilterStyle0;

const irDeparturesTableCss = ".sc-ir-departures-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-departures-table-h{box-sizing:border-box !important}.sc-ir-departures-table-h *.sc-ir-departures-table,.sc-ir-departures-table-h *.sc-ir-departures-table::before,.sc-ir-departures-table-h *.sc-ir-departures-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures-table{display:none !important}.sc-ir-departures-table-h{background:white}.table--container.sc-ir-departures-table{flex:1 1 0%}.departures-table__actions-cell.sc-ir-departures-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.departures-table__actions-cell.sc-ir-departures-table{min-width:250px}}";
const IrDeparturesTableStyle0 = irDeparturesTableCss;

const tableCss = ".ir-table-row.sc-ir-departures-table td.sc-ir-departures-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-departures-table td.sc-ir-departures-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-departures-table tbody.sc-ir-departures-table tr.sc-ir-departures-table:last-child>td.sc-ir-departures-table{border-bottom:0 !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{background:rgb(255, 255, 255) !important;padding-top:1rem !important;padding-bottom:1rem !important;border-bottom:1px solid var(--wa-color-neutral-70) !important}.data-table.sc-ir-departures-table .empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-departures-table{padding:0.5rem 1rem;position:sticky;bottom:0;border-top:1px solid var(--wa-color-neutral-70)}.selected.sc-ir-departures-table td.sc-ir-departures-table{background:#e3f3fa !important}.selected.sc-ir-departures-table td.sc-ir-departures-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table,.ir-table-row.sc-ir-departures-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table{text-transform:capitalize}.sortable.sc-ir-departures-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-departures-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-departures-table svg.sc-ir-departures-table{color:var(--blue)}.sticky-column.sc-ir-departures-table{position:sticky !important;right:0;background-color:white}";
const IrDeparturesTableStyle1 = tableCss;

const IrDeparturesTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    renderSection(bookings, showAction = false) {
        if (!bookings?.length) {
            return null;
        }
        const rows = bookings.flatMap(booking => this.renderBookingRows(booking, showAction));
        return [...rows];
    }
    renderBookingRows(booking, showAction) {
        return (booking.rooms ?? []).map((room, index) => this.renderRow(booking, room, index, showAction));
    }
    renderRow(booking, room, index$1, showAction) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index$1}`;
        const isOverdueCheckout = moment.hooks(room.to_date, 'YYYY-MM-DD').startOf('day').isBefore(moment.hooks().startOf('day'));
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, index.h("td", { class: "sticky-column" }, index.h("ir-booking-number-cell", { channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-source-cell", { origin: booking.origin, guest: booking.guest, source: booking.source })), index.h("td", null, index.h("ir-guest-name-cell", { name: room.guest })), index.h("td", null, index.h("ir-unit-cell", { room: room })), index.h("td", null, index.h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), index.h("td", { class: "text-right" }, index.h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), index.h("td", null, index.h("div", { class: "departures-table__actions-cell" }, showAction ? index.h("ir-actions-cell", { buttons: isOverdueCheckout ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckOutBookings, outBookings } = departures_store.departuresStore;
        return (index.h(index.Host, { key: '459a1f2aba36455da6e7d8bba4adcbfe9c481a84' }, index.h("div", { key: 'd1319f8c94958e38ec3fcbf91c37b4bebc605e3c', class: "table--container" }, index.h("table", { key: '7995ff4b5dab6f1be1e1ecb1f2eac9ab7f4523de', class: "table data-table" }, index.h("thead", { key: 'a9a0f887309c74a3580d26b1b75db9f4a4235853' }, index.h("tr", { key: '932267953535cba8d47263d86b024a35abc1b9b1' }, index.h("th", { key: 'a878df9117e2e0015598e23c5988f55acec8b9d4' }, index.h("span", { key: '9636453fb16a32731d2192a8ed07674896def412', class: 'departures-table__departure__cell' }, "Booking#")), index.h("th", { key: 'd2d1fb783b88b71be898646be019e417843cba29' }, index.h("div", { key: 'fcad1f3b0b609b7276f295b0247d1737271bf5a8' }, index.h("p", { key: '9d97d15c48716ff0c5f64c507bd6b514fa5e79dc' }, "Booked by / Source"))), index.h("th", { key: '375e0ca34f1a51922ca5bc52b91b12cd18cb4ac9' }, "Guest name"), index.h("th", { key: '451b2c77ca712f057172eb6f3e3943af7246421e' }, "Unit"), index.h("th", { key: '9b7304a37cd997e6b56dee301f8800177c56c6bd' }, "Dates"), index.h("th", { key: '68eb3edf16cadb26fb245f2f8d8a699e0e87610f', class: "text-right" }, "Balance"), index.h("th", { key: '737de2376caa9b5437be586894ca793c60a175ba' }))), index.h("tbody", { key: 'bfd3c2124c2d1ca8ef961428d3a2f78287105c57' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (index.h("tr", { key: '5b6285e8017e31e2b3c9d4304318dc37b2fad43a' }, index.h("td", { key: '18c9952799fd0d2e9f579c2b54534f34dba7352d', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
    }
};
IrDeparturesTable.style = IrDeparturesTableStyle0 + IrDeparturesTableStyle1;

exports.ir_departures_filter = IrDeparturesFilter;
exports.ir_departures_table = IrDeparturesTable;

//# sourceMappingURL=ir-departures-filter_2.cjs.entry.js.map