import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$1 } from './ir-autocomplete2.js';
import { v as v4 } from './v4.js';

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.row.sc-igl-property-booked-by{padding:0 0 0 15px;margin:0}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}";
const IglPropertyBookedByStyle0 = iglPropertyBookedByCss;

const IglPropertyBookedBy = /*@__PURE__*/ proxyCustomElement(class IglPropertyBookedBy extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.bookingService = new BookingService();
        this.arrivalTimeList = [];
        this.expiryMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.expiryYears = [];
        this.currentMonth = '01';
        this.language = undefined;
        this.showPaymentDetails = false;
        this.defaultData = undefined;
        this.countryNodeList = [];
        this.propertyId = undefined;
        this.isButtonPressed = false;
        this.bookedByData = {
            id: undefined,
            email: '',
            firstName: '',
            lastName: '',
            countryId: '',
            isdCode: '',
            contactNumber: '',
            selectedArrivalTime: '',
            emailGuest: true,
            message: '',
            cardNumber: '',
            cardHolderName: '',
            expiryMonth: '',
            expiryYear: '',
        };
    }
    async componentWillLoad() {
        this.bookingService.setToken(calendar_data.token);
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
        console.log(this.bookedByData);
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
    async handleEmailInput(key, event) {
        const inputElement = event.target;
        const inputValue = inputElement.value;
        if (this.isValidEmail(inputValue)) {
            this.handleDataChange(key, event);
        }
    }
    async checkUser() {
        try {
            const email = this.bookedByData.email;
            if (this.isValidEmail(email)) {
                const res = await this.bookingService.getUserInfo(email);
                if (res !== null) {
                    this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: res.id, firstName: res.first_name, lastName: res.last_name, contactNumber: res.mobile, countryId: res.country_id, isdCode: res.country_id.toString() });
                }
                else {
                    this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: undefined, firstName: '', lastName: '', contactNumber: '', countryId: '', isdCode: '' });
                }
                this.dataUpdateEvent.emit({
                    key: 'bookedByInfoUpdated',
                    data: Object.assign({}, this.bookedByData),
                });
            }
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    isValidEmail(emailId) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(emailId);
    }
    handleComboboxChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { key, data } = e.detail;
        switch (key) {
            case 'blur':
                if (data !== '') {
                    this.bookedByData.email = data;
                    this.checkUser();
                }
                break;
            case 'select':
                this.bookedByData.email = data.email;
                this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: data.id, firstName: data.first_name, lastName: data.last_name, contactNumber: data.mobile, countryId: data.country_id, isdCode: data.country_id.toString() });
                this.dataUpdateEvent.emit({
                    key: 'bookedByInfoUpdated',
                    data: this.bookedByData,
                });
                break;
        }
    }
    clearEvent() {
        this.bookedByData.email = '';
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
        return (h(Host, { key: '8085bb09b1fc3ff8a252c851de668a0a8c265c27' }, h("div", { key: '5ae75829001ae3a3cb8221bdb7d66ae35299e2ab', class: "text-left mt-3" }, h("div", { key: '211d29f71a49622b72ac3672c45ae0594b9cdd31', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: 'ad5d423298ae2ba302035b2c4616c0d5276e67bc', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '4953b4ae4797ccfaec8b242fa2684ada226b65dd', class: "bookedByEmailContainer mt-1 mt-md-0" }, h("ir-autocomplete", { key: '9f660add26e6886487f8f74f7ba823b33105f0b2', danger_border: this.isButtonPressed && this.bookedByData.email === '', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "email", value: this.bookedByData.email, required: true, placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent() })))), h("div", { key: '96f981f3ec5aff9d19b4cf9b72731a9a1f373081', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '36669d31d7c1d0816f00ba18449f736c6f606e11', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '10614368b9411fb19ebfa4e75d4f2948c9d730d0', class: "p-0 flex-fill " }, h("div", { key: 'def32dbd94e6382931c12985299b42e91e26678e', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '0c6cba219a25c5ca293a21c6af24b931807ac4f0', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: 'a702ae5bf8c78980b5736b50073668185a2c31ad', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '6e8b0fb02027e902630cde0ff8e592a947f3dfc8', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => this.handleDataChange('firstName', event), required: true }))), h("div", { key: 'de065e9dd0b4cc9c62f59270b292b8f3bd04fdb7', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'c2f5c450016aa34fbe2ab2b10866f75e14b8a50b', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '74e54a7d6b4c53d7ad0b1ae707c8e2a527026605', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '2585817b549f732b968416c1f340802133426821', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: 'ed11939b4eea912b4f08c1c3ad5b77bb8065783f', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '6343c442f0beee8880324c8225bd54a8c89300bb', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: '3cb9a473da355de2d0da4cad5b8e213a59f1da7e', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '76937cf03c21a4b48bfdc38d92f0b180c30218cd', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: '2db0b0ad990e22db472d838b6a0a8d407ec87a18', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: 'bb39f612710c0fd97d0f1902621c8362cd7bddd7', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'e94f7f4bef407c35a5930404a9bfa2eea66b83a3', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: 'dd523b0524c21460530f77d750c5ad8711612333', class: "p-0 m-0  d-flex  controlContainer flex-fill" }, h("div", { key: '9bd064dba20a6710f29e30d83ab1352abcd6f05b', class: " p-0 m-0" }, h("select", { key: 'eab088a6dbde4d9e55055628e086452417fb78f9', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('isdCode', event) }, h("option", { key: 'bfead3711bd89bec23b76fd5dbd90e2a7b2813ba', value: "", selected: this.bookedByData.isdCode === '' }, locales.entries.Lcz_Isd), this.countryNodeList.map(country => (h("option", { value: country.id, selected: this.bookedByData.isdCode === country.id.toString() }, country.phone_prefix))))), h("div", { key: '92c12e3e3ae775c073694a3bf100d588d58c7881', class: "flex-fill p-0 m-0" }, h("input", { key: '26c60dcd6ca8136630df5766f293234867fdf34e', class: `form-control
                     
                      `, type: "tel", placeholder: locales.entries.Lcz_ContactNumber, id: v4(), value: this.bookedByData.contactNumber, onInput: event => this.handleNumberInput('contactNumber', event) })))), h("div", { key: 'd7ea90fab261cf05b819cb2cbce29db575527e44', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '7626601aeeec639f673e94aa8ddd35002ce8f8f9', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '9f27ee3c1edc8bb703146ce1d55cde904cc929d6', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '6880f056df9b51bf6bef70781194e7298f9f9ae2', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '1e6a08c00b3580a5369b20458f37b4f22f58eedc', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: 'a951122c71aad518650922e52362762ab2b3fcf8', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: 'ce5af7bf620146e5281cb06d15e049240dfcaf57', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: '10a785ad9a665b716cbfc1cfbbf3321232fc0cc4', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '2cb0b7519c0b8faa4df8fc937de7e1e4595591d6', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, null, h("div", { class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { class: "p-0 m-0  controlContainer flex-fill" }, h("input", { class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { class: "p-0 m-0  controlContainer flex-fill" }, h("input", { class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { class: "p-0 m-0" }, h("select", { class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { class: "p-0 m-0 ml-1" }, h("select", { class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '0dacca385aaffd18734bf24ff936dc8cc50ba8bb', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '16a7f51e5403d266d8ea5156a5bd6535acca0fd4', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: 'a103bb926e7917f34c6f57184cc9ce7113f50a48', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '6501ba9abe408a2759990545ba80ae666be34ab6', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
    static get style() { return IglPropertyBookedByStyle0; }
}, [2, "igl-property-booked-by", {
        "language": [1],
        "showPaymentDetails": [4, "show-payment-details"],
        "defaultData": [16],
        "countryNodeList": [16],
        "propertyId": [2, "property-id"],
        "isButtonPressed": [32],
        "bookedByData": [32]
    }, [[16, "buttonClicked", "handleButtonClicked"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-property-booked-by", "ir-autocomplete"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglPropertyBookedBy);
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglPropertyBookedBy as I, defineCustomElement as d };

//# sourceMappingURL=igl-property-booked-by2.js.map