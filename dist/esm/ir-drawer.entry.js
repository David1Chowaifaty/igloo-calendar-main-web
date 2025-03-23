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
        return (h("div", { key: '9fb85a2092baf81ad24b2eeb4a36e358ad860d51', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: '9a187dc4dbe0dde056b0db077ac1eb2ada3e7a4a', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: '9626874e45ddd5103df3e830eb35222ede52cf79', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: '0dfca719699d15f46db71eb2358e9cba999955ab', class: "app-drawer-header" }, h("slot", { key: '8fd6eebf6b183cf60a52568abd778936bed552de', name: "header" }, h("h2", { key: '6d06427e7ceffd461ddde88e5df0522d2bc8c824', id: "drawer-title" }, this.drawerTitle))), h("div", { key: 'db504b705a434a04e645e5c5f83f40e0ecd5132d', class: "app-drawer-body" }, h("slot", { key: '0e6717eebef2f1b6cf190e3575694f741e2f8680' })), h("div", { key: '2db39c297d865743195db28e2aa90e4002cd112f', class: "app-drawer-footer" }, h("slot", { key: '28f5916a59d7dd09ea033dd21de9aa096c2d0069', name: "footer" })))));
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