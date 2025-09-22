'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irDrawerCss = ".app-drawer{position:fixed;top:0;left:0;width:100%;height:100%;visibility:hidden;z-index:1000}.app-drawer--open{visibility:visible}.app-drawer-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.app-drawer--open .app-drawer-overlay{opacity:1;pointer-events:auto}.app-drawer-content{position:fixed;top:0;height:100%;width:300px;background-color:white;box-shadow:0 0 10px rgba(0, 0, 0, 0.2);transform:translateX(-100%);transition:transform 0.3s ease-in-out;display:flex;flex-direction:column}.app-drawer--open .app-drawer-content{transform:translateX(0)}.app-drawer-content--right{right:0;transform:translateX(100%)}.app-drawer--open .app-drawer-content--right{transform:translateX(0)}.app-drawer-header{padding:16px;border-bottom:1px solid #ccc;position:sticky;top:0;background-color:white;z-index:1}.app-drawer-body{padding:16px;overflow-y:auto;flex-grow:1}.app-drawer-footer{padding:16px;border-top:1px solid #ccc;position:sticky;bottom:0;background-color:white;z-index:1}";
const IrDrawerStyle0 = irDrawerCss;

const IrDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.drawerChange = index.createEvent(this, "drawerChange", 7);
        this.drawerCloseRequested = index.createEvent(this, "drawerCloseRequested", 7);
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
        return (index.h("div", { key: '294eb10f14037544748b21351ca203b56fe3ebbc', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, index.h("div", { key: '0d87c8b74334daa303b3e9c24f056a67b0c215d6', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), index.h("div", { key: 'ee210cfd642f8e74367394f831e80f54fe65cc56', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, index.h("div", { key: '1fc9f985e6aefdb0ad1df3e8aabd6b45808938bb', class: "app-drawer-header" }, index.h("slot", { key: 'c8d09b31725aad1595c4d71efb1f22d4a5ec87f8', name: "header" }, index.h("h2", { key: 'd9bb76f20822d877fe14a43123896ad29fc39367', id: "drawer-title" }, this.drawerTitle))), index.h("div", { key: 'c5f262d34ed533f93f02c52451b028e6924ab871', class: "app-drawer-body" }, index.h("slot", { key: '702b116a8046120b8cace0b316f0dc6a9794a664' })), index.h("div", { key: 'cec4668b020f756f0cdcbee4f3c5c66ef6716e70', class: "app-drawer-footer" }, index.h("slot", { key: 'f0eef1a9f1010bdb56f3fed53a88e8015ff6607d', name: "footer" })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["openHandler"]
    }; }
};
IrDrawer.style = IrDrawerStyle0;

exports.ir_drawer = IrDrawer;

//# sourceMappingURL=ir-drawer.cjs.entry.js.map