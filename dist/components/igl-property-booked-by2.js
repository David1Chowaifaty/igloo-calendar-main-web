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
        return (h(Host, { key: '0e5e1a3d0cd101e6844023e3a2136c47b4b129a6' }, h("div", { key: 'db2308c5933abb8daff6b2addd5522a667353670', class: "text-left mt-3" }, h("div", { key: '91445f9b195f2dbc98b7e69b588f94dc233e003d', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: '34a29f55912860623b366b6f4b794c63c3e30fa0', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '4a669a2d6fbe400e5dcbcc4d2715384d2fdd4aa1', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '1885b4497069683030f8d2f65f7653704a48f174', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "email", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: 'cca60a1d61de1728d21abf8a27ecdce194a9dc20', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: '51cf1617bade0b0723b3da3e540c3f272791ef11', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'f187f49e24112da7bcde02f4bd229822be2f7cfe', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: '35a108f187b83e7d1ebc26832ed388b0e1789fae', class: "p-0 flex-fill " }, h("div", { key: '2e8b8c14eae76ba39c02136f2cc6dc4bd56ab12b', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'f7575b4c620f941d8fad138cc644ffeb3be09a85', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '97ecdeb32270657f601eba816aeaea85c60ae397', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: '20b13c0e700737b50f0f45f949cc3d4f655ceca5', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => this.handleDataChange('firstName', event), required: true }))), h("div", { key: '4c704aa5a03a556d0761e28c0596eae7997a6a6a', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '053cb08813d4367995e09c5bd1f5376eedf44081', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: 'ef83d9f88e910dc07fb1dd49de964d9987cdafd8', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '5cdca05ef1db9bca5c475d6c9835408108b34d46', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: 'e37262ef6b39d0624030af4b94d30ea9828e60ee', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '4a2a2366795d5a67106a63dc40396b76ec127c6d', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("div", { key: '1dd47411ee6edc221783f8c64d4261c4c0cc1ff7', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '9f6af800d0efba7eba66d8e28604525ad5c4904b', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('countryId', event) }, h("option", { key: 'dcb105f6098f1c5ed066c661d80e546fe3875196', value: "", selected: this.bookedByData.countryId === '' }, locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), h("div", { key: 'f870ae9e940010880f589a3dbb17d96bd36ba79b', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '2aa7c363b2541cc58fb08592194e983c8d93048a', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '5b5142cfe4c05cf2f448884ef6dec93663c40901', class: "p-0 m-0  d-flex  controlContainer flex-fill" }, h("div", { key: '340ceab506302ee54f58ae256dcb1cb904d90120', class: " p-0 m-0" }, h("select", { key: '8b7da7d54f48656f2975bebd9981bffca1c53554', class: `form-control input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('isdCode', event) }, h("option", { key: '2936767a7c7c74795fd997b831114794d6e75b65', value: "", selected: this.bookedByData.isdCode === '' }, locales.entries.Lcz_Isd), this.countryNodeList.map(country => (h("option", { value: country.id, selected: this.bookedByData.isdCode === country.id.toString() }, country.phone_prefix))))), h("div", { key: '0892a0cd81694ba06b3cab2834bf35443992c400', class: "flex-fill p-0 m-0" }, h("input", { key: '0f5569927e394e5989456b7ee83e8afaf312eb24', class: `form-control
                     
                      `, type: "tel", placeholder: locales.entries.Lcz_ContactNumber, id: v4(), value: this.bookedByData.contactNumber, onInput: event => this.handleNumberInput('contactNumber', event) })))), h("div", { key: '1019eba11bc81d8aa209b78a0b3f94f93696e6fb', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '793560f9c223c96195f83f5bfdc16bde4dc08149', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '6094b1c0dcce36f3cde85adbccf73f60a4879eb2', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: 'd6806c876103677efc7935fae391a4fb8b723dff', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: '746a508f2872997d8f29d4976629ec0c15a3f578', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: '5e9b048fb5200d2db9434768b0959d9036dcf938', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: '5160cc12e28273f38548167d4a1ee78a4ca14363', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: '27d3b22df8fea2718264775eb1e52864fa2999e3', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '5363b11f9d3f004d297234c1d825fc42ba97d34b', id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: 'a83b7f5f5f80d70c608bc4db3114f31335d90b1b' }, h("div", { key: 'e87a349d4d164381fe54e502b13a5cc03f6878c6', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'b584be3248b6a88329925c3a3f7654321071004f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '15e37806e8aff4e8419bf41aa75f7c74ae73ada7', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '4ed2c017297ceb2e2b07caa66f25b7e01ecdc624', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: 'a84141d8dc6162b6d34ae04ddea2318e2d57c8e0', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '782cb3d7c74e3ac27ad46e2f252fab8ef812e30c', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: 'da49f3602cade6a44ca06776f8e52dc48ad10c9f', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '05ed3779ac106ef21658e838e62c10a47a2a2429', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: '0376fb48ddc698f0ed9f3b54d64de2d393416ef1', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '079d2df59890c979936e928a1e80d1e8e6f73935', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: 'de54d97da81cf288181b99d83586da19f1463167', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: 'beb81b2ba9d821462a3868e8bea3005cddd3a9c1', class: "p-0 m-0" }, h("select", { key: '8d0b0e240851fc4ec03cd878721ecde0be3450c7', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '5b0e4f131d862436514013b7ff17f39dc1634a37', class: "p-0 m-0 ml-1" }, h("select", { key: 'f0887655c1074fe0d91061b08852045c9400fa4f', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: '68c1e80bee986cfed62e2f5f56f6da7d624595ff', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: '3d8eed875145d49e816536818793298c4ed9e22c', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '6a4aa08d80a9928608f47f1cb267ca8995f78d53', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '4f674d1b5670f0555793063cef0d94d32458b28b', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
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