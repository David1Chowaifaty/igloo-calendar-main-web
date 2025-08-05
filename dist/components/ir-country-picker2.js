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
        return (h("form", { key: '555d5a5fd63c09a1bfada1c9b4343348d9583eaa', class: "dropdown m-0 p-0" }, h("ir-input-text", { key: 'dcdcc93abc99c647619af31ddeeb59bfdb693788', onTextChange: e => {
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
            } }), h("div", { key: 'f8b3374bbbf3084efd4646ee0ceb75ab3fe76118', class: "dropdown-menu combobox-menu", "aria-labelledby": "dropdownMenuCombobox" }, shouldShowPropertyCountry && (h(Fragment, { key: '9c25983d9a90a7e987fec668afc30fcfab1551c5' }, h("button", { key: '66b26139803d2bc630da895e8eb08efcea9eb112', type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === this.propertyCountry.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(this.propertyCountry);
            } }, h("img", { key: '4821565ea76ba1869ac13e9add2c5de3b4fd4aac', src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { key: '45afacd078dd88b066b55bc4bb72d0c2022420f1', class: "pl-1 m-0" }, this.propertyCountry.name)), h("div", { key: '0be023f9879791fae6df6ac2534de5f242553d26', class: "dropdown-divider" }))), (_b = this.filteredCountries) === null || _b === void 0 ? void 0 :
            _b.map(c => {
                var _a;
                return (h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === c.id ? 'active' : ''}`, onClick: () => {
                        this.selectCountry(c);
                    } }, h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "pl-1 m-0" }, c.name)));
            }), ((_c = this.filteredCountries) === null || _c === void 0 ? void 0 : _c.length) === 0 && h("p", { key: 'a1c541ccdc6df4baf4c81c403775f53cde93b9f5', class: "dropdown-item-text" }, "Invalid Country"))));
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