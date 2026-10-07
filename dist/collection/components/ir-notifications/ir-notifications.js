import { Host, h } from "@stencil/core";
import { PropertyService } from "../../services/property.service";
import ApiClient from "../../models/ApiClient";
import { t } from "../../services/locale/t";
import { formatCount } from "../../utils/number";
export class IrNotifications {
    el;
    ticket;
    propertyid;
    // Make notifications reactive;
    notifications = [];
    notificationCleared;
    apiClientService = new ApiClient();
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
            this.apiClientService.setApiClient(this.ticket);
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
        this.apiClientService.setApiClient(newValue);
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
        return (h(Host, { key: 'd53fe4a89b589299b78bed157ac9656693814caf' }, h("div", { key: '5c8e83fa862cbca6e800f713e749a5eb3dbaf813', style: { position: 'relative' } }, h("wa-tooltip", { key: 'c3958c5f33c7b587dd0e42abb05af6e8fa90d9c8', for: "notifications-button" }, t('Lcz_Notifications', { fallback: 'Notifications' })), this.notifications?.length > 0 && (h("wa-badge", { key: '7dc9666642a17202bcb215890a3982c529dbe1ce', pill: true, class: "header-notification-badge" }, formatCount(this.notifications.length))), h("wa-animation", { key: 'a973da5289b148deab53733cc5e820f1fe87e783', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, h("ir-custom-button", { key: '32caa68268baa774602a37c666b1ea0edb274886', id: "notifications-button", size: "s", appearance: "plain", ref: el => (this.buttonRef = el) }, h("wa-icon", { key: '486c87fbbf086de19c29caf60dfef92a66be58f3', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.4rem' } })))), h("wa-popover", { key: '485ae1011fe98af95f89d1306f1627f53b61239b', distance: 15, class: "notification__popover", for: "notifications-button" }, h("p", { key: 'a210ff318cf92a311bba46511509ba73ab139b95', class: "notification__popover-title" }, t('Lcz_Notifications', { fallback: 'Notifications' })), this.notifications.map(notification => {
            if (notification.type === 'availability_alert') {
                return (h("a", { href: "AcAvailabilityAlert.aspx", class: "notification-item" }, h("div", { class: "notification-item__content" }, h("p", { class: "notification-item__title" }, notification.message, ' ', t('Lcz_RoomsNotBookableConsecutiveNights', { fallback: 'rooms types are not bookable for 14 consecutive nights within the next 2 months. More...' })), h("wa-icon", { class: "ir-flip-rtl", name: "angle-right" }))));
            }
        }), this.notifications?.length === 0 && (h("ir-empty-state", { key: 'a281bce124aa2a2a96b5f73e2cc86eb7ba2fea5f', message: t('Lcz_AllCaughtUp', { fallback: 'All caught up!' }), style: { width: '250px', height: '150px' } }, h("wa-icon", { key: '4f2363854af7321d344898103e56854941e14661', slot: "icon", name: "inbox" }))))));
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
                    "resolved": "Readonly<{ id: string; title: string; message: string; date: string; hour: number; minute: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"error\" | \"warning\" | \"alert\"; ariaRole?: \"alert\"; } | Readonly<{ id: string; title: string; message: string; date: string; hour: number; minute: number; read?: boolean; dismissible?: boolean; autoDismissMs?: number; icon?: string; link?: NotificationLink; actions?: readonly NotificationAction[]; meta?: Record<string, unknown>; }> & { type: \"success\" | \"info\"; ariaRole?: \"status\"; }",
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
