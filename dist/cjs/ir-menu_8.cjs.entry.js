'use strict';

var index = require('./index-CQkpA5n3.js');
var direction = require('./direction-Bl6Woad1.js');
var index$1 = require('./index-Cp3x1APc.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var t = require('./t-wyGILxEL.js');
var number = require('./number-C1isaNqY.js');
var index$2 = require('./index-BTTYKx-Q.js');
var index$3 = require('./index-Dssn3hdS.js');
var irDate = require('./ir-date-CUtS9vzZ.js');
require('./locale-scope-C7rmpwuA.js');
require('./moment-CdViwxPQ.js');
var locale_controller = require('./locale.controller-mOVjhTJn.js');
var languageSync = require('./language-sync-CpTU62Ae.js');
var axios = require('./axios-EresIryl.js');
require('./types-BVJQZ50e.js');
require('./calendar-data-Br2L_0sg.js');
require('./utils-C5KQRlHq.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./calendar-dates-BxDGM1ix.js');
require('./commonSchemas-D4iFLV5-.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./types-sp5nWPAa.js');

const irMenuCss = () => `:host{display:block}`;

const IrMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: 'eff3541a5875976c6c76f9e33e0d1c88cab7b6f1' }, index.h("slot", { key: '20aed45200fa28446accf1708271145a39eb2951', onSlotchange: this.handleSlotChange })));
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
        index.registerInstance(this, hostRef);
        this.menuOpenChanged = index.createEvent(this, "menuOpenChanged");
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
        return (index.h("ir-drawer", { key: '0df4800d0574ac536c724e85c65a1e36d00fa7df', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, index.h("slot", { key: '0a996995c9a9d070a7a0817b10a5cfde9e12090e', name: "label", slot: "label" }), index.h("slot", { key: '3dae3c11176a26aa10af1be0f7294474f1691814' }), index.h("slot", { key: '23610440bd9872978abd22db74132f74393998ed', name: "footer", slot: "footer" })));
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
        index.registerInstance(this, hostRef);
        this.openChanged = index.createEvent(this, "openChanged");
    }
    get el() { return index.getElement(this); }
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
        return (index.h("wa-details", { key: '3c636931645ac31f60eb4f3cce4518a883b4b6ab', dir: direction.getLocalDirection(this.el), class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, index.h("slot", { key: '2800e73571be69f857a05aff6cf0eb94b58c5c2e', slot: "summary", name: "summary" }), index.h("slot", { key: 'ac4969f0158d8fb2aff77bb53eaacde52b2421b4' })));
    }
};
IrMenuGroup.style = irMenuGroupCss();

const irMenuItemCss = () => `:host{display:block;width:100%}.menu-item__link{all:unset;display:flex;align-items:center;box-sizing:border-box;width:100%;color:var(--wa-color-text-quiet);padding:0.5rem;cursor:pointer;transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.menu-item__label{flex:1 1 0%;text-align:start}.menu-item__link:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.menu-item__link:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.menu-item__link:focus{outline:none}.menu-item__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.menu-item__link--selected{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb));font-weight:600}.menu-item__link--selected:hover{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb))}.menu-item__link--clickable{padding-inline-start:1rem;padding-inline-end:1rem}`;

const IrMenuItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        const content = (index.h(index.Fragment, { key: '3853ded9c4117ae968065fde8cf0f61f7b9a3b0d' }, index.h("span", { key: '85520740ec0c966b464f48bdcada50baa266822c', class: "menu-item__icon" }, index.h("slot", { key: 'd67393ebd58f4b524dcf10cc34a34805dd31e467', name: "icon" })), index.h("span", { key: '2f3e40ea515241785a281be0391db77fb5bbf512', class: "menu-item__label" }, index.h("slot", { key: '1849db1f3e87d6dc1d6bd43df5c431aea8abe94e' })), this.badge ? (index.h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (index.h(index.Host, { key: '0af6f88c090b851c398226750423e93313de827c' }, this.href ? (index.h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (index.h("div", { class: contentClass }, content))));
    }
};
IrMenuItem.style = irMenuItemCss();

const irNotificationsCss = () => `.sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.notification__bell-icon.sc-ir-notifications{display:inline-flex;transform-origin:top center}.header-notification-badge.sc-ir-notifications{position:absolute;top:-5px;inset-inline-end:-5px;z-index:1}.notification__popover.sc-ir-notifications::part(body),.notification__popover.sc-ir-notifications [part~="body"]{padding:0;padding-bottom:1rem;max-height:300px;overflow-y:auto}.notification-item.sc-ir-notifications{display:flex;align-items:center;min-width:250px;padding:0.5rem 1rem;transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);color:var(--wa-color-text-normal)}.notification-item.sc-ir-notifications:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.notification-item.sc-ir-notifications:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.notification-item.sc-ir-notifications:focus{outline:none}.notification-item.sc-ir-notifications:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.notification-item__content.sc-ir-notifications{display:flex;flex:1 1 0%;align-items:center;gap:0.5rem}.notification-item.sc-ir-notifications{border-bottom:1px solid var(--wa-color-surface-border)}.notification-item.sc-ir-notifications:last-child{border-bottom:0}.notification__popover-title.sc-ir-notifications,.notification-item__title.sc-ir-notifications,.notification-item__time.sc-ir-notifications{margin:0;padding:0}.notification-item__title.sc-ir-notifications,.notification__popover-title.sc-ir-notifications{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.notification-item__title.sc-ir-notifications{font-weight:400}.notification__popover-title.sc-ir-notifications{font-size:var(--wa-font-size-m);padding:1rem;position:sticky;top:0;background-color:var(--wa-color-surface-default)}.notification-item__title.sc-ir-notifications,.notification-item__time.sc-ir-notifications{font-size:var(--wa-font-size-s)}.notification-item__time.sc-ir-notifications{color:var(--wa-color-text-quiet)}.notification-item__unread-indicator.sc-ir-notifications{display:block;height:0.5rem;width:0.5rem;border-radius:0.25rem;background-color:var(--wa-color-brand-fill-loud)}.ir-flip-rtl.sc-ir-notifications:dir(rtl){scale:-1 1}`;

const IrNotifications = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.notificationCleared = index.createEvent(this, "notificationCleared");
    }
    get el() { return index.getElement(this); }
    ticket;
    propertyid;
    // Make notifications reactive;
    notifications = [];
    notificationCleared;
    apiClientService = new ApiClient.ApiClient();
    propertyService = new index$1.PropertyService();
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
        return (index.h(index.Host, { key: 'd53fe4a89b589299b78bed157ac9656693814caf' }, index.h("div", { key: '5c8e83fa862cbca6e800f713e749a5eb3dbaf813', style: { position: 'relative' } }, index.h("wa-tooltip", { key: 'c3958c5f33c7b587dd0e42abb05af6e8fa90d9c8', for: "notifications-button" }, t.t('Lcz_Notifications', { fallback: 'Notifications' })), this.notifications?.length > 0 && (index.h("wa-badge", { key: '7dc9666642a17202bcb215890a3982c529dbe1ce', pill: true, class: "header-notification-badge" }, number.formatCount(this.notifications.length))), index.h("wa-animation", { key: 'a973da5289b148deab53733cc5e820f1fe87e783', duration: 1200, iterations: 1, keyframes: this.bellKeyframes, ref: el => (this.animationRef = el) }, index.h("ir-custom-button", { key: '32caa68268baa774602a37c666b1ea0edb274886', id: "notifications-button", size: "s", appearance: "plain", ref: el => (this.buttonRef = el) }, index.h("wa-icon", { key: '486c87fbbf086de19c29caf60dfef92a66be58f3', class: "notification__bell-icon", name: "bell", style: { fontSize: '1.4rem' } })))), index.h("wa-popover", { key: '485ae1011fe98af95f89d1306f1627f53b61239b', distance: 15, class: "notification__popover", for: "notifications-button" }, index.h("p", { key: 'a210ff318cf92a311bba46511509ba73ab139b95', class: "notification__popover-title" }, t.t('Lcz_Notifications', { fallback: 'Notifications' })), this.notifications.map(notification => {
            if (notification.type === 'availability_alert') {
                return (index.h("a", { href: "AcAvailabilityAlert.aspx", class: "notification-item" }, index.h("div", { class: "notification-item__content" }, index.h("p", { class: "notification-item__title" }, notification.message, ' ', t.t('Lcz_RoomsNotBookableConsecutiveNights', { fallback: 'rooms types are not bookable for 14 consecutive nights within the next 2 months. More...' })), index.h("wa-icon", { class: "ir-flip-rtl", name: "angle-right" }))));
            }
        }), this.notifications?.length === 0 && (index.h("ir-empty-state", { key: 'a281bce124aa2a2a96b5f73e2cc86eb7ba2fea5f', message: t.t('Lcz_AllCaughtUp', { fallback: 'All caught up!' }), style: { width: '250px', height: '150px' } }, index.h("wa-icon", { key: '4f2363854af7321d344898103e56854941e14661', slot: "icon", name: "inbox" }))))));
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
        index.registerInstance(this, hostRef);
    }
    propertyid;
    ticket;
    baseUrl;
    notifications = [];
    apiClientService = new ApiClient.ApiClient();
    propertyService = new index$1.PropertyService();
    componentWillLoad() {
        if (this.baseUrl) {
            this.apiClientService.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.fetchNotifications();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue || !newValue) {
            return;
        }
        this.apiClientService.setApiClient(newValue);
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
            return index.h(index.Host, null);
        }
        return (index.h(index.Host, null, index.h("wa-callout", { class: "pms-payment-due-alert__callout", size: "s", appearance: "filled", variant: "danger" }, index.h("div", { class: "pms-payment-due-alert__callout-message" }, index.h("wa-icon", { style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' }, slot: "icon", name: "triangle-exclamation" }), index.h("span", null, combinedMessage)))));
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
        index.registerInstance(this, hostRef);
        this.comboboxSelect = index.createEvent(this, "combobox-select");
    }
    propertyid;
    ticket;
    language = 'en';
    shortcutHint = null;
    bookings = [];
    isLoading;
    apiClientService = new ApiClient.ApiClient();
    bookingListingService = new index$2.BookingListingService();
    search$ = new index$3.cjsExports.Subject();
    subscription;
    /** Results were fetched in the old language; drop them so the next search refetches in the new one. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.pmsSearch, () => {
        this.bookings = [];
        this.autoCompleteRef?.hide();
    });
    comboboxSelect;
    autoCompleteRef;
    componentWillLoad() {
        document.addEventListener('keydown', this.focusInput);
        this.detectShortcutHint();
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
        }
        locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.pmsSearch });
        this.subscription = this.search$
            .pipe(index$3.cjsExports.debounceTime(500), index$3.cjsExports.distinctUntilChanged(), index$3.cjsExports.filter(value => value.length >= 2), index$3.cjsExports.tap(() => {
            this.isLoading = true;
            this.autoCompleteRef?.hide();
        }), index$3.cjsExports.switchMap(value => {
            const isNumber = /^(?:-?\d+|.{3}-.*)$/.test(value);
            return index$3.cjsExports.from(this.bookingListingService.getExposedBookings({
                book_nbr: isNumber ? value : null,
                name: isNumber ? null : value,
                property_id: Number(this.propertyid),
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
                language: locale_controller.LocaleController.language,
            }, { skipStore: true })).pipe(index$3.cjsExports.catchError(() => index$3.cjsExports.of([])));
        }))
            .subscribe(bookings => {
            this.bookings = bookings.filter(Boolean);
            this.isLoading = false;
            this.autoCompleteRef?.show();
        });
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.focusInput);
        this.subscription?.unsubscribe();
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange(newValue, oldValue) {
        console.log(this.ticket);
        if (newValue !== oldValue && newValue) {
            this.apiClientService.setApiClient(this.ticket);
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
        // Booking numbers typed in Arabic-Indic digits must reach the API (and the isNumber check) as Latin.
        const value = irDate.toLatinDigits(event.detail ?? '');
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
        return (index.h(index.Host, { key: '9da992033cac26259287237e4a5e499e2b0ed154' }, index.h("ir-autocomplete", { key: 'aee01888bae704525176b3a9510ac5d1e6c3af07', class: "pms-search__autocomplete", placeholder: t.t('Lcz_BookingOrGuestNamePlaceholder', { fallback: 'Booking# or guest name' }), ref: el => (this.autoCompleteRef = el), "onCombobox-change": event => this.handleComboboxSelect(event), "onText-change": event => this.fetchBookings(event), pill: true, appearance: "filled" }, index.h("wa-icon", { key: '0351efff72d774abc4192aef2a101740c854ee1a', name: "magnifying-glass", slot: "start" }), index.h("div", { key: 'dca482df37ff257594257388ddc66b7322896fb5', slot: "end", class: "pms-autocomplete__end-slot" }, this.isLoading && index.h("wa-spinner", { key: 'b6a769e152706b2506bc817eca5422ecda440100' }), this.shortcutHint && index.h("span", { key: '06c4096cf1be06e14dbc045fceacdb6ddcd5fc38' }, this.shortcutHint)), (this.bookings ?? [])?.length === 0 && !this.isLoading && (index.h("div", { key: 'a45d7ce140c9f8bde7847505360d2deffff78a96', class: "pms-search__empty", role: "status", "aria-live": "polite" }, index.h("wa-icon", { key: 'e135f590377557987007331ca058f2198b5cbae7', name: "circle-info", "aria-hidden": "true" }), index.h("div", { key: 'b313a807eac2dc74010ef80acb95602a7d8f5680', class: "pms-search__empty-content" }, index.h("div", { key: '9e8e4548eee04acbcc898bb0fc93fa72a3d01c6a', class: "pms-search__empty-title" }, t.t('Lcz_NoResultsFound', { fallback: 'No results found' }))))), (this.bookings ?? [])?.map(b => {
            if (!b) {
                return null;
            }
            const label = `${b?.booking_nbr}  ${b?.guest?.first_name} ${b?.guest?.last_name}`;
            return (index.h("ir-autocomplete-option", { class: "pms-search__autocomplete-option", value: b.booking_nbr, label: label }, index.h("img", { slot: "start", class: "pms-search__option-icon", src: b.origin.Icon, alt: b.origin.Label }), index.h("div", { class: "pms-search__option" }, index.h("p", { class: "pms-search__option-bookings" }, index.h("span", { class: "pms-search__option-booking" }, number.formatBookingNumber(b.booking_nbr)), b.channel_booking_nbr && index.h("span", { class: "pms-search__option-channel-booking" }, number.formatBookingNumber(b.channel_booking_nbr))), index.h("span", { class: "pms-search__option-label" }, b.guest.first_name, " ", b.guest.last_name)), index.h("ir-booking-status-tag", { slot: "end", class: "pms-search__option-status", status: b.status })));
        }))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrPmsSearch.style = irPmsSearchCss();

const irPropertySwitcherCss = () => `.sc-ir-property-switcher-h{display:block}.property-switcher__trigger.sc-ir-property-switcher{width:200px;padding:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start}.property-switcher__dialog.sc-ir-property-switcher::part(dialog),.property-switcher__dialog.sc-ir-property-switcher [part~="dialog"]{margin:0;max-width:100%;height:100%;max-height:100%;border-radius:0}.property-switcher__dialog.sc-ir-property-switcher::part(body),.property-switcher__dialog.sc-ir-property-switcher [part~="body"]{padding:0}.property-switcher__trigger-btn.sc-ir-property-switcher{width:100%}.property-switcher__trigger-btn.sc-ir-property-switcher::part(start),.property-switcher__trigger-btn.sc-ir-property-switcher [part~="start"]{display:none}.property-switcher__trigger-btn.sc-ir-property-switcher::part(base),.property-switcher__trigger-btn.sc-ir-property-switcher [part~="base"]{justify-content:space-between;width:100%}.property-switcher__loader.sc-ir-property-switcher,.property-switcher__dropdown-loader.sc-ir-property-switcher{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;min-width:100px}.property-switcher__loader.sc-ir-property-switcher{min-height:150px}@media (min-width: 640px){.property-switcher__dialog.sc-ir-property-switcher::part(dialog){margin:auto;inset:0;max-width:100%;border-radius:var(--wa-panel-border-radius);height:fit-content}.property-switcher__dialog.sc-ir-property-switcher::part(header){display:none}}`;

const IrPropertySwitcher = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.propertyChange = index.createEvent(this, "propertyChange");
    }
    get el() { return index.getElement(this); }
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
    ApiClient = new ApiClient.ApiClient();
    /** Single unified event - emitted when dialog confirms selection OR dropdown selects linked property */
    propertyChange;
    storagePoller;
    userInfoPoller;
    lastSelectedAcRaw = null;
    lastUserInfoRaw = null;
    isUpdating = false; // Prevent circular updates
    async componentWillLoad() {
        if (this.baseUrl)
            this.ApiClient.setBaseUrl(this.baseUrl);
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
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
            this.ApiClient.setApiClient(newValue);
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
            const { data } = await axios.axios.post(`${this.baseUrl ?? ''}/Fetch_Linked_Properties`, {
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
            const { data } = await axios.axios.post(`${this.baseUrl ?? ''}/Get_Ac_By_AC_ID_Adv`, {
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
        return index.h("p", { class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME ?? t.t('Lcz_Property', { fallback: 'Property' }));
    }
    trigger() {
        return (index.h("wa-button", { size: "s", withCaret: true, class: "property-switcher__trigger-btn", variant: "neutral", appearance: "outlined", onClick: () => {
                this.open = !this.open;
                if (this.open) {
                    this.ensureLinkedPropertiesLoaded();
                }
            } }, index.h("p", { class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME ?? t.t('Lcz_SelectProperty', { fallback: 'Select property' }))));
    }
    render() {
        return (index.h(index.Host, { key: 'da78755d0f729f5d64225488103b847692364a26' }, this.displayMode === 'read-only' && this.renderReadOnly(), this.displayMode === 'dropdown' && (index.h("wa-dropdown", { key: '770f21c3c855f9bf5eedf7c9a5ac499a2e93ad6d', "onwa-show": () => {
                this.ensureLinkedPropertiesLoaded();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.handleDropdownSelect(Number(e.detail.item.value));
            } }, index.h("wa-button", { key: '8d2a7feb67682c4246a97b789534ae841f7e4a22', size: "s", class: "property-switcher__trigger-btn", slot: "trigger", withCaret: true, variant: "neutral", appearance: "outlined" }, index.h("p", { key: '51da0c0ae9d90f1b61e5b8ae5b36eb76f6e53360', class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME)), this.isLinkedLoading && (index.h("wa-dropdown-item", { key: '3ab9a83aa99b452e1ad1b52e0890e4c4767d73da', disabled: true, class: "property-switcher__dropdown-loader" }, index.h("wa-spinner", { key: '9d6cd457ff995cd58c500f007415e218335e955e' }))), this.propertyState.linked?.map(property => (index.h("wa-dropdown-item", { value: property.property_id?.toString(), key: `dropdown-item-${property.property_id}` }, property.name))))), this.displayMode === 'dialog' && (index.h("div", { key: 'bc409febe349a9165aa78d4ee35b2587f265f653' }, this.trigger(), index.h("ir-dialog", { key: '827d8edc1201fa44c63a2baad99b1797afba4d1f',
            // withoutHeader
            open: this.open, label: t.t('Lcz_Search', { fallback: 'Search' }), class: "property-switcher__dialog", style: { '--ir-dialog-width': '40rem' }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            } }, this.open &&
            (this.isLinkedLoading ? (index.h("div", { class: "property-switcher__loader" }, index.h("ir-spinner", null))) : (index.h("ir-property-switcher-dialog-content", { onLinkedPropertyChange: e => {
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

exports.ir_menu = IrMenu;
exports.ir_menu_drawer = IrMenuDrawer;
exports.ir_menu_group = IrMenuGroup;
exports.ir_menu_item = IrMenuItem;
exports.ir_notifications = IrNotifications;
exports.ir_pms_payment_due_alert = IrPmsPaymentDueAlert;
exports.ir_pms_search = IrPmsSearch;
exports.ir_property_switcher = IrPropertySwitcher;
