'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
var calendarDates = require('./calendar-dates-BxDGM1ix.js');
var irDate = require('./ir-date-CbkOKs2C.js');
require('./moment-CdViwxPQ.js');
var dashboard_data = require('./dashboard.data-DM5RAx_A.js');
var booking = require('./booking-Bp-n-MGf.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var number = require('./number-xBpNWk3H.js');
require('./booking.dto-CMx8s-oW.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./booking.service-Cq8eFpFp.js');
require('./axios-EresIryl.js');
require('./IBooking-hDE_y33g.js');
require('./types-BVJQZ50e.js');
require('./utils-DC_1UV-i.js');
require('./commonSchemas-D4iFLV5-.js');
require('./index-AvecRkKr.js');
require('./index-DRI57dj6.js');
require('./locale.controller-BhXPN9ym.js');
require('./types-B4nFkhmU.js');
require('./arrivals.store-B5jf731m.js');
require('./room-movement-time-CCE_KSaI.js');
require('./departures.store-B5yC9RZO.js');
require('./functions-CaNAUyCw.js');
require('./type-DxODN41W.js');

const irDashboardArrivalsCss = () => `.sc-ir-dashboard-arrivals-h{display:flex;flex-direction:column}ir-arrivals-table.sc-ir-dashboard-arrivals{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size, 60vh);inline-size:100%;max-inline-size:none;border:0}`;

const IrDashboardArrivals = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = 'en';
    countries;
    /** Property without front desk: every arriving room in one list, no check-in actions. */
    pmsDisabled = false;
    roomGuestState = null;
    handleCheckInRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.roomGuestState = event.detail;
    }
    render() {
        return (index.h(index.Host, { key: '2cbf59326ce32e0d4311aff9ce09de9b594813e2' }, index.h("ir-arrivals-table", { key: '4d11c8f650af646803ffdc46d89f77f95183dac5', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckInRoom: event => this.handleCheckInRoom(event) }), index.h("ir-room-guests", { key: '0466c47dac97964736a5f681f0a9a0c8c0ac0d80', open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) })));
    }
};
IrDashboardArrivals.style = irDashboardArrivalsCss();

