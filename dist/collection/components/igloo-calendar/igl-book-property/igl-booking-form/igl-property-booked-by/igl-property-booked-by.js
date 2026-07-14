import { Host, h, Fragment } from "@stencil/core";
import { BookingService } from "../../../../../services/booking-service/booking.service";
import { v4 } from "uuid";
import locales from "../../../../../stores/locales.store";
import { z } from "zod";
import { validateEmail } from "../../../../../utils/utils";
import booking_store, { modifyBookingStore, setBookedByGuestManualEditState } from "../../../../../stores/booking.store";
import calendar_data from "../../../../../stores/calendar-data";
import { isRequestPending } from "../../../../../stores/ir-interceptor.store";
import IMask from "imask";
import { BookingGuestSchema } from "../../types";
export class IglPropertyBookedBy {
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
        if (key === 'firstName' || key === 'lastName') {
            setBookedByGuestManualEditState(true);
        }
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
        const country = this.countries?.find(country => country.id === value);
        this.bookedByData = {
            ...this.bookedByData,
            isdCode: this.bookedByData?.contactNumber ? this.bookedByData?.isdCode : country?.phone_prefix,
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
        setBookedByGuestManualEditState(false);
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
        return (h(Host, { key: 'b88a4a9100aba9c7e57d71c57f97dd709e63487d' }, h("div", { key: '098a208eaab3ae943101710a14a779f80e549df9', class: "text-left mt-3" }, h("div", { key: 'fb53d4cdd67dbfeafe418475cc1ea36fe514695f', class: "d-flex", style: { alignItems: 'flex-end', gap: '0.5rem' } }, h("ir-picker", { key: 'e5fab882ebdad3d4127b2fda0323e20d56750265', class: "bookedByEmailContainer m-0 p-0", label: locales.entries.Lcz_BookedBy, value: this.bookedByData.email, ref: el => (this.pickerRef = el), "aria-invalid": String(Boolean(this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email))), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 300, "onInput-picker-blurred": e => {
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
        })), h("div", { key: 'ec37a448219703e5af00a50722c6e9b2fb62f609', style: { paddingBottom: '0.5rem' } }, h("wa-tooltip", { key: '05c50165d0c74b516e9833ee006665b9f3a3e82f', for: `main_guest-search-tooltip` }, "Leave empty if email is unavailable"), h("wa-icon", { key: '686589f71fa56f1b0159fa750e681359277e97d2', name: "circle-info", id: `main_guest-search-tooltip` })))), h("div", { key: 'c3f1e7ca87a09ee450a937061207c6ce6afac1b4', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: '5de32472225889f71d7553584fe25a134de9f55f', class: "d-flex flex-column flex-md-row  justify-content-md-between ", style: { gap: '1rem' } }, h("div", { key: 'd32f9c86398cf63a95ff87b0ba3709cf3ff8f938', class: "fd-property-booked-by__guest-form " }, h("ir-validator", { key: 'bffb6badd8ab43da05a9b6ec79fe341f40497598', value: this.bookedByData.firstName, schema: BookingGuestSchema.shape.first_name }, h("ir-input", { key: '6fc73c02706b9a456326724fda408f458da06194', "onText-change": event => {
                this.updateGuest({ first_name: event.detail });
                this.handleDataChange('firstName', { target: { value: event.detail.trim() } });
            }, defaultValue: this.bookedByData.firstName, value: this.bookedByData.firstName, label: locales.entries.Lcz_FirstName, placeholder: locales.entries.Lcz_FirstName, required: true, name: "last_name_custom", autocomplete: "family-name" })), h("ir-validator", { key: '3bd293bba9b89941c8cf7cfa8e7e0649c4436df2', value: this.bookedByData.lastName, schema: BookingGuestSchema.shape.last_name }, h("ir-input", { key: 'c1804a6a84601a3fe057a67feed801347cea0212', "onText-change": event => {
                this.updateGuest({ last_name: event.detail });
                this.handleDataChange('lastName', { target: { value: event.detail.trim() } });
            }, name: "first_name_custom", autocomplete: "given-name", defaultValue: this.bookedByData.lastName, value: this.bookedByData.lastName, label: locales.entries.Lcz_LastName, placeholder: locales.entries.Lcz_LastName, required: true })), h("ir-country-picker", { key: '48d5471778acfa588e5a8a18d22551a362933ad3', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) }), h("ir-mobile-input", { key: 'bf14a01276b32c1b6208c65dd785a11735998f57', size: "s", "onMobile-input-change": e => {
                this.handleDataChange('contactNumber', { target: { value: e.detail.formattedValue } });
            }, "onMobile-input-country-change": e => this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } }), value: this.bookedByData.contactNumber,
            // required
            countryCode: this.countries.find(c => c.phone_prefix === this.bookedByData.isdCode)?.code, countries: this.countries }), h("wa-select", { key: 'a453d6a84fce2ce84ae74480039c2ae47d963e5c', size: "s", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", "aria-disabled": String(Boolean(this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '')), id: v4(), defaultValue: this.arrivalTimeList[0].CODE_NAME, value: this.bookedByData.selectedArrivalTime.code, onchange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("wa-option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))), h("div", { key: '42c1ea86fa67fc2abee5fd428284e4677a78d657', class: "p-0 flex-fill  ml-md-3 d-flex flex-column", style: { gap: '0.5rem' } }, h("wa-textarea", { key: '23c940359033be8d83cfcd58aa0314474556ec26', onchange: event => this.handleDataChange('message', event), size: "s", value: this.bookedByData.message, defaultValue: this.bookedByData.message, label: locales.entries.Lcz_AnyMessageForUs, rows: 4 }), this.paymentMethods.length > 1 && (h("wa-select", { key: 'b9b65d94954913709053da814f114d25dad2d68b', label: 'Payment Method', size: "s", value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '66cbe222bac99b5fea77d71dade95cec34db2277' }, h("ir-input", { key: 'a389269d830d902dde904ec57379ee9dc6513410', value: this.bookedByData.cardNumber, defaultValue: this.bookedByData.cardNumber, "onText-change": e => this.handleCreditCardDataChange('cardNumber', e.detail.trim()), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: 'c2189533204e432f40f962729adf9caa81215c2c', value: this.bookedByData.cardHolderName, defaultValue: this.bookedByData.cardHolderName, "onText-change": e => this.handleCreditCardDataChange('cardHolderName', e.detail.trim()), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: '26edb6f2b804b09283cf4e97d476d4003febff51', "onText-change": e => {
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
            }, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h("div", { key: '6c8600008286cc023f4215f988d1e2cba631febf', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '683d072cf813e50f25985d7362202b22f1baa863', class: "p-0 m-0 margin3" }), h("div", { key: 'f3cc4b733bfc360798d8a47715ef0b73ab8496ec', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: 'edb2d16d2fa3de4784ec68076062c944e3004218', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), h("wa-checkbox", { key: '0233b3e30c1771ff4c4d7baf3b739366f9947a9a', checked: this.bookedByData.emailGuest, onchange: event => this.handleDataChange('emailGuest', event) }, locales.entries.Lcz_EmailTheGuest))))));
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
                "reflect": false,
                "attribute": "language"
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
                "reflect": false,
                "attribute": "show-payment-details",
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
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
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
                "reflect": false,
                "attribute": "property-id"
            }
        };
    }
    static get states() {
        return {
            "isButtonPressed": {},
            "bookedByData": {},
            "guests": {},
            "typedEmail": {}
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
