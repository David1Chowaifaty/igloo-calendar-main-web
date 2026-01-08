import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-toast-alert2.js';

const irToastProviderCss = ".sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.toast-container{position:fixed;display:flex;flex-direction:column;gap:0.75rem;z-index:10000;max-width:100vw;box-sizing:border-box;padding:1rem;pointer-events:all}.toast-container--top{top:0}.toast-container--bottom{bottom:0}.toast-container--start{left:0;align-items:flex-start}.toast-container--center{left:50%;transform:translateX(-50%);align-items:center}.toast-container--end{right:0;align-items:flex-end}.toast-container.rtl.toast-container--start{left:auto;right:0;align-items:flex-end}.toast-container.rtl.toast-container--end{right:auto;left:0;align-items:flex-start}";
const IrToastProviderStyle0 = irToastProviderCss;

const IrToastProvider = /*@__PURE__*/ proxyCustomElement(class IrToastProvider extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
    position = 'top-end';
    rtl = false;
    duration = 5000;
    toasts = [];
    popoverRef;
    toastTimers = new Map();
    componentDidLoad() {
        // Ensure popover API is supported
        if (this.popoverRef && typeof this.popoverRef.showPopover === 'function') {
            // Initially hide the popover
            try {
                this.popoverRef.hidePopover?.();
            }
            catch (e) {
                // Popover might not be shown yet
            }
        }
    }
    disconnectedCallback() {
        this.toastTimers.forEach(timer => {
            if (timer.timeoutId) {
                clearTimeout(timer.timeoutId);
            }
        });
        this.toastTimers.clear();
    }
    handleToast(event) {
        const detail = event?.detail || {};
        const payload = {
            ...detail,
            title: detail.title ?? 'Notification',
        };
        this.addToast(payload);
    }
    async addToast(toast) {
        const id = toast.id ?? this.generateToastId();
        const newToast = {
            id,
            type: toast.type ?? 'info',
            duration: toast.duration ?? this.duration,
            dismissible: toast.dismissible ?? true,
            leaving: false,
            ...toast,
        };
        this.toasts = [...this.toasts, newToast];
        this.announceToast(newToast);
        // Show popover when first toast is added
        if (this.toasts.length === 1) {
            this.showPopover();
        }
        if (newToast.duration && newToast.duration > 0) {
            this.startTimer(newToast.id, newToast.duration);
        }
        return id;
    }
    async removeToast(id) {
        // Mark toast as leaving for exit animation
        this.toasts = this.toasts.map(toast => (toast.id === id ? { ...toast, leaving: true } : toast));
        // Wait for animation to complete, then remove
        setTimeout(() => {
            this.clearTimer(id);
            this.toasts = this.toasts.filter(toast => toast.id !== id);
            // Hide popover when last toast is removed
            if (this.toasts.length === 0) {
                this.hidePopover();
            }
        }, 200); // Match the exit animation duration
    }
    async clearAllToasts() {
        this.toastTimers.forEach(timer => {
            if (timer.timeoutId) {
                clearTimeout(timer.timeoutId);
            }
        });
        this.toastTimers.clear();
        this.toasts = [];
        this.hidePopover();
    }
    showPopover() {
        if (this.popoverRef && typeof this.popoverRef.showPopover === 'function') {
            try {
                this.popoverRef.showPopover();
            }
            catch (e) {
                // Popover might already be shown
            }
        }
    }
    hidePopover() {
        if (this.popoverRef && typeof this.popoverRef.hidePopover === 'function') {
            try {
                this.popoverRef.hidePopover();
            }
            catch (e) {
                // Popover might already be hidden
            }
        }
    }
    generateToastId() {
        return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    startTimer(id, duration) {
        if (typeof window === 'undefined') {
            return;
        }
        this.clearTimer(id);
        const timeoutId = window.setTimeout(() => this.removeToast(id), duration);
        this.toastTimers.set(id, { timeoutId, remaining: duration, startedAt: Date.now() });
    }
    pauseTimer(id) {
        const timer = this.toastTimers.get(id);
        if (!timer || timer.timeoutId === undefined || timer.startedAt === undefined) {
            return;
        }
        clearTimeout(timer.timeoutId);
        const elapsed = Date.now() - timer.startedAt;
        const remaining = Math.max(timer.remaining - elapsed, 0);
        this.toastTimers.set(id, { remaining });
    }
    resumeTimer(id) {
        const timer = this.toastTimers.get(id);
        if (!timer || timer.timeoutId !== undefined) {
            return;
        }
        if (timer.remaining <= 0) {
            this.removeToast(id);
            return;
        }
        if (typeof window === 'undefined') {
            return;
        }
        const timeoutId = window.setTimeout(() => this.removeToast(id), timer.remaining);
        this.toastTimers.set(id, { timeoutId, remaining: timer.remaining, startedAt: Date.now() });
    }
    clearTimer(id) {
        const timer = this.toastTimers.get(id);
        if (timer?.timeoutId) {
            clearTimeout(timer.timeoutId);
        }
        this.toastTimers.delete(id);
    }
    announceToast(toast) {
        if (typeof document === 'undefined' || !this.el?.shadowRoot) {
            return;
        }
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', toast.type === 'error' || toast.type === 'danger' ? 'assertive' : 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `${toast.type}: ${toast.title}${toast.description ? '. ' + toast.description : ''}`;
        this.el.shadowRoot.appendChild(announcement);
        setTimeout(() => {
            announcement.remove();
        }, 1000);
    }
    getPositionClass() {
        const [vertical, horizontal] = this.position.split('-');
        return `toast-container--${vertical} toast-container--${horizontal}`;
    }
    getAlertPosition() {
        const [vertical = 'top', horizontal = 'end'] = this.position.split('-');
        const horizontalMap = {
            start: this.rtl ? 'right' : 'left',
            end: this.rtl ? 'left' : 'right',
        };
        const resolvedHorizontal = horizontalMap[horizontal] ?? 'right';
        const resolvedVertical = vertical === 'bottom' ? 'bottom' : 'top';
        return `${resolvedVertical}-${resolvedHorizontal}`;
    }
    mapVariant(type) {
        switch (type) {
            case 'success':
                return 'success';
            case 'warning':
                return 'warning';
            case 'error':
            case 'danger':
                return 'danger';
            default:
                return 'info';
        }
    }
    handleToastDismiss = (event) => {
        event.stopPropagation();
        this.removeToast(event.detail.id);
    };
    handleInteractionChange = (event) => {
        event.stopPropagation();
        if (event.detail.interacting) {
            this.pauseTimer(event.detail.id);
        }
        else {
            this.resumeTimer(event.detail.id);
        }
    };
    handlePopoverToggle = (event) => {
        // Prevent popover from being closed by user interaction or light dismiss
        if (this.toasts.length > 0) {
            event.preventDefault();
            this.showPopover();
        }
    };
    render() {
        return (h("div", { key: '0be14e9f705658433924bdfab3a9c344bc679056', ref: el => (this.popoverRef = el), popover: "manual", class: "toast-popover", onToggle: this.handlePopoverToggle }, h("div", { key: 'dc1d1f288d13b2dc93ed011816b9f09c2f64d3e7', class: `toast-container ${this.getPositionClass()} ${this.rtl ? 'rtl' : ''}`, role: "region", "aria-label": "Notifications", "aria-live": "polite", dir: this.rtl ? 'rtl' : 'ltr' }, this.toasts.map(toast => (h("div", { class: "toast-item", key: toast.id }, h("ir-toast-alert", { toastId: toast.id, label: toast.title, description: toast.description, dismissible: toast.dismissible, actionLabel: toast.actionLabel, position: this.getAlertPosition(), variant: this.mapVariant(toast.type), leaving: toast.leaving, onIrToastDismiss: this.handleToastDismiss, onIrToastInteractionChange: this.handleInteractionChange })))))));
    }
    static get style() { return IrToastProviderStyle0; }
}, [1, "ir-toast-provider", {
        "position": [1],
        "rtl": [4],
        "duration": [2],
        "toasts": [32],
        "addToast": [64],
        "removeToast": [64],
        "clearAllToasts": [64]
    }, [[16, "toast", "handleToast"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-toast-provider", "ir-toast-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrToastProvider);
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrToastProvider as I, defineCustomElement as d };

//# sourceMappingURL=ir-toast-provider2.js.map