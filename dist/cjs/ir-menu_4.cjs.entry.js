'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

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
        return (index.h(index.Host, { key: '52f4f1c21c8289d0951bf4b22646c8a14eabdccc' }, index.h("slot", { key: '59b9e77a754f2404e7eac67d97b90d8ceaee3b2d', onSlotchange: this.handleSlotChange })));
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
        return (index.h("ir-drawer", { key: '503db00746a9856f2aafa97081e92346d8e3fa06', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, index.h("slot", { key: '903ec93c98dce3847276038c5d8c303c05bda44c', name: "label", slot: "label" }), index.h("slot", { key: '651728e4ec5d149cc4367d6d447b985191d28dd5' }), index.h("slot", { key: '50fc130edb4d82ef6068d16c7b2199fec9d612e1', name: "footer", slot: "footer" })));
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
        return (index.h("wa-details", { key: 'd9818f34eb1afb0a289b3e13a0e3fbc76a339b9c', class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, index.h("slot", { key: '94f6d8a1469025921066b9e367505a911777f1ef', slot: "summary", name: "summary" }), index.h("slot", { key: '5214359ac9a69e65eea09e78f00416ee89e7e1a5' })));
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
        const content = (index.h(index.Fragment, { key: 'f8f44a40ad5661e0d617e1e942ce6a6a257a3c82' }, index.h("span", { key: '40c7ce27cc64c913dcb4cc6ea6a3ff86ae13bb20', class: "menu-item__icon" }, index.h("slot", { key: '3728d632b3a053fa019b94300eb6914e1055377c', name: "icon" })), index.h("span", { key: 'dd05f60bb8f34a760b6f4a70d321faf5afbd9cd9', class: "menu-item__label" }, index.h("slot", { key: 'd067eadb2dd39a601c8b3f511b5270712bb7e38f' })), this.badge ? (index.h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (index.h(index.Host, { key: '87d198d28ec9030dd83c261303e90088b64e202a' }, this.href ? (index.h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (index.h("div", { class: contentClass }, content))));
    }
};
IrMenuItem.style = IrMenuItemStyle0;

exports.ir_menu = IrMenu;
exports.ir_menu_drawer = IrMenuDrawer;
exports.ir_menu_group = IrMenuGroup;
exports.ir_menu_item = IrMenuItem;

//# sourceMappingURL=ir-menu_4.cjs.entry.js.map