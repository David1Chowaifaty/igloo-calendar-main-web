'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irMenuCss = ":host{display:block}";
const IrMenuStyle0 = irMenuCss;

const IrMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    menuGroups = [];
    menuItems = [];
    selectedHref;
    componentWillLoad() {
        if (!this.selectedHref) {
            this.selectedHref = this.getCurrentLocation();
        }
        else {
            this.selectedHref = this.normalizeHref(this.selectedHref);
        }
    }
    componentDidLoad() {
        this.handleSlotChange();
    }
    connectedCallback() {
        if (typeof window !== 'undefined') {
            window.addEventListener('popstate', this.handleLocationChange);
        }
    }
    disconnectedCallback() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('popstate', this.handleLocationChange);
        }
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
    handleLocationChange = () => {
        this.updateSelectedHref(this.getCurrentLocation());
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
        return this.normalizeHref(`${window.location.pathname}${window.location.search}${window.location.hash}`);
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
    render() {
        return (index.h(index.Host, { key: 'c5ea5e6aa922e7d203bc8aefaa4255b8fd26c22c' }, index.h("slot", { key: '918999d58fe9e6061163fe757df4ed7272d38d3c', onSlotchange: this.handleSlotChange })));
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
        index.registerInstance(this, hostRef);
    }
    open;
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
    render() {
        return (index.h("ir-drawer", { key: '213dbab98038dc0abed82666f01a1de5e6fc00db', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, index.h("slot", { key: 'fd657f1c8f96ad47d691cc2abc6efdd8ab6f853d', name: "label", slot: "label" }), index.h("slot", { key: 'b06fb0f6550454a967469bd14fe1cd567219f4a7' }), index.h("slot", { key: '7164d3fbe88945866f3e8f103887b25f3ec8ac45', name: "footer", slot: "footer" })));
    }
};
IrMenuDrawer.style = IrMenuDrawerStyle0;

const irMenuGroupCss = ":host{display:block}.menu-group__details::part(summary){width:100%}.menu-group__details::part(header){transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.menu-group__details::part(header),.menu-group__details::part(content){padding:0;border-radius:0;padding:0 0.5rem}.menu-group__details::part(header):hover{color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet)}.menu-group__details::part(header):active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.menu-group__details::part(content){display:flex;flex-direction:column;border-inline-start:1px solid var(--wa-color-surface-border);margin-inline-start:1.5rem}";
const IrMenuGroupStyle0 = irMenuGroupCss;

const IrMenuGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openChanged = index.createEvent(this, "openChanged", 7);
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
        return (index.h("wa-details", { key: '0e287585340b3a6c3712aa4ba35ccd4ecb587c05', class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, index.h("slot", { key: '69f3e662385030db50e6252219e48267d7489e16', slot: "summary", name: "summary" }), index.h("slot", { key: '7e76373e69b87d8d0ad8837bdcb959d7d4e868e3' })));
    }
};
IrMenuGroup.style = IrMenuGroupStyle0;

const irMenuItemCss = ":host{display:block;width:100%}.menu-item__link{all:unset;display:flex;align-items:center;box-sizing:border-box;width:100%;color:var(--wa-color-text-quiet);padding:0.5rem;cursor:pointer;transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.menu-item__label{flex:1 1 0%}.menu-item__link:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.menu-item__link:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.menu-item__link:focus{outline:none}.menu-item__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.menu-item__link--selected{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb));font-weight:600}.menu-item__link--selected:hover{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb))}.menu-item__link--clickable{padding-left:1rem;padding-right:1rem}";
const IrMenuItemStyle0 = irMenuItemCss;

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
        const content = (index.h(index.Fragment, { key: '659b00ea3eee29d53c2389b48a240ed604c49700' }, index.h("span", { key: '996f6a225dc58732dd8822712eefd3097a509fb6', class: "menu-item__icon" }, index.h("slot", { key: '70a57b9c572d7a026f01e599cd47abc08c7d15ce', name: "icon" })), index.h("span", { key: 'e4e3ed2220f79e36d8146172196d781fa96df7a0', class: "menu-item__label" }, index.h("slot", { key: 'ad3abc2c6c69f86d0c3f6ce90a245a26d18418bd' })), this.badge ? (index.h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (index.h(index.Host, { key: '0e04f34f73283a226cdf2b3fc5cb3ad53da78d20' }, this.href ? (index.h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (index.h("div", { class: contentClass }, content))));
    }
};
IrMenuItem.style = IrMenuItemStyle0;

exports.ir_menu = IrMenu;
exports.ir_menu_drawer = IrMenuDrawer;
exports.ir_menu_group = IrMenuGroup;
exports.ir_menu_item = IrMenuItem;

//# sourceMappingURL=ir-menu_4.cjs.entry.js.map