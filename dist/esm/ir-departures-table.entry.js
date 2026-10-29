import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { d as departuresStore } from './departures.store-DOE_VU6V.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import { t } from './t-Bvz1wS_D.js';
import './room-movement-time-DWm_ef3q.js';
import './moment-Mki5YqAR.js';
import './utils-C5T893Le.js';
import './booking.dto-VzFWIl64.js';
import './type-B1KlYN_1.js';
import './types-DFSK8b1u.js';
import './ir-date-CY_qGQ63.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './calendar-dates-D3hVfsrC.js';

const irDeparturesTableCss = () => `.sc-ir-departures-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-departures-table-h{box-sizing:border-box !important}.sc-ir-departures-table-h *.sc-ir-departures-table,.sc-ir-departures-table-h *.sc-ir-departures-table::before,.sc-ir-departures-table-h *.sc-ir-departures-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures-table{display:none !important}.sc-ir-departures-table-h{background:white}.departures-table__actions-cell.sc-ir-departures-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.departures-table__actions-cell.sc-ir-departures-table{min-width:150px}}.ir-text-end.sc-ir-departures-table{text-align:end}.sc-ir-departures-table-h .table--container.sc-ir-departures-table{flex:0 1 auto;block-size:auto;min-block-size:0}.sc-ir-departures-table-h .data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{position:sticky;inset-block-start:0;z-index:3;border-block-end-color:transparent !important;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-border-normal)}.data-table.sc-ir-departures-table{inline-size:100%}`;

const tableCss = () => `.sc-ir-departures-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-departures-table{overflow-x:auto}.table--container.sc-ir-departures-table,.data-table.sc-ir-departures-table{height:100%}.ir-table-row.sc-ir-departures-table td.sc-ir-departures-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-departures-table td.sc-ir-departures-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-departures-table tbody.sc-ir-departures-table tr.sc-ir-departures-table:last-child>td.sc-ir-departures-table{border-bottom:0 !important}.cell--align-start.sc-ir-departures-table{text-align:start !important}.cell--align-center.sc-ir-departures-table{text-align:center !important}.cell--align-end.sc-ir-departures-table{text-align:end !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-departures-table,.ir-table-row.sc-ir-departures-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sortable.sc-ir-departures-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-departures-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-departures-table svg.sc-ir-departures-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-departures-table:active td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-departures-table td.sc-ir-departures-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-departures-table:active td.sc-ir-departures-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-departures-table .empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-departures-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-departures-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrDeparturesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkoutRoom = createEvent(this, "checkoutRoom");
        this.requestPageChange = createEvent(this, "requestPageChange");
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange");
    }
    /** Hides the pagination footer, for hosts that load the whole day in one page (the dashboard). */
    hidePagination = false;
    /**
     * For properties without front desk (PMS): check-out status isn't tracked, so every room departing on the store's day is
     * listed in one list, without overdue marks or the actions column.
     */
    pmsDisabled = false;
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
        // Overdue relative to the store's day (the dashboard's selected day), not the real today.
        const isOverdueCheckout = !this.pmsDisabled && room.to_date < departuresStore.today;
        // Automatic properties still list rooms awaiting check-out, but the system checks them out, so no button.
        const isAutomaticCheckOut = !!calendar_data.property?.is_automatic_check_in_out;
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "ir-text-end" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true, paymentDate: departuresStore.today })), !this.pmsDisabled && (h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction && !isAutomaticCheckOut ? (h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.checkoutRoom.emit({
                    booking: booking,
                    identifier: room.identifier,
                });
            }, buttons: isOverdueCheckout ? ['overdue_check_out'] : ['check_out'] })) : isFuture ? ('') : (t('Lcz_InHouse', { fallback: 'In-house' })))))));
    }
    /** Non-PMS rows: every room departing on the store's day, in the store's order. */
    renderDepartingRooms() {
        const { filteredBookings, today } = departuresStore;
        const departing = filteredBookings.flatMap(booking => (booking.rooms ?? []).filter(room => room.to_date === today).map(room => ({ booking, room })));
        return departing.map(({ booking, room }, index) => this.renderRow(booking, room, index, false, false));
    }
    renderBody() {
        const { needsCheckOutBookings, futureRooms, outBookings } = departuresStore;
        const columnCount = this.pmsDisabled ? 5 : 6;
        const rows = this.pmsDisabled
            ? this.renderDepartingRooms()
            : [
                ...(this.renderSection({ bookings: futureRooms, isFuture: true }) ?? []),
                ...(this.renderSection({ bookings: needsCheckOutBookings, showAction: true }) ?? []),
                ...(this.renderSection({ bookings: outBookings }) ?? []),
            ];
        const isEmpty = this.pmsDisabled ? !rows.length : !needsCheckOutBookings.length && !outBookings.length;
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
        const { needsCheckOutBookings, futureRooms, outBookings, pagination } = departuresStore;
        return (h(Host, { key: '4c8987fc659ab7b64fbae29d600394be96324b9c' }, h("div", { key: '286cae4cb0d5671557c454603ad567fcb76d59b6', class: "table--container" }, h("table", { key: 'f7d30ba58fec4cecbca2e09d963bd3fc29319903', class: "table data-table" }, h("thead", { key: 'ff8e9f545a8047ca31991628c9250c541f01f9c8' }, h("tr", { key: '0d0ef76ab54a6866489a62c772ed0b33de2fc790' }, h("th", { key: 'ba727c719e3903aeb3e4b77932525ceab08c493d' }, h("span", { key: '8065e14cea36f234f98a3a7ff72689767f9374cc', class: 'departures-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '3f40b3d0067f3c23ae1724d8fcafd906d3681ba4' }, h("div", { key: 'cdad90ebb5239e1b7ca46e625c658fd4b8ebcd4a' }, h("p", { key: 'd3746d4240e7e362966b6f19bac4e2abafb0c6ac' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' })), h("p", { key: '6ee3b8c1ed20d6cb65c4d92b65591bc20bb0f7bc' }, t('Lcz_GuestName', { fallback: 'Guest name' })))), h("th", { key: 'd76e8b5f40549ad81312195059028667f4fbe766' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: 'd6137342bc487e4b9a7e5824806e8a69642dafec' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: '3b0343b49ebc227ff5b02b77707eea419c375718', class: "text-center" }, t('Lcz_Balance', { fallback: 'Balance' }), h("div", { key: '4b8c6d9d6f201e21b7c416dd29eb6d8e2d1094b2', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: '6c48ac3b029210fe2a11d821f9487fde05cb0926', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_ClickToCollect', { fallback: 'Click to collect' })))), !this.pmsDisabled && h("th", { key: 'f9d37448b0b22ada165bc1c873218f28b22103f1' }))), h("tbody", { key: '6551cf4e0d420541dce5fdc54fcc3f8f048117e2' }, this.renderBody()))), !this.hidePagination && (needsCheckOutBookings.length > 0 || outBookings.length > 0 || futureRooms.length > 0) && (h("ir-pagination", { key: 'cbd531500589df041086ebbf8eb132e5dc39b94a', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'Bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrDeparturesTable.style = irDeparturesTableCss() + tableCss();

export { IrDeparturesTable as ir_departures_table };
