import { h } from "@stencil/core";
import { ExposedBookingAvailability } from "./availability";
import { format } from "date-fns";
import { ZodError } from "zod";
import { createPopper } from "@popperjs/core";
import localization_store, { onAppDataChange } from "../../../../stores/app.store";
import { PropertyService } from "../../../../services/api/property.service";
import app_store from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
export class IrAvailibilityHeader {
    constructor() {
        this.popoverInstance = null;
        this.propertyService = new PropertyService();
        this.exposedBookingAvailabiltyParams = {
            adult_nbr: 1,
            child_nbr: 0,
            currency_ref: 'USD',
            language: 'en',
            room_type_ids: [],
            propertyid: 42,
            is_in_loyalty_mode: !!booking_store.bookingAvailabilityParams.coupon,
            promo_key: booking_store.bookingAvailabilityParams.coupon || '',
            is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
            agent_id: booking_store.bookingAvailabilityParams.agent || 0,
        };
        this.errorCause = null;
        this.isLoading = false;
    }
    componentWillLoad() {
        const { token, property_id } = app_store.app_data;
        this.propertyService.setToken(token);
        if (booking_store.bookingAvailabilityParams.from_date) {
            this.exposedBookingAvailabiltyParams.from_date = format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd');
            this.exposedBookingAvailabiltyParams.to_date = format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd');
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
    }
    componentDidLoad() {
        createPopper(this.datePopup, this.dateToast, {
            placement: localization_store.dir === 'LTR' ? 'bottom-start' : 'bottom-end',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 3],
                    },
                },
            ],
        });
    }
    async checkAvailability() {
        const params = ExposedBookingAvailability.parse(this.exposedBookingAvailabiltyParams);
        await this.propertyService.getExposedBookingAvailability(Object.assign(Object.assign({}, this.exposedBookingAvailabiltyParams), { is_in_loyalty_mode: !!booking_store.bookingAvailabilityParams.coupon, promo_key: booking_store.bookingAvailabilityParams.coupon || '', is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false, agent_id: booking_store.bookingAvailabilityParams.agent || 0 }));
        booking_store.bookingAvailabilityParams = Object.assign(Object.assign({}, booking_store.bookingAvailabilityParams), { from_date: new Date(params.from_date), to_date: new Date(params.to_date), adult_nbr: params.adult_nbr, child_nbr: params.child_nbr });
        console.log(booking_store.bookingAvailabilityParams);
    }
    async handleCheckAvailability() {
        try {
            this.isLoading = true;
            await this.checkAvailability();
            app_store.fetchedBooking = true;
        }
        catch (error) {
            if (error instanceof ZodError) {
                for (const err of error.errors) {
                    const error_cause = err.path[0].toString();
                    if (error_cause.includes('date')) {
                        this.triggerToast('date');
                        break;
                    }
                    else if (error_cause.includes('nbr')) {
                        this.triggerToast('adult_child');
                        break;
                    }
                }
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    triggerToast(cause) {
        this.errorCause = cause;
        setTimeout(() => {
            this.errorCause = null;
        }, 2000);
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
    }
    render() {
        var _a, _b, _c;
        return (h("div", { key: '84066ad50ad127952ef4c295989593d4658ed238', class: "availability-container flex flex-col items-center gap-4 bg-gray-100 p-2 sm:flex-row sm:flex-wrap sm:justify-center " }, h("div", { key: 'fbe16d562877db6eb03066f5c3a38fc2f623b4c4', class: "flex w-full flex-col items-center gap-4 sm:w-fit sm:flex-row lg:mr-10" }, h("ir-date-popup", { key: '3ca7eea77bd0ea6017c64c83b71b26d9696f3733', ref: el => (this.datePopup = el), dates: {
                start: ((_a = this.exposedBookingAvailabiltyParams) === null || _a === void 0 ? void 0 : _a.from_date) ? new Date(this.exposedBookingAvailabiltyParams.from_date) : null,
                end: ((_b = this.exposedBookingAvailabiltyParams) === null || _b === void 0 ? void 0 : _b.to_date) ? new Date(this.exposedBookingAvailabiltyParams.to_date) : null,
            }, class: "w-full sm:w-auto" }), h("div", { key: '5ede6b9f5389f874853252e09ec10d164a58bb8e', ref: el => (this.dateToast = el) }, this.errorCause === 'date' && h("p", { class: "rounded-md bg-red-500 px-5 py-1 text-sm text-white" }, " Select a date")), h("ir-adult-child-counter", { key: 'd02ecf33dd574a28aa13cb3f9d3c4cdf18e3bc0a', class: "w-full sm:w-auto" }), h("div", { key: '726b9584d45a8604919cb3e52957882a4f24af63', class: "hidden sm:block" }, h("ir-button", { key: '5a6ecd8b08800ba81d3e1dbbcea6ea38e2e47d1b', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, size: "pill", variants: "icon-primary" }, h("ir-icons", { key: '331e2a787fb6d0ae4fff5c88a88878ae19c9fb97', slot: "btn-icon", name: "search" }))), h("div", { key: '5762d0edc282ec72bd0e312d7ce3b0467c702433', class: "w-full sm:hidden" }, h("ir-button", { key: 'b5eccbc1b4532388e49bfba4658cee69d0876d68', isLoading: this.isLoading, onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleCheckAvailability();
            }, class: "w-full", size: "lg", label: "search" }))), ((_c = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _c === void 0 ? void 0 : _c.promotions) && (h("div", { class: 'flex w-full flex-wrap  items-center gap-4 sm:justify-center md:w-fit md:justify-start' }, h("ir-coupon-dialog", { class: "w-full sm:w-fit" }), h("ir-loyalty", { class: "w-full sm:w-fit" })))));
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
    static get states() {
        return {
            "exposedBookingAvailabiltyParams": {},
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
