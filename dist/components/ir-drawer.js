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
        return (h("div", { key: '2f92900b92043cd621e0a64c5d4f3b792c0a6a04', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: '1ff83a3a0460e9adba06ba65c4a38186111f0553', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: '229e4a66958f461574a1138420cdf4b68a403b55', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: '80ccc881bd46e5b7f1b7360b5c39854de34b1ddf', class: "app-drawer-header" }, h("slot", { key: '1d062482be49067eb349cabcb57953a7f2d1302f', name: "header" }, h("h2", { key: '7dc5cf68ba085f278cfc78735893f16096dbd209', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '25a2ce3d4fa6e5180a64d93a760750a7ac321800', class: "app-drawer-body" }, h("slot", { key: 'f7e777ef81ab3c835b84bef37968e0bbd84835fd' })), h("div", { key: '0380ab5a53606ca57524be1af99bc38537b86e24', class: "app-drawer-footer" }, h("slot", { key: '68647d619cf28ad6f623ab295bf9b6449238f4c6', name: "footer" })))));
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