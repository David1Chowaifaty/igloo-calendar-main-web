'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const index$1 = require('./index-e9a28e3e.js');
const v4 = require('./v4-9b297151.js');

const irInputTextCss = ".sc-ir-input-text-h{--ir-bg:#fff;--ir-primary:#1e9ff2;--ir-danger:#ff4961;--ir-border:#cacfe7;--ir-disabled-fg:#9aa1ac;--ir-readonly-bg:#f8f9fa;--ir-input-color:#3b4781;--ir-placeholder-color:#bbbfc6;--ir-floating-input-border:var(--ir-border);--ir-floating-input-border-radius:0.21rem;--ir-floating-input-height:2rem;--ir-focus-ring:none;--ir-focus-border-color:var(--ir-primary);--ir-floating-input-font-size:0.975rem;--ir-floating-input-line-height:1.45;--ir-floating-input-padding-y:0.75rem;--ir-floating-input-padding-x:1rem;--ir-floating-input-padding-x-with-affix:2rem;--ir-floating-label-fg:#6c757d;--ir-floating-label-fg-focus:#495057;--ir-floating-label-bg:#fff;--ir-floating-label-scale:0.88;--ir-floating-label-float-translateY:-70%;--ir-floating-label-resting-offset-inline:0.9rem;--ir-floating-label-resting-offset-inline-with-prefix:1.8rem;--ir-floating-input-affix-size:1rem;--ir-floating-input-affix-color:#6c757d;margin:0;padding:0;display:inline}.sc-ir-input-text-h{--blue:var(--ir-primary);--red:var(--ir-danger)}.border-theme.sc-ir-input-text{border:1px solid var(--ir-border)}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid var(--ir-border);font-size:var(--ir-floating-input-font-size);height:var(--ir-floating-input-height);background:var(--ir-bg);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:var(--ir-primary) !important}.error-message.sc-ir-input-text{font-size:0.875rem;padding:0;margin:0.5rem 0 0;color:var(--ir-danger)}.ir-input[data-state='empty'].sc-ir-input-text{color:var(--ir-placeholder-color)}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-left:5px !important;padding-right:5px !important;border-left:0;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--ir-primary)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--ir-danger)}.ir-floating-group.sc-ir-input-text{position:relative;display:block;border:1px solid var(--ir-floating-input-border);border-radius:var(--ir-floating-input-border-radius);background:var(--ir-bg);transition:border-color 120ms ease, box-shadow 120ms ease;padding:0}.ir-floating-group.sc-ir-input-text:focus-within{border-color:var(--ir-focus-border-color);box-shadow:var(--ir-focus-ring)}.ir-floating-group.has-error.sc-ir-input-text,.has-error.sc-ir-input-text .ir-floating-group.sc-ir-input-text{border-color:var(--ir-danger)}.ir-floating-group.is-disabled.sc-ir-input-text{background-color:#f1f3f5}.ir-floating-group.is-readonly.sc-ir-input-text{background-color:var(--ir-readonly-bg)}.ir-floating-input.sc-ir-input-text{width:100%;display:block;border:0;outline:0;background:transparent;color:var(--ir-input-color);font-size:var(--ir-floating-input-font-size);line-height:var(--ir-floating-input-line-height);border-radius:var(--ir-floating-input-border-radius);box-shadow:none;padding:var(--ir-floating-input-padding-y) var(--ir-floating-input-padding-x);height:var(--ir-floating-input-height)}.ir-floating-input.danger-border.sc-ir-input-text{box-shadow:none}.ir-floating-label.sc-ir-input-text{position:absolute;top:50%;transform:translateY(-50%);pointer-events:none;padding:0 0.4rem;color:var(--ir-floating-label-fg);background:transparent;transition:transform 120ms ease, color 120ms ease, top 120ms ease, background-color 120ms ease, opacity 120ms ease;opacity:0.95;line-height:1}.ir-floating-label.sc-ir-input-text:dir(rtl){right:var(--ir-floating-label-resting-offset-inline)}.ir-floating-label.sc-ir-input-text:dir(ltr){left:var(--ir-floating-label-resting-offset-inline)}.ir-floating-group.sc-ir-input-text:focus-within .ir-floating-label.sc-ir-input-text,.ir-floating-input.sc-ir-input-text:not(:placeholder-shown)+.ir-floating-label.sc-ir-input-text,.ir-floating-group[data-has-value='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text{top:0;transform:translateY(var(--ir-floating-label-float-translateY)) scale(var(--ir-floating-label-scale));background:var(--ir-floating-label-bg);color:var(--ir-floating-label-fg-focus);font-size:12px;padding:0}.ir-floating-group.has-error.sc-ir-input-text .ir-floating-label.sc-ir-input-text,.has-error.sc-ir-input-text .ir-floating-group.sc-ir-input-text .ir-floating-label.sc-ir-input-text{color:var(--ir-danger)}.ir-floating-group.is-disabled.sc-ir-input-text .ir-floating-label.sc-ir-input-text{color:var(--ir-disabled-fg)}@supports (-webkit-touch-callout: none){.ir-floating-input.sc-ir-input-text{border-radius:var(--ir-floating-input-border-radius)}}.prefix-container.sc-ir-input-text,.suffix-container.sc-ir-input-text{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;color:var(--ir-floating-input-affix-color);pointer-events:none}.prefix-container.sc-ir-input-text:dir(ltr){left:0.5rem}.suffix-container.sc-ir-input-text:dir(ltr){right:0.5rem}.prefix-container.sc-ir-input-text:dir(rtl){right:0.5rem}.suffix-container.sc-ir-input-text:dir(rtl){left:0.5rem}.sc-ir-input-text-s>[slot='prefix'],.sc-ir-input-text-s>[slot='suffix']{display:inline-flex;width:var(--ir-floating-input-affix-size);height:var(--ir-floating-input-affix-size)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-input.sc-ir-input-text{padding:var(--ir-floating-input-padding-y) var(--ir-floating-input-padding-x-with-affix)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text:dir(ltr){left:var(--ir-floating-label-resting-offset-inline-with-prefix)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text:dir(rtl){right:var(--ir-floating-label-resting-offset-inline-with-prefix)}.no-slot.sc-ir-input-text{display:none}";
const IrInputTextStyle0 = irInputTextCss;

