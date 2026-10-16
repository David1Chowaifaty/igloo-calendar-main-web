import { r as registerInstance, h, H as Host, c as createEvent } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { a as addDaysISO, t as todayISO } from './calendar-dates-D3hVfsrC.js';
import { f as formatDate } from './ir-date-XXNYhmSL.js';
import './moment-Mki5YqAR.js';
import { M as MAX_DAY_OFFSET, l as loadDepartures, i as computeRevPar } from './dashboard.helpers-BSlUkMdp.js';
import { i as isEarlyCheckout } from './booking-BERGGrrf.js';
import { c as calendar_data } from './calendar-data-DknGMMFc.js';
import { b as formatCount, f as formatAmount, d as formatPercent } from './number-B8waOzTO.js';
import './booking.dto-B554ToUQ.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './booking.store-DE5QtFwo.js';
import './axios-B50ozOIF.js';
import './IBooking-B4waZCSK.js';
import './types-CB66a07H.js';
import './utils-iP-LMQsp.js';
import './commonSchemas-Cx9w9d8l.js';
import './arrivals.store-CsaTCqrZ.js';
import './departures.store-CgrWKna6.js';
import './functions-Ebyqqazo.js';
import './type-DjfVZqvs.js';

const irDashboardArrivalsCss = () => `.sc-ir-dashboard-arrivals-h{display:flex;flex-direction:column}ir-arrivals-table.sc-ir-dashboard-arrivals{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size, 60vh);border:0}`;

const IrDashboardArrivals = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    language = 'en';
    countries;
    roomGuestState = null;
    handleCheckInRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.roomGuestState = event.detail;
    }
    render() {
        return (h(Host, { key: 'ebe9b5dc1057b8abbd71ba790897714fee9188e1' }, h("ir-arrivals-table", { key: '7aa3dea595a31c3c7d64a7a3bfc4e25564526555', hidePagination: true, onCheckInRoom: event => this.handleCheckInRoom(event) }), h("ir-room-guests", { key: 'a035652d4287154cada608820cfe228fbcb51278', open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) })));
    }
};
IrDashboardArrivals.style = irDashboardArrivalsCss();

