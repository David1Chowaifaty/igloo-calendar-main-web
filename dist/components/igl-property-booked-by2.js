import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { z } from './index3.js';
import { v as validateEmail } from './utils.js';
import { m as modifyBookingStore, b as booking_store } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$9 } from './ir-autocomplete2.js';
import { d as defineCustomElement$8 } from './ir-combobox2.js';
import { d as defineCustomElement$7 } from './ir-country-picker2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-phone-input2.js';
import { d as defineCustomElement$4 } from './ir-picker2.js';
import { d as defineCustomElement$3 } from './ir-picker-item2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';
import { v as v4 } from './v4.js';

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.row.sc-igl-booking-form.sc-igl-property-booked-by{padding:0 !important}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.property-booked-by__money-transfer-description.sc-igl-property-booked-by *.sc-igl-property-booked-by{margin:0 !important;margin-bottom:0 !important;margin-top:0 !important}.property-booked-by__money-transfer-description.sc-igl-property-booked-by,.property-booked-by__money-transfer-description.sc-igl-property-booked-by .sc-igl-property-booked-by:where(*,*.sc-igl-property-booked-by::before,*.sc-igl-property-booked-by::after){margin:0.5rem !important}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}";
const IglPropertyBookedByStyle0 = iglPropertyBookedByCss;

