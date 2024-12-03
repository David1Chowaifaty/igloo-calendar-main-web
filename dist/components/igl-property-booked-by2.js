import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { z, v as validateEmail } from './utils.js';
import { m as modifyBookingStore, b as booking_store } from './booking.store.js';
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
    updateGuest(props) {
        var _a;
        modifyBookingStore('checkout_guest', Object.assign(Object.assign({}, ((_a = booking_store.checkout_guest) !== null && _a !== void 0 ? _a : {})), props));
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
        return (h(Host, { key: '5424a66dce761515857fdca243c0f394e1a57298' }, h("div", { key: '94b0a4109111fb60daf428e8853f7e4edc45c75e', class: "text-left mt-3" }, h("div", { key: 'ff4d8f84a9b21d74f6b2e2d6189763a8f366e4c7', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: 'a67999cac0050164fc2a256edfc611303f5a11ed', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: 'a36dee3a444e514efc0d1d2e239d36549ec9012e', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '2a30772e8bcbdc1c0074ddd9394fb4ddd9aac6e3', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '3f769c0bafa6ccc811f4bcf873b0a32594ccfd3b', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '377bfd8874c28e6100d56d2d7ceefd0f6366e232', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '8944eb81a23dc50d76136a61439fae78c3620bcd', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '7543b8a634ae465fb52ab816b1b518a5244ed76a', class: "p-0 flex-fill " }, h("div", { key: '1dfde4bd67c217b169e762a1411073060c0b709e', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'e0ef2562207c12bb883f3a952034e1284e0648e6', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '2ce64ff70b33e52da9847ebbb3bf28850b1d7c63', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '958024d5d845cf4179e5d97fb4f0ab9e4b91c048', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: 'd0c432a77a1580caf8d91c6787d07242a989a3c6', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5846a8a8420454843b01651f7d93760158738ed9', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '03042a190fb1ca51599f89e1f330a884ef895a12', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '91e1a55fc55e687d163ed744b3c3031226ca12c4', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: 'ca6689ca798a94dd791469fd315ef01669bafdf7', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '43bd97b7b89e5370c51018e8f84b3678b7d2ccca', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: '98ae147c535fc20d10793c01a8d9382dcbba29ba', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'd668596979ccde138e667692e70fd3cb7fdca489', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: 'd2042618985c85efc4500249b999cb7b0388b802', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: 'ad891bcc7b6edd912d16f576ddc79a0ba24e34cc', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '37ce1d38abf322bfe5e4ffff310608414c208b57', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '55f50c8b3f974d0f293ff21a92371c7738402048', class: "p-0 m-0  d-flex  controlContainer flex-fill" }, h("div", { key: '9dbd53b33dd2ea493accab08f4387c1f1690ed36', class: " p-0 m-0" }, h("select", { key: '3713d684ae2c2277831a3fe01865c8d00d7f1d78', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('isdCode', event) }, h("option", { key: '4f1c73bc24056a581df3f560841222942d0a15dc', value: "", selected: this.bookedByData.isdCode === '' }, locales.entries.Lcz_Isd), this.countryNodeList.map(country => (h("option", { value: country.id, selected: this.bookedByData.isdCode === country.id.toString() }, country.phone_prefix))))), h("div", { key: '5288c7334e8f553440a911c1b6ae0e6be596559e', class: "flex-fill p-0 m-0" }, h("input", { key: '2803c79ecd507c931dd27f2091317274c4f2f087', class: `form-control
                     
                      `, type: "tel", placeholder: locales.entries.Lcz_ContactNumber, id: v4(), value: this.bookedByData.contactNumber, onInput: event => this.handleNumberInput('contactNumber', event) })))), h("div", { key: '57736f5b253bad17179679963e9b5b05e1d541e5', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '61b7d46d5bb935c99f64ada10ab85ae939600aa5', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: 'b8a30ed77ea72fcd453a88ac07be20da1b9f0c2d', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '03877da7db6cb382f1d9f92497734124f1e99b9b', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '3c7d95500c370f3f0d4ee756b96686de0ff14b5c', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: 'da7b0ee8bb0d3ba5b0aa83f40299b00c49740188', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '544ee5c372b12903ac0b74e39a82066477ec4e36', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: '7bd8b3a053c91aa432725dfff67a8bd6c7401af3', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '9ea4f38d274d358dec0fa7e19de9a82d7405cddd', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: 'a5dc25f71e76eb01d25059db3cf11d60a21199c6' }, h("div", { key: 'e926ba886a3861864cea6b5bf722d6375e10ab89', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'ab3bb1fcb21a1377238426c01bac2453d46be95e', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: 'c14a1e50c2df7fb9138e2c4173f6056db46506af', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'c2b720e726b6b09943fdc4dcd158f3d5e3298514', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '6e7ec6761a62aa2f9a1823ede6f16bd6638d95ce', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'f425ee6217dd11457fcc1db8a2ec3b29eed62a4b', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: 'af97d01e412e2afb83728a7031b8aa9741c07957', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'dc1775dc6bfe1daa318681924e107c12208a3107', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: 'fda5411249f09d27ec4ed7b626a414511f319009', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'e145c9a0b3c14e623d96142ec82fdfe0809c2821', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: 'd3492414ff94122c1b0aae0dee9c865d22664d9e', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '857f5eaf9795a35d39652149036cfa124ee974d0', class: "p-0 m-0" }, h("select", { key: '772e83d6b44aaa144271640366313df2d86fcfb4', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '27335a5620732f0b6b6fa50ee2ceb3ed47731692', class: "p-0 m-0 ml-1" }, h("select", { key: '90ea6c41810b158707c7303e239554866b814c1c', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '66d6bd818be42edcad3af1dc960e3d227a0794fa', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '72422f715f889b152871801c5b4f7aab0bc872ec', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '035110a16c71a100c78b368925035855a2acea2b', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'f448c95e77e347384281ee2001111d2e6a8c147d', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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