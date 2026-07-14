import { r as registerInstance, d as getElement, h } from './index-Nexq2OjX.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { R as RoomService } from './room.service-6cGJ6nq0.js';
import { a as axios } from './axios-B50ozOIF.js';
import { l as libExports } from './index-DeW5X45W.js';
import { l as locales } from './locales.store-flvFxs7J.js';
import { d as dp_report } from './dp_report.store-dddXCD_w.js';
import { i as isOptimReadOnly } from './calendar-data-CPCc-_Kx.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-BX-r5OtJ.js';
import './moment-Mki5YqAR.js';

const DateSchema = libExports.z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
    .refine(value => {
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}, 'Invalid date');
const PropertyIdSchema = libExports.z.number();
libExports.z.string();

const GetDPBookingsReportParamsSchema = libExports.z.object({
    from_date: DateSchema,
    to_date: DateSchema,
    property_id: PropertyIdSchema,
});

class DpReportService {
    /** Callers are expected to have already resolved property_id/property_ids/channel for the user's privilege level. */
    async getDPBookingsReport(params) {
        const payload = GetDPBookingsReportParamsSchema.parse(params);
        const { data } = await axios.post(`/Get_DP_Bookings_Report`, payload);
        return { bookings: [...data.My_Result.bookings], summary: data.My_Result.summary };
    }
}

function getExtraValue(booking, key) {
    const found = booking.extras?.find(e => e.key === key);
    const num = Number(found?.value);
    return Number.isFinite(num) ? num : 0;
}
function mapBookingToDpRow(booking) {
    return {
        booking_nbr: booking.booking_nbr,
        date: booking.booked_on?.date ?? booking.from_date,
        currencySymbol: booking.currency?.symbol ?? '$',
        accommodationGross: getExtraValue(booking, 'DP_INITIAL_ACCOMODATION_GROSS'),
        optimBaseGross: getExtraValue(booking, 'DP_OPTIM_BASE_GROSS'),
        inventoryBaseGross: getExtraValue(booking, 'DP_INVENTORY_BASE_GROSS'),
        profit: booking.profit,
        raw: booking,
    };
}

const irDpReportCss = () => `.sc-ir-dp-report-h{display:block}.dp-report__page.sc-ir-dp-report::part(description),.dp-report__page.sc-ir-dp-report [part~="description"]{font-size:var(--wa-font-size-s);margin-top:0.25rem}.dp-report__callout.sc-ir-dp-report{margin-bottom:1rem}.dp-report__callout-header.sc-ir-dp-report{display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem}.dp-report__callout-text.sc-ir-dp-report{margin:0}`;

const IrDpReport = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    userType;
    isPageLoading = true;
    activeTab = 'chart';
    activeBookingNbr = null;
    activeGuestBookingNbr = null;
    token = new Token();
    roomService = new RoomService();
    dpReportService = new DpReportService();
    propertyId;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async handleDpFiltersChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchDpReport();
    }
    handleOpenBookingDetails(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.activeBookingNbr = e.detail;
    }
    handleGuestSelected(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.activeGuestBookingNbr = e.detail;
    }
    async initializeApp() {
        this.isPageLoading = true;
        try {
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.propertyId = propertyId;
            const languageTexts = await this.roomService.fetchLanguage(this.language);
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            await this.fetchDpReport();
        }
        catch (error) {
            console.error('Error initializing DP report:', error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async fetchDpReport() {
        dp_report.isLoading = true;
        try {
            const params = {
                property_id: this.propertyId,
                from_date: dp_report.filters.from,
                to_date: dp_report.filters.to,
            };
            const { bookings, summary } = await this.dpReportService.getDPBookingsReport(params);
            dp_report.rows = bookings.map(mapBookingToDpRow);
            dp_report.summary = summary;
            dp_report.tablePagination = { ...dp_report.tablePagination, currentPage: 1 };
        }
        catch (error) {
            console.error('Error fetching DP report:', error);
        }
        finally {
            dp_report.isLoading = false;
        }
    }
    handleTabShow = (e) => {
        this.activeTab = e.detail.name;
    };
    findRow(bookingNbr) {
        if (!bookingNbr) {
            return undefined;
        }
        return dp_report.rows.find(r => r.booking_nbr === bookingNbr);
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h("ir-page", { description: "The dynamic pricing effect is calculated at the time the booking is\ncreated and remains fixed thereafter, serving as an indicator of the additional profit generated or of\nthe incentive price reduction.", label: "Dynamic Pricing Effect", class: "dp-report__page" }, isOptimReadOnly() && (h("wa-callout", { size: "s", variant: "danger", class: "dp-report__callout" }, h("wa-icon", { slot: "icon", name: "face-frown" }), h("div", { class: "dp-report__callout-header" }, h("b", null, "Potential Missed Profit"), h("wa-badge", { pill: true, variant: "danger" }, "SIMULATION")), h("p", { class: "dp-report__callout-text" }, "The figures below estimate the additional profit your hotel could have generated if Dynamic Pricing had been enabled during the selected period. Contact your account manager to subscribe."))), h("ir-dp-report-summary", null), h("wa-tab-group", { active: this.activeTab, activation: "manual", "onwa-tab-show": this.handleTabShow }, h("wa-tab", { panel: "chart" }, "Chart"), h("wa-tab", { panel: "bookings" }, "Bookings"), h("wa-tab-panel", { name: "chart" }, h("ir-dp-report-filters", null), h("ir-dp-report-chart", null)), h("wa-tab-panel", { name: "bookings" }, h("ir-dp-report-filters", null), h("ir-dp-report-table", null))), h("ir-booking-details-drawer", { open: !!this.activeBookingNbr, propertyId: this.propertyId, bookingNumber: this.activeBookingNbr, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.activeBookingNbr = null) }), h("ir-guest-info-drawer", { open: !!this.activeGuestBookingNbr, booking_nbr: this.activeGuestBookingNbr, email: this.findRow(this.activeGuestBookingNbr)?.raw.guest.email, language: this.language, onGuestInfoDrawerClosed: () => (this.activeGuestBookingNbr = null) })));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrDpReport.style = irDpReportCss();

export { IrDpReport as ir_dp_report };
