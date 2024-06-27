import { IrGuest } from "../../models/user_form";
import { h } from "@stencil/core";
import phone_input_store from "../ui/ir-phone-input/phone.store";
import { checkout_store } from "../../stores/checkout.store";
import { ZodError } from "zod";
export class IrUserProfile {
    constructor() {
        this.user_data = {};
        this.user = {};
    }
    componentWillLoad() {
        this.user = Object.assign({}, this.user_data);
    }
    updateUserData(key, value) {
        this.user = Object.assign(Object.assign({}, this.user), { [key]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        try {
            IrGuest.parse(this.user);
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
        return (h("section", { key: 'd4dc905851fcf4cc0aedb3b2fcc98246c9c89336', class: "p-4" }, h("h1", { key: 'e131faab517949b9fa36e7f78231525604ae4da1', class: "mb-6 text-lg font-medium" }, "Personal profile"), h("form", { key: 'dd64db1c952b5ffaf53dd982c38da374dbedfb02', onSubmit: this.handleSubmit.bind(this) }, h("div", { key: '5adac876fa053da4fafa30f704f7b253bad5d31c', class: "grid gap-4 md:grid-cols-2" }, h("ir-input", { key: 'a40d9a35a0259bd73e298a39aafb93c457c8b173', label: "Email", placeholder: "", value: this.user.email, onInputBlur: e => {
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
            }, onTextChanged: e => this.updateUserData('email', e.detail) }), h("ir-input", { key: '618e9971140af83b4d87671c52d5c3744f031dd2', label: "Password", type: "password", value: this.user.password, placeholder: "", onInputBlur: e => {
                var _a;
                const emailSchema = IrGuest.pick({ password: true });
                const schemaValidation = emailSchema.safeParse({ password: (_a = this.user) === null || _a === void 0 ? void 0 : _a.password });
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
            }, onTextChanged: e => this.updateUserData('password', e.detail) }), h("ir-input", { key: 'bc83049cb741f1671441f90d6c5a5c6f26c62103', label: "First name", onTextChanged: e => this.updateUserData('first_name', e.detail), value: this.user.first_name, placeholder: "", onInputBlur: e => {
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
            } }), h("ir-input", { key: '4b08752d0ab87f6398c1b3836a45d36c9caa52ee', value: this.user.last_name, label: "Last name", placeholder: "", onTextChanged: e => this.updateUserData('last_name', e.detail), onInputBlur: e => {
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
            } }), h("ir-select", { key: 'b2dea7c27ac0561e1dd0addc1ddd0216bc4f2990', value: 2, label: "Country", variant: "double-line", data: (_a = phone_input_store.countries) === null || _a === void 0 ? void 0 : _a.map(country => ({
                id: country.id,
                value: country.name,
            })), onValueChange: e => this.updateUserData('country_id', e.detail) }), h("ir-input", { key: '63d1b4d5fba7fb3cf01f83eb53eeffb41549e74e', label: "City", placeholder: "", value: this.user.city, onTextChanged: e => this.updateUserData('city', e.detail) }), h("ir-input", { key: '6b020946a5b17961aae4a844212ac8bccae749ce', label: "Address", placeholder: "", value: this.user.address, onTextChanged: e => this.updateUserData('address', e.detail) }), h("ir-phone-input", { key: 'dc659b8d1b39b7d6b749b80b473ad4ebf4554a5c', country_code: this.user.country_id || null, onTextChange: e => {
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
            } }), h("ir-checkbox", { key: '62829f51f754bfe734ff8eb57946a3cad969d5c7', onCheckChange: e => this.updateUserData('subscribe_to_news_letter', e.detail), label: "Register for exclusive deals" })), h("div", { key: '90dc479dded657fe84e75517666b70457be8db1b', class: "flex items-center justify-end" }, h("ir-button", { key: '76540a9a70d426c04971f2c2af7db64fa5d515d9', type: "submit", label: "Save", class: "mt-6 w-full md:w-fit" })))));
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
                    "resolved": "{ address?: string; city?: string; country_id?: number; dob?: string; email?: string; first_name?: string; password?: string; id?: string; last_name?: string; mobile?: number; subscribe_to_news_letter?: boolean; alternative_email?: string; }",
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
