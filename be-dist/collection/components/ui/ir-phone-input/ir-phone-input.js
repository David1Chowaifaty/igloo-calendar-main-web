import { h, Fragment } from "@stencil/core";
import { createPopper } from "@popperjs/core";
import localization_store from "../../../stores/app.store";
import { CommonService } from "../../../services/api/common.service";
import app_store from "../../../stores/app.store";
import { updateUserFormData } from "../../../stores/checkout.store";
import localizedWords from "../../../stores/localization.store";
import phone_input_store from "./phone.store";
export class IrPhoneInput {
    constructor() {
        this.mode = 'country_code_and_prefix';
        this.isVisible = false;
        this.currentHighlightedIndex = -1;
        this.filteredCountries = [];
        this.inputValue = '';
        this.popoverInstance = null;
        this.commonService = new CommonService();
        this.handleOutsideClick = (event) => {
            const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(this.el);
            if (outsideClick && this.isVisible) {
                this.toggleVisibility();
            }
        };
        this.handleKeyboardPress = (e) => {
            if (!this.isVisible) {
                return;
            }
            if (e.key === 'Escape') {
                this.toggleVisibility();
            }
            return;
        };
    }
    async componentWillLoad() {
        await this.initializeCountries();
        this.inputValue = this.mobile_number;
    }
    componentDidLoad() {
        this.initializePopover();
    }
    async initializeCountries() {
        if (phone_input_store.countries.length === 0) {
            const requests = [this.commonService.getCountries(app_store.userPreferences.language_id)];
            if (!this.country_code) {
                requests.push(this.setUpUserDefaultCountry());
            }
            const [countries] = await Promise.all(requests);
            phone_input_store.countries = countries;
        }
        if (this.mode === 'country_code_and_prefix' && this.country_phone_prefix) {
            this.selectCountryByProperty('phone_prefix', this.country_phone_prefix.toString());
        }
        else if (this.country_code && this.mode === 'country_code_and_prefix') {
            this.selectCountryByProperty('id', this.country_code.toString());
        }
        else if (this.user_country) {
            this.selectCountryByProperty('id', this.user_country.COUNTRY_ID);
        }
        else if (this.mode === 'prefix_only' && this.country_phone_prefix) {
            this.selectCountryByProperty('phone_prefix', this.country_phone_prefix.toString());
        }
        this.filteredCountries = phone_input_store.countries;
    }
    handleCountryCodeChange(newValue, oldValue) {
        if (newValue !== oldValue && this.mode === 'country_code_and_prefix') {
            this.selectCountryByProperty('id', this.country_code.toString());
        }
    }
    handleCountryPhonePrefixChange(newValue, oldValue) {
        if (newValue !== oldValue && this.mode === 'prefix_only') {
            this.selectCountryByProperty('phone_prefix', this.country_phone_prefix.toString());
        }
    }
    handleMobileNumberChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue !== this.inputValue) {
            this.inputValue = newValue;
        }
    }
    selectCountryByProperty(property, value) {
        const selectedCountry = phone_input_store.countries.find(c => c[property].toString() === value.toString());
        if (selectedCountry) {
            if (this.mode === 'country_code_and_prefix') {
                updateUserFormData('country_id', selectedCountry.id);
            }
            updateUserFormData('country_phone_prefix', selectedCountry.phone_prefix);
            this.selectedItem = selectedCountry;
            if (!this.mobile_number) {
                this.textChange.emit({
                    phone_prefix: selectedCountry.phone_prefix.toString(),
                    mobile: '',
                });
            }
        }
    }
    async setUpUserDefaultCountry() {
        var _a, _b, _c, _d;
        this.user_country = await this.commonService.getUserDefaultCountry({
            id: (_b = (_a = app_store.app_data) === null || _a === void 0 ? void 0 : _a.property_id) === null || _b === void 0 ? void 0 : _b.toString(),
            aname: (_c = app_store.app_data) === null || _c === void 0 ? void 0 : _c.aName,
            perma_link: (_d = app_store.app_data) === null || _d === void 0 ? void 0 : _d.perma_link,
        });
    }
    initializePopover() {
        if (this.triggerElement && this.contentElement) {
            this.popoverInstance = createPopper(this.triggerElement, this.contentElement, {
                placement: localization_store.dir === 'LTR' ? 'auto-start' : 'auto-end',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 2],
                        },
                    },
                ],
            });
        }
    }
    adjustPopoverPlacement() {
        requestAnimationFrame(() => {
            const rect = this.contentElement.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                this.popoverInstance.setOptions({
                    placement: 'top-end',
                });
            }
            else if (rect.top < 0) {
                this.popoverInstance.setOptions({
                    placement: 'bottom-end',
                });
            }
            this.popoverInstance.update();
        });
    }
    async toggleVisibility() {
        this.isVisible = !this.isVisible;
        this.filteredCountries = phone_input_store.countries;
        if (this.isVisible && this.popoverInstance) {
            setTimeout(() => this.searchInput.focus(), 20);
            this.adjustPopoverPlacement();
            const currentDir = localization_store.dir.toLowerCase() || 'ltr';
            if ((this.popoverInstance.state.options.placement === 'bottom-start' && currentDir === 'rtl') ||
                (this.popoverInstance.state.options.placement === 'bottom-end' && currentDir === 'ltr')) {
                let newPlacement = this.popoverInstance.state.options.placement;
                if (currentDir === 'rtl') {
                    newPlacement = newPlacement.replace('bottom-start', 'bottom-end');
                }
                else {
                    newPlacement = newPlacement.replace('bottom-end', 'bottom-start');
                }
                this.popoverInstance
                    .setOptions({
                    placement: newPlacement,
                })
                    .then(() => {
                    this.popoverInstance.update();
                });
            }
            else {
                this.popoverInstance.update();
            }
        }
        if (this.isVisible) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('click', this.handleOutsideClick, true);
            document.addEventListener('keydown', this.handleKeyboardPress, true);
        }
        else {
            document.body.style.overflow = 'visible';
            document.removeEventListener('click', this.handleOutsideClick, true);
            document.removeEventListener('keydown', this.handleKeyboardPress, true);
        }
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleOutsideClick, true);
        document.removeEventListener('keydown', this.handleKeyboardPress, true);
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
    }
    synchroniseSuggestionsBox() {
        var _a;
        const item = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`li:nth-of-type(${this.currentHighlightedIndex + 1})`);
        item === null || item === void 0 ? void 0 : item.scrollIntoView({ block: 'center' });
    }
    handleAutoCompleteKeyDown(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.currentHighlightedIndex = (this.currentHighlightedIndex + 1 + this.filteredCountries.length) % this.filteredCountries.length;
            this.synchroniseSuggestionsBox();
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.currentHighlightedIndex = (this.currentHighlightedIndex - 1 + this.filteredCountries.length) % this.filteredCountries.length;
            this.synchroniseSuggestionsBox();
        }
        else if (e.key === 'Enter') {
            this.selectItem(this.currentHighlightedIndex);
        }
    }
    selectItem(index) {
        this.currentHighlightedIndex = index;
        this.selectedItem = this.filteredCountries[index];
        this.filteredCountries = phone_input_store.countries;
        this.phoneInput.focus();
        this.toggleVisibility();
        this.textChange.emit({
            phone_prefix: this.selectedItem.phone_prefix.toString(),
            mobile: this.mobile_number,
        });
    }
    filterData(str) {
        if (str === '') {
            return (this.filteredCountries = [...phone_input_store.countries]);
        }
        this.filteredCountries = [...phone_input_store.countries.filter(d => d.name.toLowerCase().startsWith(str.trim()))];
    }
    handleFilterInputChange(e) {
        e.stopPropagation();
        const value = e.target.value;
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            this.filterData(value);
        }, 300);
    }
    handleInputChange(e) {
        var _a;
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.phone_prefix.toString(), mobile: this.inputValue });
    }
    render() {
        var _a, _b, _c;
        return (h("div", { key: '2f78150044c6cf2a514eac396636c1197cc5b339', ref: el => (this.triggerElement = el), class: "phone-input-container" }, h("div", { key: '85babe8b624b8783c19859d93cb4500e275dbc0f', class: `input-trigger ${this.error ? 'error' : ''}` }, h("div", { key: '70ac0ffed19ca5e924e9f4fd653c3e44ced4c0c0', class: "input-section" }, h("label", { key: 'c813d02a62d06d9d46b19631337e47a199414e6b', htmlFor: "country_picker" }, localizedWords.entries.Lcz_Country), h("div", { key: '5aa591572d0a8d27127170762a8555f0c8b15808', id: "country_picker", onClick: () => {
                this.toggleVisibility();
            }, class: "input-subtrigger" }, this.selectedItem ? (h(Fragment, null, h("img", { loading: "lazy", src: (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.flag, alt: (_b = this.selectedItem) === null || _b === void 0 ? void 0 : _b.name, class: "flag-icon" }), h("span", null, (_c = this.selectedItem) === null || _c === void 0 ? void 0 : _c.phone_prefix))) : (h("span", null, "Select")), h("svg", { key: '3ccadaf38550f8ec7590ac21d496f93a6f824ca4', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'b2675b9a75bd61fe96fb7fe2aedaefadfe3ce5ec', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })))), h("div", { key: '6bfe1b55a7173f2ae5c92369c4744d41996582f2', class: "input-section" }, h("label", { key: 'a21caade8f32cd307a6bdc33256f2665b783cff3', htmlFor: "phone_number" }, localizedWords.entries.Lcz_MobileNumber), h("input", { key: '4595d32eeca55584bd8f767705dc9eb1572ec878', type: "phone", ref: el => (this.phoneInput = el), onBlur: e => this.phoneInputBlur.emit(e), onFocus: e => this.phoneInputFocus.emit(e), onInput: e => this.handleInputChange(e), id: "phone_number", value: this.inputValue, class: "input-subtrigger" }))), h("div", { key: '0684c362d48ca2ed9e9c2ea7169f4a73fed4aa07', ref: el => (this.contentElement = el), class: "dropdown-container" }, this.isVisible && (h("ul", { key: 'ca6ff220a5232bcaa15bb7fad2dfe0a24dad45d5', class: "dropdown-content" }, h("li", { key: '3927e38439332e8ea6966ff02c24767b9992dfc4', class: "filter-container" }, h("ir-icons", { key: 'f8c2e22e81c60a18b979160ae0522f3332dbe062', name: "search", svgClassName: "filter-icon" }), h("input", { key: 'e76dff54a3190a7ecf5f94f53605e5d83e8a9d00', placeholder: localizedWords.entries.Lcz_Search, ref: el => (this.searchInput = el), type: "text", onInput: this.handleFilterInputChange.bind(this), class: "filter-input", onKeyDown: this.handleAutoCompleteKeyDown.bind(this) })), this.filteredCountries.map((value, index) => (h("li", { "data-state": this.currentHighlightedIndex === index ? 'checked' : 'unchecked', "data-highlighted": this.currentHighlightedIndex === index ? 'true' : 'false', class: "combobox-item", key: index, role: "option", onClick: () => {
                this.selectItem(index);
            }, onMouseOver: () => {
                this.currentHighlightedIndex = index;
            } }, h("div", { class: "combobox-item-content" }, h("img", { loading: "lazy", src: value.flag, alt: value.name, class: "flag-icon" }), h("span", null, value.name), h("span", null, "(", value.phone_prefix, ")")), this.selectedItem && this.selectedItem.id === value.id && h("ir-icons", { name: "check", svgClassName: "check-icon" })))))))));
    }
    static get is() { return "ir-phone-input"; }
    static get encapsulation() { return "shadow"; }
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
                "reflect": false
            },
            "mobile_number": {
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
                "attribute": "mobile_number",
                "reflect": false
            },
            "country_phone_prefix": {
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
                "attribute": "country_phone_prefix",
                "reflect": false
            },
            "country_code": {
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
                "attribute": "country_code",
                "reflect": false
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'prefix_only' | 'country_code_and_prefix'",
                    "resolved": "\"country_code_and_prefix\" | \"prefix_only\"",
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
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'country_code_and_prefix'"
            }
        };
    }
    static get states() {
        return {
            "isVisible": {},
            "currentHighlightedIndex": {},
            "selectedItem": {},
            "filteredCountries": {},
            "inputValue": {}
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
            }, {
                "method": "phoneInputBlur",
                "name": "phoneInputBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FocusEvent",
                    "resolved": "FocusEvent",
                    "references": {
                        "FocusEvent": {
                            "location": "global",
                            "id": "global::FocusEvent"
                        }
                    }
                }
            }, {
                "method": "phoneInputFocus",
                "name": "phoneInputFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FocusEvent",
                    "resolved": "FocusEvent",
                    "references": {
                        "FocusEvent": {
                            "location": "global",
                            "id": "global::FocusEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "country_code",
                "methodName": "handleCountryCodeChange"
            }, {
                "propName": "country_phone_prefix",
                "methodName": "handleCountryPhonePrefixChange"
            }, {
                "propName": "mobile_number",
                "methodName": "handleMobileNumberChange"
            }];
    }
}
//# sourceMappingURL=ir-phone-input.js.map
