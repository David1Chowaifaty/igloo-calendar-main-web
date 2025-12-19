import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { z } from './index2.js';
import { v as validateEmail } from './utils.js';
import { m as modifyBookingStore, b as booking_store } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { I as IMask } from './index4.js';
import { B as BookingGuestSchema } from './types.js';
import { d as defineCustomElement$7 } from './ir-country-picker2.js';
import { d as defineCustomElement$6 } from './ir-input2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-mobile-input2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';
import { v as v4 } from './v4.js';

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.row.sc-igl-booking-form.sc-igl-property-booked-by{padding:0 !important}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.property-booked-by__money-transfer-description.sc-igl-property-booked-by *.sc-igl-property-booked-by{margin:0 !important;margin-bottom:0 !important;margin-top:0 !important}.property-booked-by__money-transfer-description.sc-igl-property-booked-by,.property-booked-by__money-transfer-description.sc-igl-property-booked-by .sc-igl-property-booked-by:where(*,*.sc-igl-property-booked-by::before,*.sc-igl-property-booked-by::after){margin:0.5rem !important}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}.fd-property-booked-by__guest-form.sc-igl-property-booked-by{display:grid;padding:0;box-sizing:border-box;gap:0.5rem;width:100%;flex:1 1 0%}";
const IglPropertyBookedByStyle0 = iglPropertyBookedByCss;

