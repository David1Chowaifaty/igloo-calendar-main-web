import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { a as axios } from './axios.js';
import { r as renderTime } from './utils.js';
import { d as defineCustomElement$7 } from './ir-button2.js';
import { d as defineCustomElement$6 } from './ir-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-icon2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

class PickupService {
    async savePickup(params, booking_nbr, is_remove) {
        try {
            const splitTime = params.arrival_time.split(':');
            await axios.post(`/Do_Pickup`, {
                booking_nbr,
                is_remove,
                currency: params.currency,
                date: params.arrival_date,
                details: params.flight_details,
                hour: splitTime[0],
                minute: splitTime[1],
                nbr_of_units: params.number_of_vehicles,
                selected_option: params.selected_option,
                total: +params.due_upon_booking,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    transformDefaultPickupData(data) {
        const arrival_time = data.hour && data.minute ? renderTime(data.hour) + ':' + renderTime(data.minute) : '';
        return {
            arrival_date: data.date,
            arrival_time,
            currency: data.currency,
            due_upon_booking: data.total.toFixed(2),
            flight_details: data.details,
            location: data.selected_option.location.id,
            number_of_vehicles: data.nbr_of_units,
            selected_option: data.selected_option,
            vehicle_type_code: data.selected_option.vehicle.code,
        };
    }
    getAvailableLocations(message) {
        let locations = [];
        calendar_data.pickup_service.allowed_options.forEach(option => {
            if (locations.filter(location => location.value === option.location.id).length === 0) {
                locations.push({
                    text: message + ' ' + option.location.description,
                    value: option.location.id,
                });
            }
        });
        return locations;
    }
    validateForm(params) {
        if (params.arrival_time.split(':').length !== 2) {
            return {
                error: true,
                cause: 'arrival_time',
            };
        }
        if (params.flight_details === '') {
            return {
                error: true,
                cause: 'flight_details',
            };
        }
        if (params.vehicle_type_code === '') {
            return {
                error: true,
                cause: 'vehicle_type_code',
            };
        }
        if (params.number_of_vehicles === 0) {
            return {
                error: true,
                cause: 'number_of_vehicles',
            };
        }
        return { error: false };
    }
    getNumberOfVehicles(capacity, numberOfPersons) {
        let total_number_of_vehicles = Math.ceil(numberOfPersons / capacity);
        let startNumber = total_number_of_vehicles > 1 ? total_number_of_vehicles : 1;
        let bonus_number = total_number_of_vehicles > 1 ? 2 : 3;
        return Array.from({ length: total_number_of_vehicles + bonus_number }, (_, i) => startNumber + i);
    }
    getPickUpPersonStatus(code) {
        const getCodeDescription = calendar_data.pickup_service.allowed_pricing_models.find(model => model.code === code);
        if (!getCodeDescription) {
            return null;
        }
        return getCodeDescription.description;
    }
    updateDue(params) {
        const getCodeDescription = this.getPickUpPersonStatus(params.code);
        if (!getCodeDescription) {
            return;
        }
        if (getCodeDescription === 'Person') {
            return params.amount * params.numberOfPersons;
        }
        else {
            return params.amount * params.number_of_vehicles;
        }
    }
}

const irPickupCss = ".sc-ir-pickup-h{display:block}.custom-card-container.sc-ir-pickup{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e4e5ec}.card-title.sc-ir-pickup{flex:1}.border-theme.sc-ir-pickup{border:1px solid #cacfe7}";
const IrPickupStyle0 = irPickupCss;

const IrPickup = /*@__PURE__*/ proxyCustomElement(class IrPickup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
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
            arrival_date: hooks().format('YYYY-MM-DD'),
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
        return (h(Host, { key: '50a47b8d1345b98b8879ff1422a4bd3cb6a7d6a2', class: 'p-0' }, h("ir-title", { key: 'fb00b5ee6024fac171440e5c1f23f488cc0b2ba7', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales.entries.Lcz_Pickup, displayContext: "sidebar" }), h("section", { key: 'ebdcc65165c50adcaf34e1e42b9d81464f347aa4', class: 'px-1' }, h("ir-select", { key: '6dbece05d4f8beb0277fce1b525219d81837a127', selectedValue: this.pickupData.location, selectContainerStyle: "mb-1", onSelectChange: this.handleLocationChange.bind(this), firstOption: locales.entries.Lcz_Pickup_NoThankYou, class: 'm-0 mb-1', LabelAvailable: false, data: this.pickupService.getAvailableLocations(locales.entries.Lcz_Pickup_YesFrom) }), this.pickupData.location > 0 && (h(Fragment, { key: '0bdd098b0711e6c0885fdbb0384fdb20d4961e5b' }, h("div", { key: '4acc5b1b6b45a6e060d2d5a5a5750ac32450355f', class: 'd-flex' }, h("div", { key: '71cd1809b86164e8c3c0155ec66b21b0418f9726', class: "form-group  mr-1" }, h("div", { key: 'de81af8d9d298aa64dfafa963fb3a162014c6642', class: "input-group row m-0" }, h("div", { key: 'bca848a30a5175788dbd1f2e5a8fa70253d78ee3', class: `input-group-prepend col-5 p-0 text-dark border-0` }, h("label", { key: '73343bcf9e9f9bf3f4595cf6d45c8337576216ce', class: `input-group-text  flex-grow-1 text-dark border-theme ` }, locales.entries.Lcz_ArrivalDate)), h("div", { key: '7a9d0b80ded19c14515ec27cbd1e6b7581bdf7e4', class: "form-control form-control-md col-7 d-flex align-items-center pl-0" }, h("ir-date-picker", { key: 'ff3d9b25b2c58bb9ea915d99833c42699eb708af', date: this.pickupData.arrival_date, maxDate: (_a = this.bookingDates) === null || _a === void 0 ? void 0 : _a.to, minDate: this.bookingDates.from, onDateChanged: evt => {
                var _a;
                this.updatePickupData('arrival_date', (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD'));
            } }, h("input", { key: 'cd68ea8be20f6483882619578421b01b9e89d05c', type: "text", slot: "trigger", value: hooks(this.pickupData.arrival_date).format('MMM DD, YYYY'), class: "form-control input-sm text-center", style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' } }))))), h("div", { key: 'e93e82efb2fa1ca7cc52a46e9d4696e903b5933f', class: "form-group" }, h("div", { key: '559a4b1bf43702053243f80a9377e94b08226d5a', class: "input-group  row m-0" }, h("div", { key: '711a3d4f2f587f6efa956610d84f07c1cb548b06', class: `input-group-prepend col-4 col-sm-3 p-0 text-dark border-0` }, h("label", { key: '9131e8f8dcd54d9a2f11108398f40b0c8c86278a', htmlFor: "pickup", class: `input-group-text flex-grow-1 text-dark border-theme` }, locales.entries.Lcz_Time)), h("input", { key: '05a4c7e7feca19e65b2c8b52482fa01b96552eb0', type: "text", value: this.pickupData.arrival_time, id: "pickup-time", class: `form-control col-8 col-sm-4 ${this.cause === 'arrival_time' && 'border-danger'}` })))), h("ir-input-text", { key: '58710516a14e1ef5dc99ef3996d48d4c0e27d5d7', value: this.pickupData.flight_details, label: locales.entries.Lcz_FlightDetails, onTextChange: e => this.updatePickupData('flight_details', e.detail), placeholder: "", inputStyles: this.cause === 'flight_details' ? 'border-danger' : '' }), h("ir-select", { key: '32ea6d78b170b2159bdcff532b380a5adce097e6', selectContainerStyle: "mb-1", selectStyles: this.cause === 'vehicle_type_code' ? 'border-danger' : '', onSelectChange: this.handleVehicleTypeChange.bind(this), firstOption: locales.entries.Lcz_Select, selectedValue: this.pickupData.vehicle_type_code, class: 'm-0', LabelAvailable: false, data: this.allowedOptionsByLocation.map(option => ({
                text: option.vehicle.description,
                value: option.vehicle.code,
            })) }), h("div", { key: '4be4bd7e4c64434ec08e3d2bf4ba2e6986b2f36b', class: 'd-flex flex-column flex-md-row' }, h("ir-select", { key: '4284cffb55fcfd7f9265bd568c79ac40f2cb5af0', labelBorder: "theme", selectContainerStyle: "mb-1", onSelectChange: this.handleVehicleQuantityChange.bind(this), selectStyles: this.cause === 'number_of_vehicles' ? 'border-danger' : '', selectedValue: this.pickupData.number_of_vehicles, labelWidth: 7, class: 'm-0  mb-md-0 mr-md-1 flex-fill', label: locales.entries.Lcz_NbrOfVehicles, data: this.vehicleCapacity.map(i => ({
                text: i,
                value: i,
            })) }), h("ir-input-text", { key: '0551288c3c2e55860decf31c77a0c94df1650ccf', labelBorder: "theme", readonly: true, value: this.pickupData.due_upon_booking, labelWidth: 7, label: `${locales.entries.Lcz_DueUponBooking}  ${this.pickupData.currency.symbol}`, placeholder: "", class: "" })))), h("div", { key: 'c8e3b0535b6a81040bda5a25e58f6c47fb0f823f', class: 'd-flex flex-column flex-sm-row mt-3' }, h("ir-button", { key: 'f6293b0013e7870049cc378654626b4bd77d7c2a', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  ${this.defaultPickupData || this.pickupData.location !== -1 ? 'mr-sm-1' : ''}`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), (this.defaultPickupData || this.pickupData.location !== -1) && (h("ir-button", { key: '9f5917ce2b52ea2333b2804cd6a644a6107001ba', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_color: "primary", onClick: this.savePickup.bind(this) }))))));
    }
    get el() { return this; }
    static get style() { return IrPickupStyle0; }
}, [2, "ir-pickup", {
        "defaultPickupData": [16],
        "numberOfPersons": [2, "number-of-persons"],
        "bookingNumber": [1, "booking-number"],
        "bookingDates": [16],
        "isLoading": [32],
        "allowedOptionsByLocation": [32],
        "pickupData": [32],
        "vehicleCapacity": [32],
        "cause": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pickup", "ir-button", "ir-date-picker", "ir-icon", "ir-icons", "ir-input-text", "ir-select", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPickup);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPickup as I, defineCustomElement as d };

//# sourceMappingURL=ir-pickup2.js.map