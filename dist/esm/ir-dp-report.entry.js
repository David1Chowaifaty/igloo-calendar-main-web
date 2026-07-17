import { r as registerInstance, d as getElement, h } from './index-JbQjGrUG.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { R as RoomService } from './room.service-CQ8L3eOZ.js';
import { a as axios } from './axios-B50ozOIF.js';
import { l as libExports } from './index-DeW5X45W.js';
import { a as PropertyIdSchema, D as DateSchema, P as PropertyService } from './index-6po2_28m.js';
import { l as locales } from './locales.store-CV07I3Cw.js';
import { u as updateDpReportFilters, d as dp_report } from './dp_report.store-Rbm6d6xl.js';
import { i as isOptimReadOnly } from './calendar-data-CRLrGQXE.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './utils-AafVtJtY.js';
import './type-D7rOPtKA.js';
import './index-CR94o8Bs.js';

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

const irDpReportCss = () => `.sc-ir-dp-report-h{display:block}.dp-report__page.sc-ir-dp-report::part(description),.dp-report__page.sc-ir-dp-report [part~="description"]{font-size:var(--wa-font-size-s);margin-top:0.25rem}.dp-report__callout.sc-ir-dp-report{margin-bottom:1rem}.dp-report__callout-header.sc-ir-dp-report{display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem}.dp-report__callout-text.sc-ir-dp-report{margin:0}.dp-report__property-select.sc-ir-dp-report::part(listbox),.dp-report__property-select.sc-ir-dp-report [part~="listbox"]{max-height:300px}.dp-report__property-select.sc-ir-dp-report{width:100%}@media (min-width: 1024px){.dp-report__property-select.sc-ir-dp-report{width:300px}}`;

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
    propertyId;
    allowedProperties = null;
    minAllowedDate;
    token = new Token();
    roomService = new RoomService();
    propertyService = new PropertyService();
    dpReportService = new DpReportService();
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
            const [languageTexts, allowedProperties] = await Promise.all([
                this.roomService.fetchLanguage(this.language),
                this.propertyService.getActiveOptimExposedProperties(),
                await this.fetchInitialDpReport(),
            ]);
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            this.allowedProperties = allowedProperties && allowedProperties.length > 1 ? allowedProperties : null;
        }
        catch (error) {
            console.error('Error initializing DP report:', error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    /**
     * Loads the default 2-month lookback window, then checks whether the property's data
     * actually goes back that far. If the earliest returned booking is more recent than the
     * requested from-date, the property has less history than the default window — pin the
     * from-date and the date picker's minimum to that earliest date. Otherwise we can't tell
     * where the real history boundary is, so leave the picker unrestricted.
     */
    async fetchInitialDpReport() {
        const from = hooks().subtract(2, 'months').format('YYYY-MM-DD');
        const to = hooks().format('YYYY-MM-DD');
        updateDpReportFilters({ from, to });
        await this.fetchDpReport();
        if (dp_report.rows.length === 0) {
            updateDpReportFilters({ from: to, to });
            this.minAllowedDate = undefined;
            return;
        }
        const earliestDate = dp_report.rows.reduce((earliest, row) => (!earliest || row.date < earliest ? row.date : earliest), undefined);
        if (earliestDate && earliestDate > from) {
            updateDpReportFilters({ from: earliestDate });
            this.minAllowedDate = earliestDate;
        }
        else {
            this.minAllowedDate = undefined;
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
    handlePropertyChange = async (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        const newPropertyId = value ? Number(value) : undefined;
        if (!newPropertyId || newPropertyId === this.propertyId) {
            return;
        }
        this.propertyId = newPropertyId;
        this.activeBookingNbr = null;
        this.activeGuestBookingNbr = null;
        await this.fetchInitialDpReport();
    };
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
        return (h("ir-page", { description: "The dynamic pricing effect is calculated at the time the booking is\ncreated and remains fixed thereafter, serving as an indicator of the additional profit generated or of\nthe incentive price reduction.", label: "Dynamic Pricing Effect", class: "dp-report__page" }, this.allowedProperties && (h("ir-autocomplete", { slot: "page-header", placeholder: "Change property", withExpandIcon: true, class: 'dp-report__property-select', value: this.allowedProperties.find(property => property.id === this.propertyId)?.name ?? '', "onCombobox-change": this.handlePropertyChange }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), this.allowedProperties.map(property => (h("ir-autocomplete-option", { key: property.id, label: property.name, value: String(property.id) }, property.name))))), isOptimReadOnly() && (h("wa-callout", { size: "s", variant: "danger", class: "dp-report__callout" }, h("wa-icon", { slot: "icon", name: "face-frown" }), h("div", { class: "dp-report__callout-header" }, h("b", null, "Potential Missed Profit"), h("wa-badge", { pill: true, variant: "danger" }, "SIMULATION")), h("p", { class: "dp-report__callout-text" }, "The figures below estimate the additional profit your hotel could have generated if Dynamic Pricing had been enabled during the selected period. Contact your account manager to subscribe."))), h("ir-dp-report-summary", null), h("wa-tab-group", { active: this.activeTab, activation: "manual", "onwa-tab-show": this.handleTabShow }, h("wa-tab", { panel: "chart" }, "Chart"), h("wa-tab", { panel: "bookings" }, "Bookings"), h("wa-tab-panel", { name: "chart" }, h("ir-dp-report-filters", { minDate: this.minAllowedDate }), h("ir-dp-report-chart", null)), h("wa-tab-panel", { name: "bookings" }, h("ir-dp-report-filters", { minDate: this.minAllowedDate }), h("ir-dp-report-table", null))), h("ir-booking-details-drawer", { open: !!this.activeBookingNbr, propertyId: this.propertyId, bookingNumber: this.activeBookingNbr, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.activeBookingNbr = null) }), h("ir-guest-info-drawer", { open: !!this.activeGuestBookingNbr, booking_nbr: this.activeGuestBookingNbr, email: this.findRow(this.activeGuestBookingNbr)?.raw.guest.email, language: this.language, onGuestInfoDrawerClosed: () => (this.activeGuestBookingNbr = null) })));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrDpReport.style = irDpReportCss();

export { IrDpReport as ir_dp_report };