const tableCss = () => `.sc-ir-dashboard-bookings-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-dashboard-bookings-table{overflow-x:auto}.table--container.sc-ir-dashboard-bookings-table,.data-table.sc-ir-dashboard-bookings-table{height:100%}.ir-table-row.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-dashboard-bookings-table tbody.sc-ir-dashboard-bookings-table tr.sc-ir-dashboard-bookings-table:last-child>td.sc-ir-dashboard-bookings-table{border-bottom:0 !important}.cell--align-start.sc-ir-dashboard-bookings-table{text-align:start !important}.cell--align-center.sc-ir-dashboard-bookings-table{text-align:center !important}.cell--align-end.sc-ir-dashboard-bookings-table{text-align:end !important}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-dashboard-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-dashboard-bookings-table,.ir-table-row.sc-ir-dashboard-bookings-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-dashboard-bookings-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sortable.sc-ir-dashboard-bookings-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sortable.sc-ir-dashboard-bookings-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sortable.sc-ir-dashboard-bookings-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-dashboard-bookings-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-dashboard-bookings-table svg.sc-ir-dashboard-bookings-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-dashboard-bookings-table:hover td.sc-ir-dashboard-bookings-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-dashboard-bookings-table:hover td.sc-ir-dashboard-bookings-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-dashboard-bookings-table:active td.sc-ir-dashboard-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-dashboard-bookings-table:hover td.sc-ir-dashboard-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-dashboard-bookings-table:active td.sc-ir-dashboard-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-dashboard-bookings-table .empty-row.sc-ir-dashboard-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-dashboard-bookings-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-dashboard-bookings-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const irDashboardBookingsTableCss = () => `.sc-ir-dashboard-bookings-table-h{display:flex;flex-direction:column;min-block-size:var(--dashboard-table-min-block-size, 60vh);background-color:var(--wa-color-surface-default);overflow:hidden}.sc-ir-dashboard-bookings-table-h .table--container.sc-ir-dashboard-bookings-table{flex:0 1 auto;block-size:auto;min-block-size:0}.sc-ir-dashboard-bookings-table-h .data-table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table{position:sticky;inset-block-start:0;z-index:3;border-block-end-color:transparent !important;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-border-normal)}.data-table.sc-ir-dashboard-bookings-table{inline-size:100%;margin:0}.data-table.sc-ir-dashboard-bookings-table p.sc-ir-dashboard-bookings-table{margin:0}.units-cell.sc-ir-dashboard-bookings-table{display:flex;flex-direction:column;gap:var(--wa-space-2xs)}.data-table.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table,.data-table.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{vertical-align:middle;white-space:nowrap}@media (max-width: 768px){.sc-ir-dashboard-bookings-table-h{--ir-cell-padding:var(--wa-space-2xs) var(--wa-space-xs);font-size:var(--wa-font-size-s)}}`;

const IrDashboardBookingsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    bookings = [];
    /** In-house drops the Balance and Status columns that Bookings and Cancellations end with. */
    variant = 'inHouse';
    emptyMessage;
    /** The dashboard's selected day: balance payments (e.g. a cancellation's charge or refund) are recorded on it rather than on today. */
    date;
    isSameGuest(booking, room) {
        const normalize = (g) => `${g?.first_name ?? ''}${g?.last_name ?? ''}`.replace(/\s+/g, '').toLowerCase();
        return !room?.guest || normalize(booking.guest) === normalize(room.guest);
    }
    /** In-house rows end at Dates; Bookings and Cancellations add Balance, then Status. */
    get hasBalanceAndStatus() {
        return this.variant !== 'inHouse';
    }
    /** The booking's stay, or the span of its rooms' stays when the booking omits it. */
    stayOf(booking) {
        const rooms = booking.rooms ?? [];
        const from = booking.from_date ?? rooms.map(r => r.from_date).sort()[0];
        const to = booking.to_date ??
            rooms
                .map(r => r.to_date)
                .sort()
                .at(-1);
        return { from, to };
    }
    renderBookingRow(booking) {
        const { from, to } = this.stayOf(booking);
        return (index.h("tr", { class: "ir-table-row", key: booking.booking_nbr }, index.h("td", null, index.h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-cell", { guest: booking.guest, identifier: booking.booking_nbr })), index.h("td", null, index.h("div", { class: "units-cell" }, (booking.rooms ?? []).map(room => (index.h("ir-unit-cell", { key: room.identifier, room: room }))))), index.h("td", null, index.h("ir-dates-cell", { checkIn: from, checkOut: to })), this.renderTrailingCells(booking)));
    }
    renderTrailingCells(booking) {
        if (!this.hasBalanceAndStatus) {
            return null;
        }
        return [
            index.h("td", null, index.h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status?.code, currencySymbol: booking.currency?.symbol, financial: booking.financial, paymentDate: this.date })),
            index.h("td", null, index.h("ir-status-activity-cell", { status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })),
        ];
    }
    renderRoomRow(booking, room, index$1) {
        return (index.h("tr", { class: "ir-table-row", key: `${booking.booking_nbr}-${room.identifier ?? index$1}` }, index.h("td", null, index.h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-cell", { guest: booking.guest, identifier: room.identifier }), !this.isSameGuest(booking, room) && index.h("ir-guest-name-cell", { name: room.guest })), index.h("td", null, index.h("ir-unit-cell", { room: room })), index.h("td", null, index.h("ir-dates-cell", { checkIn: room.from_date, checkOut: room.to_date })), this.renderTrailingCells(booking)));
    }
    render() {
        const bookings = this.bookings ?? [];
        const rows = this.variant === 'inHouse'
            ? bookings.flatMap(booking => (booking.rooms ?? []).map((room, index) => this.renderRoomRow(booking, room, index)))
            : bookings.map(booking => this.renderBookingRow(booking));
        const columnCount = this.hasBalanceAndStatus ? 6 : 4;
        return (index.h(index.Host, { key: 'b22f27a39d88fc74a6e480feb40231d5cc0aab0d' }, index.h("div", { key: '78dc5525a074e15530dca8ede9b1485e50961d98', class: "table--container" }, index.h("table", { key: '81b7e9e7e444ba62d885a9c8cc39bfa72947c018', class: "table data-table" }, index.h("thead", { key: '3e92492734047793e05430596b2d3c909235ba22' }, index.h("tr", { key: '88ffbcb8381523df0e1dbb0e4f3ada3d34e6fa36' }, index.h("th", { key: '8e1db1437d14630cc45f29034cdc93cb97bb4c97' }, index.h("bdi", { key: 'd218588ba635322f1368d0f47557e0598993e1d3' }, t.t('Lcz_BookingHash', { fallback: 'Booking#' }))), index.h("th", { key: '906aea9fb31654ba2b82b058f63ea82a998951c9' }, index.h("p", { key: '33a04db190f156d7b03b0d6873f4acafe476629e' }, index.h("bdi", { key: '2cd01de111976cf2f62bf59900fd98d7a1915fe8' }, t.t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), index.h("p", { key: 'accde2efba776124d312333e5894208957fe436e' }, t.t('Lcz_GuestName', { fallback: 'Guest name' }))), index.h("th", { key: '43d7b20c188f31df083e277d9626522adac01e4a' }, t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", { key: '3bc65ae46d7740eb205a6843af9077886d67913f' }, t.t('Lcz_Dates', { fallback: 'Dates' })), this.hasBalanceAndStatus && index.h("th", { key: '45e6ac340c3fecec067bec9fd398714447fcd4d2' }, t.t('Lcz_Balance', { fallback: 'Balance' })), this.hasBalanceAndStatus && index.h("th", { key: '8d09209c4663775aa1c0d661c3988db697ea6836' }, t.t('Lcz_Status', { fallback: 'Status' })))), index.h("tbody", { key: '1f5f37ac784ecbc150c500e4f339f3b39e60a2ac' }, rows.length ? (rows) : (index.h("tr", null, index.h("td", { colSpan: columnCount, class: "empty-row" }, index.h("ir-empty-state", { message: this.emptyMessage })))))))));
    }
};
IrDashboardBookingsTable.style = tableCss() + irDashboardBookingsTableCss();

const irDashboardDateNavigatorCss = () => `.sc-ir-dashboard-date-navigator-h{display:inline-block}.date-navigator__trigger.sc-ir-dashboard-date-navigator{display:inline-flex;align-items:center;gap:var(--wa-space-s);min-block-size:3rem;padding:0 var(--wa-space-l);border:0;border-radius:var(--wa-border-radius-pill);background-color:var(--wa-color-surface-default);color:var(--wa-color-text-normal);font:inherit;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-semibold);cursor:pointer;transition:box-shadow 150ms ease,     transform 160ms cubic-bezier(0.23, 1, 0.32, 1)}.date-navigator__trigger.sc-ir-dashboard-date-navigator:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.date-navigator__trigger.sc-ir-dashboard-date-navigator:active{transform:scale(0.98)}@media (hover: hover) and (pointer: fine){.date-navigator__trigger.sc-ir-dashboard-date-navigator:hover{box-shadow:inset 0 0 0 1px var(--wa-color-brand-border-normal)}}.date-navigator__icon.sc-ir-dashboard-date-navigator{color:var(--wa-color-brand-on-quiet);font-size:1.125rem}.date-navigator__date.sc-ir-dashboard-date-navigator{flex:1 1 auto;min-inline-size:13.5em;text-align:start;white-space:nowrap;font-variant-numeric:tabular-nums}.date-navigator__chevron.sc-ir-dashboard-date-navigator{margin-inline-start:var(--wa-space-xs);color:var(--wa-color-text-quiet);font-size:0.75rem;transition:transform 200ms var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1))}.date-navigator[open].sc-ir-dashboard-date-navigator .date-navigator__chevron.sc-ir-dashboard-date-navigator{transform:rotate(180deg)}.date-navigator__today.sc-ir-dashboard-date-navigator{color:var(--wa-color-brand-on-quiet);font-size:var(--wa-font-size-xs);font-weight:var(--wa-font-weight-semibold)}@media (prefers-reduced-motion: reduce){.date-navigator__trigger.sc-ir-dashboard-date-navigator{transition:none}.date-navigator__trigger.sc-ir-dashboard-date-navigator:active{transform:none}.date-navigator__chevron.sc-ir-dashboard-date-navigator{transition:none}}@media (max-width: 575px){.sc-ir-dashboard-date-navigator-h{display:block;inline-size:100%}.date-navigator.sc-ir-dashboard-date-navigator{display:block}.date-navigator__trigger.sc-ir-dashboard-date-navigator{inline-size:100%}.date-navigator__date.sc-ir-dashboard-date-navigator{min-inline-size:0}}`;

const IrDashboardDateNavigator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChange = index.createEvent(this, "dateChange");
    }
    /** Selected day (`YYYY-MM-DD`). */
    date;
    /** Emitted with the new day when the user picks another day. */
    dateChange;
    handleSelect(e) {
        e.stopPropagation();
        const value = e.detail.item.value;
        if (value && value !== this.date) {
            this.dateChange.emit(value);
        }
    }
    render() {
        const today = calendarDates.todayISO();
        const days = Array.from({ length: dashboard_data.MAX_DAY_OFFSET + 1 }, (_, index) => calendarDates.addDaysISO(today, index));
        // Locale- and calendar-aware (Gregorian or Hijri), like every other displayed date.
        const label = (day) => irDate.formatDate(day, 'dddd, D MMMM');
        return (index.h(index.Host, { key: 'fff8a53b47d2ebbfce696b5d8e2578fc7246c240' }, index.h("wa-dropdown", { key: '694491afe945128001f954b824c2457cb6e56190', class: "date-navigator", placement: "bottom-end", "onwa-select": e => this.handleSelect(e) }, index.h("button", { key: '2ff9c065aa54e48c3dd6cc1cf238845eae0f4210', type: "button", slot: "trigger", class: "date-navigator__trigger", "aria-label": t.t('Lcz_SelectDate', { fallback: 'Select date' }) }, index.h("wa-icon", { key: '5259ac89991ceedab2b9a8fa0778fc914985d80e', class: "date-navigator__icon", name: "calendar-days", "aria-hidden": "true" }), index.h("time", { key: '0c86f9ea62ee2cc77ff8049707d1b8b2ae8cda73', class: "date-navigator__date", dateTime: this.date }, label(this.date)), index.h("wa-icon", { key: 'e6683ea4196abfa249e6c07278c08ae07e2b5043', class: "date-navigator__chevron", name: "chevron-down", "aria-hidden": "true" })), days.map(day => (index.h("wa-dropdown-item", { key: day, value: day, type: "checkbox", checked: day === this.date }, label(day), day === today && (index.h("span", { slot: "details", class: "date-navigator__today" }, t.t('Lcz_Today', { fallback: 'Today' })))))))));
    }
};
IrDashboardDateNavigator.style = irDashboardDateNavigatorCss();

const irDashboardDeparturesCss = () => `.sc-ir-dashboard-departures-h{display:flex;flex-direction:column}ir-departures-table.sc-ir-dashboard-departures{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size, 60vh);inline-size:100%;max-inline-size:none;border:0}`;

const IrDashboardDepartures = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkoutRedirect = index.createEvent(this, "checkoutRedirect");
    }
    propertyId;
    date;
    /** Property without front desk: every departing room in one list, no check-out actions. */
    pmsDisabled = false;
    checkoutState = null;
    invoiceState = null;
    /** Early check-out that must be completed from the booking-details drawer. */
    checkoutRedirect;
    reload() {
        return dashboard_data.loadDepartures(this.propertyId, this.date);
    }
    handleCheckoutRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const { booking: booking$1, identifier } = event.detail;
        const room = booking$1?.rooms?.find(r => r.identifier === identifier);
        if (booking.isEarlyCheckout(room)) {
            this.checkoutRedirect.emit({ bookingNumber: Number(booking$1.booking_nbr), identifier });
            return;
        }
        this.checkoutState = event.detail;
    }
    async handleCheckoutDialogClosed(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const state = { ...this.checkoutState };
        this.checkoutState = null;
        switch (event.detail.reason) {
            case 'checkout':
                await this.reload();
                break;
            case 'openInvoice':
                this.invoiceState = state;
                await this.reload();
                break;
        }
    }
    handleInvoiceClose(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.invoiceState = null;
    }
    render() {
        return (index.h(index.Host, { key: 'cc414b8cdb88a82ea2b699ed152a684c0882d4d9' }, index.h("ir-departures-table", { key: 'aca88804bbd694f74cc25146e3fd3b79ab1c4b89', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckoutRoom: event => this.handleCheckoutRoom(event) }), index.h("ir-checkout-dialog", { key: '011a6abb4a0c9d43e90c32faa1bfaaa129e8471c', booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), index.h("ir-invoice", { key: 'f0ee1a6acd8fb45795f83a20a14bb7a8a97540c7', booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null, onInvoiceClose: event => this.handleInvoiceClose(event) })));
    }
};
IrDashboardDepartures.style = irDashboardDeparturesCss();

const irDashboardStatsCss = () => `.sc-ir-dashboard-stats-h{display:flex;flex-direction:column;gap:var(--wa-space-m)}.stats__card.sc-ir-dashboard-stats{--spacing:var(--wa-space-l);border:0;border-radius:var(--wa-border-radius-l);background:var(--wa-color-surface-default)}.stats__card.sc-ir-dashboard-stats::part(body),.stats__card.sc-ir-dashboard-stats [part~="body"]{display:flex;flex-direction:column;gap:var(--wa-space-m)}.stats__card--occupancy.sc-ir-dashboard-stats{flex:1 1 auto}.stats__card--performance.sc-ir-dashboard-stats{flex:none}.stats__title.sc-ir-dashboard-stats{margin:0;font-family:var(--wa-font-family-heading);font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-semibold);line-height:var(--wa-line-height-condensed);text-transform:capitalize;color:var(--wa-color-text-normal);overflow-wrap:anywhere}.stats__occupancy.sc-ir-dashboard-stats,.stats__units.sc-ir-dashboard-stats,.stats__unit.sc-ir-dashboard-stats,.stats__kpis.sc-ir-dashboard-stats{transition:opacity 150ms ease}.stats--loading.sc-ir-dashboard-stats{opacity:0.55}.stats__icon.sc-ir-dashboard-stats{display:inline-flex;flex:none;align-items:center;justify-content:center;inline-size:2.75rem;block-size:2.75rem;border-radius:var(--wa-border-radius-m);background-color:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet);font-size:1.125rem}.stats__icon--round.sc-ir-dashboard-stats{inline-size:3.5rem;block-size:3.5rem;border-radius:var(--wa-border-radius-circle);font-size:1.375rem}.stats__occupancy.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:var(--wa-space-s);padding-block-end:var(--wa-space-xs)}.stats__occupancy-figure.sc-ir-dashboard-stats{display:flex;align-items:center;gap:var(--wa-space-m);min-inline-size:0}.stats__figure.sc-ir-dashboard-stats{container-type:inline-size;display:flex;flex:1 1 0;flex-direction:column;gap:0.125rem;min-inline-size:0}.stats__figure--virtual.sc-ir-dashboard-stats{padding-inline-start:var(--wa-space-m);border-inline-start:1px solid var(--wa-color-neutral-border-quiet);--stats-figure-color:var(--wa-color-text-quiet)}.stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-3xl);unicode-bidi:isolate;margin-block-end:0.25rem;font-size:clamp(var(--wa-font-size-m), calc(100cqi / (var(--figure-chars, 5) * 0.62)), var(--figure-max-size));font-weight:var(--wa-font-weight-bold);line-height:1;letter-spacing:-0.02em;font-variant-numeric:tabular-nums;color:var(--stats-figure-color, var(--wa-color-text-normal));overflow-wrap:anywhere}.stats__figure--virtual.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-2xl)}.stats__occupancy--split.sc-ir-dashboard-stats .stats__icon--round.sc-ir-dashboard-stats{inline-size:2.75rem;block-size:2.75rem;font-size:1.125rem}.stats__occupancy--split.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-2xl)}.stats__occupancy--split.sc-ir-dashboard-stats .stats__figure--virtual.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-xl)}.stats__figure-label.sc-ir-dashboard-stats{font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);line-height:var(--wa-line-height-condensed);color:var(--stats-figure-color, var(--wa-color-text-normal));overflow-wrap:anywhere}.stats__booked.sc-ir-dashboard-stats{font-size:var(--wa-font-size-xs);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);overflow-wrap:anywhere}.stats__bar.sc-ir-dashboard-stats{display:flex;gap:3px;margin-block-start:var(--wa-space-xs)}.stats__segment.sc-ir-dashboard-stats{position:relative;flex:1 1 0;min-inline-size:2.5rem;block-size:0.5rem;overflow:hidden;border-radius:var(--wa-border-radius-pill);background-color:var(--wa-color-neutral-fill-quiet);cursor:default;outline-offset:2px}.stats__segment.sc-ir-dashboard-stats:focus-visible{outline:var(--wa-focus-ring)}.stats__segment-fill.sc-ir-dashboard-stats{position:absolute;inset-block:0;inset-inline-start:0;border-radius:inherit;background-color:var(--wa-color-success-fill-loud);transition:inline-size 280ms cubic-bezier(0.77, 0, 0.175, 1)}.stats__segment--virtual.sc-ir-dashboard-stats .stats__segment-fill.sc-ir-dashboard-stats{background-color:var(--wa-color-neutral-fill-loud)}.stats__tooltip.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:0.125rem;font-variant-numeric:tabular-nums}.stats__units.sc-ir-dashboard-stats{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:var(--wa-space-m) var(--wa-space-l);margin:0;padding:0;list-style:none}@media (min-width: 992px){.stats__units--stacked.sc-ir-dashboard-stats{grid-template-columns:minmax(0, 1fr)}}.stats__unit.sc-ir-dashboard-stats{container-type:inline-size;display:grid;grid-template-columns:auto minmax(0, 1fr);align-items:center;column-gap:var(--wa-space-s);row-gap:0.125rem}.stats__dot.sc-ir-dashboard-stats{inline-size:0.875rem;block-size:0.875rem;border-radius:var(--wa-border-radius-circle);background-color:var(--stats-dot-color, var(--wa-color-brand-fill-loud))}.stats__dot--blocked.sc-ir-dashboard-stats{--stats-dot-color:var(--wa-color-danger-fill-loud)}.stats__unit-value.sc-ir-dashboard-stats{--unit-max-size:var(--wa-font-size-xl);font-size:clamp(var(--wa-font-size-2xs), calc((100cqi - 0.875rem - var(--wa-space-s)) / (var(--unit-chars, 2) * 0.62)), var(--unit-max-size));font-weight:var(--wa-font-weight-bold);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal);overflow-wrap:anywhere}.stats__unit-label.sc-ir-dashboard-stats{grid-column:2;font-size:var(--wa-font-size-s);line-height:var(--wa-line-height-condensed);color:var(--wa-color-text-quiet);overflow-wrap:anywhere}.stats__unit-label.sc-ir-dashboard-stats::first-letter{text-transform:uppercase}.stats__kpis.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:var(--wa-space-m);margin:0;padding:0;list-style:none}.stats__kpi.sc-ir-dashboard-stats{display:flex;align-items:center;gap:var(--wa-space-m)}.stats__kpi-text.sc-ir-dashboard-stats{container-type:inline-size;display:flex;flex:1 1 auto;flex-direction:column;min-inline-size:0}.stats__kpi-value.sc-ir-dashboard-stats{--kpi-max-size:var(--wa-font-size-xl);unicode-bidi:isolate;font-size:clamp(var(--wa-font-size-s), calc(100cqi / (var(--kpi-chars, 10) * 0.62)), var(--kpi-max-size));font-weight:var(--wa-font-weight-bold);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal);overflow-wrap:anywhere}.stats__kpi-label.sc-ir-dashboard-stats{overflow:hidden;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet);text-overflow:ellipsis;white-space:nowrap}@media (max-width: 991px){.sc-ir-dashboard-stats-h{gap:var(--wa-space-s)}.stats__card.sc-ir-dashboard-stats{--spacing:var(--wa-space-m)}.stats__card.sc-ir-dashboard-stats::part(body){gap:var(--wa-space-s)}.stats__units.sc-ir-dashboard-stats,.stats__kpis.sc-ir-dashboard-stats{row-gap:var(--wa-space-s)}.stats__kpi.sc-ir-dashboard-stats{gap:var(--wa-space-s)}.stats__kpi.sc-ir-dashboard-stats .stats__icon.sc-ir-dashboard-stats{inline-size:2.25rem;block-size:2.25rem;font-size:1rem}}@media (min-width: 576px) and (max-width: 991px){.sc-ir-dashboard-stats-h{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr))}}.stats__skeleton.sc-ir-dashboard-stats{inline-size:70%;block-size:1.125rem;min-block-size:0}.stats__skeleton.sc-ir-dashboard-stats::part(indicator),.stats__skeleton.sc-ir-dashboard-stats [part~="indicator"]{border-radius:var(--wa-border-radius-s)}.stats__skeleton--occupancy.sc-ir-dashboard-stats{inline-size:11rem;block-size:3.5rem}.stats__skeleton--bar.sc-ir-dashboard-stats{inline-size:100%;block-size:0.5rem;margin-block-start:var(--wa-space-xs)}.stats__skeleton--unit.sc-ir-dashboard-stats{grid-column:1 / -1;block-size:2.5rem}.stats__skeleton--kpi.sc-ir-dashboard-stats{inline-size:6rem;font-size:var(--wa-font-size-xl);line-height:var(--wa-line-height-condensed);block-size:1lh}[density='compact'].sc-ir-dashboard-stats-h,[density='tight'].sc-ir-dashboard-stats-h{gap:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats{--spacing:var(--wa-space-m)}[density='compact'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats::part(body),[density='compact'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats [part~="body"],[density='tight'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats::part(body),[density='tight'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats [part~="body"]{gap:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-stats-h .stats__units.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__units.sc-ir-dashboard-stats,[density='compact'].sc-ir-dashboard-stats-h .stats__kpis.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__kpis.sc-ir-dashboard-stats{row-gap:var(--wa-space-s)}[density='tight'].sc-ir-dashboard-stats-h .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-2xl)}[density='tight'].sc-ir-dashboard-stats-h .stats__figure--virtual.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__occupancy--split.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-xl)}[density='tight'].sc-ir-dashboard-stats-h .stats__occupancy--split.sc-ir-dashboard-stats .stats__figure--virtual.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-l)}[density='tight'].sc-ir-dashboard-stats-h .stats__icon--round.sc-ir-dashboard-stats{inline-size:2.75rem;block-size:2.75rem}[density='tight'].sc-ir-dashboard-stats-h .stats__unit-value.sc-ir-dashboard-stats{--unit-max-size:var(--wa-font-size-l)}[density='tight'].sc-ir-dashboard-stats-h .stats__kpi-value.sc-ir-dashboard-stats{--kpi-max-size:var(--wa-font-size-l)}@media (prefers-reduced-motion: reduce){.stats__segment-fill.sc-ir-dashboard-stats{transition:none}.stats__skeleton.sc-ir-dashboard-stats::part(indicator){animation:none}}`;

/**
 * Calendar legend entry (igl-legend) each unit's dot copies, with the default colour as fallback.
 * Available units keep the brand colour and blocked ones the danger red.
 */
const UNIT_LEGEND = {
    'booked': { id: '2', fallback: '#45b16d' },
    'pending': { id: '3', fallback: '#FF9149' },
    'out-of-service': { id: '6', fallback: '#f34752' },
};
/** Resolved at render, not at import, when the locale tables are still empty. */
const occupancyLabel = (kind) => (kind === 'virtual' ? t.t('Lcz_FakeUnits', { fallback: 'Fake units' }) : t.t('Lcz_RealUnits', { fallback: 'Real units' }));
/** "12 of 40 booked" */
const bookedOfTotal = (figure) => t.t('Lcz_BookedOfTotal', { fallback: '%1 of %2 booked', params: [number.formatCount(figure.booked), number.formatCount(figure.total)] });
/** Gives each instance's bar segments their own ids, which the tooltips anchor to. */
let barIds = 0;
const clampPercent = (percent) => Math.min(Math.max(percent ?? 0, 0), 100);
/** Rounding must never claim a full house: 99.96% reads 99.9%, not 100%. */
const shownPercent = (percent) => {
    const clamped = clampPercent(percent);
    return clamped < 100 ? Math.min(clamped, 99.9) : 100;
};
const IrDashboardStats = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Selected day (`YYYY-MM-DD`); titles the occupancy card. */
    date;
    /** Whether the property uses the front desk (PMS); without it the rail shows the reduced set of figures. */
    isPms = true;
    /** Occupancy and revenue figures; `null` shows their skeletons. */
    performance;
    /** Calendar unit breakdown; `null` shows its skeleton. */
    units;
    /** Units in pending bookings; `null` shows its skeleton. */
    pendingUnits;
    currencySymbol;
    /** Dims the occupancy, booked-units and revenue figures while a newer day's are in flight. */
    performanceLoading = false;
    /** Dims the calendar unit figures while a newer day's are in flight. */
    unitsLoading = false;
    /** Dims the pending-units figure while a newer day's is in flight. */
    pendingLoading = false;
    /** How tightly the cards are drawn; ir-dashboard steps it down when the desktop rail is short. */
    density = 'regular';
    barId = `stats-occupancy-${++barIds}`;
    /** The property's colour for a unit's legend entry, so the dot matches the calendar. */
    legendColor(tone) {
        const legend = UNIT_LEGEND[tone];
        if (!legend) {
            return undefined;
        }
        return calendarData.calendar_data.property?.calendar_legends?.find(l => l.id?.toString() === legend.id)?.color ?? legend.fallback;
    }
    /** "Today's occupancy" on today, otherwise the day itself ("Saturday, 17 Oct."); the card title is capitalized in CSS. */
    get title() {
        if (!this.date || this.date === calendarDates.todayISO()) {
            return t.t('Lcz_TodaysOccupancy', { fallback: "Today's occupancy" });
        }
        return `${irDate.formatDate(this.date, 'dddd, D MMM')}.`;
    }
    renderUnit(value, label, tone, { loaded, refreshing }) {
        if (!loaded) {
            return (index.h("li", { class: "stats__unit", "aria-hidden": "true" }, index.h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--unit" })));
        }
        const color = this.legendColor(tone);
        // Every unit stays visible; a count with nothing behind it reads as 0.
        const count = number.formatCount(value ?? 0);
        return (index.h("li", { class: { 'stats__unit': true, 'stats--loading': refreshing } }, index.h("span", { class: `stats__dot stats__dot--${tone}`, style: color ? { '--stats-dot-color': color } : undefined, "aria-hidden": "true" }), index.h("span", { class: "stats__unit-value", style: { '--unit-chars': String(count.length) } }, count), index.h("span", { class: "stats__unit-label" }, label)));
    }
    /** One occupancy figure: the percentage over its label and the units booked. */
    renderOccupancyFigure(kind, figure) {
        const percent = number.formatPercent(shownPercent(figure.percent), { maximumFractionDigits: 1 });
        return (index.h("div", { class: `stats__figure stats__figure--${kind}` }, index.h("span", { class: "stats__occupancy-value", style: { '--figure-chars': String(percent.length) } }, percent), index.h("span", { class: "stats__figure-label" }, occupancyLabel(kind)), index.h("span", { class: "stats__booked" }, bookedOfTotal(figure))));
    }
    /**
     * One stretch of the bar: as wide as its share of all units (never too narrow to hover), filled to its occupancy,
     * with a tooltip spelling out the figure.
     */
    renderBarSegment(kind, figure) {
        const id = `${this.barId}-${kind}`;
        const percent = number.formatPercent(shownPercent(figure.percent), { maximumFractionDigits: 1 });
        return [
            index.h("div", { id: id, class: `stats__segment stats__segment--${kind}`, style: { flexGrow: String(Math.max(figure.total, 1)) }, role: "progressbar", tabindex: "0", "aria-label": occupancyLabel(kind), "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(clampPercent(figure.percent)), "aria-valuetext": `${percent}, ${bookedOfTotal(figure)}` }, index.h("span", { class: "stats__segment-fill", style: { inlineSize: `${clampPercent(figure.percent)}%` } })),
            index.h("wa-tooltip", { for: id }, index.h("span", { class: "stats__tooltip" }, index.h("strong", null, `${occupancyLabel(kind)}: ${percent}`), index.h("span", null, bookedOfTotal(figure)))),
        ];
    }
    /** Occupancy of real units and, when the property has fake units, of those; then the bar (PMS only). */
    renderOccupancy() {
        const occupancy = this.units?.occupancy;
        if (!occupancy) {
            return (index.h("div", { class: "stats__occupancy", "aria-hidden": "true" }, index.h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--occupancy" }), index.h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--bar" })));
        }
        const { real } = occupancy;
        // Virtual room types without a single active unit aren't mentioned at all.
        const virtual = occupancy.virtual?.total ? occupancy.virtual : undefined;
        return (index.h("div", { class: { 'stats__occupancy': true, 'stats__occupancy--split': !!virtual, 'stats--loading': this.unitsLoading } }, index.h("div", { class: "stats__occupancy-figure" }, index.h("span", { class: "stats__icon stats__icon--round", "aria-hidden": "true" }, index.h("wa-icon", { name: "bed" })), this.renderOccupancyFigure('real', real), virtual && this.renderOccupancyFigure('virtual', virtual)), index.h("div", { class: "stats__bar", role: "group", "aria-label": t.t('Lcz_Occupancy', { fallback: 'Occupancy' }) }, this.renderBarSegment('real', real), virtual && this.renderBarSegment('virtual', virtual))));
    }
    renderUnits() {
        const { units, performance, pendingUnits } = this;
        const calendar = { loaded: !!units, refreshing: this.unitsLoading };
        const stats = { loaded: !!performance, refreshing: this.performanceLoading };
        const pending = { loaded: pendingUnits != null, refreshing: this.pendingLoading };
        return (index.h("ul", { class: { 'stats__units': true, 'stats__units--stacked': !this.isPms }, "aria-label": t.t('Lcz_Units', { fallback: 'Units' }), "aria-busy": (this.isPms && !units) || !performance ? 'true' : null }, this.isPms && this.renderUnit(units?.available, t.t('Lcz_Available', { fallback: 'Available' }), 'available', calendar), this.renderUnit(performance?.bookedUnits, t.t('Lcz_Booked', { fallback: 'Booked' }), 'booked', stats), this.renderUnit(pendingUnits, t.t('Lcz_Pending', { fallback: 'Pending' }), 'pending', pending), this.isPms && this.renderUnit(units?.outOfService, t.t('Lcz_OOS', { fallback: 'OOS' }), 'out-of-service', calendar), this.isPms && this.renderUnit(units?.blocked, t.t('Lcz_Blocked', { fallback: 'Blocked' }), 'blocked', calendar)));
    }
    /** One revenue figure: icon tile, amount, label. An `undefined` value shows a skeleton in place of the amount. */
    renderKpi(icon, label, value) {
        const amount = value === undefined ? '' : number.formatAmount(this.currencySymbol, value);
        return (index.h("li", { class: "stats__kpi" }, index.h("span", { class: "stats__icon", "aria-hidden": "true" }, index.h("wa-icon", { name: icon })), index.h("span", { class: "stats__kpi-text" }, value === undefined ? (index.h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--kpi", "aria-hidden": "true" })) : (
        // The CSS sizes the font from the amount's length so it always shows in full, never truncated.
        index.h("span", { class: "stats__kpi-value", style: { '--kpi-chars': String(amount.length) } }, amount)), index.h("span", { class: "stats__kpi-label" }, label))));
    }
    renderPerformance() {
        const performance = this.performance;
        return (index.h("wa-card", { class: "stats__card stats__card--performance", appearance: "plain" }, index.h("h2", { class: "stats__title" }, t.t('Lcz_Performance', { fallback: 'Performance' })), index.h("ul", { class: { 'stats__kpis': true, 'stats--loading': !!performance && this.performanceLoading }, "aria-label": t.t('Lcz_Revenue', { fallback: 'Revenue' }), "aria-busy": !performance ? 'true' : null }, this.renderKpi('coins', t.t('Lcz_RoomRevenue', { fallback: 'Room Revenue' }), performance?.roomRevenue), this.isPms && this.renderKpi('chart-simple', t.t('Lcz_Adr', { fallback: 'ADR' }), performance?.adr), this.isPms && this.renderKpi('arrow-trend-up', t.t('Lcz_RevPar', { fallback: 'RevPAR' }), performance ? dashboard_data.computeRevPar(performance.adr, performance.occupancy) : undefined))));
    }
    render() {
        return (index.h(index.Host, { key: 'bb7670df9d8ef9e4c1a2af9fd186d6598a9fe781' }, index.h("wa-card", { key: 'b78fa1a707750188f9e6d0b0af36e4dd85addc39', class: "stats__card stats__card--occupancy", appearance: "plain" }, index.h("h2", { key: '29206c1760efef0cc47e9551ffa1b6e8981fa8c0', class: "stats__title" }, this.title), this.isPms && this.renderOccupancy(), this.renderUnits()), this.renderPerformance()));
    }
};
IrDashboardStats.style = irDashboardStatsCss();

exports.ir_dashboard_arrivals = IrDashboardArrivals;
exports.ir_dashboard_bookings_table = IrDashboardBookingsTable;
exports.ir_dashboard_date_navigator = IrDashboardDateNavigator;
exports.ir_dashboard_departures = IrDashboardDepartures;
exports.ir_dashboard_stats = IrDashboardStats;
