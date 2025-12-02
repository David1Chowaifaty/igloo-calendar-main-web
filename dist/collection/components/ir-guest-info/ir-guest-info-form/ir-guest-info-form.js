import { Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrGuestInfoForm {
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
                    "original": "Guest",
                    "resolved": "Guest",
                    "references": {
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
