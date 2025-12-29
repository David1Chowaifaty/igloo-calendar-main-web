'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irToastAlertCss = ":host{--toast-bg:#ffffff;--toast-border:#e2e8f0;--toast-fg:#0f172a;--toast-muted:#475569;--toast-accent-bg:#e2e8f0;--toast-accent-fg:#0f172a;--toast-link:#0f62fe;--toast-shadow:0 18px 45px rgba(15, 23, 42, 0.14);--toast-translate:16px;display:block;box-sizing:border-box;max-width:min(420px, calc(100vw - 32px));pointer-events:auto;font-family:inherit}:host([data-position*='left']){--toast-translate:-16px}.toast{display:grid;grid-template-columns:auto 1fr auto;gap:0.75rem;background:var(--toast-bg);border:1px solid var(--toast-border);border-radius:16px;padding:0.85rem 1rem;box-shadow:var(--toast-shadow);color:var(--toast-fg);animation:toast-enter 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards}:host([data-leaving='true']) .toast{animation:toast-exit 200ms ease forwards}:host(:focus-within) .toast{box-shadow:0 0 0 2px #93c5fd, var(--toast-shadow)}.toast__leading{width:40px;height:40px;border-radius:20px;display:flex;align-items:center;justify-content:center;background:var(--toast-accent-bg);color:var(--toast-accent-fg)}.toast__icon{width:20px;height:20px;fill:currentColor}.toast__body{min-width:0;display:flex;flex-direction:column;gap:0.25rem}.toast__title{margin:0;font-weight:600;font-size:0.95rem;color:var(--toast-fg)}.toast__description{margin:0;color:var(--toast-muted);font-size:0.85rem;line-height:1.35}.toast__actions{display:flex;gap:0.25rem;align-items:flex-start}button{font:inherit;border:none;background:none;color:inherit;cursor:pointer}.toast__action{padding:0.25rem 0.5rem;border-radius:6px;font-weight:600;color:var(--toast-link);transition:background-color 120ms ease}.toast__action:hover,.toast__action:focus-visible{background:rgba(15, 98, 254, 0.1)}.toast__dismiss{width:32px;height:32px;border-radius:16px;display:flex;align-items:center;justify-content:center;color:var(--toast-muted);transition:background-color 120ms ease, color 120ms ease}.toast__dismiss svg{width:14px;height:14px;fill:currentColor}.toast__dismiss:hover,.toast__dismiss:focus-visible{background:rgba(15, 23, 42, 0.08);color:var(--toast-fg)}@keyframes toast-enter{from{opacity:0;transform:translateX(var(--toast-translate)) translateY(6px)}to{opacity:1;transform:translateX(0) translateY(0)}}@keyframes toast-exit{from{opacity:1;transform:translateX(0) translateY(0)}to{opacity:0;transform:translateX(calc(var(--toast-translate) * 1.25)) translateY(-4px)}}@media (prefers-reduced-motion: reduce){.toast{animation:none}:host([data-leaving='true']) .toast{animation:none}}:host([data-variant='success']){--toast-bg:#ecfdf5;--toast-border:#a7f3d0;--toast-accent-bg:rgba(34, 197, 94, 0.18);--toast-accent-fg:#047857;--toast-link:#047857}:host([data-variant='warning']){--toast-bg:#fffbeb;--toast-border:#fde68a;--toast-accent-bg:rgba(245, 158, 11, 0.18);--toast-accent-fg:#92400e;--toast-link:#92400e}:host([data-variant='danger']){--toast-bg:#fef2f2;--toast-border:#fecaca;--toast-accent-bg:rgba(248, 113, 113, 0.18);--toast-accent-fg:#b91c1c;--toast-link:#b91c1c}";
const IrToastAlertStyle0 = irToastAlertCss;

const IrToastAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irToastDismiss = index.createEvent(this, "irToastDismiss", 7);
        this.irToastAction = index.createEvent(this, "irToastAction", 7);
        this.irToastInteractionChange = index.createEvent(this, "irToastInteractionChange", 7);
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
    handleAction = () => {
        this.irToastAction.emit({ id: this.toastId });
    };
    handleDismiss = () => {
        if (!this.dismissible) {
            return;
        }
        this.irToastDismiss.emit({ id: this.toastId, reason: 'manual' });
    };
    setInteracting = (interacting) => {
        this.irToastInteractionChange.emit({ id: this.toastId, interacting });
    };
    getIcon() {
        switch (this.variant) {
            case 'success':
                return (index.h("svg", { viewBox: "0 0 24 24", class: "toast__icon", "aria-hidden": "true" }, index.h("path", { d: "M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm-1.2-5.2l6.3-6.3-1.4-1.4-4.9 4.9-2.1-2.1-1.4 1.4 3.5 3.5z" })));
            case 'warning':
                return (index.h("svg", { viewBox: "0 0 24 24", class: "toast__icon", "aria-hidden": "true" }, index.h("path", { d: "M12 2 1 21h22L12 2zm0 5 6.46 12H5.54L12 7zm-1 4v4h2v-4h-2zm0 6v2h2v-2h-2z" })));
            case 'danger':
                return (index.h("svg", { viewBox: "0 0 24 24", class: "toast__icon", "aria-hidden": "true" }, index.h("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })));
            default:
                return (index.h("svg", { viewBox: "0 0 24 24", class: "toast__icon", "aria-hidden": "true" }, index.h("path", { d: "M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })));
        }
    }
    render() {
        return (index.h(index.Host, { key: 'e1451bfa6be93ca63e13addcc404e0071cfb48d2', role: "status", "aria-live": "polite", "aria-atomic": "true", "data-variant": this.variant, "data-leaving": this.leaving ? 'true' : 'false', "data-position": this.position, onMouseEnter: () => this.setInteracting(true), onMouseLeave: () => this.setInteracting(false), onFocusin: () => this.setInteracting(true), onFocusout: () => this.setInteracting(false) }, index.h("article", { key: 'ee2de68da239a427b6eb48917a0ebff77127ee92', class: "toast", part: "base" }, index.h("div", { key: '258cdd3587d92ab48aa35ff9b9e98a24fc48c69c', class: "toast__leading", part: "icon" }, this.getIcon()), index.h("div", { key: 'e34c8cff75eaeb09a92a1533cda04044e23df5f7', class: "toast__body", part: "content" }, this.label && (index.h("p", { key: '392081c2c2a8f4c0f633f815840c9b2790ceb03e', class: "toast__title", part: "title" }, this.label)), this.description && (index.h("p", { key: '61fde0ebc88f9a2f3a750b953066ef2513b534b4', class: "toast__description", part: "description" }, this.description))), (this.actionLabel || this.dismissible) && (index.h("div", { key: '64ce947a241527d63a42e3481ca09fd376768fb2', class: "toast__actions", part: "actions" }, this.actionLabel && (index.h("button", { key: '78b837e3e30e26537c80384caa37ccb1073a3880', type: "button", class: "toast__action", onClick: this.handleAction }, this.actionLabel)), this.dismissible && (index.h("button", { key: '9ad0a9afcd99d55c4d4925530937ae13b806d662', type: "button", class: "toast__dismiss", "aria-label": "Dismiss notification", onClick: this.handleDismiss }, index.h("svg", { key: '33c80e65458eb37afa3b4fbb65e56704465185d1', viewBox: "0 0 16 16", "aria-hidden": "true" }, index.h("path", { key: '80bc03321c7d9b0751c9aa6527ae2dd6b4d782de', d: "M4.646 4.646 8 8l3.354-3.354 1.292 1.292L9.292 9.293l3.354 3.354-1.292 1.292L8 10.707l-3.354 3.354-1.292-1.292L6.708 9.293 3.354 5.939z" })))))))));
    }
};
IrToastAlert.style = IrToastAlertStyle0;

exports.ir_toast_alert = IrToastAlert;

//# sourceMappingURL=ir-toast-alert.cjs.entry.js.map