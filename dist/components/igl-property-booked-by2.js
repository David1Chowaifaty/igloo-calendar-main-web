import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { z, v as validateEmail } from './utils.js';
import { m as modifyBookingStore, b as booking_store } from './booking.store.js';
import { d as defineCustomElement$4 } from './ir-autocomplete2.js';
import { d as defineCustomElement$3 } from './ir-combobox2.js';
import { d as defineCustomElement$2 } from './ir-phone-input2.js';
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
        return (h(Host, { key: '4dd09ccd480a0b60f5b40de64d19350813d5fb33' }, h("div", { key: '070afdb77f79b7187f9a7ca2b4488700e96699f0', class: "text-left mt-3" }, h("div", { key: '6317e44e878251bb770103a33ed96966cbbf34c4', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '7ede7428fcc00a93b5fbb1e26640a34db68f5f2b', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '78f9f6233ed4f1c77970af0a8955da3308282cc5', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '4cd92672614d6b77f0ca1bd6a44c505dcac91008', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '5c21a26210087f65573f5ef05f19c3683ae32ccc', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '1620e03ff769c09eb99ba82f15ae54e3be4a12b2', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '4734ddc996cc52d998755151f60420b1be1375a3', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '2869e821e3847f4689eee05ae8d89b3d2b919b09', class: "p-0 flex-fill " }, h("div", { key: 'b048021545f7d1cd4588b8cfba63ba428b720dc1', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'd3e763afa801c985a553cd174cc8ac6a71e37936', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '5d1753e699a78ac891d3085ff897d171cd55a74f', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'e2f310d9a1a46184ac390448258b1e94771e01cb', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: 'e55f5dea45e360941a1371c63a26ab4cf80febfc', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '6a306fb8b9a76d745b77c56129f1568be1035ac1', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '9597438c7f30aba70b3ea391cd841ae986850f0d', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '952046ef031f70b77d232695a98cf0d31f5f2467', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '712da329b2762a7fa46fc4697473fc524fda85ba', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '22448c546fab98e31b06c19a3ace6b90a054b9ef', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: '67f03efe07f99983c3495b970db5f35da4887870', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '095a5d30871099b950bcd1b56c0488841b756a8d', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: '19460a3a586ceb0ebb2e398597c2ab1d676d5bab', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: 'e97d087c2da97b84e0126fdaf487e4ee149d8fca', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'e13f2998a76a9f847609bd4c349a70412f1958e0', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '6bc5c2c9f09bfd86397921c4cb2c80aa25c4a87d', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: '4b87f97de9743190032f1157389d32eb736b6d1b', language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: 'fed6284dd0c46f9ee9b3050535e41f762dd50ad3', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'd913cba16daf39f7cafce31233041721b11bef39', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '414c4d8eb841ce72e64352486630168f0bb8611c', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '40c6943a849dee3075d8ec7806dad4f841ae1e06', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '47a43af0222c34d470967a6fd8c7bafd82010967', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '2d53213f6a7f5a2cfa789a9e1f2811719f6d99df', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '1f3e44701cc963be493febc29302cc44acea5d14', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: '078dd8a5a9260fe19a5f24ac35b2c877dd225d0b', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: 'e064c0fd6fb4727c1f6a99f00baef22dabcece16', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: 'c9e1297b207ff1eead8e56e4a08cdccc771c3ae6' }, h("div", { key: '3a06e17f7880ea51b9d913d120ba5119abeead9f', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'f8626d6cf82cb425de03b41e37ab2b74d48d0802', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '6281f0ee5252633ce2f26e6f2009c264cab1d1dd', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'e796ab9c33fe952627c1e61b171956b4baad1973', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '5f78ca4ae5d5dd1ee56c8235c8b1f6bd0ddd756c', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '429d78c11237ce5e61cf4d0e695cbef6c0a3e1bd', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '6c25f189d193ddf624ba50e7eeee75ea67d388bc', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'f9565ca09aac535dc51b11a1ed624a1960f9e6c3', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '84d2c9dc5fbee442b6288160fa92a258442b7def', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '15f0b88d8b9ce03385999f566ba21c5a9907af56', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '07c64fa0b81fcdb9cc73d4bf0e789a5d3948a438', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '8e58d9ff16ca1291e09f3ec5eed60a3845714fdf', class: "p-0 m-0" }, h("select", { key: '65d99e517864cd5da11ef8585b5e8106caf387b3', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '7b075064159f1fe27530ac23495184ed38479acf', class: "p-0 m-0 ml-1" }, h("select", { key: '8c58add107af01920a9ad7a1415b0c760543b43a', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: 'eda253df0692faf1e6e53482c77d977d2c812af7', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '841c4f4a7e7cfa66b6bd16072c0d674888e24a85', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '100bbe2e59838eaac5d577eca81bf18d0aabef9d', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '25f2ce9a4e28b4319f7a254054685629431ebb3f', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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
    const components = ["igl-property-booked-by", "ir-autocomplete", "ir-combobox", "ir-phone-input", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglPropertyBookedBy);
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-combobox":
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