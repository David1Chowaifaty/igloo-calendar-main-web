import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { h } from "@stencil/core";
import moment from "moment";
import { PickupService } from "./pickup.service";
import { MaskedRange } from "imask";
export class IrPickup {
    constructor() {
        this.numberOfPersons = 0;
        this.isLoading = false;
        this.allowedOptionsByLocation = [];
        this.pickupData = {
            location: -1,
            flight_details: '',
            due_upon_booking: '',
            number_of_vehicles: 1,
            vehicle_type_code: '',
            currency: undefined,
            arrival_time: '',
            arrival_date: null,
            selected_option: undefined,
        };
        this.vehicleCapacity = [];
        this.cause = null;
        this.autoValidate = false;
        this.pickupService = new PickupService();
        this.arrival_time_mask = {
            mask: 'HH:mm',
            blocks: {
                HH: {
                    mask: MaskedRange,
                    from: 0,
                    to: 23,
                    placeholderChar: 'H',
                },
                mm: {
                    mask: MaskedRange,
                    from: 0,
                    to: 59,
                    placeholderChar: 'm',
                },
            },
            lazy: false,
            placeholderChar: '_',
        };
    }
    componentWillLoad() {
        if (this.defaultPickupData) {
            const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
            this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
            this.pickupData = Object.assign({}, transformedData);
        }
        this.pickupSchema = this.pickupService.createPickupSchema(this.bookingDates.from, this.bookingDates.to);
    }
    handleLocationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        if (value === '') {
            this.updatePickupData('location', -1);
        }
        if (value !== '') {
            this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id.toString() === value);
            let locationChoice = this.allowedOptionsByLocation[0];
            if (!locationChoice) {
                return;
            }
            locationChoice.currency;
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons);
            this.pickupData = Object.assign(Object.assign({}, this.pickupData), { location: value, selected_option: locationChoice, number_of_vehicles: this.vehicleCapacity[0], due_upon_booking: this.pickupService
                    .updateDue({
                    amount: locationChoice.amount,
                    code: locationChoice.pricing_model.code,
                    numberOfPersons: this.numberOfPersons,
                    number_of_vehicles: this.vehicleCapacity[0],
                })
                    .toFixed(2), vehicle_type_code: locationChoice.vehicle.code, currency: locationChoice.currency });
        }
    }
    handleVehicleQuantityChange(e) {
        if (e.detail === '') {
            return;
        }
        const value = +e.detail;
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { number_of_vehicles: value, due_upon_booking: this.pickupService
                .updateDue({
                amount: this.pickupData.selected_option.amount,
                code: this.pickupData.selected_option.pricing_model.code,
                numberOfPersons: this.numberOfPersons,
                number_of_vehicles: value,
            })
                .toFixed(2) });
    }
    handleVehicleTypeChange(e) {
        if (e.detail === '') {
            this.pickupData = Object.assign(Object.assign({}, this.pickupData), { due_upon_booking: '', vehicle_type_code: '' });
            return;
        }
        let locationChoice = calendar_data.pickup_service.allowed_options.find(option => option.location.id === +this.pickupData.location && option.vehicle.code === e.detail);
        if (!locationChoice) {
            return;
        }
        this.vehicleCapacity = [...this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons)];
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { selected_option: locationChoice, number_of_vehicles: this.vehicleCapacity[0], due_upon_booking: this.pickupService
                .updateDue({
                amount: locationChoice.amount,
                code: locationChoice.pricing_model.code,
                numberOfPersons: this.numberOfPersons,
                number_of_vehicles: this.vehicleCapacity[0],
            })
                .toFixed(2), vehicle_type_code: locationChoice.vehicle.code });
    }
    updatePickupData(key, value) {
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { [key]: value });
    }
    async savePickup() {
        try {
            this.isLoading = true;
            this.autoValidate = true;
            if (this.errors) {
                this.errors = null;
            }
            this.errors = this.pickupService.validateForm(this.pickupData, this.pickupSchema);
            if (this.errors) {
                return;
            }
            await this.pickupService.savePickup(this.pickupData, this.bookingNumber, this.defaultPickupData !== null && this.pickupData.location === -1);
            this.resetBookingEvt.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h("form", { key: '1f4bc973dd23898bc1e1dae0adcae73d9efc250e', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.savePickup();
            } }, h("ir-title", { key: 'c53be85407e276a18659cb0580c0d1b348261f0f', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_Pickup, displayContext: "sidebar" }), h("section", { key: '7f5e1ec3e25978f4088be7bf6277e927b5534828', class: 'px-1 sheet-body' }, h("ir-select", { key: '9ab94bf25b2b9b89d87d2740ec872925a6c648e6', testId: "pickup_location", selectedValue: this.pickupData.location, selectContainerStyle: "mb-1", onSelectChange: this.handleLocationChange.bind(this), firstOption: locales.entries.Lcz_Pickup_NoThankYou, class: 'm-0 mb-1', data: this.pickupService.getAvailableLocations(locales.entries.Lcz_Pickup_YesFrom) }), this.pickupData.location > 0 && (h("div", { key: '7f3466b023acc94c7f2c4bdf1ece29fcf19864af', class: "m-0 p-0", "data-testid": "pickup_body" }, h("div", { key: '328a9d1d81d4f67751844a8b1b9dcb17f16557c2', class: 'd-flex' }, h("div", { key: '482a211d6fd5172b7cf23c59ee637db394e5672c', class: "form-group  mr-1" }, h("div", { key: '3b658898c5aa0c1a8da2dea59b6889482a52b783', class: "input-group row m-0" }, h("div", { key: '6f30e3b26fcaeff0e8282efe317eeff74beb6f27', class: `input-group-prepend col-5 p-0 text-dark border-0` }, h("label", { key: 'fc8375485d67d4f62699a7b43708372330cad9aa', class: `input-group-text  flex-grow-1 text-dark border-theme ` }, locales.entries.Lcz_ArrivalDate)), h("div", { key: '5a2fa2fa928109ba8e885191a667d12eba0b85f9', class: "form-control  form-control-md col-7 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("ir-date-picker", { key: 'b62204c9fe86a4d1842f611d8838313fbf33442c', "data-testid": "pickup_arrival_date", date: this.pickupData.arrival_date, minDate: this.bookingDates.from, maxDate: (_a = this.bookingDates) === null || _a === void 0 ? void 0 : _a.to, emitEmptyDate: true, "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.arrival_date) && !this.pickupData.arrival_date ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updatePickupData('arrival_date', (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD'));
            } }, h("input", { key: 'dccc4e10dc0a1b2a916d7f2291212aaaf5fb36f0', type: "text", slot: "trigger", value: this.pickupData.arrival_date ? moment(this.pickupData.arrival_date).format('MMM DD, YYYY') : null, class: `form-control input-sm ${((_c = this.errors) === null || _c === void 0 ? void 0 : _c.arrival_date) && !this.pickupData.arrival_date ? 'border-danger' : ''} text-center`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } }))))), h("ir-input-text", { key: '2bac7c9405b79c914cf0c85759543e9d4d8e5aa6', autoValidate: this.autoValidate, wrapKey: "arrival_time", testId: "pickup_arrival_time", error: (_d = this.errors) === null || _d === void 0 ? void 0 : _d.arrival_time, value: this.pickupData.arrival_time, zod: this.pickupSchema.pick({ arrival_time: true }), label: locales.entries.Lcz_Time, inputStyles: "col-sm-4", "data-state": this.cause === 'arrival_time' ? 'error' : '', mask: this.arrival_time_mask, onTextChange: e => this.updatePickupData('arrival_time', e.detail) })), h("ir-input-text", { key: '7541f1812368d485db6712a9f6c5c65571e4e21e', wrapKey: "flight_details", zod: this.pickupSchema.pick({ flight_details: true }), autoValidate: this.autoValidate, testId: "pickup_flight_details", value: this.pickupData.flight_details, label: locales.entries.Lcz_FlightDetails, onTextChange: e => this.updatePickupData('flight_details', e.detail), placeholder: "", error: (_e = this.errors) === null || _e === void 0 ? void 0 : _e.flight_details }), h("ir-select", { key: '133ec8c3d54989727a96b53241e0edaf3b4c1dee', testId: "pickup_vehicle_type_code", selectContainerStyle: "mb-1", error: this.cause === 'vehicle_type_code', onSelectChange: this.handleVehicleTypeChange.bind(this), firstOption: locales.entries.Lcz_Select, selectedValue: this.pickupData.vehicle_type_code, class: 'm-0', data: this.allowedOptionsByLocation.map(option => ({
                text: option.vehicle.description,
                value: option.vehicle.code,
            })) }), h("div", { key: '1f6f603fe854afa05a6a2a5eb11062d1f8201acb', class: 'd-flex flex-column flex-md-row' }, h("ir-select", { key: '57277f5c429513a50859c0bd3e257be6f7b61f0a', showFirstOption: false, testId: "pickup_number_of_vehicles", labelBorder: "theme", selectContainerStyle: "mb-1", onSelectChange: this.handleVehicleQuantityChange.bind(this), selectedValue: this.pickupData.number_of_vehicles, error: this.cause === 'number_of_vehicles', labelWidth: 7, class: 'm-0  mb-md-0 mr-md-1 flex-fill', label: locales.entries.Lcz_NbrOfVehicles, data: this.vehicleCapacity.map(i => ({
                text: i,
                value: i,
            })) }), h("div", { key: 'be537269ba7b618147b9436f14c0481167b4653d', class: "price-input-container" }, h("ir-price-input", { key: '713590dd1aaf58053fff9aa88f38a5cbf4a7c8a8', readOnly: true, label: `${locales.entries.Lcz_DueUponBooking}`, value: this.pickupData.due_upon_booking, currency: this.pickupData.currency.symbol })))))), h("div", { key: '212a35bfbfacf41ef9a67834069045e7a2c0b89a', class: 'sheet-footer' }, h("ir-button", { key: 'e49f1f9094e5356d0365b00ba1980977318d21df', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), (this.defaultPickupData || this.pickupData.location !== -1) && (h("ir-button", { key: '928ead4bf526e478eb0e246d164917d56e85a0a7', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" })))));
    }
    static get is() { return "ir-pickup"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pickup.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pickup.css", "../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "defaultPickupData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IBookingPickupInfo | null",
                    "resolved": "IBookingPickupInfo",
                    "references": {
                        "IBookingPickupInfo": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IBookingPickupInfo"
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
            },
            "numberOfPersons": {
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
                "getter": false,
                "setter": false,
                "attribute": "number-of-persons",
                "reflect": false,
                "defaultValue": "0"
            },
            "bookingNumber": {
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
                "attribute": "booking-number",
                "reflect": false
            },
            "bookingDates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ from: string; to: string }",
                    "resolved": "{ from: string; to: string; }",
                    "references": {}
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
            "isLoading": {},
            "allowedOptionsByLocation": {},
            "pickupData": {},
            "vehicleCapacity": {},
            "cause": {},
            "errors": {},
            "autoValidate": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
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
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-pickup.js.map
