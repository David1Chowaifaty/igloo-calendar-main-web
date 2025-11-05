import { Host, h, Fragment } from "@stencil/core";
import { BookingService } from "../../../../../services/booking.service";
import { v4 } from "uuid";
import locales from "../../../../../stores/locales.store";
import { z } from "zod";
import { validateEmail } from "../../../../../utils/utils";
import booking_store, { modifyBookingStore } from "../../../../../stores/booking.store";
import calendar_data from "../../../../../stores/calendar-data";
export class IglPropertyBookedBy {
    constructor() {
        this.showPaymentDetails = false;
        this.countries = [];
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
        this.bookingService = new BookingService();
        this.arrivalTimeList = [];
        this.expiryMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.expiryYears = [];
        this.currentMonth = '01';
        this.paymentMethods = [];
    }
    componentWillLoad() {
        this.assignCountryCode();
        this.initializeExpiryYears();
        this.initializeDateData();
        this.populateBookedByData();
        this.paymentMethods = calendar_data.property.allowed_payment_methods.filter(p => p.is_active && !p.is_payment_gateway);
        if (this.paymentMethods.length > 0) {
            modifyBookingStore('selectedPaymentMethod', { code: this.paymentMethods[0].code });
        }
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
                this.isButtonPressed = true;
                break;
        }
    }
    initializeExpiryYears() {
        const currentYear = new Date().getFullYear();
        this.expiryYears = Array.from({ length: 12 }, (_, index) => (currentYear + index).toString());
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
    }
    clearEvent() {
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: '', firstName: '', lastName: '', contactNumber: '', isdCode: this.country.toString(), countryId: this.country });
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: Object.assign({}, this.bookedByData),
        });
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '3023453cec52724a0d1f215fd5c6cc1c469d1f53' }, h("div", { key: 'd927507eb5a7a2fc6684d1ea513e213afd81a27d', class: "text-left mt-3" }, h("div", { key: '07a93d9548924185701169d15dfbede6586a053c', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '7b00a27319fada8422abe6a9eef8a22bb9626df5', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '936c73b4c59f0e2d3fc576ba912b26617a5fa2de', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: 'ed997ee333ca968872dba6a2c0998fe7f64925df', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: 'c3b7e88b995378216d8e477f636804528516d8c5', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '2347e839c01d34d36460a4b785b184301f842994', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '0aa1125aa6d2c11fe9320c94e1b79705c7abb2ab', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: 'f49e125f4ff29112a9bc6e5cfc56bc92d42b75d6', class: "p-0 flex-fill " }, h("div", { key: '881cffb5c24b5e022ac102b11945b4774945cc3e', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: '6b0083753b0c727f5a3c6b0ee212eb98b389e369', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: 'dfac79f83b5212e15a45da62b1f07fb0b62d433d', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '755bf206224128f69888b4ca508fef71ee6092f9', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: '967dee46d299da623d35099ee977177d633b5b28', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'c039d95845a772206556c14d12c06fc42310e6bd', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: 'd9f89089879761e13637274e4c6de3121629a1c4', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '56b021f67cacbca9207a2bdfc481103157eddcfb', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '85f51aff99f7f610291f977666c4bdb2269cb0f0', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'd2f29f8cfb22f6e7f23a3dc69271098a9a8523f4', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: '08618bad10cd2682b187ca1666aaa8d60ae4f600', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: 'd7f3968534c31f723ffa636f0b79acde8bbc54b0', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'b8dfb87569af53bbe4bf8a89b6739f759f8b6646', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '22f46926c50cc7529f7846670400d82910a7d52c', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: '8d28bc81971a4f08ddc6ffbbb25e319a19e23bcd', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: 'b0eb78b0351d32d8e899fc3e76fcce7e7d59e800', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '363d337a90b62e7387b92aa321e2c42493d745f6', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '6c5a05ec7b8e9c69902ee04ace7f5f868b63d4dc', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'f8b1bd5bbf32d2034e7aae83fe36e929b18dd5bb', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '636b881f139ca6a57b1e040a200b0dc933cbd8d0', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '9ffe48828a14f45610d774a4df748a8898acb660', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '3847b56cded2cdfc3d9ed3a02af30a11e7f416ca', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'ed35c8b5f2418d796bd9247c1b7d83ae69c7c32c', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '44799891b4ce5cddea5a0ffbd00717ce60e5929e', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.paymentMethods.length > 1 && (h("div", { key: '50b0990d2aead1b1300e36e4579581e136aeab17', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '74b6112b3c4ca5a0b23cc0e9fe7bdfc0801ea016', class: "p-0 m-0 margin3" }, "Payment Method"), h("div", { key: 'b0e412a57510e9342bc62f1bb72895f43e656d2a', class: "p-0 m-0  controlContainer flex-fill" }, h("ir-select", { key: '84e3834a7eba3f53172bfb8162c1f260386fa6db', showFirstOption: false, selectedValue: (_a = booking_store === null || booking_store === void 0 ? void 0 : booking_store.selectedPaymentMethod) === null || _a === void 0 ? void 0 : _a.code, data: this.paymentMethods.map(p => ({
                text: p.description,
                value: p.code,
            })), onSelectChange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.detail,
            }) })))), ((_b = booking_store.selectedPaymentMethod) === null || _b === void 0 ? void 0 : _b.code) === '001' && (h(Fragment, { key: '068c2bd09ab8480ef571f5ca93773f25df9daac4' }, h("div", { key: 'd3f7e469e9828d306291865923d10c65c1e7685b', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'd88bf2272dc1adc73bad307e5c3f1f197221a255', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '540f03b5b07cbfbccde1e5c079c96715a8d1bd34', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'b9b6b9a98a876dbf3020be5c4ff415343582bd26', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '9aec0a57b38daebe4409b2a9d3713de6b084107f', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '5fd6661acc7878780e5be6e5bd67c3b25e032c3f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: 'f67184571842a01403b9770d7631594006bdf2a4', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'fb7a68ea9169ee6b07e08820daa0f8dd5d596e96', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '61e2501a8a56a1911e037000a43f0d9669c541e4', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'ae0dfe05a7bc586c88fe3e9237fd1189b40ddf05', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '6d37faf88b7b8fdd341b13e943915b8322f88883', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'e0f50583868af37eee0f42d5449b82d40ecc61dc', class: "p-0 m-0" }, h("select", { key: '094131cf8c03677dffd30244d7bfeb55d3db535e', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: 'a6e31e73b9f635cf06f31a6d8dcaa55ec605d681', class: "p-0 m-0 ml-1" }, h("select", { key: 'ffc59a4686fe9217cce6a6a683361610df854ee0', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), ((_c = booking_store.selectedPaymentMethod) === null || _c === void 0 ? void 0 : _c.code) === '005' && (h("div", { key: 'f6c5889206b390582e70ca4e0f1cafeb2790d8f6', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '8ea0962bef2549a1ad84920c8ff16dc43f92efb1', class: "p-0 m-0 margin3" }), h("div", { key: 'bebddf090036dbe299f120a3525f145fcda40c3f', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: 'aff3e5a27be155e9fda307f8a71b1da91d8cba1a', class: "property-booked-by__money-transfer-description", innerHTML: (_e = (_d = this.paymentMethods.find(p => p.code === '005')) === null || _d === void 0 ? void 0 : _d.localizables.find(l => l.language.code.toLowerCase() === 'en')) === null || _e === void 0 ? void 0 : _e.description })))), h("div", { key: '4e6381af85d8cfef51ce3ee300f7c4964ad4ab45', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '83dd3c277d435b08caaa13a75c962519c8009732', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '74000b233691bd2ff872b0036d202dc81c7231fe', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: 'a6ddfca43c9a42572d8d5e8b77690a55c79b292e', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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
