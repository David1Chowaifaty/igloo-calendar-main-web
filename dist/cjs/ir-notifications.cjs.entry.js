'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const moment = require('./moment-1780b03a.js');

const irNotificationsCss = ".sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.notification__bell-icon.sc-ir-notifications{display:inline-flex;transform-origin:top center}.header-notification-badge.sc-ir-notifications{position:absolute;top:-5px;right:-5px;z-index:1}.notification__popover.sc-ir-notifications::part(body){padding:0;padding-bottom:1rem;max-height:300px;overflow-y:auto}.notification-item.sc-ir-notifications{display:flex;align-items:center;min-width:250px;padding:0.5rem 1rem;transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.notification-item.sc-ir-notifications:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.notification-item.sc-ir-notifications:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.notification-item.sc-ir-notifications:focus{outline:none}.notification-item.sc-ir-notifications:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.notification-item__content.sc-ir-notifications{display:flex;flex-direction:column;flex:1 1 0%}.notification-item.sc-ir-notifications{border-bottom:1px solid var(--wa-color-surface-border)}.notification-item.sc-ir-notifications:last-child{border-bottom:0}.notification__popover-title.sc-ir-notifications,.notification-item__title.sc-ir-notifications,.notification-item__time.sc-ir-notifications{margin:0;padding:0}.notification-item__title.sc-ir-notifications,.notification__popover-title.sc-ir-notifications{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.notification__popover-title.sc-ir-notifications{font-size:var(--wa-font-size-m);padding:1rem;position:sticky;top:0;background-color:var(--wa-color-surface-default)}.notification-item__title.sc-ir-notifications,.notification-item__time.sc-ir-notifications{font-size:var(--wa-font-size-s)}.notification-item__time.sc-ir-notifications{color:var(--wa-color-text-quiet)}.notification-item__unread-indicator.sc-ir-notifications{display:block;height:0.5rem;width:0.5rem;border-radius:0.25rem;background-color:var(--wa-color-brand-fill-loud)}";
const IrNotificationsStyle0 = irNotificationsCss;

const IrNotifications = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.notificationCleared = index.createEvent(this, "notificationCleared", 7);
    }
    get el() { return index.getElement(this); }
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
        const now = moment.hooks();
        const then = moment.hooks(date, 'YYYY-MM-DD').hour(hour).minute(minute).second(0);
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
        return (index.h(index.Host, { key: '38629dfbc3200e49944ed7837c2fc5c1b7ce79f6' }, index.h("div", { key: '1c93b09cfe8b71ec1dee8cd35fdb7de6f9a6a706', style: { position: 'relative' } }, index.h("wa-tooltip", { key: '4beb80e5abb3dc666bd6c15c717955dda9a93c63', for: "notifications-button" }, "Notifications"), this.notifications?.length > 0 && (index.h("wa-badge", { key: '312408397796076fe28cbe347c2c1ca392b7de3d', pill: true, class: "header-notification-badge" }, this.notifications.length)), index.h("wa-animation", { key: '7dc7d0a6c0f513d61aa041f74e1e6b9db0eb2891', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, index.h("ir-custom-button", { key: 'a7e019bfa30932f76fcd9c82e1f0644bd53a7a3e', id: "notifications-button", size: "small", appearance: "plain", ref: el => (this.buttonRef = el) }, index.h("wa-icon", { key: 'fc15920c11648f331d5edb8c9d2be3eeca24350a', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.2rem' } })))), index.h("wa-popover", { key: '2402ffcf6cce9e65723361c5514b2f953fe62397', class: "notification__popover", for: "notifications-button" }, index.h("p", { key: 'cb5da7989694e11457729873576140a88fb4ae27', class: "notification__popover-title" }, "Notifications"), this.notifications?.map(notification => (index.h("div", { class: "notification-item" }, index.h("div", { class: "notification-item__content" }, index.h("p", { class: "notification-item__title" }, notification.title), index.h("p", { class: "notification-item__time" }, this.getRelativeTimeFromParts(notification.date, notification.hour, notification.minute))), index.h("span", { class: "notification-item__unread-indicator" })))), this.notifications?.length === 0 && (index.h("ir-empty-state", { key: 'ad6b69e2cb98d8ea077e5346956937c73fd43032', style: { width: '250px', height: '150px' } }, index.h("wa-icon", { key: '7d03b1390108247c4e8012eb7c921efe90494841', slot: "icon", name: "inbox" }))))));
    }
    static get watchers() { return {
        "notifications": ["handleNotificationCountChange"]
    }; }
};
IrNotifications.style = IrNotificationsStyle0;

exports.ir_notifications = IrNotifications;

//# sourceMappingURL=ir-notifications.cjs.entry.js.map