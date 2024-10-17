import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
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
        return (h(Host, { key: '5ef086b79bab0f0592fd343aff3c84bd82a5989b' }, h("div", { key: 'c7057f76de3004bec068836706a35a0da2754ea3', class: "text-left mt-3" }, h("div", { key: '70703b4040a5c44fa21ccbafec17988e42d55073', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '01bf018df7aed5a1b14bb7945d9109f1c40436e9', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: 'cdaa67d8b52962463ca39531b57b80406c8bdd5e', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'f5c7be7863ad97ead8fc120de6f242a8d0779d7a', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "email", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: 'a5eea8a985777773a83d519d921f1de19272cee4', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '5b3fc2da25fbd5a13d63150f653ac602ea442d71', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'b8c741156600f82da1a2b156708f47602bac6eb4', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: 'd4da198d8f3fcb3af14d637c415936a36364ff3d', class: "p-0 flex-fill " }, h("div", { key: 'f818eb01b70e4ace5cf745655182dab47b73c9bd', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'be44a0425e8b6e67f39d37d46f832a771c7c5e9a', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '9db3e1cd77317ee5f50df3f172dde20dc64a1c6f', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '8cd63aa72d01477b857e18637e1b32ab304a4068', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => this.handleDataChange('firstName', event), required: true }))), h("div", { key: '665ee63200d3b0a08d55ddf72566d4fa1178a7b8', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'c146222b679b8ca18b0e8093b8cbb3a6d5a91543', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '49997d09773fed91ccdb163a49b4cb462f1954c3', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'b8235bef6c34d357c93ab011c9f6efcb20eb4aec', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '57f4e1ac8d170618a8050f6d2a998e0bbc24712c', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '60debc03c2960f8773be463b347e398315bfa01e', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: '5164dd3057a95ab74e3157010dc5da6e6103082d', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'a83e68e979d27b675c2317e094f029b09b2784f7', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: '32d8a977f009b37116a305900b8111c1963bb77d', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: '31ab8a09d4d75b3067357952ce436b1100fb5e9a', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'f1a3fdb81f7a1c24b73924947445d314ad5e4e53', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '7aa64c4579863a4ecb0ce20265b0490917ff464b', class: "p-0 m-0  d-flex  controlContainer flex-fill" }, h("div", { key: '435ee8cf64b8a106ef7165ae5546f7f2d9c261cf', class: " p-0 m-0" }, h("select", { key: '312dd46c9c06a302f317b5080149d1ec0cf5791f', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('isdCode', event) }, h("option", { key: 'eaf684650da844153596eeb0a989b4edb3b30c99', value: "", selected: this.bookedByData.isdCode === '' }, locales.entries.Lcz_Isd), this.countryNodeList.map(country => (h("option", { value: country.id, selected: this.bookedByData.isdCode === country.id.toString() }, country.phone_prefix))))), h("div", { key: '7626601aeeec639f673e94aa8ddd35002ce8f8f9', class: "flex-fill p-0 m-0" }, h("input", { key: '382910c8503a77ed533cf590f8e2cb48b76b4afd', class: `form-control
                     
                      `, type: "tel", placeholder: locales.entries.Lcz_ContactNumber, id: v4(), value: this.bookedByData.contactNumber, onInput: event => this.handleNumberInput('contactNumber', event) })))), h("div", { key: '941c61daa10d87921025175174f20b058996aae6', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'fc1c72cf6a491c472ebd5307abaf9ce1e0255594', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '8d80c361e10da67b1b55a728c69f4b5e3178c044', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '44bbc6e77f06d6f26ff7130cfdf326593b28a5ab', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '3baf84658097a099ab4c2242b77008880eed92e9', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '26128024b57fa07413f788e85927af1504177a4f', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '99d934a6c9a9cfe1af45515434db73d03a45181a', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'ef049bf008be723cfa3f7d392fa29383892af3cb', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: 'b28f90c70f1ddff361684657467e4a3ceb46027b', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '77ffd236beee284f08a82f413e086fbf1771d69c' }, h("div", { key: '29f4d2e06c35befed49bdae9707dcf38b83ad713', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'ed7580d52bf0aa2f17b25762796db74d1792efc0', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: 'fc2aba890bd8c4bc546d5671a536650ebc7b4621', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'aee212316f65c0a1602bf2fb8cd17caed83c5bb5', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '9a2d6868550c7ae6e7bbce012d4bf2fc1d76af42', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '3be542e00b98d3d79d60c866271a01f60c3f9ca9', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '1840aeb9d93c2404139f4e84f2ba9d8f0f47fb00', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '0b74990d1cbaea6553a03deb901a77b0c4353fe0', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '26f3de20e8b6092100f5b8c5fc2029d6e74367b6', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '34d545128c024abdc9cb07379095386c7da11042', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '343bc22e797a889998618d4c8c53da3612842bc9', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'd338ac595fd409fa46a8c0cbf55f96af349599ad', class: "p-0 m-0" }, h("select", { key: '050f4168a2b9dfc35470158a9b98cd28c546cd43', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: 'd14f49107681ce62b28589309f15a76561645bac', class: "p-0 m-0 ml-1" }, h("select", { key: '2189677644acdce55202ce8cf8ba373c72abffca', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '30e539a50322edcd05cbf7973af534a4dbe7c4fa', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '389b83eb9db3368f1d3b1db4dfddc2e5cb79da42', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '9861d562f924f5769b4322c85db46ee91ac80f41', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '6256c2ff73780fddfc926afd7074d77e6c9dc557', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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