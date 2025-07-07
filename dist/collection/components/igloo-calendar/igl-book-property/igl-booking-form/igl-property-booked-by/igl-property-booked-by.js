import { Host, h, Fragment } from "@stencil/core";
import { BookingService } from "../../../../../services/booking.service";
import { v4 } from "uuid";
import locales from "../../../../../stores/locales.store";
import { z } from "zod";
import { validateEmail } from "../../../../../utils/utils";
import booking_store, { modifyBookingStore } from "../../../../../stores/booking.store";
export class IglPropertyBookedBy {
    constructor() {
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
        return (h(Host, { key: '2380affb06926b00661efacf06a20ecfcfdb92e5' }, h("div", { key: '76d3cb46790adbfd39657679f51a03023ec84fc7', class: "text-left mt-3" }, h("div", { key: 'a7e5cc22393d5e500046806e785ac28278eeaa6b', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '7b67ed22d0dc2aa6a5e5c7718efd6bd8c82bdaab', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '50a253deb61fde05644307522da7d82a530ebf62', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'd95ffa5d17591d723ad2f9049a4cce4d5d785b30', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '9d0465b99891b026eb1fac3d7dc9365ada46b5b3', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '86c17206d5ebb07ada9b600e4b6389364c96225a', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'ddb9f9a8847c3287ac34224a1eee7fca3a5cce09', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '8585c48c487972d33d9510adbddd49ad45a6a357', class: "p-0 flex-fill " }, h("div", { key: '3a8a5b8ae3d9ee59888743f616a43a7a4a57f700', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '0532c226a7de747f7764c4604809bb59601e3e46', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '36598c37a302442c607c41039904ccd037e44fc0', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'e7e28a247c520ebabeb8555662d9e552befe1b60', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: 'aae369b73b9b82d63b435680c6ed21e8da4c7c8b', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '38aec71659a23b747f7123f91ac8c7bd7ad25c52', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: 'd1fa98380ae44c28ee9a030eda95660e52db7be7', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '43f62086133be0f477c2e6e700c8140f68283de3', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: 'cea1eea5069a97731fecfc5aa2617a08523d1b1c', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '609bea50ed3fd8b154ee239d38e4bae5f39a082e', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: '62d2be19fdf5315b910012ee01c05a5b29b36b15', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: '5132cf79b9806ade97d3c0c58f61c9adc6dc8836', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '55512cbadba1ff840021b8cd21061c5ca0b340cb', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: 'c80f3e1d63a93d861264ef710dc903f5cff2b745', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: '34fc42b5837e7c82fcb0a8088f3f537fa1d12e4c', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: 'b74b786cb11cc6e2b99d49c73793cf7a59a5fb36', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '7c76972493728a66f3bbb75909ba69af46fc5193', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '94e12b2171ce3f1e3fec0da3039a74c301f9381b', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '2e828451241dfb83535eb819cc152aa6f0da70b5', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: 'ca0bc1149ffeec4b78358522d903d33bbe7c2447', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '40950418274cd8b9fa7f305ad51300bc850123f9', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '58b70fb0619402f971448edf4d44a9be2b361878', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: '098a3f2c1be2d440d19b41b219f1449898913a73', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: 'e124ee4562ad1053569aea943450f9b2f3ec9fca', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: 'a55d4a26316e06c1642416734e432dd15192d251' }, h("div", { key: '15ac13bae7e7071e6302d583fae034027286a924', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'bc463887fc3bcceaf7a3f76313f196c621a03eb1', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: 'e2035ddf1eaa6f76bd5c9c9b1ab23527136c150d', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'bcfda117c0475fab754e52c0796b7958d863141a', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: 'd20017ee5a341e6028139447387f2e577862072a', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '0d5c4c1e5fe1fb0f30e9fc0968eda3e7344dfc21', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: '838f1a7d931a729e6209e1b97b220275572beedb', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '64bbc2ff0f52b41616e8bdf3fb911d6983d805f6', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '7aecea592a9b1a4b868114fc153275e4eb744c81', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '3357d3b43d6311e91557f945abe571586ee0e001', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '614ec8662bd039a3db97238347f182f06938232e', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '169a62270c12a627e6144ca109bd3f271d3a847e', class: "p-0 m-0" }, h("select", { key: '9d2904062d12f29fc95afb9514ba3d864e8849f7', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '434639611ac8c134e5b5915969bd4b71d34335ad', class: "p-0 m-0 ml-1" }, h("select", { key: 'b9ee9a2ddd7fe42d3beca751d72de021ef79c6a6', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '01589c5913c65659dd75b879b4aca3d7aaaeb2dd', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '6573a74e8f87a0876d595854edabd4c0c22f0220', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '635529edd0d141f74acab0402195e427fda7d1ea', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'a88e5185a3a1818b16fb117d9b905d4437bb25a2', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                },
                "getter": false,
                "setter": false
            },
            "countries": {
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
