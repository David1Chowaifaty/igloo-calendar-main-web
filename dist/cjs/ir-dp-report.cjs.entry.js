'use strict';

var index$2 = require('./index-Bg4VKYKR.js');
var moment = require('./moment-CdViwxPQ.js');
var Token = require('./Token-mN7PQKGF.js');
var room_service = require('./room.service-D0gXsBj-.js');
var axios = require('./axios-EresIryl.js');
var index = require('./index-CLqkDPTC.js');
var index$1 = require('./index-Dhj92quS.js');
var locales_store = require('./locales.store-B208i_tH.js');
var dp_report_store = require('./dp_report.store-BR6Xb9iQ.js');
var calendarData = require('./calendar-data-D7gl8C6U.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./utils-Bb-1iFW2.js');
require('./type-Dy9pVS4V.js');
require('./index-KxiFTvIk.js');

const GetDPBookingsReportParamsSchema = index.libExports.z.object({
    from_date: index$1.DateSchema,
    to_date: index$1.DateSchema,
    property_id: index$1.PropertyIdSchema,
});

class DpReportService {
    /** Callers are expected to have already resolved property_id/property_ids/channel for the user's privilege level. */
    async getDPBookingsReport(params) {
        const payload = GetDPBookingsReportParamsSchema.parse(params);
        const { data } = await axios.axios.post(`/Get_DP_Bookings_Report`, payload);
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
        index$2.registerInstance(this, hostRef);
    }
    get el() { return index$2.getElement(this); }
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
    token = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new index$1.PropertyService();
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
            if (!locales_store.locales.entries) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
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
        const from = moment.hooks().subtract(2, 'months').format('YYYY-MM-DD');
        const to = moment.hooks().format('YYYY-MM-DD');
        dp_report_store.updateDpReportFilters({ from, to });
        await this.fetchDpReport();
        if (dp_report_store.dp_report.rows.length === 0) {
            dp_report_store.updateDpReportFilters({ from: to, to });
            this.minAllowedDate = undefined;
            return;
        }
        const earliestDate = dp_report_store.dp_report.rows.reduce((earliest, row) => (!earliest || row.date < earliest ? row.date : earliest), undefined);
        if (earliestDate && earliestDate > from) {
            dp_report_store.updateDpReportFilters({ from: earliestDate });
            this.minAllowedDate = earliestDate;
        }
        else {
            this.minAllowedDate = undefined;
        }
    }
    async fetchDpReport() {
        dp_report_store.dp_report.isLoading = true;
        try {
            const params = {
                property_id: this.propertyId,
                from_date: dp_report_store.dp_report.filters.from,
                to_date: dp_report_store.dp_report.filters.to,
            };
            const { bookings, summary } = await this.dpReportService.getDPBookingsReport(params);
            dp_report_store.dp_report.rows = bookings.map(mapBookingToDpRow);
            dp_report_store.dp_report.summary = summary;
            dp_report_store.dp_report.tablePagination = { ...dp_report_store.dp_report.tablePagination, currentPage: 1 };
        }
        catch (error) {
            console.error('Error fetching DP report:', error);
        }
        finally {
            dp_report_store.dp_report.isLoading = false;
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
        return dp_report_store.dp_report.rows.find(r => r.booking_nbr === bookingNbr);
    }
    render() {
        if (this.isPageLoading) {
            return index$2.h("ir-loading-screen", null);
        }
        return (index$2.h("ir-page", { description: "The dynamic pricing effect is calculated at the time the booking is\ncreated and remains fixed thereafter, serving as an indicator of the additional profit generated or of\nthe incentive price reduction.", label: "Dynamic Pricing Effect", class: "dp-report__page" }, this.allowedProperties && (index$2.h("ir-autocomplete", { slot: "page-header", placeholder: "Change property", withExpandIcon: true, class: 'dp-report__property-select', value: this.allowedProperties.find(property => property.id === this.propertyId)?.name ?? '', "onCombobox-change": this.handlePropertyChange }, index$2.h("wa-icon", { slot: "start", name: "magnifying-glass" }), this.allowedProperties.map(property => (index$2.h("ir-autocomplete-option", { key: property.id, label: property.name, value: String(property.id) }, property.name))))), calendarData.isOptimReadOnly() && (index$2.h("wa-callout", { size: "s", variant: "danger", class: "dp-report__callout" }, index$2.h("wa-icon", { slot: "icon", name: "face-frown" }), index$2.h("div", { class: "dp-report__callout-header" }, index$2.h("b", null, "Potential Missed Profit"), index$2.h("wa-badge", { pill: true, variant: "danger" }, "SIMULATION")), index$2.h("p", { class: "dp-report__callout-text" }, "The figures below estimate the additional profit your hotel could have generated if Dynamic Pricing had been enabled during the selected period. Contact your account manager to subscribe."))), index$2.h("ir-dp-report-summary", null), index$2.h("wa-tab-group", { active: this.activeTab, activation: "manual", "onwa-tab-show": this.handleTabShow }, index$2.h("wa-tab", { panel: "chart" }, "Chart"), index$2.h("wa-tab", { panel: "bookings" }, "Bookings"), index$2.h("wa-tab-panel", { name: "chart" }, index$2.h("ir-dp-report-filters", { minDate: this.minAllowedDate }), index$2.h("ir-dp-report-chart", null)), index$2.h("wa-tab-panel", { name: "bookings" }, index$2.h("ir-dp-report-filters", { minDate: this.minAllowedDate }), index$2.h("ir-dp-report-table", null))), index$2.h("ir-booking-details-drawer", { open: !!this.activeBookingNbr, propertyId: this.propertyId, bookingNumber: this.activeBookingNbr, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.activeBookingNbr = null) }), index$2.h("ir-guest-info-drawer", { open: !!this.activeGuestBookingNbr, booking_nbr: this.activeGuestBookingNbr, email: this.findRow(this.activeGuestBookingNbr)?.raw.guest.email, language: this.language, onGuestInfoDrawerClosed: () => (this.activeGuestBookingNbr = null) })));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrDpReport.style = irDpReportCss();

exports.ir_dp_report = IrDpReport;
