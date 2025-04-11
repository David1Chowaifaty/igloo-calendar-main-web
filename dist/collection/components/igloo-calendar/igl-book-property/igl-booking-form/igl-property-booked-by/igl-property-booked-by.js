import { Host, h, Fragment } from "@stencil/core";
import { BookingService } from "../../../../../services/booking.service";
import { v4 } from "uuid";
import locales from "../../../../../stores/locales.store";
import { z } from "zod";
import { validateEmail } from "../../../../../utils/utils";
import booking_store, { modifyBookingStore } from "../../../../../stores/booking.store";
export class IglPropertyBookedBy {
    constructor() {
        this.showPaymentDetails = false;
        this.countries = [];
        this.isButtonPressed = false;
        this.bookingService = new BookingService();
        this.arrivalTimeList = [];
        this.expiryMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.expiryYears = [];
        this.currentMonth = '01';
        this.bookedByData = {
            id: undefined,
            email: '',
            firstName: '',
            lastName: '',
            countryId: '',
            isdCode: '',
            contactNumber: '',
            selectedArrivalTime: '',
            emailGuest: false,
            message: '',
            cardNumber: '',
            cardHolderName: '',
            expiryMonth: '',
            expiryYear: '',
        };
    }
    async componentWillLoad() {
        this.assignCountryCode();
        this.initializeExpiryYears();
        this.initializeDateData();
        this.populateBookedByData();
    }
    initializeExpiryYears() {
        const currentYear = new Date().getFullYear();
        this.expiryYears = Array.from({ length: 4 }, (_, index) => (currentYear + index).toString());
    }
    async assignCountryCode() {
        const country = await this.bookingService.getUserDefaultCountry();
        const countryId = country['COUNTRY_ID'];
        this.country = countryId;
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { isdCode: countryId.toString(), countryId });
    }
    initializeDateData() {
        const dt = new Date();
        const month = dt.getMonth() + 1;
        this.currentMonth = month < 10 ? `0${month}` : month.toString();
    }
    populateBookedByData() {
        var _a;
        this.bookedByData = this.defaultData ? Object.assign(Object.assign({}, this.bookedByData), this.defaultData) : {};
        this.arrivalTimeList = ((_a = this.defaultData) === null || _a === void 0 ? void 0 : _a.arrivalTime) || [];
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { selectedArrivalTime: this.arrivalTimeList[0].CODE_NAME });
        if (!this.bookedByData.expiryMonth) {
            this.bookedByData.expiryMonth = this.currentMonth;
        }
        if (!this.bookedByData.expiryYear) {
            this.bookedByData.expiryYear = new Date().getFullYear();
        }
        console.log('initial bookedby data', this.bookedByData);
    }
    handleDataChange(key, event) {
        this.bookedByData[key] = key === 'emailGuest' ? event.target.checked : event.target.value;
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: Object.assign({}, this.bookedByData),
        });
        if (key === 'countryId') {
            this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { isdCode: event.target.value });
        }
        // console.log(this.bookedByData);
    }
    handleCountryChange(value) {
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { isdCode: value, countryId: value });
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: Object.assign({}, this.bookedByData),
        });
        // console.log(this.bookedByData);
    }
    handleNumberInput(key, event) {
        const inputElement = event.target;
        const inputValue = inputElement.value;
        // Regular expression to match only numeric characters (0-9)
        const numericRegex = /^[0-9]+$/;
        if (!numericRegex.test(inputValue)) {
            // If the input is not numeric, prevent it from being entered
            inputElement.value = inputValue.replace(/[^0-9]/g, '');
        }
        if (inputValue === inputElement.value) {
            this.handleDataChange(key, event);
        }
    }
    // async handleEmailInput(key, event: InputEvent) {
    //   const inputElement = event.target as HTMLInputElement;
    //   const inputValue = inputElement.value;
    //   if (z.string().email().safeParse(inputValue).success) {
    //     this.handleDataChange(key, event);
    //   }
    // }
    async checkUser() {
        var _a;
        try {
            const email = this.bookedByData.email;
            if (z.string().email().safeParse(email).success) {
                const res = await this.bookingService.getUserInfo(email);
                if (res !== null) {
                    this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: res.id, firstName: res.first_name, lastName: res.last_name, contactNumber: res.mobile_without_prefix, countryId: res.country_id, isdCode: (_a = res === null || res === void 0 ? void 0 : res.country_phone_prefix) !== null && _a !== void 0 ? _a : res.isdCode.toString() });
                    console.log(this.bookedByData);
                }
                else {
                    let prevBookedByData = Object.assign({}, this.bookedByData);
                    prevBookedByData = Object.assign(Object.assign({}, prevBookedByData), { email });
                    this.bookedByData = Object.assign({}, prevBookedByData);
                }
            }
            else {
                let prevBookedByData = Object.assign({}, this.bookedByData);
                prevBookedByData = Object.assign(Object.assign({}, prevBookedByData), { email: '' });
                this.bookedByData = Object.assign({}, prevBookedByData);
            }
            this.dataUpdateEvent.emit({
                key: 'bookedByInfoUpdated',
                data: Object.assign({}, this.bookedByData),
            });
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    updateGuest(props) {
        var _a;
        modifyBookingStore('checkout_guest', Object.assign(Object.assign({}, ((_a = booking_store.checkout_guest) !== null && _a !== void 0 ? _a : {})), props));
    }
    handleComboboxChange(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { key, data } = e.detail;
        console.log(key, data);
        if (key === 'blur') {
            if (z.string().email().safeParse(data).success) {
                this.bookedByData.email = data;
                this.checkUser();
            }
            else if (this.bookedByData.email !== '' && data == '') {
                this.bookedByData.email = '';
            }
            this.dataUpdateEvent.emit({
                key: 'bookedByInfoUpdated',
                data: this.bookedByData,
            });
        }
        if (key === 'select') {
            this.bookedByData.email = data.email;
            this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: data.id, firstName: data.first_name, lastName: data.last_name, contactNumber: data.mobile_without_prefix, countryId: data.country_id, isdCode: (_a = data['country_phone_prefix']) !== null && _a !== void 0 ? _a : data === null || data === void 0 ? void 0 : data.country_id });
            this.dataUpdateEvent.emit({
                key: 'bookedByInfoUpdated',
                data: this.bookedByData,
            });
        }
        // console.log('data', data, 'key', key);
        // switch (key) {
        //   case 'blur':
        //     if (data !== '') {
        //       this.bookedByData.email = data;
        //       this.checkUser();
        //     } else {
        //       let prevBookedByData = { ...this.bookedByData };
        //       prevBookedByData = { ...prevBookedByData, email: '' };
        //       this.bookedByData = { ...prevBookedByData };
        //       this.dataUpdateEvent.emit({
        //         key: 'bookedByInfoUpdated',
        //         data: { ...this.bookedByData },
        //       });
        //     }
        //     break;
        //   case 'select':
        //     this.bookedByData.email = data.email;
        //     this.bookedByData = {
        //       ...this.bookedByData,
        //       id: data.id,
        //       firstName: data.first_name,
        //       lastName: data.last_name,
        //       contactNumber: data.mobile,
        //       countryId: data.country_id,
        //       isdCode: data.country_id.toString(),
        //     };
        //     this.dataUpdateEvent.emit({
        //       key: 'bookedByInfoUpdated',
        //       data: this.bookedByData,
        //     });
        //     break;
        //   default:
        //     break;
        // }
    }
    clearEvent() {
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: '', firstName: '', lastName: '', contactNumber: '', isdCode: this.country.toString(), countryId: this.country });
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: Object.assign({}, this.bookedByData),
        });
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
                this.isButtonPressed = true;
                break;
        }
    }
    render() {
        return (h(Host, { key: '9899a8425bb328493d1020e0d9f5de3ce6707a42' }, h("div", { key: '07215e029796c2ce82e1ec9a59d7604212796062', class: "text-left mt-3" }, h("div", { key: 'dd2d2c0972df8201969e701f8b5ec2d1a554e46f', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '5167c2c86dca1dbd85241ab1c29b05149300b50c', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '8b9a18cc52f319e5a09b843d64cc46c84d439340', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'c3a73bf58b7d10f7072e24538c5bdc9b255ed401', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '1c0643f31c1517bc2410228b50dc7c289928dd46', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '5ec051257d98a1d66697e67b21df35ddb2690062', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'd2d90c113605fb54f2cd8b7761ad97ecfc1ffeaf', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '310d3e2f7a044ebafe67fc407315049c36ed1b4d', class: "p-0 flex-fill " }, h("div", { key: '0f198f35a5037f69662483d0dfa6e3d02f6ef571', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '75a93c3b377e3911d01746b963bcf0a3b65e6f6d', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: 'ab285fe85c739c21d745960095da52facca3727f', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'a5b911e48e7cef2314ebf7e2ed94c0b92601685d', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: '9eef7c3b6325e1703837446ada6f63d05eebd3bb', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '2ef54238ffdc417e59700ee32e9cac577d33eeb5', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: 'fb4d80385e8226a3f87b8c5bc3b090bf9701c8d9', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '6866b7bf6631b2bfcb39f30e5d8140ae3ceca447', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '254b541f16ceb95c376bf0b2f8f36c03391fc7b2', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5dd0b7ea03f6c0fe357be856c7baa5356f94fc2f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: '4dbe225d869c7c6bd25d01e29abf940f93358a3a', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: 'b196ec0a32ec6a8f5484955c222bb2b07617a8dc', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '67ff1f5746a5571cb266389545267fbf9cd92e83', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: 'e5f427eff7b2090071604f48bd31609116e329e2', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: 'e08392f3d853681c66739d220dd317d588b14d72', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: '5a58d879fae903c91e7c79beea8624140754fe56', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '799f5d9bba56ecc2dfa762458ffe00e7207259f8', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '56cc52c6364dd277818420b659b880c5670e1edb', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'b2e04708230dae6e04128945536f604ed2265e6a', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '1a1315f140796035624a4d8581fe47d39ad929d3', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: 'a04e0f7780a4e0a2a18aafce45f3a0284300eb48', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: 'e546cacac1ed9da34a16c0b992db92f35d154bb2', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'd712db5523e0e74cda6b104d4d509c4afb6feebd', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '89ab20445a55de157687f1750902bed07115969d', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '9f82121e2648ca785adde8226f984793ccf499e0' }, h("div", { key: '22a18aac64ec900395780c581c2f6bbeaf938051', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '0d3a1a0e230a5ffbf0b263379e1722a1cc91b23e', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '094ec717e938354759ea2010205b4efacba8a1d4', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '0e772744dec548e4cdd2214955a03e423fa85e31', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '4c60603263d63b2751d009a4aa11a56c693554cd', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5fb7625788200a61c46b414afced6e4c31afa686', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '08eb20399e69caf97feef9c4f917cdda2d13ca1a', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '0213b7251d66d7485fab46a8caa34a7db4726173', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: 'aaadfdf1a444874782676769e0a3e48e879c40d8', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '6208a73265a1e77410570794613e21c9924fb6d0', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '6762ec5ffae40a3af885ae64d10aaaa0e500d495', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'b8672f77368f3140fa7e41d1f87ff00acfb3c43f', class: "p-0 m-0" }, h("select", { key: '98b4a89712c9e5180df1d77186858140085741a5', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: 'd758f7868cb9289f4270859ea573ca3362e5ddd2', class: "p-0 m-0 ml-1" }, h("select", { key: '9808de0c3a56b0acb3e984f7444be9d1d716b8dc', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '45d7b66645b310e27ad4f0a54dc1033172904f41', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: 'f32842e00e96db3ea3a5947a88e2b6f40584db0e', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '8563546f5209d26f54a40f9dc3b577dd33420aac', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'a410d1b66567b9a8a9c23992aab40c2b94a5cb69', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
    static get is() { return "igl-property-booked-by"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-property-booked-by.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-property-booked-by.css"]
        };
    }
    static get properties() {
        return {
            "language": {
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
                "attribute": "language",
                "reflect": false
            },
            "showPaymentDetails": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "show-payment-details",
                "reflect": false,
                "defaultValue": "false"
            },
            "defaultData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
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
            },
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "propertyId": {
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
                "attribute": "property-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isButtonPressed": {},
            "bookedByData": {}
        };
    }
    static get events() {
        return [{
                "method": "dataUpdateEvent",
                "name": "dataUpdateEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "buttonClicked",
                "method": "handleButtonClicked",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-property-booked-by.js.map
