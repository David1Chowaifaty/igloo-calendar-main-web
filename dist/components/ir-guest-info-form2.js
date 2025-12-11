import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { z } from './index3.js';
import { d as defineCustomElement$7 } from './ir-country-picker2.js';
import { d as defineCustomElement$6 } from './ir-input2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-mobile-input2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const nonEmptyString = (message) => z.string().trim().min(1, message);
const optionalEmailSchema = z.string().trim().email('Enter a valid email address').or(z.literal('')).optional().nullable();
const guestInfoFormSchema = z.object({
    first_name: nonEmptyString('First name is required'),
    last_name: nonEmptyString('Last name is required'),
    email: nonEmptyString('Email is required').email('Enter a valid email address'),
    alternative_email: optionalEmailSchema,
    country_id: z.number({ required_error: 'Country is required' }).int('Country is required').positive('Country is required'),
    mobile: nonEmptyString('Mobile number is required').min(5, 'Mobile number is too short'),
    country_phone_prefix: nonEmptyString('Country code is required'),
    notes: z.string().max(2000, 'Private note cannot exceed 2000 characters').optional(),
});

const irGuestInfoFormCss = ".sc-ir-guest-info-form-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}";
const IrGuestInfoFormStyle0 = irGuestInfoFormCss;

const IrGuestInfoForm = /*@__PURE__*/ proxyCustomElement(class IrGuestInfoForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.guestChanged = createEvent(this, "guestChanged", 7);
    }
    guest;
    language;
    countries;
    autoValidate = false;
    guestChanged;
    handleInputChange(params) {
        this.guestChanged.emit(params);
    }
    render() {
        return (h(Host, { key: '274550783568b3aafa0f1c42df79c341fa357569' }, h("ir-validator", { key: '158a57eb9100c85006bd59d6a2b597a877709c54', schema: guestInfoFormSchema.shape.first_name, value: this.guest?.first_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: 'cad5bfbd2c8aff76c62fae4ac465e4bf5aef6cad', id: 'firstName', value: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail }), label: locales.entries?.Lcz_FirstName })), h("ir-validator", { key: 'b320f9a10b6abf9ace505f3162d664583f599af9', schema: guestInfoFormSchema.shape.last_name, value: this.guest?.last_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: '88e5c9893e098e1cae889234e563bb4cd224dad4', value: this.guest?.last_name, required: true, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail }), label: locales.entries?.Lcz_LastName })), h("ir-validator", { key: '98ca34e8cd68d9407422f46b10f04f0d9f493868', schema: guestInfoFormSchema.shape.email, value: this.guest?.email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: 'fe09ff1856200e7dc1cbfca353f872f45cf58994', label: locales.entries?.Lcz_Email, id: "email", value: this.guest?.email, required: true, "onText-change": e => this.handleInputChange({ email: e.detail }) })), h("ir-validator", { key: '0f2142b7eb666a286368249a85532b621d7fb562', schema: guestInfoFormSchema.shape.alternative_email, value: this.guest?.alternative_email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: '5a3af929d9dc7f98fa3e2dd6bd693676746af19d', label: locales.entries?.Lcz_AlternativeEmail, id: "altEmail", value: this.guest?.alternative_email, "onText-change": e => this.handleInputChange({ alternative_email: e.detail }) })), h("ir-validator", { key: 'bffe8257162715790c00ee04e1b72dcc10297a42', schema: guestInfoFormSchema.shape.country_id, value: this.guest?.country_id ?? undefined, autovalidate: this.autoValidate, valueEvent: "countryChange" }, h("ir-country-picker", { key: '26b813937378dbd4dba5692cf1a017f51faff2fe', size: "small", variant: "modern", country: this.countries.find(c => c.id === this.guest?.country_id), label: locales.entries?.Lcz_Country, onCountryChange: e => this.handleInputChange({ country_id: e.detail.id }), countries: this.countries })), h("ir-validator", { key: 'fa0c816e90a85cae4ff82504202f62ad2bb48928', schema: guestInfoFormSchema.shape.mobile, value: this.guest?.mobile ?? '', autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, h("ir-mobile-input", { key: '44a92d5518f87cbf0c823812a0a897a1a6a64f50', size: "small", "onMobile-input-change": e => {
                this.handleInputChange({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest?.mobile ?? '', required: true, countryCode: this.countries.find(c => c.phone_prefix === this.guest?.country_phone_prefix)?.code, countries: this.countries })), h("ir-validator", { key: '3dd260b0d3ea74634ffd33d3a47de4b27aa76b77', schema: guestInfoFormSchema.shape.notes, value: this.guest?.notes ?? '', autovalidate: this.autoValidate, valueEvent: "wa-change change input", blurEvent: "wa-blur blur" }, h("wa-textarea", { key: '5b7c4183dec6c8cb647dfaecca1abacfa07da825', size: "small", onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes ?? '', label: locales.entries?.Lcz_PrivateNote }))));
    }
    static get style() { return IrGuestInfoFormStyle0; }
}, [2, "ir-guest-info-form", {
        "guest": [1040],
        "language": [1],
        "countries": [16],
        "autoValidate": [4, "auto-validate"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-guest-info-form", "ir-country-picker", "ir-input", "ir-input-text", "ir-mobile-input", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGuestInfoForm);
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

export { IrGuestInfoForm as I, defineCustomElement as d, guestInfoFormSchema as g };

//# sourceMappingURL=ir-guest-info-form2.js.map