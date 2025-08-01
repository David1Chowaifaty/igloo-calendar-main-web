import { Host, h } from "@stencil/core";
export class IrMCombobox {
    constructor() {
        this.type = 'select';
        this.label = '';
        this.placeholder = '';
        this.options = [];
        this.value = '';
        this.disabled = false;
        this.readonly = false;
        this.isOpen = false;
        this.activeOptionIndex = -1;
        this.inputValue = '';
        this.selectedOptions = [];
        this.comboboxId = `combo-${Math.random().toString(36).substr(2, 9)}`;
        this.listboxId = `listbox-${this.comboboxId}`;
        this.labelId = `label-${this.comboboxId}`;
    }
    componentWillLoad() {
        this.initializeValue();
    }
    handleDocumentClick(event) {
        if (!this.el.contains(event.target)) {
            this.isOpen = false;
        }
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.navigateOptions(1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.navigateOptions(-1);
                break;
            case 'Enter':
                event.preventDefault();
                this.selectCurrentOption();
                break;
            case 'Escape':
                this.isOpen = false;
                break;
        }
    }
    initializeValue() {
        if (this.type === 'multiselect' && Array.isArray(this.value)) {
            this.selectedOptions = this.options.filter(option => this.value.includes(option.value));
        }
        else if (typeof this.value === 'string') {
            this.inputValue = this.value;
            const selectedOption = this.options.find(option => option.value === this.value);
            if (selectedOption && this.type === 'multiselect') {
                this.selectedOptions = [selectedOption];
            }
        }
    }
    navigateOptions(direction) {
        if (!this.isOpen) {
            this.isOpen = true;
            return;
        }
        const newIndex = this.activeOptionIndex + direction;
        if (newIndex >= 0 && newIndex < this.options.length) {
            this.activeOptionIndex = newIndex;
        }
    }
    selectCurrentOption() {
        if (this.activeOptionIndex >= 0 && this.activeOptionIndex < this.options.length) {
            this.selectOption(this.options[this.activeOptionIndex]);
        }
    }
    selectOption(option) {
        if (option.disabled)
            return;
        if (this.type === 'multiselect') {
            const isSelected = this.selectedOptions.some(selected => selected.value === option.value);
            if (isSelected) {
                this.selectedOptions = this.selectedOptions.filter(selected => selected.value !== option.value);
            }
            else {
                this.selectedOptions = [...this.selectedOptions, option];
            }
            this.irChange.emit(this.selectedOptions.map(opt => opt.value));
        }
        else {
            this.inputValue = option.label;
            this.isOpen = false;
            this.irChange.emit(option.value);
        }
    }
    handleInputChange(event) {
        const target = event.target;
        this.inputValue = target.value;
        this.irInput.emit(this.inputValue);
        if (!this.isOpen) {
            this.isOpen = true;
        }
    }
    handleInputFocus() {
        this.irFocus.emit();
        if (this.type !== 'editable' || this.options.length > 0) {
            this.isOpen = true;
        }
    }
    handleInputBlur() {
        this.irBlur.emit();
    }
    toggleCombobox() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    removeSelectedOption(option) {
        this.selectedOptions = this.selectedOptions.filter(selected => selected.value !== option.value);
        this.irChange.emit(this.selectedOptions.map(opt => opt.value));
    }
    getFilteredOptions() {
        if (this.type !== 'editable' || !this.inputValue) {
            return this.options;
        }
        return this.options.filter(option => option.label.toLowerCase().includes(this.inputValue.toLowerCase()));
    }
    render() {
        const filteredOptions = this.getFilteredOptions();
        return (h(Host, { key: 'ae60fb815292975a7cc9ee6ffb19cd01e2cf4b8a' }, this.label && (h("label", { key: '945bf90e3385714e6e3489be8c73bcdaca5882c6', id: this.labelId, class: "combo-label" }, this.label)), this.type === 'multiselect' && this.selectedOptions.length > 0 && (h("ul", { key: '58d0c9cf223ec839b6cef0c96b772746cd6932ec', class: "selected-options" }, this.selectedOptions.map(option => (h("li", { key: option.value }, h("button", { type: "button", class: "remove-option", onClick: () => this.removeSelectedOption(option), "aria-label": `Remove ${option.label}` }, option.label)))))), h("div", { key: 'c02cb1f863bb61e2cde3773ada4f821d96a2c322', class: `combo ${this.isOpen ? 'open' : ''}` }, this.type === 'select' ? (h("div", { id: this.comboboxId, class: "combo-input", role: "combobox", "aria-expanded": this.isOpen.toString(), "aria-haspopup": "listbox", "aria-controls": this.listboxId, "aria-labelledby": this.label ? this.labelId : undefined, tabindex: this.disabled ? -1 : 0, onClick: () => this.toggleCombobox(), onFocus: () => this.handleInputFocus(), onBlur: () => this.handleInputBlur() }, this.inputValue || this.placeholder)) : (h("input", { id: this.comboboxId, class: "combo-input", type: "text", role: "combobox", "aria-expanded": this.isOpen.toString(), "aria-haspopup": "listbox", "aria-controls": this.listboxId, "aria-labelledby": this.label ? this.labelId : undefined, value: this.inputValue, placeholder: this.placeholder, disabled: this.disabled, readonly: this.readonly, onInput: (e) => this.handleInputChange(e), onFocus: () => this.handleInputFocus(), onBlur: () => this.handleInputBlur() })), this.isOpen && (h("div", { key: '9b18cffa2b6a546755fae64a09e61a09690e2e4f', class: "combo-menu", role: "listbox", id: this.listboxId }, filteredOptions.map((option, index) => (h("div", { key: option.value, class: `combo-option ${index === this.activeOptionIndex ? 'option-current' : ''} ${this.type === 'multiselect' && this.selectedOptions.some(selected => selected.value === option.value)
                ? 'option-selected'
                : ''}`, role: "option", "aria-selected": this.type === 'multiselect'
                ? this.selectedOptions.some(selected => selected.value === option.value).toString()
                : (this.inputValue === option.label).toString(), onClick: () => this.selectOption(option) }, option.label))), filteredOptions.length === 0 && (h("div", { key: '5245bdc7f8b4588873f1562a2c0d068b9b92c40e', class: "combo-option" }, "No options available")))))));
    }
    static get is() { return "ir-m-combobox"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-m-combobox.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-m-combobox.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ComboboxType",
                    "resolved": "\"editable\" | \"multiselect\" | \"select\"",
                    "references": {
                        "ComboboxType": {
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-m-combobox/ir-m-combobox.tsx",
                            "id": "src/components/ir-m-combobox/ir-m-combobox.tsx::ComboboxType"
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
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'select'"
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
                "reflect": false,
                "defaultValue": "''"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "''"
            },
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ComboboxOption[]",
                    "resolved": "ComboboxOption[]",
                    "references": {
                        "ComboboxOption": {
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-m-combobox/ir-m-combobox.tsx",
                            "id": "src/components/ir-m-combobox/ir-m-combobox.tsx::ComboboxOption"
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
            "value": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "readonly": {
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
                "attribute": "readonly",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "activeOptionIndex": {},
            "inputValue": {},
            "selectedOptions": {}
        };
    }
    static get events() {
        return [{
                "method": "irChange",
                "name": "irChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                }
            }, {
                "method": "irInput",
                "name": "irInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "irFocus",
                "name": "irFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "irBlur",
                "name": "irBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleDocumentClick",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-m-combobox.js.map
