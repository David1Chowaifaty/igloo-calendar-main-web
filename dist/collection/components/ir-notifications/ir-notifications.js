import { Host, h } from "@stencil/core";
import { PropertyService } from "../../services/property.service";
import Token from "../../models/Token";
export class IrNotifications {
    el;
    ticket;
    propertyid;
    // Make notifications reactive;
    notifications = [];
    notificationCleared;
    tokenService = new Token();
    propertyService = new PropertyService();
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
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.fetchNotifications();
        }
    }
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
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue || !newValue) {
            return;
        }
        this.tokenService.setToken(newValue);
        this.fetchNotifications();
    }
    handlePropertyChange(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.fetchNotifications();
    }
    async fetchNotifications() {
        if (!this.propertyid) {
            this.notifications = [];
            return;
        }
        try {
            const notifications = await this.propertyService.fetchNotifications(this.propertyid);
            this.notifications = notifications.filter(n => n.type !== 'financial');
        }
        catch (error) {
            console.log(error);
            this.notifications = [];
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
    // private getRelativeTimeFromParts(date: string, hour: number, minute: number): string {
    //   const now = moment();
    //   const then = moment(date, 'YYYY-MM-DD').hour(hour).minute(minute).second(0);
    //   if (!then.isValid()) return '';
    //   const diffSeconds = now.diff(then, 'seconds');
    //   if (diffSeconds < 60) return 'just now';
    //   const diffMinutes = now.diff(then, 'minutes');
    //   if (diffMinutes < 60) {
    //     return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    //   }
    //   const diffHours = now.diff(then, 'hours');
    //   if (diffHours < 24) {
    //     return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    //   }
    //   const diffDays = now.diff(then, 'days');
    //   if (diffDays < 7) {
    //     return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    //   }
    //   const diffWeeks = now.diff(then, 'weeks');
    //   return `${diffWeeks} week${diffWeeks !== 1 ? 's' : ''} ago`;
    // }
    // private dismissNotification(notification: Notification) {
    //   this.notificationCleared.emit(notification);
    //   this.notifications = this.notifications.filter(n => n.id !== notification.id);
    // }
    render() {
        return (h(Host, { key: 'feb775453dcd6cafb66edc94fb507e572c7096f6' }, h("div", { key: 'f5bee8aae1c44daa72ced593e1aa856f214728bd', style: { position: 'relative' } }, h("wa-tooltip", { key: '9eaba88f4934b4dceafed13542c651f740429cf6', for: "notifications-button" }, "Notifications"), this.notifications?.length > 0 && (h("wa-badge", { key: '558a62dcce30da7eb6a142c20d4a9c5830e0eef3', pill: true, class: "header-notification-badge" }, this.notifications.length)), h("wa-animation", { key: '7ea7f3711c270a103742ef27335ad7f122c767b1', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, h("ir-custom-button", { key: '516c067e05da65e0c42207179d11613dd00de395', id: "notifications-button", size: "small", appearance: "plain", ref: el => (this.buttonRef = el) }, h("wa-icon", { key: '80b2d3b89707ebec5b19a37c3d7787046749eaf8', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.4rem' } })))), h("wa-popover", { key: '566d22d1163d9e178981195cc86a7c4e225c0b47', distance: 15, class: "notification__popover", for: "notifications-button" }, h("p", { key: 'cd29ca234831950d3b5a9d10f01c8eb496b065a7', class: "notification__popover-title" }, "Notifications"), this.notifications.map(notification => {
            if (notification.type === 'availability_alert') {
                return (h("a", { href: "AcAvailabilityAlert.aspx", class: "notification-item" }, h("div", { class: "notification-item__content" }, h("p", { class: "notification-item__title" }, notification.message, " rooms types are not bookable for 14 consecutive nights within the next 2 months. More..."), h("wa-icon", { name: "angle-right" }))));
            }
        }), this.notifications?.length === 0 && (h("ir-empty-state", { key: 'c5451aa330686c10258827c405c514ee98544c8f', message: "All caught up!", style: { width: '250px', height: '150px' } }, h("wa-icon", { key: '312ee26968e6cc72c339ee447426ae6851b9c02c', slot: "icon", name: "inbox" }))))));
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
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "ticket",
                "reflect": false
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "propertyid",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "notifications": {}
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
            }, {
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }, {
                "propName": "propertyid",
                "methodName": "handlePropertyChange"
            }];
    }
}
//# sourceMappingURL=ir-notifications.js.map
