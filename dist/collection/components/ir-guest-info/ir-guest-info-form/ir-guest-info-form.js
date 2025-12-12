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
        return (h(Host, { key: '24b91bf6fad6ffed919defdeb9ae2a867e5c62d4' }, h("ir-validator", { key: 'f1f852227078576116bde1c1e6a2cc33e317bfea', schema: guestInfoFormSchema.shape.first_name, value: this.guest?.first_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: '8350f9da403b70fd0207519d52c92a8bf600e44e', id: 'firstName', value: this.guest?.first_name, required: true, "onText-change": e => this.handleInputChange({ first_name: e.detail }), label: locales.entries?.Lcz_FirstName })), h("ir-validator", { key: '053c8210edd0cb9f219e1d86fa66cd4ab852409a', schema: guestInfoFormSchema.shape.last_name, value: this.guest?.last_name ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: '0ca0cec167fb1cc07171b8f76ec0c6edc094ea7e', value: this.guest?.last_name, required: true, id: "lastName", "onText-change": e => this.handleInputChange({ last_name: e.detail }), label: locales.entries?.Lcz_LastName })), h("ir-validator", { key: '6e348c4b05af2fc858937e73360936f69eac375d', schema: guestInfoFormSchema.shape.email, value: this.guest?.email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: '3fe3825294f8cacf0bf240e1dd31384f6bf0b026', label: locales.entries?.Lcz_Email, id: "email", value: this.guest?.email, required: true, "onText-change": e => this.handleInputChange({ email: e.detail }) })), h("ir-validator", { key: 'c1ae8bc9a45df0c5e8f7deccfe3a2efef7df1b07', schema: guestInfoFormSchema.shape.alternative_email, value: this.guest?.alternative_email ?? '', autovalidate: this.autoValidate, valueEvent: "text-change input input-change", blurEvent: "input-blur blur" }, h("ir-input", { key: '01a72919bf15efac6582fe31f66c23bcf034a2cd', label: locales.entries?.Lcz_AlternativeEmail, id: "altEmail", value: this.guest?.alternative_email, "onText-change": e => this.handleInputChange({ alternative_email: e.detail }) })), h("ir-validator", { key: '33d4cfa5fc94cae3ea775a07aa8b9b9f64d87bff', schema: guestInfoFormSchema.shape.country_id, value: this.guest?.country_id ?? undefined, autovalidate: this.autoValidate, valueEvent: "countryChange" }, h("ir-country-picker", { key: 'd6a0e0e6078a2d43217fae2657f9075e98085741', size: "small", variant: "modern", country: this.countries.find(c => c.id === this.guest?.country_id), label: locales.entries?.Lcz_Country, onCountryChange: e => this.handleInputChange({ country_id: e.detail.id }), countries: this.countries })), h("ir-validator", { key: 'bbc20202f7fec8d8e718811fc6f143e0934c8553', schema: guestInfoFormSchema.shape.mobile, value: this.guest?.mobile ?? '', autovalidate: this.autoValidate, valueEvent: "mobile-input-change" }, h("ir-mobile-input", { key: 'f41ba23bb5ad6d37ab9e97db9ba38cc28515a46a', size: "small", "onMobile-input-change": e => {
                this.handleInputChange({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => this.handleInputChange({ country_phone_prefix: e.detail.phone_prefix }), value: this.guest?.mobile ?? '', required: true, countryCode: this.countries.find(c => c.phone_prefix === this.guest?.country_phone_prefix)?.code, countries: this.countries })), h("ir-validator", { key: '1d31a4db529d34287d1d8a6ffdda0904e1b23d39', schema: guestInfoFormSchema.shape.notes, value: this.guest?.notes ?? '', autovalidate: this.autoValidate, valueEvent: "wa-change change input", blurEvent: "wa-blur blur" }, h("wa-textarea", { key: 'd49ac8333681160a736c2e1eadaa82dc61e419fc', size: "small", onchange: e => this.handleInputChange({ notes: e.target.value }), value: this.guest?.notes ?? '', label: locales.entries?.Lcz_PrivateNote }))));
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
                    "original": "Partial<Guest>",
                    "resolved": "{ company_name?: string; company_tax_nbr?: string; address?: string; city?: string; country_id?: number; dob?: string; email?: string; first_name?: string; id?: number; last_name?: string; mobile?: string; country_phone_prefix?: string; subscribe_to_news_letter?: boolean; cci?: ICCI; alternative_email?: string; nbr_confirmed_bookings?: number; notes?: string; mobile_without_prefix?: string; }",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "Guest": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Guest"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-guest-info-form.js.map
