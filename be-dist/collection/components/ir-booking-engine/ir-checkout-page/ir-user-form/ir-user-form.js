import { IrUserFormData } from "../../../../models/user_form";
import { PropertyService } from "../../../../services/api/property.service";
import app_store from "../../../../stores/app.store";
import { checkout_store, updateUserFormData } from "../../../../stores/checkout.store";
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
    handleButtonClick() {
        setTimeout(() => {
            this.dialogRef.openModal();
        }, 50);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!app_store.setup_entries) {
            return null;
        }
        return (h(Fragment, null, h("section", { class: "user-form-section" }, h("ir-badge-group", { variant: "primary", clickable: true, badge: "Sign in", onClick: this.handleButtonClick.bind(this), message: "Sign in or create an account to book faster" }), h("div", { class: "user-form-content" }, h("div", { class: "user-form-row" }, h("ir-input", { placeholder: "", value: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.firstName, "data-state": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.firstName) ? 'error' : '', label: "First name", onTextChanged: e => updateUserFormData('firstName', e.detail), class: "user-form-input", onInputBlur: e => {
                var _a;
                const firstNameSchema = IrUserFormData.pick({ firstName: true });
                const firstNameValidation = firstNameSchema.safeParse({ firstName: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.firstName });
                if (!firstNameValidation.success) {
                    const target = e.target;
                    target.setAttribute('data-state', 'error');
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } }), h("ir-input", { placeholder: "", value: (_c = checkout_store.userFormData) === null || _c === void 0 ? void 0 : _c.lastName, label: "Last name", onTextChanged: e => updateUserFormData('lastName', e.detail), class: "user-form-input", "data-state": ((_d = this.errors) === null || _d === void 0 ? void 0 : _d.lastName) ? 'error' : '', onInputBlur: e => {
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
            } })), h("div", { class: "user-form-row" }, h("ir-input", { placeholder: "", value: (_e = checkout_store.userFormData) === null || _e === void 0 ? void 0 : _e.email, label: "Email address", onTextChanged: e => updateUserFormData('email', e.detail), "data-state": ((_f = this.errors) === null || _f === void 0 ? void 0 : _f.email) ? 'error' : '', class: "user-form-input", onInputBlur: e => {
                var _a;
                const emailSchema = IrUserFormData.pick({ email: true });
                const emailValidation = emailSchema.safeParse({ email: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.email });
                if (!emailValidation.success) {
                    const target = e.target;
                    target.setAttribute('data-state', 'error');
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } }), h("ir-phone-input", { "data-state": ((_g = this.errors) === null || _g === void 0 ? void 0 : _g.mobile_number) ? 'error' : '', class: "user-form-input", onTextChange: e => {
                updateUserFormData('mobile_number', e.detail.mobile);
                updateUserFormData('country_code', e.detail.phone_prefix);
            }, onPhoneInputBlur: e => {
                var _a;
                const emailSchema = IrUserFormData.pick({ mobile_number: true });
                const emailValidation = emailSchema.safeParse({ mobile_number: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.mobile_number });
                if (!emailValidation.success) {
                    const target = e.target;
                    target.setAttribute('data-state', 'error');
                }
            }, onPhoneInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } })), h("div", { class: "user-form-row" }, h("ir-select", { label: `Your arrival time(check-in from ${(_h = app_store.property) === null || _h === void 0 ? void 0 : _h.time_constraints.check_in_from})`, variant: "double-line", value: (_j = checkout_store.userFormData) === null || _j === void 0 ? void 0 : _j.arrival_time, onValueChange: e => updateUserFormData('arrival_time', e.detail), data: app_store.setup_entries.arrivalTime.map(entry => ({
                id: entry.CODE_NAME,
                value: entry.CODE_VALUE_EN,
            })), class: "user-form-input" })), h("ir-textarea", { value: (_k = checkout_store.userFormData) === null || _k === void 0 ? void 0 : _k.message, placeholder: "", label: "Any message for us?", maxlength: 555, onTextChanged: e => updateUserFormData('message', e.detail), class: "w-full" })), h("ir-checkbox", { checked: (_l = checkout_store.userFormData) === null || _l === void 0 ? void 0 : _l.bookingForSomeoneElse, label: "I am booking for someone else", class: "user-form-checkbox", onCheckChange: e => updateUserFormData('bookingForSomeoneElse', e.detail) })), h("ir-dialog", { ref: el => (this.dialogRef = el) }, h("ir-auth", { slot: "modal-body" }), ";")));
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
}
//# sourceMappingURL=ir-user-form.js.map
