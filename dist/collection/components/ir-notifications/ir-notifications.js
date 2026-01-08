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
        return (h(Host, { key: '78ede4ec67d52c3d1efb71805d566a1bd22c8f12' }, h("div", { key: 'eef5903b5b4683424eda9c1fcb52c4da69ea4ccd', style: { position: 'relative' } }, h("wa-tooltip", { key: 'a01007c8a622c5790f891e62ffec49495254feda', for: "notifications-button" }, "Notifications"), this.notifications?.length > 0 && (h("wa-badge", { key: '538fd8213c9c3aea1ab8ae0c5df949078a5093cb', pill: true, class: "header-notification-badge" }, this.notifications.length)), h("wa-animation", { key: 'bcfcff16e4ac39e9156f99d5994840e8d6d5327f', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, h("ir-custom-button", { key: '6e5859088107fb0df75a39dee88042cfd60c67ad', id: "notifications-button", size: "small", appearance: "plain", ref: el => (this.buttonRef = el) }, h("wa-icon", { key: 'a383749ecb9e32a6119f72042bd8a4ab6d797e33', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.2rem' } })))), h("wa-popover", { key: '3e7e8e0a81ae6036c083a97599693e8da88f5cf1', class: "notification__popover", for: "notifications-button" }, h("p", { key: 'ad9889cac9e99952d35cb22960d39301aa5c8aeb', class: "notification__popover-title" }, "Notifications"), this.notifications?.map(notification => (h("div", { class: "notification-item" }, h("div", { class: "notification-item__content" }, h("p", { class: "notification-item__title" }, notification.title), h("p", { class: "notification-item__time" }, this.getRelativeTimeFromParts(notification.date, notification.hour, notification.minute))), h("span", { class: "notification-item__unread-indicator" })))), this.notifications?.length === 0 && (h("ir-empty-state", { key: '4921bb52f3bab789efd7e3d31a74531798e822c9', style: { width: '250px', height: '150px' } }, h("wa-icon", { key: '9d7952e3ccba2fb1aa3de2f037af8d10b4243179', slot: "icon", name: "inbox" }))))));
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
