import { r as registerInstance, d as getElement, h, H as Host, c as createEvent, F as Fragment } from './index-BYqrdgY9.js';
import { P as PropertyService } from './index-CbjeKhiT.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { B as BookingListingService } from './booking_listing.service-B_eS39CW.js';
import { c as cjsExports } from './index-Bn8mRT4P.js';
import { a as formatBookingNumber } from './number-DuxNax9Y.js';
import { a as axios } from './axios-B50ozOIF.js';
import './index-DeW5X45W.js';
import './calendar-data-BebdClG4.js';
import './index-CimhgHoX.js';
import './utils-COglgzDo.js';
import './moment-Mki5YqAR.js';
import './locales.store-C9qsbKR0.js';
import './booking.dto-DpE31yhG.js';
import './type-D7rOPtKA.js';
import './ir-date-_0rd4VZd.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-ByEkDTMV.js';

const irMenuCss = () => `:host{display:block}`;

const IrMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    menuGroups = [];
    menuItems = [];
    selectedHref;
    componentWillLoad() {
        const initialHref = this.selectedHref ?? this.getCurrentLocation();
        this.selectedHref = this.normalizeHref(initialHref);
    }
    componentDidLoad() {
        this.handleSlotChange();
    }
    handleLocationChange() {
        this.updateSelectedHref(this.getCurrentLocation());
    }
    async setSelectedHref(href) {
        this.updateSelectedHref(href);
    }
    handleSelectedHrefChange(newValue) {
        this.applySelection(newValue);
    }
    handleSlotChange = () => {
        this.menuGroups = Array.from(this.el.querySelectorAll('ir-menu-group'));
        this.menuItems = Array.from(this.el.querySelectorAll('ir-menu-item'));
        this.applySelection(this.selectedHref);
    };
    updateSelectedHref(href) {
        const normalized = this.normalizeHref(href);
        if (normalized !== this.selectedHref) {
            this.selectedHref = normalized;
        }
    }
    getCurrentLocation() {
        if (typeof window === 'undefined')
            return undefined;
        const { pathname, search, hash } = window.location;
        const cleanPath = pathname.replace(/\/+$/, '') || '/';
        let lastSegment = cleanPath.split('/').pop() ?? cleanPath;
        if (lastSegment === '') {
            lastSegment = '/';
        }
        return `${lastSegment}${search}${hash}`;
    }
    normalizeHref(href) {
        if (!href)
            return undefined;
        if (typeof window === 'undefined')
            return href;
        try {
            const url = new URL(href, window.location.origin);
            const normalizedPath = url.pathname.replace(/\/+$/, '') || '/';
            return `${normalizedPath}${url.search}${url.hash}`;
        }
        catch {
            return href;
        }
    }
    applySelection(targetHref) {
        const normalizedTarget = this.normalizeHref(targetHref);
        this.menuItems.forEach(item => {
            const itemHref = this.normalizeHref(item.href);
            const shouldSelect = !!normalizedTarget && itemHref === normalizedTarget;
            if (item.selected !== shouldSelect) {
                item.selected = shouldSelect;
            }
        });
    }
    openGroupForSelectedHref(targetHref) {
        const normalizedTarget = this.normalizeHref(targetHref);
        if (!normalizedTarget)
            return;
        for (const item of this.menuItems) {
            const itemHref = this.normalizeHref(item.href);
            if (itemHref === normalizedTarget) {
                const group = item.closest('ir-menu-group');
                if (group && !group.open) {
                    group.open = true;
                }
                break;
            }
        }
    }
    handleItemClick(event) {
        const path = event.composedPath();
        const menuItem = path.find(node => {
            if (!(node instanceof HTMLElement))
                return false;
            return node.tagName?.toLowerCase() === 'ir-menu-item';
        });
        if (menuItem?.href) {
            this.updateSelectedHref(menuItem.href);
        }
    }
    handleGroupOpen(e) {
        if (!e.detail)
            return;
        const openedGroup = e.target;
        const groupName = openedGroup.groupName;
        for (const group of this.menuGroups) {
            if (group !== openedGroup && group.groupName === groupName && group.open) {
                group.open = false;
            }
        }
    }
    handleOpenChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (e.detail) {
            const href = this.selectedHref ?? this.getCurrentLocation();
            this.openGroupForSelectedHref(href);
        }
    }
    render() {
        return (h(Host, { key: '3e0fd81fd35bd4037d97b764d4d08299cfce8a86' }, h("slot", { key: '27768abcb46ccb54f913ba6716f00e6cd184d5bf', onSlotchange: this.handleSlotChange })));
    }
    static get watchers() { return {
        "selectedHref": [{
                "handleSelectedHrefChange": 0
            }]
    }; }
};
IrMenu.style = irMenuCss();

