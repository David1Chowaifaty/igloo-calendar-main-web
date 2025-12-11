import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { M as MaskedRange, I as IMask } from './index4.js';
import { h as hooks } from './moment.js';

const masks = {
    price: {
        mask: Number,
        scale: 2,
        radix: '.',
        mapToRadix: [','],
        normalizeZeros: true,
        padFractionalZeros: true,
        thousandsSeparator: ',',
    },
    url: {
        mask: /^\S*$/,
        overwrite: false,
        prepare(appended /* string */) {
            return appended.replace(/^https?:\/\//i, '');
        },
        commit(value, masked) {
            masked._value = 'https://' + value.replace(/^https?:\/\//i, '');
        },
    },
    time: {
        mask: 'HH:mm',
        blocks: {
            HH: {
                mask: MaskedRange,
                from: 0,
                to: 23,
                placeholderChar: 'H',
            },
            mm: {
                mask: MaskedRange,
                from: 0,
                to: 59,
                placeholderChar: 'm',
            },
        },
        lazy: false,
        placeholderChar: '_',
    },
    date: {
        mask: Date,
        pattern: 'DD/MM/YYYY',
        lazy: false,
        min: hooks('1900-01-01', 'YYYY-MM-DD').toDate(),
        max: new Date(),
        format: date => hooks(date).format('DD/MM/YYYY'),
        parse: str => hooks(str, 'DD/MM/YYYY').toDate(),
        autofix: true,
        placeholderChar: '_',
        blocks: {
            YYYY: {
                mask: MaskedRange,
                from: 1900,
                to: hooks().format('YYYY'),
                placeholderChar: 'Y',
            },
            MM: {
                mask: MaskedRange,
                from: 1,
                to: 12,
                placeholderChar: 'M',
            },
            DD: {
                mask: MaskedRange,
                from: 1,
                to: 31,
                placeholderChar: 'D',
            },
        },
    },
};

const irCustomInputCss = ":host{display:block}";
const IrCustomInputStyle0 = irCustomInputCss;

const IrCustomInput = /*@__PURE__*/ proxyCustomElement(class IrCustomInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.textChange = createEvent(this, "text-change", 7);
        this.inputBlur = createEvent(this, "input-blur", 7);
        this.inputFocus = createEvent(this, "inputFocus", 7);
    }
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
    autocomplete;
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
    textChange;
    inputBlur;
    inputFocus;
    isValid = true;
    _mask;
    inputRef;
    animationFrame;
    componentWillLoad() {
        if (this.mask === 'price' && typeof this.mask === 'string') {
            this.returnMaskedValue = true;
        }
    }
    componentDidLoad() {
        // Find the closest form element (if any)
        // track slotted prefix to compute width
        this.initializeMask();
    }
    disconnectedCallback() {
        this.destroyMask();
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
    handleInput = (nextValue) => {
        this.value = nextValue ?? '';
        this.textChange.emit(this.value);
    };
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
        return maskOpts;
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
    render() {
        let displayValue = this.value;
        if (this._mask && this.returnMaskedValue) {
            // IMask holds the formatted string (e.g., "1,000.00")
            // this.value holds the raw number (e.g., "1000")
            // We must pass "1,000.00" to wa-input to avoid the overwrite warning
            displayValue = this._mask.value;
        }
        return (h(Host, { key: '47545377bf913cb78e4b308d03fc418f1346f5ed' }, h("wa-input", { key: 'cf684c267f0125ee9aa36baaef5cb8b5fb9caa5b', type: this.type, value: displayValue, ref: el => (this.inputRef = el), defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, "aria-invalid": String(!this.isValid), label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, onchange: this.handleChange, "onwa-clear": this.handleClear, onblur: this.handleBlur, onfocus: this.handleFocus }, h("slot", { key: 'b134eac7201348d25531361178171b07b1b80a1e', name: "label", slot: "label" }), h("slot", { key: 'e133cef1c4114a6304611abefd96948ee46b2e95', name: "start", slot: "start" }), h("slot", { key: '914024d2189bbc5bfed7b71e3a4cacbb1769d8c6', name: "end", slot: "end" }), h("slot", { key: '8fd9b72c68cc816b040afb04c23da547c95c1043', name: "clear-icon", slot: "clear-icon" }), h("slot", { key: 'ea7dde711e6ed64decb136d4631758e76eb97b47', name: "hide-password-icon", slot: "hide-password-icon" }), h("slot", { key: 'e4f7d6af8c7d2f2bceb35376bf660cb311446d53', name: "show-password-icon", slot: "show-password-icon" }), h("slot", { key: 'bd9b736c79231f4e42970f0fa6d51ad226dbd637', name: "hint", slot: "hint" }))));
    }
    static get watchers() { return {
        "mask": ["handleMaskPropsChange"],
        "min": ["handleMaskPropsChange"],
        "max": ["handleMaskPropsChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
    static get style() { return IrCustomInputStyle0; }
}, [4, "ir-custom-input", {
        "value": [1537],
        "type": [513],
        "defaultValue": [513, "default-value"],
        "size": [513],
        "appearance": [513],
        "pill": [516],
        "returnMaskedValue": [1028, "return-masked-value"],
        "label": [513],
        "hint": [513],
        "withClear": [516, "with-clear"],
        "placeholder": [513],
        "readonly": [516],
        "passwordToggle": [516, "password-toggle"],
        "passwordVisible": [516, "password-visible"],
        "withoutSpinButtons": [516, "without-spin-buttons"],
        "form": [16],
        "required": [516],
        "pattern": [1],
        "minlength": [2],
        "maxlength": [2],
        "min": [8],
        "max": [8],
        "step": [8],
        "autocapitalize": [1],
        "autocorrect": [1],
        "autocomplete": [1],
        "autofocus": [4],
        "enterkeyhint": [1],
        "spellcheck": [4],
        "inputmode": [1],
        "withLabel": [4, "with-label"],
        "withHint": [4, "with-hint"],
        "mask": [1],
        "isValid": [32]
    }, undefined, {
        "mask": ["handleMaskPropsChange"],
        "min": ["handleMaskPropsChange"],
        "max": ["handleMaskPropsChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-custom-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCustomInput);
            }
            break;
    } });
}

export { IrCustomInput as I, defineCustomElement as d };

//# sourceMappingURL=ir-custom-input2.js.map