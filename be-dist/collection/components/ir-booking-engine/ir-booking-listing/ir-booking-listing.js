import { CommonService } from "../../../services/api/common.service";
import { PropertyService } from "../../../services/api/property.service";
import app_store from "../../../stores/app.store";
import { checkout_store } from "../../../stores/checkout.store";
import localizedWords from "../../../stores/localization.store";
import { checkAffiliate, getUserPrefernce } from "../../../utils/utils";
import { Fragment, Host, h } from "@stencil/core";
import axios from "axios";
export class IrBookingListing {
    constructor() {
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.propertyid = undefined;
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        this.language = undefined;
        this.headerShown = true;
        this.footerShown = true;
        this.maxPages = 10;
        this.perma_link = null;
        this.aName = null;
        this.showAllBookings = true;
        this.be = false;
        this.startScreen = { screen: 'bookings', params: null };
        this.aff = null;
        this.version = '2.0';
        this.hideGoogleSignIn = true;
        this.isLoading = false;
        this.token = undefined;
        this.bookingNumber = null;
        this.currentPage = 'bookings';
        this.selectedBooking = null;
        this.isAffiliate = false;
    }
    async componentWillLoad() {
        var _a;
        axios.defaults.baseURL = this.baseUrl;
        app_store.app_data.hideGoogleSignIn = this.hideGoogleSignIn;
        this.currentPage = this.startScreen.screen;
        this.selectedBooking = (_a = this.startScreen.params) !== null && _a !== void 0 ? _a : null;
        getUserPrefernce(this.language);
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            this.bookingNumber = isAuthenticated.params ? isAuthenticated.params.booking_nbr : null;
            this.token = isAuthenticated.token;
            app_store.app_data.token = this.token;
        }
        else {
            const token = await this.commonService.getBEToken();
            if (token) {
                app_store.app_data.token = token;
            }
        }
        this.initializeServices();
        if (!this.be) {
            this.initializeApp();
        }
    }
    handleAffiliateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.isAffiliate = checkAffiliate(this.aff.toLowerCase().trim()) !== null;
        }
    }
    handleScreenChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const screen = e.detail;
        if (!['booking-listing', 'user-profile'].includes(screen) || (this.currentPage === 'bookings' && screen === 'booking-listing')) {
            return;
        }
        this.currentPage = screen === 'booking-listing' ? 'bookings' : 'user-profile';
    }
    async fetchGuest() {
        try {
            this.isLoading = true;
            await this.propertyService.getExposedGuest();
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    async initializeApp() {
        var _a, _b;
        try {
            this.isLoading = true;
            let requests = [];
            app_store.app_data.aName = this.aName;
            app_store.app_data.perma_link = this.perma_link;
            app_store.app_data.property_id = this.propertyid;
            if (!this.be) {
                requests = [
                    ...requests,
                    this.commonService.getExposedLanguage(),
                    this.commonService.getCurrencies(),
                    this.propertyService.getExposedProperty({
                        id: this.propertyid,
                        language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || this.language || 'en',
                        aname: this.aName,
                        perma_link: this.perma_link,
                    }),
                ];
            }
            if (this.token) {
                requests = [...requests, this.propertyService.getExposedGuest()];
            }
            await Promise.all(requests);
            this.isAffiliate = checkAffiliate((_b = this.aff) === null || _b === void 0 ? void 0 : _b.toLowerCase().trim()) !== null;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initializeServices() {
        var _a, _b;
        console.log(this.token);
        this.propertyService.setToken((_a = this.token) !== null && _a !== void 0 ? _a : app_store.app_data.token);
        this.commonService.setToken((_b = this.token) !== null && _b !== void 0 ? _b : app_store.app_data.token);
    }
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.be) {
            return;
        }
        const { token, state, payload } = e.detail;
        if (state === 'success') {
            if (payload.method === 'direct') {
                this.selectedBooking = { email: payload.email, booking_nbr: payload.booking_nbr };
                this.bookingNumber = payload.booking_nbr;
                this.currentPage = 'booking-details';
            }
            this.token = token;
            this.initializeServices();
            this.fetchGuest();
        }
    }
    handleSignout() {
        if (this.be) {
            return;
        }
        this.token = null;
    }
    handleRouting(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const { params, route } = e.detail;
        this.currentPage = route;
        this.selectedBooking = params.booking ? { email: params === null || params === void 0 ? void 0 : params.booking.guest.email, booking_nbr: params.booking.booking_nbr } : null;
    }
    async openPrivacyPolicy(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.privacyPolicyRef) {
            this.privacyPolicyRef.openModal();
        }
    }
    renderPages() {
        switch (this.currentPage) {
            case 'bookings':
                return (h("ir-booking-overview", { aff: this.isAffiliate, token: this.token, propertyid: app_store.app_data.property_id, language: this.language, maxPages: this.maxPages, showAllBookings: this.showAllBookings, be: this.be }));
            case 'booking-details':
                return (h("div", { class: this.be ? '' : 'mx-auto px-4 lg:px-6' }, h("div", { class: "header-left" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        this.currentPage = 'bookings';
                        this.selectedBooking = null;
                        // this.bl_routing.emit({ route: 'booking' });
                    }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { class: "header-title" }, localizedWords.entries.Lcz_MyBookings)), h("ir-invoice", { locationShown: false, headerShown: false, headerMessageShown: false, footerShown: false, propertyId: app_store.app_data.property_id, perma_link: this.perma_link, aName: this.aName, language: this.language, baseUrl: this.baseUrl, email: this.selectedBooking.email, bookingNbr: this.selectedBooking.booking_nbr, status: 1, be: true })));
            case 'user-profile':
                if (this.be) {
                    return;
                }
                return (h("ir-user-profile", { be: this.be, user_data: {
                        id: checkout_store.userFormData.id,
                        email: checkout_store.userFormData.email,
                        first_name: checkout_store.userFormData.firstName,
                        last_name: checkout_store.userFormData.lastName,
                        country_id: checkout_store.userFormData.country_id,
                        mobile: checkout_store.userFormData.mobile_number,
                        country_phone_prefix: checkout_store.userFormData.country_phone_prefix.toString(),
                    } }));
            default:
                return (h("ir-booking-overview", { aff: this.isAffiliate, token: this.token, propertyid: app_store.app_data.property_id, language: this.language, maxPages: this.maxPages, showAllBookings: this.showAllBookings, be: this.be }));
        }
    }
    renderAuthScreen() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (this.isLoading) {
            return (h("main", { class: "flex min-h-screen flex-col" }, h("div", { class: "flex h-14 p-4" }, h("ir-skeleton", { class: " mx-auto h-10 w-80 " })), h("div", { class: "mx-auto flex h-full w-full max-w-md flex-1 flex-col gap-4 px-4 py-4 " }, h("ir-skeleton", { class: "mb-2 h-6 w-56 self-center" }), h("ir-skeleton", { class: "h-12 w-full" }), h("ir-skeleton", { class: "h-12 w-full" }), h("ir-skeleton", { class: "h-10 w-full rounded-full" }))));
        }
        return (h("main", { class: "flex min-h-screen flex-col" }, h("nav", { class: "ir-auth-nav" }, h("div", { class: "ir-auth-nav-container relative" }, h("div", { class: 'flex w-full items-center gap-4' }, h("ir-button", { class: 'bl-back-btn absolute', variants: "icon", iconName: "angle_left", onButtonClick: () => (window.location.href = `https://${app_store.property.perma_link}.bookingmystay.com`) }), h("div", { class: 'flex w-full flex-1 justify-center ' }, h("a", { "aria-label": "home", target: "_blank", href: `https://${app_store.app_data.affiliate ? (_a = app_store.app_data.affiliate.sites[0]) === null || _a === void 0 ? void 0 : _a.url : (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme.website}` }, h("img", { loading: "lazy", src: ((_c = app_store.app_data) === null || _c === void 0 ? void 0 : _c.affiliate) ? (_e = (_d = app_store.app_data) === null || _d === void 0 ? void 0 : _d.affiliate.sites[0]) === null || _e === void 0 ? void 0 : _e.logo : (_g = (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.space_theme) === null || _g === void 0 ? void 0 : _g.logo, alt: `${(_h = app_store.property) === null || _h === void 0 ? void 0 : _h.name}, ${(_j = app_store.property) === null || _j === void 0 ? void 0 : _j.country.name}`, class: "ir-nav-logo aspect-1" })))))), h("div", { class: "mx-auto flex h-full  w-full max-w-md flex-1 flex-col px-4 py-4 " }, h("ir-auth", { enableSignUp: false }))));
    }
    renderBookingsScreen() {
        var _a, _b, _c;
        if (this.isLoading) {
            return (h("div", { class: "grid h-screen w-full place-content-center" }, !this.be && h("ir-interceptor", null), h("div", { class: " flex h-screen flex-col gap-4 md:hidden" }, [...Array(5)].map(p => (h("div", { key: p, class: "block h-64 w-full animate-pulse rounded-md bg-gray-200" }))))));
        }
        return (h(Fragment, null, this.headerShown && (h("ir-nav", { isBookingListing: true, showBookingCode: false, showCurrency: false, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo })), h("div", { class: `mx-auto max-w-6xl ` }, this.renderPages()), this.footerShown && h("ir-footer", { version: this.version }), this.footerShown && h("ir-privacy-policy", { hideTrigger: true, ref: el => (this.privacyPolicyRef = el) })));
    }
    render() {
        return (h(Host, { key: '702d455caf124fa47e0e8917447057b0a8705381' }, !this.be && h("ir-interceptor", { key: '4e4586784daa34cc3d8c62f45ca48c98f3483936' }), !this.token ? this.renderAuthScreen() : this.renderBookingsScreen()));
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
                "reflect": false,
                "defaultValue": "'https://gateway.igloorooms.com/IRBE'"
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
            },
            "startScreen": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ screen: 'bookings' | 'booking-details'; params: unknown }",
                    "resolved": "{ screen: \"booking-details\" | \"bookings\"; params: unknown; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "{ screen: 'bookings', params: null }"
            },
            "aff": {
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
                "attribute": "aff",
                "reflect": false,
                "defaultValue": "null"
            },
            "version": {
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
                "attribute": "version",
                "reflect": false,
                "defaultValue": "'2.0'"
            },
            "hideGoogleSignIn": {
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
                "attribute": "hide-google-sign-in",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "token": {},
            "bookingNumber": {},
            "currentPage": {},
            "selectedBooking": {},
            "isAffiliate": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "aff",
                "methodName": "handleAffiliateChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "screenChanged",
                "method": "handleScreenChanged",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "authFinish",
                "method": "handleAuthFinish",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "signOut",
                "method": "handleSignout",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "bl_routing",
                "method": "handleRouting",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "openPrivacyPolicy",
                "method": "openPrivacyPolicy",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-listing.js.map
