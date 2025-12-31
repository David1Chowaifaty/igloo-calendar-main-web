import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const irToastAlertCss = ":host{--toast-shadow:var(--wa-shadow-l);--toast-translate:16px;--toast-accent-fg:#0f172a;display:block;box-sizing:border-box;max-width:min(420px, calc(100vw - 32px));pointer-events:auto;font-family:inherit}:host([data-position*='left']){--toast-translate:-16px}.toast{box-shadow:var(--toast-shadow);animation:toast-enter 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards;border-radius:var(--wa-panel-border-radius)}:host([data-leaving='true']) .toast{animation:toast-exit 200ms ease forwards}:host(:focus-within) .toast{box-shadow:0 0 0 2px #93c5fd, var(--toast-shadow)}.toast__leading{width:40px;height:40px;border-radius:20px;display:flex;align-items:center;justify-content:center;color:var(--toast-accent-fg)}.toast__icon{width:20px;height:20px;fill:currentColor}.toast__body{flex:1 1 0%;min-width:0;display:flex;flex-direction:column;gap:0.25rem}.toast__title{margin:0;font-weight:600;font-size:0.95rem}.toast__description{margin:0;font-size:0.85rem;line-height:1.35;opacity:0.85}@keyframes toast-enter{from{opacity:0;transform:translateX(var(--toast-translate)) translateY(6px)}to{opacity:1;transform:translateX(0) translateY(0)}}@keyframes toast-exit{from{opacity:1;transform:translateX(0) translateY(0)}to{opacity:0;transform:translateX(calc(var(--toast-translate) * 1.25)) translateY(-4px)}}@media (prefers-reduced-motion: reduce){.toast{animation:none}:host([data-leaving='true']) .toast{animation:none}}:host([variant='success']){--toast-accent-fg:#047857}:host([variant='warning']){--toast-accent-fg:#92400e}:host([variant='danger']){--toast-accent-fg:#b91c1c}";
const IrToastAlertStyle0 = irToastAlertCss;

const IrToastAlert = /*@__PURE__*/ proxyCustomElement(class IrToastAlert extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.irToastDismiss = createEvent(this, "irToastDismiss", 7);
        this.irToastAction = createEvent(this, "irToastAction", 7);
        this.irToastInteractionChange = createEvent(this, "irToastInteractionChange", 7);
    }
    /** Unique identifier passed back to the provider when interacting with the toast */
    toastId;
    /** Heading displayed at the top of the toast */
    label;
    /** Plain text description for the toast body */
    description;
    /** Maps to visual style tokens */
    variant = 'info';
    /** Whether the close button should be rendered */
    dismissible = true;
    /** Optional primary action label */
    actionLabel;
    /** Indicates when the provider is playing the exit animation */
    leaving = false;
    /** Toast position drives enter/exit direction */
    position = 'top-right';
    irToastDismiss;
    irToastAction;
    irToastInteractionChange;
    interacting = false;
    setInteracting = (interacting) => {
        if (this.interacting === interacting) {
            return;
        }
        this.interacting = interacting;
        this.irToastInteractionChange.emit({ id: this.toastId, interacting });
    };
    getIcon() {
        switch (this.variant) {
            case 'success':
                return h("wa-icon", { slot: "icon", name: "circle-check" });
            case 'warning':
                return h("wa-icon", { slot: "icon", name: "triangle-exclamation" });
            case 'danger':
                return h("wa-icon", { slot: "icon", name: "triangle-exclamation" });
            default:
                return h("wa-icon", { slot: "icon", name: "circle-info" });
        }
    }
    get calloutVariant() {
        switch (this.variant) {
            case 'info':
                return 'neutral';
            case 'success':
                return 'success';
            case 'warning':
                return 'warning';
            case 'danger':
                return 'danger';
        }
    }
    render() {
        return (h("div", { key: '3bae2d7ecf4b8848fdbfb8768d859fdd80eec9a4', class: "toast", "data-position": this.position, "data-leaving": this.leaving, onMouseEnter: () => this.setInteracting(true), onMouseLeave: () => this.setInteracting(false), onFocusin: () => this.setInteracting(true), onFocusout: () => this.setInteracting(false) }, h("wa-callout", { key: '0da3721bf1e96dd8f95a36a2e95010cc82502639', variant: this.calloutVariant }, this.getIcon(), h("div", { key: 'b1b8dcc897d61e3e513166409328d2418c79e2aa', class: "toast__body" }, this.label && h("h3", { key: '54452811e2c82b8f9ba559cb224c12219c6bd5c8', class: "toast__title" }, this.label), this.description && h("p", { key: 'c77cdfad225e8e1aa18c2ac64b900e6066fe1213', class: "toast__description" }, this.description)))));
    }
    static get style() { return IrToastAlertStyle0; }
}, [1, "ir-toast-alert", {
        "toastId": [1, "toast-id"],
        "label": [1],
        "description": [1],
        "variant": [513],
        "dismissible": [4],
        "actionLabel": [1, "action-label"],
        "leaving": [4],
        "position": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-toast-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrToastAlert);
            }
            break;
    } });
}

export { IrToastAlert as I, defineCustomElement as d };

//# sourceMappingURL=ir-toast-alert2.js.map