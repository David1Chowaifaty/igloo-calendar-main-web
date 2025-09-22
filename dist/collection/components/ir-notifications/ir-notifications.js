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
        return (h(Host, { key: 'fc18787c15718501deb1b735d577aac4220e30b6' }, h("div", { key: 'a1256fc39c6a7a2c74c2de0cd710989f1bbcdec1', class: `dropdown notifications-dropdown ${this.isOpen ? 'show' : ''}` }, h("ir-button", { key: '005a114e3f9a5a5815a460d9bfe83d060c50602d', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notifications.length.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "aria-expanded": String(this.isOpen), onClickHandler: () => (this.isOpen = !this.isOpen) }), h("div", { key: '43b4fb9e44798ca0b6f576bccbbc0f1f8c45fd47', class: `dropdown-menu dropdown-menu-right ` }, this.notifications.length === 0 ? (h("p", { class: "m-0 dropdown-header" }, "All caught up.")) : (this.notifications.map(notification => (h("div", { class: `notification-item dropdown-item ${notification.type}`, key: notification.id }, h("div", { class: "notification-content" }, h("strong", null, notification.title), h("p", null, notification.message), notification.link && (h("a", { href: notification.link.href, target: notification.link.target || '_self' }, notification.link.text || 'View more'))), notification.dismissible && (h("ir-button", { onClickHandler: () => this.dismissNotification(notification), variant: "icon", btn_color: "light", icon_name: "xmark" }))))))))));
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
