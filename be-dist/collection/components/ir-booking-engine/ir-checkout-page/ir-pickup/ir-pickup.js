import { PickupService } from "../../../../services/app/pickup.service";
import app_store, { onAppDataChange } from "../../../../stores/app.store";
import { checkout_store, onCheckoutDataChange, updatePartialPickupFormData, updatePickupFormData } from "../../../../stores/checkout.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
import { format } from "date-fns";
import IMask from "imask";
export class IrPickup {
    constructor() {
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
        this.errors = undefined;
        this.vehicleCapacity = [];
        this.allowedOptionsByLocation = [];
    }
    componentWillLoad() {
        this.oldCurrencyValue = app_store.userPreferences.currency_id;
        this.updateCurrency();
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
        return (h("div", { class: "popover-trigger w-full ", slot: "trigger" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "18", width: "12.5", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })), h("div", null, h("p", { class: "trigger-label" }, "Arrival date"), h("p", { class: 'date' }, format(new Date(checkout_store.pickup.arrival_date), 'MMM dd, yyyy')))));
    }
    handleChangeDate(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        updatePickupFormData('arrival_date', format(e.detail, 'yyyy-MM-dd'));
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
        var _a;
        return (h("section", { key: '6b2df34c9ecb04b5eb3dc875441aa0dca15c00ea', class: "space-y-5" }, h("div", { key: '87a04224dc8785068eea707705fab48ab78ec5ab', class: "flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2" }, h("ir-icons", { key: 'db4ada390f1bd4ec33a657f552a97d50526a1677', name: "car" }), h("p", { key: '5439bcce1ac0acc7f7e2ce0314a5acb938347fca' }, "Need Pickup?"), h("ir-select", { key: '48412effa76feca1b737374d7ed48956b459ce32', value: (_a = checkout_store.pickup) === null || _a === void 0 ? void 0 : _a.location, onValueChange: this.handleLocationChange.bind(this), data: [{ id: -1, value: 'No thank you' }, ...this.pickupService.getAvailableLocations('yes from')] })), checkout_store.pickup.location && (h("div", { class: 'flex items-center  justify-between' }, h("div", { class: "flex-1 space-y-5" }, h("div", { class: 'flex items-center gap-4' }, h("ir-popover", { ref: el => (this.popover = el), class: "w-fit" }, this.dateTrigger(), h("div", { slot: "popover-content", class: "date-range-container w-full border-0 p-2 shadow-none sm:w-auto sm:border sm:shadow-sm md:p-4 " }, h("ir-calendar", null))), h("ir-input", { onTextChanged: e => updatePickupFormData('arrival_time', e.detail), label: "Arrival hour",
            // placeholder="HH:MM"
            mask: this.time_mask, type: "text", id: "time-input" }), h("div", { class: "hidden flex-1 text-right md:block" }, h("p", { class: "text-base font-medium xl:text-xl" }, formatAmount(checkout_store.pickup.location ? Number(checkout_store.pickup.due_upon_booking) : 0, app_store.userPreferences.currency_id)))), h("div", null, h("ir-input", { label: "Flight details", placeholder: "", value: checkout_store.pickup.flight_details, onTextChanged: e => updatePickupFormData('flight_details', e.detail) })), h("div", { class: "flex flex-1 items-center gap-4" }, h("ir-select", { value: checkout_store.pickup.vehicle_type_code, data: this.allowedOptionsByLocation.map(option => ({
                id: option.vehicle.code,
                value: option.vehicle.description,
            })), onValueChange: this.handleVehicleTypeChange.bind(this), class: "w-full", label: "Car model", variant: "double-line" }), h("ir-select", { value: checkout_store.pickup.number_of_vehicles, onValueChange: this.handleVehicleQuantityChange.bind(this), class: "w-72", data: this.vehicleCapacity.map(i => ({
                id: i,
                value: i.toString(),
            })), label: "No. of vehicles", variant: "double-line" })))))));
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
                            "id": ""
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
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
