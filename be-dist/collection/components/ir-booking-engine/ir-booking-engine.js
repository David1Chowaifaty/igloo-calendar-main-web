import { CommonService } from "../../services/api/common.service";
import { PropertyService } from "../../services/api/property.service";
import { h } from "@stencil/core";
import { format } from "date-fns";
import axios from "axios";
import booking_store, { updateRoomParams } from "../../stores/booking";
import app_store, { changeLocale, updateUserPreference } from "../../stores/app.store";
import { checkAffiliate, getUserPrefernce, matchLocale, setDefaultLocale } from "../../utils/utils";
import Stack from "../../models/stack";
import { v4 } from "uuid";
import { AvailabiltyService } from "../../services/app/availability.service";
import { checkout_store } from "../../stores/checkout.store";
export class IrBookingEngine {
    constructor() {
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.availabiltyService = new AvailabiltyService();
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTQ1NTQ5OTIsIkNMQUlNLTAxIjoiOGJpaUdjK21FQVE9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoicUxHWllZcVA3SzB5aENrRTFaY0tENm5TeFowNkEvQ2lPc1JrWUpYTHFhTEF5M3N0akltbU9CWkdDb080dDRyNVRiWjkxYnZQelFIQ2c1YlBGU2J3cm5HdjNsNjVVcjVLT3RnMmZQVWFnNHNEYmE3WTJkMDF4RGpDWUs2SFlGREhkcTFYTzBLdTVtd0NKeU5rWDFSeWZmSnhJdWdtZFBUeTZPWjk0RUVjYTJleWVSVzZFa0pYMnhCZzFNdnJ3aFRKRHF1cUxzaUxvZ3I0UFU5Y2x0MjdnQ2tJZlJzZ2lZbnpOK2szclZnTUdsQTUvWjRHekJWcHl3a0dqcWlpa0M5T0owWFUrdWJJM1dzNmNvSWEwSks4SWRqVjVaQ1VaZjZ1OGhBMytCUlpsUWlyWmFZVWZlVmpzU1FETFNwWFowYjVQY0FncE1EWVpmRGtWbGFscjRzZ1pRNVkwODkwcEp6dE16T0s2VTR5Z1FMQkdQbTlTSmRLY0ExSGU2MXl2YlhuIiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThBcklIUzg2aEpCQSJ9.ySJjLhWwUDeP4X8LIJcbsjO74y_UgMHwRDpNrCClndc';
        this.propertyId = undefined;
        this.baseUrl = undefined;
        this.injected = undefined;
        this.roomtype_id = null;
        this.redirect_url = null;
        this.perma_link = null;
        this.aName = null;
        this.fromDate = undefined;
        this.language = undefined;
        this.toDate = undefined;
        this.adultCount = undefined;
        this.childrenCount = undefined;
        this.cur = undefined;
        this.aff = undefined;
        this.stag = undefined;
        this.property = null;
        this.source = null;
        this.selectedLocale = undefined;
        this.currencies = undefined;
        this.languages = undefined;
        this.isLoading = false;
        this.router = new Stack();
        this.bookingListingScreenOptions = { params: null, screen: 'bookings' };
    }
    async componentWillLoad() {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = this.baseUrl;
        getUserPrefernce(this.language);
        if (this.property) {
            app_store.property = Object.assign({}, this.property);
        }
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            app_store.is_signed_in = true;
            this.token = isAuthenticated.token;
            app_store.app_data.token = this.token;
        }
        else {
            this.token = await this.commonService.getBEToken();
        }
    }
    handleTokenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.initializeApp();
        }
    }
    // @Watch('language')
    // handleLanguageChange(newValue: string, oldValue: string) {
    //   if (!this.languages) {
    //     return;
    //   }
    //   if (newValue !== oldValue) {
    //     this.modifyLanguage(newValue);
    //   }
    // }
    modifyLanguage(code) {
        var _a;
        if (!this.languages) {
            return;
        }
        changeLocale(((_a = this.languages.find(l => l.code.toLowerCase() === code)) === null || _a === void 0 ? void 0 : _a.direction) || 'LTR', matchLocale(code));
        updateUserPreference({
            language_id: code,
        });
    }
    handleCurrencyChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            updateUserPreference({
                currency_id: newValue,
            });
        }
    }
    initializeApp() {
        this.commonService.setToken(this.token);
        this.propertyService.setToken(this.token);
        app_store.app_data = {
            token: this.token,
            property_id: this.propertyId,
            injected: this.injected,
            roomtype_id: this.roomtype_id,
            redirect_url: this.redirect_url,
            affiliate: null,
            tag: this.stag,
            source: this.source,
        };
        this.initRequest();
    }
    async initRequest() {
        var _a, _b;
        this.isLoading = true;
        const p = JSON.parse(localStorage.getItem('user_preference'));
        let requests = [
            this.commonService.getCurrencies(),
            this.commonService.getExposedLanguages(),
            this.commonService.getExposedCountryByIp(),
            this.commonService.getExposedLanguage(),
            this.propertyService.getExposedProperty({ id: this.propertyId, language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en', aname: this.aName, perma_link: this.perma_link }),
            // ,
        ];
        // if (!this.property) {
        //   requests.push(
        //   );
        // }
        if (app_store.is_signed_in) {
            requests.push(this.propertyService.getExposedGuest());
        }
        const [_, currencies, languages] = await Promise.all(requests);
        this.currencies = currencies;
        this.languages = languages;
        if (!p) {
            if (this.language) {
                this.modifyLanguage(this.language);
            }
            setDefaultLocale({ currency: app_store.userDefaultCountry.currency });
        }
        app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { affiliate: checkAffiliate((_b = this.aff) === null || _b === void 0 ? void 0 : _b.toLowerCase().trim()) });
        // booking_store.roomTypes = [...roomtypes];
        this.isLoading = false;
    }
    handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        const selectedVariation = variations.find(variation => variation.adult_child_offering === value);
        if (!selectedVariation) {
            return;
        }
        updateRoomParams({ params: { selected_variation: { variation: selectedVariation, state: 'modified' } }, ratePlanId: rateplanId, roomTypeId });
    }
    handleNavigation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        app_store.currentPage = e.detail;
    }
    async handleResetBooking(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.resetBooking((_a = e.detail) !== null && _a !== void 0 ? _a : 'completeReset');
    }
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.log('auth finish');
        const { token, state, payload } = e.detail;
        console.log(token, state, payload);
        if (state === 'success') {
            if (payload.method === 'direct') {
                // this.bookingNumber = payload.booking_nbr;
                // this.token = token;
                this.bookingListingScreenOptions = {
                    screen: 'booking-details',
                    params: {
                        booking_nbr: payload.booking_nbr,
                        email: payload.email,
                    },
                };
                app_store.currentPage = 'booking-listing';
            }
        }
    }
    async resetBooking(resetType = 'completeReset') {
        var _a;
        let queries = [];
        if (resetType === 'discountOnly' && app_store.fetchedBooking) {
            queries.push(this.checkAvailability());
        }
        else if (resetType === 'completeReset') {
            queries = [
                ...queries,
                ...[
                    this.commonService.getExposedLanguage(),
                    this.propertyService.getExposedProperty({ id: app_store.app_data.property_id, language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en', aname: this.aName, perma_link: this.perma_link }, false),
                ],
            ];
            if (app_store.fetchedBooking) {
                queries.push(this.checkAvailability());
            }
        }
        await Promise.all(queries);
    }
    async checkAvailability() {
        this.identifier = v4();
        this.availabiltyService.initSocket(this.identifier);
        await this.propertyService.getExposedBookingAvailability({
            params: {
                propertyid: app_store.app_data.property_id,
                from_date: format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                to_date: format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                room_type_ids: [],
                adult_nbr: booking_store.bookingAvailabilityParams.adult_nbr,
                child_nbr: booking_store.bookingAvailabilityParams.child_nbr,
                language: app_store.userPreferences.language_id,
                currency_ref: app_store.userPreferences.currency_id,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
                promo_key: booking_store.bookingAvailabilityParams.coupon || '',
                is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
                agent_id: booking_store.bookingAvailabilityParams.agent || 0,
            },
            identifier: this.identifier,
            mode: 'default',
        });
    }
    renderScreens() {
        switch (app_store.currentPage) {
            case 'booking':
                return h("ir-booking-page", { adultCount: this.adultCount, childrenCount: this.childrenCount, fromDate: this.fromDate, toDate: this.toDate });
            case 'checkout':
                return h("ir-checkout-page", null);
            case 'invoice':
                return (h("ir-invoice", { headerShown: false, footerShown: false, propertyId: this.propertyId, perma_link: this.perma_link, aName: this.aName, language: this.language, baseUrl: this.baseUrl, email: app_store.invoice.email, bookingNbr: app_store.invoice.booking_number, status: 1, be: true }));
            case 'booking-listing':
                return (h("ir-booking-listing", { startScreen: this.bookingListingScreenOptions, showAllBookings: false, headerShown: false, footerShown: false, propertyid: this.propertyId, perma_link: this.perma_link, aName: this.aName, be: true, baseUrl: this.baseUrl, aff: this.aff }));
            case 'user-profile':
                return (h("ir-user-profile", { user_data: {
                        id: checkout_store.userFormData.id,
                        email: checkout_store.userFormData.email,
                        first_name: checkout_store.userFormData.firstName,
                        last_name: checkout_store.userFormData.lastName,
                        country_id: checkout_store.userFormData.country_id,
                        mobile: checkout_store.userFormData.mobile_number,
                        country_phone_prefix: checkout_store.userFormData.country_phone_prefix.toString(),
                    } }));
            default:
                return null;
        }
    }
    disconnectedCallback() {
        this.availabiltyService.disconnectSocket();
    }
    render() {
        var _a, _b, _c;
        if (this.isLoading) {
            return null;
        }
        return (h("main", { class: "relative  flex w-full flex-col space-y-5 " }, h("ir-interceptor", null), h("section", { class: "sticky top-0 z-50 m-0 w-full p-0 " }, h("ir-nav", { class: 'm-0 p-0', website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, currencies: this.currencies, languages: this.languages })), h("section", { class: "flex-1 px-4 lg:px-6" }, h("div", { class: "mx-auto max-w-6xl" }, this.renderScreens())), !this.injected && h("ir-footer", null)));
    }
    static get is() { return "ir-booking-engine"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-engine.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-engine.css"]
        };
    }
    static get properties() {
        return {
            "token": {
                "type": "string",
                "mutable": true,
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
                "attribute": "token",
                "reflect": false,
                "defaultValue": "'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTQ1NTQ5OTIsIkNMQUlNLTAxIjoiOGJpaUdjK21FQVE9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoicUxHWllZcVA3SzB5aENrRTFaY0tENm5TeFowNkEvQ2lPc1JrWUpYTHFhTEF5M3N0akltbU9CWkdDb080dDRyNVRiWjkxYnZQelFIQ2c1YlBGU2J3cm5HdjNsNjVVcjVLT3RnMmZQVWFnNHNEYmE3WTJkMDF4RGpDWUs2SFlGREhkcTFYTzBLdTVtd0NKeU5rWDFSeWZmSnhJdWdtZFBUeTZPWjk0RUVjYTJleWVSVzZFa0pYMnhCZzFNdnJ3aFRKRHF1cUxzaUxvZ3I0UFU5Y2x0MjdnQ2tJZlJzZ2lZbnpOK2szclZnTUdsQTUvWjRHekJWcHl3a0dqcWlpa0M5T0owWFUrdWJJM1dzNmNvSWEwSks4SWRqVjVaQ1VaZjZ1OGhBMytCUlpsUWlyWmFZVWZlVmpzU1FETFNwWFowYjVQY0FncE1EWVpmRGtWbGFscjRzZ1pRNVkwODkwcEp6dE16T0s2VTR5Z1FMQkdQbTlTSmRLY0ExSGU2MXl2YlhuIiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThBcklIUzg2aEpCQSJ9.ySJjLhWwUDeP4X8LIJcbsjO74y_UgMHwRDpNrCClndc'"
            },
            "propertyId": {
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
                "attribute": "property-id",
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
            "injected": {
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
                "attribute": "injected",
                "reflect": false
            },
            "roomtype_id": {
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
                "attribute": "roomtype_id",
                "reflect": false,
                "defaultValue": "null"
            },
            "redirect_url": {
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
                "attribute": "redirect_url",
                "reflect": false,
                "defaultValue": "null"
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
            "fromDate": {
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
                "attribute": "from-date",
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
            "toDate": {
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
                "attribute": "to-date",
                "reflect": false
            },
            "adultCount": {
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
                "attribute": "adult-count",
                "reflect": false
            },
            "childrenCount": {
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
                "attribute": "children-count",
                "reflect": false
            },
            "cur": {
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
                "attribute": "cur",
                "reflect": false
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
                "reflect": false
            },
            "stag": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "stag",
                "reflect": false
            },
            "property": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IExposedProperty | null",
                    "resolved": "IExposedProperty",
                    "references": {
                        "IExposedProperty": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IExposedProperty"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "null"
            },
            "source": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\r\n    code: string;\r\n    desciption: string;\r\n  } | null",
                    "resolved": "{ code: string; desciption: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "selectedLocale": {},
            "currencies": {},
            "languages": {},
            "isLoading": {},
            "router": {},
            "bookingListingScreenOptions": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "token",
                "methodName": "handleTokenChange"
            }, {
                "propName": "cur",
                "methodName": "handleCurrencyChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "routing",
                "method": "handleNavigation",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "resetBooking",
                "method": "handleResetBooking",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "authStatus",
                "method": "handleAuthFinish",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-engine.js.map
