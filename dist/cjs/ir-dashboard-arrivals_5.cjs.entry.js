'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
var calendarDates = require('./calendar-dates-BxDGM1ix.js');
var irDate = require('./ir-date-CbkOKs2C.js');
require('./moment-CdViwxPQ.js');
var dashboard_helpers = require('./dashboard.helpers-CX6O0vk-.js');
var booking = require('./booking-DhSfYcY7.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var number = require('./number-xBpNWk3H.js');
require('./booking.dto-CUSvGTvD.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./booking.service-BdID4BlA.js');
require('./axios-EresIryl.js');
require('./IBooking-hDE_y33g.js');
require('./types-BVJQZ50e.js');
require('./utils-ZKsQb8eV.js');
require('./commonSchemas-D4iFLV5-.js');
require('./arrivals.store-CxYY9GbK.js');
require('./room-movement-time-CCE_KSaI.js');
require('./departures.store-Cft0Vk2T.js');
require('./functions-CaNAUyCw.js');
require('./type-Bj2x9EWc.js');

const irDashboardArrivalsCss = () => `.sc-ir-dashboard-arrivals-h{display:flex;flex-direction:column}ir-arrivals-table.sc-ir-dashboard-arrivals{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size, 60vh);border:0}`;

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
        return (index.h(index.Host, { key: '2bc90173ce385ede5cd39ba7bfb8a4ad3d077042' }, index.h("ir-arrivals-table", { key: '299428048d323b7b26a3d386fe3bf389c4a315f4', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckInRoom: event => this.handleCheckInRoom(event) }), index.h("ir-room-guests", { key: 'fab0439563feb597de8e341d185d66e6e6145ff4', open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) })));
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
            index.h("td", null, index.h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status?.code, currencySymbol: booking.currency?.symbol, financial: booking.financial })),
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
        return (index.h(index.Host, { key: '323102f8414f76419ae04445dd64862b3c231928' }, index.h("div", { key: 'bea7e11465c6e2da2eb9f0de3cb7abec60ffe283', class: "table--container" }, index.h("table", { key: 'fc742e730a353b25fc35b38e0d83365cc2ad0353', class: "table data-table" }, index.h("thead", { key: 'f271bc8012ce6c74e2677bf15bc5b9ed0b130bc3' }, index.h("tr", { key: '28e2a1923e0ef296d03e1dc45eda0f1cab18ffc4' }, index.h("th", { key: 'afd3ab72aa0fe2340e7f52f6d865b24e0018063e' }, index.h("bdi", { key: '074e702e0208ba8add10120625fcc92fbad8fef9' }, t.t('Lcz_BookingHash', { fallback: 'Booking#' }))), index.h("th", { key: 'bc25656163e9e0e739b40984a1518517ff226906' }, index.h("p", { key: '7e7c5859dffdcea1fc971bedaac3efd772ec42d2' }, index.h("bdi", { key: '2b68ea5feede5e0b1da564e0102da807ecbf3ca6' }, t.t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), index.h("p", { key: '3774db8531935763fc5928cebb7348183288d24c' }, t.t('Lcz_GuestName', { fallback: 'Guest name' }))), index.h("th", { key: '5c8098a399f9e601e416c749ccbf2e00ed930d16' }, t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", { key: '0bedf37bdaece64d18228b156839aa0cf735c314' }, t.t('Lcz_Dates', { fallback: 'Dates' })), this.hasBalanceAndStatus && index.h("th", { key: 'e976ece50576b84cfb32b822446f8d235bcc033f' }, t.t('Lcz_Balance', { fallback: 'Balance' })), this.hasBalanceAndStatus && index.h("th", { key: 'cca03c25f7d45f85b188d342a6aae462a1f0e4e7' }, t.t('Lcz_Status', { fallback: 'Status' })))), index.h("tbody", { key: 'afba9881b4cc3225686cdaf9a54efa2f20a5fb78' }, rows.length ? (rows) : (index.h("tr", null, index.h("td", { colSpan: columnCount, class: "empty-row" }, index.h("ir-empty-state", { message: this.emptyMessage })))))))));
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
        const days = Array.from({ length: dashboard_helpers.MAX_DAY_OFFSET * 2 + 1 }, (_, index) => calendarDates.addDaysISO(today, index - dashboard_helpers.MAX_DAY_OFFSET));
        // Locale- and calendar-aware (Gregorian or Hijri), like every other displayed date.
        const label = (day) => irDate.formatDate(day, 'dddd, D MMMM');
        return (index.h(index.Host, { key: '966c046c13cd7adc2c543538298346fa5826d687' }, index.h("wa-dropdown", { key: '256c8e46d6c4aa9939b150b42714d915523f66d4', class: "date-navigator", placement: "bottom-end", "onwa-select": e => this.handleSelect(e) }, index.h("button", { key: 'dd9d7e2bfdf0a8c9c4b6063a54b07f3ac37be36f', type: "button", slot: "trigger", class: "date-navigator__trigger", "aria-label": t.t('Lcz_SelectDate', { fallback: 'Select date' }) }, index.h("wa-icon", { key: '403fb0579eadaa6c230658fd3b4a0d3b6fe130e0', class: "date-navigator__icon", name: "calendar-days", "aria-hidden": "true" }), index.h("time", { key: '357b40eec4a8e3fb70f704b784807d49d2b0ad63', class: "date-navigator__date", dateTime: this.date }, label(this.date)), index.h("wa-icon", { key: '17408240063f9369f5376b3f5f48893202d41072', class: "date-navigator__chevron", name: "chevron-down", "aria-hidden": "true" })), days.map(day => (index.h("wa-dropdown-item", { key: day, value: day, type: "checkbox", checked: day === this.date }, label(day), day === today && (index.h("span", { slot: "details", class: "date-navigator__today" }, t.t('Lcz_Today', { fallback: 'Today' })))))))));
    }
};
IrDashboardDateNavigator.style = irDashboardDateNavigatorCss();

const irDashboardDeparturesCss = () => `.sc-ir-dashboard-departures-h{display:flex;flex-direction:column}ir-departures-table.sc-ir-dashboard-departures{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size, 60vh);border:0}`;

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
        return dashboard_helpers.loadDepartures(this.propertyId, this.date);
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
        return (index.h(index.Host, { key: '6e5fb9dee81d749c9701e00c969c8fb02e888f61' }, index.h("ir-departures-table", { key: '7dbe63be2b6ae3454ebe9f9ba42efdb63c3b9907', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckoutRoom: event => this.handleCheckoutRoom(event) }), index.h("ir-checkout-dialog", { key: 'ce287e03955cb666947545874179ef1398c9209d', booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), index.h("ir-invoice", { key: '7cc5a683352079ad63a7252bb814333dcd7798a7', booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null, onInvoiceClose: event => this.handleInvoiceClose(event) })));
    }
};
IrDashboardDepartures.style = irDashboardDeparturesCss();

const irDashboardStatsCss = () => `.sc-ir-dashboard-stats-h{display:flex;flex-direction:column;gap:var(--wa-space-m)}.stats__card.sc-ir-dashboard-stats{--spacing:var(--wa-space-l);border:0;border-radius:var(--wa-border-radius-l);background:var(--wa-color-surface-default)}.stats__card.sc-ir-dashboard-stats::part(body),.stats__card.sc-ir-dashboard-stats [part~="body"]{display:flex;flex-direction:column;gap:var(--wa-space-m)}.stats__card--occupancy.sc-ir-dashboard-stats{flex:1 1 auto}.stats__card--performance.sc-ir-dashboard-stats{flex:none}.stats__title.sc-ir-dashboard-stats{margin:0;font-family:var(--wa-font-family-heading);font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-semibold);line-height:var(--wa-line-height-condensed);text-transform:capitalize;color:var(--wa-color-text-normal)}.stats__occupancy.sc-ir-dashboard-stats,.stats__units.sc-ir-dashboard-stats,.stats__unit.sc-ir-dashboard-stats,.stats__kpis.sc-ir-dashboard-stats{transition:opacity 150ms ease}.stats--loading.sc-ir-dashboard-stats{opacity:0.55}.stats__icon.sc-ir-dashboard-stats{display:inline-flex;flex:none;align-items:center;justify-content:center;inline-size:2.75rem;block-size:2.75rem;border-radius:var(--wa-border-radius-m);background-color:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet);font-size:1.125rem}.stats__icon--round.sc-ir-dashboard-stats{inline-size:3.5rem;block-size:3.5rem;border-radius:var(--wa-border-radius-circle);font-size:1.375rem}.stats__occupancy.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:var(--wa-space-s);padding-block-end:var(--wa-space-xs)}.stats__occupancy-figure.sc-ir-dashboard-stats{display:flex;align-items:center;gap:var(--wa-space-m)}.stats__occupancy-value.sc-ir-dashboard-stats{unicode-bidi:isolate;font-size:var(--wa-font-size-3xl);font-weight:var(--wa-font-weight-bold);line-height:1;letter-spacing:-0.02em;font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal)}.stats__booked.sc-ir-dashboard-stats{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-normal)}.stats__bar.sc-ir-dashboard-stats{--track-height:0.5rem;--indicator-color:var(--wa-color-success-fill-loud);--track-color:var(--wa-color-neutral-fill-quiet);margin-block-start:var(--wa-space-xs)}.stats__bar.sc-ir-dashboard-stats::part(indicator),.stats__bar.sc-ir-dashboard-stats [part~="indicator"]{transition:width 280ms cubic-bezier(0.77, 0, 0.175, 1)}.stats__units.sc-ir-dashboard-stats{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:var(--wa-space-m) var(--wa-space-l);margin:0;padding:0;list-style:none}.stats__unit.sc-ir-dashboard-stats{display:grid;grid-template-columns:auto minmax(0, 1fr);align-items:center;column-gap:var(--wa-space-s);row-gap:0.125rem}.stats__dot.sc-ir-dashboard-stats{inline-size:0.875rem;block-size:0.875rem;border-radius:var(--wa-border-radius-circle);background-color:var(--stats-dot-color, var(--wa-color-brand-fill-loud))}.stats__dot--blocked.sc-ir-dashboard-stats{--stats-dot-color:var(--wa-color-neutral-fill-loud)}.stats__unit-value.sc-ir-dashboard-stats{font-size:var(--wa-font-size-xl);font-weight:var(--wa-font-weight-bold);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal)}.stats__unit-label.sc-ir-dashboard-stats{grid-column:2;font-size:var(--wa-font-size-s);line-height:var(--wa-line-height-condensed);color:var(--wa-color-text-quiet)}.stats__kpis.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:var(--wa-space-m);margin:0;padding:0;list-style:none}.stats__kpi.sc-ir-dashboard-stats{display:flex;align-items:center;gap:var(--wa-space-m)}.stats__kpi-text.sc-ir-dashboard-stats{display:flex;flex:1 1 auto;flex-direction:column;min-inline-size:0}.stats__kpi-value.sc-ir-dashboard-stats{direction:ltr;unicode-bidi:isolate;font-size:var(--wa-font-size-xl);font-weight:var(--wa-font-weight-bold);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.stats__kpi-value--long.sc-ir-dashboard-stats{font-size:var(--wa-font-size-l)}.stats__kpi-value--longest.sc-ir-dashboard-stats{font-size:var(--wa-font-size-m)}.stats__kpi-label.sc-ir-dashboard-stats{overflow:hidden;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet);text-overflow:ellipsis;white-space:nowrap}@media (min-width: 576px) and (max-width: 991px){.stats__kpis.sc-ir-dashboard-stats{display:grid;grid-template-columns:repeat(auto-fit, minmax(0, 1fr))}}.stats__skeleton.sc-ir-dashboard-stats{inline-size:70%;block-size:1.125rem;min-block-size:0}.stats__skeleton.sc-ir-dashboard-stats::part(indicator),.stats__skeleton.sc-ir-dashboard-stats [part~="indicator"]{border-radius:var(--wa-border-radius-s)}.stats__skeleton--occupancy.sc-ir-dashboard-stats{inline-size:11rem;block-size:3.5rem}.stats__skeleton--booked.sc-ir-dashboard-stats{inline-size:10rem}.stats__skeleton--bar.sc-ir-dashboard-stats{inline-size:100%;block-size:0.5rem;margin-block-start:var(--wa-space-xs)}.stats__skeleton--unit.sc-ir-dashboard-stats{grid-column:1 / -1;block-size:2.5rem}.stats__skeleton--kpi.sc-ir-dashboard-stats{inline-size:6rem;font-size:var(--wa-font-size-xl);line-height:var(--wa-line-height-condensed);block-size:1lh}[density='compact'].sc-ir-dashboard-stats-h,[density='tight'].sc-ir-dashboard-stats-h{gap:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats{--spacing:var(--wa-space-m)}[density='compact'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats::part(body),[density='compact'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats [part~="body"],[density='tight'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats::part(body),[density='tight'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats [part~="body"]{gap:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-stats-h .stats__units.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__units.sc-ir-dashboard-stats,[density='compact'].sc-ir-dashboard-stats-h .stats__kpis.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__kpis.sc-ir-dashboard-stats{row-gap:var(--wa-space-s)}[density='tight'].sc-ir-dashboard-stats-h .stats__occupancy-value.sc-ir-dashboard-stats{font-size:var(--wa-font-size-2xl)}[density='tight'].sc-ir-dashboard-stats-h .stats__icon--round.sc-ir-dashboard-stats{inline-size:2.75rem;block-size:2.75rem}[density='tight'].sc-ir-dashboard-stats-h .stats__unit-value.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__kpi-value.sc-ir-dashboard-stats{font-size:var(--wa-font-size-l)}@media (prefers-reduced-motion: reduce){.stats__bar.sc-ir-dashboard-stats::part(indicator){transition:none}.stats__skeleton.sc-ir-dashboard-stats::part(indicator){animation:none}}`;

/**
 * Calendar legend entry (igl-legend) each unit's dot copies, with the default colour as fallback.
 * Available units keep the brand colour and blocked ones a neutral grey.
 */
const UNIT_LEGEND = {
    'booked': { id: '2', fallback: '#45b16d' },
    'pending': { id: '3', fallback: '#FF9149' },
    'out-of-service': { id: '6', fallback: '#f34752' },
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
    /** The property's colour for a unit's legend entry, so the dot matches the calendar. */
    legendColor(tone) {
        const legend = UNIT_LEGEND[tone];
        if (!legend) {
            return undefined;
        }
        return calendarData.calendar_data.property?.calendar_legends?.find(l => l.id?.toString() === legend.id)?.color ?? legend.fallback;
    }
    /** Units the property has: the calendar's total, else the physical rooms of its room types. */
    get totalUnits() {
        if (this.units?.total != null) {
            return this.units.total;
        }
        const roomTypes = calendarData.calendar_data.property?.roomtypes;
        return roomTypes?.length ? roomTypes.reduce((total, rt) => total + (rt.physicalrooms?.length ?? 0), 0) : undefined;
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
        return (index.h("li", { class: { 'stats__unit': true, 'stats--loading': refreshing } }, index.h("span", { class: `stats__dot stats__dot--${tone}`, style: color ? { '--stats-dot-color': color } : undefined, "aria-hidden": "true" }), index.h("span", { class: "stats__unit-value" }, number.formatCount(value ?? 0)), index.h("span", { class: "stats__unit-label" }, label)));
    }
    /** Occupancy figure, units booked and the bar (PMS only). */
    renderOccupancy() {
        const performance = this.performance;
        if (!performance) {
            return (index.h("div", { class: "stats__occupancy", "aria-hidden": "true" }, index.h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--occupancy" }), index.h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--booked" }), index.h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--bar" })));
        }
        const occupancy = Math.min(Math.max(performance.occupancy, 0), 100);
        // Rounding must never claim a full house: 99.96% reads 99.9%, not 100%.
        const shownOccupancy = occupancy < 100 ? Math.min(occupancy, 99.9) : 100;
        const total = this.totalUnits;
        return (index.h("div", { class: { 'stats__occupancy': true, 'stats--loading': this.performanceLoading } }, index.h("div", { class: "stats__occupancy-figure" }, index.h("span", { class: "stats__icon stats__icon--round", "aria-hidden": "true" }, index.h("wa-icon", { name: "bed" })), index.h("span", { class: "stats__occupancy-value" }, number.formatPercent(shownOccupancy, { maximumFractionDigits: 1 }))), total !== undefined && (index.h("p", { class: "stats__booked" }, t.t('Lcz_UnitsBookedOf', { fallback: '%1 of %2 units booked', params: [number.formatCount(performance.bookedUnits ?? 0), number.formatCount(total)] }))), index.h("wa-progress-bar", { class: "stats__bar", value: occupancy, label: t.t('Lcz_Occupancy', { fallback: 'Occupancy' }) })));
    }
    renderUnits() {
        const { units, performance, pendingUnits } = this;
        const calendar = { loaded: !!units, refreshing: this.unitsLoading };
        const stats = { loaded: !!performance, refreshing: this.performanceLoading };
        const pending = { loaded: pendingUnits != null, refreshing: this.pendingLoading };
        return (index.h("ul", { class: "stats__units", "aria-label": t.t('Lcz_Units', { fallback: 'Units' }), "aria-busy": !units || !performance ? 'true' : null }, this.renderUnit(units?.available, t.t('Lcz_Available', { fallback: 'Available' }), 'available', calendar), this.renderUnit(performance?.bookedUnits, t.t('Lcz_Booked', { fallback: 'Booked' }), 'booked', stats), this.renderUnit(pendingUnits, t.t('Lcz_Pending', { fallback: 'Pending' }), 'pending', pending), this.isPms && this.renderUnit(units?.outOfService, t.t('Lcz_OOS', { fallback: 'OOS' }), 'out-of-service', calendar), this.isPms && this.renderUnit(units?.blocked, t.t('Lcz_Blocked', { fallback: 'Blocked' }), 'blocked', calendar)));
    }
    /** One revenue figure: icon tile, amount, label. An `undefined` value shows a skeleton in place of the amount. */
    renderKpi(icon, label, value) {
        const amount = value === undefined ? '' : number.formatAmount(this.currencySymbol, value);
        // Long amounts step down a size instead of wrapping the currency onto its own line or running out of the card.
        const length = amount.length > 15 ? ' stats__kpi-value--longest' : amount.length > 11 ? ' stats__kpi-value--long' : '';
        return (index.h("li", { class: "stats__kpi" }, index.h("span", { class: "stats__icon", "aria-hidden": "true" }, index.h("wa-icon", { name: icon })), index.h("span", { class: "stats__kpi-text" }, value === undefined ? (index.h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--kpi", "aria-hidden": "true" })) : (index.h("span", { class: `stats__kpi-value${length}`, title: amount }, amount)), index.h("span", { class: "stats__kpi-label" }, label))));
    }
    renderPerformance() {
        const performance = this.performance;
        return (index.h("wa-card", { class: "stats__card stats__card--performance", appearance: "plain" }, index.h("h2", { class: "stats__title" }, t.t('Lcz_Performance', { fallback: 'Performance' })), index.h("ul", { class: { 'stats__kpis': true, 'stats--loading': !!performance && this.performanceLoading }, "aria-label": t.t('Lcz_Revenue', { fallback: 'Revenue' }), "aria-busy": !performance ? 'true' : null }, this.renderKpi('coins', t.t('Lcz_RoomRevenue', { fallback: 'Room Revenue' }), performance?.roomRevenue), this.renderKpi('chart-simple', t.t('Lcz_Adr', { fallback: 'ADR' }), performance?.adr), this.isPms &&
            this.renderKpi('arrow-trend-up', t.t('Lcz_RevPar', { fallback: 'RevPAR' }), performance ? dashboard_helpers.computeRevPar(performance.adr, performance.occupancy) : undefined))));
    }
    render() {
        return (index.h(index.Host, { key: '69e7e505671d4a8db6ba7c9b45114dd111a89902' }, index.h("wa-card", { key: '60b1d24901a7eb13387652688e597712a844bf80', class: "stats__card stats__card--occupancy", appearance: "plain" }, index.h("h2", { key: 'a40c99ae3f2f5546fc1cd5615d33ae839b61e1ac', class: "stats__title" }, this.title), this.isPms && this.renderOccupancy(), this.renderUnits()), this.renderPerformance()));
    }
};
IrDashboardStats.style = irDashboardStatsCss();

exports.ir_dashboard_arrivals = IrDashboardArrivals;
exports.ir_dashboard_bookings_table = IrDashboardBookingsTable;
exports.ir_dashboard_date_navigator = IrDashboardDateNavigator;
exports.ir_dashboard_departures = IrDashboardDepartures;
exports.ir_dashboard_stats = IrDashboardStats;
