import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irSuccessLoaderCss = ":host{display:block}.spinner{transform-origin:center;animation:spinner_svv2 0.75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}";
const IrSuccessLoaderStyle0 = irSuccessLoaderCss;

const IrSuccessLoader = /*@__PURE__*/ proxyCustomElement(class IrSuccessLoader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.loaderComplete = createEvent(this, "loaderComplete", 7);
    }
    /**
     * How long the spinner should be shown before transitioning to the success icon.
     * Value is expressed in milliseconds.
     */
    spinnerDuration = 1500;
    /**
     * How long the success icon should be shown before the loader dispatches the completion event.
     * Value is expressed in milliseconds.
     */
    successDuration = 1000;
    /**
     * Whether the loader should automatically start its cycle when it becomes active.
     */
    autoStart = true;
    /**
     * Controls the visibility of the loader. Setting this to `true` starts the spinner/success cycle.
     */
    active = true;
    /**
     * Emit when the loader finishes the success state and should be hidden by the parent.
     */
    loaderComplete;
    phase = 'spinner';
    spinnerTimer;
    successTimer;
    componentWillLoad() {
        if (this.autoStart && this.active) {
            this.startCycle();
        }
    }
    disconnectedCallback() {
        this.clearTimers();
    }
    onActiveChange(isActive) {
        if (isActive) {
            if (this.autoStart) {
                this.startCycle();
            }
        }
        else {
            this.resetCycle();
        }
    }
    onDurationChange() {
        if (this.active && this.autoStart) {
            this.startCycle();
        }
    }
    startCycle() {
        this.clearTimers();
        this.phase = 'spinner';
        const spinnerDelay = Math.max(0, Number(this.spinnerDuration) || 0);
        if (spinnerDelay === 0) {
            this.showSuccess();
            return;
        }
        this.spinnerTimer = window.setTimeout(() => this.showSuccess(), spinnerDelay);
    }
    showSuccess() {
        this.phase = 'success';
        const successDelay = Math.max(0, Number(this.successDuration) || 0);
        if (successDelay === 0) {
            this.handleCompletion();
            return;
        }
        this.successTimer = window.setTimeout(() => this.handleCompletion(), successDelay);
    }
    handleCompletion() {
        this.loaderComplete.emit();
        this.active = false;
    }
    resetCycle() {
        this.clearTimers();
        this.phase = 'spinner';
    }
    clearTimers() {
        if (this.spinnerTimer) {
            clearTimeout(this.spinnerTimer);
            this.spinnerTimer = undefined;
        }
        if (this.successTimer) {
            clearTimeout(this.successTimer);
            this.successTimer = undefined;
        }
    }
    render() {
        return (h(Host, { key: '257e7f448bee6ebb352ef1c3eebe14f6e27bdecc' }, this.phase === 'spinner' ? h("wa-spinner", null) : h("wa-icon", { part: "check", name: "check", style: { color: 'var(--wa-color-success-fill-loud,#45b16d)' } })));
    }
    static get watchers() { return {
        "active": ["onActiveChange"],
        "spinnerDuration": ["onDurationChange"],
        "successDuration": ["onDurationChange"]
    }; }
    static get style() { return IrSuccessLoaderStyle0; }
}, [1, "ir-success-loader", {
        "spinnerDuration": [2, "spinner-duration"],
        "successDuration": [2, "success-duration"],
        "autoStart": [4, "auto-start"],
        "active": [1540],
        "phase": [32]
    }, undefined, {
        "active": ["onActiveChange"],
        "spinnerDuration": ["onDurationChange"],
        "successDuration": ["onDurationChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-success-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-success-loader":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSuccessLoader);
            }
            break;
    } });
}

export { IrSuccessLoader as I, defineCustomElement as d };

//# sourceMappingURL=ir-success-loader2.js.map