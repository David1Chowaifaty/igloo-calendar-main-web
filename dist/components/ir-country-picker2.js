import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-input-text2.js';

const irCountryPickerCss = ".sc-ir-country-picker-h{display:block;margin:0;padding:0;box-sizing:border-box}.combobox-menu.sc-ir-country-picker{max-height:200px;overflow:auto}";
const IrCountryPickerStyle0 = irCountryPickerCss;

const IrCountryPicker = /*@__PURE__*/ proxyCustomElement(class IrCountryPicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.countryChange = createEvent(this, "countryChange", 7);
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
        return (h("form", { key: 'be37ee7bde4a67329ef13d0b1dcf2ba4318ac806', class: "dropdown m-0 p-0" }, h("ir-input-text", { key: '9cf67e556de030882d9fa496e60ffd676b9729f1', onTextChange: e => {
                if (!this.searching) {
                    this.searching = true;
                }
                this.inputValue = e.detail;
                this.filterCountries();
            }, label: this.label, error: this.error, placeholder: "", class: "m-0 p-0", value: this.inputValue, id: "dropdownMenuCombobox", LabelAvailable: !!this.label, "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false", onInputFocus: () => this.scrollToSelected(), onInputBlur: () => (this.searching = false) }), h("div", { key: '26b06e9f764cf310b7d80c82eaf79e2c46b4dbb5', class: "dropdown-menu combobox-menu", "aria-labelledby": "dropdownMenuCombobox" }, shouldShowPropertyCountry && (h(Fragment, { key: 'a635a034a25c7e6ede059ba9c01995f3a4752630' }, h("button", { key: '1e4bc695eb54ba52a0f7c8fbbc859e880c9c0da3', type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === this.propertyCountry.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(this.propertyCountry);
            } }, h("img", { key: '8808d588432a673d78fc7ecfc9f107335697dc80', src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { key: '2594bc5ca8d6aa4bd523eb1d7e8580c4c4f2e311', class: "pl-1 m-0" }, this.propertyCountry.name)), h("div", { key: 'bd491f584c86c659e2cefb6b248d6fdacd45f608', class: "dropdown-divider" }))), (_b = this.filteredCountries) === null || _b === void 0 ? void 0 :
            _b.map(c => {
                var _a;
                return (h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === c.id ? 'active' : ''}`, onClick: () => {
                        this.selectCountry(c);
                    } }, h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "pl-1 m-0" }, c.name)));
            }), ((_c = this.filteredCountries) === null || _c === void 0 ? void 0 : _c.length) === 0 && h("p", { key: 'b339104da54c474e13afb526bde386df9d1efa11', class: "dropdown-item-text" }, "Invalid Country"))));
    }
    static get watchers() { return {
        "country": ["handleCountryChange"]
    }; }
    static get style() { return IrCountryPickerStyle0; }
}, [2, "ir-country-picker", {
        "countries": [16],
        "country": [16],
        "error": [1028],
        "propertyCountry": [16],
        "label": [1],
        "inputValue": [32],
        "selectedCountry": [32],
        "filteredCountries": [32],
        "searching": [32]
    }, undefined, {
        "country": ["handleCountryChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-country-picker", "ir-input-text"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCountryPicker);
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCountryPicker as I, defineCustomElement as d };

//# sourceMappingURL=ir-country-picker2.js.map