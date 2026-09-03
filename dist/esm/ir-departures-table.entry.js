import { r as registerInstance, c as createEvent, h, H as Host } from './index-BYqrdgY9.js';
import { d as departuresStore } from './departures.store-CX-2YsAg.js';
import { l as locales } from './locales.store-C9qsbKR0.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './utils-COglgzDo.js';
import './index-DeW5X45W.js';
import './calendar-data-BebdClG4.js';
import './index-CimhgHoX.js';
import './booking.dto-DpE31yhG.js';
import './type-D7rOPtKA.js';
import './ir-date-_0rd4VZd.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irDeparturesTableCss = () => `.sc-ir-departures-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-departures-table-h{box-sizing:border-box !important}.sc-ir-departures-table-h *.sc-ir-departures-table,.sc-ir-departures-table-h *.sc-ir-departures-table::before,.sc-ir-departures-table-h *.sc-ir-departures-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures-table{display:none !important}.sc-ir-departures-table-h{background:white}.departures-table__actions-cell.sc-ir-departures-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.departures-table__actions-cell.sc-ir-departures-table{min-width:150px}}.ir-text-end.sc-ir-departures-table{text-align:end}`;

const tableCss = () => `.sc-ir-departures-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-departures-table{overflow-x:auto}.table--container.sc-ir-departures-table,.data-table.sc-ir-departures-table{height:100%}.ir-table-row.sc-ir-departures-table td.sc-ir-departures-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-departures-table td.sc-ir-departures-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-departures-table tbody.sc-ir-departures-table tr.sc-ir-departures-table:last-child>td.sc-ir-departures-table{border-bottom:0 !important}.cell--align-start.sc-ir-departures-table{text-align:start !important}.cell--align-center.sc-ir-departures-table{text-align:center !important}.cell--align-end.sc-ir-departures-table{text-align:end !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-departures-table,.ir-table-row.sc-ir-departures-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-departures-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-departures-table svg.sc-ir-departures-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-departures-table:active td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-departures-table td.sc-ir-departures-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-departures-table:active td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-departures-table .empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-departures-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-departures-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrDeparturesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkoutRoom = createEvent(this, "checkoutRoom");
        this.requestPageChange = createEvent(this, "requestPageChange");
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange");
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
    renderRow(booking, room, index, showAction, isFuture) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index}`;
        const isOverdueCheckout = hooks(room.to_date, 'YYYY-MM-DD').startOf('day').isBefore(hooks().startOf('day'));
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "ir-text-end" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction ? (h("ir-actions-cell", { onIrAction: e => {
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
        const { needsCheckOutBookings, futureRooms, outBookings, pagination } = departuresStore;
        return (h(Host, { key: '5699e99d720c4c9dc17f2571dbf6b1744b4accdb' }, h("div", { key: 'ab639858f53e74e1742e89e2a34af9d5ae6b992d', class: "table--container" }, h("table", { key: '924e503b11540962d4e46e92b7ee74bed7b00c16', class: "table data-table" }, h("thead", { key: 'fb98cfdb8e300e0e5f28abf4cc5426ab361f1d09' }, h("tr", { key: 'b7ff56abd9b6ba06ae658578315c6c1eaae163e0' }, h("th", { key: '40a67a2aeb0e1fe334090a52149361dd20b5758c' }, h("span", { key: '15c88693c44a740e51f3ce6b4832cd4c56b7eefa', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: '426bf319453b9ddd07302826a7f593823b081f22' }, h("div", { key: 'aeb24fd45495f2d51a8dcebb905c8b458c8dc762' }, h("p", { key: '8fd61b3980415c9effe7a2061498c08bbc501807' }, "Booked by /"), h("p", { key: '16a5488b30e6ef0ed4da451799b8b96f8b5dd6a0' }, "Guest name"))), h("th", { key: '0a234a37dccf7072aa2403704534173e4ba74698' }, "Unit"), h("th", { key: '375d8ac36dc2b3d4b28464c2538ab15aa36fa7ca' }, "Dates"), h("th", { key: 'a714445bbb8068add7ab7d186f1be95ca8129508', class: "text-center" }, "Balance", h("div", { key: 'eeebe49266ad188d391d7a4a1a56a4705a1f4a15', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: '705719f49bad193abec1bb8e41c69466364c924a', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, "Click to collect"))), h("th", { key: '221e53c14772ff6908848134b05d1692dc8bc8c8' }))), h("tbody", { key: '4c5f3e7179a3332e4439c70fffa9894ea914cd46' }, this.renderSection({ bookings: futureRooms, isFuture: true }), this.renderSection({ bookings: needsCheckOutBookings, showAction: true }), this.renderSection({ bookings: outBookings }), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '7e18e82fade5df75ab58a57cbbf1aaf3c28f5e52' }, h("td", { key: 'da5d6cb75c7e080c29cbd742b7581792a83a88a6', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '64b37833bb7b6b5f630d08f0ba400df2b25897dd' }))))))), (needsCheckOutBookings.length > 0 || outBookings.length > 0 || futureRooms.length > 0) && (h("ir-pagination", { key: '9881f2e05ce01dce279c90503440d5f855835f68', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'Bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrDeparturesTable.style = irDeparturesTableCss() + tableCss();

export { IrDeparturesTable as ir_departures_table };
