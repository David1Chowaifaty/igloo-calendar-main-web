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
        return (index.h("div", { key: '00e786bafaa360c2bed8d165ad3b468a81b04f73', class: "departures-filters__container" }, index.h("ir-custom-date-picker", { key: '47672f3b431be2b2ee8f972eda751793af4d8fb2', class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '615a88e9a48d145c187d462b108149f7fb6eb829', name: "calendar", slot: "start" }), index.h("wa-spinner", { key: 'd99d09c4f22b55709680c1308cb726efac2f9942', slot: "end" })), index.h("ir-custom-input", { key: '51d4dd14cef3dd6abc92afe23880a00091a66c1b', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '5b58954f5a00fb171b4bfaf4434367506ccff923', name: "magnifying-glass", slot: "start" }))));
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
        return (index.h(index.Host, { key: 'b0fc5855d490ce23ad91e44b615c2abf5f8654b5' }, index.h("div", { key: '5307107c1ff4dcae25b1cb71ad99ebef08acf51e', class: "table--container" }, index.h("table", { key: '6b3e7dcf1cb78423c8d3a76b783be03b135f4a66', class: "table data-table" }, index.h("thead", { key: '27e1a0d6e863b279d70b2207944b7a59250ce5ad' }, index.h("tr", { key: '23cf6d4a135172b15f8009e96019842324bba01f' }, index.h("th", { key: '678e43a9b330bdba83443f8372e2eada954a0dba' }, index.h("span", { key: '02411f10838e74d041aac450c48e47eae26f3396', class: 'departures-table__departure__cell' }, "Booking#")), index.h("th", { key: '3c36326a9589b6df0e918bad8321f4d64e881a16' }, index.h("div", { key: '7e0464bddaa374b9659ba44c68e49705fcbba651' }, index.h("p", { key: 'ff59ca6b24c26b820210bcbe24b70456a05d97a1' }, "Booked by"))), index.h("th", { key: '031bbfc5c9ac03c9d70f8afc43e12c670705ef2d' }, "Guest name"), index.h("th", { key: '2e4e554db625230628150707a035f50095799f56' }, "Unit"), index.h("th", { key: '0c9231edc89693902fb5853a55d97568403f7e7c' }, "Dates"), index.h("th", { key: '726f17e89a3610a7733c358181cd12ebcb15860c', class: "text-right" }, "Balance"), index.h("th", { key: '1658832101b99fb55e5adceee3153087f5b644f1' }))), index.h("tbody", { key: 'a4cbc520552d90901620a5bbb133f582e97c73c2' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (index.h("tr", { key: '4b065b87b934c3d1e6d4f960deaa154b425c7a75' }, index.h("td", { key: '15ab45683bce4362ce87007f9d89487c1f8c2068', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
    }
};
IrDeparturesTable.style = IrDeparturesTableStyle0 + IrDeparturesTableStyle1;

exports.ir_departures_filter = IrDeparturesFilter;
exports.ir_departures_table = IrDeparturesTable;

//# sourceMappingURL=ir-departures-filter_2.cjs.entry.js.map