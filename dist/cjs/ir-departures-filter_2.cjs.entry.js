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
        return (index.h("div", { key: 'd6aa73d60a8a0029832463e5dd7acaf212ade963', class: "departures-filters__container" }, index.h("ir-custom-date-picker", { key: '08217f119d81998a860aa185c0ae6fdda76dcde1', class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '609b7d2c9b559044301b54b4838071b6507087e8', name: "calendar", slot: "start" }), index.h("wa-spinner", { key: '7e2d59d62f0ee57f1a7b54e09fbe348b8b2b6fb5', slot: "end" })), index.h("ir-custom-input", { key: 'ee9bd8d7d267e063fe41303fd0d76f7deda7842f', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '00e4b8b9f23033fb22f82f0ddfe90fc31cb33941', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = IrDeparturesFilterStyle0;

const irDeparturesTableCss = ".sc-ir-departures-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-departures-table-h{box-sizing:border-box !important}.sc-ir-departures-table-h *.sc-ir-departures-table,.sc-ir-departures-table-h *.sc-ir-departures-table::before,.sc-ir-departures-table-h *.sc-ir-departures-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures-table{display:none !important}.sc-ir-departures-table-h{background:white}.table--container.sc-ir-departures-table{flex:1 1 0%}.departures-table__actions-cell.sc-ir-departures-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.departures-table__actions-cell.sc-ir-departures-table{min-width:250px}}";
const IrDeparturesTableStyle0 = irDeparturesTableCss;

const tableCss = ".ir-table-row.sc-ir-departures-table td.sc-ir-departures-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table.sc-ir-departures-table td.sc-ir-departures-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-departures-table tbody.sc-ir-departures-table tr.sc-ir-departures-table:last-child>td.sc-ir-departures-table{border-bottom:0 !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-departures-table .empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-departures-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-departures-table td.sc-ir-departures-table{background:#e3f3fa !important}.selected.sc-ir-departures-table td.sc-ir-departures-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table,.ir-table-row.sc-ir-departures-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table{text-transform:capitalize}.sortable.sc-ir-departures-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-departures-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-departures-table svg.sc-ir-departures-table{color:var(--blue)}.sticky-column.sc-ir-departures-table{position:sticky !important;right:0;background-color:white}";
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
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, index.h("td", { class: "sticky-column" }, index.h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-cell", { guest: booking.guest })), index.h("td", null, index.h("ir-guest-name-cell", { name: room.guest })), index.h("td", null, index.h("ir-unit-cell", { room: room })), index.h("td", null, index.h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), index.h("td", { class: "text-right" }, index.h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), index.h("td", null, index.h("div", { class: "departures-table__actions-cell" }, showAction ? index.h("ir-actions-cell", { buttons: isOverdueCheckout ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckOutBookings, outBookings } = departures_store.departuresStore;
        return (index.h(index.Host, { key: '746077793fc85981d7971e50b83d6feaf3eda004' }, index.h("div", { key: 'c6977a71c6b0348fdf7310f4958f78ac0548f5d9', class: "table--container" }, index.h("table", { key: 'fab239bf86ad0b2144eb45d6b4d3499e296dcab4', class: "table data-table" }, index.h("thead", { key: '939738ace393316acf2ca81df3bd8786acb42383' }, index.h("tr", { key: 'd6c75ffb1e36f85bb5c57a4834ac0369a22d02e0' }, index.h("th", { key: 'ebcbe54b2ed9f1448af76d2924e7d5fbda4ffff9' }, index.h("span", { key: 'b95212c3cced54de043fb066fb805fccd04bab45', class: 'departures-table__departure__cell' }, "Booking#")), index.h("th", { key: 'a2a3363c98eb452cd163acd901e7bb277a53bd56' }, index.h("div", { key: '5ec9cb22a6ede7d06da0a8d7324546501b35fe16' }, index.h("p", { key: '91b842bf30c1363cc7f626125b0cc3b5bf28a474' }, "Booked by"))), index.h("th", { key: '051b95c510b6b8beb91758320606b0718269779c' }, "Guest name"), index.h("th", { key: 'e8407b6b0f7be4da15559baf0115a611d6713009' }, "Unit"), index.h("th", { key: '9d89564cd15d996fe95f55848e1613b59fe16d4d' }, "Dates"), index.h("th", { key: '1e54f11690939affb1593197ad3da2729c83370b', class: "text-right" }, "Balance"), index.h("th", { key: 'b51449862a91f99729c9603771277b7e575788f6' }))), index.h("tbody", { key: 'e35525e7ab0b1fddb966a84d8354f235fa5af084' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (index.h("tr", { key: 'd69c3eef832658da9d6b9df477be5662bff4e55a' }, index.h("td", { key: 'de4b1449cf4eed83b65915e0be5cab97f247507d', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
    }
};
IrDeparturesTable.style = IrDeparturesTableStyle0 + IrDeparturesTableStyle1;

exports.ir_departures_filter = IrDeparturesFilter;
exports.ir_departures_table = IrDeparturesTable;

//# sourceMappingURL=ir-departures-filter_2.cjs.entry.js.map