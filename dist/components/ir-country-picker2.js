import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-input-text2.js';

const irCountryPickerCss = ".sc-ir-country-picker-h{display:block;margin:0;padding:0;box-sizing:border-box}.combobox-menu.sc-ir-country-picker{max-height:200px;overflow:auto}";

const IrCountryPicker = /*@__PURE__*/ proxyCustomElement(class IrCountryPicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.countryChange = createEvent(this, "countryChange", 7);
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
        return (h("form", { key: 'cb9768e2f319f6ad5f94a6c245d0001b09b0cd71', class: "dropdown m-0 p-0" }, h("ir-input-text", { key: '68e280a6e56267b32208d7441a1d113d60fdaeb4', onTextChange: e => {
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
            } }), h("div", { key: '4d8aa7bf9ad410fbb90fcab89e2de7daca1bb669', class: "dropdown-menu combobox-menu", "aria-labelledby": "dropdownMenuCombobox" }, shouldShowPropertyCountry && (h(Fragment, { key: '898fd0873f83296a29d0cfac61a8968ded7d101c' }, h("button", { key: '6ebb72fc2f5cb6640b7e1c4fa5ae6a0c65c58a99', type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === this.propertyCountry.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(this.propertyCountry);
            } }, h("img", { key: 'c5717cec5bcba2e6e0b805b7d62aaa2e1091da5e', src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { key: '39410fa87d62880701e8037a4e25ae531e8de72e', class: "pl-1 m-0" }, this.propertyCountry.name)), h("div", { key: '381bf4f67ce110617ee2aa85b220361c95124424', class: "dropdown-divider" }))), (_b = this.filteredCountries) === null || _b === void 0 ? void 0 :
            _b.map(c => {
                var _a;
                return (h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === c.id ? 'active' : ''}`, onClick: () => {
                        this.selectCountry(c);
                    } }, h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "pl-1 m-0" }, c.name)));
            }), ((_c = this.filteredCountries) === null || _c === void 0 ? void 0 : _c.length) === 0 && h("p", { key: '6ac28d3f2427743f44b449715d976f1d9e8499a1', class: "dropdown-item-text" }, "Invalid Country"))));
    }
    static get watchers() { return {
        "country": ["handleCountryChange"]
    }; }
    static get style() { return irCountryPickerCss; }
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

//# sourceMappingURL=ir-country-picker2.js.map