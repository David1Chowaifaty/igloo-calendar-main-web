import { Host, h, Fragment } from "@stencil/core";
import { BookingService } from "../../../../../services/booking.service";
import { v4 } from "uuid";
import locales from "../../../../../stores/locales.store";
import { z } from "zod";
import { validateEmail } from "../../../../../utils/utils";
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
        return (h(Host, { key: 'be1a094738ccb90bc73f09d795365bb9f72e8b9f' }, h("div", { key: '3ac70d39520624acc2f927e883ce46e145eb859e', class: "text-left mt-3" }, h("div", { key: 'd155c6ef4f0f44b387c5f0a48f5df9bce603c73e', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: 'bc90aa160a61fec315b4bd2bf21cb5aa4548af11', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '52e238c1856707f36507588995dfc3bfea9be6e8', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'e571eda7d411d8a5748513eb5c03b0ac5ae29db5', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: 'b17b1358693cf8bfd892358aa0e7587639363896', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '7dc0065fe9b7f4ade5b2a17fb3fb5828c8f7f866', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'e61495fe3992d375148cf1cd4df9d9c3f9c7dcd6', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: 'edbad157a65a4dd403079467e426468d38178e3e', class: "p-0 flex-fill " }, h("div", { key: '9137adbe85557ff44851f5d8389040f8871414ed', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '09e3e13c699af6df434ebc7abecdb8687322f6bf', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '83c3234fe7d62945a80f8e2144216534096667f7', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'a40017f688b3c8f4a6fbea9af77095e56d04319b', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => this.handleDataChange('firstName', event), required: true }))), h("div", { key: 'cc3bc98836960e75ec51078cb85b4f83ae663fc2', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'ec8b95539038cc0b5baf3131761022e1b6671e37', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '525619cf98bff62c786a40fd7e7bcb2cff146a27', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '1d1383e37e9c59063a41b9f74ebc58266f0b0688', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: 'f7e40a8f92e4ff1ec255ebd0c62c9d6a60eb65a3', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5eaa0ef2ee2eda07c7eb45f8cc05a5a81ed5607e', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: '1e223cbfe79e4c2282cd1c8fae5350916a4a9444', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '68489c2b6a3799bba7cc9b2ceda7f8b076d00cfe', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: '47b8b6f580478b6bd53f4bf7ec18db654b484367', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: 'bad3e6f66827aaae15910cd7d7b9ee0e8fa69090', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'c0b1d1c9494ec1e4e5ca694f419347b22f6e6796', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '35e7bdd7eb3019a3fd58d5f31ce27144f5f8cd14', class: "p-0 m-0  d-flex  controlContainer flex-fill" }, h("div", { key: '0571bfc3af21edb5ac09fbc301eaff16c6dd8fd2', class: " p-0 m-0" }, h("select", { key: 'db5536be1b61ada5d897a310c3134604836f7d61', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('isdCode', event) }, h("option", { key: '1e92a8ed9f58f464d3a788281accbe6acfbd5086', value: "", selected: this.bookedByData.isdCode === '' }, locales.entries.Lcz_Isd), this.countryNodeList.map(country => (h("option", { value: country.id, selected: this.bookedByData.isdCode === country.id.toString() }, country.phone_prefix))))), h("div", { key: '0f6bfbb7ac6fd6366dd73437daf28108aff8e541', class: "flex-fill p-0 m-0" }, h("input", { key: '8de661de5dbecf18ebb5da446b5bd265b03013fc', class: `form-control
                     
                      `, type: "tel", placeholder: locales.entries.Lcz_ContactNumber, id: v4(), value: this.bookedByData.contactNumber, onInput: event => this.handleNumberInput('contactNumber', event) })))), h("div", { key: '31a2f6edb790f129f353a20b0e042553de1e0bde', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'afc3be81e603cf67f64fd8cf61ca6d8dcf9031be', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '197b0c550bd4c77537225d0ee121fe1ea4b56237', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'd84ce8303e50cd332c71ccac37d74f53142038a1', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: 'af07bd68e7058d0bfcdc70fba982372fd5a4ca42', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: 'a143f33eb0762a17b7811b50e2aaec13407311f2', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '4c8303f93da93677686cd0b0066cc26c123ebf58', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'd3d758dc5d9cecede11355e4e37c246920c368b1', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: 'e89808a66a4ac4977693aa4e64e83ede8128685b', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '951b5d6a02a2c2b5939689dc5a67c0f7befd3c20' }, h("div", { key: '5ba20c2cd5e509dfb59bf1864fb8ab77f6d2253c', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '0adef2d586fde51a00a3adb85617a6c7c5dd0510', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: 'd13eb8261ad566924ff44bf3c9269432f545084f', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '3c8791a36a1a43fb6a4978d28f892cac2ce819f1', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '97cc179094e9559d0a93e10f8f9e22d4a4b3f7d5', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '848cb25efccedf20ba049257e7b3c4f30be52573', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '40ee095190a04a45ebf61f9e23b8feac74eb3b85', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'ad39b015366755c42efd9f87d2b0b37f5257a4ba', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: 'd392129b6304a40777808f71d2bdfb6542ad32e5', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'c10a4af003659ce0e28dbf86739835909876fb9c', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '39f01eb62c6b35c965603c19e8f313ee85ac6f6d', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'e0971c21b88bda42764ead54a5a3d29cf993fe26', class: "p-0 m-0" }, h("select", { key: '9ab57b2e893c6e947b0e7da8c6af7e35499f7139', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: 'dddf9cd50f0653e35291f5c833d9e6a97994e99c', class: "p-0 m-0 ml-1" }, h("select", { key: '85191599b32015a52a08293dbaa88cdda0256e63', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '11d4171b00e1382eeaa8dae89741cd9501d6c063', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: 'bd48abfb81493d870a766d1f698d98ac92bab015', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '69ac5588a5b0468653e0d7123ad04c13e777d7e1', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'ad9b577a682efe121835b27cff7a73ebbceb1c1e', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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
