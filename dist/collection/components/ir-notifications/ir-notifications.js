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
        return (h(Host, { key: 'b73bc6ebe3403e0df518d50a5d626def9bf13585' }, h("div", { key: '0ffa6639db1a0f19bb3293c987d23e78143dad79', style: { position: 'relative' } }, h("wa-tooltip", { key: '6155bd42080e97e9b402c325f0012798aeaf8ec1', for: "notifications-button" }, "Notifications"), this.notifications?.length > 0 && (h("wa-badge", { key: '15fa94cba87f30a87b372cb42f940736d0114a24', pill: true, class: "header-notification-badge" }, this.notifications.length)), h("wa-animation", { key: 'fa2ad28162bee2f0a5e96d26552b2bc34eeb0d2b', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, h("ir-custom-button", { key: 'f126b679e29b428e9522526dc554221aa2466275', id: "notifications-button", size: "small", appearance: "plain", ref: el => (this.buttonRef = el) }, h("wa-icon", { key: '5c2ef9e9c7a80c0a19bf19cf8508284f1f3b5c15', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.2rem' } })))), h("wa-popover", { key: 'da51b7d3fd43e6a6cf9cde43be4f78d53b58c1f6', class: "notification__popover", for: "notifications-button" }, h("p", { key: '46622fec7705fc8df7eddc6432e774d2c502829e', class: "notification__popover-title" }, "Notifications"), this.notifications?.map(notification => (h("div", { class: "notification-item" }, h("div", { class: "notification-item__content" }, h("p", { class: "notification-item__title" }, notification.title), h("p", { class: "notification-item__time" }, this.getRelativeTimeFromParts(notification.date, notification.hour, notification.minute))), h("span", { class: "notification-item__unread-indicator" })))), this.notifications?.length === 0 && (h("ir-empty-state", { key: 'e58e4973838df176314ece91946c2b4c734a0d21', style: { width: '250px', height: '150px' } }, h("wa-icon", { key: 'edbf342c55c62508436c18543e232c28579c739e', slot: "icon", name: "inbox" }))))));
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
