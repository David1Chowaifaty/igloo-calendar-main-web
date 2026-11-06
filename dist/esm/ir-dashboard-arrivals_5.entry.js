import { r as registerInstance, h, H as Host, c as createEvent } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { t as todayISO, a as addDaysISO } from './calendar-dates-D3hVfsrC.js';
import { f as formatDate } from './ir-date-XXNYhmSL.js';
import './moment-Mki5YqAR.js';
import { M as MAX_DAY_OFFSET, l as loadDepartures, c as computeRevPar } from './dashboard.data-H6L7T2Qc.js';
import { i as isEarlyCheckout } from './booking-COqx-DwE.js';
import { c as calendar_data } from './calendar-data-DknGMMFc.js';
import { b as formatCount, d as formatPercent, f as formatAmount } from './number-B8waOzTO.js';
import './booking.dto-DGwE7ON6.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './booking.store-DAAOuOj_.js';
import './axios-B50ozOIF.js';
import './IBooking-B4waZCSK.js';
import './types-CB66a07H.js';
import './utils-C3R-kmCE.js';
import './commonSchemas-Cxq3bLiY.js';
import './locale.controller-Bs0lwnpi.js';
import './index-DojQ8U32.js';
import './index-Zduue3lw.js';
import './arrivals.store-CFlWvyCY.js';
import './room-movement-time-DWm_ef3q.js';
import './departures.store-8oG4JB7B.js';
import './functions-Ebyqqazo.js';
import './type-9FR4Ndkd.js';

const irDashboardArrivalsCss = () => `.sc-ir-dashboard-arrivals-h{display:flex;flex-direction:column}ir-arrivals-table.sc-ir-dashboard-arrivals{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size, 60vh);inline-size:100%;max-inline-size:none;border:0}`;

const IrDashboardArrivals = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '36a56c21bb4bca29557f65f199af9b3070ee2484' }, h("ir-arrivals-table", { key: '3fe88539322208f52ea23bd4013ead92e6ca93f7', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckInRoom: event => this.handleCheckInRoom(event) }), h("ir-room-guests", { key: 'b97e3da828441560c5709ab95ffdb094d0e9f84f', open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) })));
    }
};
IrDashboardArrivals.style = irDashboardArrivalsCss();

