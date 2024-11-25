import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { z, v as validateEmail } from './utils.js';
import { d as defineCustomElement$2 } from './ir-autocomplete2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';
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
                    this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: res.id, firstName: res.first_name, lastName: res.last_name, contactNumber: res.mobile, countryId: res.country_id, isdCode: res.country_id.toString() });
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
    handleComboboxChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { key, data } = e.detail;
        console.log('data', data, 'key', key);
        switch (key) {
            case 'blur':
                if (data !== '') {
                    this.bookedByData.email = data;
                    this.checkUser();
                }
                else {
                    let prevBookedByData = Object.assign({}, this.bookedByData);
                    prevBookedByData = Object.assign(Object.assign({}, prevBookedByData), { email: '' });
                    this.bookedByData = Object.assign({}, prevBookedByData);
                    this.dataUpdateEvent.emit({
                        key: 'bookedByInfoUpdated',
                        data: Object.assign({}, this.bookedByData),
                    });
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
        return (h(Host, { key: 'be1a094738ccb90bc73f09d795365bb9f72e8b9f' }, h("div", { key: '3ac70d39520624acc2f927e883ce46e145eb859e', class: "text-left mt-3" }, h("div", { key: 'd155c6ef4f0f44b387c5f0a48f5df9bce603c73e', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: 'bc90aa160a61fec315b4bd2bf21cb5aa4548af11', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '52e238c1856707f36507588995dfc3bfea9be6e8', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '77d4563ca843b5df6433973530999edcf0c18840', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "email", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '19e54c2ffff220866ae50a77ede6a0604907113d', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '29efc5f3cc998c37a86a9f4fdc1da13453f06d89', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '1ffd34b1cdc069a9c607228a1c5f1052b37c16b5', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '30cd6ee078a35c362a2566969f1ef3079ea73d76', class: "p-0 flex-fill " }, h("div", { key: 'c95bfbe774276b1bf26a366c7be3e737ca1dbc92', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'a22f794952ad6023015f57370133f201d4666a21', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '4b55fa7f268dd26d58ea4fc17da68dce745eb3ee', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '82103aa9ff08c96d1b5512240f673fbef4176cea', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => this.handleDataChange('firstName', event), required: true }))), h("div", { key: 'b5bfec8eea6de3a4d485e22e0acd39f1aaead912', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '2561b1a7455cef3dcfa39c4ec6761f6fc3af1d3f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '8a50a0eb0e021de837724b0e1bea26724b56108d', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'c263b0ff83933e4264546a88d76baa9782d4ba08', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '3a818f591901d61c4ef73f7d4e99922785e26d4e', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '3bf1a9d3c4dea27dc177e586873f93aebe12c0f4', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: '48de718a79825355086fb4693f4d7f406f554677', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '69d27158d42f6099c2de23d946e63ad877112eaf', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: '0fcf1d33ad5aa2a4bfef64474bbd44d08d6ad24a', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: '555401d4e8dbe0a1b8e348e476824ddb8693aa9b', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'ad1a51ece8a53cda4601835981624b97f8933d46', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '7307c70cfb363288b9a05c2d6e0e9ef0f3a39426', class: "p-0 m-0  d-flex  controlContainer flex-fill" }, h("div", { key: 'bec4869c61ec36ff20eda6fef748e8c558fde0e1', class: " p-0 m-0" }, h("select", { key: '7b3c3afbde835287f35f6749670760e58d742a0c', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('isdCode', event) }, h("option", { key: '4c5adc9f63b906d8a2f43df4fa2d6556926fe89b', value: "", selected: this.bookedByData.isdCode === '' }, locales.entries.Lcz_Isd), this.countryNodeList.map(country => (h("option", { value: country.id, selected: this.bookedByData.isdCode === country.id.toString() }, country.phone_prefix))))), h("div", { key: '310b1a0711d6459f10c15feba0d9c7e707be9252', class: "flex-fill p-0 m-0" }, h("input", { key: '9165fc7bde336b3affea937f7fbc5eb7ef70a476', class: `form-control
                     
                      `, type: "tel", placeholder: locales.entries.Lcz_ContactNumber, id: v4(), value: this.bookedByData.contactNumber, onInput: event => this.handleNumberInput('contactNumber', event) })))), h("div", { key: '7832649e4df6430673aa572e4383abc00cacbb5d', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '8765939713e7dd74d4bdfdb91bbdb3e4fa7fe0be', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '7b7e8ba11dfd623b71dbf78590f8c99dbb92df81', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '2b95e3867d71ef270b338524d8a02f86738a12cf', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '5ab237e2752dad1027e6e07ddb823227a587b89e', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: 'f305e6ea289ba8f20599e33e3d0b34fb9b43776d', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: 'db7dd208c23c222611fa9ded07d6e9ac59dd7594', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'b36d4881936d0cb9c79a11dd536cff46859fcb47', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '7628e29d070707905cb36e62254f0e2d8395b6e8', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '3ac4c24559e2ff8d595f092c3d510484b4033e21' }, h("div", { key: '46c09a901cefbc52b925e1c8313e284b7cb4448b', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '9e2083c87c78654e5c8b9c95d4fd654c524f3231', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: 'c67300e42ebc1a6d86c0ad9a4c78a58fbae988b1', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '993a0d4047cb0d49e8d6be8023b06f5df81f6203', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: 'c2f68574e9d41f0569b729cc67df904bdad90687', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '496ff90053e5a07699c1ccdff09e6d6ac9eaa3f9', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '99ee85e8ccc69e7bd94cfe5f89c65a2ab6149401', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'd9c5f4bbcbc891ee068396aecb374b81cdb04cc2', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '39a2e4c3260cdcc1c73db38730e6df641d8c201f', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'e90a802bcc296acc98d862ddaeebd94247033901', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '73ef06ccabb7f34d319860be4fb8475ab2da61ce', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '470c574c38059156a63475ccc8ba76da6495f997', class: "p-0 m-0" }, h("select", { key: '2b8b6b753422684e07c09b8ea56c1cb2612b1a15', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: 'dcfef8b79fd143e6ed0eeba3f44b2bcd6fca48ad', class: "p-0 m-0 ml-1" }, h("select", { key: '669b9cca0460b799a634a95f1e47d4c278d08ecd', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '49d16500c375216c78ae82bb2a23cac9601109a5', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '12eac4da1f6f1b087eeff07b908d7a291851dcac', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '954b64defd1a2bc86ce787321c36bb0e6a4849fd', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'd7ade9a6ff86ac82a07cec7f3a044c9f544ef613', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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
    const components = ["igl-property-booked-by", "ir-autocomplete", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglPropertyBookedBy);
            }
            break;
        case "ir-autocomplete":
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