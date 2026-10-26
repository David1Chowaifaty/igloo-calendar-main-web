'use strict';

var index = require('./index-IDeZZwEK.js');
var arrivals_store = require('./arrivals.store-CBAC7EBJ.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var t = require('./t-CqJPQrfm.js');
require('./room-movement-time-CCE_KSaI.js');
require('./moment-CdViwxPQ.js');
require('./utils-BEjK-V-3.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./ir-date-CbkOKs2C.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./calendar-dates-BxDGM1ix.js');

const irArrivalsTableCss = () => `.sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:150px}}.sc-ir-arrivals-table-h .table--container.sc-ir-arrivals-table{flex:0 1 auto;block-size:auto;min-block-size:0}.sc-ir-arrivals-table-h .data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{position:sticky;inset-block-start:0;z-index:3;border-block-end-color:transparent !important;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-border-normal)}.data-table.sc-ir-arrivals-table{inline-size:100%}`;

const tableCss = () => `.sc-ir-arrivals-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-arrivals-table{overflow-x:auto}.table--container.sc-ir-arrivals-table,.data-table.sc-ir-arrivals-table{height:100%}.ir-table-row.sc-ir-arrivals-table td.sc-ir-arrivals-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-arrivals-table td.sc-ir-arrivals-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-arrivals-table tbody.sc-ir-arrivals-table tr.sc-ir-arrivals-table:last-child>td.sc-ir-arrivals-table{border-bottom:0 !important}.cell--align-start.sc-ir-arrivals-table{text-align:start !important}.cell--align-center.sc-ir-arrivals-table{text-align:center !important}.cell--align-end.sc-ir-arrivals-table{text-align:end !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-arrivals-table,.ir-table-row.sc-ir-arrivals-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sortable.sc-ir-arrivals-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sortable.sc-ir-arrivals-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sortable.sc-ir-arrivals-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-arrivals-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-arrivals-table svg.sc-ir-arrivals-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-arrivals-table:active td.sc-ir-arrivals-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-arrivals-table:active td.sc-ir-arrivals-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-arrivals-table .empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-arrivals-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-arrivals-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrArrivalsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.requestPageChange = index.createEvent(this, "requestPageChange");
        this.requestPageSizeChange = index.createEvent(this, "requestPageSizeChange");
        this.checkInRoom = index.createEvent(this, "checkInRoom");
    }
    /** Hides the pagination footer, for hosts that load the whole day in one page (the dashboard). */
    hidePagination = false;
    /**
     * For properties without front desk (PMS): check-in status isn't tracked, so every room arriving on the store's day is
     * listed in one list, without overdue marks or the actions column.
     */
    pmsDisabled = false;
    selectedBooking;
    requestPageChange;
    requestPageSizeChange;
    checkInRoom;
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
    async handleActionsClicked(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        switch (e.detail.action) {
            case 'check_in':
            case 'overdue_check_in':
                const room = this.selectedBooking.rooms[0];
                const { adult_nbr, children_nbr, infant_nbr } = room.occupancy;
                this.checkInRoom.emit({
                    identifier: room.identifier,
                    sharing_persons: room.sharing_persons,
                    booking_nbr: this.selectedBooking.booking_nbr,
                    checkin: true,
                    roomName: room.unit?.name,
                    totalGuests: adult_nbr + children_nbr + infant_nbr,
                });
                return;
            default:
                console.warn(e.detail.action + ' not handled');
        }
    }
    renderRow(booking, room, index$1, showAction) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index$1}`;
        // Overdue relative to the store's day (the dashboard's selected day), not the real today.
        const isOverdueCheckIn = !this.pmsDisabled && room.from_date < arrivals_store.arrivalsStore.today;
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, index.h("td", { class: "sticky-column" }, index.h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && index.h("ir-guest-name-cell", { name: room.guest })), index.h("td", null, index.h("ir-unit-cell", { room: room })), index.h("td", null, index.h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), index.h("td", { class: "text-center" }, index.h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true, paymentDate: arrivals_store.arrivalsStore.today })), !this.pmsDisabled && this.renderActionsCell(booking, room, isOverdueCheckIn, showAction)));
    }
    renderActionsCell(booking, room, isOverdueCheckIn, showAction) {
        // Automatic properties still list rooms awaiting check-in, but the system checks them in, so no button.
        const isAutomaticCheckIn = !!calendarData.calendar_data.property?.is_automatic_check_in_out;
        return (index.h("td", null, index.h("div", { class: "arrivals-table__actions-cell" }, !room.unit ? (index.h("span", { style: { color: 'var(--wa-color-danger-fill-loud)' } }, t.t('Lcz_NotAssigned', { fallback: 'Not assigned' }))) : showAction && !isAutomaticCheckIn ? (index.h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'], onIrAction: e => {
                this.selectedBooking = booking;
                this.handleActionsClicked(e);
            } })) : room.in_out.code === '001' ? (t.t('Lcz_InHouse', { fallback: 'In-house' })) : (''))));
    }
    /** Non-PMS rows: every room arriving on the store's day, in the store's order. */
    renderArrivingRooms() {
        const { filteredBookings, today } = arrivals_store.arrivalsStore;
        const arriving = filteredBookings.flatMap(booking => (booking.rooms ?? []).filter(room => room.from_date === today).map(room => ({ booking, room })));
        return arriving.map(({ booking, room }, index) => this.renderRow(booking, room, index, false));
    }
    renderBody() {
        const { needsCheckInBookings, inHouseBookings, futureBookings } = arrivals_store.arrivalsStore;
        const columnCount = this.pmsDisabled ? 5 : 6;
        const rows = this.pmsDisabled
            ? this.renderArrivingRooms()
            : [...(this.renderSection(futureBookings) ?? []), ...(this.renderSection(needsCheckInBookings, true) ?? []), ...(this.renderSection(inHouseBookings) ?? [])];
        const isEmpty = this.pmsDisabled ? !rows.length : !needsCheckInBookings.length && !inHouseBookings.length;
        return [
            ...rows,
            isEmpty && (index.h("tr", null, index.h("td", { colSpan: columnCount, class: "empty-row" }, index.h("ir-empty-state", null)))),
        ];
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
        const { pagination } = arrivals_store.arrivalsStore;
        return (index.h(index.Host, { key: 'ef909d1dfecf74d2d4a7dd288e8d8587d27d32af' }, index.h("div", { key: 'ba6dfa6726b7968b49f132fa1f6de23198bb50d0', class: "table--container" }, index.h("table", { key: '1d6cfe48416e860bc7585b1b06067c9078ffc69c', class: "table data-table" }, index.h("thead", { key: '3c33be3dbb6112526bcb6fb9fbc17a1a17c71255' }, index.h("tr", { key: 'afbdf2fa0a1be3873d9798619d7d4d63474863fe' }, index.h("th", { key: '55a910093e48380fa56e0e9b0b636a199298be86' }, index.h("span", { key: '0bae831b08dee5d07ebf8982adad23f62d2195c4', class: 'arrivals-table__departure__cell' }, t.t('Lcz_BookingHash', { fallback: 'Booking#' }))), index.h("th", { key: '849cb290f7f6d24e1f4c4af44d61a3c9679d5c4a' }, index.h("div", { key: '811c94898c90a9a3d834e35663b0107fe9bbfeba' }, index.h("p", { key: 'befb8f38c2907a4199b4513918c90c58f61b8028' }, t.t('Lcz_BookedBySlash', { fallback: 'Booked by /' })), index.h("p", { key: '23d0d9f0d8e3dc1ebcdf27301c9134ad2bacce45' }, t.t('Lcz_GuestName', { fallback: 'Guest name' })))), index.h("th", { key: '2c56858f2bd8fa9e95722f2251511eb6dcf9caba' }, t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", { key: 'aa09db07f70537a94e7b9737208f47ff720c65e4' }, t.t('Lcz_Dates', { fallback: 'Dates' })), index.h("th", { key: '1c5a1e688e0d77a88621d7bbed54c65693558e22', class: "text-center" }, t.t('Lcz_Balance', { fallback: 'Balance' }), index.h("div", { key: 'f7676af4795ca4ac5745afbbb5e7c336d479ef57', style: { width: 'fit-content', marginInline: 'auto' } }, index.h("ir-custom-button", { key: 'e6d70a50e86523d48e21303796a78692af83e76c', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t.t('Lcz_ClickToCollect', { fallback: 'Click to collect' })))), !this.pmsDisabled && index.h("th", { key: '3e6703558bc3333151b12d7d507d4a33ffc544fd' }))), index.h("tbody", { key: '2c9ce62e29f81063aed02d32aacb7fb34efb313f' }, this.renderBody()))), !this.hidePagination && (index.h("ir-pagination", { key: 'ab7e8faf94f969f3397fb873867f32518c0af8dc', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t.t('Lcz_Bookings', { fallback: 'Bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrArrivalsTable.style = irArrivalsTableCss() + tableCss();

exports.ir_arrivals_table = IrArrivalsTable;
