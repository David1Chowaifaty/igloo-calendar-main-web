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
        return (h(Host, { key: 'a1fa158bc1aeee3103666179203b4af695fcc045' }, h("section", { key: '47a06ae5f0c6131d95339c182675e8fa3e7a8f9b', class: "booking-editor__form-control" }, h("ir-input", { key: '5807e6d66946328dfc89c10b484d4587cb7b603d', label: "Email address", "onText-change": e => updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: "Email (leave empty if not available)" }), h("div", { key: 'cf4b942af5adc81e8b70fafd94aeeca4ce1839ae', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: 'eb640a3c4f99f991b7a44e388e51a106a30d8f76', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: '785c6b33e1b2992f05b420319390d7bc6cd45441', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label="Name"
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: "First name", autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }) }, h("p", { key: 'b7655f1310f7f0587c87bed1fe2e39b517c74e61', style: { margin: '0', marginBottom: '0.5rem' }, slot: "label" }, h("span", { key: 'a9004c7ef4a06492528ef047283bce62e854be27', class: "booking-editor__guest-input-label --first-name-pc-label" }, "Name"), h("span", { key: '00444e433ee731372c15eaa21905c9078283d1fe', class: "booking-editor__guest-input-label --first-name-mobile-label" }, "First name")))), h("ir-validator", { key: '9655b9eb897ecdd0e8bcff27bd933d080fbc2e26', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: 'c630b586118a5fb5dc10eaff5f9dac9e286ca8c1', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: "Last name", "onText-change": e => updateBookedByGuest({ lastName: e.detail }), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: "Last name", autocomplete: "off" }))), booking_store.bookingDraft.agent ? (h("ir-input", { label: "Booking code", placeholder: "", value: bookedByGuest.agent_booking_nbr, defaultValue: bookedByGuest.agent_booking_nbr, "onText-change": e => updateBookedByGuest({ agent_booking_nbr: e.detail }) })) : (h("ir-input", { label: "Company name", placeholder: "Company name", value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) })), h("ir-country-picker", { key: '67ed62f7a5824230f1f3f1f53f5cf4be5d4a7ed4', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: 'f0e6f12a2d3f226140193e7052c383b106694509', size: "s", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries })), h("section", { key: '47cb63ebf0bd357a7d4fa0976dc409c24dc28f98', class: 'booking-editor__form-control' }, h("wa-select", { key: 'dff27253aa4ee2eb02aa55d66c6197a3b694518a', size: "s", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN)))), h("wa-textarea", { key: 'bcb82bfcf41fd0208565a725bcb80eb4fc771b13', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "s", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: locales.entries.Lcz_AnyMessageForUs, rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (h(Fragment, { key: '47aeb4caf116b0827ac12adae4fe2b9375a1e8ec' }, this.paymentMethods.length > 1 && (h("wa-select", { key: 'f9769033bc5664c91369dd040b6150db0c83adaa', label: 'Payment Method', size: "s", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '331dfe295328d7b04ec9a18b1a439f73054d5c98' }, h("ir-input", { key: '998c98a79a0390838ada6bf3a606d51c06a9fb8a', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: '606ae077c4194a3db4a1d882aa641c63f8a34b74', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: '685708837da25e0c0f78d09615629b1813f3ae38', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: '32a361fb96e10ddeca97d356e8a12bdf227ac641' }, h("style", { key: '2ff27fec861899063642eb1ff884083ee2a19104' }, `p{
              margin:0;
              padding:0}`), h("div", { key: 'e064bd1ea6b886f8af6dce61f77100f5f1f9d733', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: 'c30994eef901d49bef63ceebddb4b2428a8357f8', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, locales.entries.Lcz_EmailTheGuest))))));
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
