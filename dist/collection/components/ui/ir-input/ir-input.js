import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
import { masks } from "./masks";
import IMask from "imask";
export class IrInput {
    el;
    /** Placeholder text displayed inside the input when empty. */
    placeholder;
    /** The label text displayed alongside or above the input. */
    label;
    /** The value of the input. */
    value = '';
    disabled;
    readonly;
    required;
    /** Type of input element — can be 'text', 'password', 'email', or 'number'. */
    type = 'text';
    /** Controls where the label is positioned: 'default', 'side', or 'floating'. */
    labelPosition = 'default';
    /** If true, displays a clear (X) button when the input has a value. */
    clearable;
    /** Maximum input length */
    maxLength;
    /** Hides the prefix slot content from assistive technologies when true. */
    prefixHidden = true;
    /** Hides the suffix slot content from assistive technologies when true. */
    suffixHidden = true;
    /** Maximum allowed value (for number or masked inputs). */
    max;
    /** Minimum allowed value (for number or masked inputs). */
    min;
    /** Mask for the input field (optional) */
    mask;
    _type;
    inputFocused;
    /** Fired on any value change (typing, programmatic set, or clear). */
    inputChange;
    /** Fired only when the clear button is pressed. */
    cleared;
    /** Fired only when the input is focused. */
    inputFocus;
    /** Fired only when the input is blurred. */
    inputBlur;
    id;
    prefixSlotEl;
    resizeObs;
    _mask;
    inputRef;
    // ─────────────────────────────────────────────────────────────
    // Lifecycle
    // ─────────────────────────────────────────────────────────────
    componentWillLoad() {
        this.id = this.el.id || `input-${v4()}`;
        this._type = this.type;
        const form = this.el.closest('form');
        if (form) {
            form.addEventListener('reset', this.handleFormReset);
        }
    }
    componentDidLoad() {
        // Find the closest form element (if any)
        // track slotted prefix to compute width
        this.initializeMask();
        if (this.el.hasAttribute('data-testid')) {
            this.inputRef.setAttribute('data-testid', this.el.getAttribute('data-testid'));
            this.el.removeAttribute('data-testid');
        }
        this.prefixSlotEl = this.el.shadowRoot.querySelector('slot[name="prefix"]');
        if (this.prefixSlotEl) {
            this.prefixSlotEl.addEventListener('slotchange', this.handlePrefixSlotChange);
            this.measureAndSetPrefixWidth();
            // watch size changes (icons/text may load later or change)
            const assigned = this.prefixSlotEl.assignedElements({ flatten: true });
            const target = assigned[0];
            if (target && 'ResizeObserver' in window) {
                this.resizeObs = new ResizeObserver(() => this.measureAndSetPrefixWidth());
                this.resizeObs.observe(target);
            }
        }
    }
    disconnectedCallback() {
        this.prefixSlotEl?.removeEventListener('slotchange', this.handlePrefixSlotChange);
        this.resizeObs?.disconnect();
        this.destroyMask();
        const form = this.el.closest('form');
        if (form) {
            form.removeEventListener('reset', this.handleFormReset);
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
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (this._mask) {
                this._mask.value = newValue;
            }
            else {
                this.handleInput(newValue);
            }
        }
    }
    // ─────────────────────────────────────────────────────────────
    // Methods (extracted handlers)
    // ─────────────────────────────────────────────────────────────
    handleInput = (nextValue) => {
        this.value = nextValue ?? '';
        this.inputChange.emit(this.value);
    };
    handleFormReset = () => {
        this.clearValue();
    };
    onInput = (e) => {
        const next = e.target.value;
        if (!this._mask)
            this.handleInput(next);
    };
    initializeMask() {
        if (!this.inputRef)
            return;
        const maskOpts = this.buildMaskOptions();
        if (!maskOpts)
            return;
        this._mask = IMask(this.inputRef, maskOpts);
        if (this.value) {
            this._mask.unmaskedValue = this.value;
        }
        this._mask.on('accept', () => {
            if (!this._mask)
                return;
            const isEmpty = this.inputRef.value.trim() === '' || this._mask.unmaskedValue === '';
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
    clearValue = () => {
        // Per requirement: clear calls the same input-change method…
        if (this._mask) {
            this._mask.value = '';
        }
        else {
            this.handleInput('');
        }
        // …and also emits its own event only when the clear button is pressed
        this.cleared.emit();
    };
    toggleVisibility = () => {
        this._type = this._type === 'text' ? 'password' : 'text';
    };
    handlePrefixSlotChange = () => {
        this.measureAndSetPrefixWidth();
    };
    /** Measures prefix width and writes CSS var --ir-prefix-width on the host. */
    measureAndSetPrefixWidth() {
        const slot = this.prefixSlotEl;
        if (!slot)
            return;
        const assigned = slot.assignedElements({ flatten: true });
        const hasPrefix = assigned.length > 0;
        // reflect presence as an attribute for CSS if needed
        this.el.toggleAttribute('has-prefix', hasPrefix);
        if (!hasPrefix) {
            // fall back to 0px when no prefix
            this.el.style.setProperty('--ir-prefix-width', '0px');
            return;
        }
        const node = assigned[0];
        // Compute width (content width + horizontal margin)
        const rect = node.getBoundingClientRect();
        const style = getComputedStyle(node);
        const mLeft = parseFloat(style.marginLeft || '0') || 0;
        const mRight = parseFloat(style.marginRight || '0') || 0;
        const width = Math.max(0, rect.width + mLeft + mRight);
        // Optional: include design gap between prefix and input if you use one
        const hostStyle = getComputedStyle(this.el);
        const gapStr = hostStyle.getPropertyValue('--ir-gap').trim();
        const gap = gapStr.endsWith('rem') || gapStr.endsWith('px') ? parseFloat(gapStr) : 0;
        const total = width + (isNaN(gap) ? 0 : gap);
        // Set internal CSS var used by padding calculation
        this.el.style.setProperty('--ir-prefix-width', `${total + 8}px`);
    }
    handleInputBlur(e) {
        this.inputFocused = false;
        this.inputBlur.emit(e);
    }
    handleInputFocus(e) {
        this.inputFocused = true;
        this.inputFocus.emit(e);
    }
    // ─────────────────────────────────────────────────────────────
    // Render
    // ─────────────────────────────────────────────────────────────
    render() {
        return (h(Host, { key: '9b530bea994c85963d3278c714e811cc76137688' }, this.label && (h("label", { key: 'c573b5f672de7e520bc1c26ceddbee539340433d', class: "input-label", htmlFor: this.id, part: "label", "data-active": String(Boolean(this.value) || this.inputFocused) }, h("slot", { key: 'e04221c01a692157e70edfbdd0225aaaf1943f37', name: "label" }, this.label, " ", this.required && h("span", { key: '013b3f95202617f80e476a26fb1923cfd30b29a6', style: { color: 'red' } }, "*")))), h("div", { key: 'b6c405b81e8ad0d21ef314143a0b1d743d9d7f7c', class: "input-wrapper", part: "wrapper" }, h("div", { key: '66d73f1f266837a6398534a4baa786adf6580a81', role: "group", class: "input-prefix", part: "prefix", "aria-hidden": String(this.prefixHidden) }, h("slot", { key: 'b4cb1bf21300931a650cc2433c6523e8ca74f5df', name: "prefix" })), h("input", { key: '79dafae0b0dabcc33a163f71a7e9b3560ef6c148', disabled: this.disabled, readonly: this.readonly, class: "input-field", maxLength: this.maxLength, type: this._type, ref: el => (this.inputRef = el), id: this.id, placeholder: this.placeholder, required: this.required, value: this._mask ? this._mask.value : this.value, onFocus: this.handleInputFocus.bind(this), onBlur: this.handleInputBlur.bind(this), onInput: this.onInput, "aria-label": this.label || this.placeholder || 'Input field' }), h("div", { key: '32b4f340e890b852ef45f01cb481204633b9060a', class: "input-suffix", role: "group", part: "suffix", "aria-hidden": String(this.suffixHidden) }, h("slot", { key: 'bc69b5c66a964855ae24e9daed311f88d55c4342', name: "suffix" }), this.clearable && this.value && (h("button", { key: 'ee7782d091037310cc7957c8ac2bd74615af3c3f', type: "button", class: "clear-button", "aria-label": "Clear input", title: "Clear input", part: "clear-button", onClick: this.clearValue }, h("svg", { key: '48d1c82dd60f16546c9ffa7765f2bc94e00c5e3a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '3134fdff6d3f9788622d051236ca16a8e76cf981', d: "M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" })))), this.type === 'password' && !this.disabled && (h("button", { key: '452a488cd9da28d67f10a8fc21db6c2be460fdf6', type: "button", class: "visibility-button", "aria-label": "Toggle password visibility", title: "Toggle password visibility", part: "visibility-button", "aria-pressed": String(this._type === 'text'), onClick: this.toggleVisibility }, this._type === 'text' ? (
        /* eye-closed (password visible → click to hide) */
        h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 24, width: 24 }, h("path", { fill: "currentColor", d: "M73 39.1C63.6 29.7 48.4 29.7 39.1 39.1C29.8 48.5 29.7 63.7 39 73.1L567 601.1C576.4 610.5 591.6 610.5 600.9 601.1C610.2 591.7 610.3 576.5 600.9 567.2L504.5 470.8C507.2 468.4 509.9 466 512.5 463.6C559.3 420.1 590.6 368.2 605.5 332.5C608.8 324.6 608.8 315.8 605.5 307.9C590.6 272.2 559.3 220.2 512.5 176.8C465.4 133.1 400.7 96.2 319.9 96.2C263.1 96.2 214.3 114.4 173.9 140.4L73 39.1zM236.5 202.7C260 185.9 288.9 176 320 176C399.5 176 464 240.5 464 320C464 351.1 454.1 379.9 437.3 403.5L402.6 368.8C415.3 347.4 419.6 321.1 412.7 295.1C399 243.9 346.3 213.5 295.1 227.2C286.5 229.5 278.4 232.9 271.1 237.2L236.4 202.5zM357.3 459.1C345.4 462.3 332.9 464 320 464C240.5 464 176 399.5 176 320C176 307.1 177.7 294.6 180.9 282.7L101.4 203.2C68.8 240 46.4 279 34.5 307.7C31.2 315.6 31.2 324.4 34.5 332.3C49.4 368 80.7 420 127.5 463.4C174.6 507.1 239.3 544 320.1 544C357.4 544 391.3 536.1 421.6 523.4L357.4 459.2z" }))) : (
        /* eye-open (password hidden → click to show) */
        h("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 640 640" }, h("path", { fill: "currentColor", d: "M320 96C239.2 96 174.5 132.8 127.4 176.6C80.6 220.1 49.3 272 34.4 307.7C31.1 315.6 31.1 324.4 34.4 332.3C49.3 368 80.6 420 127.4 463.4C174.5 507.1 239.2 544 320 544C400.8 544 465.5 507.2 512.6 463.4C559.4 419.9 590.7 368 605.6 332.3C608.9 324.4 608.9 315.6 605.6 307.7C590.7 272 559.4 220 512.6 176.6C465.5 132.9 400.8 96 320 96zM176 320C176 240.5 240.5 176 320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320zM320 256C320 291.3 291.3 320 256 320C244.5 320 233.7 317 224.3 311.6C223.3 322.5 224.2 333.7 227.2 344.8C240.9 396 293.6 426.4 344.8 412.7C396 399 426.4 346.3 412.7 295.1C400.5 249.4 357.2 220.3 311.6 224.3C316.9 233.6 320 244.4 320 256z" })))))))));
    }
    static get is() { return "ir-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-input.css", "../../../common/global.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-input.css", "../../../common/global.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Placeholder text displayed inside the input when empty."
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false
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
                    "text": "The label text displayed alongside or above the input."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
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
                "reflect": true
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
                "reflect": true
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'text' | 'password' | 'email' | 'number'",
                    "resolved": "\"email\" | \"number\" | \"password\" | \"text\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of input element \u2014 can be 'text', 'password', 'email', or 'number'."
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'text'"
            },
            "labelPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'side' | 'floating'",
                    "resolved": "\"default\" | \"floating\" | \"side\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls where the label is positioned: 'default', 'side', or 'floating'."
                },
                "getter": false,
                "setter": false,
                "attribute": "label-position",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "clearable": {
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
                    "text": "If true, displays a clear (X) button when the input has a value."
                },
                "getter": false,
                "setter": false,
                "attribute": "clearable",
                "reflect": true
            },
            "maxLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum input length"
                },
                "getter": false,
                "setter": false,
                "attribute": "max-length",
                "reflect": true
            },
            "prefixHidden": {
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
                    "text": "Hides the prefix slot content from assistive technologies when true."
                },
                "getter": false,
                "setter": false,
                "attribute": "prefix-hidden",
                "reflect": false,
                "defaultValue": "true"
            },
            "suffixHidden": {
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
                    "text": "Hides the suffix slot content from assistive technologies when true."
                },
                "getter": false,
                "setter": false,
                "attribute": "suffix-hidden",
                "reflect": false,
                "defaultValue": "true"
            },
            "max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum allowed value (for number or masked inputs)."
                },
                "getter": false,
                "setter": false,
                "attribute": "max",
                "reflect": true
            },
            "min": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum allowed value (for number or masked inputs)."
                },
                "getter": false,
                "setter": false,
                "attribute": "min",
                "reflect": true
            },
            "mask": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MaskProp",
                    "resolved": "FactoryArg | MaskConfig<\"date\" | \"time\" | \"price\" | \"url\">",
                    "references": {
                        "MaskProp": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-input/ir-input.tsx",
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
            }
        };
    }
    static get states() {
        return {
            "_type": {},
            "inputFocused": {}
        };
    }
    static get events() {
        return [{
                "method": "inputChange",
                "name": "input-change",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired on any value change (typing, programmatic set, or clear)."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "cleared",
                "name": "cleared",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired only when the clear button is pressed."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "inputFocus",
                "name": "input-focus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired only when the input is focused."
                },
                "complexType": {
                    "original": "FocusEvent",
                    "resolved": "FocusEvent",
                    "references": {
                        "FocusEvent": {
                            "location": "global",
                            "id": "global::FocusEvent"
                        }
                    }
                }
            }, {
                "method": "inputBlur",
                "name": "input-blur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired only when the input is blurred."
                },
                "complexType": {
                    "original": "FocusEvent",
                    "resolved": "FocusEvent",
                    "references": {
                        "FocusEvent": {
                            "location": "global",
                            "id": "global::FocusEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
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
            }];
    }
}
//# sourceMappingURL=ir-input.js.map
