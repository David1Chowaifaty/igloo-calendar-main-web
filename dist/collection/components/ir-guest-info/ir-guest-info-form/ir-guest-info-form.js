import { Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import { guestInfoFormSchema } from "./types";
export class IrGuestInfoForm {
    guest;
    language;
    countries;
    autoValidate = false;
    guestChanged;
    handleInputChange(params) {
        this.guestChanged.emit(params);
    }
    render() {
        return (h(Host, { key: '5ced76462d457a84648c056be7681dbfd13e51c6' }, h("ir-validator", { key: '546e87acc5f60d00256ef96cd4f34597d303c7f9', schema: guestInfoFormSchema.shape.first_name, value: this.guest?.first_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: '08256576ac1b5bf72d031e3be364071ea83f5760', id: 'firstName', value: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail }), label: locales.entries?.Lcz_FirstName })), h("ir-validator", { key: '327709c93ca0e2f99274b5e251acdbe6ba4f7e0d', schema: guestInfoFormSchema.shape.last_name, value: this.guest?.last_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: 'b8514f9ff722beb5b5011e9846e664211b7d6dd2', value: this.guest?.last_name, required: true, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail }), label: locales.entries?.Lcz_LastName })), h("ir-validator", { key: '4cd26ce02d7e8b31bd94a007123a9c17b1a19422', schema: guestInfoFormSchema.shape.email, value: this.guest?.email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: 'beec57a7877fed157ecc4275c6e8a33a607971dc', label: locales.entries?.Lcz_Email, id: "email", value: this.guest?.email, required: true, "onText-change": e => this.handleInputChange({ email: e.detail }) })), h("ir-validator", { key: 'c1488ac0b7c94561a18f50d578df97f04928edcf', schema: guestInfoFormSchema.shape.alternative_email, value: this.guest?.alternative_email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: '9de4e2359ce43d4e125ce7fd0397544a08536707', label: locales.entries?.Lcz_AlternativeEmail, id: "altEmail", value: this.guest?.alternative_email, "onText-change": e => this.handleInputChange({ alternative_email: e.detail }) })), h("ir-validator", { key: '41f0a42d5882b5406b226bbf9b7909ff62b75bd0', schema: guestInfoFormSchema.shape.country_id, value: this.guest?.country_id ?? undefined, autovalidate: this.autoValidate, valueEvent: "countryChange" }, h("ir-country-picker", { key: 'a06755de9c411cf0fe7ed38767faa000155d8e4b', size: "small", variant: "modern", country: this.countries.find(c => c.id === this.guest?.country_id), label: locales.entries?.Lcz_Country, onCountryChange: e => this.handleInputChange({ country_id: e.detail.id }), countries: this.countries })), h("ir-validator", { key: 'e5f214a0aa5fe1ceebef6380d08458f7fc9745ca', schema: guestInfoFormSchema.shape.mobile, value: this.guest?.mobile ?? '', autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, h("ir-mobile-input", { key: '6dcb37085296abefce525bc49047bad2e1822738', size: "small", "onMobile-input-change": e => {
                this.handleInputChange({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest?.mobile ?? '', required: true, countryCode: this.countries.find(c => c.phone_prefix === this.guest?.country_phone_prefix)?.code, countries: this.countries })), h("ir-validator", { key: '32eb6a36ea4265fa04ec29dd90a7d06086b9f9aa', schema: guestInfoFormSchema.shape.notes, value: this.guest?.notes ?? '', autovalidate: this.autoValidate, valueEvent: "wa-change change input", blurEvent: "wa-blur blur" }, h("wa-textarea", { key: '73652b474822c911ed5c2516bcd18d50685be417', size: "small", onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes ?? '', label: locales.entries?.Lcz_PrivateNote }))));
    }
    static get is() { return "ir-guest-info-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-guest-info-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-guest-info-form.css"]
        };
    }
    static get properties() {
        return {
            "guest": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Guest",
                    "resolved": "Guest",
                    "references": {
                        "Guest": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Guest"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false
            },
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "autoValidate": {
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
                "getter": false,
                "setter": false,
                "attribute": "auto-validate",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "guestChanged",
                "name": "guestChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GuestChangedEvent",
                    "resolved": "{ company_name?: string; company_tax_nbr?: string; address?: string; city?: string; country_id?: number; dob?: string; email?: string; first_name?: string; id?: number; last_name?: string; mobile?: string; country_phone_prefix?: string; subscribe_to_news_letter?: boolean; cci?: ICCI; alternative_email?: string; nbr_confirmed_bookings?: number; notes?: string; mobile_without_prefix?: string; }",
                    "references": {
                        "GuestChangedEvent": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-guest-info/ir-guest-info-form/ir-guest-info-form.tsx",
                            "id": "src/components/ir-guest-info/ir-guest-info-form/ir-guest-info-form.tsx::GuestChangedEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-guest-info-form.js.map
