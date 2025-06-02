'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');

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
        return (index.h("div", { key: '2841f01640cf9697db1e1ac4dc4e4396022d3334', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, index.h("div", { key: 'ec7015ecc53ed90aa61c7f94f08552b2171f4b68', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), index.h("div", { key: '5484ea9233aa258af9aaa81a42ebde234be08685', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, index.h("div", { key: 'a4948ce2e46fabcdf21764194b4685fe33c068bf', class: "app-drawer-header" }, index.h("slot", { key: '8c2ea89baf1275e7c1133249109188e346ccbde8', name: "header" }, index.h("h2", { key: 'e1359254009258e18536f13c5cc1c546a281096b', id: "drawer-title" }, this.drawerTitle))), index.h("div", { key: 'ccba46a331f940e8b50b51a93f66b0e2c11aace3', class: "app-drawer-body" }, index.h("slot", { key: '6844895ce3d976d7b6d8e23ef8ebb4ebf095e776' })), index.h("div", { key: '06071f8e9a3256210f9283438ff840960e2c8398', class: "app-drawer-footer" }, index.h("slot", { key: 'c84068f4a8e09d84c81dd9bd26d6db97e4e4e701', name: "footer" })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["openHandler"]
    }; }
};
IrDrawer.style = IrDrawerStyle0;

exports.ir_drawer = IrDrawer;

//# sourceMappingURL=ir-drawer.cjs.entry.js.map