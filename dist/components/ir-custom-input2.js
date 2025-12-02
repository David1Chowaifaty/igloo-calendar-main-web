import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { M as MaskedNumber, a as MaskedRange, I as IMask } from './index4.js';
import { h as hooks } from './moment.js';

const masks = {
    price: {
        mask: MaskedNumber,
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
    size;
    /** The input's visual appearance. */
    appearance;
    /** Draws a pill-style input with rounded edges. */
    pill;
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
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (this._mask) {
                this._mask.value = newValue;
            }
        }
    }
    handleAriaInvalidChange(e) {
        this.isValid = !Boolean(e);
    }
    handleInput = (nextValue) => {
        this.value = nextValue ?? '';
        this.textChange.emit(this.value);
    };
    // private initializeMask() {
    //   if (!this.inputRef) return;
    //   const maskOpts = this.buildMaskOptions();
    //   if (!maskOpts) return;
    //   this.animationFrame = requestAnimationFrame(() => {
    //     this._mask = IMask(this.inputRef.input, maskOpts);
    //     if (this.value) {
    //       this._mask.unmaskedValue = this.value;
    //     }
    //     this._mask.on('accept', () => {
    //       if (!this._mask) return;
    //       const isEmpty = this.inputRef.value.trim() === '' || this._mask.unmaskedValue === '';
    //       this.handleInput(isEmpty ? '' : this._mask.unmaskedValue);
    //     });
    //   });
    // }
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
            this._mask.unmaskedValue = this.value;
        }
        this._mask.on('accept', () => {
            if (!this._mask)
                return;
            const isEmpty = this.inputRef.value.trim() === '' || this._mask.unmaskedValue === '';
            console.log(this._mask.unmaskedValue);
            this.handleInput(isEmpty ? '' : this._mask.unmaskedValue);
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
        if (typeof this.mask === 'string')
            return masks[this.mask];
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
        return (h(Host, { key: '08e48369bb8e057fe78e4bc22e068cebdf7c285f' }, h("wa-input", { key: 'e63b205bb59b60c8f2c14f85debca816ede7dfb4', type: this.type, value: this.value, ref: el => (this.inputRef = el), defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, "aria-invalid": String(!this.isValid), label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, onchange: this.handleChange, "onwa-clear": this.handleClear, onblur: this.handleBlur, onfocus: this.handleFocus }, h("slot", { key: '834a4ac07af92637e4474c8365949fa6b1d5a071', name: "label", slot: "label" }), h("slot", { key: '5f8428070ab2097938b40fbd4cd439e034a1d55c', name: "start", slot: "start" }), h("slot", { key: 'a54a6b642c701c06a737118b329410b1095a7b8f', name: "end", slot: "end" }), h("slot", { key: '64b0913d09edbc2fb766bba21ec85b7d968fdad5', name: "clear-icon", slot: "clear-icon" }), h("slot", { key: '816bcb3097dc8aad3c53fbacf86f0c16ac95fd2e', name: "hide-password-icon", slot: "hide-password-icon" }), h("slot", { key: '7599b4a3e1e4b398cb5d1ef79014348e20b18e46', name: "show-password-icon", slot: "show-password-icon" }), h("slot", { key: 'a70c057cdaad599c6175806295385e0094a44fae', name: "hint", slot: "hint" }))));
    }
    static get watchers() { return {
        "mask": ["handleMaskPropsChange"],
        "min": ["handleMaskPropsChange"],
        "max": ["handleMaskPropsChange"],
        "value": ["handleValueChange"],
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
        "value": ["handleValueChange"],
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