const irMenuDrawerCss = () => `:host{display:block}.menu__drawer::part(header){border-bottom:0}.menu__drawer::part(body){padding:calc(var(--spacing) - 0.5rem)}`;

const IrMenuDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuOpenChanged = createEvent(this, "menuOpenChanged");
    }
    open;
    menuOpenChanged;
    componentWillLoad() {
        document.addEventListener('keydown', this.handleDocumentKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    handleDocumentKeyDown = (e) => {
        const isModifierPressed = e.ctrlKey || e.metaKey;
        if (isModifierPressed && e.key === 'b') {
            e.preventDefault();
            this.open = !this.open;
        }
    };
    async openDrawer() {
        this.open = true;
    }
    handleOpenChange() {
        this.menuOpenChanged.emit(this.open);
    }
    render() {
        return (h("ir-drawer", { key: 'c9ccee3cf1c28e6e7c0c3e799d8fb8e8c76ded88', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, h("slot", { key: 'b782326d53a47b5dca27a1aeb741f7cdaa5bf2f7', name: "label", slot: "label" }), h("slot", { key: 'e8c370d0d9ead8cf7185584e4763174c0c2b0f49' }), h("slot", { key: '1ea71cc104005459ffbfb8927a59263fda7bb57a', name: "footer", slot: "footer" })));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrMenuDrawer.style = irMenuDrawerCss();

const irMenuGroupCss = () => `:host{display:block}.menu-group__details::part(summary){width:100%}.menu-group__details::part(header){transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.menu-group__details::part(header),.menu-group__details::part(content){padding:0;border-radius:0;padding:0 0.5rem}.menu-group__details::part(header):hover{color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet)}.menu-group__details::part(header):active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.menu-group__details::part(content){display:flex;flex-direction:column;border-inline-start:1px solid var(--wa-color-surface-border);margin-inline-start:1.5rem}`;

const IrMenuGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openChanged = createEvent(this, "openChanged");
    }
    get el() { return getElement(this); }
    open;
    groupName;
    openChanged;
    // componentWillLoad() {
    //   this.el.addEventListener('mouseenter', this.handleShow);
    // }
    // disconnectedCallback() {
    //   this.el.removeEventListener('mouseenter', this.handleShow);
    // }
    handleHide = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.open = false;
        this.openChanged.emit(false);
    };
    handleShow = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.open = true;
        this.openChanged.emit(true);
    };
    render() {
        return (h("wa-details", { key: '9b4744086c40fcb28090a40020bfdd506e163bc2', class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, h("slot", { key: '9ec8afc879f5a89011617608e2c1082c14678fd4', slot: "summary", name: "summary" }), h("slot", { key: 'cb49e627c2e6889fb0db93025baa2269833c54bd' })));
    }
};
IrMenuGroup.style = irMenuGroupCss();

const irMenuItemCss = () => `:host{display:block;width:100%}.menu-item__link{all:unset;display:flex;align-items:center;box-sizing:border-box;width:100%;color:var(--wa-color-text-quiet);padding:0.5rem;cursor:pointer;transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.menu-item__label{flex:1 1 0%;text-align:start}.menu-item__link:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.menu-item__link:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.menu-item__link:focus{outline:none}.menu-item__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.menu-item__link--selected{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb));font-weight:600}.menu-item__link--selected:hover{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb))}.menu-item__link--clickable{padding-inline-start:1rem;padding-inline-end:1rem}`;

const IrMenuItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    href;
    selected;
    badge;
    render() {
        const contentClass = {
            'menu-item__link': true,
            'menu-item__link--selected': !!this.selected,
            'menu-item__link--clickable': !!this.href,
        };
        const content = (h(Fragment, { key: 'c07468b7ec0190dfbeeabcdec29eb431e056a7a4' }, h("span", { key: 'a545a1dc2b3981995a6296bd5f8607095c964ed7', class: "menu-item__icon" }, h("slot", { key: '3db24bf121d30be8ab5d8c50efd3dbc621738f9c', name: "icon" })), h("span", { key: '4371ee49d05870136ab9aea16b62ccfd40de68d9', class: "menu-item__label" }, h("slot", { key: '6371a3b4fe67855c29668ac5d30cddb730e5ae51' })), this.badge ? (h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (h(Host, { key: '23f1f462e440a51e4cb8f09db4a004da3a778ed7' }, this.href ? (h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (h("div", { class: contentClass }, content))));
    }
};
IrMenuItem.style = irMenuItemCss();

const irNotificationsCss = () => `.sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.notification__bell-icon.sc-ir-notifications{display:inline-flex;transform-origin:top center}.header-notification-badge.sc-ir-notifications{position:absolute;top:-5px;inset-inline-end:-5px;z-index:1}.notification__popover.sc-ir-notifications::part(body),.notification__popover.sc-ir-notifications [part~="body"]{padding:0;padding-bottom:1rem;max-height:300px;overflow-y:auto}.notification-item.sc-ir-notifications{display:flex;align-items:center;min-width:250px;padding:0.5rem 1rem;transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);color:var(--wa-color-text-normal)}.notification-item.sc-ir-notifications:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.notification-item.sc-ir-notifications:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.notification-item.sc-ir-notifications:focus{outline:none}.notification-item.sc-ir-notifications:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.notification-item__content.sc-ir-notifications{display:flex;flex:1 1 0%;align-items:center;gap:0.5rem}.notification-item.sc-ir-notifications{border-bottom:1px solid var(--wa-color-surface-border)}.notification-item.sc-ir-notifications:last-child{border-bottom:0}.notification__popover-title.sc-ir-notifications,.notification-item__title.sc-ir-notifications,.notification-item__time.sc-ir-notifications{margin:0;padding:0}.notification-item__title.sc-ir-notifications,.notification__popover-title.sc-ir-notifications{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.notification-item__title.sc-ir-notifications{font-weight:400}.notification__popover-title.sc-ir-notifications{font-size:var(--wa-font-size-m);padding:1rem;position:sticky;top:0;background-color:var(--wa-color-surface-default)}.notification-item__title.sc-ir-notifications,.notification-item__time.sc-ir-notifications{font-size:var(--wa-font-size-s)}.notification-item__time.sc-ir-notifications{color:var(--wa-color-text-quiet)}.notification-item__unread-indicator.sc-ir-notifications{display:block;height:0.5rem;width:0.5rem;border-radius:0.25rem;background-color:var(--wa-color-brand-fill-loud)}.ir-flip-rtl.sc-ir-notifications:dir(rtl){scale:-1 1}`;

const IrNotifications = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.notificationCleared = createEvent(this, "notificationCleared");
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'ba91bce2803d77fd64da746ace687759ae6be566' }, h("div", { key: 'ca62107cc6e7dbf41b1e0331a3ee663bd5616e87', style: { position: 'relative' } }, h("wa-tooltip", { key: '67d1f2f5bb5c152ef90b8f2d17bfb2d2a9fb6a02', for: "notifications-button" }, "Notifications"), this.notifications?.length > 0 && (h("wa-badge", { key: '8ce8ab6f3cdba327d73aeeb7f3a72aab62d45334', pill: true, class: "header-notification-badge" }, this.notifications.length)), h("wa-animation", { key: '154c8b7fc25bdd80bcc4d74a074a1b97a0284b39', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, h("ir-custom-button", { key: '968bd132c46a293d349fa0c737a9f5d19389ec21', id: "notifications-button", size: "s", appearance: "plain", ref: el => (this.buttonRef = el) }, h("wa-icon", { key: '75c6a31b77dd789a3fb8d63d66f78f58a13276d2', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.4rem' } })))), h("wa-popover", { key: '460d021fc7230fca1df1e84eafd83aa6a939d03a', distance: 15, class: "notification__popover", for: "notifications-button" }, h("p", { key: 'bae27cf7626738e9035d7575d908d881211f61c3', class: "notification__popover-title" }, "Notifications"), this.notifications.map(notification => {
            if (notification.type === 'availability_alert') {
                return (h("a", { href: "AcAvailabilityAlert.aspx", class: "notification-item" }, h("div", { class: "notification-item__content" }, h("p", { class: "notification-item__title" }, notification.message, " rooms types are not bookable for 14 consecutive nights within the next 2 months. More..."), h("wa-icon", { class: "ir-flip-rtl", name: "angle-right" }))));
            }
        }), this.notifications?.length === 0 && (h("ir-empty-state", { key: 'ae232e666df7ab7d71ce54bb2770dbd4790ac06f', message: "All caught up!", style: { width: '250px', height: '150px' } }, h("wa-icon", { key: '625868048fb32767a2d5621dc89464448efe3a0f', slot: "icon", name: "inbox" }))))));
    }
    static get watchers() { return {
        "notifications": [{
                "handleNotificationCountChange": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }],
        "propertyid": [{
                "handlePropertyChange": 0
            }]
    }; }
};
IrNotifications.style = irNotificationsCss();

const irPmsPaymentDueAlertCss = () => `.sc-ir-pms-payment-due-alert-h{display:block}.pms-payment-due-alert__callout.sc-ir-pms-payment-due-alert{border-radius:0}.pms-payment-due-alert__callout-message.sc-ir-pms-payment-due-alert{width:100%;display:flex;text-align:center;flex-wrap:wrap;justify-content:center;align-items:center;gap:1rem}`;

const IrPmsPaymentDueAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    propertyid;
    ticket;
    baseUrl;
    notifications = [];
    tokenService = new Token();
    propertyService = new PropertyService();
    componentWillLoad() {
        if (this.baseUrl) {
            this.tokenService.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.fetchNotifications();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue || !newValue) {
            return;
        }
        this.tokenService.setToken(newValue);
        this.fetchNotifications();
    }
    async fetchNotifications() {
        if (!this.propertyid) {
            this.notifications = [];
            return;
        }
        try {
            this.notifications = await this.propertyService.fetchNotifications(this.propertyid);
        }
        catch (error) {
            console.log(error);
            this.notifications = [];
        }
    }
    render() {
        const combinedMessage = this.notifications
            ?.filter(n => n.type === 'financial')
            ?.map(notification => notification.message)
            ?.filter(Boolean)
            ?.join(' ');
        if (!combinedMessage) {
            return h(Host, null);
        }
        return (h(Host, null, h("wa-callout", { class: "pms-payment-due-alert__callout", size: "s", appearance: "filled", variant: "danger" }, h("div", { class: "pms-payment-due-alert__callout-message" }, h("wa-icon", { style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' }, slot: "icon", name: "triangle-exclamation" }), h("span", null, combinedMessage)))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrPmsPaymentDueAlert.style = irPmsPaymentDueAlertCss();

const irPmsSearchCss = () => `:host{display:block}.pms-autocomplete__end-slot{display:flex;align-items:center;gap:0.5rem}.pms-search__autocomplete::part(listbox){max-height:250px;width:max-content;max-width:350px}.pms-search__option{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.pms-search__option-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pms-search__option-status{flex-shrink:0}.pms-search__empty{display:flex;align-items:center;flex-direction:column;gap:0.75rem;padding:0.75rem 0.9rem;border-radius:0.75rem}.pms-search__empty-icon{font-size:1.1rem;opacity:0.7;margin-top:0.15rem}.pms-search__empty-content{display:flex;flex-direction:column;align-items:center;gap:0.15rem;min-width:0}.pms-search__empty-title{font-weight:600;line-height:1.2}.pms-search__empty-subtitle{font-size:0.875rem;opacity:0.8;line-height:1.25}.pms-search__empty-example{font-weight:600;opacity:0.95}.pms-search__option{display:grid;grid-template-columns:120px      1fr ;align-items:center;gap:1rem}.pms-search__option-icon{width:1.5625rem;flex-shrink:0}.pms-search__option-bookings{margin:0;padding:0;display:flex;flex-direction:column;line-height:1.2}.pms-search__option-booking{font-size:0.875rem;font-weight:500}.pms-search__option-channel-booking{font-size:0.75rem}.pms-search__option-label{font-size:0.875rem;font-weight:500;white-space:nowrap}.pms-search__option-status{margin-inline-start:auto}.pms-search__option-icon{width:1rem}.pms-search__option-status,.pms-search__autocomplete-option::part(checked-icon){display:none}.pms-search__autocomplete-option::part(start){padding-inline-start:0.5rem}.pms-search__option-label,.pms-search__option-booking{font-size:1rem}@media (width >= 40rem){.pms-search__option-icon{width:1.5625rem;flex-shrink:0}}@media (min-width: 768px){.pms-search__autocomplete::part(listbox){width:auto;max-width:var(--auto-size-available-width)}.pms-search__option-status{display:inline-flex}}`;

const IrPmsSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comboboxSelect = createEvent(this, "combobox-select");
    }
    propertyid;
    ticket;
    shortcutHint = null;
    bookings = [];
    isLoading;
    tokenService = new Token();
    bookingListingService = new BookingListingService();
    search$ = new cjsExports.Subject();
    subscription;
    comboboxSelect;
    autoCompleteRef;
    componentWillLoad() {
        document.addEventListener('keydown', this.focusInput);
        this.detectShortcutHint();
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
        this.subscription = this.search$
            .pipe(cjsExports.debounceTime(500), cjsExports.distinctUntilChanged(), cjsExports.filter(value => value.length >= 2), cjsExports.tap(() => {
            this.isLoading = true;
            this.autoCompleteRef?.hide();
        }), cjsExports.switchMap(value => {
            const isNumber = /^(?:-?\d+|.{3}-.*)$/.test(value);
            return cjsExports.from(this.bookingListingService.getExposedBookings({
                book_nbr: isNumber ? value : null,
                name: isNumber ? null : value,
                property_id: this.propertyid,
                filter_type: 1,
                from: null,
                to: null,
                balance_filter: '0',
                start_row: 0,
                end_row: 20,
                total_count: 0,
                booking_status: '',
                affiliate_id: 0,
                is_mpo_managed: false,
                is_mpo_used: false,
                is_for_mobile: false,
                is_combined_view: false,
                is_to_export: false,
                property_ids: null,
                channel: '',
            }, { skipStore: true })).pipe(cjsExports.catchError(() => cjsExports.of([])));
        }))
            .subscribe(bookings => {
            this.bookings = bookings.filter(Boolean);
            this.isLoading = false;
            this.autoCompleteRef?.show();
        });
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.focusInput);
        this.subscription?.unsubscribe();
    }
    handleTicketChange(newValue, oldValue) {
        console.log(this.ticket);
        if (newValue !== oldValue && newValue) {
            this.tokenService.setToken(this.ticket);
        }
    }
    detectShortcutHint() {
        // Hide on mobile / touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            this.shortcutHint = null;
            return;
        }
        // Detect macOS
        const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
        this.shortcutHint = isMac ? '⌘ K' : 'Ctrl K';
    }
    focusInput = (event) => {
        const isK = event.key.toLowerCase() === 'k';
        const isCmdOrCtrl = event.metaKey || event.ctrlKey;
        if (isK && isCmdOrCtrl) {
            event.preventDefault();
            // this.pickerInputRef?.focusInput();
            console.log(this.autoCompleteRef);
            this.autoCompleteRef.focusInput();
        }
    };
    fetchBookings(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        if (!value) {
            this.bookings = [];
            this.autoCompleteRef?.hide();
            return;
        }
        this.search$.next(value);
    }
    handleComboboxSelect(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.comboboxSelect.emit({
            item: {
                label: '',
                value: event.detail,
            },
        });
    }
    render() {
        return (h(Host, { key: 'ae156d3c3074f52e2844183f0990e881533e9dc9' }, h("ir-autocomplete", { key: 'e7edac466941cd0ca9aa710cdac58e8ffdfca288', class: "pms-search__autocomplete", placeholder: "Booking# or guest name", ref: el => (this.autoCompleteRef = el), "onCombobox-change": event => this.handleComboboxSelect(event), "onText-change": event => this.fetchBookings(event), pill: true, appearance: "filled" }, h("wa-icon", { key: 'cb6277fa7dc46d8d5b7f09755f1539c9f810b588', name: "magnifying-glass", slot: "start" }), h("div", { key: '3d6947a3e69a471e77412b207cb7bdd494056c88', slot: "end", class: "pms-autocomplete__end-slot" }, this.isLoading && h("wa-spinner", { key: '8037d72b51815bbbe56a212fe2a66dc7ea718365' }), this.shortcutHint && h("span", { key: '1f826e47381a70d5d3f792471b2746224b1e3f32' }, this.shortcutHint)), (this.bookings ?? [])?.length === 0 && !this.isLoading && (h("div", { key: '0b280539da5bd09b48f721cc279e1616a3782029', class: "pms-search__empty", role: "status", "aria-live": "polite" }, h("wa-icon", { key: '717faa66628fa5a90de921fff86f72235264d913', name: "circle-info", "aria-hidden": "true" }), h("div", { key: '794c769b76334e121ef92d624ac7ddf4b750c67a', class: "pms-search__empty-content" }, h("div", { key: 'b6184bd4ef20da57b1b7449c325d2ff76b148b62', class: "pms-search__empty-title" }, "No results found")))), (this.bookings ?? [])?.map(b => {
            if (!b) {
                return null;
            }
            const label = `${b?.booking_nbr}  ${b?.guest?.first_name} ${b?.guest?.last_name}`;
            return (h("ir-autocomplete-option", { class: "pms-search__autocomplete-option", value: b.booking_nbr, label: label }, h("img", { slot: "start", class: "pms-search__option-icon", src: b.origin.Icon, alt: b.origin.Label }), h("div", { class: "pms-search__option" }, h("p", { class: "pms-search__option-bookings" }, h("span", { class: "pms-search__option-booking" }, formatBookingNumber(b.booking_nbr)), b.channel_booking_nbr && h("span", { class: "pms-search__option-channel-booking" }, formatBookingNumber(b.channel_booking_nbr))), h("span", { class: "pms-search__option-label" }, b.guest.first_name, " ", b.guest.last_name)), h("ir-booking-status-tag", { slot: "end", class: "pms-search__option-status", status: b.status })));
        }))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrPmsSearch.style = irPmsSearchCss();

const irPropertySwitcherCss = () => `.sc-ir-property-switcher-h{display:block}.property-switcher__trigger.sc-ir-property-switcher{width:200px;padding:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start}.property-switcher__dialog.sc-ir-property-switcher::part(dialog),.property-switcher__dialog.sc-ir-property-switcher [part~="dialog"]{margin:0;max-width:100%;height:100%;max-height:100%;border-radius:0}.property-switcher__dialog.sc-ir-property-switcher::part(body),.property-switcher__dialog.sc-ir-property-switcher [part~="body"]{padding:0}.property-switcher__trigger-btn.sc-ir-property-switcher{width:100%}.property-switcher__trigger-btn.sc-ir-property-switcher::part(start),.property-switcher__trigger-btn.sc-ir-property-switcher [part~="start"]{display:none}.property-switcher__trigger-btn.sc-ir-property-switcher::part(base),.property-switcher__trigger-btn.sc-ir-property-switcher [part~="base"]{justify-content:space-between;width:100%}.property-switcher__loader.sc-ir-property-switcher,.property-switcher__dropdown-loader.sc-ir-property-switcher{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;min-width:100px}.property-switcher__loader.sc-ir-property-switcher{min-height:150px}@media (min-width: 640px){.property-switcher__dialog.sc-ir-property-switcher::part(dialog){margin:auto;inset:0;max-width:100%;border-radius:var(--wa-panel-border-radius);height:fit-content}.property-switcher__dialog.sc-ir-property-switcher::part(header){display:none}}`;

const IrPropertySwitcher = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.propertyChange = createEvent(this, "propertyChange");
    }
    get el() { return getElement(this); }
    mode = 'dialog';
    ticket;
    baseUrl;
    // NEW: Allow external property binding
    propertyId;
    selectedLinkedPropertyId;
    open = false;
    isLinkedLoading = false;
    linkedLoaded = false;
    hasPool = false;
    propertyState = {
        selected: null,
        linked: [],
        source: 'storage',
    };
    displayMode = 'read-only';
    token = new Token();
    /** Single unified event - emitted when dialog confirms selection OR dropdown selects linked property */
    propertyChange;
    storagePoller;
    userInfoPoller;
    lastSelectedAcRaw = null;
    lastUserInfoRaw = null;
    isUpdating = false; // Prevent circular updates
    async componentWillLoad() {
        if (this.baseUrl)
            this.token.setBaseUrl(this.baseUrl);
        if (this.ticket) {
            this.token.setToken(this.ticket);
            await this.init();
        }
        window.addEventListener('storage', this.handleStorageEvent);
    }
    disconnectedCallback() {
        this.stopPolling();
        window.removeEventListener('storage', this.handleStorageEvent);
    }
    async handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.token.setToken(newValue);
            await this.init();
        }
    }
    // NEW: React to external property ID changes
    async handlePropertyIdChange(newId) {
        if (this.isUpdating)
            return;
        if (newId && newId !== this.propertyState.selected?.PROPERTY_ID) {
            // External changes don't emit propertyChange event
            await this.loadPropertyById(newId, 'external', undefined, false);
        }
    }
    handleLinkedPropertyIdChange(newId) {
        // Validate that the linked property exists
        if (newId && !this.propertyState.linked.find(p => p.property_id === newId)) {
            console.warn(`Linked property ${newId} not found in available properties`);
        }
    }
    async init() {
        await this.pollSelectedAcStorage();
        this.pollUserInfoStorage();
        if (!this.propertyState.selected) {
            this.startPolling();
        }
    }
    startPolling() {
        if (this.storagePoller)
            return;
        this.storagePoller = window.setInterval(() => {
            this.pollSelectedAcStorage();
            this.pollUserInfoStorage();
        }, 300);
    }
    stopPolling() {
        if (this.storagePoller) {
            clearInterval(this.storagePoller);
            this.storagePoller = undefined;
        }
        if (this.userInfoPoller) {
            clearInterval(this.userInfoPoller);
            this.userInfoPoller = undefined;
        }
    }
    handleStorageEvent = () => {
        this.startPolling();
    };
    pollSelectedAcStorage = async () => {
        const selectedAcRaw = localStorage.getItem('_Selected_Ac');
        if (selectedAcRaw === this.lastSelectedAcRaw)
            return;
        this.lastSelectedAcRaw = selectedAcRaw;
        if (!selectedAcRaw)
            return;
        let selectedAc;
        try {
            selectedAc = JSON.parse(selectedAcRaw);
        }
        catch {
            return;
        }
        await this.updatePropertyState(selectedAc, null, 'storage');
        this.stopPolling();
    };
    pollUserInfoStorage = () => {
        const userInfoRaw = localStorage.getItem('UserInfo_b');
        if (userInfoRaw === this.lastUserInfoRaw)
            return;
        this.lastUserInfoRaw = userInfoRaw;
        if (!userInfoRaw)
            return;
        this.resolveDisplayMode();
        if (this.userInfoPoller) {
            clearInterval(this.userInfoPoller);
            this.userInfoPoller = undefined;
        }
    };
    // NEW: Unified state update method
    async updatePropertyState(selectedAc, linkedProperty, source, emitEvent = false) {
        this.isUpdating = true;
        const selected = {
            A_NAME: selectedAc.My_User?.USERNAME ?? '',
            COUNTRY_CODE: selectedAc.COUNTRY_ID,
            COUNTRY_NAME: selectedAc.My_Country?.L1_NAME_REF ?? '',
            PROPERTY_ID: selectedAc.AC_ID,
            PROPERTY_NAME: selectedAc.NAME,
        };
        const hasPool = Boolean(selectedAc.POOL);
        const sameProperty = this.propertyState.selected?.PROPERTY_ID === selectedAc.AC_ID;
        const keepLinked = sameProperty && this.linkedLoaded && hasPool;
        const linked = keepLinked ? this.propertyState.linked : [];
        // Update state atomically
        this.propertyState = {
            selected,
            linked,
            source,
        };
        this.hasPool = hasPool;
        this.linkedLoaded = keepLinked;
        if (!keepLinked) {
            this.isLinkedLoading = false;
        }
        // Sync external props
        this.propertyId = selected.PROPERTY_ID;
        this.selectedLinkedPropertyId = linkedProperty?.property_id;
        this.resolveDisplayMode();
        // Only emit event when explicitly requested (user selection from dialog)
        if (emitEvent) {
            this.propertyChange.emit({
                property: selectedAc,
                linkedProperty,
                allLinkedProperties: linked,
            });
        }
        if (this.open) {
            this.ensureLinkedPropertiesLoaded();
        }
        this.isUpdating = false;
    }
    async ensureLinkedPropertiesLoaded() {
        if (!this.hasPool || this.linkedLoaded || this.isLinkedLoading)
            return;
        if (!this.propertyState.selected?.PROPERTY_ID)
            return;
        this.isLinkedLoading = true;
        const linked = await this.fetchLinkedProperties(this.propertyState.selected.PROPERTY_ID);
        this.propertyState = {
            ...this.propertyState,
            linked,
        };
        this.linkedLoaded = true;
        this.isLinkedLoading = false;
    }
    async fetchLinkedProperties(acId) {
        try {
            const { data } = await axios.post(`${this.baseUrl ?? ''}/Fetch_Linked_Properties`, {
                property_id: acId,
            });
            if (data.ExceptionMsg) {
                throw new Error(data.ExceptionMsg);
            }
            return Array.isArray(data.My_Result) ? data.My_Result : [];
        }
        catch (error) {
            console.error('Failed to fetch linked properties', error);
            return [];
        }
    }
    resolveDisplayMode() {
        const userInfoRaw = localStorage.getItem('UserInfo_b');
        let userInfo = null;
        try {
            if (userInfoRaw)
                userInfo = JSON.parse(userInfoRaw);
        }
        catch {
            /* noop */
        }
        const userTypeCode = String(userInfo?.USER_TYPE_CODE ?? '');
        if (userTypeCode === '1' || userTypeCode === '4') {
            this.displayMode = 'dialog';
            return;
        }
        if (!this.propertyState?.selected || !this.hasPool) {
            this.displayMode = 'read-only';
            return;
        }
        this.displayMode = 'dropdown';
    }
    handlePropertySelected = async (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        // This is the ONLY place where propertyChange event is emitted
        // Only fired when dialog content confirms selection
        await this.loadPropertyById(event.detail, 'user-selection', undefined, true);
    };
    handleDropdownSelect = async (selectedProperty) => {
        const selectedId = Number(selectedProperty);
        const linkedProperty = this.propertyState.linked.find(p => p.property_id === selectedId);
        if (!linkedProperty)
            return;
        // Dropdown selection also emits propertyChange with linkedProperty context
        await this.loadPropertyById(linkedProperty.property_id, 'user-selection', linkedProperty, true);
    };
    // NEW: Consolidated loading method
    async loadPropertyById(propertyId, source, linkedProperty, emitEvent = false) {
        if (this.isUpdating)
            return;
        this.open = false;
        try {
            const { data } = await axios.post(`${this.baseUrl ?? ''}/Get_Ac_By_AC_ID_Adv`, {
                AC_ID: propertyId,
                Bypass_Caching: true,
                IS_BACK_OFFICE: true,
            });
            if (data.ExceptionMsg) {
                throw new Error(data.ExceptionMsg);
            }
            await this.updatePropertyState(data.My_Result, linkedProperty ?? null, source, emitEvent);
        }
        catch (error) {
            console.error('Failed to fetch selected property details', error);
        }
    }
    renderReadOnly() {
        return h("p", { class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME ?? 'Property');
    }
    trigger() {
        return (h("wa-button", { size: "s", withCaret: true, class: "property-switcher__trigger-btn", variant: "neutral", appearance: "outlined", onClick: () => {
                this.open = !this.open;
                if (this.open) {
                    this.ensureLinkedPropertiesLoaded();
                }
            } }, h("p", { class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME ?? 'Select property')));
    }
    render() {
        return (h(Host, { key: '535ed5185c1e7d4e93d515f406eb991f6ac30b5a' }, this.displayMode === 'read-only' && this.renderReadOnly(), this.displayMode === 'dropdown' && (h("wa-dropdown", { key: '811c86adca87ab9f7a2c3657fbffb0e2ce5d0371', "onwa-show": () => {
                this.ensureLinkedPropertiesLoaded();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.handleDropdownSelect(Number(e.detail.item.value));
            } }, h("wa-button", { key: '9a4dea56f71fad96ef8a5444614d44e5f1534f99', size: "s", class: "property-switcher__trigger-btn", slot: "trigger", withCaret: true, variant: "neutral", appearance: "outlined" }, h("p", { key: '23924889e1b42a85fecb0b293c4a2b6a52feb378', class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME)), this.isLinkedLoading && (h("wa-dropdown-item", { key: '1ac97dcf5de0ea904c17298ae29413aa2336faac', disabled: true, class: "property-switcher__dropdown-loader" }, h("wa-spinner", { key: '71c59088ebdcda8daa34d85bc682bd7f8373a7b5' }))), this.propertyState.linked?.map(property => (h("wa-dropdown-item", { value: property.property_id?.toString(), key: `dropdown-item-${property.property_id}` }, property.name))))), this.displayMode === 'dialog' && (h("div", { key: '8a51bc7da26cee007c4ad37b74d247b21241c810' }, this.trigger(), h("ir-dialog", { key: '94c3ad30ae2f097af59a1862135cb5b0e617022e',
            // withoutHeader
            open: this.open, label: "Search", class: "property-switcher__dialog", style: { '--ir-dialog-width': '40rem' }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            } }, this.open &&
            (this.isLinkedLoading ? (h("div", { class: "property-switcher__loader" }, h("ir-spinner", null))) : (h("ir-property-switcher-dialog-content", { onLinkedPropertyChange: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleDropdownSelect(Number(e.detail.property_id));
                }, open: this.open, selectedPropertyId: this.propertyState.selected?.PROPERTY_ID, properties: this.propertyState.linked, onPropertySelected: this.handlePropertySelected }))))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }],
        "propertyId": [{
                "handlePropertyIdChange": 0
            }],
        "selectedLinkedPropertyId": [{
                "handleLinkedPropertyIdChange": 0
            }]
    }; }
};
IrPropertySwitcher.style = irPropertySwitcherCss();

export { IrMenu as ir_menu, IrMenuDrawer as ir_menu_drawer, IrMenuGroup as ir_menu_group, IrMenuItem as ir_menu_item, IrNotifications as ir_notifications, IrPmsPaymentDueAlert as ir_pms_payment_due_alert, IrPmsSearch as ir_pms_search, IrPropertySwitcher as ir_property_switcher };
