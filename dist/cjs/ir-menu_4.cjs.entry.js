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
        return (index.h(index.Host, { key: 'ee51bbf1e21f2522b481a5e9d93017fd691c9151' }, index.h("slot", { key: '10a7ec3f5c4a75f897e0e17eb6b28caf7d43cb2a', onSlotchange: this.handleSlotChange })));
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
        return (index.h("ir-drawer", { key: 'c78be5d0e6f29bf97e08c185be4e3f83d4ebb3bd', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, index.h("slot", { key: 'c03027dd6af65339b6b8df8b3dfb51ba3c01978b', name: "label", slot: "label" }), index.h("slot", { key: '7a8079e65e6f04e104ac2c8321e3b945486d91bd' }), index.h("slot", { key: '25f9b0f18003698e3355ae239ff1e065a42413fa', name: "footer", slot: "footer" })));
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
        return (index.h("wa-details", { key: '763edafe2a42f9b4a43c444dddcfbe64394a2b46', class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, index.h("slot", { key: '7ec9f45539bcd90976220f5be4b4b05a088ae5d0', slot: "summary", name: "summary" }), index.h("slot", { key: '2a4f78ef75fc25185d4d81e297fb5c36eb83b092' })));
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
        const content = (index.h(index.Fragment, { key: '7b2c69abc68e3a39612efe25162a14016d180aef' }, index.h("span", { key: 'd869253c52376793fc7de0e09d39c59a94d17dd5', class: "menu-item__icon" }, index.h("slot", { key: '0bc057385eca5207fd01ab3091c067e71810a24a', name: "icon" })), index.h("span", { key: '8f9c6f16ed288204a960adffc60c3e2c812eab1a', class: "menu-item__label" }, index.h("slot", { key: '5596b47d7c319a66c796aaa4b7834a70557d62eb' })), this.badge ? (index.h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (index.h(index.Host, { key: 'd89375851b51138897e736ba51f7e117bcf24da4' }, this.href ? (index.h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (index.h("div", { class: contentClass }, content))));
    }
};
IrMenuItem.style = IrMenuItemStyle0;

exports.ir_menu = IrMenu;
exports.ir_menu_drawer = IrMenuDrawer;
exports.ir_menu_group = IrMenuGroup;
exports.ir_menu_item = IrMenuItem;

//# sourceMappingURL=ir-menu_4.cjs.entry.js.map