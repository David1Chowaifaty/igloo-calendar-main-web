import { Fragment, h } from "@stencil/core";
export class IrCountryPicker {
    constructor() {
        this.countries = [];
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
        if ((newCountry === null || newCountry === void 0 ? void 0 : newCountry.id) !== (oldCountry === null || oldCountry === void 0 ? void 0 : oldCountry.id)) {
            this.inputValue = this.country.name;
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
        this.inputValue = c.name;
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
        return (h("form", { key: '2a3fc259e7261e5f5f4e204964fc4c15630dbdcd', class: "dropdown m-0 p-0" }, h("ir-input-text", { key: '4b171513d8cec644f5f1b446b9df065d058a0acc', onTextChange: e => {
                if (!this.searching) {
                    this.searching = true;
                }
                this.inputValue = e.detail;
                this.filterCountries();
            }, label: this.label, error: this.error, placeholder: "", class: "m-0 p-0", value: this.inputValue, id: "dropdownMenuCombobox", LabelAvailable: !!this.label, "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false", onInputFocus: () => this.scrollToSelected(), onInputBlur: () => (this.searching = false) }), h("div", { key: '3d37aea49e71eb88b46b5d7d77c0f39841219e0b', class: "dropdown-menu combobox-menu", "aria-labelledby": "dropdownMenuCombobox" }, shouldShowPropertyCountry && (h(Fragment, { key: '68f799c887561b1e31ec3caee3bc0f127f0d4c9a' }, h("button", { key: 'b39c1dbd5ea5efd8653eaf1765b68efcf42193d7', type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === this.propertyCountry.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(this.propertyCountry);
            } }, h("img", { key: 'ca26c43c36caec9d30567526792d6f87d43f0032', src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { key: '73407e42021896a69e428bc3d0fb9e138fe06644', class: "pl-1 m-0" }, this.propertyCountry.name)), h("div", { key: '4fe04d44018af5a526b0d14d1eea9254870dbb7d', class: "dropdown-divider" }))), (_b = this.filteredCountries) === null || _b === void 0 ? void 0 :
            _b.map(c => {
                var _a;
                return (h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === c.id ? 'active' : ''}`, onClick: () => {
                        this.selectCountry(c);
                    } }, h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "pl-1 m-0" }, c.name)));
            }), ((_c = this.filteredCountries) === null || _c === void 0 ? void 0 : _c.length) === 0 && h("p", { key: '16e9994a9cc4b3e7970add4c65bfe1bb67c6c52b', class: "dropdown-item-text" }, "Invalid Country"))));
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
