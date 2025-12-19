import { Host, h } from "@stencil/core";
export class IrMobileInput {
    el;
    static idCounter = 0;
    componentId = ++IrMobileInput.idCounter;
    inputId = `ir-mobile-input-${this.componentId}`;
    labelId = `${this.inputId}-label`;
    descriptionId = `${this.inputId}-description`;
    errorId = `${this.inputId}-error`;
    countryStatusId = `${this.inputId}-country-status`;
    /** The input's size. */
    size = 'small';
    /** Visible label for the phone input */
    label = 'Phone number';
    /** Name attribute passed to the native input */
    name = 'phone';
    /** Placeholder shown when the input is empty */
    placeholder = 'Enter phone number';
    /** Help text rendered under the label */
    description;
    /** Error message announced to screen readers */
    error;
    /** Native required attribute */
    required = false;
    /** Whether the control is disabled */
    disabled = false;
    /** Selected country ISO code. Component updates this prop when a new country is chosen */
    countryCode;
    /** Input value without formatting. Component keeps this prop in sync */
    value = '';
    /**
     * Country list, used to populate prefix and dropdown.
     * If not provided, fetched from the booking service.
     */
    countries = [];
    mobileInputChange;
    mobileInputCountryChange;
    selectedCountry;
    isInvalid = false;
    componentWillLoad() {
        const resolvedCountry = this.resolveCountry(this.countryCode) ?? null;
        if (!resolvedCountry) {
            return;
        }
        if (this.el.hasAttribute('aria-invalid')) {
            this.isInvalid = Boolean(JSON.parse(this.el.getAttribute('aria-invalid')));
        }
        this.selectedCountry = resolvedCountry;
        this.countryCode = resolvedCountry?.code;
        this.value = this.value ?? '';
    }
    handleCountryCodeChange(nextCode) {
        const resolvedCountry = this.resolveCountry(nextCode);
        if (resolvedCountry && resolvedCountry !== this.selectedCountry) {
            this.selectedCountry = resolvedCountry;
        }
    }
    handleSelectedCountryChange(next, previous) {
        if (!next)
            return;
        if (!previous || next.code !== previous.code) {
            if (this.countryCode !== next.code) {
                this.countryCode = next.code;
            }
            this.mobileInputCountryChange.emit(next);
        }
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.value = newValue ?? '';
        }
    }
    handleAriaInvalidChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.isInvalid = Boolean(newValue);
        }
    }
    resolveCountry(code) {
        if (!code)
            return undefined;
        return this.countries.find(country => country.code.toUpperCase() === code.toUpperCase());
    }
    // private emitChange() {
    //   if (!this.selectedCountry) return;
    //   this.mobileInputChange.emit({
    //     country: this.selectedCountry,
    //     value: this.value ?? '',
    //     formattedValue: this.value ?? '',
    //   });
    // }
    handleCountrySelect = (event) => {
        if (this.disabled)
            return;
        event.stopPropagation();
        event.stopImmediatePropagation();
        const value = event.detail?.item?.value;
        const selected = this.countries.find(country => country.id.toString() === `${value}`);
        if (selected) {
            this.selectedCountry = selected;
        }
        requestAnimationFrame(() => {
            const innerInput = this.el.shadowRoot?.querySelector('ir-input')?.shadowRoot?.querySelector('input');
            innerInput?.focus();
        });
    };
    // private handlePlainInput = (event: Event) => {
    //   const { value } = event.target as HTMLInputElement;
    //   this.mobileInputChange.emit({ formattedValue: value, value, country: this.selectedCountry });
    //   if (this.mask) return;
    //   const nextValue = (event.target as HTMLInputElement)?.value ?? '';
    //   if (nextValue !== this.value) {
    //     this.value = nextValue;
    //     this.displayValue = nextValue;
    //     this.emitChange();
    //   }
    // };
    render() {
        const describedByIds = [this.description ? this.descriptionId : null, this.error ? this.errorId : null].filter(Boolean).join(' ') || undefined;
        return (h(Host, { key: 'fff16c49117158d40a21acf4bcbe8df5bd4f6e6b', size: 'small', role: "group", "aria-labelledby": this.labelId, "aria-describedby": describedByIds }, h("label", { key: '1245eb30129dd11d3d371ea3e397c728f16e87f7', class: "mobile-input__label", id: this.labelId, htmlFor: this.inputId }, this.label, this.required ? (h("span", { class: "mobile-input__required", "aria-hidden": "true" }, "*")) : null), this.description ? (h("p", { id: this.descriptionId, class: "mobile-input__description" }, this.description)) : null, h("div", { key: 'a12cd28f6bb93a21576147bed85f357502ed14f5', class: { 'mobile-input__container': true, 'mobile-input__container--disabled': this.disabled } }, h("wa-dropdown", { key: '86a0f47c983bf66c49f22ea48877bafbb1a26be1', "onwa-show": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": this.handleCountrySelect, class: "mobile-input__prefix-dropdown" }, h("button", { key: 'a76150c6cd2b51403251d5d5d22e972233488894', "aria-invalid": String(this.isInvalid && !this.selectedCountry), slot: "trigger", type: "button", class: "mobile-input__trigger", disabled: this.disabled, "aria-haspopup": "listbox", "aria-label": "Change country calling code" }, h("div", { key: '11b276d1af8e208b080bd3223ca0b197aa951117', class: "mobile-input__phone-country", style: { marginRight: '1rem' } }, this.selectedCountry ? h("img", { src: this.selectedCountry?.flag, alt: this.selectedCountry?.name, class: "mobile-input__logo" }) : h("span", null, "Select")), h("wa-icon", { key: '5a4c15b39491a8e3cf0acdb5e9a0a187f4e257f5', class: "mobile-input__phone-country-caret", name: "chevron-down", "aria-hidden": "true" })), h("span", { key: '80d382dcb84aefbaefb5eb2b92d52ac4adb03433', class: "sr-only", id: this.countryStatusId, "aria-live": "polite" }, this.selectedCountry ? `Selected country ${this.selectedCountry.name} ${this.selectedCountry.phone_prefix}` : 'Select a country'), this.countries.map(country => (h("wa-dropdown-item", { value: country.id.toString() }, h("div", { class: "mobile-input__phone-country", role: "option", "aria-selected": this.selectedCountry?.id === country.id ? 'true' : 'false' }, h("img", { src: country.flag, alt: country.name, class: "mobile-input__logo" }), h("span", { class: "mobile-input__country-name" }, country.name), h("span", { class: "mobile-input__country-prefix" }, country.phone_prefix)))))), h("ir-input", { key: '2b8f87695b0e4f64b31bf246c12b5e42238b998e', "aria-invalid": String(this.isInvalid && (this.value ?? '').length < 4), type: "tel", inputMode: "tel", autocomplete: "off", disabled: this.disabled, placeholder: this.placeholder, defaultValue: this.value, value: this.value, class: "phone__input", "onText-change": e => {
                const value = e.detail;
                this.value = value;
                this.mobileInputChange.emit({ formattedValue: value, value, country: this.selectedCountry });
            } }, this.selectedCountry && h("span", { key: '2ddf3adebc4771289c871577c0d795e8c8063ea0', slot: "start" }, this.selectedCountry?.phone_prefix))), this.error ? (h("p", { id: this.errorId, class: "mobile-input__error", role: "alert" }, this.error)) : null));
    }
    static get is() { return "ir-mobile-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-mobile-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-mobile-input.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['size']",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "NativeWaInput": {
                            "location": "import",
                            "path": "../ir-input/ir-input",
                            "id": "src/components/ui/ir-input/ir-input.tsx::NativeWaInput"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The input's size."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'small'"
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
                    "text": "Visible label for the phone input"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'Phone number'"
            },
            "name": {
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
                    "text": "Name attribute passed to the native input"
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": false,
                "defaultValue": "'phone'"
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
                    "text": "Placeholder shown when the input is empty"
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "'Enter phone number'"
            },
            "description": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Help text rendered under the label"
                },
                "getter": false,
                "setter": false,
                "attribute": "description",
                "reflect": false
            },
            "error": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Error message announced to screen readers"
                },
                "getter": false,
                "setter": false,
                "attribute": "error",
                "reflect": false
            },
            "required": {
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
                    "text": "Native required attribute"
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Whether the control is disabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "countryCode": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Selected country ISO code. Component updates this prop when a new country is chosen"
                },
                "getter": false,
                "setter": false,
                "attribute": "country-code",
                "reflect": true
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Input value without formatting. Component keeps this prop in sync"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true,
                "defaultValue": "''"
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
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry"
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
            }
        };
    }
    static get states() {
        return {
            "selectedCountry": {},
            "isInvalid": {}
        };
    }
    static get events() {
        return [{
                "method": "mobileInputChange",
                "name": "mobile-input-change",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IrMobileInputChangeDetail",
                    "resolved": "IrMobileInputChangeDetail",
                    "references": {
                        "IrMobileInputChangeDetail": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-mobile-input/ir-mobile-input.tsx",
                            "id": "src/components/ui/ir-mobile-input/ir-mobile-input.tsx::IrMobileInputChangeDetail"
                        }
                    }
                }
            }, {
                "method": "mobileInputCountryChange",
                "name": "mobile-input-country-change",
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "countryCode",
                "methodName": "handleCountryCodeChange"
            }, {
                "propName": "selectedCountry",
                "methodName": "handleSelectedCountryChange"
            }, {
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "aria-invalid",
                "methodName": "handleAriaInvalidChange"
            }];
    }
}
//# sourceMappingURL=ir-mobile-input.js.map
