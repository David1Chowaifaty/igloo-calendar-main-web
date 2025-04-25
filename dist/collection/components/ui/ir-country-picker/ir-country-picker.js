import { Fragment, h } from "@stencil/core";
export class IrCountryPicker {
    constructor() {
        this.countries = [];
        this.autoValidate = false;
        this.filteredCountries = [];
        this.searching = false;
    }
    componentWillLoad() {
        this.filteredCountries = [...this.countries];
        if (this.country) {
            this.inputValue = this.country.name;
            this.selectedCountry = this.country;
        }
    }
    handleCountryChange(newCountry, oldCountry) {
        var _a;
        if ((newCountry === null || newCountry === void 0 ? void 0 : newCountry.id) !== (oldCountry === null || oldCountry === void 0 ? void 0 : oldCountry.id)) {
            this.inputValue = (_a = this.country) === null || _a === void 0 ? void 0 : _a.name;
            this.selectedCountry = newCountry;
        }
    }
    filterCountries() {
        if (this.inputValue === '' && this.country) {
            this.selectCountry(null);
        }
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
            if (!this.inputValue) {
                this.filteredCountries = [...this.countries];
            }
            else {
                this.filteredCountries = this.countries.filter(c => c.name.toLowerCase().includes(this.inputValue.toLowerCase()));
            }
        }, 300);
    }
    selectCountry(c) {
        this.selectedCountry = c;
        this.inputValue = c === null || c === void 0 ? void 0 : c.name;
        this.filteredCountries = [...this.countries];
        this.countryChange.emit(c);
    }
    scrollToSelected() {
        setTimeout(() => {
            const dropdownItem = document.querySelector(`.dropdown-item.active`);
            if (dropdownItem) {
                dropdownItem.scrollIntoView({ behavior: 'instant', block: 'center' });
            }
        }, 100);
    }
    render() {
        var _a, _b, _c;
        const shouldShowPropertyCountry = this.filteredCountries.length > 0 && this.propertyCountry && (!this.searching || (this.searching && this.inputValue === ''));
        return (h("form", { key: '75ea6e4fce92e09095cc196550bc88d765e3e647', class: "dropdown m-0 p-0" }, h("ir-input-text", { key: '1ad1a383fbac4f36757373f01f615f4fcb4fb91b', onTextChange: e => {
                if (!this.searching) {
                    this.searching = true;
                }
                this.inputValue = e.detail;
                this.filterCountries();
            }, testId: this.testId, autoValidate: this.autoValidate, label: this.label, error: this.error, placeholder: "", class: "m-0 p-0", value: this.inputValue, id: "dropdownMenuCombobox", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false", onInputFocus: () => this.scrollToSelected(), onInputBlur: () => {
                this.searching = false;
                if (this.filteredCountries.length > 0 && this.inputValue && this.inputValue.trim() !== '') {
                    this.selectCountry(this.filteredCountries[0]);
                }
            } }), h("div", { key: 'fc8ae63247d4cd131970da8c7a9031fda85b87f8', class: "dropdown-menu combobox-menu", "aria-labelledby": "dropdownMenuCombobox" }, shouldShowPropertyCountry && (h(Fragment, { key: 'ae9a2192480b46462248208f71b604a429fac98e' }, h("button", { key: '6fe6253e6b3974ae6f35f5177e343a66addda5e5', type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === this.propertyCountry.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(this.propertyCountry);
            } }, h("img", { key: 'ef346e76a320ab4243b4f55b8d09f04b28c32e3e', src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { key: 'bc48ca122fb853dffd8ccac89c776230a3f9f8b8', class: "pl-1 m-0" }, this.propertyCountry.name)), h("div", { key: 'f3abcc41b0fe4474f2291e4553009ba109bfedae', class: "dropdown-divider" }))), (_b = this.filteredCountries) === null || _b === void 0 ? void 0 :
            _b.map(c => {
                var _a;
                return (h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === c.id ? 'active' : ''}`, onClick: () => {
                        this.selectCountry(c);
                    } }, h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "pl-1 m-0" }, c.name)));
            }), ((_c = this.filteredCountries) === null || _c === void 0 ? void 0 : _c.length) === 0 && h("p", { key: 'b703ead6021ea4058f0b1e756abd7f9fc74d963d', class: "dropdown-item-text" }, "Invalid Country"))));
    }
    static get is() { return "ir-country-picker"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-country-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-country-picker.css"]
        };
    }
    static get properties() {
        return {
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
                "setter": false,
                "defaultValue": "[]"
            },
            "country": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry",
                    "resolved": "ICountry",
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
            "error": {
                "type": "boolean",
                "mutable": true,
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
                "reflect": false
            },
            "propertyCountry": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry",
                    "resolved": "ICountry",
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
    static get states() {
        return {
            "inputValue": {},
            "selectedCountry": {},
            "filteredCountries": {},
            "searching": {}
        };
    }
    static get events() {
        return [{
                "method": "countryChange",
                "name": "countryChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ICountry",
                    "resolved": "ICountry",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "country",
                "methodName": "handleCountryChange"
            }];
    }
}
//# sourceMappingURL=ir-country-picker.js.map
