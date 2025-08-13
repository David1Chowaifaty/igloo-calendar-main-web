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
        return (h(Host, { key: '0ea782174d50276aaf1b09f003eb419ac893257a' }, h("div", { key: '6b753d99773a2f7c9d2eba4fb0495191907fc4c7', class: "text-left mt-3" }, h("div", { key: 'a780c9421d94ecc367dd732517d75e853d91afb8', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: 'd58f4c1806d206ad445b78732a047960355e6f16', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '874bbb2b3f5340351fddcb9aa26ed5e97f2b4825', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '7fcf6cfd21038c29c3372849f262bcadb66efd1e', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: 'e7e76209748b2f0a1582f2364e7190fe13297cf7', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '657c784b089d91569a8a4f6d60d21e75710f2ef5', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '240b5be884581076c33150210b36b14ec77b766c', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: 'd7a979843bee0f640a00b372908ddf94c29ff624', class: "p-0 flex-fill " }, h("div", { key: 'c509ef36d4b9162fd775539e251aa04b9b5bb21f', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '5556165bb43abc3f0e1591228a67bbadf9a9b92e', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '6c44a48c7caa387130e78ee4c530a1cb46b6718e', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '4c4b0add70d47e44c2d9f531fd9d1efe1fd8cc76', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: '41363d5342e4d0fee32c781d033dac9a97c663d0', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '7461e190681b615dd2e26fd75fb5837cafa90cd1', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '3d2d882dcfb5abd42c44d55a076cc6ebae7704c9', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '3ad7e39340f24673210545e3b2387157bbce9003', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '34e6b5628a62e708c6956ede5c06be8ae1473aef', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'fa6ffb4f6c860f76e6d431c6cdd24ae290819505', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: '06d6bbb395edec624d76033b9218ea9e4dbb7ad3', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: '962112da6166d076c91e19fda47bdaec71f98945', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '3bd86a0eab5f5906c2b863745eb5db6d1432a804', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: 'd8912b098fd8aca007fd088f5d438210b6d1bfac', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: '1a981aa81ac1f4f2fd7b68ed8f6921da6f07ea42', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: '4048d787bdc294875b9df38e82254e25323ebc52', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '4483fccaaecf24e50e324c9bbd65850a95e2fe28', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: 'e41336fdf5305119f976323791756bb006c6fad5', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '979cbbd98e4ac15ba06e8671d8eb4e23d786bc7b', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '8609849db8472bc73ead0ae0aaf1bffa930437b7', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: 'ddc4cb6522cabd9e5e9ed1ecc8e05762e84189bb', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '7f705b771805f7df05a1e005dd38632260598f57', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: '6563f3ce79193d3ad71b0b6a8bf48e4d16824b14', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '116f0245fd5772b407b6d158fac309dfce7c4994', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '263c0f847d59ea41a1110b2243313048f8e53093' }, h("div", { key: '63d062cff01b19ba6eb8d6d4992893098fe310ed', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '808d928b8a44cce1974c2f5068eb9b522c9e2388', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '678d11cf617078c6216afd480b1aebacd9547896', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '007df8a38c6fa0f8bcd81517d42603f59debc660', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: 'c24631f8da45a8d39b3319ce966e6e2efa6128c7', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '403c7df4ddaf56507fd0d0ab4b8c5151fd16077d', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '5fc0c09248ec750a1488c0664c913c9e8faff7a7', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '0eb4e73a8c5797ea838533bd292a92467577fb6e', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '90f766c409e93d32e43f4ebca7cb3ab2c2692919', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'b5673fed6853c1b7cfc7a2901b0d0086839263e9', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: 'b217488bbbcaf8db12bf54bdd7645504f7b6562e', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '3ffa9bec909a42bca3651b81f241c8b791afae23', class: "p-0 m-0" }, h("select", { key: 'eb3d081d2cc73b699843133b97754b1f0482cfc6', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: 'e792e8f52abfcae3c7515d684c5e6a493f85f6e9', class: "p-0 m-0 ml-1" }, h("select", { key: 'f49a40505154f34beb2c9d7e2c6c0eca2c519674', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '000d62206a0ccf09390705289f3f33e5ab7af199', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '473239ccf34077db1c87ec87bf143b2a3699cbcf', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: 'f808883172b3627097549325a41bbca830263047', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'de8eca87ac850adfb2730891514b277a6891c7a6', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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
