import { Host, h } from "@stencil/core";
import IMask from "imask";
import { masks } from "./countries_masks";
export class IrMobileInput {
    static idCounter = 0;
    componentId = ++IrMobileInput.idCounter;
    inputId = `ir-mobile-input-${this.componentId}`;
    labelId = `${this.inputId}-label`;
    descriptionId = `${this.inputId}-description`;
    errorId = `${this.inputId}-error`;
    countryStatusId = `${this.inputId}-country-status`;
    inputRef;
    mask;
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
    displayValue = '';
    componentWillLoad() {
        const resolvedCountry = this.resolveCountry(this.countryCode) ?? null;
        if (!resolvedCountry) {
            return;
        }
        this.selectedCountry = resolvedCountry;
        this.countryCode = resolvedCountry?.code;
        this.displayValue = this.value ?? '';
    }
    componentDidLoad() {
        requestAnimationFrame(() => this.initializeMask());
    }
    disconnectedCallback() {
        this.destroyMask();
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
            this.rebuildMask();
            this.mobileInputCountryChange.emit(next);
        }
    }
    handleValueChange(newValue, oldValue) {
        // if (newValue === oldValue) return;
        // if (this.mask) {
        //   if (this.mask.unmaskedValue !== (newValue ?? '')) {
        //     this.mask.unmaskedValue = newValue ?? '';
        //   }
        //   this.displayValue = this.mask.value;
        // } else {
        //   this.displayValue = newValue ?? '';
        //   if (this.inputRef && this.inputRef.value !== this.displayValue) {
        //     this.inputRef.value = this.displayValue;
        //   }
        // }
        if (newValue !== oldValue) {
            if (this.mask) {
                this.mask.value = newValue;
            }
        }
    }
    resolveCountry(code) {
        if (!code)
            return undefined;
        return this.countries.find(country => country.code.toUpperCase() === code.toUpperCase());
    }
    initializeMask() {
        if (!this.inputRef)
            return;
        const maskConfig = this.buildMaskOptions(this.selectedCountry);
        if (!maskConfig) {
            this.destroyMask();
            return;
        }
        this.mask = IMask(this.inputRef, maskConfig);
        if (this.value) {
            this.mask.unmaskedValue = this.value;
        }
        this.displayValue = this.mask.value;
        this.mask.on('accept', () => {
            if (!this.mask)
                return;
            const nextValue = this.mask.unmaskedValue ?? '';
            if (nextValue !== this.value) {
                this.value = nextValue;
            }
            this.displayValue = this.mask.value;
            this.emitChange();
        });
    }
    rebuildMask() {
        this.destroyMask();
        this.initializeMask();
    }
    destroyMask() {
        if (this.mask) {
            this.mask.destroy();
            this.mask = undefined;
        }
        this.displayValue = this.value ?? '';
    }
    buildMaskOptions(country) {
        if (!country)
            return undefined;
        const iso = country.code?.toUpperCase();
        if (!iso)
            return undefined;
        const rawMask = masks[iso];
        if (!rawMask)
            return undefined;
        const normalizePattern = (pattern) => pattern.replace(/#/g, '0');
        if (Array.isArray(rawMask)) {
            return {
                mask: rawMask.map(pattern => ({ mask: this.selectedCountry.phone_prefix + ' ' + normalizePattern(pattern) })),
                lazy: false,
                placeholderChar: '_',
            };
        }
        return {
            mask: this.selectedCountry.phone_prefix + ' ' + normalizePattern(rawMask),
            lazy: false,
            placeholderChar: '_',
        };
    }
    emitChange() {
        if (!this.selectedCountry)
            return;
        this.mobileInputChange.emit({
            country: this.selectedCountry,
            value: this.value ?? '',
            formattedValue: this.displayValue ?? '',
        });
    }
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
            this.inputRef?.focus();
        });
    };
    handlePlainInput = (event) => {
        if (this.mask)
            return;
        const nextValue = event.target?.value ?? '';
        if (nextValue !== this.value) {
            this.value = nextValue;
            this.displayValue = nextValue;
            this.emitChange();
        }
    };
    render() {
        const describedByIds = [this.description ? this.descriptionId : null, this.error ? this.errorId : null].filter(Boolean).join(' ') || undefined;
        return (h(Host, { key: 'fa8a35fa12841c3db883c7ceba4c9b197253436d', size: "small", role: "group", "aria-labelledby": this.labelId, "aria-describedby": describedByIds }, h("label", { key: 'f4a474194e2ef38367e524990d9eff1073027678', class: "mobile-input__label", id: this.labelId, htmlFor: this.inputId }, this.label, this.required ? (h("span", { class: "mobile-input__required", "aria-hidden": "true" }, "*")) : null), this.description ? (h("p", { id: this.descriptionId, class: "mobile-input__description" }, this.description)) : null, h("div", { key: 'd405c2baa25dd00a73a2d5629e699beb3beb2bc5', class: { 'mobile-input__container': true, 'mobile-input__container--disabled': this.disabled } }, h("wa-dropdown", { key: '37f98c367cde1ea9ebdbfa408d6cd3933f2c2a0d', "onwa-show": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": this.handleCountrySelect, class: "mobile-input__prefix-dropdown" }, h("button", { key: 'c95b389e9b1242213d6e68619e59c727870b53fc', slot: "trigger", type: "button", class: "mobile-input__trigger", disabled: this.disabled, "aria-haspopup": "listbox", "aria-label": "Change country calling code" }, h("div", { key: '24210a9b07c72f4d1ffaff4ab4dc0a952108b7e9', class: "mobile-input__phone-country", style: { marginRight: '1rem' } }, this.selectedCountry ? h("img", { src: this.selectedCountry?.flag, alt: this.selectedCountry?.name, class: "mobile-input__logo" }) : h("span", null, "Select")), h("wa-icon", { key: '76ebd50d6ff06153ae0beca62594d7024ecc4576', class: "mobile-input__phone-country-caret", name: "chevron-down", "aria-hidden": "true" })), h("span", { key: '03fa67502719fb8173824cf6a212a51b21fbf310', class: "sr-only", id: this.countryStatusId, "aria-live": "polite" }, this.selectedCountry ? `Selected country ${this.selectedCountry.name} ${this.selectedCountry.phone_prefix}` : 'Select a country'), this.countries.map(country => (h("wa-dropdown-item", { value: country.id.toString() }, h("div", { class: "mobile-input__phone-country", role: "option", "aria-selected": this.selectedCountry?.id === country.id ? 'true' : 'false' }, h("img", { src: country.flag, alt: country.name, class: "mobile-input__logo" }), h("span", { class: "mobile-input__country-name" }, country.name), h("span", { class: "mobile-input__country-prefix" }, country.phone_prefix)))))), h("input", { key: '1afc1b1e5d12b7310bdba2f40e898cb70502930b', ref: el => (this.inputRef = el), id: this.inputId, class: {
                'mobile-input__phone': true,
                'mobile-input__phone--invalid': Boolean(this.error),
            }, name: this.name, type: "tel", inputmode: "tel", autocomplete: "tel", "aria-required": this.required ? 'true' : undefined, "aria-invalid": this.error ? 'true' : 'false', "aria-describedby": describedByIds, disabled: this.disabled, placeholder: this.placeholder, value: this.displayValue, onInput: this.handlePlainInput })), this.error ? (h("p", { id: this.errorId, class: "mobile-input__error", role: "alert" }, this.error)) : null));
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
            "displayValue": {}
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
            }];
    }
}
//# sourceMappingURL=ir-mobile-input.js.map
