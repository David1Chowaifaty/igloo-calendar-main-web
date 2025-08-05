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
        return (h("div", { key: '82c6b2adc7f18536571b8dc5a25b87a5b41e7746', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: 'ade0d7fedd9c6ccecb9700574400e7eeb00dd6e8', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: '0e61b57635b3b4c6a32aa63cd35a085553b5b972', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: '9f5707782e555f2b6ba4a23518e5bae76fcee2a9', class: "app-drawer-header" }, h("slot", { key: 'e658031a7f266fd942e49a63da5b47429a4ea2a8', name: "header" }, h("h2", { key: '4eed3e137eec43e35e999c0888d1e569e3267fc8', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '31a04c297b2359ecc8b1d58d61beb51d25e5bd59', class: "app-drawer-body" }, h("slot", { key: '5fdf48004a1893a8480faa62b630cfb13ad9eb53' })), h("div", { key: '9a778765385b3b9ecb8892b50dbf113cd12d3034', class: "app-drawer-footer" }, h("slot", { key: '4d3c2fd5e51d8f9a408a51f8066f3a1c2bfe4d94', name: "footer" })))));
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