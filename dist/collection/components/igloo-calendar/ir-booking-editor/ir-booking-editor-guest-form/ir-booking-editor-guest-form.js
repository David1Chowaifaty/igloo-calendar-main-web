import booking_store, { modifyBookingStore, updateBookedByGuest } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
import { Fragment, Host, h } from "@stencil/core";
import { v4 } from "uuid";
import IMask from "imask";
import { BookedByGuestSchema } from "../types";
export class IrBookingEditorGuestForm {
    paymentMethods = [];
    expiryDateMask = {
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
    };
    componentWillLoad() {
        this.paymentMethods = calendar_data.property.allowed_payment_methods.filter(p => p.is_active && !p.is_payment_gateway);
        if (this.paymentMethods.length > 0) {
            modifyBookingStore('selectedPaymentMethod', { code: this.paymentMethods[0].code });
        }
    }
    updateCountry(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const country = event.detail;
        let payload = { countryId: country.id.toString() };
        if (!booking_store.bookedByGuest.mobile) {
            payload = { ...payload, phone_prefix: country.phone_prefix };
        }
        updateBookedByGuest(payload);
    }
    get expiryDate() {
        const { expiryMonth, expiryYear } = booking_store.bookedByGuest;
        if (!expiryMonth || !expiryYear) {
            return '';
        }
        // Normalize year to YY
        const year = expiryYear.toString().length === 4 ? expiryYear.toString().slice(-2) : expiryYear.toString();
        return `${expiryMonth}/${year}`;
    }
    render() {
        const { bookedByGuest, selects, bookingDraft } = booking_store;
        const { agent } = bookingDraft;
        return (h(Host, { key: '70b90daaa96f5d86ddaab62a2dcaa1c42bba24d9' }, h("section", { key: '83e19cf8a04faeba227ad30b81cef4fe050e498c', class: "booking-editor__form-control" }, h("ir-input", { key: 'f8d62bfadf3235b11113ce6ae789ab1899467f40', label: "Email address", "onText-change": e => updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: "Email (leave empty if not available)" }), h("div", { key: 'd9431a2022175453d0bec9f9198ff01ffddaa6f5', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: '31722741afea8abe86d53ca21de40c0ad7ccea63', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: '63c863bada4eb3bfd769bbed8966ac3cf598681a', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label="Name"
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: "First name", autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }) }, h("p", { key: '393c638d7f07b1f102ea0f4cfe7f57f1ef7652d0', style: { margin: '0', marginBottom: '0.5rem' }, slot: "label" }, h("span", { key: 'e8e3fa6309f553d07229a0be8634bfd2ba6baec2', class: "booking-editor__guest-input-label --first-name-pc-label" }, "Name"), h("span", { key: '79923c0c320e3119ae140e489f8b9f73d4f667b7', class: "booking-editor__guest-input-label --first-name-mobile-label" }, "First name")))), h("ir-validator", { key: 'dc2ada7d83e7d4f8bb44ad337214752f6d6aa5ed', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: 'b6243f2b76448afb3247c1c1deacdcc54abec11d', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: "Last name", "onText-change": e => updateBookedByGuest({ lastName: e.detail }), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: "Last name", autocomplete: "off" }))), booking_store.bookingDraft.agent ? (h("ir-input", { label: "Booking code", placeholder: "", value: bookedByGuest.agent_booking_nbr, defaultValue: bookedByGuest.agent_booking_nbr, "onText-change": e => updateBookedByGuest({ agent_booking_nbr: e.detail }) })) : (h("ir-input", { label: "Company name", placeholder: "Company name", value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) })), h("ir-country-picker", { key: '9eb8d542946cbf73328839adb67487b68f4227ec', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: '241ef49103f0a6e7787621ce059b7129cbf182c8', size: "s", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries })), h("section", { key: 'd4052235119f5b31651606de63c848af377cd786', class: 'booking-editor__form-control' }, h("wa-select", { key: '888c8d85a0320c0fedc59e8b8f0fa8c67e122644', size: "s", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN)))), h("wa-textarea", { key: 'e79bf3e5ae917b2c0f9bc152b90716ea7475ac6a', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "s", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: locales.entries.Lcz_AnyMessageForUs, rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (h(Fragment, { key: '3e162b2ef3465b0b634e8393c75f17cb12bce95b' }, this.paymentMethods.length > 1 && (h("wa-select", { key: '3796c4b9d4255e5cb999a0eae51d4eac23b0d35f', label: 'Payment Method', size: "s", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '8e07c22727bc6a9bb7add98939160f58e3953319' }, h("ir-input", { key: '1cfcdd27ec950abe22cd2666b2fb271d8d7c75d4', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: 'e10a7e4d3f7ca254e167a294830ec2334dfcb575', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: '80d2b0d43dd75b85092e25f8a4ca001c535e6a3f', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: '0b5e13d6d30b7977865484b4427a554f1f7b8839' }, h("style", { key: '0af39db5097f710feebd4a63031f95b425a568cd' }, `p{
              margin:0;
              padding:0}`), h("div", { key: '5efff1dad8dc55ac681e2cca07daf7e1051f1724', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: '7d326509dc7db4159ac56d60ee1de2bdd64004d2', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, locales.entries.Lcz_EmailTheGuest))))));
    }
    static get is() { return "ir-booking-editor-guest-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-editor-guest-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-editor-guest-form.css"]
        };
    }
}
