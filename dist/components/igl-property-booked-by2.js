import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { l as libExports, v as validateEmail } from './utils.js';
import { m as modifyBookingStore, b as booking_store } from './booking.store.js';
import { d as defineCustomElement$6 } from './ir-autocomplete2.js';
import { d as defineCustomElement$5 } from './ir-combobox2.js';
import { d as defineCustomElement$4 } from './ir-country-picker2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-phone-input2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';
import { v as v4 } from './v4.js';

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.row.sc-igl-property-booked-by{padding:0 0 0 15px;margin:0}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.row.sc-igl-booking-form.sc-igl-property-booked-by{padding:0 !important}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}";

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
            if (libExports.z.string().email().safeParse(email).success) {
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
            if (libExports.z.string().email().safeParse(data).success) {
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
        return (h(Host, { key: 'dbcb2886c6205445c06421f5efd507c627ac395c' }, h("div", { key: 'be496477079a9f3e693409be7995db6d7cd9ccd0', class: "text-left mt-3" }, h("div", { key: '733c122de9464f20a51e0ccb7666349b090052f1', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: 'c0ed8d8d216e556a89444a3b16a99a3670ff67d4', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '4b4bd722d9d4a98a366fa41dffc76fba398ed118', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '6bec57d062768296a6399b360196284f47f79a46', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '9ae4168bd792220b85c996d178a223843a4602f5', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: 'a9e0a25ed45100262a1cbcc883d0d517861a2b15', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'c64f1b4f7c653153daf4f0a681d853ad0b86a2d7', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: 'ace0d4b53711dc674a4cde450ae7c25b48923b86', class: "p-0 flex-fill " }, h("div", { key: '74a7c16763d2cef0910b5f594112c1206671c074', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'e5f7aebebe228b51a81a4355c55084ed750d1005', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '76e0b7cd183f7a33b8398900525c25548f0610b6', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'b17a14a95fff49bd1ad22bcf4ca8c3fffdf37a52', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: '437ff3e59d08ffd9c3b2db5da6db388046ec6392', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '1300eed5ef42f9ae73a1857399fcdb9e61438d7f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '6825ae60afbcef09179895df8a4506517762fe4d', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '185fc39e67771117de235d1106ecc637561e9974', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '6c88298b9592d4e6581432f3bc15b216776729f6', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '28cffea4ffb663e60577487cbc87a29afa0800ab', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: 'ee5197271d92523f841c540e30ca65093120f977', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: '944d8c4efd9bb035df3b5963f1dcb56247627d21', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'ddf57b2ecaa34727f5b00bc487141bfe9b9390cd', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '7b5589ef74bcfde9bb085e52c4a18e5650c2fe8f', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: 'ff37329779dfcf42dfce59807d3623220ad418a5', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: '4e5b41e8ccb9d7151e44aa927e4564b627273e79', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '12871cf6abe76fa8a22d2a361501a50ee7c0a3c3', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '320be9468c2529bc0898781696f6d2d03bdef124', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '52d1548ae9e4945824c6cd67f60997dd3ad33c97', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: 'd63da0acc1d08e4d134323dc81a95dcff0e1516c', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: 'dfab9d501502b1fb5b6760eca5fac7c2e070129b', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: 'c1d9474e1b6ca51f42346112842834b5c44f768f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'dcf004afd641350d0f38b64b9a9dcef0759f591d', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '1573809bd4d40bd309fbf62cbbd6c172f17e59a0', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '55115690403ca32153c9089ff67f1fb01bcf364f' }, h("div", { key: '816db14460c9d0e3a971a9944a7c3ead1778a027', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'd2e3ecea48a62e130cdc0bf28b952d2eaf470d85', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '7292d3acca38da8e54a18fe7bb9b80560a3090cb', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'aad5a7b9b8f33ba7ec2e4b8a6bebf8bd502f0d90', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '91574942a6d4ad2e2b29f68ee852c05512214c15', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '90f839c725bcf3f5255698f37675a6f7e873d450', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: 'eaf4ea1468797eb56341655eaeee000951f3c672', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '26e4b07708d9e6a9f6fbeb26ad0a4aa76dc2c771', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: 'dc7bd5262030ef8dd2ba3ee818f0bc8ad091f795', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '09e241c4e8cd005ffbcf5dcafa514eeccea5946f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '4e7c1cb3fe57039abf5eb01dcb6d91822990af09', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '0be9deda49ad550e1d8e066b8e66e0971d77a08c', class: "p-0 m-0" }, h("select", { key: 'efd8ea8e1ef4578458c621984b0312721c5ed856', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '210f7b0e23119654747c55bc8b012841bb1ddd92', class: "p-0 m-0 ml-1" }, h("select", { key: '72dda6b9fd99d4b1483acfc14a2bf158a64f059c', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: 'e71a6e88aa0f05dcad1854d7b43439340a7b2861', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: 'a93837531cc88aa09cff62d7789121a815fd218c', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '503228d349ff709a5648193fdb8dea351e67f92b', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '7b91131274cf35ac29500b71c5efd968af563841', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
    static get style() { return iglPropertyBookedByCss; }
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

//# sourceMappingURL=igl-property-booked-by2.js.map