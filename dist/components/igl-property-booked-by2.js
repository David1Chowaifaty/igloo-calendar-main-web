import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { z } from './index3.js';
import { v as validateEmail } from './utils.js';
import { m as modifyBookingStore, b as booking_store } from './booking.store.js';
import { d as defineCustomElement$6 } from './ir-autocomplete2.js';
import { d as defineCustomElement$5 } from './ir-combobox2.js';
import { d as defineCustomElement$4 } from './ir-country-picker2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-phone-input2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';
import { v as v4 } from './v4.js';

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.row.sc-igl-booking-form.sc-igl-property-booked-by{padding:0 !important}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}";
const IglPropertyBookedByStyle0 = iglPropertyBookedByCss;

const IglPropertyBookedBy = /*@__PURE__*/ proxyCustomElement(class IglPropertyBookedBy extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
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
        this.expiryYears = Array.from({ length: 12 }, (_, index) => (currentYear + index).toString());
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
        return (h(Host, { key: '56d03c34a8d68605580a779b105416133e4af2a0' }, h("div", { key: '4cde2eb95f618af1d9f88596249428993db04433', class: "text-left mt-3" }, h("div", { key: '00d4e983493d0fd382b5f1ae18067fc9a59157a0', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '36a4248c076b051f58afc4caa237ea0a19752900', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: 'fcf91ce891d6a3a7dd3fa25a5a39c4bad8bb32ef', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '128ec4041d7013568f7045e0e8d70eb85dd139f6', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: 'b316bc1d0e7face8094b49e63308e9be991d596b', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '0f594d6979727e23be62921cc6963045965e6562', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'bc246fcbace157eb5e1649ba54a936f9151cbbde', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '4169183255e1c91f115ea8cca8ff0d9b7be4b274', class: "p-0 flex-fill " }, h("div", { key: 'de43776b663359a8d60c8261ec60028734caf191', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '473af2f963068e470417e2de4ef0c273679108ab', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: 'f6658eda7ee6c0bc65ce3df44efe93b0494d6fd6', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'e79bcf6c0da299b88e7451e3c7f4a129351d22b4', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: '5a81ea54f2010be43cc46d896bf21dc2bbf597b7', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '2e109c10f3f10863093da9ca851ca7cd15e9b117', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '6f04568f3a68d76074b96025efbd2557f0d77c48', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'de1920ac664aa264ff87abece83c10c4cd0b780b', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '3ffbed1f5cf5d1e0e3bbf7120f4d3dfb15472e47', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'ad0b9de2cb6bcdaa3d072294cebcf24d4d3373e3', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: 'd3f24d73389502f386ad5b764963896705f7c4ce', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: '53268b9a382ed5036bbec9529365f87288250bf3', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '48f0e45980f303e85f7fc3c8d8c24d60edb60d80', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '1ea212dd72b1f7a473fe028060e106f5b662ff4c', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: '3af93ae6157cb553e7ccf0c9fd1bc0cac1e9eff4', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: '7638601fa8d83b8e30014529e8ffceb634106d04', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '64ef627494b58e51fb1699ffbb900d6194eec1ed', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '258fa7eb5a19bd6d73b96999567b2e1c2d29b673', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '4a398787760f885da6c8969ba03f78419b38e9f8', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: 'eb5aedd7bd1850adcef4862f1d3587988a29155b', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '0f6d453cb0782b3e568d890aca4ab35d8a26f1b0', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: 'fd7073839da1e16ceaa1b9a394688dde6c1b29e1', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: '5da33f4970aa74e93f94fb51742714ac09e6815a', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '8ab82cb1861b9ac1601714856bd1688aef8380d1', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '3fbc8e3914201beb6d0b664a5f52b1eee977db36' }, h("div", { key: '01f89243e981c07f16e19928393c9b2c5335a647', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'f3851dcdda354540891fbf64c1cab262e6a6f781', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: 'f5a56009b476ba15c0d51178d63d98c4b57b2e47', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '4c04f93af66eb39931040a4dbeab55417ddaf591', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '984afe63735e10707f4b6a62d17711521e766f96', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5ea7df570bc0de813cc9e1918a0d9565223d80be', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '3f91b3c296fd354378d8aeefe5472889d516f2c4', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '576d74107517f3b4be840e3698e018eb175c5ac2', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '90389cf23a4a7fe8e759e99ff5c75f3371875cd4', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '669a01bd3ce8135145d07319c34b9fb20525d333', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: 'e9cac859412c6db99a640f6589d61834c66c460e', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'b801b11ba2172ab6168b3e44e2ddbd24af4a1bb5', class: "p-0 m-0" }, h("select", { key: '4abec4d40763887d3c306691bf14f6fb09aa26ab', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '6f5a9a0dd862491c04c84c40f88d40f5284cbb68', class: "p-0 m-0 ml-1" }, h("select", { key: 'c5294b81e0c0062039bd595c08cd2e84373b338d', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: 'a0f11dabe721eb032c96d542e285cc0c4ad646cb', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '50290f433ff19f9f24a681251c9377ff5d3ceeb7', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '73cf700f0db31359c18da7db3ed040104e9ec52b', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'a3e349a18460621f1547ac421bceabf708132a14', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
    static get style() { return IglPropertyBookedByStyle0; }
}, [2, "igl-property-booked-by", {
        "language": [1],
        "showPaymentDetails": [4, "show-payment-details"],
        "defaultData": [16],
        "countries": [16],
        "propertyId": [2, "property-id"],
        "isButtonPressed": [32],
        "bookedByData": [32]
    }, [[16, "buttonClicked", "handleButtonClicked"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-property-booked-by", "ir-autocomplete", "ir-combobox", "ir-country-picker", "ir-input-text", "ir-phone-input", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglPropertyBookedBy);
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglPropertyBookedBy as I, defineCustomElement as d };

//# sourceMappingURL=igl-property-booked-by2.js.map