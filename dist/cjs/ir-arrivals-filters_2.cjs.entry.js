'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const arrivals_store = require('./arrivals.store-3bbc5bbf.js');
const moment = require('./moment-1780b03a.js');
require('./index-6299b0f7.js');
require('./_data-c8673ac9.js');

const irArrivalsFiltersCss = ".sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}";
const IrArrivalsFiltersStyle0 = irArrivalsFiltersCss;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        arrivals_store.setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '0171c9ef7b65be7b832084bb6addbb6fdc747eaf', class: "arrivals-filters__container" }, index.h("ir-custom-date-picker", { key: '36e24a0e09f2cbf06a4c3387439b4f361ad4fe9e', class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '2bf96818cbbd5d6e65ab4c34603ad91a94c324f0', name: "calendar", slot: "start" })), index.h("ir-custom-input", { key: '2980e2b2a5676b6f97fa76b6c6d61987beea07fd', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '3cf891fde339c55ffa3b9538f63480e9b4ec19f7', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

const irArrivalsTableCss = ".sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;background-color:white;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.table--container.sc-ir-arrivals-table{flex:1 1 0%}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:250px}}";
const IrArrivalsTableStyle0 = irArrivalsTableCss;

const tableCss = ".ir-table-row.sc-ir-arrivals-table td.sc-ir-arrivals-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table.sc-ir-arrivals-table td.sc-ir-arrivals-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-arrivals-table tbody.sc-ir-arrivals-table tr.sc-ir-arrivals-table:last-child>td.sc-ir-arrivals-table{border-bottom:0 !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-arrivals-table .empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-arrivals-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{background:#e3f3fa !important}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table,.ir-table-row.sc-ir-arrivals-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table{text-transform:capitalize}.sortable.sc-ir-arrivals-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-arrivals-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-arrivals-table svg.sc-ir-arrivals-table{color:var(--blue)}.sticky-column.sc-ir-arrivals-table{position:sticky !important;right:0;background-color:white}";
const IrArrivalsTableStyle1 = tableCss;

const IrArrivalsTable = class {
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
        const isOverdueCheckIn = moment.hooks(room.from_date, 'YYYY-MM-DD').isBefore(moment.hooks());
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, index.h("td", { class: "sticky-column" }, index.h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-cell", { guest: booking.guest })), index.h("td", null, index.h("ir-guest-name-cell", { name: room.guest })), index.h("td", null, index.h("ir-unit-cell", { room: room })), index.h("td", null, index.h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), index.h("td", { class: "text-right" }, index.h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), index.h("td", null, index.h("div", { class: "arrivals-table__actions-cell" }, showAction ? index.h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckInBookings, inHouseBookings } = arrivals_store.arrivalsStore;
        return (index.h(index.Host, { key: 'b47b44dee2e2fdfa7f5530421ca4df096fbe84e5' }, index.h("div", { key: '27b311f4006fc73777e994c7a6959603e748a781', class: "table--container" }, index.h("table", { key: '8df35c17d9d6403a7c337594ef5d4263f6578ee5', class: "table data-table" }, index.h("thead", { key: '156667fa05d36afc7d9ff4fa37493fbd814a64f2' }, index.h("tr", { key: '9c83127f4bed0bd8876e72b93cf0b5c4ba7a8890' }, index.h("th", { key: 'c1b4109320e34f923ae4361e71c208b987d61ad4' }, index.h("span", { key: '38522e8aa7dd133df0f9abd5e136d25ac8da99fc', class: 'arrivals-table__departure__cell' }, "Booking#")), index.h("th", { key: 'a292e5fac7fb0b39efdd9b1a9e8483993e76e3c8' }, index.h("div", { key: 'ebd2b0ba7e8d34f4a749e25785d6597a077b6171' }, index.h("p", { key: 'b3d8ca4d7d73f2964a64d9a7e7f3212f853063aa' }, "Booked by"))), index.h("th", { key: 'fcfd866ec0f87b711e57e14578e0bbf9e9997de1' }, "Guest name"), index.h("th", { key: 'c4625fa3987647f30b433e4610aaaa18d601f9ad' }, "Unit"), index.h("th", { key: '7b0bca14e63c6a7e8fd48764e12b1cb5a2ce9fa6' }, "Dates"), index.h("th", { key: '151d32575a1f7230ad3ca08eb16dad469b1e35b4', class: "text-right" }, "Balance"), index.h("th", { key: '343d10114d126b08948ea1957481fc354d290380' }))), index.h("tbody", { key: 'f92fdcc3530ab005879a1e5e831fa13726d19410' }, this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (index.h("tr", { key: 'f3c2d715ffc672471ebd905ef32ecd9e93bd6be8' }, index.h("td", { key: 'fe6254203ca4410be838b1a3415caeb56e104484', colSpan: 7, class: "empty-row" }, "No arrivals found."))))))));
    }
};
IrArrivalsTable.style = IrArrivalsTableStyle0 + IrArrivalsTableStyle1;

exports.ir_arrivals_filters = IrArrivalsFilters;
exports.ir_arrivals_table = IrArrivalsTable;

//# sourceMappingURL=ir-arrivals-filters_2.cjs.entry.js.map