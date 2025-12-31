import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irValidatorCss = ":host{display:block;position:relative}.error-message{font-weight:var(--wa-form-control-hint-font-weight);margin-block-start:0.5em;font-size:var(--wa-font-size-smaller);line-height:var(--wa-form-control-label-line-height);color:var(--wa-color-danger-fill-loud);}";
const IrValidatorStyle0 = irValidatorCss;

const IrValidator = /*@__PURE__*/ proxyCustomElement(class IrValidator extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.validationChange = createEvent(this, "irValidationChange", 7);
        this.valueChange = createEvent(this, "irValueChange", 7);
    }
    get el() { return this; }
    /** Zod schema used to validate the child control's value. */
    schema;
    value;
    showErrorMessage;
    /** Enables automatic validation on every value change. */
    autovalidate;
    /** Optional form id. Falls back to the closest ancestor form when omitted. */
    form;
    /** Event names (space/comma separated) dispatched when the child value changes. */
    valueEvent = 'input input-change value-change select-change';
    /** Event names (space/comma separated) dispatched when the child loses focus. */
    blurEvent = 'blur input-blur select-blur';
    /** Debounce delay (ms) before running validation for autovalidated changes. */
    validationDebounce = 200;
    /** Emits whenever the validation state toggles. */
    validationChange;
    /** Emits whenever the tracked value changes. */
    valueChange;
    isValid = true;
    autoValidateActive = false;
    errorMessage = '';
    childEl;
    formEl;
    slotEl;
    currentValue;
    hasInteracted = false;
    validationTimer;
    valueEventsBound = [];
    blurEventsBound = [];
    componentWillLoad() {
        if (!this.schema) {
            throw new Error('<ir-validator> requires a `schema` prop.');
        }
        this.syncAutovalidateFlag(this.autovalidate);
    }
    componentDidLoad() {
        this.slotEl = this.el.shadowRoot?.querySelector('slot');
        this.slotEl?.addEventListener('slotchange', this.handleSlotChange);
        this.initializeChildReference();
        this.attachFormListener();
    }
    disconnectedCallback() {
        this.teardownChildListeners();
        this.detachFormListener();
        this.slotEl?.removeEventListener('slotchange', this.handleSlotChange);
        this.clearValidationTimer();
    }
    handleSchemaChange() {
        if (this.autoValidateActive && this.hasInteracted) {
            this.flushValidation();
        }
    }
    handleAutoValidatePropChange(next) {
        this.syncAutovalidateFlag(next);
        if (this.autoValidateActive) {
            this.flushValidation();
        }
    }
    handleFormPropChange() {
        this.detachFormListener();
        this.attachFormListener();
    }
    handleValueEventChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.rebindChildListeners();
    }
    handleBlurEventChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.rebindChildListeners();
    }
    syncAutovalidateFlag(next) {
        this.autoValidateActive = JSON.parse(String(next ?? false));
    }
    parseEvents(spec) {
        if (!spec)
            return [];
        return spec
            .split(/[\s,]+/)
            .map(token => token.trim())
            .filter(Boolean);
    }
    handleValuePropChange(next, previous) {
        if (Object.is(next, previous))
            return;
        // keep the tracked value in sync with external changes without emitting another change event
        this.updateValue(next, { suppressValidation: true, emitChange: false });
        if (this.autoValidateActive && this.hasInteracted) {
            this.flushValidation();
        }
    }
    handleSlotChange = () => {
        this.initializeChildReference();
    };
    initializeChildReference() {
        const child = this.pickSingleChild();
        if (child === this.childEl)
            return;
        this.teardownChildListeners();
        if (!child)
            return;
        this.childEl = child;
        this.hasInteracted = false;
        this.registerChildListeners();
        const initialValue = this.readValueFromChild();
        this.updateValue(initialValue, { suppressValidation: !this.autoValidateActive, emitChange: true });
        if (!this.autoValidateActive) {
            this.updateAriaValidity(this.isValid);
        }
    }
    pickSingleChild() {
        const slotChildren = this.slotEl?.assignedElements({ flatten: true }) ?? Array.from(this.el.children);
        const elements = slotChildren.filter(node => node.nodeType === Node.ELEMENT_NODE);
        if (elements.length === 0) {
            console.warn('<ir-validator> requires exactly one child element but found none.');
            return undefined;
        }
        if (elements.length > 1) {
            console.warn(`<ir-validator> requires exactly one child element but found ${elements.length}. Using the first.`);
        }
        return elements[0];
    }
    registerChildListeners() {
        if (!this.childEl)
            return;
        this.unbindChildListeners();
        this.valueEventsBound = this.parseEvents(this.valueEvent);
        this.blurEventsBound = this.parseEvents(this.blurEvent);
        this.valueEventsBound.forEach(eventName => this.childEl.addEventListener(eventName, this.handleValueEvent));
        this.blurEventsBound.forEach(eventName => this.childEl.addEventListener(eventName, this.handleBlurEvent));
    }
    unbindChildListeners() {
        if (!this.childEl)
            return;
        this.valueEventsBound.forEach(eventName => this.childEl.removeEventListener(eventName, this.handleValueEvent));
        this.blurEventsBound.forEach(eventName => this.childEl.removeEventListener(eventName, this.handleBlurEvent));
        this.valueEventsBound = [];
        this.blurEventsBound = [];
    }
    teardownChildListeners() {
        if (this.childEl) {
            this.unbindChildListeners();
            this.childEl = undefined;
        }
        this.clearValidationTimer();
    }
    rebindChildListeners() {
        if (!this.childEl)
            return;
        this.registerChildListeners();
    }
    handleValueEvent = (event) => {
        if (!this.childEl)
            return;
        const nextValue = this.extractEventValue(event);
        this.hasInteracted = true;
        this.updateValue(nextValue);
    };
    handleBlurEvent = () => {
        if (!this.childEl)
            return;
        this.hasInteracted = true;
        if (this.autoValidateActive) {
            this.flushValidation();
        }
    };
    extractEventValue(event) {
        if ('detail' in event && event['detail'] && typeof event['detail'] === 'object' && 'value' in event.detail) {
            return event.detail.value;
        }
        const target = event.target;
        if (target && 'value' in target) {
            return target.value;
        }
        return this.readValueFromChild();
    }
    readValueFromChild() {
        if (this.value !== undefined) {
            return this.value;
        }
        if (!this.childEl)
            return undefined;
        if ('value' in this.childEl) {
            return this.childEl.value;
        }
        return this.childEl.getAttribute?.('value');
    }
    updateValue(nextValue, options = {}) {
        const previous = this.currentValue;
        this.currentValue = nextValue;
        if (options.emitChange !== false && !Object.is(previous, nextValue)) {
            this.valueChange.emit({ value: this.currentValue });
        }
        if (!options.suppressValidation && this.autoValidateActive && this.hasInteracted) {
            this.scheduleValidation();
        }
    }
    validateCurrentValue(forceDisplay = false) {
        if (!this.schema)
            return true;
        const value = this.currentValue ?? this.readValueFromChild();
        this.currentValue = value;
        const result = this.schema.safeParse(value);
        const nextValidity = result.success;
        const previousValidity = this.isValid;
        this.isValid = nextValidity;
        if (!result.success) {
            this.errorMessage = result.error.issues[0]?.message ?? '';
        }
        else {
            this.errorMessage = '';
        }
        const shouldDisplay = forceDisplay || (this.autoValidateActive && this.hasInteracted);
        if (shouldDisplay) {
            this.updateAriaValidity(nextValidity);
            if (previousValidity !== nextValidity) {
                this.emitValidationChange();
            }
        }
        return nextValidity;
    }
    updateAriaValidity(valid) {
        if (!this.childEl)
            return;
        if (valid) {
            this.childEl.removeAttribute('aria-invalid');
        }
        else {
            this.childEl.setAttribute('aria-invalid', 'true');
        }
    }
    emitValidationChange() {
        this.validationChange.emit({ valid: this.isValid, value: this.currentValue });
    }
    attachFormListener() {
        this.formEl = this.resolveFormRef();
        this.formEl?.addEventListener('submit', this.handleFormSubmit, true);
    }
    detachFormListener() {
        this.formEl?.removeEventListener('submit', this.handleFormSubmit, true);
        this.formEl = undefined;
    }
    resolveFormRef() {
        if (typeof document !== 'undefined' && this.form) {
            const provided = document.getElementById(this.form);
            if (provided && provided instanceof HTMLFormElement) {
                return provided;
            }
        }
        return this.el.closest('form');
    }
    handleFormSubmit = () => {
        this.hasInteracted = true;
        const valid = this.flushValidation();
        if (!valid && !this.autoValidateActive) {
            this.autoValidateActive = true;
        }
    };
    scheduleValidation(immediate = false) {
        this.clearValidationTimer();
        const delay = Number(this.validationDebounce);
        if (immediate || !isFinite(delay) || delay <= 0) {
            return this.validateCurrentValue(true);
        }
        this.validationTimer = setTimeout(() => {
            this.validationTimer = undefined;
            this.validateCurrentValue(true);
        }, delay);
        return this.isValid;
    }
    flushValidation() {
        return this.scheduleValidation(true);
    }
    clearValidationTimer() {
        if (this.validationTimer !== undefined) {
            clearTimeout(this.validationTimer);
            this.validationTimer = undefined;
        }
    }
    render() {
        return (h(Host, { key: '712152d9857c41d24caa81a83c01513f87bb8f09' }, h("slot", { key: 'f9042654e6de46e5b79c13e7d7547d8d1dc1f2fd' }), !this.isValid && this.showErrorMessage && (h("span", { key: '1e587c6a9b73f182be6596c122eaedecde7f4977', part: "error-message", class: "error-message" }, this.errorMessage))));
    }
    static get watchers() { return {
        "schema": ["handleSchemaChange"],
        "autovalidate": ["handleAutoValidatePropChange"],
        "form": ["handleFormPropChange"],
        "valueEvent": ["handleValueEventChange"],
        "blurEvent": ["handleBlurEventChange"],
        "value": ["handleValuePropChange"]
    }; }
    static get style() { return IrValidatorStyle0; }
}, [1, "ir-validator", {
        "schema": [16],
        "value": [8],
        "showErrorMessage": [4, "show-error-message"],
        "autovalidate": [516],
        "form": [1],
        "valueEvent": [1, "value-event"],
        "blurEvent": [1, "blur-event"],
        "validationDebounce": [2, "validation-debounce"],
        "isValid": [32],
        "autoValidateActive": [32],
        "errorMessage": [32]
    }, undefined, {
        "schema": ["handleSchemaChange"],
        "autovalidate": ["handleAutoValidatePropChange"],
        "form": ["handleFormPropChange"],
        "valueEvent": ["handleValueEventChange"],
        "blurEvent": ["handleBlurEventChange"],
        "value": ["handleValuePropChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-validator":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrValidator);
            }
            break;
    } });
}

export { IrValidator as I, defineCustomElement as d };

//# sourceMappingURL=ir-validator2.js.map