import { h } from "@stencil/core";
import { ExposedBookingAvailability } from "./availability";
import { format } from "date-fns";
import { ZodError } from "zod";
import { onAppDataChange } from "../../../../stores/app.store";
import { PropertyService } from "../../../../services/api/property.service";
import app_store from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
import { v4 } from "uuid";
import { AvailabiltyService } from "../../../../services/app/availability.service";
import localizedWords from "../../../../stores/localization.store";
import { QueryStringValidator } from "../../../../validators/querystring.validator";
import { modifyQueryParam } from "../../../../utils/utils";
export class IrAvailibilityHeader {
    constructor() {
        this.popoverInstance = null;
        this.propertyService = new PropertyService();
        this.availabiltyService = new AvailabiltyService();
        this.validator = new QueryStringValidator();
        this.fromDate = undefined;
        this.toDate = undefined;
        this.adultCount = undefined;
        this.childrenCount = undefined;
        this.exposedBookingAvailabiltyParams = {
            adult_nbr: 2,
            child_nbr: 0,
            currency_ref: 'USD',
            language: 'en',
            room_type_ids: [],
            propertyid: 42,
            is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
            promo_key: booking_store.bookingAvailabilityParams.coupon || '',
            is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
            agent_id: booking_store.bookingAvailabilityParams.agent || 0,
        };
        this.target = null;
        this.errorCause = null;
        this.isLoading = false;
    }
    // private popperInstance: any;
    // private personCounter: HTMLIrAdultChildCounterElement;
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
    componentWillLoad() {
        const { token, property_id } = app_store.app_data;
        this.propertyService.setToken(token);
        this.availabiltyService.subscribe(() => this.disableLoading());
        const validatedFromDate = this.validator.validateCheckin(this.fromDate);
        this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { adult_nbr: this.setDefaultAdultCount(), child_nbr: this.setDefaultChildCount(), from_date: validatedFromDate ? this.fromDate : null, to_date: this.validator.validateCheckout(this.toDate, validatedFromDate) ? this.toDate : null });
        if (booking_store.bookingAvailabilityParams.from_date) {
            this.exposedBookingAvailabiltyParams.from_date = format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd');
            this.exposedBookingAvailabiltyParams.to_date = format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd');
        }
        if (booking_store.bookingAvailabilityParams.adult_nbr) {
            this.exposedBookingAvailabiltyParams.adult_nbr = booking_store.bookingAvailabilityParams.adult_nbr;
            this.exposedBookingAvailabiltyParams.child_nbr = booking_store.bookingAvailabilityParams.child_nbr;
        }
        console.log(this.validator.getErrors());
        this.changeExposedAvailabilityParams({
            propertyid: property_id,
            language: app_store.userPreferences.language_id,
            currency_ref: app_store.userPreferences.currency_id,
        });
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
            catch (error) { }
        });
        this.recheckAvailability();
    }
    disableLoading() {
        if (this.isLoading) {
            this.isLoading = false;
        }
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
    handleFromDateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (this.validator.validateCheckin(newValue)) {
                this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { from_date: newValue });
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
                    this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { to_date: newValue });
                    this.recheckAvailability();
                }
            }
        }
    }
    handleChildrenCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (!this.validator.validateChildrenCount(newValue)) {
                this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { child_nbr: +newValue });
                this.recheckAvailability();
            }
        }
    }
    handleAdultCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (!this.validator.validateAdultCount(newValue)) {
                this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { adult_nbr: +newValue });
                this.recheckAvailability();
            }
        }
    }
    async checkAvailability() {
        const params = ExposedBookingAvailability.parse(this.exposedBookingAvailabiltyParams);
        if (app_store.app_data.injected) {
            const { from_date, to_date, adult_nbr, child_nbr } = params;
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
            const queryParams = [fromDate, toDate, adults, children, affiliate, language, currency, loyalty, promo_key, agent];
            const queryString = queryParams.filter(param => param !== '').join('&');
            return (location.href = `https://${app_store.property.perma_link}.bookingmystay.com?${queryString}`);
        }
        this.identifier = v4();
        this.availabiltyService.initSocket(this.identifier);
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { from_date: new Date(params.from_date), to_date: new Date(params.to_date), adult_nbr: params.adult_nbr, child_nbr: params.child_nbr });
        this.scrollToRoomType.emit(null);
        await this.propertyService.getExposedBookingAvailability({
            params: Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { promo_key: booking_store.bookingAvailabilityParams.coupon || '', is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false, agent_id: booking_store.bookingAvailabilityParams.agent || 0, is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon, is_in_affiliate_mode: !!app_store.app_data.affiliate, affiliate_id: app_store.app_data.affiliate ? app_store.app_data.affiliate.id : null }),
            identifier: this.identifier,
            mode: 'default',
        });
        app_store.fetchedBooking = true;
    }
    async handleCheckAvailability() {
        try {
            this.isLoading = true;
            await this.checkAvailability();
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log(error.errors);
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
        this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), params);
    }
    handleDateChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        if (end) {
            this.changeExposedAvailabilityParams({
                from_date: format(start, 'yyyy-MM-dd').toString(),
                to_date: format(end, 'yyyy-MM-dd').toString(),
            });
        }
        else if (this.exposedBookingAvailabiltyParams.to_date && !end) {
            this.changeExposedAvailabilityParams({
                from_date: format(start, 'yyyy-MM-dd').toString(),
                to_date: null,
            });
        }
        else {
            this.changeExposedAvailabilityParams({ from_date: format(start, 'yyyy-MM-dd') });
        }
        modifyQueryParam('checkin', this.exposedBookingAvailabiltyParams.from_date);
        modifyQueryParam('checkout', this.exposedBookingAvailabiltyParams.to_date);
    }
    handleAdultChildChange(e) {
        var _a, _b;
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.changeExposedAvailabilityParams(Object.assign({}, e.detail));
        modifyQueryParam('adults', (_a = this.exposedBookingAvailabiltyParams.adult_nbr) === null || _a === void 0 ? void 0 : _a.toString());
        modifyQueryParam('children', (_b = this.exposedBookingAvailabiltyParams.child_nbr) === null || _b === void 0 ? void 0 : _b.toString());
    }
    disconnectedCallback() {
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
        if (this.toast_timeout) {
            clearTimeout(this.toast_timeout);
        }
        this.availabiltyService.unsubscribe(() => this.disableLoading());
        this.availabiltyService.disconnectSocket();
    }
    shouldRenderErrorToast() {
        var _a, _b, _c, _d, _e;
        // Check for date-related errors
        if (((_a = this.errorCause) === null || _a === void 0 ? void 0 : _a.find(c => c === 'date')) !== undefined) {
            // Both dates must be present to clear the error
            if (this.exposedBookingAvailabiltyParams.from_date && this.exposedBookingAvailabiltyParams.to_date) {
                this.errorCause = (_b = this.errorCause) === null || _b === void 0 ? void 0 : _b.filter(c => c !== 'date');
            }
        }
        // Check for adult/child count related errors
        if ((_c = this.errorCause) === null || _c === void 0 ? void 0 : _c.find(c => c === 'adult_child')) {
            // There must be at least one adult to clear the error
            if (this.exposedBookingAvailabiltyParams.adult_nbr > 0) {
                this.errorCause = (_d = this.errorCause) === null || _d === void 0 ? void 0 : _d.filter(c => c !== 'adult_child');
            }
        }
        return ((_e = this.errorCause) === null || _e === void 0 ? void 0 : _e.length) > 0;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.shouldRenderErrorToast();
        const show_loyalty = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.promotions) === null || _b === void 0 ? void 0 : _b.some(p => p.is_loyalty);
        const show_coupon = (_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.promotions) === null || _d === void 0 ? void 0 : _d.some(p => p.is_loyalty);
        const showPromotions = ((_e = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _e === void 0 ? void 0 : _e.promotions) && (show_coupon || show_loyalty);
        return (h("div", { key: '03ec1529ff595463c2d2bd16614b1f3cedccb502', class: `availability-container ${showPromotions ? 'promotions' : ''} xl:text-cyan-50` }, h("div", { key: '3b5fc169e84b6f58c304e08f473cc4fc7aac7043', class: `availability-inputs ${showPromotions ? 'promotions' : ''}` }, h("ir-date-popup", { key: 'b5ff37211ae7032a31d27913393efe6bb3ed42d8', "data-state": ((_f = this.errorCause) === null || _f === void 0 ? void 0 : _f.find(c => c === 'date')) ? 'error' : '', dates: {
                start: ((_g = this.exposedBookingAvailabiltyParams) === null || _g === void 0 ? void 0 : _g.from_date) ? new Date(this.exposedBookingAvailabiltyParams.from_date) : null,
                end: ((_h = this.exposedBookingAvailabiltyParams) === null || _h === void 0 ? void 0 : _h.to_date) ? new Date(this.exposedBookingAvailabiltyParams.to_date) : null,
            }, class: "date-popup" }), h("ir-adult-child-counter", { key: 'f40ee1036c4da53bbec1086a96945dfaeca2e16c', "data-state": ((_j = this.errorCause) === null || _j === void 0 ? void 0 : _j.find(c => c === 'adult_child')) ? 'error' : '', adultCount: this.exposedBookingAvailabiltyParams.adult_nbr, childrenCount: this.exposedBookingAvailabiltyParams.child_nbr, minAdultCount: 0, maxAdultCount: app_store.property.adult_child_constraints.adult_max_nbr, maxChildrenCount: app_store.property.adult_child_constraints.child_max_nbr, childMaxAge: app_store.property.adult_child_constraints.child_max_age, class: "adult-child-counter" }), h("div", { key: 'd6f0498c04e86c7f82667a8f0c3447cae52142a4', class: 'hidden sm:block' }, h("ir-button", { key: '0299f61f4ffeac10a532437164c0cc1e9b643515', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "pill", variants: "icon-primary", iconName: "search", label: "Check availability" })), h("div", { key: '483ab6808e2beb4e50cc2a4b6014d0a254ca7f8c', class: "full-width-on-mobile sm:hidden" }, h("ir-button", { key: '86afab2adb1e04cde63116cd0e182666edf1299d', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "md", label: localizedWords.entries.Lcz_Search, buttonStyles: { width: '100%' } }))), ((_k = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _k === void 0 ? void 0 : _k.promotions) && (h("div", { key: 'deafeae770cb987a7c7dc6251b02602a8a2f6baa', class: "promotions-container" }, h("ir-coupon-dialog", { key: '2e065487734019d186dd4aded2c98bea500023e8', class: "coupon-dialog" }), h("ir-loyalty", { key: 'cbb332f9face4d3e207d94bc86219c648bffd189', class: "loyalty" })))));
    }
    static get is() { return "ir-availibility-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-availibility-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-availibility-header.css"]
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
            }
        };
    }
    static get states() {
        return {
            "exposedBookingAvailabiltyParams": {},
            "target": {},
            "errorCause": {},
            "isLoading": {}
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
//# sourceMappingURL=ir-availibility-header.js.map
