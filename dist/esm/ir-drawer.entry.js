import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c553b3dc.js';

const irDrawerCss = ".app-drawer{position:fixed;top:0;left:0;width:100%;height:100%;visibility:hidden;z-index:1000}.app-drawer--open{visibility:visible}.app-drawer-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.app-drawer--open .app-drawer-overlay{opacity:1;pointer-events:auto}.app-drawer-content{position:fixed;top:0;height:100%;width:300px;background-color:white;box-shadow:0 0 10px rgba(0, 0, 0, 0.2);transform:translateX(-100%);transition:transform 0.3s ease-in-out;display:flex;flex-direction:column}.app-drawer--open .app-drawer-content{transform:translateX(0)}.app-drawer-content--right{right:0;transform:translateX(100%)}.app-drawer--open .app-drawer-content--right{transform:translateX(0)}.app-drawer-header{padding:16px;border-bottom:1px solid #ccc;position:sticky;top:0;background-color:white;z-index:1}.app-drawer-body{padding:16px;overflow-y:auto;flex-grow:1}.app-drawer-footer{padding:16px;border-top:1px solid #ccc;position:sticky;bottom:0;background-color:white;z-index:1}";
const IrDrawerStyle0 = irDrawerCss;

const IrDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.drawerChange = createEvent(this, "drawerChange", 7);
        this.drawerCloseRequested = createEvent(this, "drawerCloseRequested", 7);
        this.toggleDrawer = () => {
            this.open = !this.open;
            this.showDrawer = this.open;
            this.drawerChange.emit(this.open);
        };
        this.showDrawer = false;
        this.drawerTitle = undefined;
        this.placement = 'right';
        this.open = false;
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
        return (h("div", { key: 'd41910efa025a46995aff547608ee4cf1621afcc', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: '8f4b3164e1d8de6cec8d539eb8523191a86a2c6f', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: '96e7b416be847f0d512e1ebf638c3e3df60bd1fb', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: '7980b71bf9a5bd4a9cd366f1eb40ccbdab1e038e', class: "app-drawer-header" }, h("slot", { key: '56c3332162be4b51d17b51de27ab7f6d27a125b9', name: "header" }, h("h2", { key: '1cf523154a81309dd4fd83e3e6d6c7b8f952120d', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '80e904cf49dc41774aa404e56b99239a3f8515b7', class: "app-drawer-body" }, h("slot", { key: 'b7136b6519e1a0a54c2629ba94ffcdd165ec4e72' })), h("div", { key: '77e4ee1f9ddd2ae35aebab0c009859d9e89329cd', class: "app-drawer-footer" }, h("slot", { key: '936cfb41a42f9d75d367cf2b7b7966d5e9e2bdf6', name: "footer" })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["openHandler"]
    }; }
};
IrDrawer.style = IrDrawerStyle0;

export { IrDrawer as ir_drawer };

//# sourceMappingURL=ir-drawer.entry.js.map