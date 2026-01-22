import { r as registerInstance, g as getElement, h, H as Host, c as createEvent, F as Fragment } from './index-7e96440e.js';
import { P as PropertyService } from './property.service-13417168.js';
import { T as Token } from './Token-030c78a9.js';
import { D as Debounce } from './debounce-542065c2.js';
import { B as BookingListingService } from './booking_listing.service-95312cda.js';
import { a as axios } from './axios-aa1335b8.js';
import './utils-d0dadf41.js';
import './moment-ab846cee.js';
import './calendar-data-2ae53dc9.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';

const irMenuCss = ":host{display:block}";
const IrMenuStyle0 = irMenuCss;

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
        return (h(Host, { key: 'b5a2f92de72a8d87747de1d29c0a8096fec48940' }, h("slot", { key: 'c9bd9fe07e72cd71f72352216fcbb8bb103e896d', onSlotchange: this.handleSlotChange })));
    }
    static get watchers() { return {
        "selectedHref": ["handleSelectedHrefChange"]
    }; }
};
IrMenu.style = IrMenuStyle0;

const irMenuDrawerCss = ":host{display:block}.menu__drawer::part(header){border-bottom:0}.menu__drawer::part(body){padding:calc(var(--spacing) - 0.5rem)}";
const IrMenuDrawerStyle0 = irMenuDrawerCss;

const IrMenuDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuOpenChanged = createEvent(this, "menuOpenChanged", 7);
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
        return (h("ir-drawer", { key: 'e9b50beb61bc86b8681e71bf1cdf0b18af23525f', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, h("slot", { key: '0129ccfb7eff9f5813f1911cf560f42143f8888f', name: "label", slot: "label" }), h("slot", { key: 'c6b278d79f54e940e15bf033b153db4159b09c33' }), h("slot", { key: '8f4f8578301fdd85914050a9ea1e5dae4266b8ac', name: "footer", slot: "footer" })));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
IrMenuDrawer.style = IrMenuDrawerStyle0;

const irMenuGroupCss = ":host{display:block}.menu-group__details::part(summary){width:100%}.menu-group__details::part(header){transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.menu-group__details::part(header),.menu-group__details::part(content){padding:0;border-radius:0;padding:0 0.5rem}.menu-group__details::part(header):hover{color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet)}.menu-group__details::part(header):active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.menu-group__details::part(content){display:flex;flex-direction:column;border-inline-start:1px solid var(--wa-color-surface-border);margin-inline-start:1.5rem}";
const IrMenuGroupStyle0 = irMenuGroupCss;

const IrMenuGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openChanged = createEvent(this, "openChanged", 7);
    }
    open;
    groupName;
    openChanged;
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
        return (h("wa-details", { key: 'ad0468cafd8b70a80f91792670d4113afb90ab82', class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, h("slot", { key: '5816efd64865c1441ae2665e8d833bd023e1a3ef', slot: "summary", name: "summary" }), h("slot", { key: 'd3214d70ebb6c594733964d3b2b51a656800071d' })));
    }
};
IrMenuGroup.style = IrMenuGroupStyle0;

