import { Host, h, Fragment } from "@stencil/core";
import { BookingService } from "../../../../../services/booking-service/booking.service";
import { v4 } from "uuid";
import { z } from "zod";
import { validateEmail } from "../../../../../utils/utils";
import booking_store, { modifyBookingStore, setBookedByGuestManualEditState } from "../../../../../stores/booking.store";
import calendar_data from "../../../../../stores/calendar-data";
import { isRequestPending } from "../../../../../stores/ir-interceptor.store";
import IMask from "imask";
import { BookingGuestSchema } from "../../types";
import { t } from "../../../../../services/locale/t";
import { getSetupEntryLabel } from "../../../../../services/setup/index";
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
        return (h(Host, { key: 'da691ed0c1673af010098d50045c4517812ffaa3' }, h("div", { key: '54f0e52e09556b8fcff5dd82c1bb40c4bb46a501', class: "ir-text-start mt-3" }, h("div", { key: '41004fbb6116684494e84f40722b05b9720148b6', class: "d-flex", style: { alignItems: 'flex-end', gap: '0.5rem' } }, h("ir-picker", { key: '4b3e45d2204f852213daab779f63e3dc3a3dde41', class: "bookedByEmailContainer m-0 p-0", label: t('Lcz_BookedBy', { fallback: 'Booked by' }), value: this.bookedByData.email, ref: el => (this.pickerRef = el), "aria-invalid": String(Boolean(this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email))), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 300, "onInput-picker-blurred": e => {
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
            }, loading: isRequestPending('/Fetch_Exposed_Guests'), placeholder: t('Lcz_FindEmailAddress', { fallback: 'Find email address or add new' }), mode: "select-async", "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), h("div", { key: '0b350fcd804a748f1f86199ae2561b86a22f4965', style: { paddingBottom: '0.5rem' } }, h("wa-tooltip", { key: '203a61a44d061dfcbfef2daabb4feeb700ec0bac', for: `main_guest-search-tooltip` }, t('Lcz_LeaveEmptyIfEmailUnavailable', { fallback: 'Leave empty if email is unavailable' })), h("wa-icon", { key: '15930aa87b6cedf74f1eb2eb185881bc6fd125ca', name: "circle-info", id: `main_guest-search-tooltip` })))), h("div", { key: '04433d19818da7c32f46ff83eae3897c85cde883', class: "bookedDetailsForm ir-text-start mt-2 font-small-3 " }, h("div", { key: 'c5ede26f42efb0475fcb20285380c0a7024afa23', class: "d-flex flex-column flex-md-row  justify-content-md-between ", style: { gap: '1rem' } }, h("div", { key: '2fbb03c244b25a78fe97fdf1e9a1340eb02412c2', class: "fd-property-booked-by__guest-form " }, h("ir-validator", { key: 'c9ab514e7304072edc46d7058fe248e435d60d69', value: this.bookedByData.firstName, schema: BookingGuestSchema.shape.first_name }, h("ir-input", { key: '720e60726df918410343133a4f7c60dab5f361df', "onText-change": event => {
                this.updateGuest({ first_name: event.detail });
                this.handleDataChange('firstName', { target: { value: event.detail.trim() } });
            }, defaultValue: this.bookedByData.firstName, value: this.bookedByData.firstName, label: t('Lcz_FirstName', { fallback: 'First name' }), placeholder: t('Lcz_FirstName', { fallback: 'First name' }), required: true, name: "last_name_custom", autocomplete: "family-name" })), h("ir-validator", { key: '409034b0b5b673f3824a33189fa257cd01a28a56', value: this.bookedByData.lastName, schema: BookingGuestSchema.shape.last_name }, h("ir-input", { key: 'd5ba3c450f2bf7d02d9ee8d9ea6a6e111ef0697c', "onText-change": event => {
                this.updateGuest({ last_name: event.detail });
                this.handleDataChange('lastName', { target: { value: event.detail.trim() } });
            }, name: "first_name_custom", autocomplete: "given-name", defaultValue: this.bookedByData.lastName, value: this.bookedByData.lastName, label: t('Lcz_LastName', { fallback: 'Last name' }), placeholder: t('Lcz_LastName', { fallback: 'Last name' }), required: true })), h("ir-country-picker", { key: '6ebbcd49bd87326e9e355e7438fcb335bc9d1e77', label: t('Lcz_Country', { fallback: 'Country' }), variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) }), h("ir-mobile-input", { key: '64b7edc7bb6c42ba99a03692368f62d7fbbbe22c', size: "s", "onMobile-input-change": e => {
                this.handleDataChange('contactNumber', { target: { value: e.detail.formattedValue } });
            }, "onMobile-input-country-change": e => this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } }), value: this.bookedByData.contactNumber,
            // required
            countryCode: this.countries.find(c => c.phone_prefix === this.bookedByData.isdCode)?.code, countries: this.countries }), h("wa-select", { key: '4f15e2fbe184c54d9f622d53caf24e9ffa610358', size: "s", label: t('Lcz_YourArrivalTime', { fallback: 'Your arrival time' }), "data-testid": "arrival_time", "aria-disabled": String(Boolean(this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '')), id: v4(), defaultValue: this.arrivalTimeList[0].CODE_NAME, value: this.bookedByData.selectedArrivalTime.code, onchange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("wa-option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, getSetupEntryLabel(time)))))), h("div", { key: 'b51fd4aaa6e905befdcb0759a46ba03cfc4c7cb8', class: "p-0 flex-fill  ml-md-3 d-flex flex-column", style: { gap: '0.5rem' } }, h("wa-textarea", { key: '3622be038f73fc5e35da97815338f5bdbd34057e', onchange: event => this.handleDataChange('message', event), size: "s", value: this.bookedByData.message, defaultValue: this.bookedByData.message, label: t('Lcz_AnyMessageForUs', { fallback: 'Any message for us' }), rows: 4 }), this.paymentMethods.length > 1 && (h("wa-select", { key: '7ea45ac15c6e493edfa94210129c6b6369d350d3', label: t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), size: "s", value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '6d60f2fc5cff1ff7f7c65a5e06d3263bbaf96c70' }, h("ir-input", { key: '12ea65727d281d54953c88cc541d3c847d7cf5a7', value: this.bookedByData.cardNumber, defaultValue: this.bookedByData.cardNumber, "onText-change": e => this.handleCreditCardDataChange('cardNumber', e.detail.trim()), label: t('Lcz_CardNumber', { fallback: 'Card number' }) }), h("ir-input", { key: '9872ba6b669da356f6cf875ca2f1062e2995d3e8', value: this.bookedByData.cardHolderName, defaultValue: this.bookedByData.cardHolderName, "onText-change": e => this.handleCreditCardDataChange('cardHolderName', e.detail.trim()), label: t('Lcz_CardHolderName', { fallback: 'Card holder name' }) }), h("ir-input", { key: 'd95a76474f52ca69b1bc86d4bb55e6870f1515d7', "onText-change": e => {
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
            }, label: t('Lcz_ExpiryDate', { fallback: 'Expiry date' }) }))), booking_store.selectedPaymentMethod?.code === '005' && (h("div", { key: 'b8c3f9b546cbff3b53c49a7777f33d878940462b', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'f4fa9091c6256f0158be078366754d66700fa6c7', class: "p-0 m-0 margin3" }), h("div", { key: 'e7c6d8b440dc2ac53119d49c56bea996e7dc0ff6', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: '30c1fde2c234562cadf9fea268ce3c9537db0089', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), h("wa-checkbox", { key: 'afd91952e22eb5de4c8ad19b195ded88d00e6504', checked: this.bookedByData.emailGuest, onchange: event => this.handleDataChange('emailGuest', event) }, t('Lcz_EmailTheGuest', { fallback: 'Email the guest' })))))));
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
