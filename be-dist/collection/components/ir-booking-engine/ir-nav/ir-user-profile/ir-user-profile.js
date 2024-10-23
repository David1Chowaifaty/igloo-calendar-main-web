import { IrGuest } from "../../../../models/user_form";
import { h } from "@stencil/core";
import phone_input_store from "../../../ui/ir-phone-input/phone.store";
import { checkout_store } from "../../../../stores/checkout.store";
import { ZodError } from "zod";
import { PropertyService } from "../../../../services/api/property.service";
import app_store from "../../../../stores/app.store";
import { CommonService } from "../../../../services/api/common.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import localizedWords from "../../../../stores/localization.store";
export class IrUserProfile {
    constructor() {
        this.propertyService = new PropertyService();
        this.commonService = new CommonService();
        this.user_data = {};
        this.be = true;
        this.user = {};
        this.isLoading = false;
        this.isPageLoading = false;
    }
    async componentWillLoad() {
        await this.fetchData();
        this.user = Object.assign({}, this.user_data);
    }
    async fetchData() {
        var _a;
        if (this.be) {
            return;
        }
        await this.commonService.getExposedCountryByIp({
            id: (_a = app_store.app_data.property_id) === null || _a === void 0 ? void 0 : _a.toString(),
            aname: app_store.app_data.aName,
            perma_link: app_store.app_data.perma_link,
        });
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
        console.log(isRequestPending('/Get_Exposed_Country_By_IP'));
        if (isRequestPending('/Get_Exposed_Country_By_IP')) {
            return null;
        }
        return (h("section", { class: `mx-auto h-full min-h-[80vh] max-w-xl ${!this.be ? 'p-4 md:p-6' : ''}` }, h("h1", { class: "mb-6 text-lg font-medium" }, localizedWords.entries.Lcz_PersonalProfile), h("form", { onSubmit: this.handleSubmit.bind(this) }, h("div", { class: "relative  flex flex-col gap-4 md:grid md:grid-cols-2 " }, h("ir-input", { label: localizedWords.entries.Lcz_FirstName, onTextChanged: e => this.updateUserData('first_name', e.detail), value: this.user.first_name, placeholder: "", onInputBlur: e => {
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
            } }), h("ir-input", { value: this.user.last_name, label: localizedWords.entries.Lcz_LastName, placeholder: "", onTextChanged: e => this.updateUserData('last_name', e.detail), onInputBlur: e => {
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
            } }), h("ir-input", { label: localizedWords.entries.Lcz_EmailAddress, placeholder: "", value: this.user.email, onInputBlur: e => {
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
            }, onTextChanged: e => this.updateUserData('email', e.detail) }), h("ir-select", { value: this.user.country_id, label: localizedWords.entries.Lcz_Country, variant: "double-line", data: (_a = phone_input_store.countries) === null || _a === void 0 ? void 0 : _a.map(country => ({
                id: country.id,
                value: country.name,
            })), onValueChange: e => this.updateUserData('country_id', e.detail) }), h("ir-phone-input", { class: "col-span-2 w-full", country_code: this.user.country_id || null, mode: "prefix_only", country_phone_prefix: this.user.country_phone_prefix || null, onTextChange: e => {
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
            } })), h("div", { class: "mt-4" }, h("ir-checkbox", { onCheckChange: e => this.updateUserData('subscribe_to_news_letter', e.detail), label: localizedWords.entries.Lcz_RegisterForExclusiveDeals })), h("div", { class: "flex items-center justify-end" }, h("ir-button", { type: "submit", isLoading: this.isLoading, label: localizedWords.entries.Lcz_save, class: "mt-6 w-full md:w-fit" })))));
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
            },
            "be": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "be",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "user": {},
            "isLoading": {},
            "isPageLoading": {}
        };
    }
}
//# sourceMappingURL=ir-user-profile.js.map
