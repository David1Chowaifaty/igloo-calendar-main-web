import { BookingService } from "../../../services/booking.service";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrPhoneInput {
    el;
    mode = 'default';
    /**
     * Label displayed next to the phone input.
     */
    label;
    /**
     * Initial phone number value.
     */
    value = '';
    /**
     * Disables the phone input when true.
     */
    disabled = false;
    /**
     * If true, styles the input to indicate an error state.
     */
    error = false;
    /**
     * Auth token used by the booking service (if needed).
     */
    token;
    /**
     * Two-letter language code used for country fetching.
     */
    language;
    /**
     * Default country ID used if no phone prefix is set.
     */
    default_country = null;
    /**
     * If provided, sets the phone prefix and updates selected country.
     */
    phone_prefix = null;
    /**
     * Placeholder text for the input.
     */
    placeholder;
    /**
     * Country list, used to populate prefix and dropdown.
     * If not provided, fetched from the booking service.
     */
    countries = [];
    /**
     * Identifier for test automation.
     */
    testId;
    /**
     * Floating label text that appears inside the input and “floats” above
     * when the field is focused or has a value.
     *
     * - If provided, a floating label will be rendered inside the input container.
     * - If you omit this prop but set `label`, the old left-side static label is used.
     * - If you provide both `label` and `floatingLabel`, only the floating label is shown.
     *
     * Accessibility:
     * - The floating label is tied to the input via `aria-labelledby`.
     * - You can still set `placeholder`; the label will not be replaced by it.
     *
     * Examples:
     * ```tsx
     * <ir-phone-input floating-label label="Phone" />
     * ```
     */
    floatingLabel;
    /**
     * Emits when the user changes the phone number.
     * Emits `{ phone_prefix, mobile }` object.
     *
     * Example:
     * ```tsx
     * <ir-phone-input onTextChange={(e) => console.log(e.detail)} />
     * ```
     */
    textChange;
    /**
     * Tracks current user input value.
     */
    inputValue = '';
    /**
     * Tracks visibility of the country dropdown.
     */
    isDropdownVisible = false;
    /**
     * Currently selected country (based on prefix or ID).
     */
    currentCountry;
    /** Internal: input focus state for floating label. */
    hasFocus = false;
    // private cmp_countries: ICountry[] = [];
    bookingService = new BookingService();
    /** Internal: ids for label/input pairing (a11y). */
    inputId = `ir-phone-input-${Math.random().toString(36).slice(2)}`;
    labelId = `ir-phone-input-label-${Math.random().toString(36).slice(2)}`;
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
    /**
     * Handles user input:
     * - Removes all characters except numbers and "+"
     * - Updates state and emits new phone number
     */
    handleInputChange(e) {
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: this.currentCountry?.phone_prefix, mobile: this.inputValue });
    }
    /**
     * Sets the current country based on `phone_prefix` prop or country ID.
     * Emits current phone prefix and phone number.
     */
    setCountryFromPhonePrefix() {
        let country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            country = this.countries.find(c => c.id.toString() === this.phone_prefix);
            if (!country) {
                return;
            }
        }
        this.currentCountry = { ...country };
        this.textChange.emit({ phone_prefix: this.currentCountry?.phone_prefix, mobile: this.value });
    }
    /**
     * Sets the current country by its ID.
     * Emits current phone prefix and phone number.
     */
    setCurrentCountry(id) {
        const country = this.countries.find(country => country.id === id);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = { ...country };
        this.textChange.emit({ phone_prefix: this.currentCountry?.phone_prefix, mobile: this.value });
    }
    render() {
        const useFloating = this.floatingLabel && this.label;
        const showSideLabel = !!this.label && !useFloating;
        const isActive = this.hasFocus || !!this.inputValue; // float when focused or has value
        if (this.mode === 'modern') {
            return (h(Host, null, h("div", { class: "phone-input__container" }, h("wa-input", { class: "phone-input__prefix", label: this.label, readonly: true }, h("button", { slot: "start", type: "button", onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? h("img", { src: this.currentCountry?.flag, class: "flag" }) : h("p", { class: "p-0 m-0 " }, locales.entries.Lcz_Select), this.currentCountry && h("span", null, this.currentCountry.phone_prefix), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" })))), h("wa-input", { onchange: e => this.handleInputChange(e), max: 14, value: this.inputValue, class: "phone-input__phone", placeholder: this.placeholder })), this.isDropdownVisible && (h("div", null, h("ir-combobox", { onComboboxValueChange: e => {
                    this.setCurrentCountry(+e.detail.data);
                    this.isDropdownVisible = false;
                }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                    id: c.id.toString(),
                    name: `${c.name} (${c.phone_prefix})`,
                    image: c.flag,
                })) })))));
        }
        return (h(Host, null, h("div", { class: "form-group mr-0" }, h("div", { class: "input-group row m-0 p-0 position-relative" }, showSideLabel && (h("div", { class: `input-group-prepend col-3 p-0 text-dark border-none` }, h("label", { class: `input-group-text border-theme flex-grow-1 text-dark` }, this.label))), h("div", { class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, h("button", { type: "button", onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? h("img", { src: this.currentCountry?.flag, class: "flag" }) : h("p", { class: "p-0 m-0 " }, locales.entries.Lcz_Select), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("p", { class: 'phone_prefix_label' }, this.currentCountry?.phone_prefix), useFloating && (h("label", { id: this.labelId, class: `floating-label ${isActive ? 'active' : ''}`, htmlFor: this.inputId }, this.label)), h("input", { "data-testid": this.testId, maxLength: 14, type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e), onFocus: () => {
                this.hasFocus = true;
            }, onBlur: () => {
                this.hasFocus = false;
            } })), this.isDropdownVisible && (h("div", { class: "ir-dropdown-container" }, h("ir-combobox", { onComboboxValueChange: e => {
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
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'modern' | 'default'",
                    "resolved": "\"default\" | \"modern\"",
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
                "defaultValue": "'default'"
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
                    "text": "Label displayed next to the phone input."
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
                    "text": "Initial phone number value."
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
                    "text": "Disables the phone input when true."
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
                    "text": "If true, styles the input to indicate an error state."
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
                    "text": "Auth token used by the booking service (if needed)."
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
                    "text": "Two-letter language code used for country fetching."
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
                    "text": "Default country ID used if no phone prefix is set."
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
                    "text": "If provided, sets the phone prefix and updates selected country."
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
                    "text": "Placeholder text for the input."
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
                    "text": "Country list, used to populate prefix and dropdown.\nIf not provided, fetched from the booking service."
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
                    "text": "Identifier for test automation."
                },
                "getter": false,
                "setter": false,
                "attribute": "test-id",
                "reflect": false
            },
            "floatingLabel": {
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
                    "text": "Floating label text that appears inside the input and \u201Cfloats\u201D above\nwhen the field is focused or has a value.\n\n- If provided, a floating label will be rendered inside the input container.\n- If you omit this prop but set `label`, the old left-side static label is used.\n- If you provide both `label` and `floatingLabel`, only the floating label is shown.\n\nAccessibility:\n- The floating label is tied to the input via `aria-labelledby`.\n- You can still set `placeholder`; the label will not be replaced by it.\n\nExamples:\n```tsx\n<ir-phone-input floating-label label=\"Phone\" />\n```"
                },
                "getter": false,
                "setter": false,
                "attribute": "floating-label",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "inputValue": {},
            "isDropdownVisible": {},
            "currentCountry": {},
            "hasFocus": {}
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
                    "text": "Emits when the user changes the phone number.\nEmits `{ phone_prefix, mobile }` object.\n\nExample:\n```tsx\n<ir-phone-input onTextChange={(e) => console.log(e.detail)} />\n```"
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
