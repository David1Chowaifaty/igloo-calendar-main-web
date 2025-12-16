import { Host, h } from "@stencil/core";
export class IrNotifications {
    el;
    // Make notifications reactive;
    notifications = [];
    isOpen = false;
    notificationCleared;
    buttonRef;
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
    onDocumentClick = (ev) => {
        if (!this.isOpen)
            return;
        const target = ev.target;
        if (target && !this.el.contains(target)) {
            this.isOpen = false;
        }
    };
    onDocumentKeydown = (ev) => {
        if (!this.isOpen)
            return;
        if (ev.key === 'Escape' || ev.key === 'Esc') {
            this.isOpen = false;
            this.buttonRef?.focus?.();
        }
    };
    render() {
        return (h(Host, { key: '24627683ba7ce8f04a460fe1760f0e76cb0b2f76' }, h("div", { key: '44b1197720c0d04751d55f63e8f0495a860b6e0d', class: `dropdown notifications-dropdown ${this.isOpen ? 'show' : ''}` }, h("ir-button", { key: 'a10d6d0352802620d7445da07da23aa798e9606c', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notifications.length.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "aria-expanded": String(this.isOpen), onClickHandler: () => (this.isOpen = !this.isOpen) }), h("div", { key: '098d1cbeb6f6604ad9dcf3e1a91a9adf61868035', class: `dropdown-menu dropdown-menu-right ` }, this.notifications.length === 0 ? (h("p", { class: "m-0 dropdown-header" }, "All caught up.")) : (this.notifications.map(notification => (h("div", { class: `notification-item dropdown-item ${notification.type}`, key: notification.id }, h("div", { class: "notification-content" }, h("strong", null, notification.title), h("p", null, notification.message), notification.link && (h("a", { href: notification.link.href, target: notification.link.target || '_self' }, notification.link.text || 'View more'))), notification.dismissible && (h("ir-button", { onClickHandler: () => this.dismissNotification(notification), variant: "icon", btn_color: "light", icon_name: "xmark" }))))))))));
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
                    "resolved": "Readonly<{ id: string; title: string; message: string; createdAt: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"error\" | \"warning\" | \"alert\"; ariaRole?: \"alert\"; } | Readonly<{ id: string; title: string; message: string; createdAt: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"success\" | \"info\"; ariaRole?: \"status\"; }",
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
