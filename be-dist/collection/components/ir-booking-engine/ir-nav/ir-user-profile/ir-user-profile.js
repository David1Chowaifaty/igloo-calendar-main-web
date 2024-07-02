import { IrGuest } from "../../../../models/user_form";
import { h } from "@stencil/core";
import phone_input_store from "../../../ui/ir-phone-input/phone.store";
import { checkout_store } from "../../../../stores/checkout.store";
import { ZodError } from "zod";
import { PropertyService } from "../../../../services/api/property.service";
import app_store from "../../../../stores/app.store";
export class IrUserProfile {
    constructor() {
        this.propertyService = new PropertyService();
        this.user_data = {};
        this.user = {};
    }
    componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
        this.user = Object.assign({}, this.user_data);
    }
    updateUserData(key, value) {
        this.user = Object.assign(Object.assign({}, this.user), { [key]: value });
    }
    async handleSubmit(e) {
        e.preventDefault();
        try {
            IrGuest.parse(this.user);
            await this.propertyService.editExposedGuest(this.user, '');
            const { email, country_id, first_name, last_name, mobile } = this.user;
            checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { country_code: country_id, email, firstName: first_name, lastName: last_name, mobile_number: mobile, country_id });
        }
        catch (error) {
            if (error instanceof ZodError) {
            }
        }
    }
    render() {
        var _a;
        return (h("section", { key: 'b69f5fbd4e24123488dd4e8e2ae41586ef3e74ca', class: "p-4" }, h("h1", { key: '7dd5a80940949cad1670fd60b1a3ecbf81edee8a', class: "mb-6 text-lg font-medium" }, "Personal profile"), h("form", { key: '87dd70ac727a9db228eb0a5c6f2edfe3e7a7e81e', onSubmit: this.handleSubmit.bind(this) }, h("div", { key: '126b4ec344dd79e4181437eb1c533f9dad42f6ce', class: "relative grid gap-4 md:grid-cols-2" }, h("ir-input", { key: '8ccedd091c01272016faa356f98ace8b52558350', label: "Email", placeholder: "", value: this.user.email, onInputBlur: e => {
                var _a;
                const emailSchema = IrGuest.pick({ email: true });
                const schemaValidation = emailSchema.safeParse({ email: (_a = this.user) === null || _a === void 0 ? void 0 : _a.email });
                const target = e.target;
                if (!schemaValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            }, onTextChanged: e => this.updateUserData('email', e.detail) }), h("ir-input", { key: '2eaf5168ba3eb685b60d011ad1e5283711c6f02b', label: "First name", onTextChanged: e => this.updateUserData('first_name', e.detail), value: this.user.first_name, placeholder: "", onInputBlur: e => {
                var _a;
                const emailSchema = IrGuest.pick({ first_name: true });
                const schemaValidation = emailSchema.safeParse({ first_name: (_a = this.user) === null || _a === void 0 ? void 0 : _a.first_name });
                const target = e.target;
                if (!schemaValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } }), h("ir-input", { key: '174d46599eb4eba36db0cd46238623cd9222d48f', value: this.user.last_name, label: "Last name", placeholder: "", onTextChanged: e => this.updateUserData('last_name', e.detail), onInputBlur: e => {
                var _a;
                const emailSchema = IrGuest.pick({ last_name: true });
                const schemaValidation = emailSchema.safeParse({ last_name: (_a = this.user) === null || _a === void 0 ? void 0 : _a.last_name });
                const target = e.target;
                if (!schemaValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } }), h("ir-select", { key: '03d77b1515aa734372608cd1bd3043e4e095b765', value: 2, label: "Country", variant: "double-line", data: (_a = phone_input_store.countries) === null || _a === void 0 ? void 0 : _a.map(country => ({
                id: country.id,
                value: country.name,
            })), onValueChange: e => this.updateUserData('country_id', e.detail) }), h("ir-phone-input", { key: 'a12d82ce2322179e09794226586fed141d084c0a', class: "col-span-2 w-full", country_code: this.user.country_id || null, onTextChange: e => {
                this.updateUserData('mobile', e.detail.mobile);
                this.updateUserData('country_id', e.detail.phone_prefix);
            }, mobile_number: (this.user.mobile || '').toString(), onPhoneInputBlur: e => {
                const schema = IrGuest.pick({ mobile: true });
                const schemaValidation = schema.safeParse({ mobile: this.user.mobile });
                const target = e.target;
                if (!schemaValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onPhoneInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } })), h("div", { key: '5796796653f816c285a5f0a7c22d709af69b3b2c', class: "mt-4" }, h("ir-checkbox", { key: '19c9bbdb283a33d53bf5663495aad0a7d1460623', onCheckChange: e => this.updateUserData('subscribe_to_news_letter', e.detail), label: "Register for exclusive deals" })), h("div", { key: 'ba963bdbd53a65b3bbcbce6e4bc990f736f375cb', class: "flex items-center justify-end" }, h("ir-button", { key: 'f5b2f733ce5a100355a6758dff9d1544b4c303ad', type: "submit", label: "Save", class: "mt-6 w-full md:w-fit" })))));
    }
    static get is() { return "ir-user-profile"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-user-profile.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-user-profile.css"]
        };
    }
    static get properties() {
        return {
            "user_data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TGuest",
                    "resolved": "{ address?: string; city?: string; country_id?: number; dob?: string; email?: string; first_name?: string; id?: string; last_name?: string; mobile?: number; subscribe_to_news_letter?: boolean; alternative_email?: string; }",
                    "references": {
                        "TGuest": {
                            "location": "import",
                            "path": "@/models/user_form",
                            "id": "src/models/user_form.ts::TGuest"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "{}"
            }
        };
    }
    static get states() {
        return {
            "user": {}
        };
    }
}
//# sourceMappingURL=ir-user-profile.js.map