const IglPropertyBookedBy = /*@__PURE__*/ proxyCustomElement(class IglPropertyBookedBy extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
    }
    language;
    showPaymentDetails = false;
    defaultData;
    countries = [];
    propertyId;
    isButtonPressed = false;
    bookedByData = {
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
    guests;
    typedEmail;
    dataUpdateEvent;
    bookingService = new BookingService();
    arrivalTimeList = [];
    currentMonth = '01';
    country;
    paymentMethods = [];
    pickerRef;
    componentWillLoad() {
        this.assignCountryCode();
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
    async assignCountryCode() {
        const country = await this.bookingService.getUserDefaultCountry();
        const countryId = country['COUNTRY_ID'];
        this.country = countryId;
        const _c = this.countries.find(c => c.id?.toString() === countryId?.toString());
        this.bookedByData = { ...this.bookedByData, isdCode: _c.phone_prefix.toString(), countryId };
    }
    initializeDateData() {
        const dt = new Date();
        const month = dt.getMonth() + 1;
        this.currentMonth = month < 10 ? `0${month}` : month.toString();
    }
    populateBookedByData() {
        this.bookedByData = this.defaultData ? { ...this.bookedByData, ...this.defaultData } : {};
        this.arrivalTimeList = this.defaultData?.arrivalTime || [];
        this.bookedByData = { ...this.bookedByData, selectedArrivalTime: this.arrivalTimeList[0].CODE_NAME };
        if (!this.bookedByData.expiryMonth) {
            this.bookedByData.expiryMonth = this.currentMonth;
        }
        if (!this.bookedByData.expiryYear) {
            this.bookedByData.expiryYear = new Date().getFullYear();
        }
    }
    handleDataChange(key, event) {
        this.bookedByData = { ...this.bookedByData, [key]: key === 'emailGuest' ? event.target.checked : event.target.value };
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
        if (key === 'countryId') {
            this.bookedByData = {
                ...this.bookedByData,
                isdCode: event.target.value,
            };
        }
        // console.log(this.bookedByData);
    }
    handleCreditCardDataChange(key, value) {
        this.bookedByData[key] = value;
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
        if (key === 'countryId') {
            this.bookedByData = {
                ...this.bookedByData,
                isdCode: value,
            };
        }
        // console.log(this.bookedByData);
    }
    handleCountryChange(value) {
        this.bookedByData = {
            ...this.bookedByData,
            isdCode: value,
            countryId: value,
        };
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
    }
    updateGuest(props) {
        modifyBookingStore('checkout_guest', { ...(booking_store.checkout_guest ?? {}), ...props });
    }
    handleComboboxSelect(e) {
        const guest = this.guests?.find(guest => guest.id?.toString() === e.detail.item.value);
        if (!guest) {
            console.warn(`guest not found with id ${e.detail.item.value}`);
            return;
        }
        this.bookedByData.email = guest.email;
        this.bookedByData = {
            ...this.bookedByData,
            id: guest.id,
            firstName: guest.first_name,
            lastName: guest.last_name,
            contactNumber: guest.mobile_without_prefix,
            countryId: guest.country_id,
            isdCode: guest['country_phone_prefix'] ?? guest?.country_id,
        };
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: this.bookedByData,
        });
    }
    clearEvent() {
        this.bookedByData = {
            ...this.bookedByData,
            id: '',
            firstName: '',
            lastName: '',
            contactNumber: '',
            email: '',
            isdCode: this.country.toString(),
            countryId: this.country,
        };
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
    }
    async fetchGuests(email) {
        this.typedEmail = email;
        this.guests = await this.bookingService.fetchExposedGuest(email, this.propertyId);
    }
    get expiryDate() {
        const { expiryMonth, expiryYear } = this.bookedByData;
        if (!expiryMonth || !expiryYear) {
            return '';
        }
        // Normalize year to YY
        const year = expiryYear.toString().length === 4 ? expiryYear.toString().slice(-2) : expiryYear.toString();
        return `${expiryMonth}/${year}`;
    }
    render() {
        return (h(Host, { key: '719f8ec925cbb08de4cb473f3bd8b190424adaf9' }, h("div", { key: '8f7de94c722cfc65e9b1334614cb5d15bfadb90b', class: "text-left mt-3" }, h("div", { key: 'cb3d626802270554a11d1a2e81df5224dd983e14', class: "d-flex", style: { alignItems: 'flex-end', gap: '0.5rem' } }, h("ir-picker", { key: '40a2fa3b1e23937e3ddb454ef79f12c1e95ae23f', class: "bookedByEmailContainer m-0 p-0", label: locales.entries.Lcz_BookedBy, value: this.bookedByData.email, ref: el => (this.pickerRef = el), "aria-invalid": String(Boolean(this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email))), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 300, "onInput-picker-blurred": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                const email = this.typedEmail;
                if (this.bookedByData.email) {
                    return;
                }
                if (this.guests.length === 0) {
                    if (z.string().email().safeParse(email).success) {
                        this.bookedByData = {
                            ...this.bookedByData,
                            email,
                        };
                    }
                    else {
                        this.clearEvent();
                        this.pickerRef.clearInput();
                    }
                }
            }, "onCombobox-clear": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.clearEvent();
            }, loading: isRequestPending('/Fetch_Exposed_Guests'), placeholder: locales.entries.Lcz_FindEmailAddress, mode: "select-async", "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), h("div", { key: 'fcaafce05fc1e8d2e75810d130875ce095def47a', style: { paddingBottom: '0.5rem' } }, h("wa-tooltip", { key: '3eb95463b8d57329a9ca3ae381efb4a07a4d8abd', for: `main_guest-search-tooltip` }, "Leave empty if email is unavailable"), h("wa-icon", { key: '442efef76d79296401316dd55047d84d253a72a6', name: "circle-info", id: `main_guest-search-tooltip` })))), h("div", { key: 'df2d0eef302b6266599d307e647e233519a67250', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '4f4118566de431df2eb42241ea635a7a605ee286', class: "d-flex flex-column flex-md-row  justify-content-md-between ", style: { gap: '1rem' } }, h("div", { key: '3ad9b555e914b5525f37292186a32039d05c5ee7', class: "fd-property-booked-by__guest-form " }, h("ir-validator", { key: 'dc616c3a7019271fadeb5400659e00b1eba85dca', value: this.bookedByData.firstName, schema: BookingGuestSchema.shape.first_name }, h("ir-input", { key: 'e9463b112cc3ff877d9c764d7920f3d88a5d4ee8', "onText-change": event => {
                this.updateGuest({ first_name: event.detail });
                this.handleDataChange('firstName', { target: { value: event.detail.trim() } });
            }, defaultValue: this.bookedByData.firstName, value: this.bookedByData.firstName, label: locales.entries.Lcz_FirstName, placeholder: locales.entries.Lcz_FirstName, required: true })), h("ir-validator", { key: '024f593241fd832a6dce254fa54f967e0ee6d731', value: this.bookedByData.lastName, schema: BookingGuestSchema.shape.last_name }, h("ir-input", { key: '5f41c7d7c7a3e4c2da3a3c5d1d2347dd38715d29', "onText-change": event => {
                this.updateGuest({ last_name: event.detail });
                this.handleDataChange('lastName', { target: { value: event.detail.trim() } });
            }, defaultValue: this.bookedByData.lastName, value: this.bookedByData.lastName, label: locales.entries.Lcz_LastName, placeholder: locales.entries.Lcz_LastName, required: true })), h("ir-country-picker", { key: '186a70d780b95eb0adecc9bd07f8cea1f8546195', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) }), h("ir-mobile-input", { key: '46c43cd51934f74f2fa33a2ed723797e02211a2d', size: "small", "onMobile-input-change": e => {
                this.handleDataChange('contactNumber', { target: { value: e.detail.formattedValue } });
            }, "onMobile-input-country-change": e => this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } }), value: this.bookedByData.contactNumber,
            // required
            countryCode: this.countries.find(c => c.phone_prefix === this.bookedByData.isdCode)?.code, countries: this.countries }), h("wa-select", { key: 'c81cac34bd1f210acd4f26af4cb1495b57a5593f', size: "small", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", "aria-disabled": String(Boolean(this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '')), id: v4(), defaultValue: this.arrivalTimeList[0].CODE_NAME, value: this.bookedByData.selectedArrivalTime.code, onchange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("wa-option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))), h("div", { key: 'ef882e1486c9cd50c7aa939f2ab49013eb8e0007', class: "p-0 flex-fill  ml-md-3 d-flex flex-column", style: { gap: '0.5rem' } }, h("wa-textarea", { key: 'e2d40768fdf428a712848c884e515adb9fd08587', onchange: event => this.handleDataChange('message', event), size: "small", value: this.bookedByData.message, defaultValue: this.bookedByData.message, label: locales.entries.Lcz_AnyMessageForUs, rows: 4 }), this.paymentMethods.length > 1 && (h("wa-select", { key: '2360755b2f4282861246b753f3103d8855398c0c', label: 'Payment Method', size: "small", value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '9dd3e22e937c34cacfaa47027f81e8b0d51ebacd' }, h("ir-input", { key: '744e2aa71dff639ce3127909ac6ea656c767e61f', value: this.bookedByData.cardNumber, defaultValue: this.bookedByData.cardNumber, "onText-change": e => this.handleCreditCardDataChange('cardNumber', e.detail.trim()), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: '6e316f89cd1be55487d7c6f9db2c8b4bcbbabe7b', value: this.bookedByData.cardHolderName, defaultValue: this.bookedByData.cardHolderName, "onText-change": e => this.handleCreditCardDataChange('cardHolderName', e.detail.trim()), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: 'f1c1470ce73f56b02db4c2c53d151c310939d2ca', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                this.handleCreditCardDataChange('expiryYear', month ?? '');
                this.handleCreditCardDataChange('expiryMonth', year ?? '');
            }, value: this.expiryDate, mask: {
                mask: 'MM/YY',
                placeholderChar: '_',
                blocks: {
                    MM: {
                        mask: IMask.MaskedRange,
                        from: 1,
                        to: 12,
                        maxLength: 2,
                    },
                    YY: {
                        mask: IMask.MaskedRange,
                        from: new Date().getFullYear() % 100,
                        to: (new Date().getFullYear() % 100) + 20,
                        maxLength: 2,
                    },
                },
            }, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h("div", { key: '65cce1f98e2605b2b09398d13d8014ff705fe4be', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '3fc2ea0bb5bebf80d6077128b479f2f600a8349f', class: "p-0 m-0 margin3" }), h("div", { key: '787d758bdccc6cff6e3514ca484b67265bd0c1f0', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: '0272e012b736d78775f450570478b8e1898708bb', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), h("wa-checkbox", { key: 'fdda30833a9180d46c34538980b3bf8b68d6a05e', checked: this.bookedByData.emailGuest, onchange: event => this.handleDataChange('emailGuest', event) }, locales.entries.Lcz_EmailTheGuest))))));
    }
    static get style() { return IglPropertyBookedByStyle0; }
}, [2, "igl-property-booked-by", {
        "language": [1],
        "showPaymentDetails": [4, "show-payment-details"],
        "defaultData": [16],
        "countries": [16],
        "propertyId": [2, "property-id"],
        "isButtonPressed": [32],
        "bookedByData": [32],
        "guests": [32],
        "typedEmail": [32]
    }, [[16, "buttonClicked", "handleButtonClicked"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-property-booked-by", "ir-country-picker", "ir-input", "ir-input-text", "ir-mobile-input", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglPropertyBookedBy);
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglPropertyBookedBy as I, defineCustomElement as d };

//# sourceMappingURL=igl-property-booked-by2.js.map