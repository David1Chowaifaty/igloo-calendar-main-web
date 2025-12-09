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
        return (h(Host, { key: '8fe613b2db93726876920a5b0b09edd30187c5dc' }, h("div", { key: 'ec1473c65c240a97cec135400df4107c4ff892e2', class: "text-left mt-3" }, h("div", { key: '4b8e40d864076f223e659318b8f4e0667a584290', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '9e8913449e87f14089247380ac80e7383a2a617b', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: 'b79bf188034b511187fa91540d4d2f92a6295b0e', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '4f087b1c6656572a6d95be7bd14d2f4c2381d053', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '4abcab534c4d9b716a8010c8948e14f02f006339', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '60f4ccdb1c942f1551a515f0beeb31099d6a69c3', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '10593aecf69aeea1d945d38bee268f0d36e4a0bc', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '036202b79999707f2ec9155f34330170ca068307', class: "p-0 flex-fill " }, h("div", { key: '480b847fa7eb39a61191288c32758e2cd7fbce57', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'b54e7ba3d20de4b7e89af8dc06d55edc497d1bd4', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '82072fb991ce59466b313c62d19acaeb15df7e0a', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '40ebc3269f85705fc15e2a09a8d37777765ee330', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: 'f79edcf2928f2c204d151786209f881dd6aa50e1', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '88a97fe4e9738fd3f875074d3b0f854493e4759f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '7d95e5f9fed3856faca3cf040a239c70f2481716', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'e3e58957745fac5bac946bb7bbe0d6d046bba0a7', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '46ffce0b94f78ecdce1b39c8de70a54cdd35a238', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'eeef5b7877d233ea7f23c88123d22f794062dbf3', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: 'bf2eff0811b0114957c2a33bbec15656d3302fd1', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: '04d134acc7a0ff7c55b4dc53172eee3a21cdf367', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '151997ff875ef228c87006158e1927fc07100d60', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: 'd66deb5692cdd92944af178dc7a903fb498ece98', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: '1910a06bf427e3a3f7f4a587b6c724a59555f552', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: 'e609d4dda726c23e7ae8dcac9471783f05965faf', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '33c140769c6075cfd25c1d21ffcfcae6f3d09f30', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '1a6cfe5aad46ec38e5bbd1c2f733a499682735d3', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '20b5f59503764f5c5db48ff5937ca26d00d0a37b', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '86f2d8483d00c99c3d7c2c6467635334b3625753', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '2cc0a11af718cc3af1a87d47ddec3997e35c168a', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '2529b0e97ee15abe86070667bd05375dd4c532ac', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'b72110c9115504b4a696e5d9a9e1e6099e6240ec', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '5d7558b845256d4b36cbc206dc3b30c6dc8a822f', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.paymentMethods.length > 1 && (h("div", { key: '0a4e7ac2347be777bfdadd91ebe63e7c0c2de37f', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'dcee47580206dda18cfab4bed072b4f5bc218e42', class: "p-0 m-0 margin3" }, "Payment Method"), h("div", { key: 'b349bd8289e9af94acfb2c7c7186e7af683816d5', class: "p-0 m-0  controlContainer flex-fill" }, h("ir-select", { key: '7dc585e733a5b9a0cfc2329b5cd1b3bfc41bca22', showFirstOption: false, selectedValue: booking_store?.selectedPaymentMethod?.code, data: this.paymentMethods.map(p => ({
                text: p.description,
                value: p.code,
            })), onSelectChange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.detail,
            }) })))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '97ed1e839b7d77ef26f3fce83d413c374435dba3' }, h("div", { key: 'eb8890d36513bc1a87f2a1fcf01318f145fe9531', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'd120e648aba969fd9983e0e13d1e614d8c5123dc', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '362d9bcbe449241030549a43fdae28a6329e8a39', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '760011f92e491d7d60278024e2f867bd4060dcef', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: 'ddbd92c24ce5620d434da6a157142ff6b0fb2159', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5bc4b7e13475ace70284b995d841d31627bc7824', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: 'dc66aeb787108ba4e0aa2f24f7562abb3b852a8f', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'eedc59cd8b0a423b47bfc6ad59f5eb9d76520d21', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '90c07ee5a739c4a02c6c3a91e25599e82da329e2', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '0acaf9fd9e4b21fbc513ca958aab5fb851e2c22b', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '6e88e9bb83b72595cd983c9ef15acbf0f7a729e0', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '1ebfab5f369c71b93a393fc5a1fa57ac53d9864a', class: "p-0 m-0" }, h("select", { key: 'a263a33cffb068fff6995c6b10ffbacf951a4560', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '8fb50de4ccd4028b2adf2dad70061e7f9a93ea2a', class: "p-0 m-0 ml-1" }, h("select", { key: '1a746a89e803ecc22f9ee11a59320826363c7d2c', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), booking_store.selectedPaymentMethod?.code === '005' && (h("div", { key: '12033537608ffcde034532baf0664cd6ef76e5de', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '3c893a8df94c4bb6b0c2251f9cb4d08b9faf78b5', class: "p-0 m-0 margin3" }), h("div", { key: '9b09c4dd54b86c5b5fd3eec6a9d83d0d154c4304', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: '2bb5f6c2ed74bc1067acf9f0dfe83c113594e096', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), h("div", { key: '3f2ca08487a7d7a14e6222aa8ea842e837014f7b', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: 'cc44888afdab6e7e740a2f77e2f21d08a37b9e4d', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '100fb7c94cc1dd701f3d050bcbff385069723a7a', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '5f595686211fc7f0c998552b2948cd4d123af6ae', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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