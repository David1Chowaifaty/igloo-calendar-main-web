'use strict';

var index = require('./index-DYQrLNin.js');
var slot = require('./slot-CWrQSCT2.js');

const irAutocompleteCss = () => `.listbox{display:block;position:relative;font:inherit;box-shadow:var(--wa-shadow-m);background:var(--wa-color-surface-raised);border-color:var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);border-style:var(--wa-border-style);border-width:var(--wa-border-width-s);padding-block:0.5em;padding-inline:0;overflow:auto;overscroll-behavior:none;max-width:var(--auto-size-available-width);max-height:var(--auto-size-available-height);&::slotted(wa-divider){--spacing:0.5em}}::slotted(ir-autocomplete-option){display:block}.selected-tags{display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.expand-icon{flex:0 0 auto;display:flex;align-items:center;cursor:pointer;color:var(--wa-color-neutral-on-quiet);transition:rotate var(--wa-transition-slow, 0.3s) var(--wa-transition-easing, ease);rotate:0deg;margin-inline-start:var(--wa-form-control-padding-inline, 0.25rem)}.expand-icon--open{rotate:-180deg}`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrAutocomplete = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "text-change");
        this.comboboxChange = index.createEvent(this, "combobox-change");
    }
    get el() { return index.getElement(this); }
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
    size = 's';
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
     * Enables selection of multiple options.
     * When `true`, users can select more than one option at a time.
     * Defaults to `false`.
     */
    multiple = false;
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
     * When `true`, renders a chevron button on the trailing edge of the input
     * that toggles the dropdown open and closed — matching the visual pattern of
     * `<wa-select>`.
     *
     * Set to `true` when the autocomplete is used as a pure select (fixed option
     * list, no free-text filtering) so users have a clear affordance to open the
     * listbox. Leave at the default `false` for search-as-you-type inputs where
     * the dropdown opens automatically as the user types.
     */
    withExpandIcon = false;
    /**
     * Custom CSS classes applied to the inner `<ir-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass;
    options = [];
    slotStateVersion = 0;
    selectedOptions = [];
    textChange;
    comboboxChange;
    currentOption;
    listboxRef;
    inputRef;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hint'];
    slotManager = slot.createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotStateVersion++;
    });
    componentWillLoad() {
        this.slotManager = slot.createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotStateVersion++;
        });
        this.slotManager.initialize();
        this.updateOptionsFromSlot();
        if (!this.multiple) {
            this.syncSelectedFromValue(this.value);
        }
        this.refreshSelectedOptions();
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
        if (this.multiple)
            return;
        this.syncSelectedFromValue(newValue);
    }
    refreshSelectedOptions() {
        this.selectedOptions = this.getAllOptions().filter(option => option.selected);
    }
    emitChange() {
        if (this.multiple) {
            this.comboboxChange.emit(this.selectedOptions.map(option => this.getOptionValue(option)));
        }
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
        if (this.multiple) {
            // Toggle selection without affecting the other options and keep the popup open.
            option.selected = !option.selected;
            this.currentOption = option;
            this.refreshSelectedOptions();
            // Clear the typed search text so the user can immediately filter for the next option.
            if (this.value !== '') {
                this.value = '';
                this.textChange.emit('');
            }
            this.emitChange();
            requestAnimationFrame(() => this.inputRef?.focusInput());
            return;
        }
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
    removeOption = (option) => {
        if (!option)
            return;
        option.selected = false;
        this.refreshSelectedOptions();
        this.emitChange();
        requestAnimationFrame(() => this.inputRef?.focusInput());
    };
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
        if (!this.multiple) {
            this.syncSelectedFromValue(this.value);
        }
        this.refreshSelectedOptions();
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
    handleClick = () => {
        if (!this.open)
            this.show();
    };
    handleExpandIconClick = (e) => {
        e.stopPropagation();
        this.open ? this.hide() : this.show();
    };
    render() {
        return (index.h(index.Host, { key: '2a7d1f6e845866a4f0cc951abd8b5d112d8321c4' }, index.h("wa-popup", { key: 'e06677c206813c7cfc59ac61a6fd00b3132fa1ce', active: this.open, flip: true, shift: true, sync: "width", "auto-size": "vertical", "auto-size-padding": 10, placement: this.placement, exportparts: "popup, arrow, hover-bridge" }, index.h("ir-input", { key: 'e2a2640309b38bc239e67e2b01eaea09c1065747', slot: "anchor", ref: el => (this.inputRef = el), onKeyDown: this.handleKeydownChange, "onText-change": this.handleTextChange, onClick: this.handleClick, name: this.name, value: this.value, type: this.type, defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, inputClass: this.inputClass, autocapitalize: this.autocapitalize,
            // autocorrect={this.autocorrect}
            autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, mask: this.mask, returnMaskedValue: this.returnMaskedValue, disabled: this.disabled, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.multiple && this.selectedOptions.length > 0 && (index.h("div", { key: '28384bc5e394badf0d669a8a9c064e4070c5c20a', slot: "start", class: "selected-tags", part: "tags" }, this.selectedOptions.map(option => (index.h("wa-tag", { key: this.getOptionValue(option), size: "s", "with-remove": true, "onwa-remove": (e) => {
                e.stopPropagation();
                this.removeOption(option);
            } }, this.getOptionLabel(option)))))), this.withExpandIcon && (index.h("div", { key: '8cb3ea335aee0bd68219bf85b956511a30af0626', slot: "end", class: `expand-icon${this.open ? ' expand-icon--open' : ''}`, onClick: this.handleExpandIconClick }, index.h("wa-icon", { key: 'a20eed1d1e24d232a88452ad6db4cadf3d470a05', library: "system", variant: "solid", name: "chevron-down" }))), this.slotManager.hasSlot('label') && index.h("slot", { key: 'd421cf6ae18751a12e155330f2050b8100754aee', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && index.h("slot", { key: 'c62da954a98404e1a41b0abab55f6687e60ea4ba', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && index.h("slot", { key: '311ac62f2ab2de32a6d4ed08aa5d2dec21527143', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && index.h("slot", { key: '06802e08417f1975355ff4f5aa4de0f687e5cdc9', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && index.h("slot", { key: 'e2d672c3c8c1f2bbbcc380bf3e9ef2369f672c04', name: "hint", slot: "hint" })), index.h("div", { key: '81d3971323168441d0aea7af73510cf5c1fc6754', id: "listbox", ref: el => (this.listboxRef = el), role: "listbox", "aria-expanded": this.open ? 'true' : 'false', "aria-multiselectable": this.multiple ? 'true' : 'false', "aria-labelledby": "label", part: "listbox", class: "listbox", tabindex: "-1", hidden: !this.open, onKeyDown: this.handleKeydownChange }, index.h("slot", { key: 'af14a719c0623bd5379061dfb646b7cc8cd18edd', onSlotchange: this.handleOptionsSlotChange })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
__decorate([
    slot.ClickOutside()
], IrAutocomplete.prototype, "hide", null);
IrAutocomplete.style = irAutocompleteCss();

const irAutocompleteOptionCss = () => `:host{display:block}`;

const IrAutocompleteOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    value;
    label;
    disabled = false;
    current = false;
    selected = false;
    render() {
        return (index.h(index.Host, { key: '183c543c27419759b302c0d02cb9f33b378a1359', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, index.h("wa-option", { key: '887adb9a2246317248f3b0f4d5495e491192a0f0', value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, index.h("slot", { key: '861f36b0a3f1bd70f524421c0f570882cede13bc' }), index.h("slot", { key: '3332a04b86fd6ee20f66bf6cbbc5da98e5bce59b', name: "start", slot: "start" }), index.h("slot", { key: '5c33dd5784eed337cb0003ec8b74d4efee7f23bd', name: "end", slot: "end" }))));
    }
};
IrAutocompleteOption.style = irAutocompleteOptionCss();

exports.ir_autocomplete = IrAutocomplete;
exports.ir_autocomplete_option = IrAutocompleteOption;
