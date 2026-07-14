import { h } from "@stencil/core";
import Token from "../../models/Token";
import { RoomService } from "../../services/room.service";
import { DpReportService } from "../../services/dp-report.service";
import locales from "../../stores/locales.store";
import dp_report from "../../stores/dp_report.store";
import { mapBookingToDpRow } from "./types";
import { isOptimReadOnly } from "../../stores/calendar-data";
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
            "activeGuestBookingNbr": {}
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
