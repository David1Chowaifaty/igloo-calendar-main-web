import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irMenuCss = ":host{display:block}";
const IrMenuStyle0 = irMenuCss;

const IrMenu = /*@__PURE__*/ proxyCustomElement(class IrMenu extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
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
    static get style() { return IrMenuStyle0; }
}, [1, "ir-menu", {
        "selectedHref": [1537, "selected-href"],
        "setSelectedHref": [64]
    }, [[8, "popstate", "handleLocationChange"], [2, "click", "handleItemClick"], [0, "openChanged", "handleGroupOpen"], [16, "menuOpenChanged", "handleOpenChange"]], {
        "selectedHref": ["handleSelectedHrefChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMenu);
            }
            break;
    } });
}

export { IrMenu as I, defineCustomElement as d };

//# sourceMappingURL=ir-menu2.js.map