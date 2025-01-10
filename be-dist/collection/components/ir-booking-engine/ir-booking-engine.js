import { CommonService } from "../../services/api/common.service";
import { PropertyService } from "../../services/api/property.service";
import { h } from "@stencil/core";
import { addYears, format } from "date-fns";
import booking_store, { modifyBookingStore } from "../../stores/booking";
import app_store, { changeLocale, updateUserPreference } from "../../stores/app.store";
import { checkAffiliate, checkGhs, getUserPreference, matchLocale, setDefaultLocale, validateAgentCode, validateCoupon } from "../../utils/utils";
import Stack from "../../models/stack";
import { checkout_store } from "../../stores/checkout.store";
import Token from "../../models/Token";
export class IrBookingEngine {
    constructor() {
        this.version = '2.59';
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.token = new Token();
        this.propertyId = undefined;
        this.injected = undefined;
        this.rt_id = null;
        this.rp_id = null;
        this.perma_link = null;
        this.p = null;
        this.checkin = undefined;
        this.checkout = undefined;
        this.language = undefined;
        this.adults = '2';
        this.child = undefined;
        this.ages = undefined;
        this.cur = undefined;
        this.aff = undefined;
        this.stag = undefined;
        this.property = null;
        this.source = null;
        this.hideGoogleSignIn = true;
        this.origin = null;
        this.view = 'default';
        this.coupon = undefined;
        this.loyalty = undefined;
        this.agent_code = undefined;
        this.selectedLocale = undefined;
        this.currencies = undefined;
        this.languages = undefined;
        this.isLoading = false;
        this.router = new Stack();
        this.bookingListingScreenOptions = { params: null, screen: 'bookings' };
    }
    async componentWillLoad() {
        console.log(`version:${this.version}`);
        getUserPreference(this.language);
        if (this.property) {
            app_store.property = Object.assign({}, this.property);
        }
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            app_store.is_signed_in = true;
            this.token.setToken(isAuthenticated.token);
        }
        else {
            const token = await this.commonService.getBEToken();
            this.token.setToken(token);
        }
        this.initializeApp();
    }
    handleSourceChange(newSource, oldSource) {
        if (newSource && (!oldSource || oldSource.code !== newSource.code)) {
            this.setSource(newSource);
        }
    }
    handleCurrencyChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            updateUserPreference({
                currency_id: newValue,
            });
        }
    }
    handleCouponChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            validateCoupon(newValue);
        }
    }
    handleLoyaltyChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.modifyLoyalty();
        }
    }
    handleAgentCodeChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            validateAgentCode(newValue);
        }
    }
    handleAppViewChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            app_store.app_data.view = newValue;
        }
    }
    setSource(newSource) {
        app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { source: newSource });
    }
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
    initializeApp() {
        var _a;
        app_store.app_data = {
            view: this.view,
            aName: this.p,
            origin: this.origin,
            perma_link: this.perma_link,
            displayMode: 'default',
            isFromGhs: checkGhs((_a = this.source) === null || _a === void 0 ? void 0 : _a.code, this.stag),
            token: '',
            property_id: this.propertyId,
            injected: this.injected,
            roomtype_id: this.rt_id,
            affiliate: null,
            tag: this.stag,
            source: this.source,
            hideGoogleSignIn: this.hideGoogleSignIn,
            stag: this.stag,
        };
        this.initRequest();
    }
    async initRequest() {
        var _a, _b, _c;
        this.isLoading = true;
        const p = JSON.parse(localStorage.getItem('user_preference'));
        let requests = [
            this.commonService.getCurrencies(),
            this.commonService.getExposedLanguages(),
            this.commonService.getExposedCountryByIp({
                id: (_a = this.propertyId) === null || _a === void 0 ? void 0 : _a.toString(),
                perma_link: this.perma_link,
                aname: this.p,
            }),
            this.commonService.getExposedLanguage(),
            this.propertyService.getExposedProperty({ id: this.propertyId, language: ((_b = app_store.userPreferences) === null || _b === void 0 ? void 0 : _b.language_id) || 'en', aname: this.p, perma_link: this.perma_link }),
            this.propertyService.getExposedNonBookableNights({
                porperty_id: this.propertyId,
                from_date: format(new Date(), 'yyyy-MM-dd'),
                to_date: format(addYears(new Date(), 1), 'yyyy-MM-dd'),
                perma_link: this.perma_link,
                aname: this.p,
            }),
        ];
        if (app_store.is_signed_in) {
            requests.push(this.propertyService.getExposedGuest());
        }
        const [currencies, languages] = await Promise.all(requests);
        this.currencies = currencies;
        this.languages = languages;
        if (!p) {
            if (this.language) {
                this.modifyLanguage(this.language.toLowerCase());
            }
            let currency = app_store.userDefaultCountry.currency;
            if (this.cur) {
                const newCurr = this.currencies.find(c => c.code.toLowerCase() === this.cur.toLowerCase());
                if (newCurr) {
                    currency = newCurr;
                }
            }
            setDefaultLocale({ currency });
        }
        this.checkAndApplyDiscounts();
        app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { affiliate: checkAffiliate((_c = this.aff) === null || _c === void 0 ? void 0 : _c.toLowerCase().trim()) });
        this.isLoading = false;
    }
    checkAndApplyDiscounts() {
        if (this.coupon) {
            validateCoupon(this.coupon);
        }
        if (this.loyalty) {
            this.modifyLoyalty();
        }
        if (this.agent_code) {
            validateAgentCode(this.agent_code);
        }
    }
    // private handleVariationChange(e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number) {
    //   e.stopImmediatePropagation();
    //   e.stopPropagation();
    //   const value = e.detail;
    //   const selectedVariation = variations.find(variation => variation.adult_child_offering === value);
    //   if (!selectedVariation) {
    //     return;
    //   }
    //   updateRoomParams({ params: { selected_variation: { variation: selectedVariation, state: 'modified' } }, ratePlanId: rateplanId, roomTypeId });
    // }
    modifyLoyalty() {
        modifyBookingStore('bookingAvailabilityParams', Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { coupon: null, loyalty: this.loyalty }));
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
    async openPrivacyPolicy(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.privacyPolicyRef.openModal();
    }
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { state, payload } = e.detail;
        if (state === 'success') {
            if (payload.method === 'direct') {
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
        if (resetType === 'partialReset' && app_store.fetchedBooking) {
            queries.push(this.checkAvailability());
        }
        else if (resetType === 'completeReset') {
            queries = [
                ...queries,
                ...[
                    this.commonService.getExposedLanguage(),
                    this.propertyService.getExposedProperty({ id: app_store.app_data.property_id, language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en', aname: this.p, perma_link: this.perma_link }, false),
                ],
            ];
            if (app_store.fetchedBooking) {
                queries.push(this.checkAvailability());
            }
        }
        await Promise.all(queries);
    }
    async checkAvailability() {
        var _a;
        console.warn('here');
        booking_store.resetBooking = false;
        await this.propertyService.getExposedBookingAvailability({
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
            agent_id: ((_a = booking_store.bookingAvailabilityParams.agent) === null || _a === void 0 ? void 0 : _a.id) || 0,
            is_in_affiliate_mode: !!app_store.app_data.affiliate,
            affiliate_id: app_store.app_data.affiliate ? app_store.app_data.affiliate.id : null,
        });
    }
    renderScreens() {
        var _a;
        switch (app_store.currentPage) {
            case 'booking':
                return h("ir-booking-page", { adultCount: this.adults, childrenCount: this.child, ages: this.ages, fromDate: this.checkin, toDate: this.checkout });
            case 'checkout':
                return h("ir-checkout-page", null);
            case 'invoice':
                return (h("ir-invoice", { version: this.version, headerShown: false, footerShown: false, propertyId: this.propertyId, perma_link: this.perma_link, aName: this.p, language: (_a = this.language) === null || _a === void 0 ? void 0 : _a.toLowerCase(), baseUrl: this.baseUrl, email: app_store.invoice.email, bookingNbr: app_store.invoice.booking_number, status: 1, be: true }));
            case 'booking-listing':
                return (h("ir-booking-listing", { version: this.version, startScreen: this.bookingListingScreenOptions, showAllBookings: false, headerShown: false, footerShown: false, propertyid: app_store.app_data.property_id, perma_link: this.perma_link, aName: this.p, be: true, baseUrl: this.baseUrl, aff: this.aff }));
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
    render() {
        var _a, _b, _c;
        if (this.isLoading) {
            return h("ir-home-loader", null);
        }
        return (h("main", { class: "relative  flex w-full flex-col space-y-5 " }, h("ir-interceptor", null), h("section", { class: `${this.injected ? '' : 'sticky top-0 z-20'}  m-0 w-full p-0 ` }, h("ir-nav", { class: 'm-0 p-0', website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, currencies: this.currencies, languages: this.languages })), h("section", { class: "flex-1 px-4 lg:px-6" }, h("div", { class: "mx-auto max-w-6xl" }, this.renderScreens())), h("ir-privacy-policy", { ref: el => (this.privacyPolicyRef = el), hideTrigger: true }), !this.injected && h("ir-footer", { version: this.version })));
    }
    static get is() { return "ir-be"; }
    static get encapsulation() { return "shadow"; }
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
            "rt_id": {
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
                "attribute": "rt_id",
                "reflect": false,
                "defaultValue": "null"
            },
            "rp_id": {
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
                "attribute": "rp_id",
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
                "attribute": "p",
                "reflect": false,
                "defaultValue": "null"
            },
            "checkin": {
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
                "attribute": "checkin",
                "reflect": false
            },
            "checkout": {
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
                "attribute": "checkout",
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
            "adults": {
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
                "attribute": "adults",
                "reflect": false,
                "defaultValue": "'2'"
            },
            "child": {
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
                "attribute": "child",
                "reflect": false
            },
            "ages": {
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
                "attribute": "ages",
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
                    "original": "TSource | null",
                    "resolved": "{ code: string; description: string; }",
                    "references": {
                        "TSource": {
                            "location": "import",
                            "path": "@/stores/app.store",
                            "id": "src/stores/app.store.ts::TSource"
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
            },
            "origin": {
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
                "attribute": "origin",
                "reflect": false,
                "defaultValue": "null"
            },
            "view": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'extended' | 'default'",
                    "resolved": "\"default\" | \"extended\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "view",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "coupon": {
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
                "attribute": "coupon",
                "reflect": false
            },
            "loyalty": {
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
                "attribute": "loyalty",
                "reflect": false
            },
            "agent_code": {
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
                "attribute": "agent_code",
                "reflect": false
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
                "propName": "source",
                "methodName": "handleSourceChange"
            }, {
                "propName": "cur",
                "methodName": "handleCurrencyChange"
            }, {
                "propName": "coupon",
                "methodName": "handleCouponChange"
            }, {
                "propName": "loyalty",
                "methodName": "handleLoyaltyChange"
            }, {
                "propName": "agent_code",
                "methodName": "handleAgentCodeChange"
            }, {
                "propName": "view",
                "methodName": "handleAppViewChange"
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
                "name": "openPrivacyPolicy",
                "method": "openPrivacyPolicy",
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
