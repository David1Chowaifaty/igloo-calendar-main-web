import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrNotifications {
    el;
    // Make notifications reactive;
    notifications = [];
    notificationCleared;
    buttonRef;
    animationRef;
    bellKeyframes = [
        { offset: 0, transform: 'rotate(0deg)' },
        { offset: 0.15, transform: 'rotate(-15deg)' },
        { offset: 0.3, transform: 'rotate(13deg)' },
        { offset: 0.45, transform: 'rotate(-10deg)' },
        { offset: 0.6, transform: 'rotate(8deg)' },
        { offset: 0.75, transform: 'rotate(-5deg)' },
        { offset: 1, transform: 'rotate(0deg)' },
    ];
    componentDidLoad() {
        this.updateNotificationBadge();
    }
    componentDidUpdate() {
        this.updateNotificationBadge();
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
        if (this.notifications?.length <= 0)
            return;
        this.animationRef.cancel();
        this.animationRef.play = true;
    }
    getRelativeTimeFromParts(date, hour, minute) {
        const now = moment();
        const then = moment(date, 'YYYY-MM-DD').hour(hour).minute(minute).second(0);
        if (!then.isValid())
            return '';
        const diffSeconds = now.diff(then, 'seconds');
        if (diffSeconds < 60)
            return 'just now';
        const diffMinutes = now.diff(then, 'minutes');
        if (diffMinutes < 60) {
            return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
        }
        const diffHours = now.diff(then, 'hours');
        if (diffHours < 24) {
            return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
        }
        const diffDays = now.diff(then, 'days');
        if (diffDays < 7) {
            return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        }
        const diffWeeks = now.diff(then, 'weeks');
        return `${diffWeeks} week${diffWeeks !== 1 ? 's' : ''} ago`;
    }
    // private dismissNotification(notification: Notification) {
    //   this.notificationCleared.emit(notification);
    //   this.notifications = this.notifications.filter(n => n.id !== notification.id);
    // }
    render() {
        return (h(Host, { key: 'b436c49e8200ca5ae259842ed7ae121d9fcd7f65' }, h("div", { key: '5a8793f6f8260519bc7d0cfd098468c52b208a89', style: { position: 'relative' } }, h("wa-tooltip", { key: '0655a88669c081a115d8a5c7a23853e5a401775c', for: "notifications-button" }, "Notifications"), this.notifications?.length > 0 && (h("wa-badge", { key: 'be5a30d5144aafdb64e77a6e3918c064b8ff391e', pill: true, class: "header-notification-badge" }, this.notifications.length)), h("wa-animation", { key: '97f5460ff6f50740fc15779a552ebd4f59dc1767', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, h("ir-custom-button", { key: 'd3cadb1cf073335faed2bd41796d74a045dcff0c', id: "notifications-button", size: "small", appearance: "plain", ref: el => (this.buttonRef = el) }, h("wa-icon", { key: '53db4b17f81686a0483d56fffc147b4226e624eb', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.2rem' } })))), h("wa-popover", { key: 'bd2631ca623a2df00d66b468cd7c935d4031d524', class: "notification__popover", for: "notifications-button" }, h("p", { key: 'bac9806be6db2cdca8443a0914c3fd8113866c5f', class: "notification__popover-title" }, "Notifications"), this.notifications?.map(notification => (h("div", { class: "notification-item" }, h("div", { class: "notification-item__content" }, h("p", { class: "notification-item__title" }, notification.title), h("p", { class: "notification-item__time" }, this.getRelativeTimeFromParts(notification.date, notification.hour, notification.minute))), h("span", { class: "notification-item__unread-indicator" })))), this.notifications?.length === 0 && (h("ir-empty-state", { key: 'e0b626425863833434f699eca1d57622e47bcb7b', style: { width: '250px', height: '150px' } }, h("wa-icon", { key: 'fae46265dc7a9df35cad91f724e1218a2384128c', slot: "icon", name: "inbox" }))))));
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
                    "resolved": "Readonly<{ id: string; title: string; message: string; date: string; hour: number; minute: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"error\" | \"warning\" | \"alert\"; ariaRole?: \"alert\"; } | Readonly<{ id: string; title: string; message: string; date: string; hour: number; minute: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"success\" | \"info\"; ariaRole?: \"status\"; }",
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