const tableCss = () => `.sc-ir-dashboard-bookings-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-dashboard-bookings-table{overflow-x:auto}.table--container.sc-ir-dashboard-bookings-table,.data-table.sc-ir-dashboard-bookings-table{height:100%}.ir-table-row.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-dashboard-bookings-table tbody.sc-ir-dashboard-bookings-table tr.sc-ir-dashboard-bookings-table:last-child>td.sc-ir-dashboard-bookings-table{border-bottom:0 !important}.cell--align-start.sc-ir-dashboard-bookings-table{text-align:start !important}.cell--align-center.sc-ir-dashboard-bookings-table{text-align:center !important}.cell--align-end.sc-ir-dashboard-bookings-table{text-align:end !important}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-dashboard-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-dashboard-bookings-table,.ir-table-row.sc-ir-dashboard-bookings-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-dashboard-bookings-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sortable.sc-ir-dashboard-bookings-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sortable.sc-ir-dashboard-bookings-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sortable.sc-ir-dashboard-bookings-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-dashboard-bookings-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-dashboard-bookings-table svg.sc-ir-dashboard-bookings-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-dashboard-bookings-table:hover td.sc-ir-dashboard-bookings-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-dashboard-bookings-table:hover td.sc-ir-dashboard-bookings-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-dashboard-bookings-table:active td.sc-ir-dashboard-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-dashboard-bookings-table:hover td.sc-ir-dashboard-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-dashboard-bookings-table:active td.sc-ir-dashboard-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-dashboard-bookings-table .empty-row.sc-ir-dashboard-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-dashboard-bookings-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-dashboard-bookings-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const irDashboardBookingsTableCss = () => `.sc-ir-dashboard-bookings-table-h{display:flex;flex-direction:column;min-block-size:var(--dashboard-table-min-block-size, 60vh);background-color:var(--wa-color-surface-default);overflow:hidden}.sc-ir-dashboard-bookings-table-h .table--container.sc-ir-dashboard-bookings-table{flex:0 1 auto;block-size:auto;min-block-size:0}.sc-ir-dashboard-bookings-table-h .data-table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table{position:sticky;inset-block-start:0;z-index:3;border-block-end-color:transparent !important;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-border-normal)}.data-table.sc-ir-dashboard-bookings-table{inline-size:100%;margin:0}.data-table.sc-ir-dashboard-bookings-table p.sc-ir-dashboard-bookings-table{margin:0}.units-cell.sc-ir-dashboard-bookings-table{display:flex;flex-direction:column;gap:var(--wa-space-2xs)}.data-table.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table,.data-table.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{vertical-align:middle;white-space:nowrap}@media (max-width: 768px){.sc-ir-dashboard-bookings-table-h{--ir-cell-padding:var(--wa-space-2xs) var(--wa-space-xs);font-size:var(--wa-font-size-s)}}`;

const IrDashboardBookingsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("tr", { class: "ir-table-row", key: booking.booking_nbr }, h("td", null, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest, identifier: booking.booking_nbr })), h("td", null, h("div", { class: "units-cell" }, (booking.rooms ?? []).map(room => (h("ir-unit-cell", { key: room.identifier, room: room }))))), h("td", null, h("ir-dates-cell", { checkIn: from, checkOut: to })), this.renderTrailingCells(booking)));
    }
    renderTrailingCells(booking) {
        if (!this.hasBalanceAndStatus) {
            return null;
        }
        return [
            h("td", null, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status?.code, currencySymbol: booking.currency?.symbol, financial: booking.financial, paymentDate: this.date })),
            h("td", null, h("ir-status-activity-cell", { status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })),
        ];
    }
    renderRoomRow(booking, room, index) {
        return (h("tr", { class: "ir-table-row", key: `${booking.booking_nbr}-${room.identifier ?? index}` }, h("td", null, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest, identifier: room.identifier }), !this.isSameGuest(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { checkIn: room.from_date, checkOut: room.to_date })), this.renderTrailingCells(booking)));
    }
    render() {
        const bookings = this.bookings ?? [];
        const rows = this.variant === 'inHouse'
            ? bookings.flatMap(booking => (booking.rooms ?? []).map((room, index) => this.renderRoomRow(booking, room, index)))
            : bookings.map(booking => this.renderBookingRow(booking));
        const columnCount = this.hasBalanceAndStatus ? 6 : 4;
        return (h(Host, { key: '6bf303a414538fdf22fb223a00951b93ce4fb98c' }, h("div", { key: '4a1f8a413803fee47822dbbc5c45f2ded0c3feaf', class: "table--container" }, h("table", { key: 'de0503c98a14f251ddfa22c8068c73dfc4f75e62', class: "table data-table" }, h("thead", { key: '34b773e1c054200299024e4ee4a925bb92007a5f' }, h("tr", { key: '37925e04a1c41ffaf98e7ebd28fb2e5a8f30799a' }, h("th", { key: 'ffea1f0d1f86d560f882efcc2852b278bf25bebb' }, h("bdi", { key: '29fad332c2e38823360f447355e84bd46b4412c3' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: 'b05b4bf8163e975fc3561301d1328dcb408e0d48' }, h("p", { key: '673bf886c93f48e9f5b60ad36a1c6b304e7aa118' }, h("bdi", { key: 'bb6320c74dc435b7d41b0be63acdda7c9b57312e' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), h("p", { key: '4d76c98dd28ae8c367fa8bdd701ca4ece9e5e220' }, t('Lcz_GuestName', { fallback: 'Guest name' }))), h("th", { key: '51c9c20fae5227bbec5c580b623360365f2f3b86' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: 'a79b998620d759d3eaf572a7a20960d62e135e37' }, t('Lcz_Dates', { fallback: 'Dates' })), this.hasBalanceAndStatus && h("th", { key: '82d87485a17ed330ba65c78b365007ee4426a695' }, t('Lcz_Balance', { fallback: 'Balance' })), this.hasBalanceAndStatus && h("th", { key: 'c6746d6dd32d4286badbbab57db0b0b060240675' }, t('Lcz_Status', { fallback: 'Status' })))), h("tbody", { key: '30065983f6423f81783c6b95fc7b3fd3e43278e0' }, rows.length ? (rows) : (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", { message: this.emptyMessage })))))))));
    }
};
IrDashboardBookingsTable.style = tableCss() + irDashboardBookingsTableCss();

const irDashboardDateNavigatorCss = () => `.sc-ir-dashboard-date-navigator-h{display:block}.date-navigator.sc-ir-dashboard-date-navigator{display:block}.date-navigator__trigger.sc-ir-dashboard-date-navigator{display:flex;inline-size:100%;align-items:center;gap:var(--wa-space-s);min-block-size:3rem;padding:0 var(--wa-space-l);border:0;border-radius:var(--wa-border-radius-pill);background-color:var(--wa-color-surface-default);color:var(--wa-color-text-normal);font:inherit;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-semibold);cursor:pointer;transition:box-shadow 150ms ease,     transform 160ms cubic-bezier(0.23, 1, 0.32, 1)}.date-navigator__trigger.sc-ir-dashboard-date-navigator:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.date-navigator__trigger.sc-ir-dashboard-date-navigator:active{transform:scale(0.98)}@media (hover: hover) and (pointer: fine){.date-navigator__trigger.sc-ir-dashboard-date-navigator:hover{box-shadow:inset 0 0 0 1px var(--wa-color-brand-border-normal)}}.date-navigator__icon.sc-ir-dashboard-date-navigator{color:var(--wa-color-brand-on-quiet);font-size:1.125rem}.date-navigator__date.sc-ir-dashboard-date-navigator{flex:1 1 auto;min-inline-size:0;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}.date-navigator__chevron.sc-ir-dashboard-date-navigator{margin-inline-start:var(--wa-space-xs);color:var(--wa-color-text-quiet);font-size:0.75rem;transition:transform 200ms var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1))}.date-navigator[open].sc-ir-dashboard-date-navigator .date-navigator__chevron.sc-ir-dashboard-date-navigator{transform:rotate(180deg)}.date-navigator__today.sc-ir-dashboard-date-navigator{color:var(--wa-color-brand-on-quiet);font-size:var(--wa-font-size-xs);font-weight:var(--wa-font-weight-semibold)}@media (prefers-reduced-motion: reduce){.date-navigator__trigger.sc-ir-dashboard-date-navigator{transition:none}.date-navigator__trigger.sc-ir-dashboard-date-navigator:active{transform:none}.date-navigator__chevron.sc-ir-dashboard-date-navigator{transition:none}}`;

const IrDashboardDateNavigator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChange = createEvent(this, "dateChange");
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
        const today = todayISO();
        const days = Array.from({ length: MAX_DAY_OFFSET + 1 }, (_, index) => addDaysISO(today, index));
        // Locale- and calendar-aware (Gregorian or Hijri), like every other displayed date.
        const label = (day) => formatDate(day, 'dddd, D MMMM');
        return (h(Host, { key: 'b0b4be5b1c064bf5d5f9a37601d2cd4b289aa585' }, h("wa-dropdown", { key: '03f4aaa6e6064a22fbbd44b18862f48c74a2d956', class: "date-navigator", placement: "bottom-start", "onwa-select": e => this.handleSelect(e) }, h("button", { key: '2332522f5edae040a881123401db2592051821aa', type: "button", slot: "trigger", class: "date-navigator__trigger", "aria-label": t('Lcz_SelectDate', { fallback: 'Select date' }) }, h("wa-icon", { key: '3d5fedf9e7471b30c9593d63b5c4979bdacd62fc', class: "date-navigator__icon", name: "calendar-days", "aria-hidden": "true" }), h("time", { key: 'bff14a09a7e526e3e25de27ee219ae39e44870f2', class: "date-navigator__date", dateTime: this.date }, label(this.date)), h("wa-icon", { key: '632578ef8ced597078d2ff86e7836e035d919b1e', class: "date-navigator__chevron", name: "chevron-down", "aria-hidden": "true" })), days.map(day => (h("wa-dropdown-item", { key: day, value: day, type: "checkbox", checked: day === this.date }, label(day), day === today && (h("span", { slot: "details", class: "date-navigator__today" }, t('Lcz_Today', { fallback: 'Today' })))))))));
    }
};
IrDashboardDateNavigator.style = irDashboardDateNavigatorCss();

const irDashboardDeparturesCss = () => `.sc-ir-dashboard-departures-h{display:flex;flex-direction:column}ir-departures-table.sc-ir-dashboard-departures{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size, 60vh);inline-size:100%;max-inline-size:none;border:0}`;

const IrDashboardDepartures = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkoutRedirect = createEvent(this, "checkoutRedirect");
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
        return loadDepartures(this.propertyId, this.date);
    }
    handleCheckoutRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const { booking, identifier } = event.detail;
        const room = booking?.rooms?.find(r => r.identifier === identifier);
        if (isEarlyCheckout(room)) {
            this.checkoutRedirect.emit({ bookingNumber: Number(booking.booking_nbr), identifier });
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
        return (h(Host, { key: '96cff0a35fb363dda8f40780e2ea7610d6df751b' }, h("ir-departures-table", { key: '6e5b191ed7e64d8230c1476445ad3a71d84e376c', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckoutRoom: event => this.handleCheckoutRoom(event) }), h("ir-checkout-dialog", { key: '2e4ffbe00f204df07dedd00b5b8af41e5b5af0cd', booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), h("ir-invoice", { key: '86b21e539ff9f20318694e88a64d10eda758a024', booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null, onInvoiceClose: event => this.handleInvoiceClose(event) })));
    }
};
IrDashboardDepartures.style = irDashboardDeparturesCss();

const irDashboardStatsCss = () => `.sc-ir-dashboard-stats-h{display:flex;flex-direction:column;gap:var(--wa-space-m)}.stats__date.sc-ir-dashboard-stats{flex:none}.stats__card.sc-ir-dashboard-stats{--spacing:var(--wa-space-l);border:0;border-radius:var(--wa-border-radius-l);background:var(--wa-color-surface-default)}.stats__card.sc-ir-dashboard-stats::part(body),.stats__card.sc-ir-dashboard-stats [part~="body"]{display:flex;flex-direction:column;gap:var(--wa-space-m)}.stats__card--occupancy.sc-ir-dashboard-stats{flex:1 1 auto}.stats__card--performance.sc-ir-dashboard-stats{flex:none}.stats__title.sc-ir-dashboard-stats{margin:0;font-family:var(--wa-font-family-heading);font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-semibold);line-height:var(--wa-line-height-condensed);text-transform:capitalize;color:var(--wa-color-text-normal);overflow-wrap:anywhere}.stats__occupancy.sc-ir-dashboard-stats,.stats__units.sc-ir-dashboard-stats,.stats__unit.sc-ir-dashboard-stats,.stats__kpis.sc-ir-dashboard-stats{transition:opacity 150ms ease}.stats--loading.sc-ir-dashboard-stats{opacity:0.55}.stats__icon.sc-ir-dashboard-stats{display:inline-flex;flex:none;align-items:center;justify-content:center;inline-size:2.75rem;block-size:2.75rem;border-radius:var(--wa-border-radius-m);background-color:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet);font-size:1.125rem}.stats__icon--round.sc-ir-dashboard-stats{inline-size:3.5rem;block-size:3.5rem;border-radius:var(--wa-border-radius-circle);font-size:1.375rem}.stats__occupancy.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:var(--wa-space-s);padding-block-end:var(--wa-space-xs)}.stats__occupancy-figure.sc-ir-dashboard-stats{display:flex;align-items:center;gap:var(--wa-space-m);min-inline-size:0}.stats__figure.sc-ir-dashboard-stats{container-type:inline-size;display:flex;flex:1 1 0;flex-direction:column;gap:0.125rem;min-inline-size:0}.stats__figure--virtual.sc-ir-dashboard-stats{padding-inline-start:var(--wa-space-m);border-inline-start:1px solid var(--wa-color-neutral-border-quiet);--stats-figure-color:var(--wa-color-text-quiet)}.stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-3xl);unicode-bidi:isolate;margin-block-end:0.25rem;font-size:clamp(var(--wa-font-size-m), calc(100cqi / (var(--figure-chars, 5) * 0.62)), var(--figure-max-size));font-weight:var(--wa-font-weight-bold);line-height:1;letter-spacing:-0.02em;font-variant-numeric:tabular-nums;color:var(--stats-figure-color, var(--wa-color-text-normal));overflow-wrap:anywhere}.stats__figure--virtual.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-2xl)}.stats__occupancy--split.sc-ir-dashboard-stats .stats__icon--round.sc-ir-dashboard-stats{inline-size:2.75rem;block-size:2.75rem;font-size:1.125rem}.stats__occupancy--split.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-2xl)}.stats__occupancy--split.sc-ir-dashboard-stats .stats__figure--virtual.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-xl)}.stats__figure-label.sc-ir-dashboard-stats{font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);line-height:var(--wa-line-height-condensed);color:var(--stats-figure-color, var(--wa-color-text-normal));overflow-wrap:anywhere}.stats__booked.sc-ir-dashboard-stats{font-size:var(--wa-font-size-xs);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);overflow-wrap:anywhere}.stats__bar.sc-ir-dashboard-stats{position:relative;block-size:0.5rem;margin-block-start:var(--wa-space-xs);overflow:hidden;border-radius:var(--wa-border-radius-pill);background-color:var(--wa-color-neutral-fill-quiet);cursor:default;outline-offset:2px}.stats__bar.sc-ir-dashboard-stats:focus-visible{outline:var(--wa-focus-ring)}.stats__bar-fill.sc-ir-dashboard-stats{position:absolute;inset-block:0;inset-inline-start:0;border-radius:inherit;background-color:var(--wa-color-success-fill-loud);transition:inline-size 280ms cubic-bezier(0.77, 0, 0.175, 1)}.stats__tooltip.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:0.125rem;font-variant-numeric:tabular-nums}.stats__units.sc-ir-dashboard-stats{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:var(--wa-space-m) var(--wa-space-l);margin:0;padding:0;list-style:none}@media (min-width: 992px){.stats__units--stacked.sc-ir-dashboard-stats{grid-template-columns:minmax(0, 1fr)}}.stats__unit.sc-ir-dashboard-stats{container-type:inline-size;display:grid;grid-template-columns:auto minmax(0, 1fr);align-items:center;column-gap:var(--wa-space-s);row-gap:0.125rem}.stats__dot.sc-ir-dashboard-stats{inline-size:0.875rem;block-size:0.875rem;border-radius:var(--wa-border-radius-circle);background-color:var(--stats-dot-color, var(--wa-color-brand-fill-loud))}.stats__dot--blocked.sc-ir-dashboard-stats{--stats-dot-color:var(--wa-color-danger-fill-loud)}.stats__unit-value.sc-ir-dashboard-stats{--unit-max-size:var(--wa-font-size-xl);font-size:clamp(var(--wa-font-size-2xs), calc((100cqi - 0.875rem - var(--wa-space-s)) / (var(--unit-chars, 2) * 0.62)), var(--unit-max-size));font-weight:var(--wa-font-weight-bold);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal);overflow-wrap:anywhere}.stats__unit-label.sc-ir-dashboard-stats{grid-column:2;font-size:var(--wa-font-size-s);line-height:var(--wa-line-height-condensed);color:var(--wa-color-text-quiet);overflow-wrap:anywhere}.stats__unit-label.sc-ir-dashboard-stats::first-letter{text-transform:uppercase}.stats__kpis.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:var(--wa-space-m);margin:0;padding:0;list-style:none}.stats__kpi.sc-ir-dashboard-stats{display:flex;align-items:center;gap:var(--wa-space-m)}.stats__kpi-text.sc-ir-dashboard-stats{container-type:inline-size;display:flex;flex:1 1 auto;flex-direction:column;min-inline-size:0}.stats__kpi-value.sc-ir-dashboard-stats{--kpi-max-size:var(--wa-font-size-xl);unicode-bidi:isolate;font-size:clamp(var(--wa-font-size-s), calc(100cqi / (var(--kpi-chars, 10) * 0.62)), var(--kpi-max-size));font-weight:var(--wa-font-weight-bold);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal);overflow-wrap:anywhere}.stats__kpi-label.sc-ir-dashboard-stats{overflow:hidden;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet);text-overflow:ellipsis;white-space:nowrap}@media (max-width: 991px){.sc-ir-dashboard-stats-h{gap:var(--wa-space-s)}.stats__card.sc-ir-dashboard-stats{--spacing:var(--wa-space-m)}.stats__card.sc-ir-dashboard-stats::part(body){gap:var(--wa-space-s)}.stats__units.sc-ir-dashboard-stats,.stats__kpis.sc-ir-dashboard-stats{row-gap:var(--wa-space-s)}.stats__kpi.sc-ir-dashboard-stats{gap:var(--wa-space-s)}.stats__kpi.sc-ir-dashboard-stats .stats__icon.sc-ir-dashboard-stats{inline-size:2.25rem;block-size:2.25rem;font-size:1rem}}@media (min-width: 576px) and (max-width: 991px){.sc-ir-dashboard-stats-h{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr))}.stats__date.sc-ir-dashboard-stats{grid-column:1 / -1}}.stats__skeleton.sc-ir-dashboard-stats{inline-size:70%;block-size:1.125rem;min-block-size:0}.stats__skeleton.sc-ir-dashboard-stats::part(indicator),.stats__skeleton.sc-ir-dashboard-stats [part~="indicator"]{border-radius:var(--wa-border-radius-s)}.stats__skeleton--occupancy.sc-ir-dashboard-stats{inline-size:11rem;block-size:3.5rem}.stats__skeleton--bar.sc-ir-dashboard-stats{inline-size:100%;block-size:0.5rem;margin-block-start:var(--wa-space-xs)}.stats__skeleton--unit.sc-ir-dashboard-stats{grid-column:1 / -1;block-size:2.5rem}.stats__skeleton--kpi.sc-ir-dashboard-stats{inline-size:6rem;font-size:var(--wa-font-size-xl);line-height:var(--wa-line-height-condensed);block-size:1lh}[density='compact'].sc-ir-dashboard-stats-h,[density='tight'].sc-ir-dashboard-stats-h{gap:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats{--spacing:var(--wa-space-m)}[density='compact'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats::part(body),[density='compact'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats [part~="body"],[density='tight'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats::part(body),[density='tight'].sc-ir-dashboard-stats-h .stats__card.sc-ir-dashboard-stats [part~="body"]{gap:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-stats-h .stats__units.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__units.sc-ir-dashboard-stats,[density='compact'].sc-ir-dashboard-stats-h .stats__kpis.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__kpis.sc-ir-dashboard-stats{row-gap:var(--wa-space-s)}[density='tight'].sc-ir-dashboard-stats-h .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-2xl)}[density='tight'].sc-ir-dashboard-stats-h .stats__figure--virtual.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__occupancy--split.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-xl)}[density='tight'].sc-ir-dashboard-stats-h .stats__occupancy--split.sc-ir-dashboard-stats .stats__figure--virtual.sc-ir-dashboard-stats .stats__occupancy-value.sc-ir-dashboard-stats{--figure-max-size:var(--wa-font-size-l)}[density='tight'].sc-ir-dashboard-stats-h .stats__icon--round.sc-ir-dashboard-stats{inline-size:2.75rem;block-size:2.75rem}[density='tight'].sc-ir-dashboard-stats-h .stats__unit-value.sc-ir-dashboard-stats{--unit-max-size:var(--wa-font-size-l)}[density='tight'].sc-ir-dashboard-stats-h .stats__kpi-value.sc-ir-dashboard-stats{--kpi-max-size:var(--wa-font-size-l)}@media (prefers-reduced-motion: reduce){.stats__bar-fill.sc-ir-dashboard-stats{transition:none}.stats__skeleton.sc-ir-dashboard-stats::part(indicator){animation:none}}`;

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
const occupancyLabel = (kind) => (kind === 'virtual' ? t('Lcz_FakeUnits', { fallback: 'Fake units' }) : t('Lcz_RealUnits', { fallback: 'Real units' }));
/** "12 of 40 booked" */
const bookedOfTotal = (figure) => t('Lcz_BookedOfTotal', { fallback: '%1 of %2 booked', params: [formatCount(figure.booked), formatCount(figure.total)] });
/** Gives each instance's bar its own id, which the tooltip anchors to. */
let barIds = 0;
const clampPercent = (percent) => Math.min(Math.max(percent ?? 0, 0), 100);
/** Rounding must never claim a full house: 99.96% reads 99.9%, not 100%. */
const shownPercent = (percent) => {
    const clamped = clampPercent(percent);
    return clamped < 100 ? Math.min(clamped, 99.9) : 100;
};
const IrDashboardStats = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChange = createEvent(this, "dateChange");
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
    /** Emitted with the new day when the user picks another day in the rail's day picker. */
    dateChange;
    barId = `stats-occupancy-${++barIds}`;
    /** The property's colour for a unit's legend entry, so the dot matches the calendar. */
    legendColor(tone) {
        const legend = UNIT_LEGEND[tone];
        if (!legend) {
            return undefined;
        }
        return calendar_data.property?.calendar_legends?.find(l => l.id?.toString() === legend.id)?.color ?? legend.fallback;
    }
    /** "Today's occupancy" on today, otherwise the day itself ("Saturday, 17 Oct."); the card title is capitalized in CSS. */
    get title() {
        if (!this.date || this.date === todayISO()) {
            return t('Lcz_TodaysOccupancy', { fallback: "Today's occupancy" });
        }
        return `${formatDate(this.date, 'dddd, D MMM')}.`;
    }
    renderUnit(value, label, tone, { loaded, refreshing }) {
        if (!loaded) {
            return (h("li", { class: "stats__unit", "aria-hidden": "true" }, h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--unit" })));
        }
        const color = this.legendColor(tone);
        // Every unit stays visible; a count with nothing behind it reads as 0.
        const count = formatCount(value ?? 0);
        return (h("li", { class: { 'stats__unit': true, 'stats--loading': refreshing } }, h("span", { class: `stats__dot stats__dot--${tone}`, style: color ? { '--stats-dot-color': color } : undefined, "aria-hidden": "true" }), h("span", { class: "stats__unit-value", style: { '--unit-chars': String(count.length) } }, count), h("span", { class: "stats__unit-label" }, label)));
    }
    /** One occupancy figure: the percentage over its label and the units booked. */
    renderOccupancyFigure(kind, figure) {
        const percent = formatPercent(shownPercent(figure.percent), { maximumFractionDigits: 1 });
        return (h("div", { class: `stats__figure stats__figure--${kind}` }, h("span", { class: "stats__occupancy-value", style: { '--figure-chars': String(percent.length) } }, percent), h("span", { class: "stats__figure-label" }, occupancyLabel(kind)), h("span", { class: "stats__booked" }, bookedOfTotal(figure))));
    }
    /** The real units' occupancy bar, filled to its percentage, with a tooltip spelling out the figure. */
    renderBar(figure) {
        const percent = formatPercent(shownPercent(figure.percent), { maximumFractionDigits: 1 });
        return [
            h("div", { id: this.barId, class: "stats__bar", role: "progressbar", tabindex: "0", "aria-label": occupancyLabel('real'), "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(clampPercent(figure.percent)), "aria-valuetext": `${percent}, ${bookedOfTotal(figure)}` }, h("span", { class: "stats__bar-fill", style: { inlineSize: `${clampPercent(figure.percent)}%` } })),
            h("wa-tooltip", { for: this.barId }, h("span", { class: "stats__tooltip" }, h("strong", null, `${occupancyLabel('real')}: ${percent}`), h("span", null, bookedOfTotal(figure)))),
        ];
    }
    /** Occupancy of real units and, when the property has fake units, of those; then the real units' bar (PMS only). */
    renderOccupancy() {
        const occupancy = this.units?.occupancy;
        if (!occupancy) {
            return (h("div", { class: "stats__occupancy", "aria-hidden": "true" }, h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--occupancy" }), h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--bar" })));
        }
        const { real } = occupancy;
        // Virtual room types without a single active unit aren't mentioned at all.
        const virtual = occupancy.virtual?.total ? occupancy.virtual : undefined;
        return (h("div", { class: { 'stats__occupancy': true, 'stats__occupancy--split': !!virtual, 'stats--loading': this.unitsLoading } }, h("div", { class: "stats__occupancy-figure" }, h("span", { class: "stats__icon stats__icon--round", "aria-hidden": "true" }, h("wa-icon", { name: "bed" })), this.renderOccupancyFigure('real', real), virtual && this.renderOccupancyFigure('virtual', virtual)), this.renderBar(real)));
    }
    renderUnits() {
        const { units, performance, pendingUnits } = this;
        const calendar = { loaded: !!units, refreshing: this.unitsLoading };
        const stats = { loaded: !!performance, refreshing: this.performanceLoading };
        const pending = { loaded: pendingUnits != null, refreshing: this.pendingLoading };
        return (h("ul", { class: { 'stats__units': true, 'stats__units--stacked': !this.isPms }, "aria-label": t('Lcz_Units', { fallback: 'Units' }), "aria-busy": (this.isPms && !units) || !performance ? 'true' : null }, this.isPms && this.renderUnit(units?.available, t('Lcz_Available', { fallback: 'Available' }), 'available', calendar), this.renderUnit(performance?.bookedUnits, t('Lcz_Booked', { fallback: 'Booked' }), 'booked', stats), this.renderUnit(pendingUnits, t('Lcz_Pending', { fallback: 'Pending' }), 'pending', pending), this.isPms && this.renderUnit(units?.outOfService, t('Lcz_OOS', { fallback: 'OOS' }), 'out-of-service', calendar), this.isPms && this.renderUnit(units?.blocked, t('Lcz_Blocked', { fallback: 'Blocked' }), 'blocked', calendar)));
    }
    /** One revenue figure: icon tile, amount, label. An `undefined` value shows a skeleton in place of the amount. */
    renderKpi(icon, label, value) {
        const amount = value === undefined ? '' : formatAmount(this.currencySymbol, value);
        return (h("li", { class: "stats__kpi" }, h("span", { class: "stats__icon", "aria-hidden": "true" }, h("wa-icon", { name: icon })), h("span", { class: "stats__kpi-text" }, value === undefined ? (h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--kpi", "aria-hidden": "true" })) : (
        // The CSS sizes the font from the amount's length so it always shows in full, never truncated.
        h("span", { class: "stats__kpi-value", style: { '--kpi-chars': String(amount.length) } }, amount)), h("span", { class: "stats__kpi-label" }, label))));
    }
    renderPerformance() {
        const performance = this.performance;
        return (h("wa-card", { class: "stats__card stats__card--performance", appearance: "plain" }, h("h2", { class: "stats__title" }, t('Lcz_Performance', { fallback: 'Performance' })), h("ul", { class: { 'stats__kpis': true, 'stats--loading': !!performance && this.performanceLoading }, "aria-label": t('Lcz_Revenue', { fallback: 'Revenue' }), "aria-busy": !performance ? 'true' : null }, this.renderKpi('coins', t('Lcz_RoomRevenue', { fallback: 'Room Revenue' }), performance?.roomRevenue), this.isPms && this.renderKpi('chart-simple', t('Lcz_Adr', { fallback: 'ADR' }), performance?.adr), this.isPms && this.renderKpi('arrow-trend-up', t('Lcz_RevPar', { fallback: 'RevPAR' }), performance ? computeRevPar(performance.adr, performance.occupancy) : undefined))));
    }
    /** Re-emits the picker's day from the rail, so the dashboard hears one event, from its own child. */
    handleDateChange(e) {
        e.stopPropagation();
        this.dateChange.emit(e.detail);
    }
    render() {
        return (h(Host, { key: 'b4151abbc644c7050aa7723d0d1165b1ef5c91e6' }, h("ir-dashboard-date-navigator", { key: '4d038a9748cf7a64acf77d01f75c6c02b91cc122', class: "stats__date", date: this.date, onDateChange: e => this.handleDateChange(e) }), h("wa-card", { key: '6a04c14f88476080bf54bfa546363f74640e4318', class: "stats__card stats__card--occupancy", appearance: "plain" }, h("h2", { key: '5e25c9dc539ed96ae4e050f952998d7e71b3c645', class: "stats__title" }, this.title), this.isPms && this.renderOccupancy(), this.renderUnits()), this.renderPerformance()));
    }
};
IrDashboardStats.style = irDashboardStatsCss();

export { IrDashboardArrivals as ir_dashboard_arrivals, IrDashboardBookingsTable as ir_dashboard_bookings_table, IrDashboardDateNavigator as ir_dashboard_date_navigator, IrDashboardDepartures as ir_dashboard_departures, IrDashboardStats as ir_dashboard_stats };
