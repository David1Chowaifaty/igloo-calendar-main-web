import { h } from "@stencil/core";
import moment from "moment";
import Token from "../../models/Token";
import { RoomService } from "../../services/room.service";
import { DpReportService } from "../../services/dp-report.service";
import locales from "../../stores/locales.store";
import dp_report, { updateDpReportFilters } from "../../stores/dp_report.store";
import { mapBookingToDpRow } from "./types";
import { isOptimReadOnly } from "../../stores/calendar-data";
import { PropertyService } from "../../services/property/index";
export class IrDpReport {
    el;
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
        const from = moment().subtract(2, 'months').format('YYYY-MM-DD');
        const to = moment().format('YYYY-MM-DD');
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
    static get is() { return "ir-dp-report"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dp-report.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dp-report.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "''"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket",
                "defaultValue": "''"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "propertyid"
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "p"
            },
            "baseUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "base-url"
            },
            "userType": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "user-type"
            }
        };
    }
    static get states() {
        return {
            "isPageLoading": {},
            "activeTab": {},
            "activeBookingNbr": {},
            "activeGuestBookingNbr": {},
            "propertyId": {},
            "allowedProperties": {},
            "minAllowedDate": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "dpFiltersChange",
                "method": "handleDpFiltersChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "openBookingDetails",
                "method": "handleOpenBookingDetails",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "guestSelected",
                "method": "handleGuestSelected",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
