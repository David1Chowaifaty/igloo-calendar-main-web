var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { h } from "@stencil/core";
import { ExposedBookingAvailability } from "./availability";
import { ZodError } from "zod";
import { onAppDataChange } from "../../../../stores/app.store";
import { PropertyService } from "../../../../services/api/property.service";
import app_store from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
import localizedWords from "../../../../stores/localization.store";
import { QueryStringValidator } from "../../../../validators/querystring.validator";
import { calculateInfantNumber, modifyQueryParam } from "../../../../utils/utils";
import moment from "moment/min/moment-with-locales";
export class IrAvailabilityHeader {
    constructor() {
        var _a;
        this.ages = '';
        this.target = null;
        this.isLoading = false;
        this.exposedBookingAvailabilityParams = {
            adult_nbr: 2,
            child_nbr: 0,
            currency_ref: 'USD',
            infant_nbr: 0,
            language: 'en',
            room_type_ids: [],
            propertyid: 42,
            is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
            promo_key: booking_store.bookingAvailabilityParams.coupon || '',
            is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
            agent_id: ((_a = booking_store.bookingAvailabilityParams.agent) === null || _a === void 0 ? void 0 : _a.id) || 0,
        };
        this.errorCause = null;
        this.popoverInstance = null;
        this.propertyService = new PropertyService();
        this.validator = new QueryStringValidator();
    }
    componentWillLoad() {
        const { property_id } = app_store.app_data;
        const validatedFromDate = this.validator.validateCheckin(this.fromDate);
        this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { adult_nbr: this.setDefaultAdultCount(), child_nbr: this.setDefaultChildCount(), from_date: validatedFromDate ? moment(this.fromDate, 'YYYY-MM-DD') : null, to_date: this.validator.validateCheckout(this.toDate, validatedFromDate) ? moment(this.toDate, 'YYYY-MM-DD') : null });
        if (booking_store.bookingAvailabilityParams.from_date) {
            this.exposedBookingAvailabilityParams.from_date = moment(booking_store.bookingAvailabilityParams.from_date);
            this.exposedBookingAvailabilityParams.to_date = moment(booking_store.bookingAvailabilityParams.to_date);
        }
        if (booking_store.bookingAvailabilityParams.adult_nbr) {
            this.exposedBookingAvailabilityParams.adult_nbr = booking_store.bookingAvailabilityParams.adult_nbr;
            this.exposedBookingAvailabilityParams.child_nbr = booking_store.bookingAvailabilityParams.child_nbr;
        }
        this.changeExposedAvailabilityParams({
            propertyid: property_id,
            language: app_store.userPreferences.language_id,
            currency_ref: app_store.userPreferences.currency_id,
        });
        if (booking_store.childrenAges.length == 0) {
            booking_store.childrenAges = [...Array(this.exposedBookingAvailabilityParams.child_nbr)].fill('');
        }
        this.processAges();
        onAppDataChange('userPreferences', async (newValue) => {
            this.changeExposedAvailabilityParams({
                language: newValue.language_id,
                currency_ref: newValue.currency_id,
            });
            try {
                if (app_store.currentPage === 'booking') {
                    this.resetBooking.emit(null);
                }
            }
            catch (error) {
                console.error(error);
            }
        });
        this.recheckAvailability();
    }
    handleAgesChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.processAges();
        }
    }
    handleFromDateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (this.validator.validateCheckin(newValue)) {
                this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { from_date: moment(newValue, 'YYYY-MM-DD') });
                if (this.fromDate && this.toDate && !this.validator.validateAdultCount(this.adultCount)) {
                    this.checkAvailability();
                }
            }
        }
    }
    handleToDateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            const validatedFromDate = this.validator.validateCheckin(this.fromDate);
            if (validatedFromDate) {
                if (this.validator.validateCheckout(newValue, validatedFromDate)) {
                    this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { to_date: moment(newValue, 'YYYY-MM-DD') });
                    this.recheckAvailability();
                }
            }
        }
    }
    handleChildrenCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (!this.validator.validateChildrenCount(newValue)) {
                this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { child_nbr: +newValue });
                booking_store.childrenAges = [...Array(this.exposedBookingAvailabilityParams.child_nbr)].fill('');
                this.recheckAvailability();
            }
        }
    }
    handleAdultCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (!this.validator.validateAdultCount(newValue)) {
                this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { adult_nbr: +newValue });
                this.recheckAvailability();
            }
        }
    }
    handleDateChange(e) {
        var _a, _b, _c, _d;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        if (end) {
            this.changeExposedAvailabilityParams({
                from_date: moment(start).locale('en'),
                to_date: moment(end).locale('en'),
            });
        }
        else if (this.exposedBookingAvailabilityParams.to_date && !end) {
            this.changeExposedAvailabilityParams({
                from_date: moment(start).locale('en'),
                to_date: null,
            });
        }
        else {
            this.changeExposedAvailabilityParams({ from_date: moment(start).locale('en') });
        }
        modifyQueryParam('checkin', (_b = (_a = this.exposedBookingAvailabilityParams.from_date) === null || _a === void 0 ? void 0 : _a.locale('en')) === null || _b === void 0 ? void 0 : _b.format('YYYY-MM-DD'));
        modifyQueryParam('checkout', (_d = (_c = this.exposedBookingAvailabilityParams.to_date) === null || _c === void 0 ? void 0 : _c.locale('en')) === null || _d === void 0 ? void 0 : _d.format('YYYY-MM-DD'));
        if (!!this.exposedBookingAvailabilityParams.adult_nbr &&
            !!this.exposedBookingAvailabilityParams.from_date &&
            !!this.exposedBookingAvailabilityParams.to_date &&
            app_store.fetchedBooking) {
            this.checkAvailability();
        }
    }
    handleAdultChildChange(e) {
        var _a, _b;
        e.stopPropagation();
        e.stopImmediatePropagation();
        const { adult_nbr, child_nbr, childrenAges, infant_nbr } = e.detail;
        booking_store.childrenAges = [...childrenAges];
        this.changeExposedAvailabilityParams({ adult_nbr, child_nbr, infant_nbr });
        modifyQueryParam('adults', (_a = this.exposedBookingAvailabilityParams.adult_nbr) === null || _a === void 0 ? void 0 : _a.toString());
        modifyQueryParam('children', (_b = this.exposedBookingAvailabilityParams.child_nbr) === null || _b === void 0 ? void 0 : _b.toString());
        if (infant_nbr) {
            modifyQueryParam('ages', encodeURIComponent(childrenAges.join('_')));
        }
    }
    setDefaultAdultCount() {
        if (this.validator.validateAdultCount(this.adultCount)) {
            return 2;
        }
        const adCountNumber = Number(this.adultCount);
        return adCountNumber > app_store.property.adult_child_constraints.adult_max_nbr ? app_store.property.adult_child_constraints.adult_max_nbr : adCountNumber;
    }
    setDefaultChildCount() {
        if (this.validator.validateChildrenCount(this.childrenCount)) {
            return 0;
        }
        const childCountNumber = Number(this.childrenCount);
        return childCountNumber > app_store.property.adult_child_constraints.child_max_nbr ? app_store.property.adult_child_constraints.child_max_nbr : childCountNumber;
    }
    recheckAvailability() {
        if (!this.fromDate || !this.toDate || !this.adultCount) {
            return;
        }
        const isValidFromDate = this.validator.validateCheckin(this.fromDate);
        const isValidToDate = this.validator.validateCheckout(this.toDate, isValidFromDate);
        const isValidAdultCount = this.validator.validateAdultCount(this.adultCount);
        if (!isValidAdultCount && isValidFromDate && isValidToDate) {
            this.checkAvailability();
        }
    }
    processAges() {
        if (this.exposedBookingAvailabilityParams.child_nbr === 0) {
            return;
        }
        if (this.validator.validateAges(this.ages)) {
            const ages = this.ages.split('_');
            ages.slice(0, this.exposedBookingAvailabilityParams.child_nbr + 1).forEach((age, index) => {
                booking_store.childrenAges[index] = age.toString();
            });
            const infant_nbr = calculateInfantNumber(booking_store.childrenAges);
            this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), { infant_nbr });
        }
        if (this.exposedBookingAvailabilityParams.child_nbr > 0 && booking_store.childrenAges.some(c => c === '')) {
            setTimeout(() => {
                var _a;
                (_a = this.personCounter) === null || _a === void 0 ? void 0 : _a.open();
            }, 100);
        }
    }
    async checkAvailability() {
        var _a;
        const params = ExposedBookingAvailability.parse(this.exposedBookingAvailabilityParams);
        if (app_store.app_data.injected) {
            const { from_date, to_date, adult_nbr, child_nbr, infant_nbr } = params;
            const fromDate = `checkin=${from_date}`;
            const toDate = `checkout=${to_date}`;
            const adults = `adults=${adult_nbr}`;
            const children = child_nbr > 0 ? `children=${child_nbr}` : '';
            const affiliate = app_store.app_data.affiliate ? `aff=${app_store.app_data.affiliate.afname}` : '';
            const currency = `cur=${app_store.userPreferences.currency_id}`;
            const language = `lang=${app_store.userPreferences.language_id}`;
            const loyalty = booking_store.bookingAvailabilityParams.loyalty ? 'loyalty=true' : '';
            const promo_key = booking_store.bookingAvailabilityParams.coupon ? `promo=${booking_store.bookingAvailabilityParams.coupon}` : '';
            const agent = booking_store.bookingAvailabilityParams.agent ? `agent=${booking_store.bookingAvailabilityParams.agent}` : '';
            const ages = infant_nbr > 0 && !booking_store.childrenAges.every(c => c === '') ? `ages=${booking_store.childrenAges.join('_')}` : '';
            // const queryParams = [fromDate, toDate, adults, children, affiliate, language, currency, loyalty, promo_key, agent];
            const queryParams = [fromDate, toDate, adults, ages, children, affiliate, language, currency, loyalty, promo_key, agent];
            const queryString = queryParams.filter(param => param !== '').join('&');
            return (location.href = `https://${app_store.property.perma_link}.bookingmystay.com?${queryString}`);
        }
        if (booking_store.childrenAges.length > 0 && booking_store.childrenAges.some(c => c === '') && this.exposedBookingAvailabilityParams.child_nbr > 0) {
            if (!this.errorCause) {
                this.errorCause = [];
            }
            console.log('error');
            this.errorCause.push('adult_child');
            return;
        }
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { from_date: params.from_date, to_date: params.to_date, adult_nbr: params.adult_nbr, child_nbr: params.child_nbr });
        this.scrollToRoomType.emit(null);
        booking_store.resetBooking = true;
        const _b = this.exposedBookingAvailabilityParams, { infant_nbr } = _b, rest = __rest(_b, ["infant_nbr"]);
        await this.propertyService.getExposedBookingAvailability(Object.assign(Object.assign({}, rest), { child_nbr: this.exposedBookingAvailabilityParams.child_nbr,
            // child_nbr: this.exposedBookingAvailabilityParams.child_nbr - this.exposedBookingAvailabilityParams.infant_nbr,
            promo_key: booking_store.bookingAvailabilityParams.coupon || '', is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false, agent_id: ((_a = booking_store.bookingAvailabilityParams.agent) === null || _a === void 0 ? void 0 : _a.id) || 0, is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon, is_in_affiliate_mode: !!app_store.app_data.affiliate, affiliate_id: app_store.app_data.affiliate ? app_store.app_data.affiliate.id : null }));
        app_store.fetchedBooking = true;
    }
    async handleCheckAvailability() {
        try {
            this.isLoading = true;
            await this.checkAvailability();
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.error(error.errors);
                for (const err of error.errors) {
                    if (!this.errorCause) {
                        this.errorCause = [];
                    }
                    const error_cause = err.path[0].toString();
                    if (error_cause.includes('date') && !this.errorCause.find(c => c === 'date')) {
                        this.errorCause.push('date');
                    }
                    if (error_cause.includes('nbr')) {
                        this.errorCause.push('adult_child');
                    }
                }
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    changeExposedAvailabilityParams(params) {
        this.exposedBookingAvailabilityParams = Object.assign(Object.assign({}, this.exposedBookingAvailabilityParams), params);
    }
    shouldRenderErrorToast() {
        var _a, _b, _c, _d, _e;
        // Check for date-related errors
        if (((_a = this.errorCause) === null || _a === void 0 ? void 0 : _a.find(c => c === 'date')) !== undefined) {
            // Both dates must be present to clear the error
            if (this.exposedBookingAvailabilityParams.from_date && this.exposedBookingAvailabilityParams.to_date) {
                this.errorCause = (_b = this.errorCause) === null || _b === void 0 ? void 0 : _b.filter(c => c !== 'date');
            }
        }
        // Check for adult/child count related errors
        if ((_c = this.errorCause) === null || _c === void 0 ? void 0 : _c.find(c => c === 'adult_child')) {
            // There must be at least one adult to clear the error
            if (this.exposedBookingAvailabilityParams.adult_nbr > 0) {
                this.errorCause = (_d = this.errorCause) === null || _d === void 0 ? void 0 : _d.filter(c => c !== 'adult_child');
            }
        }
        return ((_e = this.errorCause) === null || _e === void 0 ? void 0 : _e.length) > 0;
    }
    disconnectedCallback() {
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
        if (this.toast_timeout) {
            clearTimeout(this.toast_timeout);
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.shouldRenderErrorToast();
        const show_loyalty = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.promotions) === null || _b === void 0 ? void 0 : _b.some(p => p.is_loyalty);
        const show_coupon = (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.promotions) === null || _d === void 0 ? void 0 : _d.some(p => p.is_loyalty);
        const showPromotions = ((_e = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _e === void 0 ? void 0 : _e.promotions) && (show_coupon || show_loyalty);
        return (h("div", { key: 'aaa0ed86610ba0534da64b5cadd6eb650633f8c3', class: `availability-container ${showPromotions ? 'promotions' : ''} xl:text-cyan-50` }, h("div", { key: '947dd45f6a3731957c12956988138b6b4c5a416e', class: `availability-inputs ${showPromotions ? 'promotions' : ''}` }, h("ir-date-popup", { key: '1e4d7e608a95ba54a5decec777a2f17d866955e1', "data-state": ((_f = this.errorCause) === null || _f === void 0 ? void 0 : _f.find(c => c === 'date')) ? 'error' : '', dates: {
                start: ((_g = this.exposedBookingAvailabilityParams) === null || _g === void 0 ? void 0 : _g.from_date) ? moment(this.exposedBookingAvailabilityParams.from_date, 'YYYY-MM-DD') : null,
                end: ((_h = this.exposedBookingAvailabilityParams) === null || _h === void 0 ? void 0 : _h.to_date) ? moment(this.exposedBookingAvailabilityParams.to_date, 'YYYY-MM-DD') : null,
            }, class: "date-popup" }), h("ir-adult-child-counter", { key: '18960adebccc9bf37ce503fc1a9e0ae7a2da2f65', "data-state": ((_j = this.errorCause) === null || _j === void 0 ? void 0 : _j.find(c => c === 'adult_child')) ? 'error' : '', adultCount: this.exposedBookingAvailabilityParams.adult_nbr, childrenCount: this.exposedBookingAvailabilityParams.child_nbr, minAdultCount: 0, maxAdultCount: app_store.property.adult_child_constraints.adult_max_nbr, maxChildrenCount: app_store.property.adult_child_constraints.child_max_nbr, childMaxAge: app_store.property.adult_child_constraints.child_max_age, class: "adult-child-counter", ref: el => (this.personCounter = el), baseChildrenAges: booking_store.childrenAges, onCheckAvailability: () => this.handleCheckAvailability() }), h("div", { key: 'bdd5f0814625303dcc2c29d112183bfcf25148e2', class: 'hidden sm:block' }, h("ir-button", { key: '25211f42e08aa39b00833be2eb489ac8d142e52c', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "pill", variants: "icon-primary", iconName: "search", label: "Check availability" })), h("div", { key: '332a7f3962a7ef0a11ba4528876ff65cb578ca51', class: "full-width-on-mobile sm:hidden" }, h("ir-button", { key: 'd8753b2efcca4dd4b353eb74e9942971d31cb18e', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "md", label: localizedWords.entries.Lcz_Search, buttonStyles: { width: '100%' } }))), ((_k = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _k === void 0 ? void 0 : _k.promotions) && (h("div", { key: 'ac6e40c18183aadba16a8ed1f91a133cf961dcfc', class: "promotions-container" }, h("ir-coupon-dialog", { key: 'b6dd1d9b2f99af59c209d07757aad1cd62048ad8', class: "coupon-dialog" }), h("ir-loyalty", { key: '90fa9f530978ea27db015a5af80caa26a2a7aae5', class: "loyalty" })))));
    }
    static get is() { return "ir-availability-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-availability-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-availability-header.css"]
        };
    }
    static get properties() {
        return {
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
                "getter": false,
                "setter": false,
                "attribute": "from-date",
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
                "attribute": "children-count",
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
                "getter": false,
                "setter": false,
                "attribute": "ages",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "target": {},
            "isLoading": {},
            "exposedBookingAvailabilityParams": {}
        };
    }
    static get events() {
        return [{
                "method": "resetBooking",
                "name": "resetBooking",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "scrollToRoomType",
                "name": "scrollToRoomType",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "ages",
                "methodName": "handleAgesChange"
            }, {
                "propName": "fromDate",
                "methodName": "handleFromDateChange"
            }, {
                "propName": "toDate",
                "methodName": "handleToDateChange"
            }, {
                "propName": "childrenCount",
                "methodName": "handleChildrenCountChange"
            }, {
                "propName": "adultCount",
                "methodName": "handleAdultCountChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "dateChange",
                "method": "handleDateChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "addAdultsAndChildren",
                "method": "handleAdultChildChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-availability-header.js.map
