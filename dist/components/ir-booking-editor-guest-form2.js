import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { m as modifyBookingStore, a as updateBookedByGuest, b as booking_store } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { I as IMask } from './index4.js';
import { B as BookedByGuestSchema } from './types4.js';
import { d as defineCustomElement$7 } from './ir-country-picker2.js';
import { d as defineCustomElement$6 } from './ir-input2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-mobile-input2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';
import { v as v4 } from './v4.js';

const irBookingEditorGuestFormCss = ".sc-ir-booking-editor-guest-form-h{padding-bottom:3rem}.sc-ir-booking-editor-guest-form-h{display:flex;flex-direction:column;gap:1rem}.booking-editor__guest-name-group.sc-ir-booking-editor-guest-form,.booking-editor__form-control.sc-ir-booking-editor-guest-form{display:flex;flex-direction:column;gap:1rem}.booking-editor__guest-input.sc-ir-booking-editor-guest-form,.booking-editor__guest-input-validator.sc-ir-booking-editor-guest-form{width:100%}.booking-editor__form-control.sc-ir-booking-editor-guest-form{width:100%;flex-grow:0;height:fit-content}.booking-editor__payment-info-description.sc-ir-booking-editor-guest-form{display:flex;height:fit-content;flex-direction:column}.booking-editor__guest-input-label.--first-name-pc-label.sc-ir-booking-editor-guest-form{display:none}@media (min-width: 768px){.booking-editor__guest-input-label.--first-name-pc-label.sc-ir-booking-editor-guest-form{display:block}.booking-editor__guest-name-group.sc-ir-booking-editor-guest-form{display:flex;flex-direction:row;align-items:flex-end}.booking-editor__guest-input-label.--first-name-mobile-label.sc-ir-booking-editor-guest-form,.booking-editor__guest-input.--last-name.sc-ir-booking-editor-guest-form::part(label){display:none}.sc-ir-booking-editor-guest-form-h{flex-direction:row;gap:4rem}}";
const IrBookingEditorGuestFormStyle0 = irBookingEditorGuestFormCss;

const IrBookingEditorGuestForm = /*@__PURE__*/ proxyCustomElement(class IrBookingEditorGuestForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
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
        return (h(Host, { key: 'bb3703d8526ed8d04e8d302c31707b5591e786fe' }, h("section", { key: '3f97b3bdff070b9429762d6d2b0ceaa2f6610938', class: "booking-editor__form-control" }, h("ir-input", { key: '87899c0abc9120639640d4c15972f0568b8b8b1a', label: "Email address", "onText-change": e => updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: "Email (leave empty if not available)" }), h("div", { key: '9407382e789f980d9fde14896c192979d4f5c62a', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: '2bd4f7d883cb613b06f4e1c0646b8bcb380ad31a', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: '9d35aeeb4f3a09cd0fbb1995ebc374520b3454f1', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label="Name"
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: "First name", autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }) }, h("p", { key: 'cc0090a0feae228807adc77bbed75b5f0ed6ff97', style: { margin: '0', marginBottom: '0.5rem' }, slot: "label" }, h("span", { key: 'f22f28773b584403a8d0f9729d0e4c7db38f1418', class: "booking-editor__guest-input-label --first-name-pc-label" }, "Name"), h("span", { key: '765488de4c78f7a1de367dff655f35af385ae909', class: "booking-editor__guest-input-label --first-name-mobile-label" }, "First name")))), h("ir-validator", { key: 'bf5f4be3a0dd84fe40b130fe60fd5524541a0a16', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: '393d4fc03a7068cba4c896e380662292bba8e91b', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: "Last name", "onText-change": e => updateBookedByGuest({ lastName: e.detail }), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: "Last name", autocomplete: "off" }))), booking_store.bookingDraft.agent ? (h("ir-input", { label: "Booking code", placeholder: "", value: bookedByGuest.agent_booking_nbr, defaultValue: bookedByGuest.agent_booking_nbr, "onText-change": e => updateBookedByGuest({ agent_booking_nbr: e.detail }) })) : (h("ir-input", { label: "Company name", placeholder: "Company name", value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) })), h("ir-country-picker", { key: '7f16f0ffe3364ec8d3ef59fa39c0ad17a4325f88', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: 'eaef26f9e504f7d0ffdd69c2aaabe519f3ad6482', size: "small", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries })), h("section", { key: 'e31f72aa2ec5290b708b5fc545b30ab5450be911', class: 'booking-editor__form-control' }, h("wa-select", { key: '7d017039ca9a4d11be3439e56bcc0e46ed9a91d5', size: "small", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN)))), h("wa-textarea", { key: '1162df782d5740fc6df8b7e831c39d9628310be7', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "small", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: locales.entries.Lcz_AnyMessageForUs, rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (h(Fragment, { key: '6386bc9453e6fedb79acd220dc1584eb8bbbd7dc' }, this.paymentMethods.length > 1 && (h("wa-select", { key: '0c0ab3c4ba1f831ed381c88fe7713ce6c51e9e4e', label: 'Payment Method', size: "small", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: 'f6aed7cd1c51e03ba3f96c981e789c91c74b2d08' }, h("ir-input", { key: 'de81c9a33813a7717df29a2c93537948badbbcd9', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: '1369b803bbbc972602abb133971d2e2ab0035992', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: 'd20dacf70f241d30cd9e2009d168a439f4713867', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: '321d60170d48b0e26e8220a7e1bbb756057c57fb' }, h("style", { key: 'e25b8e1420605fce06ac0001a9271ec5c7e374be' }, `p{
              margin:0;
              padding:0}`), h("div", { key: 'ee3c7b2c66d440afcf61802d016b4c1348ef97d4', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: 'beb046352002e0a235bfe713799aee746c2f4125', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, locales.entries.Lcz_EmailTheGuest))))));
    }
    static get style() { return IrBookingEditorGuestFormStyle0; }
}, [2, "ir-booking-editor-guest-form"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-editor-guest-form", "ir-country-picker", "ir-input", "ir-input-text", "ir-mobile-input", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingEditorGuestForm);
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

export { IrBookingEditorGuestForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-editor-guest-form2.js.map