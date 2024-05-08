import { h, Fragment } from "@stencil/core";
import { createPopper } from "@popperjs/core";
import localization_store from "../../../stores/app.store";
import { CommonService } from "../../../services/api/common.service";
import app_store from "../../../stores/app.store";
import { updateUserFormData } from "../../../stores/checkout.store";
export class IrPhoneInput {
    constructor() {
        this.popoverInstance = null;
        this.commonService = new CommonService();
        this.countries = [];
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
        this.error = undefined;
        this.mobile_number = '';
        this.isVisible = false;
        this.currentHighlightedIndex = -1;
        this.selectedItem = undefined;
        this.filteredCountries = [];
        this.inputValue = '';
    }
    async componentWillLoad() {
        this.commonService.setToken(app_store.app_data.token);
        await this.initializeCountries();
        this.inputValue = this.mobile_number;
    }
    componentDidLoad() {
        this.initializePopover();
    }
    async initializeCountries() {
        const [user_country, countries] = await Promise.all([this.commonService.getUserDefaultCountry(), await this.commonService.getCountries(app_store.userPreferences.language_id)]);
        this.countries = countries;
        if (user_country) {
            const selectedCountry = this.countries.find(c => c.id === user_country.COUNTRY_ID);
            if (selectedCountry) {
                updateUserFormData('country_id', selectedCountry.id);
                this.selectedItem = selectedCountry;
                this.textChange.emit({ phone_prefix: this.selectedItem.phone_prefix, mobile: '' });
            }
        }
        this.filteredCountries = this.countries;
    }
    initializePopover() {
        if (this.triggerElement && this.contentElement) {
            this.popoverInstance = createPopper(this.triggerElement, this.contentElement, {
                placement: localization_store.dir === 'LTR' ? 'bottom-start' : 'bottom-end',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 3],
                        },
                    },
                ],
            });
        }
    }
    async toggleVisibility() {
        this.isVisible = !this.isVisible;
        this.filteredCountries = this.countries;
        if (this.isVisible && this.popoverInstance) {
            setTimeout(() => this.searchInput.focus(), 20);
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
        this.filteredCountries = this.countries;
        this.phoneInput.focus();
        this.toggleVisibility();
    }
    filterData(str) {
        if (str === '') {
            return (this.filteredCountries = [...this.countries]);
        }
        this.filteredCountries = [...this.countries.filter(d => d.name.toLowerCase().startsWith(str.trim()))];
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
        this.textChange.emit({ phone_prefix: (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.inputValue });
    }
    render() {
        var _a, _b, _c;
        return (h("div", { key: '120726a1b2846e3e3507d5af77bda5c3112bfb2d', ref: el => (this.triggerElement = el), class: "w-full bg-white" }, h("div", { key: '78c434dd7541b0d8d3b97b04f005e35d84e26145', class: `input-trigger ${this.error ? 'error' : ''}  rounded-md border text-[var(--gray-600)] border-[var(--gray-300,#D0D5DD)] w-full bg-white flex  text-sm` }, h("div", { key: 'bea588b8ffaa67a620524d5736addfba43583059', class: 'flex flex-col px-4' }, h("label", { key: '7d9d2fd09d08a35e5fbda57d8c5bec469790b02e', htmlFor: "country_picker" }, "Country"), h("div", { key: '7882976315581e5d076cdbae4a4ff765414a38ff', id: "country_picker", onClick: () => {
                this.toggleVisibility();
            }, class: "flex items-center gap-2  input-subtrigger" }, this.selectedItem ? (h(Fragment, null, h("img", { src: (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.flag, alt: (_b = this.selectedItem) === null || _b === void 0 ? void 0 : _b.name, class: "h-4 rounded" }), h("span", null, (_c = this.selectedItem) === null || _c === void 0 ? void 0 : _c.phone_prefix))) : (h("span", null, "Select")), h("svg", { key: 'bc8b01d6bf5dadf9e605cd218d70ea4840206ba6', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '8f0621389e16880b698bf69961f758bd085b50f2', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })))), h("div", { key: '0256981267d9effd3ba7342422ce2ba4c32f2162', class: 'flex flex-col flex-1' }, h("label", { key: '6d7fc47caa707ce6da6fcb79c43fdb1825176521', htmlFor: "phone_number" }, "Mobile number"), h("input", { key: '11b0c7fe49f880537ade7704d5fd7dd22859ecc2', type: "phone", ref: el => (this.phoneInput = el), onInput: e => this.handleInputChange(e), id: "phone_number", value: this.inputValue, class: "input-subtrigger" }))), h("div", { key: 'c2be327701aff89474af127faafb4b232e75449a', ref: el => (this.contentElement = el), class: 'z-50' }, this.isVisible && (h("ul", { class: "dropdown-content w-full" }, h("li", { class: "filter-container" }, h("ir-icons", { name: "search", svgClassName: "h-4 w-4" }), h("input", { placeholder: "Search...", ref: el => (this.searchInput = el), type: "text", onInput: this.handleFilterInputChange.bind(this), class: "filter-input", onKeyDown: this.handleAutoCompleteKeyDown.bind(this) })), this.filteredCountries.map((value, index) => (h("li", { "data-state": this.currentHighlightedIndex === index ? 'checked' : 'unchecked', "data-highlighted": this.currentHighlightedIndex === index ? 'true' : 'false', class: "combobox-item", key: index, role: "option",
            // aria-disabled={item.disabled ? 'true' : 'false'}
            // aria-selected={this.selectedItemName === item.item ? 'true' : 'false'}
            onClick: () => {
                this.selectItem(index);
                // this.disableKeyboardPriority();
            }, onMouseOver: () => {
                this.currentHighlightedIndex = index;
            } }, h("div", { class: "flex items-center gap-2" }, h("img", { src: value.flag, alt: value.name, class: "h-5 rounded" }), h("span", null, value.name), h("span", null, "(", value.phone_prefix, ")")), this.selectedItem && this.selectedItem.id === value.id && h("ir-icons", { name: "check", svgClassName: "size-4" })))))))));
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
                "attribute": "mobile_number",
                "reflect": false,
                "defaultValue": "''"
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
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-phone-input.js.map