const irMenuItemCss = ":host{display:block;width:100%}.menu-item__link{all:unset;display:flex;align-items:center;box-sizing:border-box;width:100%;color:var(--wa-color-text-quiet);padding:0.5rem;cursor:pointer;transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.menu-item__label{flex:1 1 0%}.menu-item__link:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.menu-item__link:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.menu-item__link:focus{outline:none}.menu-item__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.menu-item__link--selected{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb));font-weight:600}.menu-item__link--selected:hover{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb))}.menu-item__link--clickable{padding-left:1rem;padding-right:1rem}";
const IrMenuItemStyle0 = irMenuItemCss;

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
        const content = (h(Fragment, { key: 'fefa8a8832a9cac20772abdcad1c36e450ea196b' }, h("span", { key: '12a0926c324d227e002a7747e698290f6c76e448', class: "menu-item__icon" }, h("slot", { key: 'f18e98842b78b5b94d9198b80bd095d9023a2047', name: "icon" })), h("span", { key: 'b49ce14248cb81b33283ddb043db7c36ba45288e', class: "menu-item__label" }, h("slot", { key: '731cd2c758c0738515d0d7a8c627865a4a5af145' })), this.badge ? (h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (h(Host, { key: 'a7c6f03768a8d8f06e70da3b0f1aee0ba6061a3d' }, this.href ? (h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (h("div", { class: contentClass }, content))));
    }
};
IrMenuItem.style = IrMenuItemStyle0;

const irPmsPaymentDueAlertCss = ".sc-ir-pms-payment-due-alert-h{display:block}.pms-payment-due-alert__callout-message.sc-ir-pms-payment-due-alert{width:100%;display:flex;text-align:center;flex-wrap:wrap;justify-content:center;align-items:center;gap:1rem}";
const IrPmsPaymentDueAlertStyle0 = irPmsPaymentDueAlertCss;

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
        return (h(Host, null, h("wa-callout", { class: "pms-payment-due-alert__callout", size: "small", appearance: "filled", variant: "danger" }, h("div", { class: "pms-payment-due-alert__callout-message" }, h("wa-icon", { style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' }, slot: "icon", name: "triangle-exclamation" }), h("span", null, combinedMessage)))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrPmsPaymentDueAlert.style = IrPmsPaymentDueAlertStyle0;

const irPmsSearchCss = ":host{display:block}.pms-autocomplete__end-slot{display:flex;align-items:center;gap:0.5rem}.pms-search__autocomplete::part(listbox){max-height:250px;width:max-content;max-width:350px}.pms-search__option{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.pms-search__option-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pms-search__option-status{flex-shrink:0}.pms-search__empty{display:flex;align-items:center;flex-direction:column;gap:0.75rem;padding:0.75rem 0.9rem;border-radius:0.75rem}.pms-search__empty-icon{font-size:1.1rem;opacity:0.7;margin-top:0.15rem}.pms-search__empty-content{display:flex;flex-direction:column;align-items:center;gap:0.15rem;min-width:0}.pms-search__empty-title{font-weight:600;line-height:1.2}.pms-search__empty-subtitle{font-size:0.875rem;opacity:0.8;line-height:1.25}.pms-search__empty-example{font-weight:600;opacity:0.95}.pms-search__option{display:grid;grid-template-columns:120px   \n    1fr           ;align-items:center;gap:1rem}.pms-search__option-icon{width:1.5625rem;flex-shrink:0}.pms-search__option-bookings{margin:0;padding:0;display:flex;flex-direction:column;line-height:1.2}.pms-search__option-booking{font-size:0.875rem;font-weight:500}.pms-search__option-channel-booking{font-size:0.75rem}.pms-search__option-label{font-size:0.875rem;font-weight:500;white-space:nowrap}.pms-search__option-status{margin-left:auto}.pms-search__option-icon{width:1rem}.pms-search__option-status,.pms-search__autocomplete-option::part(checked-icon){display:none}.pms-search__option-label,.pms-search__option-booking{font-size:1rem}@media (width >= 40rem){.pms-search__option-icon{width:1.5625rem;flex-shrink:0}}@media (min-width: 768px){.pms-search__autocomplete::part(listbox){width:auto;max-width:var(--auto-size-available-width)}.pms-search__option-status{display:inline-flex}}";
const IrPmsSearchStyle0 = irPmsSearchCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrPmsSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comboboxSelect = createEvent(this, "combobox-select", 7);
    }
    propertyid;
    ticket;
    shortcutHint = null;
    bookings = [];
    isLoading;
    tokenService = new Token();
    bookingListingService = new BookingListingService();
    comboboxSelect;
    autoCompleteRef;
    componentWillLoad() {
        document.addEventListener('keydown', this.focusInput);
        this.detectShortcutHint();
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.focusInput);
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
    async fetchBookings(event) {
        // throw new Error('Method not implemented.');
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        this.autoCompleteRef.hide();
        if (!value) {
            return;
        }
        const isNumber = /^(?:-?\d+|.{3}-.*)$/.test(value);
        this.isLoading = true;
        this.bookings = await this.bookingListingService.getExposedBookings({
            book_nbr: isNumber ? value : null,
            name: isNumber ? null : value,
            property_id: this.propertyid,
            filter_type: 1,
            from: '2026-01-01',
            to: '2026-01-08',
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
        }, { skipStore: true });
        this.autoCompleteRef.show();
        this.isLoading = false;
    }
    handleComboboxSelect(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.comboboxSelect.emit({
            item: {
                label: "",
                value: event.detail
            }
        });
    }
    render() {
        return (h(Host, { key: '6596213e70b096d32e6948089fd7aca361a3aee3' }, h("ir-autocomplete", { key: '5d1163079ab2438df706dd354b5c3f49bd0f7282', class: "pms-search__autocomplete", placeholder: 'Search', ref: el => this.autoCompleteRef = el, "onCombobox-change": event => this.handleComboboxSelect(event), "onText-change": event => this.fetchBookings(event), pill: true, appearance: 'filled' }, h("wa-icon", { key: 'ac0de9a316fe6ddaf42d428d1ec15ae713003288', name: 'magnifying-glass', slot: 'start' }), h("div", { key: '9a36717f64f94ad0e7deca9785d547d046d1b8a3', slot: 'end', class: "pms-autocomplete__end-slot" }, this.isLoading && h("wa-spinner", { key: 'a45bd8ca5f2ebb7624f1ea761ab61787957090ac' }), this.shortcutHint && h("span", { key: '5b94dc6431ae6769aeee812e7b1e995af2d9430d' }, this.shortcutHint)), this.bookings?.length === 0 && !this.isLoading && (h("div", { key: '9f1134ec9dad0fdc4b4fd6b9d77a47b90f761e94', class: "pms-search__empty", role: "status", "aria-live": "polite" }, h("wa-icon", { key: '3badcfcb9f41150cab42b2c3188d1134ff5d0687', name: "circle-info", "aria-hidden": "true" }), h("div", { key: 'ea694ddd19353417456df93a777da82132fd49e7', class: "pms-search__empty-content" }, h("div", { key: '308c9f9bfe2aefde6a72ef5443c6806a91f4d241', class: "pms-search__empty-title" }, "No results found")))), this.bookings.map(b => {
            const label = `${b.booking_nbr}  ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-autocomplete-option", { class: 'pms-search__autocomplete-option', value: b.booking_nbr, label: label }, h("img", { slot: 'start', class: "pms-search__option-icon", src: b.origin.Icon, alt: b.origin.Label }), h("div", { class: "pms-search__option" }, h("p", { class: "pms-search__option-bookings" }, h("span", { class: "pms-search__option-booking" }, b.booking_nbr), b.channel_booking_nbr && (h("span", { class: "pms-search__option-channel-booking" }, b.channel_booking_nbr))), h("span", { class: "pms-search__option-label" }, b.guest.first_name, " ", b.guest.last_name)), h("ir-booking-status-tag", { slot: 'end', class: "pms-search__option-status", status: b.status })));
        }))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
__decorate([
    Debounce(300)
], IrPmsSearch.prototype, "fetchBookings", null);
IrPmsSearch.style = IrPmsSearchStyle0;

const irPropertySwitcherCss = ".sc-ir-property-switcher-h{display:block}.property-switcher__trigger.sc-ir-property-switcher{width:200px;padding:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start}.property-switcher__dialog.sc-ir-property-switcher::part(dialog){margin:0;max-width:100%;height:100%;max-height:100%;border-radius:0}.property-switcher__dialog.sc-ir-property-switcher::part(body){padding:0}.property-switcher__trigger-btn.sc-ir-property-switcher{width:100%}.property-switcher__trigger-btn.sc-ir-property-switcher::part(start){display:none}.property-switcher__trigger-btn.sc-ir-property-switcher::part(base){justify-content:space-between;width:100%}.property-switcher__loader.sc-ir-property-switcher,.property-switcher__dropdown-loader.sc-ir-property-switcher{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;min-width:100px}.property-switcher__loader.sc-ir-property-switcher{min-height:150px}@media (min-width: 640px){.property-switcher__dialog.sc-ir-property-switcher::part(dialog){margin:auto;inset:0;max-width:100%;border-radius:var(--wa-panel-border-radius);height:fit-content}.property-switcher__dialog.sc-ir-property-switcher::part(header){display:none}}";
const IrPropertySwitcherStyle0 = irPropertySwitcherCss;

const IrPropertySwitcher = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.propertyChange = createEvent(this, "propertyChange", 7);
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
        return (h("wa-button", { size: "small", withCaret: true, class: "property-switcher__trigger-btn", variant: "neutral", appearance: "outlined", onClick: () => {
                this.open = !this.open;
                if (this.open) {
                    this.ensureLinkedPropertiesLoaded();
                }
            } }, h("p", { class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME ?? 'Select property')));
    }
    render() {
        return (h(Host, { key: '7619f55053c6373ec0fed6e83787db9943fa5039' }, this.displayMode === 'read-only' && this.renderReadOnly(), this.displayMode === 'dropdown' && (h("wa-dropdown", { key: '2c3faed09bd5cd1d83c49c220630234badcc1346', "onwa-show": () => {
                this.ensureLinkedPropertiesLoaded();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.handleDropdownSelect(Number(e.detail.item.value));
            } }, h("wa-button", { key: 'df9c71c64f24331a3097665594c36fece466ffe5', size: "small", class: "property-switcher__trigger-btn", slot: "trigger", withCaret: true, variant: "neutral", appearance: "outlined" }, h("p", { key: 'e7c2c4c27317069c22cc93b7ee635e4890ee72d8', class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME)), this.isLinkedLoading && (h("wa-dropdown-item", { key: '8a371ad7195bf244e7319b9026acdf58aaa40c13', disabled: true, class: "property-switcher__dropdown-loader" }, h("wa-spinner", { key: 'c857b4250387419e195d68071a898e37f82528d2' }))), this.propertyState.linked?.map(property => (h("wa-dropdown-item", { value: property.property_id?.toString(), key: `dropdown-item-${property.property_id}` }, property.name))))), this.displayMode === 'dialog' && (h("div", { key: '78c5515cce7e372f335a5717563521af0ce4f310' }, this.trigger(), h("ir-dialog", { key: '87766bd1f3a51d40e69d6ee71e3fc1d4330fc86e',
            // withoutHeader
            open: this.open, label: "Find property", class: "property-switcher__dialog", style: { '--ir-dialog-width': '40rem' }, onIrDialogAfterHide: e => {
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
        "ticket": ["handleTicketChange"],
        "propertyId": ["handlePropertyIdChange"],
        "selectedLinkedPropertyId": ["handleLinkedPropertyIdChange"]
    }; }
};
IrPropertySwitcher.style = IrPropertySwitcherStyle0;

export { IrMenu as ir_menu, IrMenuDrawer as ir_menu_drawer, IrMenuGroup as ir_menu_group, IrMenuItem as ir_menu_item, IrPmsPaymentDueAlert as ir_pms_payment_due_alert, IrPmsSearch as ir_pms_search, IrPropertySwitcher as ir_property_switcher };

//# sourceMappingURL=ir-menu_7.entry.js.map