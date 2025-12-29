'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irToastProviderCss = ".sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.toast-dialog{position:fixed;inset:0;border:none;background:transparent;padding:0;margin:0;pointer-events:none;overflow:visible;max-width:100vw;max-height:100vh;z-index:9999}.toast-dialog::backdrop{background:transparent;pointer-events:none;display:none}.toast-container{position:fixed;display:flex;flex-direction:column;gap:0.75rem;padding:1rem;pointer-events:none;z-index:10000;max-width:100vw;box-sizing:border-box}.toast-container--top{top:0}.toast-container--bottom{bottom:0}.toast-container--start{left:0;align-items:flex-start}.toast-container--center{left:50%;transform:translateX(-50%);align-items:center}.toast-container--end{right:0;align-items:flex-end}.toast-container.rtl.toast-container--start{left:auto;right:0;align-items:flex-end}.toast-container.rtl.toast-container--end{right:auto;left:0;align-items:flex-start}.toast{display:flex;align-items:center;gap:0.75rem;min-width:300px;max-width:500px;padding:1rem 1.25rem;background:white;border-radius:0.5rem;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);pointer-events:auto;animation:slideIn 0.3s ease-out;border-left:4px solid currentColor}.toast.rtl{border-left:none;border-right:4px solid currentColor}@keyframes slideIn{from{opacity:0;transform:translateY(-1rem)}to{opacity:1;transform:translateY(0)}}.toast--info{color:#3b82f6;border-color:#3b82f6}.toast--success{color:#10b981;border-color:#10b981}.toast--warning{color:#f59e0b;border-color:#f59e0b}.toast--error{color:#ef4444;border-color:#ef4444}.toast__icon{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;flex-shrink:0;font-size:1.25rem;font-weight:bold}.toast__message{flex:1;color:#1f2937;font-size:0.875rem;line-height:1.5;word-break:break-word}.toast__close{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;flex-shrink:0;padding:0;border:none;background:transparent;color:#6b7280;font-size:1.5rem;line-height:1;cursor:pointer;border-radius:0.25rem;transition:all 0.2s}.toast__close:hover{background:#f3f4f6;color:#1f2937}.toast__close:active{transform:scale(0.95)}@media (max-width: 640px){.toast-container{padding:0.5rem}.toast{min-width:auto;width:calc(100vw - 1rem);max-width:calc(100vw - 1rem)}}";
const IrToastProviderStyle0 = irToastProviderCss;

const IrToastProvider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    position = 'top-end';
    rtl = false;
    toasts = [];
    dialogRef;
    toastTimers = new Map();
    disconnectedCallback() {
        // Clear all timers
        this.toastTimers.forEach(timer => clearTimeout(timer));
        this.toastTimers.clear();
    }
    handleToast() {
        this.addToast({
            message: 'hello',
        });
        if (this.dialogRef && !this.dialogRef.open) {
            this.dialogRef.showPopover();
        }
    }
    async addToast(toast) {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newToast = {
            id,
            type: 'info',
            duration: 5000,
            dismissible: true,
            ...toast,
        };
        this.toasts = [...this.toasts, newToast];
        // Announce to screen readers
        this.announceToast(newToast);
        // Auto-dismiss if duration is set
        if (newToast.duration && newToast.duration > 0) {
            const timer = window.setTimeout(() => {
                this.removeToast(id);
            }, newToast.duration);
            this.toastTimers.set(id, timer);
        }
        return id;
    }
    async removeToast(id) {
        // Clear timer if exists
        const timer = this.toastTimers.get(id);
        if (timer) {
            clearTimeout(timer);
            this.toastTimers.delete(id);
        }
        this.toasts = this.toasts.filter(toast => toast.id !== id);
    }
    async clearAllToasts() {
        this.toastTimers.forEach(timer => clearTimeout(timer));
        this.toastTimers.clear();
        this.toasts = [];
    }
    announceToast(toast) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', toast.type === 'error' ? 'assertive' : 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `${toast.type}: ${toast.message}`;
        this.el.shadowRoot.appendChild(announcement);
        setTimeout(() => {
            announcement.remove();
        }, 1000);
    }
    handleDismiss(id) {
        this.removeToast(id);
    }
    handleKeyDown(e, id) {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.handleDismiss(id);
        }
    }
    getToastIcon(type) {
        switch (type) {
            case 'success':
                return '✓';
            case 'error':
                return '✕';
            case 'warning':
                return '⚠';
            case 'info':
            default:
                return 'ℹ';
        }
    }
    getPositionClass() {
        const [vertical, horizontal] = this.position.split('-');
        return `toast-container--${vertical} toast-container--${horizontal}`;
    }
    render() {
        return (index.h("div", { key: '06444281bfc0fabc78f85fd2f7825cad922e82df', ref: el => (this.dialogRef = el), class: "toast-dialog", "aria-label": "Notifications", "light-dismiss": true, popover: "notifications", onClick: e => {
                // Prevent closing when clicking inside
                e.stopPropagation();
            } }, index.h("div", { key: '4982bb73e39f8b0c56946ea0f592d84c72f1d0c2', class: `toast-container ${this.getPositionClass()} ${this.rtl ? 'rtl' : ''}`, role: "region", "aria-label": "Notifications", dir: this.rtl ? 'rtl' : 'ltr' }, this.toasts.map(toast => (index.h("div", { key: toast.id, class: `toast toast--${toast.type}`, role: "alert", "aria-live": toast.type === 'error' ? 'assertive' : 'polite', "aria-atomic": "true" }, index.h("div", { class: "toast__icon", "aria-hidden": "true" }, this.getToastIcon(toast.type)), index.h("div", { class: "toast__message" }, toast.message), toast.dismissible && (index.h("button", { class: "toast__close", onClick: () => this.handleDismiss(toast.id), onKeyDown: e => this.handleKeyDown(e, toast.id), "aria-label": `Dismiss ${toast.type} notification: ${toast.message}`, type: "button" }, index.h("span", { "aria-hidden": "true" }, "\u00D7")))))))));
    }
};
IrToastProvider.style = IrToastProviderStyle0;

exports.ir_toast_provider = IrToastProvider;

//# sourceMappingURL=ir-toast-provider.cjs.entry.js.map