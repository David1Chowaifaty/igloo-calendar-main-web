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
        return (h(Host, { key: 'f6daae2a016ca7a5f5d47e21f75218d31aa7893f' }, h("ir-validator", { key: '9fc64ea8fc8224c5ff81dde00633690273ebdb7e', schema: guestInfoFormSchema.shape.first_name, value: this.guest?.first_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-custom-input", { key: '0fe056de91d0d10943b4874116936676c0420296', id: 'firstName', value: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail }), label: locales.entries?.Lcz_FirstName })), h("ir-validator", { key: '99afb414d907e9f8c31f10423bcf76b07687551b', schema: guestInfoFormSchema.shape.last_name, value: this.guest?.last_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-custom-input", { key: 'e8f2d885a5731cb7956f3d055c3ef3a6239a4e5f', value: this.guest?.last_name, required: true, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail }), label: locales.entries?.Lcz_LastName })), h("ir-validator", { key: 'c5915e9ffa3bfc9a98d90809c300be3fb7f2b318', schema: guestInfoFormSchema.shape.email, value: this.guest?.email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-custom-input", { key: '154a58b31845d7e5870783e673c1d7a304fc5250', label: locales.entries?.Lcz_Email, id: "email", value: this.guest?.email, required: true, "onText-change": e => this.handleInputChange({ email: e.detail }) })), h("ir-validator", { key: 'd481516daf699dfde7467102376c745431a849b7', schema: guestInfoFormSchema.shape.alternative_email, value: this.guest?.alternative_email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-custom-input", { key: '71ed797d31dc6d75cbf2461129fdcc06295d8629', label: locales.entries?.Lcz_AlternativeEmail, id: "altEmail", value: this.guest?.alternative_email, "onText-change": e => this.handleInputChange({ alternative_email: e.detail }) })), h("ir-validator", { key: 'a17ecdc7fa581042ca40d0d8efa8359857bcbd4f', schema: guestInfoFormSchema.shape.country_id, value: this.guest?.country_id ?? undefined, autovalidate: this.autoValidate, valueEvent: "countryChange" }, h("ir-country-picker", { key: '131c31baebb04a77d9845e5c2ffc860ac9d00bfd', size: "small", variant: "modern", country: this.countries.find(c => c.id === this.guest?.country_id), label: locales.entries?.Lcz_Country, onCountryChange: e => this.handleInputChange({ country_id: e.detail.id }), countries: this.countries })), h("ir-validator", { key: '670439c35ec6ab3e4d0b30eaa8167381c155ec47', schema: guestInfoFormSchema.shape.mobile, value: this.guest?.mobile ?? '', autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, h("ir-mobile-input", { key: 'f4da263f62e73f8a9ea133da09305738c4d7187b', size: "small", "onMobile-input-change": e => {
                this.handleInputChange({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest?.mobile ?? '', required: true, countryCode: this.countries.find(c => c.phone_prefix === this.guest?.country_phone_prefix)?.code, countries: this.countries })), h("ir-validator", { key: '97d908de56bbb43a4b02207dd1e781f2e5b1fe33', schema: guestInfoFormSchema.shape.notes, value: this.guest?.notes ?? '', autovalidate: this.autoValidate, valueEvent: "wa-change change input", blurEvent: "wa-blur blur" }, h("wa-textarea", { key: '0db1974934429ebe4c22eb5b2769fa936974df4b', size: "small", onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes ?? '', label: locales.entries?.Lcz_PrivateNote }))));
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