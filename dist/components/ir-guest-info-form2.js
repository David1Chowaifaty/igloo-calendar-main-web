import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$6 } from './ir-country-picker2.js';
import { d as defineCustomElement$5 } from './ir-custom-input2.js';
import { d as defineCustomElement$4 } from './ir-input-text2.js';
import { d as defineCustomElement$3 } from './ir-mobile-input2.js';
import { d as defineCustomElement$2 } from './ir-picker2.js';
import { d as defineCustomElement$1 } from './ir-picker-item2.js';

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
    autoValidate;
    guestChanged;
    handleInputChange(params) {
        // this.guestChanged.emit({ ...this.guest, ...params });
        this.guest = { ...this.guest, ...params };
    }
    render() {
        console.log(this.guest);
        return (h(Host, { key: 'dc3e68c0e2c78f0d2ba3ba26334b126e9d52d8ab' }, h("ir-custom-input", { key: '7193c7cbd4b4254c8b9b6494e4b7cef1d33ecc52', id: 'firstName', value: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail }), label: locales.entries?.Lcz_FirstName }), h("ir-custom-input", { key: '2d4ec01185d90730e11fff3a410a5e8998c42130', value: this.guest?.last_name, required: true, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail }), label: locales.entries?.Lcz_LastName }), h("ir-custom-input", { key: '0c6f42710c0f71ce82db06848ceb647542012fac', label: locales.entries?.Lcz_Email, id: "email",
            // submitted={this.submit}
            value: this.guest?.email, required: true, "onText-change": e => this.handleInputChange({ email: e.detail }) }), h("ir-custom-input", { key: '2ce7a032eaabe454d0a95284b07aaa438ae0f14a', label: locales.entries?.Lcz_AlternativeEmail, id: "altEmail", value: this.guest?.alternative_email, "onText-change": e => this.handleInputChange({ alternative_email: e.detail }) }), h("ir-country-picker", { key: '9bd59e357036da4532286a364755c3f431306fda', variant: "modern",
            // error={this.submit && !this.guest.country_id}
            country: this.countries.find(c => c.id === this.guest.country_id), label: locales.entries?.Lcz_Country, onCountryChange: e => this.handleInputChange({ country_id: e.detail.id }), countries: this.countries }), h("ir-mobile-input", { key: 'c676af3d510c017fcdedde3b77386ea2494fd741', "onMobile-input-change": e => {
                console.log(e.detail);
                this.handleInputChange({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest.mobile, required: true, countryCode: this.countries.find(c => c.phone_prefix === this.guest.country_phone_prefix)?.code, countries: this.countries }), h("wa-textarea", { key: '5fbf4bdce00ac92177e76f378187c040c2505f1a', onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes, label: locales.entries?.Lcz_PrivateNote })));
    }
    static get style() { return IrGuestInfoFormStyle0; }
}, [2, "ir-guest-info-form", {
        "guest": [1040],
        "language": [1],
        "countries": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-guest-info-form", "ir-country-picker", "ir-custom-input", "ir-input-text", "ir-mobile-input", "ir-picker", "ir-picker-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGuestInfoForm);
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrGuestInfoForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-guest-info-form2.js.map