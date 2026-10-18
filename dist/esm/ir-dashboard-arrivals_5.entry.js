import { r as registerInstance, h, H as Host, c as createEvent } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { t as todayISO, a as addDaysISO } from './calendar-dates-D3hVfsrC.js';
import { f as formatDate } from './ir-date-CY_qGQ63.js';
import './moment-Mki5YqAR.js';
import { M as MAX_DAY_OFFSET, l as loadDepartures, c as computeRevPar } from './dashboard.helpers-BuWaRXoB.js';
import { i as isEarlyCheckout } from './booking-5B3Vroer.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import { b as formatCount, d as formatPercent, f as formatAmount } from './number-0UrU_yO2.js';
import './booking.dto-DQx6bzbY.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './booking.service-C1nicz1C.js';
import './axios-B50ozOIF.js';
import './IBooking-BFuEU3Ic.js';
import './types-BLb1NO3I.js';
import './utils-CAiEa-WB.js';
import './commonSchemas-BNnUj2OT.js';
import './arrivals.store-D5qiSsp3.js';
import './room-movement-time-DWm_ef3q.js';
import './departures.store-DIH0HoXd.js';
import './functions-BvJiJbl6.js';
import './type-D_dKkSLY.js';

const irDashboardArrivalsCss = () => `.sc-ir-dashboard-arrivals-h{display:flex;flex-direction:column}ir-arrivals-table.sc-ir-dashboard-arrivals{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size, 60vh);border:0}`;

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
        return (h(Host, { key: 'e433aad77dadea847ae19aadd540d9bd4ca5b204' }, h("ir-arrivals-table", { key: 'd07b8f220b99ececf8593b19147e3e9134e8563b', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckInRoom: event => this.handleCheckInRoom(event) }), h("ir-room-guests", { key: '3526515deb34114edae4cf3dbedcf43cb28f6d12', open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) })));
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
            h("td", null, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status?.code, currencySymbol: booking.currency?.symbol, financial: booking.financial })),
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
        return (h(Host, { key: 'ea2300f37614c9dcac8a05005725796b19bcab53' }, h("div", { key: '108f74bcdd4db72ca2aa7aebd8d6cab9ad4c00e6', class: "table--container" }, h("table", { key: '94db5626e4f10ec2b9db0a274aea04be596aabcd', class: "table data-table" }, h("thead", { key: 'ccfb1db0df301bee97065a9c935662638ed74c25' }, h("tr", { key: '70a132be019a35bf2145e9e915165c63ff2b0b05' }, h("th", { key: 'be163bf8131f700ddd4a92d0d0b127c0d4204f93' }, h("bdi", { key: '23e7ee65e574046ce62944a7e8aaeac47813841c' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '605e66b023a60f05b122455c5aa4b7c97357f76c' }, h("p", { key: 'dd15f7cc61ab86b9c2ddb20e84a995c521d3e418' }, h("bdi", { key: '13cf2e7fc8a85aa2e7f9e1ad05c9bc38ad6ed898' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), h("p", { key: '55ede652ef2ff968ffc2fdc33076bf2398c472be' }, t('Lcz_GuestName', { fallback: 'Guest name' }))), h("th", { key: 'fb97ef5d9dcd6ec1c1851c5d2f2ad9c9b337e540' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '91331cd2279e30ab3ac1f31709573cb9ab5d92fd' }, t('Lcz_Dates', { fallback: 'Dates' })), this.hasBalanceAndStatus && h("th", { key: '3a3413cd9b17370818aa94cbfd654f056784fd98' }, t('Lcz_Balance', { fallback: 'Balance' })), this.hasBalanceAndStatus && h("th", { key: 'a25009a1b8404ebf5bdbd4eb1746229bc021cb22' }, t('Lcz_Status', { fallback: 'Status' })))), h("tbody", { key: 'c1621911f65c4d282dccb671db5a46a5c5ed5060' }, rows.length ? (rows) : (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", { message: this.emptyMessage })))))))));
    }
};
IrDashboardBookingsTable.style = tableCss() + irDashboardBookingsTableCss();

const irDashboardDateNavigatorCss = () => `.sc-ir-dashboard-date-navigator-h{display:inline-block}.date-navigator__trigger.sc-ir-dashboard-date-navigator{display:inline-flex;align-items:center;gap:var(--wa-space-s);min-block-size:3rem;padding:0 var(--wa-space-l);border:0;border-radius:var(--wa-border-radius-pill);background-color:var(--wa-color-surface-default);color:var(--wa-color-text-normal);font:inherit;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-semibold);cursor:pointer;transition:box-shadow 150ms ease,     transform 160ms cubic-bezier(0.23, 1, 0.32, 1)}.date-navigator__trigger.sc-ir-dashboard-date-navigator:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.date-navigator__trigger.sc-ir-dashboard-date-navigator:active{transform:scale(0.98)}@media (hover: hover) and (pointer: fine){.date-navigator__trigger.sc-ir-dashboard-date-navigator:hover{box-shadow:inset 0 0 0 1px var(--wa-color-brand-border-normal)}}.date-navigator__icon.sc-ir-dashboard-date-navigator{color:var(--wa-color-brand-on-quiet);font-size:1.125rem}.date-navigator__date.sc-ir-dashboard-date-navigator{flex:1 1 auto;min-inline-size:13.5em;text-align:start;white-space:nowrap;font-variant-numeric:tabular-nums}.date-navigator__chevron.sc-ir-dashboard-date-navigator{margin-inline-start:var(--wa-space-xs);color:var(--wa-color-text-quiet);font-size:0.75rem;transition:transform 200ms var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1))}.date-navigator[open].sc-ir-dashboard-date-navigator .date-navigator__chevron.sc-ir-dashboard-date-navigator{transform:rotate(180deg)}.date-navigator__today.sc-ir-dashboard-date-navigator{color:var(--wa-color-brand-on-quiet);font-size:var(--wa-font-size-xs);font-weight:var(--wa-font-weight-semibold)}@media (prefers-reduced-motion: reduce){.date-navigator__trigger.sc-ir-dashboard-date-navigator{transition:none}.date-navigator__trigger.sc-ir-dashboard-date-navigator:active{transform:none}.date-navigator__chevron.sc-ir-dashboard-date-navigator{transition:none}}@media (max-width: 575px){.sc-ir-dashboard-date-navigator-h{display:block;inline-size:100%}.date-navigator.sc-ir-dashboard-date-navigator{display:block}.date-navigator__trigger.sc-ir-dashboard-date-navigator{inline-size:100%}.date-navigator__date.sc-ir-dashboard-date-navigator{min-inline-size:0}}`;

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
        const days = Array.from({ length: MAX_DAY_OFFSET * 2 + 1 }, (_, index) => addDaysISO(today, index - MAX_DAY_OFFSET));
        // Locale- and calendar-aware (Gregorian or Hijri), like every other displayed date.
        const label = (day) => formatDate(day, 'dddd, D MMMM');
        return (h(Host, { key: '1dc743076d9283fc1fac0ed2c96e5584f2da6c0e' }, h("wa-dropdown", { key: 'ceee067811ee5548a743ff94e5cc59d0c3e4302d', class: "date-navigator", placement: "bottom-end", "onwa-select": e => this.handleSelect(e) }, h("button", { key: '2b7f15cdbcd293a4f647d8fd566830269aecc6f3', type: "button", slot: "trigger", class: "date-navigator__trigger", "aria-label": t('Lcz_SelectDate', { fallback: 'Select date' }) }, h("wa-icon", { key: '640b349905f228a7bcac93cf1d673a2719e33ea9', class: "date-navigator__icon", name: "calendar-days", "aria-hidden": "true" }), h("time", { key: 'd97001bfcd44ce612f39e6a756c392de2d8e337f', class: "date-navigator__date", dateTime: this.date }, label(this.date)), h("wa-icon", { key: 'da763f478e285f6a1d4b9db5a98e052cfb8ffd64', class: "date-navigator__chevron", name: "chevron-down", "aria-hidden": "true" })), days.map(day => (h("wa-dropdown-item", { key: day, value: day, type: "checkbox", checked: day === this.date }, label(day), day === today && (h("span", { slot: "details", class: "date-navigator__today" }, t('Lcz_Today', { fallback: 'Today' })))))))));
    }
};
IrDashboardDateNavigator.style = irDashboardDateNavigatorCss();

const irDashboardDeparturesCss = () => `.sc-ir-dashboard-departures-h{display:flex;flex-direction:column}ir-departures-table.sc-ir-dashboard-departures{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size, 60vh);border:0}`;

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
        return (h(Host, { key: '53fcd0ecb24760fbf03023110309597304774035' }, h("ir-departures-table", { key: 'c24aa640fa73c4d38e55df68079314df920895ea', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckoutRoom: event => this.handleCheckoutRoom(event) }), h("ir-checkout-dialog", { key: '6c6e72f77f8ea79dc83bf199ea3110823cb2814b', booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), h("ir-invoice", { key: '8afcf49af1056d9b76871cca3ae56d793a5bf0a3', booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null, onInvoiceClose: event => this.handleInvoiceClose(event) })));
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
        registerInstance(this, hostRef);
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
        return calendar_data.property?.calendar_legends?.find(l => l.id?.toString() === legend.id)?.color ?? legend.fallback;
    }
    /** Units the property has: the calendar's total, else the physical rooms of its room types. */
    get totalUnits() {
        if (this.units?.total != null) {
            return this.units.total;
        }
        const roomTypes = calendar_data.property?.roomtypes;
        return roomTypes?.length ? roomTypes.reduce((total, rt) => total + (rt.physicalrooms?.length ?? 0), 0) : undefined;
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
        return (h("li", { class: { 'stats__unit': true, 'stats--loading': refreshing } }, h("span", { class: `stats__dot stats__dot--${tone}`, style: color ? { '--stats-dot-color': color } : undefined, "aria-hidden": "true" }), h("span", { class: "stats__unit-value" }, formatCount(value ?? 0)), h("span", { class: "stats__unit-label" }, label)));
    }
    /** Occupancy figure, units booked and the bar (PMS only). */
    renderOccupancy() {
        const performance = this.performance;
        if (!performance) {
            return (h("div", { class: "stats__occupancy", "aria-hidden": "true" }, h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--occupancy" }), h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--booked" }), h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--bar" })));
        }
        const occupancy = Math.min(Math.max(performance.occupancy, 0), 100);
        // Rounding must never claim a full house: 99.96% reads 99.9%, not 100%.
        const shownOccupancy = occupancy < 100 ? Math.min(occupancy, 99.9) : 100;
        const total = this.totalUnits;
        return (h("div", { class: { 'stats__occupancy': true, 'stats--loading': this.performanceLoading } }, h("div", { class: "stats__occupancy-figure" }, h("span", { class: "stats__icon stats__icon--round", "aria-hidden": "true" }, h("wa-icon", { name: "bed" })), h("span", { class: "stats__occupancy-value" }, formatPercent(shownOccupancy, { maximumFractionDigits: 1 }))), total !== undefined && (h("p", { class: "stats__booked" }, t('Lcz_UnitsBookedOf', { fallback: '%1 of %2 units booked', params: [formatCount(performance.bookedUnits ?? 0), formatCount(total)] }))), h("wa-progress-bar", { class: "stats__bar", value: occupancy, label: t('Lcz_Occupancy', { fallback: 'Occupancy' }) })));
    }
    renderUnits() {
        const { units, performance, pendingUnits } = this;
        const calendar = { loaded: !!units, refreshing: this.unitsLoading };
        const stats = { loaded: !!performance, refreshing: this.performanceLoading };
        const pending = { loaded: pendingUnits != null, refreshing: this.pendingLoading };
        return (h("ul", { class: "stats__units", "aria-label": t('Lcz_Units', { fallback: 'Units' }), "aria-busy": !units || !performance ? 'true' : null }, this.renderUnit(units?.available, t('Lcz_Available', { fallback: 'Available' }), 'available', calendar), this.renderUnit(performance?.bookedUnits, t('Lcz_Booked', { fallback: 'Booked' }), 'booked', stats), this.renderUnit(pendingUnits, t('Lcz_Pending', { fallback: 'Pending' }), 'pending', pending), this.isPms && this.renderUnit(units?.outOfService, t('Lcz_OOS', { fallback: 'OOS' }), 'out-of-service', calendar), this.isPms && this.renderUnit(units?.blocked, t('Lcz_Blocked', { fallback: 'Blocked' }), 'blocked', calendar)));
    }
    /** One revenue figure: icon tile, amount, label. An `undefined` value shows a skeleton in place of the amount. */
    renderKpi(icon, label, value) {
        const amount = value === undefined ? '' : formatAmount(this.currencySymbol, value);
        // Long amounts step down a size instead of wrapping the currency onto its own line or running out of the card.
        const length = amount.length > 15 ? ' stats__kpi-value--longest' : amount.length > 11 ? ' stats__kpi-value--long' : '';
        return (h("li", { class: "stats__kpi" }, h("span", { class: "stats__icon", "aria-hidden": "true" }, h("wa-icon", { name: icon })), h("span", { class: "stats__kpi-text" }, value === undefined ? (h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--kpi", "aria-hidden": "true" })) : (h("span", { class: `stats__kpi-value${length}`, title: amount }, amount)), h("span", { class: "stats__kpi-label" }, label))));
    }
    renderPerformance() {
        const performance = this.performance;
        return (h("wa-card", { class: "stats__card stats__card--performance", appearance: "plain" }, h("h2", { class: "stats__title" }, t('Lcz_Performance', { fallback: 'Performance' })), h("ul", { class: { 'stats__kpis': true, 'stats--loading': !!performance && this.performanceLoading }, "aria-label": t('Lcz_Revenue', { fallback: 'Revenue' }), "aria-busy": !performance ? 'true' : null }, this.renderKpi('coins', t('Lcz_RoomRevenue', { fallback: 'Room Revenue' }), performance?.roomRevenue), this.renderKpi('chart-simple', t('Lcz_Adr', { fallback: 'ADR' }), performance?.adr), this.isPms &&
            this.renderKpi('arrow-trend-up', t('Lcz_RevPar', { fallback: 'RevPAR' }), performance ? computeRevPar(performance.adr, performance.occupancy) : undefined))));
    }
    render() {
        return (h(Host, { key: '2c510f52d2c71978275116924150dc1601b730b3' }, h("wa-card", { key: '062e6f70b8bd5ac06d3a5b783a7c263ad2c89bb3', class: "stats__card stats__card--occupancy", appearance: "plain" }, h("h2", { key: '66d866f6204c56c76737c1a0c6e3c6d0d88a52fa', class: "stats__title" }, this.title), this.isPms && this.renderOccupancy(), this.renderUnits()), this.renderPerformance()));
    }
};
IrDashboardStats.style = irDashboardStatsCss();

export { IrDashboardArrivals as ir_dashboard_arrivals, IrDashboardBookingsTable as ir_dashboard_bookings_table, IrDashboardDateNavigator as ir_dashboard_date_navigator, IrDashboardDepartures as ir_dashboard_departures, IrDashboardStats as ir_dashboard_stats };
