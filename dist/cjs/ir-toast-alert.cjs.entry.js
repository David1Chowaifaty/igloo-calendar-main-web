'use strict';

var index = require('./index-OzksjAXP.js');

const irToastAlertCss = () => `:host{--toast-shadow:var(--wa-shadow-l);--toast-translate:16px;--toast-accent-fg:#0f172a;display:block;box-sizing:border-box;max-width:min(420px, calc(100vw - 32px));pointer-events:auto;font-family:inherit}:host([data-position*='left']){--toast-translate:-16px}.toast{box-shadow:var(--toast-shadow);animation:toast-enter 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards;border-radius:var(--wa-panel-border-radius)}:host([data-leaving='true']) .toast{animation:toast-exit 200ms ease forwards}:host(:focus-within) .toast{box-shadow:0 0 0 2px #93c5fd, var(--toast-shadow)}.toast__leading{width:40px;height:40px;border-radius:20px;display:flex;align-items:center;justify-content:center;color:var(--toast-accent-fg)}.toast__icon{width:20px;height:20px;fill:currentColor}.toast__body{flex:1 1 0%;min-width:0;display:flex;flex-direction:column;gap:0.25rem}.toast__title{margin:0;font-weight:600;font-size:0.95rem}.toast__description{margin:0;font-size:0.85rem;line-height:1.35;opacity:0.85}@keyframes toast-enter{from{opacity:0;transform:translateX(var(--toast-translate)) translateY(6px)}to{opacity:1;transform:translateX(0) translateY(0)}}@keyframes toast-exit{from{opacity:1;transform:translateX(0) translateY(0)}to{opacity:0;transform:translateX(calc(var(--toast-translate) * 1.25)) translateY(-4px)}}@media (prefers-reduced-motion: reduce){.toast{animation:none}:host([data-leaving='true']) .toast{animation:none}}:host([variant='success']){--toast-accent-fg:#047857}:host([variant='warning']){--toast-accent-fg:#92400e}:host([variant='danger']){--toast-accent-fg:#b91c1c}`;

const IrToastAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irToastDismiss = index.createEvent(this, "irToastDismiss");
        this.irToastAction = index.createEvent(this, "irToastAction");
        this.irToastInteractionChange = index.createEvent(this, "irToastInteractionChange");
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
                return index.h("wa-icon", { slot: "icon", name: "circle-check" });
            case 'warning':
                return index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" });
            case 'danger':
                return index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" });
            default:
                return index.h("wa-icon", { slot: "icon", name: "circle-info" });
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
        return (index.h("div", { key: 'ec15ca80e2b4a638c54bdb964a2cd37010299f23', class: "toast", "data-position": this.position, "data-leaving": this.leaving, onMouseEnter: () => this.setInteracting(true), onMouseLeave: () => this.setInteracting(false), onFocusin: () => this.setInteracting(true), onFocusout: () => this.setInteracting(false) }, index.h("wa-callout", { key: '98a57980b7d061a5db05c6b2737dd635f26eb00a', variant: this.calloutVariant }, this.getIcon(), index.h("div", { key: '9689fd79e1a881e36cfc750867598f3fdd157bae', class: "toast__body" }, this.label && index.h("h3", { key: 'be215827e00c437eac8fd36f705331fadb3fd4a3', class: "toast__title" }, this.label), this.description && index.h("p", { key: 'c988e8d92be45e13f6f52e25b8bf2bc246ea512e', class: "toast__description" }, this.description)))));
    }
};
IrToastAlert.style = irToastAlertCss();

exports.ir_toast_alert = IrToastAlert;
