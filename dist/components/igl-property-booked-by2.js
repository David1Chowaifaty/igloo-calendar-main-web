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
        return (h(Host, { key: '3275627dd88418a46508d06a577e222a5acb3891' }, h("div", { key: 'd5cdb0cf9faf9c73a2c656110cf792715ccbf14c', class: "text-left mt-3" }, h("div", { key: '10b6fc7f96877b648f0d7679b0a216beb0b49eaa', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '9c9c57f18f0b592e4ee445f01ee741b03ad275c1', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '3b79910100cfcf5dcf3af5b2c14856a232c898d7', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'be7d30047e826fe3eb95a7b9e0c60f3f85d3bc83', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: 'f254084ef27a16de9c64ee55e3f10d6552466084', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: 'bd66ae12948447320a32e7d72ed0e6d66ac39515', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'b6962dc1b28a868fd13b2cd6d72cd5c54159d18f', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '2a09df3528ec87aafd56d3cdbd6c82ee24842146', class: "p-0 flex-fill " }, h("div", { key: '8ffff99443021ee93f1ad1f83285bebe66d227e8', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '282c01d4b0ea6dc75cf0573e1a76eeefb6ac6a8b', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '00dcde91c543136df5b6a3e671da2e9b40a64bd6', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '57606155a3a9e4c85c1f0cf2656b7dd1c743cba6', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: 'b2b886a4f8d9843e40f37221e58ea10254aa92c3', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5a43779dc6071956eac78e021a0384fc91717259', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '5d75c7f3ab3e5dd80e8924ae9a318aa5eb403163', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'c00d70dea0aeb88509af8b2b54c796c68cfc250c', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '3a517531cfd097f385ed0481b1c6d8c741347904', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '1080c8f9e0b97cd4496a1ee03154d0891d3d5249', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: 'a5d2ee9db4d5af177ea1059a5003d3cc42eef33d', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: 'eb3a7e86b6d782c797148bde602f0ce5c5a7a51d', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '51b8113ba644a6a268abd91458917aca48b32207', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: 'ec6f70e5850dfbb4470b091dba3f157c156bc1ff', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: '2351720b5c7702538f7125d947738d5474d40a4d', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: '08f7c36aeb6c92b6effcd5c4ca6c8aef6d249ca5', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '4428e585171c47956ea606b90207d21d546bf448', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: 'd42baa621dbc970cdb19dd1519b86364cc45f75b', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'dbe5bc5794192e83e3517c045bdd9588cb72b297', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '296272ce9006a4ba2b3ad7fa8c29c8ad5eb1585f', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '27947331520539025ac7ef3a4889c7ff3b08d042', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '3be141c20f384fa14185261d1b9c7995d32e3a71', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'd85148cba8efdd4b06ad7d0f53738609db745d77', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '6e0bf8d00d810404fc7fafc970702a0ade35853a', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '272088b7e67de6c339516064347e858dfbc68cc2' }, h("div", { key: 'a62d83200801966e79009384ce9959ba60691dcf', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5dcb56b5011bccb517c95ed284f464fac4fe1a43', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '3b5f28f9426a1bfb17f5184f28b8e36af5a22637', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '254695a1e754c59e6d2cf6f1316b0c6755f58272', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '1039316d4ad6379413c72e43cf3ee58b5bb5bceb', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '1b79c25f4a0650b1e4008162c89f729c9d0e5560', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '9a8f8b0b9f1039fb2f79c3470a0ab1c4999e7f34', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '0b925b8a8c3ea15a0060faae416a1d4d92257b05', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: 'b18350ae3d48c9900b43df4f305d19a7664ebf6b', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '2d2f6ccc6009c284bdf6bd617a005b70581273f6', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: 'b4f48bdff4163e1c594e49aa73c709c9c21a3643', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'f6000eb258fe2a80e7b928763f9e4c850ee84aa2', class: "p-0 m-0" }, h("select", { key: '4693b3af6a45b86d8269906a5b84311cb0bedf47', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '8a50fd8575e35f99681f65c7aa627de2d074fce3', class: "p-0 m-0 ml-1" }, h("select", { key: '753902758a0f6120b76ea4214fbe80042354547e', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '8a8bf4d0bde53042c07b76229ec61f97440ca8de', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '4d45cb18a3147b18ea07306f6e3418668470d6de', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '9e0e6709279eba8cd4c81df80e6e72c0f40cba78', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '91e9a4682480128692abc7ba2792876fb0e83477', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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