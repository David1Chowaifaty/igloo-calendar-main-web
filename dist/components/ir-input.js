import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as MaskedNumber, M as MaskedRange, I as IMask } from './index4.js';
import { h as hooks } from './moment.js';
import { v as v4 } from './v4.js';

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

const irInputCss = ":host{--ir-gap:1rem;--ir-input-padding-block:0.75rem;--ir-danger:#ff4961;--ir-input-padding-inline:1rem;--ir-input-radius:var(--ir-radius);--ir-input-border:1px solid var(--ir-border);--ir-input-border-focus:#1e9ff2;--ir-input-bg:var(--ir-input);--ir-input-color:var(--ir-input-foreground);--ir-label-font-size:1rem;--ir-label-color:#444;--ir-label-floating-font-size:0.875rem;--ir-label-floating-color:#1e9ff2;--ir-floating-offset-block:0.5rem;--ir-floating-offset-inline:1rem;--ir-floating-transition:150ms ease;--ir-clear-size:1.5rem;--ir-clear-padding:0.25rem;--ir-prefix-width:0px;--ir-input-ring-width-focus:3px;--ir-input-placeholder-color:#cacfe7;--ir-input-ring-color-focus:transparent;display:flex;gap:var(--ir-gap);flex-direction:column}:host([label-position='side']){flex-direction:row;align-items:center}.input-field{padding-block:var(--ir-input-padding-block);padding-inline:var(--ir-input-padding-inline);border-radius:var(--ir-input-radius);border:var(--ir-input-border);background:var(--ir-input-bg);font-size:1rem;color:var(--ir-input-color);outline:none;width:100%;box-sizing:border-box;position:relative;flex:1 1 0%;padding-inline-start:calc(var(--ir-input-padding-inline) + var(--ir-prefix-width, 0px));height:2.8rem;transition:border-color var(--ir-floating-transition), box-shadow var(--ir-floating-transition)}:host([aria-invalid='true']) .input-field{border-color:var(--ir-danger)}.input-field:read-only{cursor:default}.input-field:disabled{cursor:not-allowed;opacity:0.5}.input-wrapper{position:relative;flex:1 1 0%}.input-field:focus{border-color:var(--ir-input-border-focus);box-shadow:0 0 0 var(--ir-input-ring-width-focus) var(--ir-input-ring-color-focus)}:host([label-position='floating']){position:relative}.input-field::placeholder{color:var(--ir-input-placeholder-color)}:host([label-position='floating']) .input-field::placeholder{color:transparent}.input-label{box-sizing:border-box;font-size:var(--ir-label-font-size);color:var(--ir-label-color);font-weight:bold;transition:transform var(--ir-floating-transition), color var(--ir-floating-transition), font-size var(--ir-floating-transition), top var(--ir-floating-transition),\n    inset-inline-start var(--ir-floating-transition), padding var(--ir-floating-transition), background-color var(--ir-floating-transition)}:host([label-position='floating']) .input-label{position:absolute;top:50%;transform:translateY(-50%);inset-inline-start:calc(var(--ir-input-padding-inline) + var(--ir-prefix-width, 0px));pointer-events:none;z-index:1;font-weight:400;padding-inline:0;background:transparent}:host([label-position='floating']) .input-label[data-active='true']{top:0;inset-inline-start:var(--ir-floating-offset-inline);transform:translateY(-50%);font-size:var(--ir-label-floating-font-size);background:var(--ir-input-bg);padding-inline:0.25rem}:host([label-position='floating']):focus-within .input-label[data-active='true']{color:var(--ir-label-floating-color) !important}.input-suffix,.input-prefix{z-index:1;box-sizing:border-box;display:flex;gap:0.25rem;align-items:center;position:absolute;bottom:0;top:0}.input-suffix:dir(ltr),.input-prefix:dir(rtl){right:var(--ir-floating-offset-inline)}.input-suffix:dir(rtl),.input-prefix:dir(ltr){left:var(--ir-floating-offset-inline)}.clear-button,.visibility-button{all:unset;display:flex;box-sizing:border-box;align-items:center;justify-content:center;width:var(--ir-clear-size);height:var(--ir-clear-size);display:inline-flex;align-items:center;justify-content:center;padding:var(--ir-clear-padding);cursor:pointer;margin:auto;border-radius:0.5rem}.clear-button:hover,.visibility-button:hover{background:var(--ir-muted)}";
const IrInputStyle0 = irInputCss;

const globalCss = ":root{--ir-green:#629a4c;--ir-orange:#ff9149;--ir-red:#ff4961;--ir-dark-blue:#2c4a91;--ir-dark-blue-2:#406cd3}.bg-ir-green{background-color:var(--ir-green)}.bg-ir-orange{background-color:var(--ir-orange)}.bg-ir-red{background-color:var(--ir-red)}.bg-ir-dark-blue{background-color:var(--ir-dark-blue)}.bg-ir-dark-blue-2{background-color:var(--ir-dark-blue-2)}.color-ir-green{color:var(--ir-green)}.color-ir-orange{color:var(--ir-orange)}.color-ir-red{color:var(--ir-red)}.color-ir-dark-blue{color:var(--ir-dark-blue)}.color-ir-dark-blue-2{color:var(--ir-dark-blue-2)}.color-ir-dark-blue-hover{color:var(--ir-dark-blue);transition:color 0.2s ease-in-out}.color-ir-dark-blue-hover:hover{color:var(--ir-dark-blue-2)}.ir-table-row{background:black !important;padding:3rem}";
const IrInputStyle1 = globalCss;

const IrInput$1 = /*@__PURE__*/ proxyCustomElement(class IrInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.inputChange = createEvent(this, "input-change", 7);
        this.cleared = createEvent(this, "cleared", 7);
        this.inputFocus = createEvent(this, "input-focus", 7);
        this.inputBlur = createEvent(this, "input-blur", 7);
    }
    get el() { return this; }
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
    static get watchers() { return {
        "mask": ["handleMaskPropsChange"],
        "min": ["handleMaskPropsChange"],
        "max": ["handleMaskPropsChange"],
        "value": ["handleValueChange"]
    }; }
    static get style() { return IrInputStyle0 + IrInputStyle1; }
}, [1, "ir-input", {
        "placeholder": [1],
        "label": [1],
        "value": [1537],
        "disabled": [516],
        "readonly": [516],
        "required": [516],
        "type": [513],
        "labelPosition": [513, "label-position"],
        "clearable": [516],
        "maxLength": [514, "max-length"],
        "prefixHidden": [4, "prefix-hidden"],
        "suffixHidden": [4, "suffix-hidden"],
        "max": [514],
        "min": [514],
        "mask": [1],
        "_type": [32],
        "inputFocused": [32]
    }, undefined, {
        "mask": ["handleMaskPropsChange"],
        "min": ["handleMaskPropsChange"],
        "max": ["handleMaskPropsChange"],
        "value": ["handleValueChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInput$1);
            }
            break;
    } });
}

const IrInput = IrInput$1;
const defineCustomElement = defineCustomElement$1;

export { IrInput, defineCustomElement };

//# sourceMappingURL=ir-input.js.map