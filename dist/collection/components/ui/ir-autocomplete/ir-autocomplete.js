var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ClickOutside } from "../../../decorators/ClickOutside";
import { Host, h } from "@stencil/core";
import { createSlotManager } from "../../../utils/slot";
export class IrAutocomplete {
    el;
    /**
     * Emits `combobox-change` even when the selected value does not change.
     *
     * @default true
     */
    emitOnSameValue = true;
    /** Whether the autocomplete dropdown is open. */
    open = false;
    /** Placement of the autocomplete dropdown relative to the input. */
    placement = 'bottom';
    /** Name attribute forwarded to the underlying input element. */
    name;
    /** The value of the input. */
    value = '';
    /**
     * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
     * to `text`.
     */
    type = 'text';
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue;
    /** The input's size. */
    size = 'small';
    /** The input's visual appearance. */
    appearance;
    /** Draws a pill-style input with rounded edges. */
    pill;
    returnMaskedValue = false;
    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    label;
    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    hint;
    /** Adds a clear button when the input is not empty. */
    withClear;
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder;
    /** Makes the input readonly. */
    readonly;
    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    passwordToggle;
    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    passwordVisible;
    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    withoutSpinButtons;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form;
    /** Makes the input a required field. */
    required;
    /** A regular expression pattern to validate input against. */
    pattern;
    /** The minimum length of input that will be considered valid. */
    minlength;
    /** The maximum length of input that will be considered valid. */
    maxlength;
    /** The input's minimum value. Only applies to date and number input types. */
    min;
    /** The input's maximum value. Only applies to date and number input types. */
    max;
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to date and number input types.
     */
    step;
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize;
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect;
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete = 'off';
    /** Indicates that the input should receive focus on page load. */
    autofocus;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint;
    /** Enables spell checking on the input. */
    spellcheck;
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode;
    /**
     * Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
     */
    withLabel;
    /**
     * Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
     */
    withHint;
    /** Mask for the input field (optional) */
    mask;
    /** Disables the input. */
    disabled;
    /**
     * Custom CSS classes applied to the inner `<ir-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass;
    options = [];
    slotStateVersion = 0;
    textChange;
    comboboxChange;
    currentOption;
    listboxRef;
    inputRef;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hint'];
    slotManager = createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotStateVersion++;
    });
    componentWillLoad() {
        this.slotManager = createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotStateVersion++;
        });
        this.slotManager.initialize();
        this.updateOptionsFromSlot();
        this.syncSelectedFromValue(this.value);
    }
    componentDidLoad() {
        this.slotManager.setupListeners();
        this.listboxRef?.addEventListener('click', this.handleOptionClick);
    }
    disconnectedCallback() {
        this.slotManager.destroy();
        this.listboxRef?.removeEventListener('click', this.handleOptionClick);
    }
    async show() {
        if (this.disabled)
            return;
        this.open = true;
    }
    async focusInput() {
        if (this.disabled)
            return;
        this.inputRef?.focusInput();
    }
    async hide() {
        this.open = false;
    }
    handleOpenChange(newValue) {
        if (!this.listboxRef)
            return;
        this.listboxRef.hidden = !newValue;
        if (!newValue) {
            this.clearCurrentOption();
            return;
        }
        this.ensureCurrentOption();
        if (this.currentOption) {
            requestAnimationFrame(() => {
                if (this.currentOption) {
                    this.scrollIntoView(this.currentOption, this.listboxRef, 'vertical', 'auto');
                }
            });
        }
    }
    getOffset(element, parent) {
        return {
            top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
            left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left),
        };
    }
    scrollIntoView(element, container, direction = 'vertical', behavior = 'smooth') {
        const offset = this.getOffset(element, container);
        const offsetTop = offset.top + container.scrollTop;
        const offsetLeft = offset.left + container.scrollLeft;
        const minX = container.scrollLeft;
        const maxX = container.scrollLeft + container.offsetWidth;
        const minY = container.scrollTop;
        const maxY = container.scrollTop + container.offsetHeight;
        if (direction === 'horizontal' || direction === 'both') {
            if (offsetLeft < minX) {
                container.scrollTo({ left: offsetLeft, behavior });
            }
            else if (offsetLeft + element.clientWidth > maxX) {
                container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
            }
        }
        if (direction === 'vertical' || direction === 'both') {
            if (offsetTop < minY) {
                container.scrollTo({ top: offsetTop, behavior });
            }
            else if (offsetTop + element.clientHeight > maxY) {
                container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
            }
        }
    }
    handleValueChange(newValue) {
        this.syncSelectedFromValue(newValue);
    }
    getAllOptions() {
        return this.options;
    }
    updateOptionsFromSlot(slotEl) {
        const slot = slotEl ?? this.listboxRef?.querySelector('slot');
        if (!slot) {
            this.options = Array.from(this.el.querySelectorAll('ir-autocomplete-option'));
            return;
        }
        const assigned = slot.assignedElements({ flatten: true });
        this.options = assigned.filter(el => el.tagName.toLowerCase() === 'ir-autocomplete-option');
    }
    clearCurrentOption() {
        const allOptions = this.getAllOptions();
        allOptions.forEach(el => {
            el.current = false;
            el.tabIndex = -1;
        });
        this.currentOption = undefined;
    }
    ensureCurrentOption() {
        const allOptions = this.getAllOptions().filter(option => !option.disabled);
        if (!allOptions.length) {
            this.clearCurrentOption();
            return;
        }
        const selected = allOptions.find(option => option.selected);
        const nextOption = selected ?? this.currentOption ?? allOptions[0];
        if (nextOption) {
            this.setCurrentOption(nextOption, { scroll: false });
        }
    }
    setCurrentOption(option, options = {}) {
        if (!option || option.disabled)
            return;
        const allOptions = this.getAllOptions();
        // Clear selection
        allOptions.forEach(el => {
            el.current = false;
            el.tabIndex = -1;
        });
        // Select the target option
        this.currentOption = option;
        option.current = true;
        option.tabIndex = 0;
        if (options.scroll && this.listboxRef) {
            this.scrollIntoView(option, this.listboxRef, 'vertical', 'auto');
        }
    }
    getOptionLabel(option) {
        if (option.label)
            return option.label;
        return option.textContent?.trim() ?? '';
    }
    getOptionValue(option) {
        return option.value ?? this.getOptionLabel(option);
    }
    syncSelectedFromValue(value) {
        const allOptions = this.getAllOptions();
        let selectedOption;
        allOptions.forEach(option => {
            const matches = this.getOptionValue(option) === value || this.getOptionLabel(option) === value;
            option.selected = matches;
            if (matches) {
                selectedOption = option;
            }
        });
        if (selectedOption) {
            this.currentOption = selectedOption;
        }
        else if (this.currentOption && this.getOptionValue(this.currentOption) !== value && this.getOptionLabel(this.currentOption) !== value) {
            this.currentOption = undefined;
        }
    }
    selectOption(option) {
        if (!option || option.disabled)
            return;
        const allOptions = this.getAllOptions();
        allOptions.forEach(el => {
            el.selected = false;
        });
        option.selected = true;
        this.currentOption = option;
        const emitValue = this.getOptionValue(option);
        const displayValue = this.getOptionLabel(option);
        if (this.emitOnSameValue || (!this.emitOnSameValue && emitValue !== this.value)) {
            this.value = displayValue;
            this.comboboxChange.emit(emitValue);
        }
        this.hide();
        requestAnimationFrame(() => this.inputRef?.focusInput());
    }
    handleOptionClick = (event) => {
        const target = event.target;
        const option = target?.closest('ir-autocomplete-option');
        if (!option)
            return;
        event.preventDefault();
        event.stopPropagation();
        this.selectOption(option);
    };
    handleTextChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextValue = event.detail ?? '';
        if (nextValue === this.value) {
            if (!this.open && this.getAllOptions().length) {
                this.show();
            }
            return;
        }
        this.value = nextValue;
        this.textChange.emit(nextValue);
        if (!this.open && this.getAllOptions().length) {
            this.show();
        }
    };
    handleOptionsSlotChange = (event) => {
        this.updateOptionsFromSlot(event.target);
        this.syncSelectedFromValue(this.value);
        if (this.open) {
            this.ensureCurrentOption();
        }
    };
    handleKeydownChange = (event) => {
        if (event.key === 'Escape' && this.open) {
            event.preventDefault();
            event.stopPropagation();
            this.hide();
            return;
        }
        if (event.key === 'Enter') {
            if (this.open && this.currentOption) {
                event.preventDefault();
                event.stopPropagation();
                this.selectOption(this.currentOption);
            }
            return;
        }
        if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
            const allOptions = this.getAllOptions().filter(option => !option.disabled);
            if (!allOptions.length)
                return;
            const baseOption = this.currentOption && allOptions.includes(this.currentOption) ? this.currentOption : allOptions[0];
            const currentIndex = allOptions.indexOf(baseOption);
            let newIndex = Math.max(0, currentIndex);
            // Prevent scrolling
            event.preventDefault();
            // Open it
            if (!this.open) {
                this.show();
                // If an option is already selected, stop here because we want that one to remain highlighted when the listbox
                // opens for the first time
                if (this.currentOption || allOptions.some(option => option.selected)) {
                    return;
                }
            }
            if (event.key === 'ArrowDown') {
                newIndex = currentIndex + 1;
                if (newIndex > allOptions.length - 1)
                    newIndex = 0;
            }
            else if (event.key === 'ArrowUp') {
                newIndex = currentIndex - 1;
                if (newIndex < 0)
                    newIndex = allOptions.length - 1;
            }
            else if (event.key === 'Home') {
                newIndex = 0;
            }
            else if (event.key === 'End') {
                newIndex = allOptions.length - 1;
            }
            this.setCurrentOption(allOptions[newIndex], { scroll: true });
        }
    };
    render() {
        return (h(Host, { key: '8fdb40c17653f155d626ed15ff54a389cc072b21' }, h("wa-popup", { key: 'c465686c468a8ebd0334f462f5c658a18a8b5d0d', active: this.open, flip: true, shift: true, sync: "width", "auto-size": "vertical", "auto-size-padding": 10, placement: this.placement, exportparts: "popup, arrow, hover-bridge" }, h("ir-input", { key: 'd4811114670eeb62e8ca5ca03f743205ac7b1253', slot: "anchor", ref: el => (this.inputRef = el), onKeyDown: this.handleKeydownChange, "onText-change": this.handleTextChange, name: this.name, value: this.value, type: this.type, defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, inputClass: this.inputClass, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, mask: this.mask, returnMaskedValue: this.returnMaskedValue, disabled: this.disabled, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.slotManager.hasSlot('label') && h("slot", { key: '2c18cdba797ee7e2b305eabbc874536b30266f5b', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && h("slot", { key: '33102e9ef4c77b86a22921e622d641df6c1e7f8d', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && h("slot", { key: '5ba0e450c67f7d7163491006e734319e604ebfcd', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && h("slot", { key: 'a6dfa5965fa45145b0a19550df9da9bd07985132', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && h("slot", { key: '00e0d75ec89720b0e70184d9fb6db1be08b0584e', name: "hint", slot: "hint" })), h("div", { key: '5ddf13b1e23865395bd38f7e62d2d8a56859a2cb', id: "listbox", ref: el => (this.listboxRef = el), role: "listbox", "aria-expanded": this.open ? 'true' : 'false', "aria-multiselectable": 'false', "aria-labelledby": "label", part: "listbox", class: "listbox", tabindex: "-1", hidden: !this.open, onKeyDown: this.handleKeydownChange }, h("slot", { key: 'c96cd13096f85077926861fd87a468b0bdf2c2e1', onSlotchange: this.handleOptionsSlotChange })))));
    }
    static get is() { return "ir-autocomplete"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-autocomplete.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-autocomplete.css"]
        };
    }
    static get properties() {
        return {
            "emitOnSameValue": {
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
                    "tags": [{
                            "name": "default",
                            "text": "true"
                        }],
                    "text": "Emits `combobox-change` even when the selected value does not change."
                },
                "getter": false,
                "setter": false,
                "attribute": "emit-on-same-value",
                "reflect": false,
                "defaultValue": "true"
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the autocomplete dropdown is open."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AutocompletePopupElement['placement']",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "AutocompletePopupElement": {
                            "location": "global",
                            "id": "global::AutocompletePopupElement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placement of the autocomplete dropdown relative to the input."
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true,
                "defaultValue": "'bottom'"
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
                    "text": "Name attribute forwarded to the underlying input element."
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": false
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
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true,
                "defaultValue": "''"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['type']",
                    "resolved": "\"date\" | \"datetime-local\" | \"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\"",
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
                    "text": "The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults\nto `text`."
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'text'"
            },
            "defaultValue": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['defaultValue']",
                    "resolved": "string",
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
                    "text": "The default value of the form control. Primarily used for resetting the form control."
                },
                "getter": false,
                "setter": false,
                "attribute": "default-value",
                "reflect": true
            },
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
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['appearance']",
                    "resolved": "\"filled\" | \"filled-outlined\" | \"outlined\"",
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
                    "text": "The input's visual appearance."
                },
                "getter": false,
                "setter": false,
                "attribute": "appearance",
                "reflect": true
            },
            "pill": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['pill']",
                    "resolved": "boolean",
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
                    "text": "Draws a pill-style input with rounded edges."
                },
                "getter": false,
                "setter": false,
                "attribute": "pill",
                "reflect": true
            },
            "returnMaskedValue": {
                "type": "boolean",
                "mutable": true,
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
                "attribute": "return-masked-value",
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['label']",
                    "resolved": "string",
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
                    "text": "The input's label. If you need to display HTML, use the `label` slot instead."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": true
            },
            "hint": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['hint']",
                    "resolved": "string",
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
                    "text": "The input's hint. If you need to display HTML, use the `hint` slot instead."
                },
                "getter": false,
                "setter": false,
                "attribute": "hint",
                "reflect": true
            },
            "withClear": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['withClear']",
                    "resolved": "boolean",
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
                    "text": "Adds a clear button when the input is not empty."
                },
                "getter": false,
                "setter": false,
                "attribute": "with-clear",
                "reflect": true
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['placeholder']",
                    "resolved": "string",
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
                    "text": "Placeholder text to show as a hint when the input is empty."
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": true
            },
            "readonly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['readonly']",
                    "resolved": "boolean",
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
                    "text": "Makes the input readonly."
                },
                "getter": false,
                "setter": false,
                "attribute": "readonly",
                "reflect": true
            },
            "passwordToggle": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['passwordToggle']",
                    "resolved": "boolean",
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
                    "text": "Adds a button to toggle the password's visibility. Only applies to password types."
                },
                "getter": false,
                "setter": false,
                "attribute": "password-toggle",
                "reflect": true
            },
            "passwordVisible": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['passwordVisible']",
                    "resolved": "boolean",
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
                    "text": "Determines whether or not the password is currently visible. Only applies to password input types."
                },
                "getter": false,
                "setter": false,
                "attribute": "password-visible",
                "reflect": true
            },
            "withoutSpinButtons": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['withoutSpinButtons']",
                    "resolved": "boolean",
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
                    "text": "Hides the browser's built-in increment/decrement spin buttons for number inputs."
                },
                "getter": false,
                "setter": false,
                "attribute": "without-spin-buttons",
                "reflect": true
            },
            "form": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['form']",
                    "resolved": "null",
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
                    "text": "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work."
                },
                "getter": false,
                "setter": false
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['required']",
                    "resolved": "boolean",
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
                    "text": "Makes the input a required field."
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true
            },
            "pattern": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['pattern']",
                    "resolved": "string",
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
                    "text": "A regular expression pattern to validate input against."
                },
                "getter": false,
                "setter": false,
                "attribute": "pattern",
                "reflect": false
            },
            "minlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['minlength']",
                    "resolved": "number",
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
                    "text": "The minimum length of input that will be considered valid."
                },
                "getter": false,
                "setter": false,
                "attribute": "minlength",
                "reflect": false
            },
            "maxlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['maxlength']",
                    "resolved": "number",
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
                    "text": "The maximum length of input that will be considered valid."
                },
                "getter": false,
                "setter": false,
                "attribute": "maxlength",
                "reflect": false
            },
            "min": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['min']",
                    "resolved": "number | string",
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
                    "text": "The input's minimum value. Only applies to date and number input types."
                },
                "getter": false,
                "setter": false,
                "attribute": "min",
                "reflect": false
            },
            "max": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['max']",
                    "resolved": "number | string",
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
                    "text": "The input's maximum value. Only applies to date and number input types."
                },
                "getter": false,
                "setter": false,
                "attribute": "max",
                "reflect": false
            },
            "step": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['step']",
                    "resolved": "\"any\" | number",
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
                    "text": "Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is\nimplied, allowing any numeric value. Only applies to date and number input types."
                },
                "getter": false,
                "setter": false,
                "attribute": "step",
                "reflect": false
            },
            "autocapitalize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['autocapitalize']",
                    "resolved": "\"characters\" | \"none\" | \"off\" | \"on\" | \"sentences\" | \"words\"",
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
                    "text": "Controls whether and how text input is automatically capitalized as it is entered by the user."
                },
                "getter": false,
                "setter": false,
                "attribute": "autocapitalize",
                "reflect": false
            },
            "autocorrect": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['autocorrect']",
                    "resolved": "\"off\" | \"on\"",
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
                    "text": "Indicates whether the browser's autocorrect feature is on or off."
                },
                "getter": false,
                "setter": false,
                "attribute": "autocorrect",
                "reflect": false
            },
            "autocomplete": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['autocomplete']",
                    "resolved": "string",
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
                    "text": "Specifies what permission the browser has to provide assistance in filling out form field values. Refer to\n[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values."
                },
                "getter": false,
                "setter": false,
                "attribute": "autocomplete",
                "reflect": false,
                "defaultValue": "'off'"
            },
            "autofocus": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['autofocus']",
                    "resolved": "boolean",
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
                    "text": "Indicates that the input should receive focus on page load."
                },
                "getter": false,
                "setter": false,
                "attribute": "autofocus",
                "reflect": false
            },
            "enterkeyhint": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['enterkeyhint']",
                    "resolved": "\"done\" | \"enter\" | \"go\" | \"next\" | \"previous\" | \"search\" | \"send\"",
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
                    "text": "Used to customize the label or icon of the Enter key on virtual keyboards."
                },
                "getter": false,
                "setter": false,
                "attribute": "enterkeyhint",
                "reflect": false
            },
            "spellcheck": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['spellcheck']",
                    "resolved": "boolean",
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
                    "text": "Enables spell checking on the input."
                },
                "getter": false,
                "setter": false,
                "attribute": "spellcheck",
                "reflect": false
            },
            "inputmode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['inputmode']",
                    "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
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
                    "text": "Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual\nkeyboard on supportive devices."
                },
                "getter": false,
                "setter": false,
                "attribute": "inputmode",
                "reflect": false
            },
            "withLabel": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['withLabel']",
                    "resolved": "boolean",
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
                    "text": "Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint."
                },
                "getter": false,
                "setter": false,
                "attribute": "with-label",
                "reflect": false
            },
            "withHint": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['withHint']",
                    "resolved": "boolean",
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
                    "text": "Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint."
                },
                "getter": false,
                "setter": false,
                "attribute": "with-hint",
                "reflect": false
            },
            "mask": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MaskProp",
                    "resolved": "MaskConfig<\"email\" | \"date\" | \"time\" | \"price\" | \"url\"> | FactoryArg",
                    "references": {
                        "MaskProp": {
                            "location": "import",
                            "path": "../ir-input/ir-input",
                            "id": "src/components/ui/ir-input/ir-input.tsx::MaskProp"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Mask for the input field (optional)"
                },
                "getter": false,
                "setter": false,
                "attribute": "mask",
                "reflect": false
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
                    "text": "Disables the input."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true
            },
            "inputClass": {
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
                    "text": "Custom CSS classes applied to the inner `<ir-input>` element.\n\nYou can also target the exposed parts `::part(input)` and `::part(base)`\nfor deeper styling of the native input and container."
                },
                "getter": false,
                "setter": false,
                "attribute": "input-class",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "options": {},
            "slotStateVersion": {}
        };
    }
    static get events() {
        return [{
                "method": "textChange",
                "name": "text-change",
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
                "method": "comboboxChange",
                "name": "combobox-change",
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
            }];
    }
    static get methods() {
        return {
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "focusInput": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }, {
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
}
__decorate([
    ClickOutside()
], IrAutocomplete.prototype, "hide", null);
//# sourceMappingURL=ir-autocomplete.js.map
