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
        return (index.h("div", { key: '2ca0286d850c428cc7b390bf5f7aa9ce3e64d375', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, index.h("div", { key: '50b73d4b21c79d5b3f2e63bf3186c69f3219f704', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), index.h("div", { key: '65d5948ca63e1d84fa10a611c4b978e6307d841a', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, index.h("div", { key: 'ee9f4a882c34f0529b5e7e47aaf9b6770b9397f1', class: "app-drawer-header" }, index.h("slot", { key: '0c5b6358b4c0580496abd6d8d4ea11dec503b3d6', name: "header" }, index.h("h2", { key: 'f3205473f883e1074fb9a5fdac276114f1e9faf4', id: "drawer-title" }, this.drawerTitle))), index.h("div", { key: 'd6b92a68886554a94255537bcb4b2deb94db49d4', class: "app-drawer-body" }, index.h("slot", { key: 'ed02289db38c10083ff77df9249d08ab1b1eb7ba' })), index.h("div", { key: '726ea57dc857e5b9e9be4f4da01e00384d906934', class: "app-drawer-footer" }, index.h("slot", { key: 'f4286fd8eca1e4f835764e7432fbe611fea90cc3', name: "footer" })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["openHandler"]
    }; }
};
IrDrawer.style = IrDrawerStyle0;

exports.ir_drawer = IrDrawer;

//# sourceMappingURL=ir-drawer.cjs.entry.js.map