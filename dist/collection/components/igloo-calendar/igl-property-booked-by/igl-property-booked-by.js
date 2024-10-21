import { Host, h, Fragment } from "@stencil/core";
import { BookingService } from "../../../services/booking.service";
import { v4 } from "uuid";
import locales from "../../../stores/locales.store";
import { z } from "zod";
import { validateEmail } from "../../../utils/utils";
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
            default:
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
        return (h(Host, { key: '462472748c424ae379fb869fcb593dec27a2e640' }, h("div", { key: 'addd92ca8f0e20af98fe523d6ad2d988fa5a101c', class: "text-left mt-3" }, h("div", { key: 'e8a488334b5908493f5d9dac0c990853da3a2231', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '9e2a8be945ffd936b7c8df70d522338c5f4cbedb', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '9fa2949e2b9c1311b49ff5eaa7ca635a199e2bf3', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'c73ca6521d8b66cc35c3bcd26609ae213f127bf3', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "email", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '56e880f73dfe414e35dca3ae4a3a23809b03891f', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: 'd64d587c29e356ceec57c39c4e4f05dc08b8b712', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '1686970252d1683c5de4c4eb3cbe5d0c8be99db0', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: 'aba1c65cd04d65b9b42582d6225d4ef7f8c29b1b', class: "p-0 flex-fill " }, h("div", { key: '5044d57144bafbbd0cfe4c283d678fd6c6695026', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'c8bccac383a158ad9cfa23a401c0835cd84eedb1', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: 'da7ab566e4b69fb1e951c6ae0d3b75cfba8f401e', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'b4e6935a9984ed02a46220abd9eaacfc922f9f27', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => this.handleDataChange('firstName', event), required: true }))), h("div", { key: '58a9ddebc8885fbc88e45346572d5f270b340b31', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '8d32a9eb06d73e95426d58da9c649f7654d5bc69', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '3e01f471236995137c3d5bf57373bb9539231a38', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'd7dffcf161a5d74ced1eecdfaf1ab864635e8673', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '2f6eee7ab341963d7b6d2c756773913526e808f0', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'c326b520a0ca4a3a03d98c602fd7aaa4e923d547', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: '458b9e33a104ea8a3d21b608140dc3582def865e', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '0ee4673b8a6cb0390f7ca28bb41e760f926c0502', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: '7068ef084e8d25012034bf8b9f7376ed2f2a3363', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: 'a76c53b65d20b46e0c641b61c6423ffe2b8fed39', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'c1148c1bd19e9f4768c4738ca567cd8596707ad4', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: 'eddee9acdfc2b12047e9c9e7411cf0f506b9ed02', class: "p-0 m-0  d-flex  controlContainer flex-fill" }, h("div", { key: '898173307eb4f599d1a20b8c3f51c2d13be89a1a', class: " p-0 m-0" }, h("select", { key: '60eb9beb48d14a74868a506bb42d0f352c9bf138', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('isdCode', event) }, h("option", { key: 'e1641b38134f948e1977c0c167bf43b29aa83879', value: "", selected: this.bookedByData.isdCode === '' }, locales.entries.Lcz_Isd), this.countryNodeList.map(country => (h("option", { value: country.id, selected: this.bookedByData.isdCode === country.id.toString() }, country.phone_prefix))))), h("div", { key: '180c6d027db644db8d7f17cde53060d8bfc8b6b3', class: "flex-fill p-0 m-0" }, h("input", { key: '00f034cefe22c7d3f2a1e08246756fbb937236fd', class: `form-control
                     
                      `, type: "tel", placeholder: locales.entries.Lcz_ContactNumber, id: v4(), value: this.bookedByData.contactNumber, onInput: event => this.handleNumberInput('contactNumber', event) })))), h("div", { key: '7a77cdd2da48c499b2d1c65dc4ebf5e3e72ed4a3', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '8b992e77a4378f9e36123c2f548ce06c37dec8c2', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: 'e740aadfc5a2a9f3fa9254a94c4e0b276071b0f5', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '741414b8fc590c7e4eb21773438cb0b2ade846a9', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '6d331b58824afb44e90fb3b67becc1d51a2eb6f3', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '609a3658dce2292767ab3f7d5b5b39d554136f82', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: 'f25ecbf005408d54535b8aecca5be7847d590b88', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'e4080611a79307fcf7ffcaab89cc5bd0facbc81c', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: 'd75532675b76bb51a5ce144a591f65bb21281916', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: 'f693fcebb381a1e3a3df486b79432084224775e5' }, h("div", { key: 'e37e79a384f9f969fdb43b42f9cd211f4a1e140a', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '24f08b7ccced4f45682d2ff69431ce4260392cf2', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '435920bbae1457e16df7ec50c37da364f29e4cae', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'd3dd8dd628518c1cc034a18e19a809b004658814', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: 'b87b3fca5802461072ce8a3b0dc219be937cb9c0', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '111440d1894e54bdc9ff669fe9cefe631ab027ea', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '509920af8a9289beeec5652be7d43c4ab7378b03', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'cf83b782f743415926f720a23f885858e30b6981', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: 'a3abfbb8763cddfa90b8582871d4b2df32afc535', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '45bdf11bc9858a6d3961ca69315825a18de0c828', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: 'f92e65e777f9d2622e963ca485e0fef873d66f36', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '802d7b62bd003e8e25bedb4de6cef40cc84b4ab2', class: "p-0 m-0" }, h("select", { key: '27c15bd269055b3fd4d4c05a5284a591ed2569ce', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '00a7b9f1d00aca085825022f7d7c76d36d4ea7bc', class: "p-0 m-0 ml-1" }, h("select", { key: 'ee47f3413f1fe64842243fc6905e07fdf203ec78', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: 'b8512585bca77f7fefc26ce19ea5e902904e8208', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '07569e7c978674c672d35fd01179e4f9a81138c8', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '63c660a047272779f78aca34ca03546e80f6c206', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'bd66a801fb741175e85e4dc7a2446fa201482308', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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
