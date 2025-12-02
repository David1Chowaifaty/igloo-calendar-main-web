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
        return (h(Host, { key: '4b003dc630be78b876920ef35da2f3fd073fd284' }, h("div", { key: 'bd9c8183587e4612ba94b7090b7160c425b5fdd3', class: "text-left mt-3" }, h("div", { key: 'cc6dbfb087450820c446dd281a0345ef858bc612', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '2b8a7fd05e1cc94fa31841853122091414dfc01e', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: 'abae37b0a92434091363c4f749880e1eae2313f1', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '1a657e8132ecd7777e7efe2a4cf281229b107445', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '649633908baa0273bcb7eb154178238fa39ff8e2', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '6067fe9c6c6180351cd1149690774bd64b38a1c6', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '5b79e055714fc9677d02a515f8d80fbce21453c1', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '796ec2b3826e0ce3eed04fa1c913688d61b02fe6', class: "p-0 flex-fill " }, h("div", { key: 'c507eb5c39e2b36697cf0376068a56354ec55e15', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'feec1232ed9f62a920131d3ff48b331958577762', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '617ed5384b05be1550fa3e3ebc350e039d9ec4b4', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '829db9f627a728bb62a06bec790317eef5d917a1', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: 'b3840db638f5d0faf44cf4be4e813147f5ae65eb', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '93bdcd1400f5d31602107ffc361fe4a0f9d7afcc', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: 'e12b9c1cc36da9fd1c95a982387ff4873b63b24e', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '06e9204cd75393e4ec4d37ae7ec06f4af0cccc83', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '27f4f742c104e3731217a90931c70e488ac0464b', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'a950b5a521087c5f20fb167ae8912bc8e8649eac', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: '39b26c8ea6b5f26b11f928804f94224ccf0382db', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: '43a82ad117ce55d906835770e7745bb31da9d6d4', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5b6421a115e1c772b1f6231761799985693920e2', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '16325ab5e957877631a5a699e63c6de965bac8ce', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: '82140ce2d6ed66567c9acb08f8e36ad7451ede8f', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: 'c0fd81f4140c94b442e0d7bcc11eceaeca31ad30', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'a16cf321c1aec5614c7781a5a692c7b3e1255a36', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: 'da628c93924fa3cc2ce5d2047b7b11dca911303d', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '652ccd2b6e3b2959de9f6202fc6f3e7440bb6f8e', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '9d2f4df4f3ed7a5de94c3fe6f8a32f8ea41746d5', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '83b7f65be00092dea5402092390ec9f8671987d4', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '42681637f09758cc8a816fe0436d0ce5a7b9554d', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: '9ef75666206b9cc0a740d190dfa3a4d4aa64b3bb', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: 'bf4c0ee272f97887ed5d6ea9f4510d7b041a36a0', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.paymentMethods.length > 1 && (h("div", { key: 'e4995883d7561425503b4455c16b8c6b92e94072', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'c1fe719d79c25ad5ad1f2be8095a0d772ff4f5ff', class: "p-0 m-0 margin3" }, "Payment Method"), h("div", { key: '5e1503186f25a058ff2191bef17435822379fbd0', class: "p-0 m-0  controlContainer flex-fill" }, h("ir-select", { key: '9a1ce2038aa363389d654b467a7a73d2cf0ede0e', showFirstOption: false, selectedValue: booking_store?.selectedPaymentMethod?.code, data: this.paymentMethods.map(p => ({
                text: p.description,
                value: p.code,
            })), onSelectChange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.detail,
            }) })))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '43a6711bde9369bdfc5f861f87ded0ec47c680ae' }, h("div", { key: 'fe5ab29c0800141ef86b1ea896017134ff8926fd', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'eb7c961b2bdd7a1ed5102d60ac02146b0cdf7fa8', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: 'dadfd0d219397da58fe8a974620c2929055f4ec7', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'c5fd286c122dfc17e89255385b4bb280e3c38463', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: 'c801d593dc36205ca28af4cf5d85bc4b3762c9a9', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '0ce132d85a2473fcefe357c0b541bd5226e92eab', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: 'b8d0cb066d3680cb2b071fa0545b44cf38ece069', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'ddeb7a18a89af583e4748618c4f53075150bcf13', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: 'fe731ff89b714cf4845ae64144c5086681fd4567', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '728392bd07c579104bd445e3902e41b750374173', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '6297aa1608b734b50678839d81a1dda4c5115cb4', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'b4c56ae9dd9ebf007ada537ab3ff257656522c3a', class: "p-0 m-0" }, h("select", { key: 'df466821f5dad374d9b610917874ed3a18bdc5cc', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '911df24cd66f37b0a702ed90f0667fa828739c53', class: "p-0 m-0 ml-1" }, h("select", { key: '11c56635187f58c0206bbb10edc67734f5bf35e9', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), booking_store.selectedPaymentMethod?.code === '005' && (h("div", { key: 'b6bd06cdc0f4bc94f9a4e05cf7930e83f7e03dfb', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'a81f28dbe71143a9b772164fe4e7fd670223cc7b', class: "p-0 m-0 margin3" }), h("div", { key: '3b755bd4135634c3e40ba2ac3f2c8e6751f73f45', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: '9803269881b850318db68f4907e848c4eb9c9623', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), h("div", { key: '2a92a53880b167d4aab870c4e4276e7a8a9cfae3', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '6c45524dc11f4b7a86af2b50c39955b6c5e72915', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: 'a915ef4722d9ec319fed8916788f592ffc0d2673', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'c0cec19046aeec53829fed9901b6825aa8a23e67', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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