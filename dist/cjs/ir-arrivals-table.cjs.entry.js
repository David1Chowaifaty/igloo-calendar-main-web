'use strict';

var index = require('./index-IDeZZwEK.js');
var arrivals_store = require('./arrivals.store-CxYY9GbK.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CqJPQrfm.js');
require('./room-movement-time-CCE_KSaI.js');
require('./utils-ZKsQb8eV.js');
require('./calendar-data-ShS6b-Ns.js');
require('./locale-scope-Cch-vf1R.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./ir-date-CbkOKs2C.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./calendar-dates-BxDGM1ix.js');

const irArrivalsTableCss = () => `.sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:150px}}.sc-ir-arrivals-table-h .table--container.sc-ir-arrivals-table{flex:0 1 auto;block-size:auto;min-block-size:0}.sc-ir-arrivals-table-h .data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{position:sticky;inset-block-start:0;z-index:3;border-block-end-color:transparent !important;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-border-normal)}`;

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
        const isOverdueCheckIn = !this.pmsDisabled && moment.hooks(room.from_date, 'YYYY-MM-DD').startOf('day').isBefore(moment.hooks().startOf('day'), 'dates');
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, index.h("td", { class: "sticky-column" }, index.h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && index.h("ir-guest-name-cell", { name: room.guest })), index.h("td", null, index.h("ir-unit-cell", { room: room })), index.h("td", null, index.h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), index.h("td", { class: "text-center" }, index.h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), !this.pmsDisabled && this.renderActionsCell(booking, room, isOverdueCheckIn, showAction)));
    }
    renderActionsCell(booking, room, isOverdueCheckIn, showAction) {
        return (index.h("td", null, index.h("div", { class: "arrivals-table__actions-cell" }, !room.unit ? (index.h("span", { style: { color: 'var(--wa-color-danger-fill-loud)' } }, t.t('Lcz_NotAssigned', { fallback: 'Not assigned' }))) : showAction ? (index.h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'], onIrAction: e => {
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
        return (index.h(index.Host, { key: '3613ff34bae26c7c64453fef8027bab6b9ec5b5d' }, index.h("div", { key: 'a5fc702e986f887d3586622727302460e9927176', class: "table--container" }, index.h("table", { key: '65895fb5488d864f31c277acd73075a1638d42e7', class: "table data-table" }, index.h("thead", { key: 'f927a02f05c2ee6de814b62bb1abeff8b76ae857' }, index.h("tr", { key: '4c3dfbc27b1cc3cdd419d381d25d02c07cf9d1c1' }, index.h("th", { key: '4b0b6773ab0287c792fdf5ea1d17c00f29351f80' }, index.h("span", { key: 'ecacbbb4e3cea30ac786d066c1b8a24838a072a6', class: 'arrivals-table__departure__cell' }, t.t('Lcz_BookingHash', { fallback: 'Booking#' }))), index.h("th", { key: 'cbb4a67b55e2096e9c77bd23f0039409a51c7314' }, index.h("div", { key: '1e39a0d8ce2a7a3f4d71d800d3b699207bfde9ee' }, index.h("p", { key: '7c5ff9218b73a5bf2e2418ea001855e8780846af' }, t.t('Lcz_BookedBySlash', { fallback: 'Booked by /' })), index.h("p", { key: 'db26a7d90dbaa785c93f32cd3fd0ea5de2900eb8' }, t.t('Lcz_GuestName', { fallback: 'Guest name' })))), index.h("th", { key: 'ed40acc0419a52a3417aeb70b57024f09a8a871e' }, t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", { key: '9f6a9bee10db76e444f50f2fb253a26bd2aaff5d' }, t.t('Lcz_Dates', { fallback: 'Dates' })), index.h("th", { key: 'f901d368a34385355b991af0d0a3a8d8aa5ceb2d', class: "text-center" }, t.t('Lcz_Balance', { fallback: 'Balance' }), index.h("div", { key: 'ac3abc3c57be0a8f75269c66997ad62ce2b3baea', style: { width: 'fit-content', marginInline: 'auto' } }, index.h("ir-custom-button", { key: '507765483337b0e282996069affd3249309d8492', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t.t('Lcz_ClickToCollect', { fallback: 'Click to collect' })))), !this.pmsDisabled && index.h("th", { key: 'fb3afa809cef0dfecc1137d3e92fcf38d3aad6e1' }))), index.h("tbody", { key: '5ec1fff4d974994ff96f8b7cce60e1d07ac73700' }, this.renderBody()))), !this.hidePagination && (index.h("ir-pagination", { key: 'cfcbe4462a3f18d40772b1ac6f8b0c22d8c93487', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t.t('Lcz_Bookings', { fallback: 'Bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrArrivalsTable.style = irArrivalsTableCss() + tableCss();

exports.ir_arrivals_table = IrArrivalsTable;
