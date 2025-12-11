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
        return (h(Host, { key: '1ddd685fb268fad172425962b1307673ee083254' }, h("div", { key: 'f04de85bd40979d48e459d862a256d99f69d27f6', class: "text-left mt-3" }, h("div", { key: 'e649e4f77b80db8788442ef62d5e155051429aaf', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '1c7e9008b2d230b6a72f1564ccde5b13cd24535a', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '973ed47164b1a0d6c4b288f244f61c4f63c2e308', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '730594b6ac476085ba2ffd84b3ab50d96610be6b', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '0b6ab454c19017c5b819d67aea3a7c337219c25b', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '02f1f9d478954d456654a4ec7bb46fd720fb0219', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '5b7c0e29b6252863b8c834b48048ba5ca53a92c2', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '43c2147949dec6e5328d937d6c534d6930428d0e', class: "p-0 flex-fill " }, h("div", { key: 'f5264d8b5c148fd982adc8ec246bb5af01d93802', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'de453cac18918192e9d0084d4d52ecf0183ce291', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: 'e197c9e2826ac3408db7abdaf60a98a294938dc2', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '9e4867395a9bb937bab73544cd2a7d8b30561595', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: '3f85d68e2c6532778c7e83b7f1c9346f91bda924', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'ed231ea5cc395b50065738883be14b1bd9827486', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '730129bdc0cd8f5f74413f5d58788a03dd853d68', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '6d74489667ea4038e2f0e165d469f272704d194b', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '6ac0161b790787b5b4e8dc10eb2c821b350a725a', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'e92b7ac222116fde8169bd37a003400c9eadc59a', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: '52b946ecf999d00e1b0a2b9bc76dcaf517703505', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: 'e3de5d98e34d2f100d30fa2e3a204354441b8335', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '3b7f03f635f9d999d7a8085128822b64dc752f9b', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: 'ab18a17fc962fa5e134c4d4ca285425f807d850b', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: 'e258dfdba1ae20907323e830b611d2f0aeb6f2e8', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: '1903a5f91968d2f55580c4898cb709173736dd73', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '98063abc66d9c08ab60a17ad03a780139152e943', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '0f8b333504a29b4412345976b9410663a3ba3417', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '89d685f6d197769d9d1b000c08f21e99eec119ba', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '69eacd85fff95b3bc480ff95abf9697753762a18', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '15d7245baae098246a460315847c4e98bc0663b8', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '3770cd02758baa82fbd682fd479da7276689abc4', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'de660ebeae0302458cc9699162c0046229c1d3a3', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '037ec8cf924cb0e3ea7874097b30e7da7ec2c86b', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.paymentMethods.length > 1 && (h("div", { key: '535689146e2d5e9f2473a27a0b0468864e04cbe5', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '176c0d2d1ab2d8a60a1c8ccf669ce2260ed475ec', class: "p-0 m-0 margin3" }, "Payment Method"), h("div", { key: '993f89d6142861b2b4e83fe244ee95d77bf1f0f9', class: "p-0 m-0  controlContainer flex-fill" }, h("ir-select", { key: '878a83d46a1b5177217031b0788f2dcdef3db727', showFirstOption: false, selectedValue: booking_store?.selectedPaymentMethod?.code, data: this.paymentMethods.map(p => ({
                text: p.description,
                value: p.code,
            })), onSelectChange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.detail,
            }) })))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '74fd4865515446fa2037ddfc09dc05ef265dd935' }, h("div", { key: '1797efa546391dfc406afdaca35a473a3dd90fb1', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '33226298e0ff9a82e9b8a7b7509ee15bdef6cfce', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '0bfc4ef32a101340e121788ec76b7b4af6d25835', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'f9f5a539649393d72d394be31a3bbe3270d0ace6', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '168aac8eb441c263a4274ec84f4bfb1c3d62269a', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'f9572e2376ad77462cc7ca3b9417bc3b706674b9', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '8f6ecf507c21aef29f54b71c9b838e11b72a441b', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'd8d2ee330ad0864a250f624155dbc02a3eb6405b', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '0028b073645e314869e76e7b4c746f71dca83425', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '2fd1258d3e9f85de15e9a453629d032c8aa921e3', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: 'f3cf7b1e1a8bb10db429adcbbbda22e90515a5ef', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '42927856ef099d2298839bb42df7571d821d9a1d', class: "p-0 m-0" }, h("select", { key: 'f1a60bee4218eefedf8b55346537990b40935f81', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: 'ad586bca6818b91150f802324d8b6d7d984aed19', class: "p-0 m-0 ml-1" }, h("select", { key: '798146333d6bce192b84064cc8f7ddc06306b8f3', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), booking_store.selectedPaymentMethod?.code === '005' && (h("div", { key: 'e8124843a453541a167e9d624605dbb979c9152d', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '34aa5ff772ac6c441563db6549d425d732927e2a', class: "p-0 m-0 margin3" }), h("div", { key: 'e1182bead184182253fce24ef06b0346e536d45d', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: '16ad1b7d89ca78baa31a29d3c3521f805863823b', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), h("div", { key: '173d509c4064fca62c18aba2979cc5d9091ca808', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '18b86c948f843b1a9120431bac21621a00f5e542', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '0b6679365672e4d5a1ee9422872280e4a19577b2', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '548e36ed2502f99eede069f2c9cb5b1e389dfd67', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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