const tableCss = () => `.sc-ir-dashboard-bookings-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-dashboard-bookings-table{overflow-x:auto}.table--container.sc-ir-dashboard-bookings-table,.data-table.sc-ir-dashboard-bookings-table{height:100%}.ir-table-row.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-dashboard-bookings-table tbody.sc-ir-dashboard-bookings-table tr.sc-ir-dashboard-bookings-table:last-child>td.sc-ir-dashboard-bookings-table{border-bottom:0 !important}.cell--align-start.sc-ir-dashboard-bookings-table{text-align:start !important}.cell--align-center.sc-ir-dashboard-bookings-table{text-align:center !important}.cell--align-end.sc-ir-dashboard-bookings-table{text-align:end !important}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-dashboard-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-dashboard-bookings-table,.ir-table-row.sc-ir-dashboard-bookings-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-dashboard-bookings-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sortable.sc-ir-dashboard-bookings-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sortable.sc-ir-dashboard-bookings-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sortable.sc-ir-dashboard-bookings-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-dashboard-bookings-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-dashboard-bookings-table svg.sc-ir-dashboard-bookings-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-dashboard-bookings-table:hover td.sc-ir-dashboard-bookings-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-dashboard-bookings-table:hover td.sc-ir-dashboard-bookings-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-dashboard-bookings-table:active td.sc-ir-dashboard-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-dashboard-bookings-table:hover td.sc-ir-dashboard-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-dashboard-bookings-table:active td.sc-ir-dashboard-bookings-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-dashboard-bookings-table .empty-row.sc-ir-dashboard-bookings-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-dashboard-bookings-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-dashboard-bookings-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const irDashboardBookingsTableCss = () => `.sc-ir-dashboard-bookings-table-h{display:flex;flex-direction:column;min-block-size:var(--dashboard-table-min-block-size, 60vh);background-color:var(--wa-color-surface-default);overflow:hidden}.sc-ir-dashboard-bookings-table-h .table--container.sc-ir-dashboard-bookings-table{flex:0 1 auto;block-size:auto;min-block-size:0}.sc-ir-dashboard-bookings-table-h .data-table.sc-ir-dashboard-bookings-table thead.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table{position:sticky;inset-block-start:0;z-index:3;border-block-end-color:transparent !important;box-shadow:inset 0 -1px 0 var(--wa-color-neutral-border-normal)}.data-table.sc-ir-dashboard-bookings-table{inline-size:100%;margin:0}.data-table.sc-ir-dashboard-bookings-table p.sc-ir-dashboard-bookings-table{margin:0}.data-table.sc-ir-dashboard-bookings-table th.sc-ir-dashboard-bookings-table,.data-table.sc-ir-dashboard-bookings-table td.sc-ir-dashboard-bookings-table{vertical-align:middle;white-space:nowrap}@media (max-width: 768px){.sc-ir-dashboard-bookings-table-h{--ir-cell-padding:var(--wa-space-2xs) var(--wa-space-xs);font-size:var(--wa-font-size-s)}}`;

const IrDashboardBookingsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    bookings = [];
    /** Adds the variant-specific column: booked-on date for new bookings, status for cancellations. */
    variant = 'inHouse';
    emptyMessage;
    isSameGuest(booking, room) {
        const normalize = (g) => `${g?.first_name ?? ''}${g?.last_name ?? ''}`.replace(/\s+/g, '').toLowerCase();
        return !room?.guest || normalize(booking.guest) === normalize(room.guest);
    }
    renderExtraHeader() {
        switch (this.variant) {
            case 'newBookings':
                return h("th", null, t('Lcz_BookedOn', { fallback: 'Booked on' }));
            case 'cancellations':
                return h("th", null, t('Lcz_Status', { fallback: 'Status' }));
            default:
                return null;
        }
    }
    renderExtraCell(booking) {
        switch (this.variant) {
            case 'newBookings':
                return (h("td", null, h("ir-booked-on-cell", { bookedOn: booking.booked_on })));
            case 'cancellations':
                return (h("td", null, h("ir-status-activity-cell", { status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })));
            default:
                return null;
        }
    }
    renderRow(booking, room, index) {
        return (h("tr", { class: "ir-table-row", key: `${booking.booking_nbr}-${room.identifier ?? index}` }, h("td", null, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest, identifier: room.identifier }), !this.isSameGuest(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { checkIn: room.from_date, checkOut: room.to_date })), h("td", null, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status?.code, currencySymbol: booking.currency?.symbol, financial: booking.financial })), this.renderExtraCell(booking)));
    }
    render() {
        const bookings = this.bookings ?? [];
        const rows = bookings.flatMap(booking => (booking.rooms ?? []).map((room, index) => this.renderRow(booking, room, index)));
        const columnCount = this.variant === 'inHouse' ? 5 : 6;
        return (h(Host, { key: '00d7d316a5aa28d0209fb76945f7565a3ec78ac4' }, h("div", { key: 'c65937a032f6ebc1eb87d5158762c792aebb330f', class: "table--container" }, h("table", { key: '794a5d50da85cd2aa2a916408b29a8fd7dba3c04', class: "table data-table" }, h("thead", { key: 'ae55ac26e603e904cf3aba2e19436d17940ba65a' }, h("tr", { key: 'c05ea7a5aea59ba2508c0fc3cecd442e9ec6dca6' }, h("th", { key: 'c5bfaceaa1e4b0bbda73bc6d43649b46922d96a7' }, h("bdi", { key: 'b118c4c146693588d5ee081d21de6bd2dbdc4a57' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '72a6a51dbf9f344418fb239b894745c2adf51d55' }, h("p", { key: 'b67d543fb53bade87c2c1982a7585d78e1d356d1' }, h("bdi", { key: 'c4ba454d5a29549ab279ceb368ab090ab134685d' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), h("p", { key: '8c85b6b4a4e8be30ed4218a4eb00fa3e40a73d84' }, t('Lcz_GuestName', { fallback: 'Guest name' }))), h("th", { key: '4742d88303b47e8ead9f16e938edc2e42883085d' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '25ca8c0ca77111ee039a5f268e0fc60bf7dfcfe8' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: 'f23ed8c189848f0099f25342db9528325793cf16' }, t('Lcz_Balance', { fallback: 'Balance' })), this.renderExtraHeader())), h("tbody", { key: 'a111774154739fc880f77fee5200ac0d038ea63f' }, rows.length ? (rows) : (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", { message: this.emptyMessage })))))))));
    }
};
IrDashboardBookingsTable.style = tableCss() + irDashboardBookingsTableCss();

const irDashboardDateNavigatorCss = () => `.sc-ir-dashboard-date-navigator-h{display:block;--ease-out:cubic-bezier(0.23, 1, 0.32, 1)}.date-navigator.sc-ir-dashboard-date-navigator{block-size:100%;--spacing:var(--wa-space-m) var(--wa-space-s);transition:border-color 200ms ease;background:var(--wa-color-surface-default)}.date-navigator.sc-ir-dashboard-date-navigator::part(body),.date-navigator.sc-ir-dashboard-date-navigator [part~="body"]{flex:1 1 auto;display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-s);inline-size:100%;max-inline-size:16rem;margin-inline:auto}.date-navigator--today.sc-ir-dashboard-date-navigator .date-navigator__day.sc-ir-dashboard-date-navigator{color:var(--wa-color-brand-on-quiet)}.date-navigator__weekday.sc-ir-dashboard-date-navigator,.date-navigator__month.sc-ir-dashboard-date-navigator{font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-semibold);line-height:var(--wa-line-height-condensed);text-align:center;color:var(--wa-color-text-normal);text-box:trim-both cap alphabetic}.date-navigator__month.sc-ir-dashboard-date-navigator{font-weight:var(--wa-font-weight-normal);color:var(--wa-color-text-quiet)}.date-navigator__date.sc-ir-dashboard-date-navigator{display:flex;flex-direction:column;align-items:center;gap:var(--wa-space-s);text-align:center}.date-navigator__day.sc-ir-dashboard-date-navigator{font-size:3.5rem;font-weight:var(--wa-font-weight-semibold);line-height:1;font-variant-numeric:proportional-nums;text-box:trim-both cap alphabetic}.date-navigator__day--ends-in-one.sc-ir-dashboard-date-navigator{transform:translateX(0.05em)}.date-navigator__step.sc-ir-dashboard-date-navigator::part(base),.date-navigator__step.sc-ir-dashboard-date-navigator [part~="base"]{transition:background-color 150ms ease,     transform 160ms var(--ease-out)}.date-navigator__step.sc-ir-dashboard-date-navigator:not([disabled]):active::part(base),.date-navigator__step.sc-ir-dashboard-date-navigator:not([disabled]):active [part~="base"]{transform:scale(0.96)}[density='compact'].sc-ir-dashboard-date-navigator-h .date-navigator.sc-ir-dashboard-date-navigator,[density='tight'].sc-ir-dashboard-date-navigator-h .date-navigator.sc-ir-dashboard-date-navigator{--spacing:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-date-navigator-h .date-navigator__date.sc-ir-dashboard-date-navigator,[density='tight'].sc-ir-dashboard-date-navigator-h .date-navigator__date.sc-ir-dashboard-date-navigator{gap:var(--wa-space-xs)}[density='compact'].sc-ir-dashboard-date-navigator-h .date-navigator__day.sc-ir-dashboard-date-navigator{font-size:2.75rem}[density='tight'].sc-ir-dashboard-date-navigator-h .date-navigator__day.sc-ir-dashboard-date-navigator{font-size:2.25rem}@media (prefers-reduced-motion: reduce){.date-navigator.sc-ir-dashboard-date-navigator,.date-navigator__step.sc-ir-dashboard-date-navigator::part(base){transition:none}.date-navigator__step.sc-ir-dashboard-date-navigator:not([disabled]):active::part(base){transform:none}}.ir-flip-rtl.sc-ir-dashboard-date-navigator:dir(rtl){scale:-1 1}`;

const IrDashboardDateNavigator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChange = createEvent(this, "dateChange");
    }
    /** Selected day (`YYYY-MM-DD`). */
    date;
    /** How tightly the card is drawn; ir-dashboard steps it down when the desktop rail is short. */
    density = 'regular';
    /** Emitted with the new day when the user moves to the previous / next day. */
    dateChange;
    shift(days) {
        this.dateChange.emit(addDaysISO(this.date, days));
    }
    render() {
        const today = todayISO();
        const min = addDaysISO(today, -MAX_DAY_OFFSET);
        const max = addDaysISO(today, MAX_DAY_OFFSET);
        // Locale- and calendar-aware (Gregorian or Hijri), like every other displayed date.
        const dayOfMonth = formatDate(this.date, 'D');
        return (h(Host, { key: '5b52b3e0428d686f331da20622f325c0ef596ef2' }, h("wa-card", { key: '634f3fb0a00a7a7420acb8c18fd79602f037275a', class: `date-navigator${this.date === today ? ' date-navigator--today' : ''}`, appearance: "plain" }, h("wa-button", { key: '0862f2100796b261c8229cc9ae0c7572f4cf7b6f', class: "date-navigator__step", appearance: "plain", variant: "neutral", size: "l", disabled: this.date <= min, onClick: () => this.shift(-1) }, h("wa-icon", { key: '0efd73b76d589fa03f33fe5b1c993dff986a16d8', class: "ir-flip-rtl", name: "chevron-left", label: t('Lcz_GoToPreviousDay', { fallback: 'Previous day' }) })), h("time", { key: 'fabc863998f7cbf1b43aa7a09b2d3ba1aedb9911', class: "date-navigator__date", dateTime: this.date }, h("span", { key: 'c4af115b901c9d7e91ee0cd6e60bdb0b7b02ce21', class: "date-navigator__weekday" }, formatDate(this.date, 'dddd')), h("span", { key: 'c47f22299187a5e60d616544a7145556483ce8ba', class: { 'date-navigator__day': true, 'date-navigator__day--ends-in-one': dayOfMonth.endsWith('1') } }, dayOfMonth), h("span", { key: 'f7791ee4365e1c70d6586efa46bc80644f15d1dc', class: "date-navigator__month" }, formatDate(this.date, 'MMMM'))), h("wa-button", { key: 'c21707d51f0c7715d9e2eb65d63a6d92f546144d', class: "date-navigator__step", appearance: "plain", variant: "neutral", size: "l", disabled: this.date >= max, onClick: () => this.shift(1) }, h("wa-icon", { key: 'aa514f03cf0e2bb020618d5732d256b5f860bee2', class: "ir-flip-rtl", name: "chevron-right", label: t('Lcz_GoToNextDay', { fallback: 'Next day' }) })))));
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
        return (h(Host, { key: '8e1e44d14fcbb4efad789682be3a59ccd2c34b88' }, h("ir-departures-table", { key: '2f070500b9295b96daa3a10122894a919db91367', hidePagination: true, onCheckoutRoom: event => this.handleCheckoutRoom(event) }), h("ir-checkout-dialog", { key: '156f318fdde2410987d183d32e2fab5bc22ce267', booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), h("ir-invoice", { key: '286d4078c2dbdcce640cd37a2f1e7c7555f5031b', booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null, onInvoiceClose: event => this.handleInvoiceClose(event) })));
    }
};
IrDashboardDepartures.style = irDashboardDeparturesCss();

const irDashboardStatsCss = () => `.sc-ir-dashboard-stats-h{display:flex;flex-direction:column;gap:var(--wa-space-m)}.stats.sc-ir-dashboard-stats{flex:1 1 auto;--spacing:var(--wa-space-m);background:var(--wa-color-surface-default)}.stats.sc-ir-dashboard-stats::part(body),.stats.sc-ir-dashboard-stats [part~="body"]{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;gap:var(--wa-space-m)}.stats__ring.sc-ir-dashboard-stats,.stats__section.sc-ir-dashboard-stats,.stats__count.sc-ir-dashboard-stats,.stats__kpis.sc-ir-dashboard-stats{transition:opacity 150ms ease}.stats--loading.sc-ir-dashboard-stats{opacity:0.55}.stats__section.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:var(--wa-space-xs)}.stats__ring.sc-ir-dashboard-stats{align-self:center;--size:10.5rem;--track-width:0.75rem;--indicator-width:0.75rem;--track-color:var(--wa-color-neutral-fill-quiet);--indicator-color:var(--wa-color-success-fill-loud)}.stats__ring.sc-ir-dashboard-stats::part(indicator),.stats__ring.sc-ir-dashboard-stats [part~="indicator"]{stroke-dashoffset:calc(var(--circumference) - var(--percentage) * var(--circumference)) !important;transition-duration:280ms;transition-timing-function:cubic-bezier(0.77, 0, 0.175, 1)}.stats__ring-slot.sc-ir-dashboard-stats{display:flex;align-items:center;justify-content:center}.stats__ring-content.sc-ir-dashboard-stats{display:flex;flex-direction:column;align-items:center}.stats__ring-value.sc-ir-dashboard-stats{unicode-bidi:isolate;font-size:var(--wa-font-size-2xl);font-weight:var(--wa-font-weight-bold);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums}.stats__ring-label.sc-ir-dashboard-stats{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}@media (min-width: 992px){.stats__ring-slot.sc-ir-dashboard-stats{flex:1 1 0;min-block-size:3rem;max-block-size:11rem;container-type:size}.stats__ring.sc-ir-dashboard-stats{--size:clamp(3rem, 100cqmin, 11rem);--track-width:calc(var(--size) * 0.07);--indicator-width:calc(var(--size) * 0.07)}.stats__ring-slot.sc-ir-dashboard-stats .stats__skeleton--ring.sc-ir-dashboard-stats{inline-size:clamp(3rem, 100cqmin, 11rem);block-size:clamp(3rem, 100cqmin, 11rem)}.stats__ring-value.sc-ir-dashboard-stats{font-size:min(calc(var(--size) * 0.16), var(--wa-font-size-2xl))}.stats__ring-label.sc-ir-dashboard-stats{font-size:clamp(0.625rem, calc(var(--size) * 0.085), var(--wa-font-size-xs))}}.stats__list.sc-ir-dashboard-stats{display:flex;flex-direction:column;gap:0.375rem;margin:0;padding:0;list-style:none}.stats__count.sc-ir-dashboard-stats{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem;font-size:var(--wa-font-size-s)}.stats__swatch.sc-ir-dashboard-stats{flex:none;inline-size:15px;block-size:16px;border-radius:4px;background-color:var(--stats-swatch-color, var(--wa-color-brand-fill-loud));transform:skew(-22deg)}.stats__swatch--pending.sc-ir-dashboard-stats{border:1px dashed var(--wa-color-success-fill-loud);background-color:var(--wa-color-surface-default)}.stats__count-value.sc-ir-dashboard-stats{padding-inline-start:0.5rem;min-inline-size:2ch;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-bold);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal)}.stats__count.sc-ir-dashboard-stats:first-child .stats__count-value.sc-ir-dashboard-stats{font-size:var(--wa-font-size-l)}.stats__count-label.sc-ir-dashboard-stats{font-size:var(--wa-font-size-m);color:var(--wa-color-text-quiet)}.stats__revenue.sc-ir-dashboard-stats{flex:none;--spacing:var(--wa-space-m);background:var(--wa-color-surface-default)}.stats__kpis.sc-ir-dashboard-stats{display:grid;gap:var(--wa-space-m);margin:0;padding:0;list-style:none}.stats__kpi.sc-ir-dashboard-stats{display:grid;gap:var(--wa-space-2xs);min-inline-size:0}.stats__kpi-label.sc-ir-dashboard-stats{overflow:hidden;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-quiet);text-overflow:ellipsis;white-space:nowrap}.stats__kpi-value.sc-ir-dashboard-stats{direction:ltr;unicode-bidi:isolate;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-bold);line-height:var(--wa-line-height-condensed);font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal)}@media (min-width: 576px) and (max-width: 991px){.stats.sc-ir-dashboard-stats::part(body){display:grid;grid-template-columns:auto minmax(0, 1fr);align-items:center;gap:var(--wa-space-l)}.stats__kpis.sc-ir-dashboard-stats{grid-template-columns:repeat(3, minmax(0, 1fr))}.stats__section.sc-ir-dashboard-stats{align-self:stretch;justify-content:center}}.stats__skeleton.sc-ir-dashboard-stats{inline-size:70%;block-size:1.125rem;min-block-size:0}.stats__skeleton.sc-ir-dashboard-stats::part(indicator),.stats__skeleton.sc-ir-dashboard-stats [part~="indicator"]{border-radius:var(--wa-border-radius-s)}.stats__skeleton--kpi.sc-ir-dashboard-stats{inline-size:5rem;font-size:var(--wa-font-size-l);line-height:var(--wa-line-height-condensed);block-size:1lh}.stats__skeleton--ring.sc-ir-dashboard-stats{align-self:center;inline-size:10.5rem;block-size:10.5rem}.stats__skeleton--ring.sc-ir-dashboard-stats::part(indicator),.stats__skeleton--ring.sc-ir-dashboard-stats [part~="indicator"]{border-radius:var(--wa-border-radius-circle)}[density='spacious'].sc-ir-dashboard-stats-h .stats.sc-ir-dashboard-stats::part(body),[density='spacious'].sc-ir-dashboard-stats-h .stats.sc-ir-dashboard-stats [part~="body"]{gap:var(--wa-space-l)}[density='spacious'].sc-ir-dashboard-stats-h .stats__list.sc-ir-dashboard-stats{gap:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-stats-h,[density='tight'].sc-ir-dashboard-stats-h{gap:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-stats-h .stats.sc-ir-dashboard-stats,[density='compact'].sc-ir-dashboard-stats-h .stats__revenue.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__revenue.sc-ir-dashboard-stats{--spacing:var(--wa-space-s) var(--wa-space-m)}[density='compact'].sc-ir-dashboard-stats-h .stats.sc-ir-dashboard-stats::part(body),[density='compact'].sc-ir-dashboard-stats-h .stats.sc-ir-dashboard-stats [part~="body"],[density='tight'].sc-ir-dashboard-stats-h .stats.sc-ir-dashboard-stats::part(body),[density='tight'].sc-ir-dashboard-stats-h .stats.sc-ir-dashboard-stats [part~="body"]{gap:var(--wa-space-s)}[density='compact'].sc-ir-dashboard-stats-h .stats__list.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__list.sc-ir-dashboard-stats{gap:0.125rem}[density='compact'].sc-ir-dashboard-stats-h .stats__kpis.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__kpis.sc-ir-dashboard-stats{gap:var(--wa-space-s)}[density='tight'].sc-ir-dashboard-stats-h .stats__count-value.sc-ir-dashboard-stats,[density='tight'].sc-ir-dashboard-stats-h .stats__count-label.sc-ir-dashboard-stats{font-size:var(--wa-font-size-s)}[density='tight'].sc-ir-dashboard-stats-h .stats__count.sc-ir-dashboard-stats:first-child .stats__count-value.sc-ir-dashboard-stats{font-size:var(--wa-font-size-m)}@media (prefers-reduced-motion: reduce){.stats__ring.sc-ir-dashboard-stats,.stats__section.sc-ir-dashboard-stats,.stats__count.sc-ir-dashboard-stats,.stats__kpis.sc-ir-dashboard-stats{transition:none}.stats__skeleton.sc-ir-dashboard-stats::part(indicator){animation:none}.stats__ring.sc-ir-dashboard-stats::part(indicator){transition:none}}`;

/**
 * Calendar legend entry (igl-legend) each unit row's swatch copies, with the default colour as fallback.
 * Out-of-service units are blocks with status 004, which the calendar draws as "Blocked dates", so they share its swatch.
 * Available units have no legend entry and keep the brand colour.
 */
const UNIT_LEGEND = {
    'booked': { id: '2', fallback: '#45b16d' },
    'pending': { id: '3', fallback: '#FF9149' },
    'out-of-service': { id: '6', fallback: '#f34752' },
    'blocked': { id: '6', fallback: '#f34752' },
};
const IrDashboardStats = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
    /** The property's colour for a unit row's legend entry, so the swatch matches the calendar. */
    legendColor(tone) {
        const legend = UNIT_LEGEND[tone];
        if (!legend) {
            return undefined;
        }
        return calendar_data.property?.calendar_legends?.find(l => l.id?.toString() === legend.id)?.color ?? legend.fallback;
    }
    renderCount(value, label, tone, { loaded, refreshing }) {
        if (!loaded) {
            return (h("li", { class: "stats__count", "aria-hidden": "true" }, h("wa-skeleton", { effect: "pulse", class: "stats__skeleton" })));
        }
        const color = this.legendColor(tone);
        return (h("li", { class: `stats__count${refreshing ? ' stats--loading' : ''}` }, h("span", { class: `stats__swatch stats__swatch--${tone}`, style: color ? { '--stats-swatch-color': color } : undefined, "aria-hidden": "true" }), h("span", { class: `stats__count-value` }, formatCount(value ?? 0)), h("span", { class: "stats__count-label" }, label)));
    }
    /** One revenue figure in the revenue card; an `undefined` value shows a skeleton under the label. */
    renderKpi(label, value) {
        return (h("li", { class: "stats__kpi" }, h("span", { class: "stats__kpi-label" }, label), value === undefined ? (h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--kpi", "aria-hidden": "true" })) : (h("span", { class: "stats__kpi-value" }, formatAmount(this.currencySymbol, value)))));
    }
    renderRing() {
        const performance = this.performance;
        if (!performance) {
            return (h("div", { class: "stats__ring-slot" }, h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--ring", "aria-hidden": "true" })));
        }
        const occupancy = Math.min(Math.max(performance.occupancy, 0), 100);
        const occupancyLabel = t('Lcz_Occupancy', { fallback: 'Occupancy' });
        return (h("div", { class: "stats__ring-slot" }, h("wa-progress-ring", { class: `stats__ring${this.performanceLoading ? ' stats--loading' : ''}`, value: occupancy, label: occupancyLabel }, h("span", { class: "stats__ring-content" }, h("span", { class: "stats__ring-value" }, formatPercent(occupancy, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), h("span", { class: "stats__ring-label" }, occupancyLabel)))));
    }
    renderUnits() {
        const { units, performance, pendingUnits } = this;
        const calendar = { loaded: !!units, refreshing: this.unitsLoading };
        const stats = { loaded: !!performance, refreshing: this.performanceLoading };
        const pending = { loaded: pendingUnits != null, refreshing: this.pendingLoading };
        return (h("section", { class: "stats__section", "aria-label": t('Lcz_Units', { fallback: 'Units' }), "aria-busy": !units || !performance ? 'true' : null }, h("ul", { class: "stats__list" }, this.renderCount(units?.available, t('Lcz_AvailableUnits', { fallback: 'Available units' }), 'available', calendar), this.renderCount(performance?.bookedUnits, t('Lcz_BookedUnits', { fallback: 'Booked units' }), 'booked', stats), this.renderCount(pendingUnits, t('Lcz_Pending', { fallback: 'Pending' }), 'pending', pending), this.renderCount(units?.outOfService, t('Lcz_OutOfservice', { fallback: 'Out of service' }), 'out-of-service', calendar), this.renderCount(units?.blocked, t('Lcz_Blocked', { fallback: 'Blocked' }), 'blocked', calendar))));
    }
    renderRevenue() {
        const performance = this.performance;
        return (h("wa-card", { class: "stats__revenue", appearance: "plain" }, h("ul", { class: { 'stats__kpis': true, 'stats--loading': !!performance && this.performanceLoading }, "aria-label": t('Lcz_Revenue', { fallback: 'Revenue' }), "aria-busy": !performance ? 'true' : null }, this.renderKpi(t('Lcz_RoomRevenue', { fallback: 'Room revenue' }), performance?.roomRevenue), this.renderKpi(t('Lcz_Adr', { fallback: 'ADR' }), performance?.adr), this.renderKpi(t('Lcz_RevPar', { fallback: 'RevPAR' }), performance ? computeRevPar(performance.adr, performance.occupancy) : undefined))));
    }
    render() {
        return (h(Host, { key: '28403d8c7b396c1c1f1d3242380d51e744ca9cf7' }, h("wa-card", { key: '2562948d2756109f2921f0f5286e7b5aac2757aa', class: "stats", appearance: "plain" }, this.renderRing(), this.renderUnits()), this.renderRevenue()));
    }
};
IrDashboardStats.style = irDashboardStatsCss();

export { IrDashboardArrivals as ir_dashboard_arrivals, IrDashboardBookingsTable as ir_dashboard_bookings_table, IrDashboardDateNavigator as ir_dashboard_date_navigator, IrDashboardDepartures as ir_dashboard_departures, IrDashboardStats as ir_dashboard_stats };
