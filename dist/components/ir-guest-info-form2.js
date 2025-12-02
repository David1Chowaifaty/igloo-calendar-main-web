import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { z } from './index3.js';
import { d as defineCustomElement$7 } from './ir-country-picker2.js';
import { d as defineCustomElement$6 } from './ir-custom-input2.js';
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

const irGuestInfoFormCss = ".sc-ir-guest-info-form-h{display:flex;flex-direction:column;gap:var(--wa-space-l, 1rem)}";
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
        return (h(Host, { key: '4453236cf89222cce74a4e8201ca25380e3eff43' }, h("ir-validator", { key: 'd617fbad5fc4dc5ddeddbb84994f1a9739a4a50f', schema: guestInfoFormSchema.shape.first_name, value: this.guest?.first_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-custom-input", { key: '59ae2e0cf80e482d5daacd3063788ca33d83ebfb', id: 'firstName', value: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail }), label: locales.entries?.Lcz_FirstName })), h("ir-validator", { key: '0137513bd0bd2c24068db892d19b8ff4bb7a8acf', schema: guestInfoFormSchema.shape.last_name, value: this.guest?.last_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-custom-input", { key: '573e51cc1be3abb8397e3211ccd9c8c18b7b95e7', value: this.guest?.last_name, required: true, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail }), label: locales.entries?.Lcz_LastName })), h("ir-validator", { key: '278af947f99fb58fd67d66a221a11aa1245baa8a', schema: guestInfoFormSchema.shape.email, value: this.guest?.email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-custom-input", { key: '6537ae6fbb874f4c34892fa952817dfc1f172cb7', label: locales.entries?.Lcz_Email, id: "email", value: this.guest?.email, required: true, "onText-change": e => this.handleInputChange({ email: e.detail }) })), h("ir-validator", { key: '5ce48f802a525aeec673297c5584382bd94e6a46', schema: guestInfoFormSchema.shape.alternative_email, value: this.guest?.alternative_email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-custom-input", { key: 'f707c46329237e2d9dd4b47d82eda1ae8a18210b', label: locales.entries?.Lcz_AlternativeEmail, id: "altEmail", value: this.guest?.alternative_email, "onText-change": e => this.handleInputChange({ alternative_email: e.detail }) })), h("ir-validator", { key: 'd579352ead9dbf3f36481e3dcefe3f6d05e3f8a0', schema: guestInfoFormSchema.shape.country_id, value: this.guest?.country_id ?? undefined, autovalidate: this.autoValidate, valueEvent: "countryChange" }, h("ir-country-picker", { key: '43b408b8fc27658b33a5f217d2fbe509f9668536', variant: "modern", country: this.countries.find(c => c.id === this.guest?.country_id), label: locales.entries?.Lcz_Country, onCountryChange: e => this.handleInputChange({ country_id: e.detail.id }), countries: this.countries })), h("ir-validator", { key: 'c5bb13059126d9d3cd5debeb0a44a443c571e607', schema: guestInfoFormSchema.shape.mobile, value: this.guest?.mobile ?? '', autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, h("ir-mobile-input", { key: 'a97466c2ec7c599c4cc7020396639a86919e8fdc', "onMobile-input-change": e => {
                this.handleInputChange({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest?.mobile ?? '', required: true, countryCode: this.countries.find(c => c.phone_prefix === this.guest?.country_phone_prefix)?.code, countries: this.countries })), h("ir-validator", { key: '5fb14c755aec0e4d43b0d7c8cfb2a31be2319a6d', schema: guestInfoFormSchema.shape.notes, value: this.guest?.notes ?? '', autovalidate: this.autoValidate, valueEvent: "wa-change change input", blurEvent: "wa-blur blur" }, h("wa-textarea", { key: 'd93bafc0ba154546f719176672f7d728d33b4187', size: "small", onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes ?? '', label: locales.entries?.Lcz_PrivateNote }))));
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
    const components = ["ir-guest-info-form", "ir-country-picker", "ir-custom-input", "ir-input-text", "ir-mobile-input", "ir-picker", "ir-picker-item", "ir-validator"];
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
        case "ir-custom-input":
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