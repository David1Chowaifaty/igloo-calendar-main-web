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
export class IrAvailibilityHeader {
    constructor() {
        this.popoverInstance = null;
        this.propertyService = new PropertyService();
        this.availabiltyService = new AvailabiltyService();
        this.fromDate = undefined;
        this.toDate = undefined;
        this.adultCount = undefined;
        this.childrenCount = undefined;
        this.exposedBookingAvailabiltyParams = {
            adult_nbr: 0,
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
    componentWillLoad() {
        const { token, property_id } = app_store.app_data;
        this.propertyService.setToken(token);
        this.availabiltyService.subscribe(() => this.disableLoading());
        this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { adult_nbr: +this.adultCount || 0, child_nbr: +this.childrenCount || 0, from_date: this.fromDate, to_date: this.toDate });
        if (booking_store.bookingAvailabilityParams.from_date) {
            this.exposedBookingAvailabiltyParams.from_date = format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd');
            this.exposedBookingAvailabiltyParams.to_date = format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd');
        }
        if (booking_store.bookingAvailabilityParams.adult_nbr) {
            this.exposedBookingAvailabiltyParams.adult_nbr = booking_store.bookingAvailabilityParams.adult_nbr;
            this.exposedBookingAvailabiltyParams.child_nbr = booking_store.bookingAvailabilityParams.child_nbr;
        }
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
        if (this.fromDate && this.toDate && this.adultCount) {
            this.checkAvailability();
        }
    }
    disableLoading() {
        if (this.isLoading) {
            this.isLoading = false;
        }
    }
    handleFromDateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { from_date: newValue });
            if (this.fromDate && this.toDate && this.adultCount) {
                this.checkAvailability();
            }
        }
    }
    handleToDateChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { to_date: newValue });
            if (this.fromDate && this.toDate && this.adultCount) {
                this.checkAvailability();
            }
        }
    }
    handleChildrenCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { child_nbr: +newValue });
            if (this.fromDate && this.toDate && this.adultCount) {
                this.checkAvailability();
            }
        }
    }
    handleAdultCountChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.exposedBookingAvailabiltyParams = Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { adult_nbr: +newValue });
            if (this.fromDate && this.toDate && this.adultCount) {
                this.checkAvailability();
            }
        }
    }
    async checkAvailability() {
        const params = ExposedBookingAvailability.parse(this.exposedBookingAvailabiltyParams);
        if (app_store.app_data.injected) {
            return (location.href = `https://${app_store.property.perma_link}.bookingmystay.com?checkin=${params.from_date}&checkout=${params.to_date}&adults=${params.adult_nbr}&children=${params.child_nbr}&cur=${params.currency_ref}`);
        }
        this.identifier = v4();
        this.availabiltyService.initSocket(this.identifier);
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { from_date: new Date(params.from_date), to_date: new Date(params.to_date), adult_nbr: params.adult_nbr, child_nbr: params.child_nbr });
        if (window.innerWidth < 640) {
            this.scrollToRoomType.emit(null);
        }
        await this.propertyService.getExposedBookingAvailability({
            params: Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { promo_key: booking_store.bookingAvailabilityParams.coupon || '', is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false, agent_id: booking_store.bookingAvailabilityParams.agent || 0, is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon, is_in_affiliate_mode: !!app_store.app_data.affiliate, affiliate_id: app_store.app_data.affiliate ? app_store.app_data.affiliate.id : null }),
            identifier: this.identifier,
            mode: 'default',
        });
    }
    async handleCheckAvailability() {
        try {
            this.isLoading = true;
            await this.checkAvailability();
            app_store.fetchedBooking = true;
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
    }
    handleAdultChildChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.changeExposedAvailabilityParams(Object.assign({}, e.detail));
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
        var _a, _b, _c, _d, _e;
        this.shouldRenderErrorToast();
        return (h("div", { key: 'c48256c74d7eca985188b92cce3e5aa13d5ad785', class: "availability-container" }, h("div", { key: '27b03ccc4303df74dc58c097ce0440d85e1478b9', class: "availability-inputs" }, h("ir-date-popup", { key: '098baf0b13854ee2ddd47af4e86045b5c38b6e4e', "data-state": ((_a = this.errorCause) === null || _a === void 0 ? void 0 : _a.find(c => c === 'date')) ? 'error' : '', dates: {
                start: ((_b = this.exposedBookingAvailabiltyParams) === null || _b === void 0 ? void 0 : _b.from_date) ? new Date(this.exposedBookingAvailabiltyParams.from_date) : null,
                end: ((_c = this.exposedBookingAvailabiltyParams) === null || _c === void 0 ? void 0 : _c.to_date) ? new Date(this.exposedBookingAvailabiltyParams.to_date) : null,
            }, class: "date-popup" }), h("div", { key: '779f9c3c66f895d9a854de027b6d4e9722a3cb4e', class: "availability-controls" }, h("ir-adult-child-counter", { key: '9b279f2a925828e68a8eb8d36e3c7ab6650c48f5', "data-state": ((_d = this.errorCause) === null || _d === void 0 ? void 0 : _d.find(c => c === 'adult_child')) ? 'error' : '', adultCount: this.exposedBookingAvailabiltyParams.adult_nbr, childrenCount: this.exposedBookingAvailabiltyParams.child_nbr, minAdultCount: 0, maxAdultCount: app_store.property.adult_child_constraints.adult_max_nbr, maxChildrenCount: app_store.property.adult_child_constraints.child_max_nbr, childMaxAge: app_store.property.adult_child_constraints.child_max_age, class: "adult-child-counter" }), h("ir-button", { key: '49e163587050853815d7d1324760cdd812c9dc4d', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "pill", variants: "icon-primary", iconName: "search", label: "Check availability" }))), ((_e = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _e === void 0 ? void 0 : _e.promotions) && (h("div", { key: 'd67747bef605051505bb7805ab4c9312d1e71aef', class: "promotions-container" }, h("ir-coupon-dialog", { key: 'f08ef97aec8bd0836038c11d2643c0338bfd25cb', class: "coupon-dialog" }), h("ir-loyalty", { key: '0a2c5b47aad8cd187acc57756aff3200f5c59c0d', class: "loyalty" })))));
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
