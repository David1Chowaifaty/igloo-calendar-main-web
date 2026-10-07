import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CeHdrJeH.js';
import { w as withLatinDigits, m as masks } from './masks-px2uYhn4.js';
import { I as IMask } from './index-BA2Li5R1.js';
import { n as normalizeNumericInput } from './number-D2n6n8dr.js';
import './moment-Mki5YqAR.js';
import './ir-date-NNCOayR_.js';
import './locale-scope-CapRuPkM.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:block}`;

const IrInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "text-change");
        this.inputBlur = createEvent(this, "input-blur");
        this.inputFocus = createEvent(this, "inputFocus");
        this.inputCleared = createEvent(this, "inputCleared");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    get el() { return getElement(this); }
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
     * Custom CSS classes applied to the inner `<wa-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass;
    textChange;
    inputBlur;
    inputFocus;
    inputCleared;
    isValid = true;
    slotState = new Map();
    _mask;
    inputRef;
    animationFrame;
    slotObserver;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    componentWillLoad() {
        if (this.mask === 'price' && typeof this.mask === 'string') {
            this.returnMaskedValue = true;
        }
        this.updateSlotState();
    }
    componentDidLoad() {
        if (this.disabled) {
            this.inputRef.disabled = this.disabled;
        }
        // Find the closest form element (if any)
        // track slotted prefix to compute width
        this.initializeMask();
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.destroyMask();
        this.removeSlotListeners();
    }
    handleDisabledChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.inputRef.disabled = newValue;
        }
    }
    handleMaskPropsChange() {
        if (!this.inputRef)
            return;
        const hasMask = Boolean(this.resolveMask());
        if (!hasMask) {
            this.destroyMask();
            return;
        }
        this.rebuildMask();
    }
    handleAriaInvalidChange(e) {
        this.isValid = !JSON.parse(e);
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (this._mask && this.returnMaskedValue && this._mask.value !== newValue) {
                this._mask.value = newValue;
                this._mask.updateValue();
            }
        }
    }
    handleInput = (nextValue) => {
        if (!this.mask && this.isNumericField()) {
            const normalized = normalizeNumericInput(nextValue);
            if (normalized !== nextValue && this.inputRef) {
                // Rewrite the field directly: if the Latin value equals the current one, no re-render would fix the display.
                this.inputRef.value = normalized;
            }
            nextValue = normalized;
        }
        if (nextValue === this.value) {
            return;
        }
        if (!this.mask) {
            this.value = nextValue ?? '';
        }
        this.internals.setFormValue(nextValue ?? '');
        this.textChange.emit(nextValue ?? '');
    };
    /** Unmasked phone/number fields get Latin digits too; free-text fields are left as typed. */
    isNumericField() {
        return ['tel', 'number'].includes(this.type) || ['tel', 'numeric', 'decimal'].includes(this.inputmode);
    }
    async initializeMask() {
        if (!this.inputRef)
            return;
        const maskOpts = this.buildMaskOptions();
        if (!maskOpts)
            return;
        await customElements.whenDefined('wa-input'); // optional, but explicit
        await this.inputRef.updateComplete;
        const nativeInput = this.inputRef.input;
        if (!nativeInput)
            return;
        this._mask = IMask(nativeInput, maskOpts);
        if (this.value) {
            if (this.returnMaskedValue) {
                this._mask.unmaskedValue = this.value;
            }
            else {
                this._mask.value = this.value;
            }
        }
        this._mask.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this._mask.unmaskedValue === '';
            const value = isEmpty ? '' : this.returnMaskedValue ? this._mask.unmaskedValue : this._mask.value;
            this.handleInput(value);
        });
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    rebuildMask() {
        this.destroyMask();
        this.initializeMask();
    }
    destroyMask() {
        this._mask?.destroy();
        this._mask = undefined;
        this.clearAnimationFrame();
    }
    clearAnimationFrame() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = undefined;
        }
    }
    buildMaskOptions() {
        const resolvedMask = this.resolveMask();
        if (!resolvedMask)
            return;
        const maskOpts = typeof resolvedMask === 'object' && resolvedMask !== null && !Array.isArray(resolvedMask) ? { ...resolvedMask } : { mask: resolvedMask };
        if (this.min !== undefined) {
            maskOpts.min = this.min;
        }
        if (this.max !== undefined) {
            maskOpts.max = this.max;
        }
        return withLatinDigits(maskOpts);
    }
    resolveMask() {
        if (!this.mask)
            return;
        if (typeof this.mask === 'string') {
            return masks[this.mask];
        }
        return this.mask;
    }
    handleChange = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!this.mask)
            this.handleInput(e.target.value);
    };
    handleClear = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputCleared.emit();
        if (this._mask) {
            this._mask.value = '';
        }
        this.handleInput('');
    };
    handleBlur = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputBlur.emit();
    };
    handleFocus = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputFocus.emit();
    };
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    async focusInput() {
        this.inputRef?.focus();
    }
    async blurInput() {
        this.inputRef?.blur();
    }
    /**
     * Returns the native `<input>` element nested inside `wa-input`.
     * Needed by composite controls (e.g. `ir-autocomplete`) to wire ARIA
     * combobox attributes and element reflection onto the real input.
     */
    async getNativeInput() {
        if (!this.inputRef)
            return undefined;
        await this.inputRef.updateComplete;
        return this.inputRef.input;
    }
    render() {
        let displayValue = this.value;
        if (this._mask && this.returnMaskedValue) {
            // IMask holds the formatted string (e.g., "1,000.00")
            // this.value holds the raw number (e.g., "1000")
            // We must pass "1,000.00" to wa-input to avoid the overwrite warning
            displayValue = this._mask.value;
        }
        return (h(Host, { key: '9730432c4ec618c8b9a85315a51a4bc9b90dfa8e' }, h("wa-input", { key: '2e4063f85c7fc0f79d2207203a711f7cdbf51c2d', part: "wa-input", type: this.type, name: this.name, value: displayValue, ref: el => (this.inputRef = el), defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, "aria-invalid": String(!this.isValid), label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, class: this.inputClass, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, oninput: this.handleChange, "onwa-clear": this.handleClear, onblur: this.handleBlur, onfocus: this.handleFocus, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.slotState.get('label') && h("slot", { key: '0b5058ec6dab1841f9583b035a30d06e12f178bb', name: "label", slot: "label" }), this.slotState.get('start') && h("slot", { key: 'ffcd567ffc63dc3070021096649f02b11407fe7c', name: "start", slot: "start" }), this.slotState.get('end') && h("slot", { key: '0388d66cc7ead01abd1810a266009e59d9452d67', name: "end", slot: "end" }), this.slotState.get('clear-icon') && h("slot", { key: '7a0a7a59e7319acfdb6d2691a16e780a32d8883c', name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && h("slot", { key: '014ff718e19c46043767b6537e80e4b913fd8438', name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && h("slot", { key: '749cf600217ddc90e1735bc7d3731a5bcd0cd3b0', name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && h("slot", { key: '5b31702671b38543ad13843aab6dcbe0b62c7999', name: "hint", slot: "hint" }))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "disabled": [{
                "handleDisabledChange": 0
            }],
        "mask": [{
                "handleMaskPropsChange": 0
            }],
        "min": [{
                "handleMaskPropsChange": 0
            }],
        "max": [{
                "handleMaskPropsChange": 0
            }],
        "aria-invalid": [{
                "handleAriaInvalidChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
IrInput.style = irInputCss();

export { IrInput as ir_input };
