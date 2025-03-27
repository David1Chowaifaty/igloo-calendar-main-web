import { r as registerInstance, c as createEvent, h, a as getElement } from './index-jhiFt_tX.js';

const irDrawerCss = ".app-drawer{position:fixed;top:0;left:0;width:100%;height:100%;visibility:hidden;z-index:1000}.app-drawer--open{visibility:visible}.app-drawer-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.app-drawer--open .app-drawer-overlay{opacity:1;pointer-events:auto}.app-drawer-content{position:fixed;top:0;height:100%;width:300px;background-color:white;box-shadow:0 0 10px rgba(0, 0, 0, 0.2);transform:translateX(-100%);transition:transform 0.3s ease-in-out;display:flex;flex-direction:column}.app-drawer--open .app-drawer-content{transform:translateX(0)}.app-drawer-content--right{right:0;transform:translateX(100%)}.app-drawer--open .app-drawer-content--right{transform:translateX(0)}.app-drawer-header{padding:16px;border-bottom:1px solid #ccc;position:sticky;top:0;background-color:white;z-index:1}.app-drawer-body{padding:16px;overflow-y:auto;flex-grow:1}.app-drawer-footer{padding:16px;border-top:1px solid #ccc;position:sticky;bottom:0;background-color:white;z-index:1}";

const IrDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.drawerChange = createEvent(this, "drawerChange");
        this.drawerCloseRequested = createEvent(this, "drawerCloseRequested");
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
        return (h("div", { key: 'ba623ace972da234587b4a9d40df88d4f4242174', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: '6595eb0654c9d1cf9ebc370ff1cafa3658151389', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: 'f6ad26413c00bc87e1739fb271c1c0bf8a05820b', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: 'a4fb4b4d999bc1ee55ae74d1f233c275a61166d3', class: "app-drawer-header" }, h("slot", { key: 'd8333755a51100f58992ab432516415d122faf64', name: "header" }, h("h2", { key: '427cf3d45671d6c55dfb5dfe60006dafd86b7c0d', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '3ecf6bec1d13874bb613059f086f5a667be016f9', class: "app-drawer-body" }, h("slot", { key: '16c7abed24987587298a0b9361b2cf9ae0bb8703' })), h("div", { key: '7e2af3572c03e07907e8c46ad9c537c75464dfeb', class: "app-drawer-footer" }, h("slot", { key: '7bce35d2e594df542a678af53dbe9ddec87ab0eb', name: "footer" })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["openHandler"]
    }; }
};
IrDrawer.style = irDrawerCss;

export { IrDrawer as ir_drawer };
//# sourceMappingURL=ir-drawer.entry.js.map

//# sourceMappingURL=ir-drawer.entry.js.map