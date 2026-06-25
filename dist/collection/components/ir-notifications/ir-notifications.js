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
        return (h(Host, { key: '187f692c442bc7fdcdf6d070be9d8c13963ea844' }, h("div", { key: '636d4bae0c146d9b00ffbbc1ec0c081292acd200', style: { position: 'relative' } }, h("wa-tooltip", { key: 'd105b9985ad14a2429eaa756c30ec72cfa111c18', for: "notifications-button" }, "Notifications"), this.notifications?.length > 0 && (h("wa-badge", { key: '2f99449aa2833d5ffa8d022f01e575aaca3fa8a9', pill: true, class: "header-notification-badge" }, this.notifications.length)), h("wa-animation", { key: 'fc4f9e552d195f97d2c6888c467117ab0e3ac93c', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, h("ir-custom-button", { key: 'da0e12d1ad6d79e286174846a10f08cdfd2b7d7a', id: "notifications-button", size: "s", appearance: "plain", ref: el => (this.buttonRef = el) }, h("wa-icon", { key: '67d900675301f3b64635fcc7d40267775dbeff92', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.4rem' } })))), h("wa-popover", { key: 'd6bc74bbf4eb6a47349c60ba2bcf71ef53b78767', distance: 15, class: "notification__popover", for: "notifications-button" }, h("p", { key: '2ec403acce1307b274fd25ebec9b2991726d340d', class: "notification__popover-title" }, "Notifications"), this.notifications.map(notification => {
            if (notification.type === 'availability_alert') {
                return (h("a", { href: "AcAvailabilityAlert.aspx", class: "notification-item" }, h("div", { class: "notification-item__content" }, h("p", { class: "notification-item__title" }, notification.message, " rooms types are not bookable for 14 consecutive nights within the next 2 months. More..."), h("wa-icon", { name: "angle-right" }))));
            }
        }), this.notifications?.length === 0 && (h("ir-empty-state", { key: '9ef1dca4ff2100f50126d1cf2cc9e601154ba19c', message: "All caught up!", style: { width: '250px', height: '150px' } }, h("wa-icon", { key: '65d6340b5f63f61b0057483b8631f5fb48f30007', slot: "icon", name: "inbox" }))))));
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
                "reflect": false,
                "attribute": "ticket"
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
                "reflect": false,
                "attribute": "propertyid"
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
                    "resolved": "Readonly<{ id: string; title: string; message: string; date: string; hour: number; minute: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"success\" | \"info\"; ariaRole?: \"status\"; } | Readonly<{ id: string; title: string; message: string; date: string; hour: number; minute: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"warning\" | \"error\" | \"alert\"; ariaRole?: \"alert\"; }",
                    "references": {
                        "Notification": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-notifications/types.ts::Notification",
                            "referenceLocation": "Notification"
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
