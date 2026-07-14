import { r as registerInstance, c as createEvent, h, H as Host } from './index-Nexq2OjX.js';
import { d as departuresStore } from './departures.store-J2OHMKxw.js';
import { l as locales } from './locales.store-flvFxs7J.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './utils-CRe_zSvY.js';
import './index-DeW5X45W.js';
import './calendar-data-CPCc-_Kx.js';
import './index-BX-r5OtJ.js';
import './type-D7rOPtKA.js';

const irDeparturesTableCss = () => `.sc-ir-departures-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-departures-table-h{box-sizing:border-box !important}.sc-ir-departures-table-h *.sc-ir-departures-table,.sc-ir-departures-table-h *.sc-ir-departures-table::before,.sc-ir-departures-table-h *.sc-ir-departures-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures-table{display:none !important}.sc-ir-departures-table-h{background:white}.departures-table__actions-cell.sc-ir-departures-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.departures-table__actions-cell.sc-ir-departures-table{min-width:150px}}`;

const tableCss = () => `.sc-ir-departures-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-departures-table{overflow-x:auto}.table--container.sc-ir-departures-table,.data-table.sc-ir-departures-table{height:100%}.ir-table-row.sc-ir-departures-table td.sc-ir-departures-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-departures-table td.sc-ir-departures-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-departures-table tbody.sc-ir-departures-table tr.sc-ir-departures-table:last-child>td.sc-ir-departures-table{border-bottom:0 !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-departures-table,.ir-table-row.sc-ir-departures-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-departures-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-departures-table svg.sc-ir-departures-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-departures-table:active td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-departures-table td.sc-ir-departures-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-departures-table:active td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-departures-table .empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-departures-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-departures-table{position:sticky !important;right:0;background-color:white}`;

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
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction ? (h("ir-actions-cell", { onIrAction: e => {
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
        return (h(Host, { key: '27ae121d1662c811b1f9d51a32de6e984f2c2858' }, h("div", { key: '9c15712fcdca8c08b0fde52ccf8b617495ef21b5', class: "table--container" }, h("table", { key: 'b63ce79bfe1faf83a10cd43385b763ff14c3e5df', class: "table data-table" }, h("thead", { key: 'cd58bffbdb02388c7a583380e3efa209ddbda4f0' }, h("tr", { key: '7121c29337d53f07729016694e34e0c423bfb34e' }, h("th", { key: 'c8f05576dc6680af782e6bafcdbde3e4f60d77fa' }, h("span", { key: '48c22ca4dca36b2f0dce44133c611d1e6acdd352', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: '7713de7295bedd5f23bb9985d3a28103cd8540a7' }, h("div", { key: 'a22ab06d816c012bf6aadd269c290ab336cfc638' }, h("p", { key: '066a1f7b9557c53f464327ccd169b82378d26a29' }, "Booked by /"), h("p", { key: 'ab027c5e46a6f0a9f7a58a8b26d11ef479c1d3db' }, "Guest name"))), h("th", { key: 'f181268080ec0580661cc32a7368c83286e9125a' }, "Unit"), h("th", { key: '3ccf0b4373b9d3cb295c3fd02160dcf824183fdc' }, "Dates"), h("th", { key: '4e471ed43ba9501be519ad2811289d61cba3e90a', class: "text-center" }, "Balance", h("div", { key: 'e62fd799039b6dc1e204232bdf9becd5cc3196a0', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: '3e889e54d68c8eb10613f80c77540678442588f0', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, "Click to collect"))), h("th", { key: '9d836fb10d766aef26b60038d3a3e0255506ebca' }))), h("tbody", { key: 'e0e080df029a34092cb7364e959ef8fdeacf32a5' }, this.renderSection({ bookings: futureRooms, isFuture: true }), this.renderSection({ bookings: needsCheckOutBookings, showAction: true }), this.renderSection({ bookings: outBookings }), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '0ab65f9cd5a02c2ed7e2fd151cc7d32f712f5478' }, h("td", { key: '1673440a86c6bc956bd80f6cf3d4350c1cddca1d', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '18b0ee36223ae338b463b04e9f60e383a962eb61' }))))))), (needsCheckOutBookings.length > 0 || outBookings.length > 0 || futureRooms.length > 0) && (h("ir-pagination", { key: 'e1a787aafed6d5f83a2dced37b9d5359996a9200', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'Bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrDeparturesTable.style = irDeparturesTableCss() + tableCss();

export { IrDeparturesTable as ir_departures_table };