const IglPropertyBookedBy = /*@__PURE__*/ proxyCustomElement(class IglPropertyBookedBy extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
    }
    language;
    showPaymentDetails = false;
    defaultData;
    countries = [];
    propertyId;
    isButtonPressed = false;
    bookedByData = {
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
    dataUpdateEvent;
    bookingService = new BookingService();
    arrivalTimeList = [];
    expiryMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    expiryYears = [];
    currentMonth = '01';
    country;
    paymentMethods = [];
    componentWillLoad() {
        this.assignCountryCode();
        this.initializeExpiryYears();
        this.initializeDateData();
        this.populateBookedByData();
        this.paymentMethods = calendar_data.property.allowed_payment_methods.filter(p => p.is_active && !p.is_payment_gateway);
        if (this.paymentMethods.length > 0) {
            modifyBookingStore('selectedPaymentMethod', { code: this.paymentMethods[0].code });
        }
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
                this.isButtonPressed = true;
                break;
        }
    }
    initializeExpiryYears() {
        const currentYear = new Date().getFullYear();
        this.expiryYears = Array.from({ length: 12 }, (_, index) => (currentYear + index).toString());
    }
    async assignCountryCode() {
        const country = await this.bookingService.getUserDefaultCountry();
        const countryId = country['COUNTRY_ID'];
        this.country = countryId;
        this.bookedByData = { ...this.bookedByData, isdCode: countryId.toString(), countryId };
    }
    initializeDateData() {
        const dt = new Date();
        const month = dt.getMonth() + 1;
        this.currentMonth = month < 10 ? `0${month}` : month.toString();
    }
    populateBookedByData() {
        this.bookedByData = this.defaultData ? { ...this.bookedByData, ...this.defaultData } : {};
        this.arrivalTimeList = this.defaultData?.arrivalTime || [];
        this.bookedByData = { ...this.bookedByData, selectedArrivalTime: this.arrivalTimeList[0].CODE_NAME };
        if (!this.bookedByData.expiryMonth) {
            this.bookedByData.expiryMonth = this.currentMonth;
        }
        if (!this.bookedByData.expiryYear) {
            this.bookedByData.expiryYear = new Date().getFullYear();
        }
    }
    handleDataChange(key, event) {
        this.bookedByData[key] = key === 'emailGuest' ? event.target.checked : event.target.value;
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
        if (key === 'countryId') {
            this.bookedByData = {
                ...this.bookedByData,
                isdCode: event.target.value,
            };
        }
        // console.log(this.bookedByData);
    }
    handleCountryChange(value) {
        this.bookedByData = {
            ...this.bookedByData,
            isdCode: value,
            countryId: value,
        };
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
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
        try {
            const email = this.bookedByData.email;
            if (z.string().email().safeParse(email).success) {
                const res = await this.bookingService.getUserInfo(email);
                if (res !== null) {
                    this.bookedByData = {
                        ...this.bookedByData,
                        id: res.id,
                        firstName: res.first_name,
                        lastName: res.last_name,
                        contactNumber: res.mobile_without_prefix,
                        countryId: res.country_id,
                        isdCode: res?.country_phone_prefix ?? res.isdCode.toString(),
                    };
                    console.log(this.bookedByData);
                }
                else {
                    let prevBookedByData = { ...this.bookedByData };
                    prevBookedByData = { ...prevBookedByData, email };
                    this.bookedByData = { ...prevBookedByData };
                }
            }
            else {
                let prevBookedByData = { ...this.bookedByData };
                prevBookedByData = { ...prevBookedByData, email: '' };
                this.bookedByData = { ...prevBookedByData };
            }
            this.dataUpdateEvent.emit({
                key: 'bookedByInfoUpdated',
                data: { ...this.bookedByData },
            });
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    updateGuest(props) {
        modifyBookingStore('checkout_guest', { ...(booking_store.checkout_guest ?? {}), ...props });
    }
    handleComboboxChange(e) {
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
            this.bookedByData = {
                ...this.bookedByData,
                id: data.id,
                firstName: data.first_name,
                lastName: data.last_name,
                contactNumber: data.mobile_without_prefix,
                countryId: data.country_id,
                isdCode: data['country_phone_prefix'] ?? data?.country_id,
            };
            this.dataUpdateEvent.emit({
                key: 'bookedByInfoUpdated',
                data: this.bookedByData,
            });
        }
    }
    clearEvent() {
        this.bookedByData = {
            ...this.bookedByData,
            id: '',
            firstName: '',
            lastName: '',
            contactNumber: '',
            isdCode: this.country.toString(),
            countryId: this.country,
        };
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
    }
    render() {
        return (h(Host, { key: 'f876d5d2e2e7e66d1f3ab78055c943b8c2f10c68' }, h("div", { key: 'f395b7c10f4a5da079536f9b2d39ab11c6270d26', class: "text-left mt-3" }, h("div", { key: '4786d6eedf275b9bb7de99b019e7e61f651cf332', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: 'b90dd9e70e5f58d29bdb31230a1aa17f34ceb11c', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: 'df61f5900ec1986e92f76ce69eb8785013bdb0a1', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'd205b05ae1d47a412811bed9863f548bc31b42ad', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '9fd20f80f95188acc736e5d101f5b0fd2fdd3138', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '018e2f7ac8ad949179d082d5323effa9eee5be52', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '10340b95e215fb0e7025d99b541bebab7d186207', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '49e5e46b104b4e6d27062e7b00eeb2a66b29fd62', class: "p-0 flex-fill " }, h("div", { key: '839bf08aff978946d58fa054bb214b06a1b415f3', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'ad6b465ae7e52776c85163a54c4daf17444664e8', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: 'c38b41f333c867d2423ffbd274cd9c7d25171a8b', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'ec574fd5aa4149a19ad8f37e1ec46376a316b9b6', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: 'cee1d9db0c88f978fb67659a367d4f0a960e7bdf', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '609f9bdd1172d32c04ff1869b4ed74bf6355ced1', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '2446b2f825849d6ef14b001daeaa5a60173ade67', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '29e8ddb4440b5a08108171ea233d68e4195fbf01', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '00a97c5ad5e7fa42aaf6eadfc89a270ace664279', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '3d5842ab9edc2a2596ec1665632b741a4947c750', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: '941d9fae2003b4e5f7c134981d0030959d5f3657', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: 'f1b1f88324108c93572e97e382ab4ac003f77834', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '78b90cebd5540359993d8f35363ac64f2b2f5e5d', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: 'f156043a3853d53c7502758bfd39cd02b6cd2df1', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: '6c3e1ac2f31752ff73780d71eb80166ae2c64535', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: '4bb8eda795172337777630b03e1baf5fc3534080', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '707dd9c6a4f6dab5759f805fb858e463493dde2d', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '1e9f19174938798f6a8f0ff938212141071f2c55', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '0b5d95fff3d82f7dc23a113d89c4c6b6314126e4', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '5afbb6c71c0ba0ab52f40c2938a26f10c1fc689e', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '39a7cd424d4ea91f9c35beccf0318aa5001bc475', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: 'b7a069a1347d6f39535182e6750d990aadc7523a', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: '839f44b65f273f495cb0029c47570780728bdbbb', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: 'd8f50d940ff56516b844d0c2d005c3752004a1ff', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.paymentMethods.length > 1 && (h("div", { key: '92b907b0dec8ee240070894e91131a780f1801dd', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '2dcf8ee9599ecc746c3b80152e200ae6a068b1d8', class: "p-0 m-0 margin3" }, "Payment Method"), h("div", { key: '7ad946c3a75ba60122c8c4221c0e9318b2d2bd23', class: "p-0 m-0  controlContainer flex-fill" }, h("ir-select", { key: '862d3b762e883b8ae17516fa6747f3ae3db255ca', showFirstOption: false, selectedValue: booking_store?.selectedPaymentMethod?.code, data: this.paymentMethods.map(p => ({
                text: p.description,
                value: p.code,
            })), onSelectChange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.detail,
            }) })))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '49d27409905d066096bbedaa8924c284d08ecb11' }, h("div", { key: '9703f6801e7638a7f89ded4477b348901228a6a1', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'fc9cbb2c13f3b8befc51fe04a48d7db895ca9755', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '3ab135a8ce4da1634f7a2fcb3785e7243353ea60', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '2ed3bd997159889f1b943c6f78d288e8f5ad7fcf', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '074e008c081aef06b595fa73ad9a734f6fd37819', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '34d23006e0baa6eb207e8e6c0459021f86ccfff9', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '9c8c9b2b2f24b4f1569d872b7d4b57dc2cd89029', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'e8ef894a9d5459f3e0260dc97848fd36c934f6fa', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '4e0880ea1275649bd998fc9244038a02a1030b86', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '791416041f9dc46711399bcdc7fd70472240eb6f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: 'f9fb7f706aeecfc98b09bac51cfb37f86e0dd73a', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '75c561b9bd072fa28981ebe782477fcd770a792a', class: "p-0 m-0" }, h("select", { key: '00fdf9eba243b9f852e05710427dd61d17311e4e', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '9458258f1635ba7e8d73d6ecda5e15c28ea3274c', class: "p-0 m-0 ml-1" }, h("select", { key: '09ff4869b7b312f3885ccd4a1424b08215a732b1', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), booking_store.selectedPaymentMethod?.code === '005' && (h("div", { key: '3082d628e2bdc4516e7bd3949dd129395bceec97', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '96dcb1d8f16de2295c570670b7d3f47bef82b4f4', class: "p-0 m-0 margin3" }), h("div", { key: '98935151a6e1ae2f5df3fdfd6d451ab96caeaa6a', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: '755a9a7602adbf987a98f3485bfd4f3ab86eb8c2', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), h("div", { key: 'cff8afd91cd81023daabdf33a7eca5f1169864a4', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: 'a07c31fb7ce06c029168579b845789e762454a69', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '2dbe59842139b33c9cdd13f5e146fec8f139a3e0', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '420b0396a437e44590f043983663d734245bc421', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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
    const components = ["igl-property-booked-by", "ir-autocomplete", "ir-combobox", "ir-country-picker", "ir-input-text", "ir-phone-input", "ir-picker", "ir-picker-item", "ir-select", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglPropertyBookedBy);
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
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