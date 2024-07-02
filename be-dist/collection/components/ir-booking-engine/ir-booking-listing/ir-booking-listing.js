import { CommonService } from "../../../services/api/common.service";
import { PropertyService } from "../../../services/api/property.service";
import app_store from "../../../stores/app.store";
import { getUserPrefernce } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import axios from "axios";
export class IrBookingListing {
    constructor() {
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.propertyid = undefined;
        this.baseUrl = undefined;
        this.language = undefined;
        this.headerShown = true;
        this.footerShown = true;
        this.maxPages = 10;
        this.perma_link = null;
        this.aName = null;
        this.showAllBookings = true;
        this.be = false;
        this.isLoading = false;
        this.token = undefined;
        this.bookingNumber = null;
        this.page_mode = 'multi';
        this.currentPage = 'bookings';
        this.selectedBooking = null;
    }
    async componentWillLoad() {
        axios.defaults.baseURL = this.baseUrl;
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        getUserPrefernce();
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            this.bookingNumber = isAuthenticated.params ? isAuthenticated.params.booking_nbr : null;
            this.token = isAuthenticated.token;
            this.page_mode = isAuthenticated.params ? 'single' : 'multi';
        }
        else {
            const token = await this.commonService.getBEToken();
            if (token) {
                app_store.app_data.token = token;
            }
        }
        this.initializeServices();
        this.initializeApp();
    }
    async initializeApp() {
        var _a;
        try {
            this.isLoading = true;
            let requests = [this.propertyService.getExposedGuest()];
            if (!this.be) {
                requests = [
                    ...requests,
                    this.commonService.getExposedLanguage(),
                    this.propertyService.getExposedProperty({
                        id: this.propertyid,
                        language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en',
                        aname: this.aName,
                        perma_link: this.perma_link,
                    }),
                ];
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initializeServices() {
        this.propertyService.setToken(this.token);
        this.commonService.setToken(this.token);
    }
    handleRouting(e) {
        var _a;
        e.stopPropagation();
        e.stopImmediatePropagation();
        const { params, route } = e.detail;
        this.currentPage = route;
        this.selectedBooking = (_a = params === null || params === void 0 ? void 0 : params.booking) !== null && _a !== void 0 ? _a : null;
    }
    renderPages() {
        if (this.currentPage === 'booking-details') {
            return h("ir-booking-details-view", { booking: this.selectedBooking });
        }
        return (h("ir-booking-overview", { token: this.token, propertyid: this.propertyid, language: this.language, maxPages: this.maxPages, showAllBookings: this.showAllBookings, be: this.be }));
    }
    render() {
        var _a, _b, _c;
        if (!this.token) {
            return (h(Host, null, h("main", { class: "flex h-screen flex-col  justify-center" }, h("div", { class: "mx-auto w-full max-w-md px-4" }, h("ir-auth", { enableSignUp: false })))));
        }
        if (this.isLoading) {
            return (h("div", { class: "grid h-screen w-full place-content-center" }, h("div", { class: "page-loader" })));
        }
        return (h(Host, null, this.headerShown && (h("ir-nav", { isBookingListing: true, showBookingCode: false, showCurrency: false, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo })), this.renderPages(), this.footerShown && h("ir-footer", null)));
    }
    static get is() { return "ir-booking-listing"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
    static get properties() {
        return {
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
                "attribute": "propertyid",
                "reflect": false
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
                "attribute": "base-url",
                "reflect": false
            },
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
                "attribute": "language",
                "reflect": false
            },
            "headerShown": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "header-shown",
                "reflect": false,
                "defaultValue": "true"
            },
            "footerShown": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "footer-shown",
                "reflect": false,
                "defaultValue": "true"
            },
            "maxPages": {
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
                "attribute": "max-pages",
                "reflect": false,
                "defaultValue": "10"
            },
            "perma_link": {
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
                "attribute": "perma_link",
                "reflect": false,
                "defaultValue": "null"
            },
            "aName": {
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
                "attribute": "a-name",
                "reflect": false,
                "defaultValue": "null"
            },
            "showAllBookings": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "show-all-bookings",
                "reflect": false,
                "defaultValue": "true"
            },
            "be": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "be",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "token": {},
            "bookingNumber": {},
            "page_mode": {},
            "currentPage": {},
            "selectedBooking": {}
        };
    }
    static get listeners() {
        return [{
                "name": "bl_routing",
                "method": "handleRouting",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-listing.js.map
