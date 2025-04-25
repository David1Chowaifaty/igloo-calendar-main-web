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
        let country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            country = this.countries.find(c => c.id.toString() === this.phone_prefix);
            if (!country) {
                return;
            }
        }
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
        return (h(Host, { key: 'feaa2eb937401f8324d2607f8c9617a8125792e7' }, h("div", { key: 'c82997ca235741157eacc08fa47a6e628f0285cc', class: "form-group mr-0" }, h("div", { key: '412fbd0eb3d8855acf5a9e3f00eb724b14fe203a', class: "input-group row m-0 p-0 position-relative" }, this.label && (h("div", { key: '271a48153c67d753091632a081f81b35b99878bb', class: `input-group-prepend col-3 p-0 text-dark border-none` }, h("label", { key: '177e3715bc7d2e30ba863538c71d0f1fb5b7bb7c', class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), h("div", { key: '9c1884d6c441c6e5310f8fd17f8c37e55968b853', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, h("button", { key: '7aa21b983b9022d4e2d87f3e3b47b4b285438dc6', type: "button", onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? h("img", { src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }) : h("p", { class: "p-0 m-0 " }, locales.entries.Lcz_Select), h("svg", { key: 'b2b7f341ebb2fb890d625582857377552c3cad8a', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'd71089a1701d7322342abe020d70efe6c05c2b3d', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("p", { key: '0b00007c69f76c8acb120277991ae24609e63d47', class: 'phone_prefix_label' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), h("input", { key: '0be7bccfa7a741f2a3471f606614d968a2228de4', "data-testid": this.testId, maxLength: 14, type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), this.isDropdownVisible && (h("div", { key: '334551e192f4bb147507560e91e95ac62359059f', class: "ir-dropdown-container" }, h("ir-combobox", { key: 'a24a4da44dbf1138661e9c89f12c9c91f8c41e90', onComboboxValueChange: e => {
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
            },
            "testId": {
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
                "attribute": "test-id",
                "reflect": false
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
