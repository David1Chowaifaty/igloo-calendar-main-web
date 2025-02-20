import { BookingService } from "../../../services/booking.service";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrPhoneInput {
    constructor() {
        this.value = '';
        this.disabled = false;
        this.error = false;
        this.default_country = null;
        this.phone_prefix = null;
        this.countries = [];
        this.inputValue = '';
        this.isDropdownVisible = false;
        // private cmp_countries: ICountry[] = [];
        this.bookingService = new BookingService();
    }
    async componentWillLoad() {
        if (this.countries.length === 0) {
            const countries = await this.bookingService.getCountries(this.language);
            this.countries = countries;
        }
        if (this.phone_prefix) {
            this.setCountryFromPhonePrefix();
        }
        else {
            if (this.default_country) {
                this.setCurrentCountry(this.default_country);
            }
        }
        this.inputValue = this.value;
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.inputValue = newValue;
        }
    }
    handlePhoneChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setCountryFromPhonePrefix();
        }
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isDropdownVisible = false;
        }
    }
    handleInputChange(e) {
        var _a;
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.inputValue });
    }
    setCountryFromPhonePrefix() {
        var _a;
        console.log(this.phone_prefix);
        let country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            country = this.countries.find(c => c.id.toString() === this.phone_prefix);
            if (!country) {
                return;
            }
        }
        console.log(country);
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    setCurrentCountry(id) {
        var _a;
        const country = this.countries.find(country => country.id === id);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '38653fc253bdefb8fb56e4c6b55e404757cab807' }, h("div", { key: '276224711487988228122c1c858d7e53ce481836', class: "form-group mr-0" }, h("div", { key: '7aaae48a8bbdf0b06f450c2f863abdceeb597d20', class: "input-group row m-0 p-0 position-relative" }, this.label && (h("div", { key: 'ce928835cb21f174248349d0d4797c77da482a55', class: `input-group-prepend col-3 p-0 text-dark border-none` }, h("label", { key: '6eb21f4a895adac078e38b2dc5fbf43fea59a2e9', class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), h("div", { key: '7c19fbdff518fe88b230598aa8d3b7e1354170ad', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, h("button", { key: 'f97c0bfe73c697771d67d0a58bf7dbc86be5c29e', onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? h("img", { src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }) : h("p", { class: "p-0 m-0 " }, locales.entries.Lcz_Select), h("svg", { key: '7c6de2778d36ac1be1071c6a2d9e053bf1567810', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'ae2a4a0d28902d5124b8b2f6991145dc80266da3', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("p", { key: '0530421a89a5ad923e7e0f7b720cd0c355e3b952', class: 'phone_prefix_label' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), h("input", { key: '48b725020ba3d253061393ba01ab4cc51878bd8e', type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), ' ', this.isDropdownVisible && (h("div", { key: 'f2e74ec8b18e9ec3e1a1a33897f7b780b61e418a', class: "ir-dropdown-container" }, h("ir-combobox", { key: '78a77d68ba37f02374f4c18f75bb3974409702ae', onComboboxValueChange: e => {
                this.setCurrentCountry(+e.detail.data);
                this.isDropdownVisible = false;
            }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                id: c.id.toString(),
                name: `${c.name} (${c.phone_prefix})`,
                image: c.flag,
            })) })))))));
    }
    static get is() { return "ir-phone-input"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-phone-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-phone-input.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                "attribute": "label",
                "reflect": false
            },
            "value": {
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
                "attribute": "value",
                "reflect": false,
                "defaultValue": "''"
            },
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "error": {
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
                "attribute": "error",
                "reflect": false,
                "defaultValue": "false"
            },
            "token": {
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
                "attribute": "token",
                "reflect": false
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
            "default_country": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "default_country",
                "reflect": false,
                "defaultValue": "null"
            },
            "phone_prefix": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
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
                "attribute": "phone_prefix",
                "reflect": false,
                "defaultValue": "null"
            },
            "placeholder": {
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
                "attribute": "placeholder",
                "reflect": false
            },
            "countries": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/components",
                            "id": "src/components.d.ts::ICountry"
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "inputValue": {},
            "isDropdownVisible": {},
            "currentCountry": {}
        };
    }
    static get events() {
        return [{
                "method": "textChange",
                "name": "textChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ phone_prefix: string; mobile: string }",
                    "resolved": "{ phone_prefix: string; mobile: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "phone_prefix",
                "methodName": "handlePhoneChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleDocumentClick",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-phone-input.js.map
