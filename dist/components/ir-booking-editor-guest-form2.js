import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { m as modifyBookingStore, a as updateBookedByGuest, b as booking_store } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { I as IMask } from './index4.js';
import { B as BookedByGuestSchema } from './types3.js';
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
        const { bookedByGuest, selects } = booking_store;
        return (h(Host, { key: '85bc00f2f9c3708317b4ca2d9d2e2a0691bf820d' }, h("section", { key: '6c7732c9ee15b76babad7c17e773fb7bc8ba6c59', class: "booking-editor__form-control" }, h("ir-input", { key: '74eb8b02c2aec6b2841118fb76dc7eb2f7272e50', label: "Email address", "onText-change": e => updateBookedByGuest({ email: e.detail }), type: "email", value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: "Email (leave empty if not available)" }), h("div", { key: '40dfdf9b0d1f55e7cb014d2c647830867b3123e4', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: '866794b543cfdfe5ff85ff3c28c3ff5e990d97f6', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: '00728a289bfaea558de36a7fe8a4c64ce25a3f95', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label="Name"
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: "First name", autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }) }, h("p", { key: '7a8d012df824e800ac1cf220ace0898173bdbd53', style: { margin: '0', marginBottom: '0.5rem' }, slot: "label" }, h("span", { key: '1d53dc5dbd2d24c5da963bf4c677a24d6b5fd0bf', class: "booking-editor__guest-input-label --first-name-pc-label" }, "Name"), h("span", { key: '651779135825f040e9180193c5a69d9e671b6bd3', class: "booking-editor__guest-input-label --first-name-mobile-label" }, "First name")))), h("ir-validator", { key: 'c8b839084f6903b157550225ca8f4ddc383cdf8c', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: 'df4dac8d02639d049e30ea5fbdcc72f503e282b6', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: "Last name", "onText-change": e => updateBookedByGuest({ lastName: e.detail }), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: "Last name", autocomplete: "off" }))), h("ir-input", { key: '893b9b94cffc36169180931304a0cafbca6d386e', label: "Company name", placeholder: "Company name", value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) }), h("ir-country-picker", { key: 'cd42aa9d53fbef8c5d9a7dd63d5dded9b3498b62', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: 'd0fe92c41c98d632c955d6358f211e65fb8cdec6', size: "small", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries }), h("wa-select", { key: '3c30b7765d3189483cc0b7a07839a25bec3a18f6', size: "small", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN))))), h("section", { key: '31b69481fa48842e5a230eb23d5518ca1297e647', class: 'booking-editor__form-control' }, h("wa-textarea", { key: 'c242781d4ee08ef6f58d76a78aa068567863a7c8', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "small", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: locales.entries.Lcz_AnyMessageForUs, rows: 3 }), this.paymentMethods.length > 1 && (h("wa-select", { key: 'f6b6a3a1ff22f5de130582f1a0ef15592ec3d6a1', label: 'Payment Method', size: "small", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: 'e2ca098089ecf0d985a56404463bc6f984d74352' }, h("ir-input", { key: '3f978d0def111d239dce249ea1085440683d47b7', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: '4a0f526a4f06a5e3d0cc8ea691dfb5b270b299ec', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: 'b90b521a72b3f4220a5dee57c56be0620d32252f', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: 'a06656a3522b2da15b8f4f08476ad1f1a1042e8a' }, h("style", { key: '97a306283cff7e28275f5d544bc51a612ba7d85d' }, `p{
              margin:0;
              padding:0}`), h("div", { key: 'c19ea164582bb8d1b4f4679d39f5f7dbd09831b8', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: '2f699b314f5d6bbf2f7ad25a4f13ffbf6ab7564c', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, locales.entries.Lcz_EmailTheGuest))));
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