import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-input-text2.js';

const irCountryPickerCss = ".sc-ir-country-picker-h{display:block;margin:0;padding:0;box-sizing:border-box}.combobox-menu.sc-ir-country-picker{max-height:200px;overflow:auto}";
const IrCountryPickerStyle0 = irCountryPickerCss;

const IrCountryPicker = /*@__PURE__*/ proxyCustomElement(class IrCountryPicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.countryChange = createEvent(this, "countryChange", 7);
        /**
         * List of countries to display in the dropdown.
         */
        this.countries = [];
        /**
         * Whether to automatically validate the input.
         */
        this.autoValidate = false;
        /**
         * Filtered list of countries based on the user's input.
         */
        this.filteredCountries = [];
        /**
         * Whether the input is currently being used for searching.
         */
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
    /**
     * Filters the list of countries based on the current input.
     */
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
    /**
     * Selects a country and emits the change event.
     */
    selectCountry(c) {
        this.selectedCountry = c;
        this.inputValue = c === null || c === void 0 ? void 0 : c.name;
        this.filteredCountries = [...this.countries];
        this.countryChange.emit(c);
    }
    /**
     * Scrolls to the selected country in the dropdown for accessibility.
     */
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
        return (h("form", { key: '60009683fe1047fdf2b1b105f1cf82d9ff891ea0', class: "dropdown m-0 p-0" }, h("ir-input-text", { key: 'b94700c13f6b4a992cb1b5bf592eecfcecb60c64', onTextChange: e => {
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
            } }), h("div", { key: 'cd48852873b440c3d867ac015e9187bd4d5d356c', class: "dropdown-menu combobox-menu", "aria-labelledby": "dropdownMenuCombobox" }, shouldShowPropertyCountry && (h(Fragment, { key: '1fcb634187365fc437d96a3cf471ac41cd3247a7' }, h("button", { key: 'd7e7bd77d6d4df52befb4f153a912de3c6383ef7', type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === this.propertyCountry.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(this.propertyCountry);
            } }, h("img", { key: '4f14012977103f64447a2b09cd847f4e88c4abaa', src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { key: 'fc754a7e53142f22b23f7e5ff1b89d4c5e5422dc', class: "pl-1 m-0" }, this.propertyCountry.name)), h("div", { key: 'f2eb29a738e1e4b85fb590294d1ef06b5d4584b4', class: "dropdown-divider" }))), (_b = this.filteredCountries) === null || _b === void 0 ? void 0 :
            _b.map(c => {
                var _a;
                return (h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === c.id ? 'active' : ''}`, onClick: () => {
                        this.selectCountry(c);
                    } }, h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "pl-1 m-0" }, c.name)));
            }), ((_c = this.filteredCountries) === null || _c === void 0 ? void 0 : _c.length) === 0 && h("p", { key: '27b8d6dd60df43c8603196aa35c312a423a31ed7', class: "dropdown-item-text" }, "Invalid Country"))));
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
        "testId": [1, "test-id"],
        "autoValidate": [4, "auto-validate"],
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