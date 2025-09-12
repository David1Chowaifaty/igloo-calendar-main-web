import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const irDrawerCss = ".app-drawer{position:fixed;top:0;left:0;width:100%;height:100%;visibility:hidden;z-index:1000}.app-drawer--open{visibility:visible}.app-drawer-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.app-drawer--open .app-drawer-overlay{opacity:1;pointer-events:auto}.app-drawer-content{position:fixed;top:0;height:100%;width:300px;background-color:white;box-shadow:0 0 10px rgba(0, 0, 0, 0.2);transform:translateX(-100%);transition:transform 0.3s ease-in-out;display:flex;flex-direction:column}.app-drawer--open .app-drawer-content{transform:translateX(0)}.app-drawer-content--right{right:0;transform:translateX(100%)}.app-drawer--open .app-drawer-content--right{transform:translateX(0)}.app-drawer-header{padding:16px;border-bottom:1px solid #ccc;position:sticky;top:0;background-color:white;z-index:1}.app-drawer-body{padding:16px;overflow-y:auto;flex-grow:1}.app-drawer-footer{padding:16px;border-top:1px solid #ccc;position:sticky;bottom:0;background-color:white;z-index:1}";
const IrDrawerStyle0 = irDrawerCss;

const IrDrawer$1 = /*@__PURE__*/ proxyCustomElement(class IrDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.drawerChange = createEvent(this, "drawerChange", 7);
        this.drawerCloseRequested = createEvent(this, "drawerCloseRequested", 7);
        this.showDrawer = false;
        /**
         * The placement of the drawer
         */
        this.placement = 'right';
        /**
         * Is the drawer open?
         */
        this.open = false;
        this.toggleDrawer = () => {
            this.open = !this.open;
            this.showDrawer = this.open;
            this.drawerChange.emit(this.open);
        };
    }
    componentDidLoad() {
        if (this.open) {
            this.showDrawer = true;
        }
    }
    handleKeyDown(ev) {
        if (this.open) {
            if (ev.key === 'Escape' || ev.key === 'Esc') {
                this.closeDrawer();
                this.drawerCloseRequested.emit();
            }
        }
    }
    openHandler(newValue) {
        this.showDrawer = newValue;
    }
    async closeDrawer() {
        this.open = false;
        this.showDrawer = false;
        this.drawerChange.emit(this.open);
    }
    render() {
        return (h("div", { key: 'ba4fc7c3a1bc40076eb32816320d93976de51867', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: '3ad41302c5b7fd132a1a9f4126b744839dead248', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: '249dec56626551165ff29fe70c7b48b3053eba9f', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: '936c175292d4e06d2d3387f619567b81b449b470', class: "app-drawer-header" }, h("slot", { key: 'b9d665dc4de8a90e813e37fdcdbe9fd93016fba5', name: "header" }, h("h2", { key: '70b1997cee1009c3fb9192d7d5cb2120d6697a15', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '594ed0a14b1dada3895b0c490be0a4bc0d1a28f7', class: "app-drawer-body" }, h("slot", { key: '603b2545e6eb96e65fdae3cb3fbc4721149828a2' })), h("div", { key: '0937144ed02275bcce217076f332c676dea81091', class: "app-drawer-footer" }, h("slot", { key: '2b5e54462aeff5a45d6da1e8b16bb2a173e5d3ee', name: "footer" })))));
    }
    get el() { return this; }
    static get watchers() { return {
        "open": ["openHandler"]
    }; }
    static get style() { return IrDrawerStyle0; }
}, [1, "ir-drawer", {
        "drawerTitle": [1, "drawer-title"],
        "placement": [1],
        "open": [1540],
        "showDrawer": [32],
        "closeDrawer": [64]
    }, [[5, "keydown", "handleKeyDown"]], {
        "open": ["openHandler"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-drawer"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDrawer$1);
            }
            break;
    } });
}

const IrDrawer = IrDrawer$1;
const defineCustomElement = defineCustomElement$1;

export { IrDrawer, defineCustomElement };

//# sourceMappingURL=ir-drawer.js.map