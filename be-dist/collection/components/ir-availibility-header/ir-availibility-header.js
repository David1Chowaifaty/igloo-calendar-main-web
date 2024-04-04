import { h } from "@stencil/core";
import { ExposedBookingAvailability } from "./availability";
import { format } from "date-fns";
import { ZodError } from "zod";
import { createPopper } from "@popperjs/core";
import localization_store, { onAppDataChange } from "../../stores/app.store";
import { PropertyService } from "../../services/api/property.service";
import app_store from "../../stores/app.store";
import { modifyBookingStore } from "../../stores/booking";
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
        };
        this.errorCause = null;
        this.isLoading = false;
    }
    componentWillLoad() {
        const { token, property_id } = app_store.app_data;
        this.propertyService.setToken(token);
        this.changeExposedAvailabilityParams({
            propertyid: property_id,
            language: app_store.userPreferences.language_id,
            currency_ref: app_store.userPreferences.currency_id,
        });
        onAppDataChange('userPreferences', newValue => {
            this.changeExposedAvailabilityParams({
                language: newValue.language_id,
                currency_ref: newValue.currency_id,
            });
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
    async handleCheckAvailability(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = true;
            const params = ExposedBookingAvailability.parse(this.exposedBookingAvailabiltyParams);
            await this.propertyService.getExposedBookingAvailability(this.exposedBookingAvailabiltyParams);
            modifyBookingStore('bookingAvailabilityParams', {
                from_date: new Date(params.from_date),
                to_date: new Date(params.to_date),
                adult_nbr: params.adult_nbr,
                child_nbr: params.child_nbr,
            });
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
        var _a, _b;
        return (h("div", { key: 'ac43373ee9cfb033dfc31c5c97f0ea7444c29261', class: "bg-gray-100 rounded-[var(--radius,8px)] flex flex-col items-center gap-4 p-2 sm:flex-row sm:flex-wrap sm:justify-center " }, h("div", { key: 'b15cd23b57e60df0ab2112f45c14cdd62e34fd7d', class: "flex flex-col w-full items-center gap-4 sm:flex-row sm:w-fit lg:mr-10" }, h("ir-date-popup", { key: '3748bb8f6281be797b9b50e98890eaea11830463', ref: el => (this.datePopup = el), dates: {
                start: ((_a = this.exposedBookingAvailabiltyParams) === null || _a === void 0 ? void 0 : _a.from_date) ? new Date(this.exposedBookingAvailabiltyParams.from_date) : null,
                end: ((_b = this.exposedBookingAvailabiltyParams) === null || _b === void 0 ? void 0 : _b.to_date) ? new Date(this.exposedBookingAvailabiltyParams.to_date) : null,
            }, class: "w-full sm:w-auto" }), h("div", { key: '5de5ff37d5f300f9dd146b2a2945668e1ad2ff5b', ref: el => (this.dateToast = el) }, this.errorCause === 'date' && h("p", { class: "text-sm bg-red-500 px-5 py-1 rounded-md text-white" }, " Select a date")), h("ir-adult-child-counter", { key: '4475b54bcd5a69a2d39c2090cd38d668612a5eb0', class: "w-full sm:w-auto" }), h("ir-button", { key: 'abbff71b05c8a979f4f7ece1f26d1f08d9a0f84d', isLoading: this.isLoading, onButtonClick: this.handleCheckAvailability.bind(this), label: "search", size: "md", class: "w-full sm:w-auto", buttonClassName: "justify-center" })), h("div", { key: '918f95c923be606f6ef43958b4cd94395d299bee', class: "flex items-center gap-4 w-full sm:w-fit" }, h("ir-input", { key: '6713c55f6b5c67be8dc8c3a8ee3406c34fa4e082', placeholder: "Have a coupon?", class: "flex-1 max-w-96" }), h("ir-button", { key: '1be85fda58cef8c055b0c01fee63320754d7c4c6', label: "activate", size: "md", variants: "outline-primary" }))));
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
