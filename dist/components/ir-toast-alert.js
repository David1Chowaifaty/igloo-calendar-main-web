import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const irToastAlertCss = ":host{--toast-shadow:var(--wa-shadow-l);--toast-translate:16px;--toast-accent-fg:#0f172a;display:block;box-sizing:border-box;max-width:min(420px, calc(100vw - 32px));pointer-events:auto;font-family:inherit}:host([data-position*='left']){--toast-translate:-16px}.toast{box-shadow:var(--toast-shadow);animation:toast-enter 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards;border-radius:var(--wa-panel-border-radius)}:host([data-leaving='true']) .toast{animation:toast-exit 200ms ease forwards}:host(:focus-within) .toast{box-shadow:0 0 0 2px #93c5fd, var(--toast-shadow)}.toast__leading{width:40px;height:40px;border-radius:20px;display:flex;align-items:center;justify-content:center;color:var(--toast-accent-fg)}.toast__icon{width:20px;height:20px;fill:currentColor}.toast__body{flex:1 1 0%;min-width:0;display:flex;flex-direction:column;gap:0.25rem}.toast__title{margin:0;font-weight:600;font-size:0.95rem}.toast__description{margin:0;font-size:0.85rem;line-height:1.35;opacity:0.85}@keyframes toast-enter{from{opacity:0;transform:translateX(var(--toast-translate)) translateY(6px)}to{opacity:1;transform:translateX(0) translateY(0)}}@keyframes toast-exit{from{opacity:1;transform:translateX(0) translateY(0)}to{opacity:0;transform:translateX(calc(var(--toast-translate) * 1.25)) translateY(-4px)}}@media (prefers-reduced-motion: reduce){.toast{animation:none}:host([data-leaving='true']) .toast{animation:none}}:host([variant='success']){--toast-accent-fg:#047857}:host([variant='warning']){--toast-accent-fg:#92400e}:host([variant='danger']){--toast-accent-fg:#b91c1c}";
const IrToastAlertStyle0 = irToastAlertCss;

const IrToastAlert$1 = /*@__PURE__*/ proxyCustomElement(class IrToastAlert extends HTMLElement {
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
        return (h("div", { key: '56a78d4112c7fe2cafb392d8159ac340b4884175', class: "toast", "data-position": this.position, "data-leaving": this.leaving, onMouseEnter: () => this.setInteracting(true), onMouseLeave: () => this.setInteracting(false), onFocusin: () => this.setInteracting(true), onFocusout: () => this.setInteracting(false) }, h("wa-callout", { key: '8a61c9a4f5ad2d8e0fb3782a6b8d92c13b9264d1', variant: this.calloutVariant }, this.getIcon(), h("div", { key: '47af46ac0378ebced57d2b328d93b7a7c5d83b1f', class: "toast__body" }, this.label && h("h3", { key: 'b0fc463db8ccae4d3c7447d56c77e173bf9b484c', class: "toast__title" }, this.label), this.description && h("p", { key: '876af7d5e70fc5e8605324aa67541d3dcb63570b', class: "toast__description" }, this.description)))));
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
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-toast-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrToastAlert$1);
            }
            break;
    } });
}

const IrToastAlert = IrToastAlert$1;
const defineCustomElement = defineCustomElement$1;

export { IrToastAlert, defineCustomElement };

//# sourceMappingURL=ir-toast-alert.js.map