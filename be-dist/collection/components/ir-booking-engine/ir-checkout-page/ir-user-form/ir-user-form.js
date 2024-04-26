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
    handleButtonClick(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        setTimeout(() => {
            this.dialogRef.openModal();
        }, 50);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!app_store.setup_entries) {
            return null;
        }
        return (h(Fragment, null, h("section", { class: 'w-full' }, h("ir-button", { buttonStyles: { justifyContent: 'flex-start' }, label: "Sign in or create an account to book faster", size: "md", class: "w-full", onButtonClick: e => this.handleButtonClick(e) }), h("div", { class: "flex flex-col  gap-4 mt-6 w-full" }, h("div", { class: "flex flex-col gap-4 w-full md:flex-row" }, h("ir-input", { placeholder: "", value: (_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.firstName, error: !!((_b = this.errors) === null || _b === void 0 ? void 0 : _b.firstName), label: "First name", onTextChanged: e => updateUserFormData('firstName', e.detail), class: "w-full" }), h("ir-input", { placeholder: "", value: (_c = checkout_store.userFormData) === null || _c === void 0 ? void 0 : _c.lastName, label: "Last name", onTextChanged: e => updateUserFormData('lastName', e.detail), error: !!((_d = this.errors) === null || _d === void 0 ? void 0 : _d.lastName), class: "w-full" })), h("div", { class: "flex flex-col gap-4 w-full md:flex-row" }, h("ir-input", { placeholder: "", value: (_e = checkout_store.userFormData) === null || _e === void 0 ? void 0 : _e.email, label: "Email address", onTextChanged: e => updateUserFormData('email', e.detail), error: !!((_f = this.errors) === null || _f === void 0 ? void 0 : _f.email), class: "w-full" }), h("ir-phone-input", {
            // mobile_number={checkout_store.userFormData?.mobile_number.toString()}
            error: !!((_g = this.errors) === null || _g === void 0 ? void 0 : _g.mobile_number), class: "w-full", onTextChange: e => {
                updateUserFormData('mobile_number', e.detail.mobile);
                updateUserFormData('country_code', e.detail.phone_prefix);
            }
        })), h("div", { class: "flex flex-col gap-4 w-full md:flex-row" }, h("ir-select", { label: `Your arrival time(check-in from ${(_h = app_store.property) === null || _h === void 0 ? void 0 : _h.time_constraints.check_in_from})`, variant: "double-line", value: (_j = checkout_store.userFormData) === null || _j === void 0 ? void 0 : _j.arrival_time, onValueChange: e => updateUserFormData('arrival_time', e.detail), data: app_store.setup_entries.arrivalTime.map(entry => ({
                id: entry.CODE_NAME,
                value: entry.CODE_VALUE_EN,
            })), class: 'w-full' }), h("ir-input", { value: (_k = checkout_store.userFormData) === null || _k === void 0 ? void 0 : _k.message, placeholder: "", label: "Any message for us?", onTextChanged: e => updateUserFormData('message', e.detail), class: "w-full" }))), h("ir-checkbox", { checked: (_l = checkout_store.userFormData) === null || _l === void 0 ? void 0 : _l.bookingForSomeoneElse, label: "I am booking for someone else", class: "mt-3", onCheckChange: e => updateUserFormData('bookingForSomeoneElse', e.detail) })), h("ir-dialog", { ref: el => (this.dialogRef = el) }, h("ir-auth", { slot: "modal-body" }), ";")));
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
