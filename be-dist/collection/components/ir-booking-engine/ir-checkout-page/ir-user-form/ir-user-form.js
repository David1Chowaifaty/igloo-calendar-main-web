import { IrUserFormData } from "../../../../models/user_form";
import { PropertyService } from "../../../../services/api/property.service";
import app_store from "../../../../stores/app.store";
import { checkout_store, updateUserFormData } from "../../../../stores/checkout.store";
import localizedWords from "../../../../stores/localization.store";
import { Fragment, h } from "@stencil/core";
export class IrUserForm {
    constructor() {
        this.propertyService = new PropertyService();
        this.errors = undefined;
    }
    async componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
        await this.propertyService.fetchSetupEntries();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!app_store.setup_entries) {
            return (h("div", null, h("p", null, "Loading")));
        }
        return (h(Fragment, null, h("section", { class: "user-form-section" }, h("div", { class: "user-form-content" }, h("div", { class: "user-form-row" }, h("ir-input", { placeholder: "", value: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.firstName, "data-state": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.firstName) ? 'error' : '', label: localizedWords.entries.Lcz_FirstName, onTextChanged: e => updateUserFormData('firstName', e.detail), class: "user-form-input", onInputBlur: e => {
                var _a;
                const firstNameSchema = IrUserFormData.pick({ firstName: true });
                const firstNameValidation = firstNameSchema.safeParse({ firstName: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.firstName });
                const target = e.target;
                if (!firstNameValidation.success) {
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
            } }), h("ir-input", { placeholder: "", value: (_c = checkout_store.userFormData) === null || _c === void 0 ? void 0 : _c.lastName, label: localizedWords.entries.Lcz_LastName, onTextChanged: e => updateUserFormData('lastName', e.detail), class: "user-form-input", "data-state": ((_d = this.errors) === null || _d === void 0 ? void 0 : _d.lastName) ? 'error' : '', onInputBlur: e => {
                var _a;
                const lastNameSchema = IrUserFormData.pick({ lastName: true });
                const lastNameValidation = lastNameSchema.safeParse({ lastName: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.lastName });
                if (!lastNameValidation.success) {
                    const target = e.target;
                    target.setAttribute('data-state', 'error');
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } })), h("div", { class: "user-form-row" }, h("ir-input", { placeholder: "", value: (_e = checkout_store.userFormData) === null || _e === void 0 ? void 0 : _e.email, label: localizedWords.entries.Lcz_EmailAddress, onTextChanged: e => updateUserFormData('email', e.detail), "data-state": ((_f = this.errors) === null || _f === void 0 ? void 0 : _f.email) ? 'error' : '', class: "user-form-input", onInputBlur: e => {
                var _a;
                const schema = IrUserFormData.pick({ email: true });
                const schemaValidation = schema.safeParse({ email: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.email });
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
            } }), h("ir-phone-input", { mobile_number: (((_g = checkout_store.userFormData) === null || _g === void 0 ? void 0 : _g.mobile_number) || '').toString(), "data-state": ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.mobile_number) ? 'error' : '', class: "user-form-input", onTextChange: e => {
                updateUserFormData('mobile_number', e.detail.mobile);
                updateUserFormData('country_phone_prefix', e.detail.phone_prefix);
            }, country_code: checkout_store.userFormData.country_id || null, onPhoneInputBlur: e => {
                var _a;
                const schema = IrUserFormData.pick({ mobile_number: true });
                const schemaValidation = schema.safeParse({ mobile_number: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.mobile_number });
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
            } })), h("div", { class: "user-form-row" }, h("ir-select", { label: localizedWords.entries.Lcz_YourArrivalTime.replace('%1', (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.time_constraints.check_in_from), variant: "double-line", value: (_k = checkout_store.userFormData) === null || _k === void 0 ? void 0 : _k.arrival_time, onValueChange: e => updateUserFormData('arrival_time', e.detail), data: app_store.setup_entries.arrivalTime.map(entry => ({
                id: entry.CODE_NAME,
                value: entry.CODE_VALUE_EN,
            })), class: "user-form-input" })), h("ir-textarea", { value: (_l = checkout_store.userFormData) === null || _l === void 0 ? void 0 : _l.message, placeholder: "", label: localizedWords.entries.Lcz_AnyMessageForUs, maxlength: 555, onTextChanged: e => updateUserFormData('message', e.detail), class: "w-full" })), h("ir-checkbox", { checked: (_m = checkout_store.userFormData) === null || _m === void 0 ? void 0 : _m.bookingForSomeoneElse, label: localizedWords.entries.Lcz_IAmBooklingForSomeoneElse, class: "user-form-checkbox", onCheckChange: e => updateUserFormData('bookingForSomeoneElse', e.detail) }))));
    }
    static get is() { return "ir-user-form"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-user-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-user-form.css"]
        };
    }
    static get properties() {
        return {
            "errors": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Record<string, ZodIssue>",
                    "resolved": "{ [x: string]: ZodIssue; }",
                    "references": {
                        "Record": {
                            "location": "global",
                            "id": "global::Record"
                        },
                        "ZodIssue": {
                            "location": "import",
                            "path": "zod",
                            "id": ""
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get events() {
        return [{
                "method": "changePageLoading",
                "name": "changePageLoading",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "'remove' | 'add'",
                    "resolved": "\"add\" | \"remove\"",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-user-form.js.map
