import { Host, h, Fragment } from "@stencil/core";
import { BookingService } from "../../../../../services/booking.service";
import { v4 } from "uuid";
import locales from "../../../../../stores/locales.store";
import { z } from "zod";
import { validateEmail } from "../../../../../utils/utils";
import booking_store, { modifyBookingStore } from "../../../../../stores/booking.store";
export class IglPropertyBookedBy {
    constructor() {
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
            this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: data.id, firstName: data.first_name, lastName: data.last_name, contactNumber: data.mobile, countryId: data.country_id, isdCode: data.country_id.toString() });
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
        return (h(Host, { key: '3bd5ecadd0d031405232659058378e72da6272c9' }, h("div", { key: 'a62b1c867e65fc70f0e9a39403aa1bc5358307fc', class: "text-left mt-3" }, h("div", { key: '1c2b5460427ce2a842d3800632cc91bbd8b5df3e', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '4d65796aac65abc332b8bc213dfe67c97a329346', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: 'd3960fc9f4863df26e3c4a4ac5c21a3ca8f0d426', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'c6cda217769cbc5fc44a23abe20008bb6f54ca29', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: 'dd42e7647287f21d67bdbba130b68ddb4fdc04e7', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '2c25ec01f862fcf033676fd275fd4599162a78f8', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '488152cf80d9175405efc1201b7e7cd7856c9a82', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '2dcf522bb8e34e9d919ad06f12eb4d0071244894', class: "p-0 flex-fill " }, h("div", { key: 'c23f40e7e90262fe6163606ae371bc2f84bef154', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '60fe00506b4d258bab246b65c03b3eaff9f4dbd5', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: 'bf500218089aa86c606c5174fd7137ce15d64349', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '7910292e8d29ca6e7ac466e0134c47b300ec5037', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: '4f6a93c65ef35feb009343335ee6f39b75cea404', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '7b053ea41f311b810df76325c247170df76819a6', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: 'f40c2167ac052e008b262b1aa9b4c621eeed29f4', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '955aeac5337717ef6c08558d1081a2ff4645ecee', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '862b5dd80acc628e82dc8999cac75f6001ff682a', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5eb260351b5e3ed2d4a758519b8f03ea11a785c8', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: '54b0b82b507835c302f8a1f4b2e7a54e48558e1e', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'd45d4dc6dd3ccd39e04f8f1acb6f2e67d2477c70', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: 'dfc815bb21520702c85432bd90a9bb7007c7a8a9', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: '2f2ed73714eef1ba7b01091b6db84fc64f56cbc2', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'd33dd35aff38554cc21c223941cdcf55f8b84917', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '36c8c49d7d12dbe642fe08835a8a0619cdf40953', class: "p-0 m-0  d-flex  controlContainer flex-fill" }, h("div", { key: '0b218bdcb1d769841ec3fc362ad7ec8b9fc4d1f8', class: " p-0 m-0" }, h("select", { key: 'f27410ae34c07d1b43a6d64fb3e948a02d1ec2cf', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('isdCode', event) }, h("option", { key: 'fab279397ee4aa8f4fdc039d7053a38b1c99731e', value: "", selected: this.bookedByData.isdCode === '' }, locales.entries.Lcz_Isd), this.countryNodeList.map(country => (h("option", { value: country.id, selected: this.bookedByData.isdCode === country.id.toString() }, country.phone_prefix))))), h("div", { key: '0a1f3376db7b8ec07f6c2f3ec52be98cd1ae6097', class: "flex-fill p-0 m-0" }, h("input", { key: 'db9475dc36d164ae6d4213da4f8e71951b3acae2', class: `form-control
                     
                      `, type: "tel", placeholder: locales.entries.Lcz_ContactNumber, id: v4(), value: this.bookedByData.contactNumber, onInput: event => this.handleNumberInput('contactNumber', event) })))), h("div", { key: '2fe432ca3a52b41d9b0e005a464d005e55a39362', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '1b28ac5c3e9b72e741c4fd15925fac68ffe7ccef', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: 'cf60a20cb77441d75c6150e2c7451427bc101f48', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '8f2646f04b87e3fb635dbc772fe5df2d605cb9f5', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '18ae8ba0054a8177dfd808130e186d948b9f3623', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '3e11800a6b885d6b84a6e1bcefce8858a79fb599', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '5e192a099c10403a10e1e9272d5e2808468b9821', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'f2e08816b66ed59139362f1fce7003eb4105c88a', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '81a6a48ec4404a4bb0a62b9ba077fa9d90c262ea', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: 'bb6044b3d23debe74f7e60558f4c7377af210e76' }, h("div", { key: '0c3dcc1a5b4b9308a532bc1c567d28e0918e7f86', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '4cba2cbad57fbe4b13147fcc06baad32c24bad45', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '3078d9bd9ce6387684c89f9e94a66beab18ede65', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '96c1c71f44a4172ec03581adf2fb2608d193db36', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: 'b37ea07421077955e1d882561f3a4bb1c2129af9', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '314877d49729732efff86b3c41c2856c2bf075c8', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: 'd35c0e291e5baceb3290105529728de4772559f1', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '116b84d9781ac7580a3104b5f92d26540c4edfd5', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '78b86b2e81e95fa279f8ce31754db57fc50f0a88', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '895a42aab575367031d2bb4dbe4171779c39a169', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '63b2c8c9ff3e37310272f464170adf3b747b3181', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'a2c818a199499d8ade7adf71b805d9e7dea7500a', class: "p-0 m-0" }, h("select", { key: 'd26c91511db13a9865e16581cac9e6ab9adb22c4', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: 'c2b4712748c7c5016fcce54df5de11fb3d3fa3a9', class: "p-0 m-0 ml-1" }, h("select", { key: '43b2bf6b4c8e18b98af7ea18489b95decb6f9533', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: 'fbc7a6dc46c2a1f2acd6174561901819afad206f', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '9e862cb34a1f8ca1c1518c2566925ac65036c7ed', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '0d3272a90f2cec518e1d57e485bac054935c389b', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '21766716aad6346dd962a7db355752107df7a015', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
    static get is() { return "igl-property-booked-by"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-property-booked-by.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-property-booked-by.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "language",
                "reflect": false
            },
            "showPaymentDetails": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "show-payment-details",
                "reflect": false,
                "defaultValue": "false"
            },
            "defaultData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "countryNodeList": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "property-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isButtonPressed": {},
            "bookedByData": {}
        };
    }
    static get events() {
        return [{
                "method": "dataUpdateEvent",
                "name": "dataUpdateEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "buttonClicked",
                "method": "handleButtonClicked",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-property-booked-by.js.map
