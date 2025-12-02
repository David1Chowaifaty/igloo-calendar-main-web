import { Host, h } from "@stencil/core";
import { masks } from "./masks";
import IMask from "imask";
export class IrCustomInput {
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
    static get is() { return "ir-custom-input"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-custom-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-custom-input.css"]
        };
    }
    static get properties() {
        return {
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                "reflect": true
            },
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['appearance']",
                    "resolved": "\"filled\" | \"filled-outlined\" | \"outlined\"",
                    "references": {
                        "NativeWaInput": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['label']",
                    "resolved": "string",
                    "references": {
                        "NativeWaInput": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                "reflect": false
            },
            "autofocus": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['autofocus']",
                    "resolved": "boolean",
                    "references": {
                        "NativeWaInput": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::NativeWaInput"
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
                    "resolved": "MaskConfig<\"date\" | \"time\" | \"price\" | \"url\"> | FactoryArg",
                    "references": {
                        "MaskProp": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-custom-input/ir-custom-input.tsx",
                            "id": "src/components/ui/ir-custom-input/ir-custom-input.tsx::MaskProp"
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
            }
        };
    }
    static get states() {
        return {
            "isValid": {}
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
                "method": "inputBlur",
                "name": "input-blur",
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
                "method": "inputFocus",
                "name": "inputFocus",
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
    static get watchers() {
        return [{
                "propName": "mask",
                "methodName": "handleMaskPropsChange"
            }, {
                "propName": "min",
                "methodName": "handleMaskPropsChange"
            }, {
                "propName": "max",
                "methodName": "handleMaskPropsChange"
            }, {
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "aria-invalid",
                "methodName": "handleAriaInvalidChange"
            }];
    }
}
//# sourceMappingURL=ir-custom-input.js.map
