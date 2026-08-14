'use strict';

var index = require('./index-CJa_TWt0.js');
var departures_store = require('./departures.store-ByeCb8Bc.js');
var locales_store = require('./locales.store-BDFcUAoA.js');
var moment = require('./moment-CdViwxPQ.js');
require('./utils-E_4JVEHN.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-DHUlGBMy.js');
require('./index-DbhEzZeW.js');
require('./type-Dy9pVS4V.js');

const irDeparturesTableCss = () => `.sc-ir-departures-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-departures-table-h{box-sizing:border-box !important}.sc-ir-departures-table-h *.sc-ir-departures-table,.sc-ir-departures-table-h *.sc-ir-departures-table::before,.sc-ir-departures-table-h *.sc-ir-departures-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures-table{display:none !important}.sc-ir-departures-table-h{background:white}.departures-table__actions-cell.sc-ir-departures-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.departures-table__actions-cell.sc-ir-departures-table{min-width:150px}}`;

const tableCss = () => `.sc-ir-departures-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-departures-table{overflow-x:auto}.table--container.sc-ir-departures-table,.data-table.sc-ir-departures-table{height:100%}.ir-table-row.sc-ir-departures-table td.sc-ir-departures-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-departures-table td.sc-ir-departures-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-departures-table tbody.sc-ir-departures-table tr.sc-ir-departures-table:last-child>td.sc-ir-departures-table{border-bottom:0 !important}.cell--align-start.sc-ir-departures-table{text-align:start !important}.cell--align-center.sc-ir-departures-table{text-align:center !important}.cell--align-end.sc-ir-departures-table{text-align:end !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-departures-table,.ir-table-row.sc-ir-departures-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-departures-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-departures-table svg.sc-ir-departures-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-departures-table:active td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-departures-table td.sc-ir-departures-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-departures-table:active td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-departures-table .empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-departures-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-departures-table{position:sticky !important;right:0;background-color:white}`;

const IrDeparturesTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkoutRoom = index.createEvent(this, "checkoutRoom");
        this.requestPageChange = index.createEvent(this, "requestPageChange");
        this.requestPageSizeChange = index.createEvent(this, "requestPageSizeChange");
    }
    checkoutRoom;
    requestPageChange;
    requestPageSizeChange;
    renderSection({ bookings, showAction = false, isFuture = false }) {
        if (!bookings?.length) {
            return null;
        }
        const rows = bookings.flatMap(booking => this.renderBookingRows({ booking, showAction, isFuture }));
        return [...rows];
    }
    renderBookingRows({ booking, isFuture, showAction }) {
        return (booking.rooms ?? []).map((room, index) => this.renderRow(booking, room, index, showAction, isFuture));
    }
    compareGuests(booking, room) {
        const roomGuest = room?.guest;
        const bookingGuest = booking?.guest;
        if (!roomGuest || !bookingGuest) {
            return false;
        }
        const normalizeGuest = (guest) => {
            const firstName = guest.first_name?.replace(/\s+/g, '').toLowerCase() || '';
            const lastName = guest.last_name?.replace(/\s+/g, '').toLowerCase() || '';
            return `${firstName}${lastName}`;
        };
        return normalizeGuest(bookingGuest) === normalizeGuest(roomGuest);
    }
    renderRow(booking, room, index$1, showAction, isFuture) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index$1}`;
        const isOverdueCheckout = moment.hooks(room.to_date, 'YYYY-MM-DD').startOf('day').isBefore(moment.hooks().startOf('day'));
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, index.h("td", { class: "sticky-column" }, index.h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && index.h("ir-guest-name-cell", { name: room.guest })), index.h("td", null, index.h("ir-unit-cell", { room: room })), index.h("td", null, index.h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), index.h("td", { class: "text-right" }, index.h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), index.h("td", null, index.h("div", { class: "departures-table__actions-cell" }, showAction ? (index.h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.checkoutRoom.emit({
                    booking: booking,
                    identifier: room.identifier,
                });
            }, buttons: isOverdueCheckout ? ['overdue_check_out'] : ['check_out'] })) : isFuture ? ('') : ('In-house')))));
    }
    handlePageChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageChange.emit(event.detail);
    }
    handlePageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageSizeChange.emit(event.detail);
    }
    render() {
        const { needsCheckOutBookings, futureRooms, outBookings, pagination } = departures_store.departuresStore;
        return (index.h(index.Host, { key: '2962dad535aa4abc52c540ada1982ad5220fbce7' }, index.h("div", { key: '3508ba92c0bee034bb5d74196fd165535f0e33cb', class: "table--container" }, index.h("table", { key: '67add7c3589e0757029e10d9f1ba4ccac50128ef', class: "table data-table" }, index.h("thead", { key: '379c9676387f046b7f2f3d5de960f7c829d017f0' }, index.h("tr", { key: '21a3112ea81a34b7d36baee5879e50c2fae88b2b' }, index.h("th", { key: 'd66d9e30ddf92a7fbbc48fdf5a9ddb882fe6f1cb' }, index.h("span", { key: '03fba8779a5c7c192cac71c8afe2d79b0dcf2d3b', class: 'departures-table__departure__cell' }, "Booking#")), index.h("th", { key: '6a1898e001f2878943b39d0cfc5e852c302f1601' }, index.h("div", { key: 'a2300ebc805d3e849dc40aecd1d8d7dbb5e469f2' }, index.h("p", { key: '171095d6c8321a23371f0f1215a2aa01562d15db' }, "Booked by /"), index.h("p", { key: 'dc03282d9c8251bc8cb7a3bc7645783f35f3588b' }, "Guest name"))), index.h("th", { key: 'f525caab0b6c63f647e3188b4c8b0c877ffdfcee' }, "Unit"), index.h("th", { key: '0d12a2b3dad98bacaf85bef30db65897ed1e4a5b' }, "Dates"), index.h("th", { key: '4b1ed32769d15dfa2270ab11be2dc8c38ac82744', class: "text-center" }, "Balance", index.h("div", { key: 'e331418fe1cb453e7a612005b8173c376b0ed782', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, index.h("ir-custom-button", { key: '188846f7a1633d7cc04e4e700c9c9401f04b1923', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, "Click to collect"))), index.h("th", { key: '5ebcd86089936bd6dcc9db8095700a9ec8ba7e6b' }))), index.h("tbody", { key: '020ce429e451974ec812bf13655161811c18fb0e' }, this.renderSection({ bookings: futureRooms, isFuture: true }), this.renderSection({ bookings: needsCheckOutBookings, showAction: true }), this.renderSection({ bookings: outBookings }), !needsCheckOutBookings.length && !outBookings.length && (index.h("tr", { key: 'b66dfc0a4a6f1f380eb8d4719feb7c3c8cb8b246' }, index.h("td", { key: '4e2db945efc5e69dd5a63ad5b00b499c6fa94bf2', colSpan: 6, class: "empty-row" }, index.h("ir-empty-state", { key: 'f48474de16400bc64157cf2c496a9434594d06ed' }))))))), (needsCheckOutBookings.length > 0 || outBookings.length > 0 || futureRooms.length > 0) && (index.h("ir-pagination", { key: 'bc77cd828a9cd8e0a2a0dac1ea5d7dfd4276d0f8', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales_store.locales.entries?.Lcz_Bookings ?? 'Bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrDeparturesTable.style = irDeparturesTableCss() + tableCss();

exports.ir_departures_table = IrDeparturesTable;
