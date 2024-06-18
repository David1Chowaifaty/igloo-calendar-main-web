import { h } from "@stencil/core";
import { ExposedBookingAvailability } from "./availability";
import { format } from "date-fns";
import { ZodError } from "zod";
import { onAppDataChange } from "../../../../stores/app.store";
import { PropertyService } from "../../../../services/api/property.service";
import app_store from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
export class IrAvailibilityHeader {
    constructor() {
        this.popoverInstance = null;
        this.propertyService = new PropertyService();
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
    componentWillLoad() {
        const { token, property_id } = app_store.app_data;
        this.propertyService.setToken(token);
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
        await this.propertyService.getExposedBookingAvailability(Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { promo_key: booking_store.bookingAvailabilityParams.coupon || '', is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false, agent_id: booking_store.bookingAvailabilityParams.agent || 0, is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon }));
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { from_date: new Date(params.from_date), to_date: new Date(params.to_date), adult_nbr: params.adult_nbr, child_nbr: params.child_nbr });
    }
    async handleCheckAvailability() {
        try {
            this.isLoading = true;
            await this.checkAvailability();
            app_store.fetchedBooking = true;
            if (window.innerWidth < 640) {
                this.scrollToRoomType.emit(null);
            }
        }
        catch (error) {
            if (error instanceof ZodError) {
                for (const err of error.errors) {
                    const error_cause = err.path[0].toString();
                    if (error_cause.includes('date')) {
                        this.errorCause = 'date';
                        break;
                    }
                    else if (error_cause.includes('nbr')) {
                        this.errorCause = 'adult_child';
                        break;
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
        console.log(this.exposedBookingAvailabiltyParams);
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
    }
    shouldRenderErrorToast() {
        // Check for date-related errors
        if (this.errorCause === 'date') {
            // Both dates must be present to clear the error
            if (this.exposedBookingAvailabiltyParams.from_date && this.exposedBookingAvailabiltyParams.to_date) {
                this.errorCause = null; // Clear error cause
                return false; // No error to show
            }
            return true; // Show error toast
        }
        // Check for adult/child count related errors
        if (this.errorCause === 'adult_child') {
            // There must be at least one adult to clear the error
            if (this.exposedBookingAvailabiltyParams.adult_nbr > 0) {
                this.errorCause = null; // Clear error cause
                return false; // No error to show
            }
            return true; // Show error toast
        }
        // If the error cause does not match known cases, no error to show
        return false;
    }
    render() {
        var _a, _b, _c;
        this.shouldRenderErrorToast();
        return (h("div", { key: '50ea19c2f9ffd80193891c7a4e78095e571e39d9', class: "availability-container" }, h("div", { key: '9f70221e41f52c90ef0fe40a32c2eefdb81818de', class: "availability-inputs" }, h("ir-date-popup", { key: '54b8fdc996b91a09ac1192597a49b0ce81fbb059', "data-state": this.errorCause === 'date' ? 'error' : '', dates: {
                start: ((_a = this.exposedBookingAvailabiltyParams) === null || _a === void 0 ? void 0 : _a.from_date) ? new Date(this.exposedBookingAvailabiltyParams.from_date) : null,
                end: ((_b = this.exposedBookingAvailabiltyParams) === null || _b === void 0 ? void 0 : _b.to_date) ? new Date(this.exposedBookingAvailabiltyParams.to_date) : null,
            }, class: "date-popup" }), h("div", { key: 'e503bf41431996fc0a0e600a68d24feeba1b915f', class: "availability-controls" }, h("ir-adult-child-counter", { key: '4b0ec22020aaf2251201a8674c1bcd9741b402f9', "data-state": this.errorCause === 'adult_child' ? 'error' : '', adultCount: this.exposedBookingAvailabiltyParams.adult_nbr, childrenCount: this.exposedBookingAvailabiltyParams.child_nbr, minAdultCount: 0, maxAdultCount: app_store.property.adult_child_constraints.adult_max_nbr, maxChildrenCount: app_store.property.adult_child_constraints.child_max_nbr, childMaxAge: app_store.property.adult_child_constraints.child_max_age, class: "adult-child-counter", ref: el => (this.personCounter = el) }), h("ir-button", { key: '0983a5e59deb5275d07c96ce0649bb2d7374526d', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "pill", variants: "icon-primary", iconName: "search" }))), ((_c = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _c === void 0 ? void 0 : _c.promotions) && (h("div", { class: "promotions-container" }, h("ir-coupon-dialog", { class: "coupon-dialog" }), h("ir-loyalty", { class: "loyalty" })))));
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
