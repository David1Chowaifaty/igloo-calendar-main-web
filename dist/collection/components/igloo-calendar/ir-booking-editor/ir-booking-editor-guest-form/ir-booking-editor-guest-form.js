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
        return (h(Host, { key: '168f6106863575417e86449d5638059a4dee81b2' }, h("section", { key: '15d3d0b1a57fbe2ad04a03ca64b6e673ef07ed80', class: "booking-editor__form-control" }, h("ir-input", { key: '9095a84a6430a626639925a93cc8ca89d9b04bc3', label: "Email address", "onText-change": e => updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: "Email (leave empty if not available)" }), h("div", { key: '4c584d75aa207f09ed79e826a69ea7669741a073', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: '9cf5a3fd7b323a7d97e09b44b13365bd2e81e5f9', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: 'a303cff23f4523b4f1446e2881eaa7907467695d', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label="Name"
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: "First name", autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }) }, h("p", { key: '2d79aa960e3ecee895b6d55b4d34f2464cb2d78a', style: { margin: '0', marginBottom: '0.5rem' }, slot: "label" }, h("span", { key: 'f252fdbf8db6b86fb27fecde064981fae1e1f3b6', class: "booking-editor__guest-input-label --first-name-pc-label" }, "Name"), h("span", { key: 'b3b8ba775b89cdce98ca14928e05724a6294f595', class: "booking-editor__guest-input-label --first-name-mobile-label" }, "First name")))), h("ir-validator", { key: '4c642d9eeec1074d6e06dcb001a4117cee5ea0bb', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: '807d99728e97dac6259ff3fb1b9e295d3fd3f669', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: "Last name", "onText-change": e => updateBookedByGuest({ lastName: e.detail }), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: "Last name", autocomplete: "off" }))), booking_store.bookingDraft.agent ? (h("ir-input", { label: "Booking code", placeholder: "", value: bookedByGuest.bookingCode, defaultValue: bookedByGuest.bookingCode, "onText-change": e => updateBookedByGuest({ bookingCode: e.detail }) })) : (h("ir-input", { label: "Company name", placeholder: "Company name", value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) })), h("ir-country-picker", { key: 'e15719a2d1df48b6469ae033392af57ec6aee0f6', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: 'ecb947651783ccaea82837591eb4361c1e74b985', size: "small", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries }), h("wa-select", { key: 'a8cb49be106a3d3ebf031e6820d8ee69ed3ce32d', size: "small", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN))))), h("section", { key: '1643c6205cde4a5bef66b86d4dde2f87ed2976ea', class: 'booking-editor__form-control' }, h("wa-textarea", { key: '66fb421e04781119c239747fa86fb8e94f9fdcc3', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "small", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: locales.entries.Lcz_AnyMessageForUs, rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (h(Fragment, { key: '3eb0ca9ced57214b670fd4f0c62c217bf914b82d' }, this.paymentMethods.length > 1 && (h("wa-select", { key: 'f850422f3953f2711cd714034733d5b65720733d', label: 'Payment Method', size: "small", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: 'f097d4e8d2f039057c6971daa39f24f71e8dfaa4' }, h("ir-input", { key: '5e9acd2100f2fb837924c6befdbe446487b11b9e', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: 'd41e834c7d3934d4c6a83b93353acf36550522d9', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: 'd73c77c7d556891e290f95b4b5293330307d01f6', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: 'c4d77dee0983fac3dd6e066dd8cb51230761811c' }, h("style", { key: 'a4f1fe8fb3798aa5e678218201e6ce8420a5aed6' }, `p{
              margin:0;
              padding:0}`), h("div", { key: 'f7a8b25a94fc2b0ef8042261f4f0deaa3ca2d261', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: '9bc1a45b95aa792060ccba903edabdf2246743c2', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, locales.entries.Lcz_EmailTheGuest))))));
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
//# sourceMappingURL=ir-booking-editor-guest-form.js.map