const IrInputText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.inputBlur = index.createEvent(this, "inputBlur", 7);
        this.inputFocus = index.createEvent(this, "inputFocus", 7);
    }
    get el() { return index.getElement(this); }
    /** Name attribute for the input field */
    name;
    /** Value of the input field */
    value;
    /** Label text for the input */
    label;
    /** Placeholder text for the input */
    placeholder;
    /** Additional inline styles for the input */
    inputStyles = '';
    /** Whether the input field is required */
    required;
    /** Whether the input field is read-only */
    readonly = false;
    /** Input type (e.g., text, password, email) */
    type = 'text';
    /** Whether the form has been submitted */
    submitted = false;
    /** Whether to apply default input styling */
    inputStyle = true;
    /** Text size inside the input field */
    textSize = 'md';
    /** Position of the label: left, right, or center */
    labelPosition = 'left';
    /** Background color of the label */
    labelBackground = null;
    /** Text color of the label */
    labelColor = 'dark';
    /** Border color/style of the label */
    labelBorder = 'theme';
    /** Label width as a fraction of 12 columns (1-11) */
    labelWidth = 3;
    /** Variant of the input: default or icon or floating-label */
    variant = 'default';
    /** Whether the input is disabled */
    disabled = false;
    /** Whether the input has an error */
    error = false;
    /** Mask for the input field (optional) */
    mask;
    /** Whether the input should auto-validate */
    autoValidate = true;
    /** A Zod schema for validating the input */
    zod;
    /** A Zod parse type for validating the input */
    asyncParse;
    /** Key to wrap the value (e.g., 'price' or 'cost') */
    wrapKey;
    /** Forcing css style to the input */
    inputForcedStyle;
    /** Input id for testing purposes*/
    testId;
    /** Input max character length*/
    maxLength;
    /** To clear all the Input base styling*/
    clearBaseStyles;
    /** To clear all the Input base styling*/
    errorMessage;
    /** Autocomplete behavior for the input (e.g., 'on', 'off', 'email', etc.) */
    autoComplete;
    /** Forcing css style to the input container */
    inputContainerStyle;
    /**
     * Extra class names applied to the label container (<div class="input-group-prepend">)
     * that wraps the <label>. Use this to control label width, alignment,
     * spacing, or visibility at different breakpoints.
     * Example: "min-w-120 text-nowrap pe-2"
     */
    labelContainerClassname;
    inputFocused = false;
    textChange;
    inputBlur;
    inputFocus;
    inputRef;
    maskInstance;
    id;
    hasPrefixSlot;
    hasSuffixSlot;
    componentWillLoad() {
        if (this.el.id) {
            this.id = this.el.id;
        }
        else {
            this.id = v4.v4();
        }
        this.hasPrefixSlot = this.haveSlotPresent('prefix');
        this.hasSuffixSlot = this.haveSlotPresent('suffix');
    }
    componentDidLoad() {
        if (this.mask)
            this.initMask();
    }
    handleMaskChange() {
        this.initMask();
    }
    // @Watch('autoValidate')
    // handleMaskChange1() {
    //   console.log(this.autoValidate);
    // }
    // @Watch('error')
    // handleErrorChange(newValue: boolean, oldValue: boolean) {
    //   if (newValue !== oldValue) {
    //     if (this.autoValidate) {
    //       this.validateInput(this.value, true);
    //     }
    //   }
    // }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.validateInput(this.value);
        }
    }
    initMask() {
        if (!this.mask || this.maskInstance) {
            return;
        }
        this.maskInstance = index$1.IMask(this.inputRef, this.mask);
        this.maskInstance.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this.maskInstance.unmaskedValue === '';
            if (isEmpty) {
                this.inputRef.value = '';
                this.textChange.emit(null);
            }
            else {
                this.inputRef.value = this.maskInstance.value;
                this.textChange.emit(this.maskInstance.value);
            }
        });
    }
    haveSlotPresent(name) {
        const slot = this.el.querySelector(`[slot="${name}"]`);
        return slot !== null;
    }
    async validateInput(value, forceValidation = false) {
        if (!this.autoValidate && !forceValidation) {
            if (this.error) {
                this.updateErrorState(false);
            }
            return;
        }
        if (this.zod) {
            try {
                if (!this.asyncParse) {
                    this.zod.parse(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                else {
                    await this.zod.parseAsync(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                if (this.error) {
                    this.updateErrorState(false);
                }
            }
            catch (error) {
                console.log(error);
                this.updateErrorState(true);
            }
        }
    }
    handleInputChange(event) {
        const value = event.target.value;
        const isEmpty = value === '';
        if (this.maskInstance) {
            this.maskInstance.value = value;
        }
        const maskedValue = isEmpty ? null : this.maskInstance ? this.maskInstance.value : value;
        this.textChange.emit(maskedValue);
    }
    updateErrorState(b) {
        this.error = b;
        this.inputRef.setAttribute('aria-invalid', b ? 'true' : 'false');
    }
    handleBlur(e) {
        this.validateInput(this.value, this.submitted);
        this.inputFocused = false;
        this.inputBlur.emit(e);
    }
    renderFloatingLabel() {
        const labelText = this.label || this.placeholder || '';
        const hasValue = !!(this.value && String(this.value).length > 0);
        return (index.h("div", { class: "form-group", style: this.inputContainerStyle }, index.h("div", { class: `ir-floating-group ${this.error ? 'has-error' : ''} ${this.disabled ? 'is-disabled' : ''} ${this.readonly ? 'is-readonly' : ''}`, "data-has-value": String(hasValue), "data-focused": String(this.inputFocused), "data-have-prefix": String(this.hasPrefixSlot), "data-have-suffix": String(this.hasSuffixSlot), part: "form-group" }, index.h("span", { part: "prefix-container", class: { 'prefix-container': true, 'no-slot': !this.hasPrefixSlot } }, index.h("slot", { name: "prefix" })), index.h("input", { part: "input", "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, id: this.id, name: this.name, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input ir-floating-input ${this.inputStyles || ''} ${this.error ? 'danger-border' : ''} text-${this.textSize}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: " ", autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, "aria-invalid": String(this.error), "aria-required": String(this.required) }), index.h("label", { part: "label", htmlFor: this.id, class: "ir-floating-label" }, labelText, this.required ? ' *' : ''), index.h("span", { part: "suffix-container", class: { 'suffix-container': true, 'no-slot': !this.hasSuffixSlot } }, index.h("slot", { name: "suffix" }))), this.errorMessage && this.error && (index.h("p", { part: "error-message", class: "error-message" }, this.errorMessage))));
    }
    render() {
        if (this.variant === 'floating-label') {
            return this.renderFloatingLabel();
        }
        if (this.variant === 'icon') {
            return (index.h("fieldset", { class: "position-relative has-icon-left input-container" }, index.h("label", { htmlFor: this.id, class: "input-group-prepend bg-white m-0" }, index.h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error ? 'danger-border' : ''}`, id: "basic-addon1" }, index.h("slot", { name: "icon" }))), index.h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input form-control bg-white pl-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error ? 'danger-border' : ''}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                    this.inputFocused = true;
                    this.inputFocus.emit(e);
                }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, autoComplete: this.autoComplete })));
        }
        return (index.h("div", { class: 'form-group', style: this.inputContainerStyle }, index.h("div", { class: "input-group row m-0" }, this.label && (index.h("div", { class: `input-group-prepend col-${this.labelWidth} ${this.labelContainerClassname} p-0 text-${this.labelColor}` }, index.h("label", { htmlFor: this.id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : ''))), index.h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: this.clearBaseStyles
                ? `${this.inputStyles}`
                : `${this.error ? 'border-danger' : ''} form-control text-${this.textSize} col-${this.label ? 12 - this.labelWidth : 12} ${this.readonly ? 'bg-white' : ''} ${this.inputStyles}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: this.placeholder, autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })), this.errorMessage && this.error && index.h("p", { class: "error-message" }, this.errorMessage)));
    }
    static get watchers() { return {
        "mask": ["handleMaskChange"],
        "value": ["handleValueChange"]
    }; }
};
IrInputText.style = IrInputTextStyle0;

const irPickerCss = ":host{display:block;width:100%}.menu{display:flex;flex-direction:column;min-width:max-content;margin:0px;padding:0.5rem 0;border:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);background-color:var(--wa-color-surface-raised);box-shadow:var(--wa-shadow-m);color:var(--wa-color-text-normal);text-align:start;user-select:none;overflow:auto;max-width:var(--auto-size-available-width) !important;max-height:var(--auto-size-available-height) !important}wa-input[aria-invalid='true']::part(base){border-color:var(--wa-color-danger-border-loud);outline-color:var(--wa-color-danger-border-loud);border-width:2px}.results{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;max-height:min(60vh, 24rem);overflow-y:auto}.group{display:flex;flex-direction:column;gap:0.35rem}.group__label{font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--wa-color-text-muted);margin:0 0.25rem}.group__options{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.option{display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border-radius:var(--wa-border-radius-m);cursor:pointer;transition:background-color 120ms ease, box-shadow 120ms ease}.option__leading{color:var(--wa-color-text-muted);display:flex;align-items:center;justify-content:center;font-size:1rem}.option__leading wa-icon{font-size:1.15rem}.option__content{display:flex;flex-direction:column;gap:0.15rem;flex:1}.option__label{font-weight:600}.option__description{font-size:0.85rem;color:var(--wa-color-text-muted)}.option__suffix{margin-inline-start:auto;display:flex;align-items:center;gap:0.5rem}.option__meta{padding:0.15rem 0.45rem;border-radius:var(--wa-border-radius-pill, 999px);background-color:var(--wa-color-surface, rgba(255, 255, 255, 0.08));font-size:0.75rem;color:var(--wa-color-text-normal)}.option__shortcut{display:flex;gap:0.25rem}.option__shortcut kbd{border-radius:var(--wa-border-radius-s);border:1px solid var(--wa-color-surface-border);padding:0.15rem 0.35rem;font-size:0.75rem;font-family:inherit;background-color:var(--wa-color-surface, rgba(255, 255, 255, 0.04))}.option--active{background-color:var(--wa-color-surface-hover, rgba(255, 255, 255, 0.06));box-shadow:inset 0 0 0 1px var(--wa-color-surface-border)}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.35rem;padding:2rem 1rem;text-align:center;color:var(--wa-color-text-muted)}.empty-state wa-icon{font-size:1.25rem}.loading-state{display:flex;align-items:center;gap:0.5rem;padding:0.75rem 1rem;color:var(--wa-color-text-muted)}.loading-state p{margin:0;font-size:0.9rem}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}";
const IrPickerStyle0 = irPickerCss;

const DEFAULT_ASYNC_DEBOUNCE = 300;
const IrPicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.comboboxSelect = index.createEvent(this, "combobox-select", 7);
        this.textChange = index.createEvent(this, "text-change", 7);
        this.comboboxClear = index.createEvent(this, "combobox-clear", 7);
        this.inputPickerBlurred = index.createEvent(this, "input-picker-blurred", 7);
    }
    /** Selected value (also shown in the input when `mode="select"`). */
    value = '';
    loading = false;
    mode = 'default';
    pill = false;
    /** Placeholder shown inside the input when there is no query. */
    placeholder = '';
    /** Optional label applied to the text field. */
    label;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue;
    /**
     * Whether to show a clear button inside the input.
     * When clicked, the input value is cleared and the `combobox-clear` event is emitted.
     *
     * @default false
     */
    withClear = false;
    /** The input's size. */
    size = 'small';
    /** The input's visual appearance. */
    appearance;
    /** Delay (in milliseconds) before emitting the `text-change` event. Defaults to 300ms for async mode. */
    debounce = 0;
    static idCounter = 0;
    componentId = ++IrPicker.idCounter;
    listboxId = `ir-combobox-listbox-${this.componentId}`;
    listboxLabelId = `ir-combobox-label-${this.componentId}`;
    emptyStateId = `ir-combobox-empty-${this.componentId}`;
    inputRef;
    nativeInput;
    slotRef;
    debounceTimer;
    get hostEl() { return index.getElement(this); }
    isOpen = false;
    query = '';
    activeIndex = -1;
    filteredItems = [];
    liveRegionMessage = '';
    slottedPickerItems = [];
    isValid;
    /** Emitted when a value is selected from the combobox list. */
    comboboxSelect;
    /** Emitted when the text input value changes. */
    textChange;
    /** Emitted when the clear button is clicked and the combobox value is cleared. */
    comboboxClear;
    /** Emitted when the clear button is clicked and the combobox value is cleared. */
    inputPickerBlurred;
    componentWillLoad() {
        const hostItems = Array.from(this.hostEl?.querySelectorAll('ir-picker-item') ?? []);
        if (hostItems.length) {
            this.processPickerItems(hostItems);
        }
        else {
            this.updateLiveRegion(0);
        }
    }
    componentDidRender() {
        if (this.inputRef) {
            this.nativeInput = this.inputRef.input;
        }
        this.applyAriaAttributes();
    }
    disconnectedCallback() {
        if (this.debounceTimer) {
            window.clearTimeout(this.debounceTimer);
            this.debounceTimer = undefined;
        }
    }
    async focusInput() {
        this._focusInput();
    }
    async open() {
        if (this.isOpen) {
            this._focusInput();
            return;
        }
        this.isOpen = true;
        requestAnimationFrame(() => this._focusInput());
        if (this.filteredItems.length) {
            const selectedIndex = this.filteredItems.findIndex(item => item.value === this.value);
            if (selectedIndex >= 0) {
                const nextIndex = this.findNearestEnabledIndex(selectedIndex + 1, 1);
                if (nextIndex >= 0) {
                    this.activeIndex = nextIndex;
                }
                else {
                    this.focusEdgeItem('start');
                }
            }
            else if (this.activeIndex === -1) {
                this.focusEdgeItem('start');
            }
        }
        this.scrollSelectedIntoView();
    }
    async close() {
        this.isOpen = false;
    }
    handleKeyDown(e) {
        this.handleInputKeydown(e);
    }
    handleDocumentClick(event) {
        if (!this.isOpen)
            return;
        const path = event.composedPath ? event.composedPath() : [];
        if ((path.length && path.includes(this.hostEl)) || this.hostEl.contains(event.target))
            return;
        this.closeCombobox();
    }
    handleDocumentFocus(event) {
        if (!this.isOpen)
            return;
        if (this.hostEl.contains(event.target))
            return;
        this.closeCombobox();
    }
    handleActiveIndexChange() {
        this.updateActiveItemIndicators();
        this.applyAriaAttributes();
        this.scrollActiveOptionIntoView();
    }
    handleAriaInvalid(newValue) {
        this.isValid = newValue;
    }
    handleValueChange(newValue) {
        this.updateSelectedFromValue(newValue);
        this.syncQueryWithValue(newValue);
        if (['select-async', 'select'].includes(this.mode)) {
            this.applyFilter('', { updateQuery: false, emitEvent: false });
        }
    }
    async clearInput() {
        this.applyFilter('');
    }
    closeCombobox(options = {}) {
        this.isOpen = false;
        if (options.restoreFocus) {
            this._focusInput();
        }
    }
    handleInput = (event) => {
        const target = event.target;
        this.applyFilter(target?.value ?? '');
        this.open();
    };
    handleInputFocus = () => {
        if (!this.isOpen) {
            if (this.mode === 'select-async' && !this.query) {
                return;
            }
            this.open();
        }
    };
    handleInputKeydown = (event) => {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.open();
                this.moveActiveIndex(1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.open();
                this.moveActiveIndex(-1);
                break;
            case 'Enter':
                if (!this.isOpen)
                    return;
                event.preventDefault();
                this.selectActiveItem();
                break;
            case 'Escape':
                if (!this.isOpen)
                    return;
                event.preventDefault();
                this.closeCombobox({ restoreFocus: true });
                break;
            case 'Home':
                if (!this.isOpen)
                    return;
                event.preventDefault();
                this.focusEdgeItem('start');
                break;
            case 'End':
                if (!this.isOpen)
                    return;
                event.preventDefault();
                this.focusEdgeItem('end');
                break;
            case 'Tab':
                this.closeCombobox();
                break;
        }
    };
    /** Applies the filter and optionally emits a debounced text-change event. */
    applyFilter(value, options = {}) {
        const { updateQuery = true, emitEvent = true } = options;
        if (updateQuery) {
            this.query = value;
        }
        const normalizedQuery = value.trim().toLowerCase();
        const items = this.slottedPickerItems;
        const filtered = normalizedQuery ? items.filter(item => this.matchesQuery(item, normalizedQuery)) : [...items];
        const previousActiveItem = this.activeIndex >= 0 ? this.filteredItems[this.activeIndex] : undefined;
        this.filteredItems = filtered;
        this.updateItemVisibility(filtered);
        let nextIndex = previousActiveItem ? filtered.indexOf(previousActiveItem) : -1;
        if (filtered.length === 0) {
            this.activeIndex = -1;
        }
        else {
            if (nextIndex === -1) {
                nextIndex = this.findNearestEnabledIndex(0, 1);
            }
            this.activeIndex = nextIndex;
        }
        this.updateActiveItemIndicators();
        const context = normalizedQuery ? `"${value.trim()}"` : undefined;
        this.updateLiveRegion(filtered.length, context);
        if (emitEvent) {
            this.emitTextChange(value);
        }
    }
    /** Emit the latest query value with a debounce suited for async searches. */
    emitTextChange(value) {
        const delay = this.getTextChangeDelay();
        if (this.debounceTimer) {
            window.clearTimeout(this.debounceTimer);
        }
        const emit = () => {
            this.textChange.emit(value);
        };
        if (delay > 0) {
            this.debounceTimer = window.setTimeout(emit, delay);
            return;
        }
        emit();
    }
    getTextChangeDelay() {
        if (typeof this.debounce === 'number' && this.debounce > 0) {
            return this.debounce;
        }
        if (this.mode === 'select-async') {
            return DEFAULT_ASYNC_DEBOUNCE;
        }
        return 0;
    }
    syncQueryWithValue(value, options = {}) {
        if (!['select', 'select-async'].includes(this.mode)) {
            return;
        }
        if (!value) {
            if (options.allowEmptyFallback !== false) {
                this.query = '';
            }
            return;
        }
        const match = this.slottedPickerItems.find(item => item.value === value);
        if (match) {
            this.query = this.getItemDisplayLabel(match);
        }
    }
    selectActiveItem() {
        if (this.activeIndex < 0)
            return;
        const selected = this.filteredItems[this.activeIndex];
        if (!selected || selected.disabled)
            return;
        this.handleSelection(selected);
    }
    handleSelection(item) {
        const detail = {
            value: item.value,
            label: this.getItemDisplayLabel(item),
            disabled: item.disabled,
        };
        this.value = item.value;
        this.updateSelectedFromValue();
        this.comboboxSelect.emit({ item: detail });
        this.closeCombobox({ restoreFocus: true });
        if (['select', 'select-async'].includes(this.mode)) {
            this.query = this.getItemDisplayLabel(item);
            this.applyFilter('', { updateQuery: false, emitEvent: false });
        }
        else {
            this.applyFilter('', { emitEvent: false });
        }
        this.activeIndex = -1;
    }
    _focusInput() {
        this.inputRef?.focus();
        this.nativeInput?.focus();
    }
    applyAriaAttributes() {
        if (!this.nativeInput)
            return;
        this.nativeInput.setAttribute('role', 'combobox');
        this.nativeInput.setAttribute('aria-autocomplete', 'list');
        this.nativeInput.setAttribute('aria-expanded', String(this.isOpen));
        this.nativeInput.setAttribute('aria-controls', this.listboxId);
        if (this.activeIndex >= 0) {
            const activeItem = this.filteredItems[this.activeIndex];
            if (activeItem?.id) {
                this.nativeInput.setAttribute('aria-activedescendant', activeItem.id);
            }
        }
        else {
            this.nativeInput.removeAttribute('aria-activedescendant');
        }
    }
    scrollActiveOptionIntoView() {
        if (this.activeIndex < 0)
            return;
        const item = this.filteredItems[this.activeIndex];
        if (!item)
            return;
        this.runAfterNextFrame(() => {
            item.scrollIntoView({ block: 'center' });
        });
    }
    scrollSelectedIntoView() {
        if (!this.isOpen || !this.value) {
            return;
        }
        const match = this.filteredItems.find(item => item.value === this.value) ?? this.slottedPickerItems.find(item => item.value === this.value);
        if (!match) {
            return;
        }
        this.runAfterNextFrame(() => {
            match.scrollIntoView({ block: 'center' });
        });
    }
    capturePickerItemsFromSlot(slot = this.slotRef) {
        if (!slot) {
            return;
        }
        const assigned = slot.assignedElements({ flatten: true });
        const pickerItems = assigned.filter((el) => el.tagName === 'IR-PICKER-ITEM');
        this.processPickerItems(pickerItems);
    }
    processPickerItems(pickerItems) {
        this.slottedPickerItems = [...pickerItems];
        this.ensureItemIds();
        this.applyFilter(this.query, { emitEvent: false });
        this.updateSelectedFromValue(this.value);
        this.syncQueryWithValue(this.value, { allowEmptyFallback: false });
        if (['select', 'select-async'].includes(this.mode) && this.value) {
            this.applyFilter('', { updateQuery: false, emitEvent: false });
        }
    }
    ensureItemIds() {
        this.slottedPickerItems.forEach((item, index) => {
            if (!item.id) {
                item.id = `${this.listboxId}-option-${index}`;
            }
        });
    }
    getItemDisplayLabel(item) {
        return item.label || item.textContent?.trim() || '';
    }
    matchesQuery(item, normalizedQuery) {
        const haystack = `${item.label ?? ''} ${item.value ?? ''}`.toLowerCase();
        return haystack.includes(normalizedQuery);
    }
    updateItemVisibility(visibleItems) {
        const visibleSet = new Set(visibleItems);
        this.slottedPickerItems.forEach(item => {
            const shouldShow = visibleSet.has(item);
            item.hidden = !shouldShow;
            if (shouldShow) {
                item.removeAttribute('aria-hidden');
            }
            else {
                item.setAttribute('aria-hidden', 'true');
            }
            item.active = false;
        });
    }
    updateSelectedFromValue(value = this.value) {
        if (!this.slottedPickerItems.length) {
            return;
        }
        this.slottedPickerItems.forEach(item => {
            item.selected = Boolean(value) && item.value === value;
        });
    }
    updateActiveItemIndicators() {
        this.slottedPickerItems.forEach(item => (item.active = false));
        if (this.activeIndex < 0) {
            return;
        }
        const activeItem = this.filteredItems[this.activeIndex];
        if (activeItem) {
            activeItem.active = true;
        }
    }
    findNearestEnabledIndex(startIndex, direction) {
        const items = this.filteredItems;
        const length = items.length;
        if (!length) {
            return -1;
        }
        let normalizedIndex = ((startIndex % length) + length) % length;
        let attempts = 0;
        while (attempts < length) {
            const candidate = items[normalizedIndex];
            if (candidate && !candidate.disabled) {
                return normalizedIndex;
            }
            normalizedIndex = (((normalizedIndex + direction) % length) + length) % length;
            attempts += 1;
        }
        return -1;
    }
    focusEdgeItem(edge) {
        if (!this.filteredItems.length) {
            this.activeIndex = -1;
            return;
        }
        const direction = edge === 'start' ? 1 : -1;
        const startIndex = edge === 'start' ? 0 : this.filteredItems.length - 1;
        this.activeIndex = this.findNearestEnabledIndex(startIndex, direction);
    }
    moveActiveIndex(direction) {
        const hasItems = this.filteredItems.length > 0;
        if (!hasItems) {
            this.activeIndex = -1;
            return;
        }
        if (this.activeIndex === -1) {
            this.focusEdgeItem(direction === 1 ? 'start' : 'end');
            return;
        }
        this.activeIndex = this.findNearestEnabledIndex(this.activeIndex + direction, direction);
    }
    findPickerItemFromEvent(event) {
        const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
        for (const target of path) {
            if (target && target.tagName === 'IR-PICKER-ITEM') {
                return target;
            }
        }
        return undefined;
    }
    handleResultsClick = (event) => {
        const item = this.findPickerItemFromEvent(event);
        if (!item || item.disabled) {
            return;
        }
        event.preventDefault();
        this.handleSelection(item);
    };
    handleResultsPointerDown = (event) => {
        const item = this.findPickerItemFromEvent(event);
        if (!item) {
            return;
        }
        event.preventDefault();
    };
    handleSlotChange = (event) => {
        const slot = event.target;
        this.slotRef = slot;
        this.capturePickerItemsFromSlot(slot);
    };
    render() {
        const hasResults = this.filteredItems.length > 0;
        const isAsyncMode = this.mode === 'select-async';
        const hasChildren = this.slottedPickerItems.length > 0;
        // In async mode avoid showing the empty state until loading finished and no results rendered.
        const showEmptyState = !this.loading && !hasResults && (!isAsyncMode || !hasChildren);
        const emptyDescriptionId = showEmptyState ? this.emptyStateId : undefined;
        return (index.h(index.Host, { key: '91b5e35abfcf4c2aedf9ac6e31d2662b4317d207' }, index.h("wa-popup", { key: '7821397fe48ca83e184bb07da6fca182f57b5fdd', flip: true, shift: true, placement: "bottom", sync: "width", "auto-size": "vertical", "auto-size-padding": 10, active: this.isOpen }, index.h("wa-input", { key: 'ebaafc7f34522dbd184a16deb1f777a648315150', slot: "anchor", class: "search-bar", "aria-invalid": this.isValid, withClear: this.withClear, size: this.size, value: this.query, defaultValue: this.defaultValue, ref: el => (this.inputRef = el), appearance: this.appearance, label: this.label, pill: this.pill, onblur: () => this.inputPickerBlurred.emit(), autocomplete: "nope", placeholder: this.placeholder || 'Search', oninput: this.handleInput, onfocus: this.handleInputFocus, "onwa-clear": () => {
                this.applyFilter('');
                this.open();
                this.comboboxClear.emit();
            } }, this.loading && index.h("wa-spinner", { key: '2ba4c41e4f234929b757c67787d6415a4a76dc63', slot: "end" }), index.h("wa-icon", { key: '1a74f56018c5e51b137b212c11bda014e5a0ccb6', slot: "start", name: "magnifying-glass", "aria-hidden": "true" }), index.h("slot", { key: '8e44ace1346ee5a28c7d87e9e42d7398f796949c', name: "end", slot: "end" })), index.h("div", { key: '39c768f6e977658e2003f788d05b1204cdd7e0a9', class: "menu", role: "presentation" }, index.h("p", { key: '91602a51a837168658cf1852126488ca284e7e94', class: "sr-only", id: this.listboxLabelId }, "Available search shortcuts"), index.h("ul", { key: '5d9c57cc89bce76a837dff94b7e6fc5583463577', class: "results", id: this.listboxId, role: "listbox", "aria-labelledby": this.listboxLabelId, "aria-describedby": emptyDescriptionId, "aria-busy": this.loading ? 'true' : undefined, onClick: this.handleResultsClick, onPointerDown: this.handleResultsPointerDown }, this.loading && (index.h("li", { key: 'bdd869126ddb916c50a2c19dae9df6175647346a', class: "loading-state", role: "presentation" }, index.h("wa-spinner", { key: '4f0134c04ca0583d60e2586b60712df62b11bcf9' }), index.h("p", { key: '4a2c1dc295c2ca3bd2115229e3ed7966ac47827b' }, "Loading suggestions\u2026"))), index.h("slot", { key: 'd9349f52fb0e0de91b04b8adaade08527d88b3fc', onSlotchange: this.handleSlotChange }), showEmptyState && (index.h("li", { key: '50df740eac2e1e707ed209fa01987f196a24bdbd', class: "empty-state", role: "presentation", id: this.emptyStateId }, index.h("wa-icon", { key: 'b4a0d65cd1372e574acfcb5b08854a1afe95c208', name: "circle-info", "aria-hidden": "true" }), index.h("p", { key: 'dffbc21ce74d378edf5197c16c2b5f3402b530dc' }, "No results found")))))), index.h("span", { key: 'f0932e726b78523166f53e4eedb8d677cd051996', class: "sr-only", "aria-live": "polite" }, this.liveRegionMessage)));
    }
    updateLiveRegion(resultCount, context) {
        if (!resultCount) {
            this.liveRegionMessage = context ? `No results for ${context}` : 'No results available';
            return;
        }
        const plural = resultCount === 1 ? 'result' : 'results';
        this.liveRegionMessage = context ? `${resultCount} ${plural} for ${context}` : `${resultCount} ${plural} available`;
    }
    runAfterNextFrame(callback) {
        if (typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(() => callback());
            return;
        }
        setTimeout(callback, 0);
    }
    static get watchers() { return {
        "activeIndex": ["handleActiveIndexChange"],
        "aria-invalid": ["handleAriaInvalid"],
        "value": ["handleValueChange"]
    }; }
};
IrPicker.style = IrPickerStyle0;

const irPickerItemCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{box-sizing:border-box;display:block}:host([hidden]){display:none !important}.picker-item__container{all:unset;box-sizing:border-box;width:100%;color:var(--wa-color-text-normal);user-select:none;position:relative;display:flex;align-items:center;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch:inherit;font-size:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;padding:0;padding:0.5em 1em 0.5em 0.25em !important;line-height:var(--wa-line-height-condensed);transition:fill var(--wa-transition-normal) var(--wa-transition-easing);cursor:pointer;gap:0.5rem;scroll-margin:0.25rem}.picker-item__content{display:flex;align-items:center;gap:0.5rem}.picker-item__container:hover{background-color:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.picker-item__check{opacity:0}:host([active]) .picker-item__container{background-color:var(--wa-color-brand-fill-loud);color:var(--wa-color-brand-on-loud);opacity:1}:host([selected]) .picker-item__container{font-weight:600}:host([selected]) .picker-item__check{opacity:1}:host([aria-disabled='true']) .picker-item__container,.picker-item__container:disabled{cursor:not-allowed;opacity:0.5}";
const IrPickerItemStyle0 = irPickerItemCss;

const IrPickerItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    value;
    label;
    disabled = false;
    active = false;
    selected = false;
    render() {
        return (index.h(index.Host, { key: '1cb05dc4289f4f1908bf2ea989f9a46ebc696d22', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, index.h("button", { key: '59905208bc76f66e121ec158f0d917328e0c1d7f', class: `picker-item__container`, type: "button", tabindex: "-1", disabled: this.disabled, part: "base" }, index.h("wa-icon", { key: 'c683c6a7ea4631fcdd4545d00d99ea3b606ba69a', class: "picker-item__check", name: "check" }), index.h("div", { key: '9dba7b16b8daacddb9392fec65dfc554d442e9a8', class: "picker-item__content", part: "content" }, index.h("slot", { key: 'ace8d257e16d756c9178b7a373e3d7cd532f9121' })))));
    }
};
IrPickerItem.style = IrPickerItemStyle0;

exports.ir_input_text = IrInputText;
exports.ir_picker = IrPicker;
exports.ir_picker_item = IrPickerItem;

//# sourceMappingURL=ir-input-text_3.cjs.entry.js.map