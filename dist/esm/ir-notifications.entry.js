import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-b3dce66a.js';
import { h as hooks } from './moment-ab846cee.js';

const irNotificationsCss = ".sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.notification__bell-icon.sc-ir-notifications{display:inline-flex;transform-origin:top center}.header-notification-badge.sc-ir-notifications{position:absolute;top:-5px;right:-5px;z-index:1}.notification__popover.sc-ir-notifications::part(body){padding:0;padding-bottom:1rem;max-height:300px;overflow-y:auto}.notification-item.sc-ir-notifications{display:flex;align-items:center;min-width:250px;padding:0.5rem 1rem;transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.notification-item.sc-ir-notifications:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.notification-item.sc-ir-notifications:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.notification-item.sc-ir-notifications:focus{outline:none}.notification-item.sc-ir-notifications:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.notification-item__content.sc-ir-notifications{display:flex;flex-direction:column;flex:1 1 0%}.notification-item.sc-ir-notifications{border-bottom:1px solid var(--wa-color-surface-border)}.notification-item.sc-ir-notifications:last-child{border-bottom:0}.notification__popover-title.sc-ir-notifications,.notification-item__title.sc-ir-notifications,.notification-item__time.sc-ir-notifications{margin:0;padding:0}.notification-item__title.sc-ir-notifications,.notification__popover-title.sc-ir-notifications{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.notification__popover-title.sc-ir-notifications{font-size:var(--wa-font-size-m);padding:1rem;position:sticky;top:0;background-color:var(--wa-color-surface-default)}.notification-item__title.sc-ir-notifications,.notification-item__time.sc-ir-notifications{font-size:var(--wa-font-size-s)}.notification-item__time.sc-ir-notifications{color:var(--wa-color-text-quiet)}.notification-item__unread-indicator.sc-ir-notifications{display:block;height:0.5rem;width:0.5rem;border-radius:0.25rem;background-color:var(--wa-color-brand-fill-loud)}";
const IrNotificationsStyle0 = irNotificationsCss;

const IrNotifications = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.notificationCleared = createEvent(this, "notificationCleared", 7);
    }
    get el() { return getElement(this); }
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
        const now = hooks();
        const then = hooks(date, 'YYYY-MM-DD').hour(hour).minute(minute).second(0);
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
        return (h(Host, { key: '5a8abaf0cf655e1e3be39d44dd57860f6de761b2' }, h("div", { key: '51f61eb639907e18763a0d51509192a2f6762468', style: { position: 'relative' } }, h("wa-tooltip", { key: '4a7a627d10d7dd4adf1a008d3490658829baf68f', for: "notifications-button" }, "Notifications"), this.notifications?.length > 0 && (h("wa-badge", { key: '0f4f57b1a049c9326813196e5e78c0f444432570', pill: true, class: "header-notification-badge" }, this.notifications.length)), h("wa-animation", { key: '732f9bc8e9603e7b216df98c9734a5090765da12', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, h("ir-custom-button", { key: '00621d2032ad0fe0da5ccf6ae14a98a80866720a', id: "notifications-button", size: "small", appearance: "plain", ref: el => (this.buttonRef = el) }, h("wa-icon", { key: '07906d9b96f77c19d8a81a79e79619998b732e63', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.2rem' } })))), h("wa-popover", { key: 'c9c267df837683f9c27531d39d5f7170715a7b95', class: "notification__popover", for: "notifications-button" }, h("p", { key: 'b44dc30fc5f9efbf166c21ecbb2ba189ebf7cfca', class: "notification__popover-title" }, "Notifications"), this.notifications?.map(notification => (h("div", { class: "notification-item" }, h("div", { class: "notification-item__content" }, h("p", { class: "notification-item__title" }, notification.title), h("p", { class: "notification-item__time" }, this.getRelativeTimeFromParts(notification.date, notification.hour, notification.minute))), h("span", { class: "notification-item__unread-indicator" })))), this.notifications?.length === 0 && (h("ir-empty-state", { key: 'ea6a4db571dd3e7d90bb9005f34834e963b72edd', style: { width: '250px', height: '150px' } }, h("wa-icon", { key: '1badee06ff8f5c681d06b79e51b99d3665f632cc', slot: "icon", name: "inbox" }))))));
    }
    static get watchers() { return {
        "notifications": ["handleNotificationCountChange"]
    }; }
};
IrNotifications.style = IrNotificationsStyle0;

export { IrNotifications as ir_notifications };

//# sourceMappingURL=ir-notifications.entry.js.map