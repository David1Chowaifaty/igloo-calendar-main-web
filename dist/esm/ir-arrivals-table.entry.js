import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { a as arrivalsStore } from './arrivals.store-D5qiSsp3.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { t } from './t-Bvz1wS_D.js';
import './room-movement-time-DWm_ef3q.js';
import './utils-CAiEa-WB.js';
import './calendar-data-D4DbXAhg.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-DQx6bzbY.js';
import './type-D_dKkSLY.js';
import './types-BLb1NO3I.js';
import './ir-date-CY_qGQ63.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './calendar-dates-D3hVfsrC.js';

const irArrivalsTableCss = () => `.sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:150px}}.sc-ir-arrivals-table-h .table--container.sc-ir-arrivals-table{flex:0 1 auto;block-size:auto;min-block-size:0}.sc-ir-arrivals-table-h .data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{position:sticky;inset-block-start:0;z-index:3;border-block-end-color:transparent !important;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-border-normal)}`;

const tableCss = () => `.sc-ir-arrivals-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-arrivals-table{overflow-x:auto}.table--container.sc-ir-arrivals-table,.data-table.sc-ir-arrivals-table{height:100%}.ir-table-row.sc-ir-arrivals-table td.sc-ir-arrivals-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-arrivals-table td.sc-ir-arrivals-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-arrivals-table tbody.sc-ir-arrivals-table tr.sc-ir-arrivals-table:last-child>td.sc-ir-arrivals-table{border-bottom:0 !important}.cell--align-start.sc-ir-arrivals-table{text-align:start !important}.cell--align-center.sc-ir-arrivals-table{text-align:center !important}.cell--align-end.sc-ir-arrivals-table{text-align:end !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-arrivals-table,.ir-table-row.sc-ir-arrivals-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sortable.sc-ir-arrivals-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sortable.sc-ir-arrivals-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sortable.sc-ir-arrivals-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-arrivals-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-arrivals-table svg.sc-ir-arrivals-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-arrivals-table:active td.sc-ir-arrivals-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-arrivals-table:active td.sc-ir-arrivals-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-arrivals-table .empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-arrivals-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-arrivals-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrArrivalsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.requestPageChange = createEvent(this, "requestPageChange");
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange");
        this.checkInRoom = createEvent(this, "checkInRoom");
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
    renderRow(booking, room, index, showAction) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index}`;
        const isOverdueCheckIn = !this.pmsDisabled && hooks(room.from_date, 'YYYY-MM-DD').startOf('day').isBefore(hooks().startOf('day'), 'dates');
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-center" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), !this.pmsDisabled && this.renderActionsCell(booking, room, isOverdueCheckIn, showAction)));
    }
    renderActionsCell(booking, room, isOverdueCheckIn, showAction) {
        return (h("td", null, h("div", { class: "arrivals-table__actions-cell" }, !room.unit ? (h("span", { style: { color: 'var(--wa-color-danger-fill-loud)' } }, t('Lcz_NotAssigned', { fallback: 'Not assigned' }))) : showAction ? (h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'], onIrAction: e => {
                this.selectedBooking = booking;
                this.handleActionsClicked(e);
            } })) : room.in_out.code === '001' ? (t('Lcz_InHouse', { fallback: 'In-house' })) : (''))));
    }
    /** Non-PMS rows: every room arriving on the store's day, in the store's order. */
    renderArrivingRooms() {
        const { filteredBookings, today } = arrivalsStore;
        const arriving = filteredBookings.flatMap(booking => (booking.rooms ?? []).filter(room => room.from_date === today).map(room => ({ booking, room })));
        return arriving.map(({ booking, room }, index) => this.renderRow(booking, room, index, false));
    }
    renderBody() {
        const { needsCheckInBookings, inHouseBookings, futureBookings } = arrivalsStore;
        const columnCount = this.pmsDisabled ? 5 : 6;
        const rows = this.pmsDisabled
            ? this.renderArrivingRooms()
            : [...(this.renderSection(futureBookings) ?? []), ...(this.renderSection(needsCheckInBookings, true) ?? []), ...(this.renderSection(inHouseBookings) ?? [])];
        const isEmpty = this.pmsDisabled ? !rows.length : !needsCheckInBookings.length && !inHouseBookings.length;
        return [
            ...rows,
            isEmpty && (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", null)))),
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
        const { pagination } = arrivalsStore;
        return (h(Host, { key: '63d0b1296c849bce1d4fd2bb1fd7b9442c0db93f' }, h("div", { key: '30559b981fda5a19fadf029b78e1a326c654348c', class: "table--container" }, h("table", { key: '1c0bda10fecdd4d9068e2ad588cf1f248da300da', class: "table data-table" }, h("thead", { key: 'fd3d668541ced2e848e8324db81f1ab4427247df' }, h("tr", { key: 'ef3de7aca230f1ec8413f248c36bd4191a1411ed' }, h("th", { key: 'e50c0f9e9cc7fa44373fb575936976bded65e178' }, h("span", { key: '4f0426c04aa61809c92ae2ce3e96c4e57a07c7b5', class: 'arrivals-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: 'b600f217b5c953d8ea4ff0e76b6c82401390fc24' }, h("div", { key: 'c81ba0f8eacb895de9fbaa47c2c145e9688cb921' }, h("p", { key: '477663d530d4f56a5f23d1f0554a1b10a5b7aae9' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' })), h("p", { key: '4c732f29a141d83c776ad52f6810f1cd4a02a031' }, t('Lcz_GuestName', { fallback: 'Guest name' })))), h("th", { key: '027d337e1b94f3510e3ff57a536c92d361e36861' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: 'bfa56caf37047ade3fca467d3576ef168de7e0d6' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: '608cb515a7c6642c9565c3eb78c18d2246e7381b', class: "text-center" }, t('Lcz_Balance', { fallback: 'Balance' }), h("div", { key: '267feae0a1d8bd32b38aafdbb871eb813d06e042', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: '0c0571e18434df50017bae033417d0e7e97cc168', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_ClickToCollect', { fallback: 'Click to collect' })))), !this.pmsDisabled && h("th", { key: '8d2ee93ae407636e527eaeaab5812ce67432352a' }))), h("tbody", { key: '3f49b67b55bb4f1be7920ea15e1d2246add7d45e' }, this.renderBody()))), !this.hidePagination && (h("ir-pagination", { key: 'd3cc91c82933a1635c57dd1a99aa4afc4d7b4b6e', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'Bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrArrivalsTable.style = irArrivalsTableCss() + tableCss();

export { IrArrivalsTable as ir_arrivals_table };
