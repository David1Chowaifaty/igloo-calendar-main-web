import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { Fragment, Host, h } from "@stencil/core";
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
            arrival_date: moment().format('YYYY-MM-DD'),
            selected_option: undefined,
        };
        this.vehicleCapacity = [];
        this.cause = null;
        this.pickupService = new PickupService();
    }
    componentWillLoad() {
        if (this.defaultPickupData) {
            const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
            this.allowedOptionsByLocation = calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
            this.pickupData = Object.assign({}, transformedData);
        }
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
            const input = this.el.querySelector('#pickup-time');
            if (!input) {
                setTimeout(() => {
                    this.initializeInputMask();
                }, 100);
            }
        }
    }
    initializeInputMask() {
        const input = this.el.querySelector('#pickup-time');
        // if (this.pickupData) {
        //   (input as HTMLInputElement).value = this.pickupData.arrival_time;
        // }
        if (input) {
            Inputmask('Hh:Mm', {
                placeholder: 'HH:mm',
                definitions: {
                    H: {
                        validator: '[0-2]',
                    },
                    h: {
                        validator: function (ch, maskset, pos) {
                            var firstDigit = maskset.buffer[pos - 1];
                            if (firstDigit === '2') {
                                return /[0-3]/.test(ch);
                            }
                            else {
                                return /[0-9]/.test(ch);
                            }
                        },
                    },
                    M: {
                        validator: '[0-5]',
                    },
                    m: {
                        validator: '[0-9]',
                    },
                },
                insertMode: true,
                showMaskOnHover: false,
                inputmode: 'numeric',
                alias: 'datetime',
                oncomplete: () => {
                    this.updatePickupData('arrival_time', input.value);
                },
                oncleared: () => {
                    this.updatePickupData('arrival_time', '');
                },
                onincomplete: () => {
                    this.updatePickupData('arrival_time', input.value);
                },
            }).mask(input);
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
    componentDidLoad() {
        if (this.defaultPickupData) {
            this.initializeInputMask();
        }
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
            const isValid = this.pickupService.validateForm(this.pickupData);
            if (isValid.error) {
                this.cause = isValid.cause;
                return;
            }
            if (this.cause) {
                this.cause = null;
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
        var _a;
        return (h(Host, { key: '278ca97847a89137370ddbdeec1027b4b017b0b7', class: 'p-0' }, h("ir-title", { key: '29ab67e9b5598ac9cea4db765c1b931471e4b5d3', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_Pickup, displayContext: "sidebar" }), h("section", { key: '391405fcc66e671527c635d4875aa246b90cf577', class: 'px-1' }, h("ir-select", { key: 'f0cd9d8ea7bf6cf52a657562e99c3066a75435b9', selectedValue: this.pickupData.location, selectContainerStyle: "mb-1", onSelectChange: this.handleLocationChange.bind(this), firstOption: locales.entries.Lcz_Pickup_NoThankYou, class: 'm-0 mb-1', LabelAvailable: false, data: this.pickupService.getAvailableLocations(locales.entries.Lcz_Pickup_YesFrom) }), this.pickupData.location > 0 && (h(Fragment, { key: '7dc8a9e1328d94499cb227283e73fa776c75d86c' }, h("div", { key: '59637a0b102cf09326694bbc95a51022f734bb6b', class: 'd-flex' }, h("div", { key: 'c6670908cf0247c15f806b7a8aad21b0d4bcee56', class: "form-group  mr-1" }, h("div", { key: 'e01976aa647c8f9140b9c1b2cc657efc0fa4465d', class: "input-group row m-0" }, h("div", { key: '7fe3e598d99cad185a7e79f2e718a0121c246102', class: `input-group-prepend col-5 p-0 text-dark border-0` }, h("label", { key: 'e2780a1e690e90479b55b4ccc1996bf9932f3fc2', class: `input-group-text  flex-grow-1 text-dark border-theme ` }, locales.entries.Lcz_ArrivalDate)), h("div", { key: 'c66f011cba5c2fb6443a1d57c0d452a06916c055', class: "form-control form-control-md col-7 d-flex align-items-center pl-0" }, h("ir-date-picker", { key: 'bbcdfdb36a6aa1edcc7edbad22e974f8712a7faf', date: this.pickupData.arrival_date, maxDate: (_a = this.bookingDates) === null || _a === void 0 ? void 0 : _a.to, minDate: this.bookingDates.from, onDateChanged: evt => {
                var _a;
                this.updatePickupData('arrival_date', (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD'));
            } }, h("input", { key: '8436d4b9e55dd93278525fbbba81c4d7d44c3ab1', type: "text", slot: "trigger", value: moment(this.pickupData.arrival_date).format('MMM DD, YYYY'), class: "form-control input-sm text-center", style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' } }))))), h("ir-input-text", { key: 'b1ab6ff8c2fb567e8bc2ccd7c66b555148f6d785', value: this.pickupData.arrival_time, error: this.cause === 'arrival_time' && !this.pickupData.arrival_time, label: locales.entries.Lcz_Time, inputStyles: "col-sm-4", mask: {
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
            }, onTextChange: e => this.updatePickupData('arrival_time', e.detail) })), h("ir-input-text", { key: 'ef20a2ab90530e033da431002d15e7d05aecf9e5', value: this.pickupData.flight_details, label: locales.entries.Lcz_FlightDetails, onTextChange: e => this.updatePickupData('flight_details', e.detail), placeholder: "", inputStyles: this.cause === 'flight_details' ? 'border-danger' : '' }), h("ir-select", { key: '63fcf2130950918a384500361efbf1ee22d45cf1', selectContainerStyle: "mb-1", selectStyles: this.cause === 'vehicle_type_code' ? 'border-danger' : '', onSelectChange: this.handleVehicleTypeChange.bind(this), firstOption: locales.entries.Lcz_Select, selectedValue: this.pickupData.vehicle_type_code, class: 'm-0', LabelAvailable: false, data: this.allowedOptionsByLocation.map(option => ({
                text: option.vehicle.description,
                value: option.vehicle.code,
            })) }), h("div", { key: 'c8c26d042ba630c75aad8b419a958e54eb7ac3df', class: 'd-flex flex-column flex-md-row' }, h("ir-select", { key: '47eb981f190ad18587294eccc28b525d228bbb03', labelBorder: "theme", selectContainerStyle: "mb-1", onSelectChange: this.handleVehicleQuantityChange.bind(this), selectStyles: this.cause === 'number_of_vehicles' ? 'border-danger' : '', selectedValue: this.pickupData.number_of_vehicles, labelWidth: 7, class: 'm-0  mb-md-0 mr-md-1 flex-fill', label: locales.entries.Lcz_NbrOfVehicles, data: this.vehicleCapacity.map(i => ({
                text: i,
                value: i,
            })) }), h("ir-input-text", { key: '55a9392be31bcc531804c88c2fc0bbcb6508841e', labelBorder: "theme", readonly: true, value: this.pickupData.due_upon_booking, labelWidth: 7, label: `${locales.entries.Lcz_DueUponBooking}  ${this.pickupData.currency.symbol}`, placeholder: "", class: "" })))), h("div", { key: '2795a56cae26d47fbf31e53f4bf7251158e6845d', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: '610c39a03d0f668a5af3515103bb1cab2c63c3ad', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  ${this.defaultPickupData || this.pickupData.location !== -1 ? 'mr-sm-1' : ''}`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), (this.defaultPickupData || this.pickupData.location !== -1) && (h("ir-button", { key: '90ec488a7ce74b788995b1d49b911cf3f923ec44', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.savePickup.bind(this) }))))));
    }
    static get is() { return "ir-pickup"; }
    static get encapsulation() { return "scoped"; }
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
            "cause": {}
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
