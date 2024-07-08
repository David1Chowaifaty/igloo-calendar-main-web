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
        this.isLoading = false;
    }
    componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
        this.user = Object.assign({}, this.user_data);
    }
    updateUserData(key, value) {
        console.log(key, value);
        this.user = Object.assign(Object.assign({}, this.user), { [key]: value });
    }
    async handleSubmit(e) {
        e.preventDefault();
        try {
            IrGuest.parse(this.user);
            this.isLoading = true;
            await this.propertyService.editExposedGuest(this.user, '');
            const { email, country_id, first_name, last_name, mobile, country_phone_prefix } = this.user;
            checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { country_phone_prefix: country_phone_prefix, email, firstName: first_name, lastName: last_name, mobile_number: mobile, country_id });
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log(error.issues);
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a;
        console.log(JSON.stringify(this.user, null, 2));
        return (h("section", { key: '69e88a3ac7b668dd4bd392a9217ab99e36aee787', class: "mx-auto h-full min-h-[80vh] max-w-xl" }, h("h1", { key: 'e8dbc13fa6aa91cccaef15714520fdd57a136d77', class: "mb-6 text-lg font-medium" }, "Personal profile"), h("form", { key: '34847c5d50179c4cc9d6c531e224dde8754c057c', onSubmit: this.handleSubmit.bind(this) }, h("div", { key: 'dcc31f41b10f699830899e8821409611009247be', class: "relative  flex flex-col gap-4 md:grid md:grid-cols-2 " }, h("ir-input", { key: '5a17a6aa98ced1c5792f1cab0565f67be9e63d96', label: "First name", onTextChanged: e => this.updateUserData('first_name', e.detail), value: this.user.first_name, placeholder: "", onInputBlur: e => {
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
            } }), h("ir-input", { key: 'a6c93de358dfaee242093a91c8df240fef8eb037', value: this.user.last_name, label: "Last name", placeholder: "", onTextChanged: e => this.updateUserData('last_name', e.detail), onInputBlur: e => {
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
            } }), h("ir-input", { key: '2121b9b69a8f2a762259cb226fb78638c2259a30', label: "Email", placeholder: "", value: this.user.email, onInputBlur: e => {
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
            }, onTextChanged: e => this.updateUserData('email', e.detail) }), h("ir-select", { key: 'e64433ac2ecea99e4221a44c8e1c341f42bb3158', value: 2, label: "Country", variant: "double-line", data: (_a = phone_input_store.countries) === null || _a === void 0 ? void 0 : _a.map(country => ({
                id: country.id,
                value: country.name,
            })), onValueChange: e => this.updateUserData('country_id', e.detail) }), h("ir-phone-input", { key: 'c9668e6826cfaaf5c9384d8d2f64380c7b4ba2e6', class: "col-span-2 w-full", country_code: this.user.country_id || null, mode: "prefix_only", country_phone_prefix: this.user.country_phone_prefix || null, onTextChange: e => {
                this.updateUserData('mobile', e.detail.mobile);
                this.updateUserData('country_phone_prefix', e.detail.phone_prefix);
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
            } })), h("div", { key: '6921c3646e7a1d26d2d4c300dffc50f44071ef13', class: "mt-4" }, h("ir-checkbox", { key: 'cccd8a4c02742ad3d0441aab00b58d476f8435ff', onCheckChange: e => this.updateUserData('subscribe_to_news_letter', e.detail), label: "Register for exclusive deals" })), h("div", { key: '41c9a0ac8346544dc24aaccfd1a75b608f147427', class: "flex items-center justify-end" }, h("ir-button", { key: '9ebb8360ec6166db2a2d4726b1f4ffcb5fbc61c8', type: "submit", isLoading: this.isLoading, label: "Save", class: "mt-6 w-full md:w-fit" })))));
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
                    "resolved": "{ address?: string; city?: string; country_id?: number; dob?: string; email?: string; first_name?: string; id?: number; last_name?: string; mobile?: number; subscribe_to_news_letter?: boolean; country_phone_prefix?: string; alternative_email?: string; }",
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
            "user": {},
            "isLoading": {}
        };
    }
}
//# sourceMappingURL=ir-user-profile.js.map
