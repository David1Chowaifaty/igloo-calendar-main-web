import { PickupFormData } from "../../../../models/pickup";
import { PickupService } from "../../../../services/app/pickup.service";
import app_store, { onAppDataChange } from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
import { checkout_store, onCheckoutDataChange, updatePartialPickupFormData, updatePickupFormData } from "../../../../stores/checkout.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
import IMask from "imask";
import localization_store from "../../../../stores/app.store";
export class IrPickup {
    constructor() {
        this.vehicleCapacity = [];
        this.allowedOptionsByLocation = [];
        this.pickupService = new PickupService();
        this.time_mask = {
            mask: 'HH:MM',
            blocks: {
                HH: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 23,
                    maxLength: 2,
                    placeholderChar: 'H',
                },
                MM: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 59,
                    maxLength: 2,
                    placeholderChar: 'M',
                },
            },
            lazy: false,
            placeholderChar: '_',
        };
    }
    componentWillLoad() {
        var _a;
        this.oldCurrencyValue = app_store.userPreferences.currency_id;
        this.updateCurrency();
        updatePickupFormData('arrival_date', (_a = booking_store.bookingAvailabilityParams) === null || _a === void 0 ? void 0 : _a.from_date);
        onAppDataChange('userPreferences', newValue => {
            if (newValue.currency_id !== this.oldCurrencyValue) {
                this.updateCurrency();
            }
        });
        if (checkout_store.pickup.location) {
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(checkout_store.pickup.selected_option.vehicle.capacity, 3);
            this.allowedOptionsByLocation = app_store.property.pickup_service.allowed_options.filter(option => option.location.id.toString() === checkout_store.pickup.location.toString());
        }
        onCheckoutDataChange('pickup', newValue => {
            if (newValue.location) {
                this.vehicleCapacity = this.pickupService.getNumberOfVehicles(newValue.selected_option.vehicle.capacity, 3);
                this.allowedOptionsByLocation = app_store.property.pickup_service.allowed_options.filter(option => option.location.id.toString() === newValue.location.toString());
            }
        });
    }
    updateCurrency() {
        const currency = app_store.currencies.find(c => c.code === app_store.userPreferences.currency_id);
        updatePickupFormData('currency', currency);
    }
    dateTrigger() {
        var _a, _b;
        return (h("div", { class: "popover-trigger w-full ", slot: "trigger" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "18", width: "12.5", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })), h("div", null, h("p", { class: "trigger-label" }, localizedWords.entries.Lcz_ArrivalDate), h("p", { class: 'date' }, (_b = (_a = checkout_store === null || checkout_store === void 0 ? void 0 : checkout_store.pickup) === null || _a === void 0 ? void 0 : _a.arrival_date) === null || _b === void 0 ? void 0 : _b.format('MMM DD, YYYY')))));
    }
    handleChangeDate(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        updatePickupFormData('arrival_date', e.detail);
        this.popover.toggleVisibility();
    }
    handleVehicleTypeChange(e) {
        if (e.detail === '') {
            updatePartialPickupFormData({ due_upon_booking: '', vehicle_type_code: '' });
            return;
        }
        let locationChoice = app_store.property.pickup_service.allowed_options.find(option => option.location.id === +checkout_store.pickup.location && option.vehicle.code === e.detail);
        if (!locationChoice) {
            return;
        }
        this.vehicleCapacity = [...this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, 3)];
        updatePartialPickupFormData({
            selected_option: locationChoice,
            number_of_vehicles: this.vehicleCapacity[0],
            due_upon_booking: this.pickupService
                .updateDue({
                amount: locationChoice.amount,
                code: locationChoice.pricing_model.code,
                numberOfPersons: 3,
                number_of_vehicles: this.vehicleCapacity[0],
            })
                .toFixed(2),
            vehicle_type_code: locationChoice.vehicle.code,
        });
    }
    handleLocationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        if (value === '-1') {
            updatePickupFormData('location', null);
        }
        if (value !== '-1') {
            this.allowedOptionsByLocation = app_store.property.pickup_service.allowed_options.filter(option => option.location.id.toString() === value);
            let locationChoice = this.allowedOptionsByLocation[0];
            if (!locationChoice) {
                return;
            }
            locationChoice.currency;
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, 3);
            updatePartialPickupFormData({
                location: value,
                selected_option: locationChoice,
                number_of_vehicles: this.vehicleCapacity[0],
                due_upon_booking: this.pickupService
                    .updateDue({
                    amount: locationChoice.amount,
                    code: locationChoice.pricing_model.code,
                    numberOfPersons: 3,
                    number_of_vehicles: this.vehicleCapacity[0],
                })
                    .toFixed(2),
                vehicle_type_code: locationChoice.vehicle.code,
                currency: locationChoice.currency,
            });
        }
    }
    handleVehicleQuantityChange(e) {
        if (e.detail === '') {
            return;
        }
        const value = +e.detail;
        updatePartialPickupFormData({
            number_of_vehicles: value,
            due_upon_booking: this.pickupService
                .updateDue({
                amount: checkout_store.pickup.selected_option.amount,
                code: checkout_store.pickup.selected_option.pricing_model.code,
                numberOfPersons: 3,
                number_of_vehicles: value,
            })
                .toFixed(2),
        });
    }
    render() {
        var _a, _b;
        if (!app_store.property.pickup_service.allowed_options) {
            return null;
        }
        return (h("section", { class: "space-y-5" }, h("div", { class: "flex flex-wrap items-center gap-2 rounded-md bg-gray-100 px-4 py-2" }, h("ir-icons", { name: "car" }), h("p", null, localizedWords.entries.Lcz_NeedPickup), h("ir-select", { value: (_a = checkout_store.pickup) === null || _a === void 0 ? void 0 : _a.location, onValueChange: this.handleLocationChange.bind(this), data: [{ id: -1, value: localizedWords.entries.Lcz_NoThankYou }, ...this.pickupService.getAvailableLocations(localizedWords.entries.Lcz_YesFrom)] })), checkout_store.pickup.location && (h("div", { class: 'flex items-center  justify-between' }, h("div", { class: "flex-1 space-y-5" }, h("div", { class: 'pickup-header-container' }, h("ir-popover", { ref: el => (this.popover = el), class: "w-fit sm:w-full lg:w-fit" }, this.dateTrigger(), h("div", { slot: "popover-content", class: "date-range-container w-full border-0 p-2 shadow-none sm:w-auto sm:border sm:shadow-sm md:p-4 " }, h("ir-calendar", { locale: localization_store.selectedLocale, date: checkout_store.pickup.arrival_date, fromDate: (_b = booking_store.bookingAvailabilityParams) === null || _b === void 0 ? void 0 : _b.from_date }))), h("ir-input", { class: 'w-full', onTextChanged: e => updatePickupFormData('arrival_time', e.detail), label: localizedWords.entries.Lcz_ArrivalHour, placeholder: "HH:MM", mask: this.time_mask, type: "text", id: "time-input", "data-state": this.errors && this.errors.arrival_time ? 'error' : '', "aria-invalid": this.errors && this.errors.arrival_time ? 'true' : 'false', onInputBlur: e => {
                var _a;
                const firstNameSchema = PickupFormData.pick({ arrival_time: true });
                const firstNameValidation = firstNameSchema.safeParse({ arrival_time: (_a = checkout_store.pickup) === null || _a === void 0 ? void 0 : _a.arrival_time });
                const target = e.target;
                if (!firstNameValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } }), h("p", { class: "pickup-amount" }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id))), h("div", null, h("ir-input", { label: localizedWords.entries.Lcz_FlightDetails, placeholder: "", value: checkout_store.pickup.flight_details, onTextChanged: e => updatePickupFormData('flight_details', e.detail) })), h("div", { class: "flex flex-1 items-center gap-4" }, h("ir-select", { value: checkout_store.pickup.vehicle_type_code, data: this.allowedOptionsByLocation.map(option => ({
                id: option.vehicle.code,
                value: option.vehicle.description,
            })), onValueChange: this.handleVehicleTypeChange.bind(this), class: "w-full", label: localizedWords.entries.Lcz_CarModel, variant: "double-line" }), h("ir-select", { value: checkout_store.pickup.number_of_vehicles, onValueChange: this.handleVehicleQuantityChange.bind(this), class: "w-72", data: this.vehicleCapacity.map(i => ({
                id: i,
                value: i.toString(),
            })), label: localizedWords.entries.Lcz_NoOfVehicles, variant: "double-line" })))))));
    }
    static get is() { return "ir-pickup"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pickup.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pickup.css"]
        };
    }
    static get properties() {
        return {
            "errors": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Record<string, ZodIssue>",
                    "resolved": "{ [x: string]: ZodIssue; }",
                    "references": {
                        "Record": {
                            "location": "global",
                            "id": "global::Record"
                        },
                        "ZodIssue": {
                            "location": "import",
                            "path": "zod",
                            "id": "node_modules::ZodIssue"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "vehicleCapacity": {},
            "allowedOptionsByLocation": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "dateChange",
                "method": "handleChangeDate",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-pickup.js.map
