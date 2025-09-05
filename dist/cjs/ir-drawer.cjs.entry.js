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
        return (index.h("div", { key: '72d32f70a04dac07cb0438ad610872aa65a15cec', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, index.h("div", { key: 'ef01795f5bbcbcc40b1fafbe08d08c4ae1e0c261', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), index.h("div", { key: '6a494d09cf1e56f3006d0326731580a8596ba163', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, index.h("div", { key: '64a25676bcb28ced6a0ce10069544f7a7ca08c72', class: "app-drawer-header" }, index.h("slot", { key: '39b43d0d29466acb7b8ca7b5c3039c5e43b42109', name: "header" }, index.h("h2", { key: '67181f363a692c6da405a8df90289aa558e3294f', id: "drawer-title" }, this.drawerTitle))), index.h("div", { key: '58f0607f7d5d3e3c097227e2e3a3cf8689690da1', class: "app-drawer-body" }, index.h("slot", { key: 'ae026adfb8234529c4556c654dc7fdf1741d6f02' })), index.h("div", { key: '56ad70eef93a11dd527039ad1a7ceb54cc160c24', class: "app-drawer-footer" }, index.h("slot", { key: '2e60d4b058cd1c6426000c3f0784a880ead390a5', name: "footer" })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["openHandler"]
    }; }
};
IrDrawer.style = IrDrawerStyle0;

exports.ir_drawer = IrDrawer;

//# sourceMappingURL=ir-drawer.cjs.entry.js.map