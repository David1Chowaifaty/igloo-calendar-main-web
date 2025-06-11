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
        return (h("div", { key: '7bffd4ced0d0a0e028441ea7ff811eed9b234838', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: '66b2d2b9329d0ad10daecf5ff6f404f8a6cef509', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: '8136374e36e10d41c79d2b8e034478fd95782e3a', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: 'dc355c626ccafcc073b074e56fd14b1519143566', class: "app-drawer-header" }, h("slot", { key: 'e8a593e768bcbd2f9ba8843db756553d246ec82c', name: "header" }, h("h2", { key: '9f81136f0188c8f50a3db6378f3c4579058091b0', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '85786cf9b3cd40d17bc70f8d9bededb27d59e504', class: "app-drawer-body" }, h("slot", { key: '06e5b2e6e41e143f4a100e377d2f18324506c3fe' })), h("div", { key: 'fa5cf28b302b379bd0f8fb668b99d03364007b81', class: "app-drawer-footer" }, h("slot", { key: '13ec4551e0424b91cdba9a5f954ef33e5fd03c29', name: "footer" })))));
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