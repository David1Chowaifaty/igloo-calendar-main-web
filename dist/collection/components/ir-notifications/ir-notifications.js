import { Host, h } from "@stencil/core";
export class IrNotifications {
    constructor() {
        // Make notifications reactive;
        this.notifications = [];
        this.isOpen = false;
        this.onDocumentClick = (ev) => {
            if (!this.isOpen)
                return;
            const target = ev.target;
            if (target && !this.el.contains(target)) {
                this.isOpen = false;
            }
        };
        this.onDocumentKeydown = (ev) => {
            var _a, _b;
            if (!this.isOpen)
                return;
            if (ev.key === 'Escape' || ev.key === 'Esc') {
                this.isOpen = false;
                (_b = (_a = this.buttonRef) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        };
    }
    componentDidLoad() {
        this.updateNotificationBadge();
        document.addEventListener('click', this.onDocumentClick, true);
        document.addEventListener('keydown', this.onDocumentKeydown, true);
    }
    componentDidUpdate() {
        this.updateNotificationBadge();
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.onDocumentClick, true);
        document.removeEventListener('keydown', this.onDocumentKeydown, true);
    }
    handleNotificationCountChange(newValue, oldValue) {
        if (oldValue && newValue.length !== oldValue.length) {
            this.animateNotificationChange();
        }
    }
    updateNotificationBadge() {
        if (this.buttonRef) {
            this.buttonRef.setAttribute('data-notifications', this.notifications.length.toString());
        }
    }
    animateNotificationChange() {
        if (this.buttonRef) {
            this.buttonRef.classList.add('badge-animate');
            setTimeout(() => {
                this.buttonRef.classList.remove('badge-animate');
            }, 600);
        }
    }
    dismissNotification(notification) {
        this.notificationCleared.emit(notification);
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
    }
    render() {
        return (h(Host, { key: '0488682c5371070da281f51f527e4a6be2eb901b' }, h("div", { key: '7483d977056b0b97cb72e7568fde0931a5cc9ef0', class: `dropdown notifications-dropdown ${this.isOpen ? 'show' : ''}` }, h("ir-button", { key: 'f334d73efe0f4b811931fd2ba0bf71f2c83ce782', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notifications.length.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "aria-expanded": String(this.isOpen), onClickHandler: () => (this.isOpen = !this.isOpen) }), h("div", { key: '7143fbcc2fee0d7eebffe3d6c791c19304c00e6b', class: `dropdown-menu dropdown-menu-right ` }, this.notifications.length === 0 ? (h("p", { class: "m-0 dropdown-header" }, "All caught up.")) : (this.notifications.map(notification => (h("div", { class: `notification-item dropdown-item ${notification.type}`, key: notification.id }, h("div", { class: "notification-content" }, h("strong", null, notification.title), h("p", null, notification.message), notification.link && (h("a", { href: notification.link.href, target: notification.link.target || '_self' }, notification.link.text || 'View more'))), notification.dismissible && (h("ir-button", { onClickHandler: () => this.dismissNotification(notification), variant: "icon", btn_color: "light", icon_name: "xmark" }))))))))));
    }
    static get is() { return "ir-notifications"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-notifications.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-notifications.css"]
        };
    }
    static get properties() {
        return {
            "notifications": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Notification[]",
                    "resolved": "Notification[]",
                    "references": {
                        "Notification": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-notifications/types.ts::Notification"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "notificationCleared",
                "name": "notificationCleared",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Notification",
                    "resolved": "Readonly<{ id: string; title: string; message: string; createdAt: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"error\" | \"alert\" | \"warning\"; ariaRole?: \"alert\"; } | Readonly<{ id: string; title: string; message: string; createdAt: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"info\" | \"success\"; ariaRole?: \"status\"; }",
                    "references": {
                        "Notification": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-notifications/types.ts::Notification"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "notifications",
                "methodName": "handleNotificationCountChange"
            }];
    }
}
//# sourceMappingURL=ir-notifications.js.map
