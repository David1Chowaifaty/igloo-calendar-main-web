import { h } from "@stencil/core";
export class IrToastProvider {
    el;
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
        if (this.toasts.length === 0) {
            // this.dialogRef.close();
        }
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
        return (h("div", { key: '06444281bfc0fabc78f85fd2f7825cad922e82df', ref: el => (this.dialogRef = el), class: "toast-dialog", "aria-label": "Notifications", "light-dismiss": true, popover: "notifications", onClick: e => {
                // Prevent closing when clicking inside
                e.stopPropagation();
            } }, h("div", { key: '4982bb73e39f8b0c56946ea0f592d84c72f1d0c2', class: `toast-container ${this.getPositionClass()} ${this.rtl ? 'rtl' : ''}`, role: "region", "aria-label": "Notifications", dir: this.rtl ? 'rtl' : 'ltr' }, this.toasts.map(toast => (h("div", { key: toast.id, class: `toast toast--${toast.type}`, role: "alert", "aria-live": toast.type === 'error' ? 'assertive' : 'polite', "aria-atomic": "true" }, h("div", { class: "toast__icon", "aria-hidden": "true" }, this.getToastIcon(toast.type)), h("div", { class: "toast__message" }, toast.message), toast.dismissible && (h("button", { class: "toast__close", onClick: () => this.handleDismiss(toast.id), onKeyDown: e => this.handleKeyDown(e, toast.id), "aria-label": `Dismiss ${toast.type} notification: ${toast.message}`, type: "button" }, h("span", { "aria-hidden": "true" }, "\u00D7")))))))));
    }
    static get is() { return "ir-toast-provider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-toast-provider.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-toast-provider.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'",
                    "resolved": "\"bottom-center\" | \"bottom-end\" | \"bottom-start\" | \"top-center\" | \"top-end\" | \"top-start\"",
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
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'top-end'"
            },
            "rtl": {
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
                "attribute": "rtl",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "toasts": {}
        };
    }
    static get methods() {
        return {
            "addToast": {
                "complexType": {
                    "signature": "(toast: Omit<Toast, \"id\">) => Promise<string>",
                    "parameters": [{
                            "name": "toast",
                            "type": "{ message: string; type?: \"success\" | \"error\" | \"warning\" | \"info\"; duration?: number; dismissible?: boolean; }",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Omit": {
                            "location": "global",
                            "id": "global::Omit"
                        },
                        "Toast": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-toast-provider/ir-toast-provider.tsx",
                            "id": "src/components/ir-toast-provider/ir-toast-provider.tsx::Toast"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "removeToast": {
                "complexType": {
                    "signature": "(id: string) => Promise<void>",
                    "parameters": [{
                            "name": "id",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "clearAllToasts": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "toast",
                "method": "handleToast",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-toast-provider.js.map
