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
        return (h(Host, { key: '6028845f50d0d5f82f48ad2dbc8f713c7ce08ac5' }, h("slot", { key: '93762f9a15c477bfffc574c6b1693b747e8c28b4', onSlotchange: this.handleSlotChange })));
    }
    static get watchers() { return {
        "selectedHref": ["handleSelectedHrefChange"]
    }; }
    static get style() { return IrMenuStyle0; }
}, [1, "ir-menu", {
        "selectedHref": [1537, "selected-href"],
        "setSelectedHref": [64]
    }, [[2, "click", "handleItemClick"], [0, "openChanged", "handleGroupOpen"]], {
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