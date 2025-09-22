import { r as registerInstance, c as createEvent, h, g as getElement } from './index-60982d00.js';

const irDrawerCss = ".app-drawer{position:fixed;top:0;left:0;width:100%;height:100%;visibility:hidden;z-index:1000}.app-drawer--open{visibility:visible}.app-drawer-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.app-drawer--open .app-drawer-overlay{opacity:1;pointer-events:auto}.app-drawer-content{position:fixed;top:0;height:100%;width:300px;background-color:white;box-shadow:0 0 10px rgba(0, 0, 0, 0.2);transform:translateX(-100%);transition:transform 0.3s ease-in-out;display:flex;flex-direction:column}.app-drawer--open .app-drawer-content{transform:translateX(0)}.app-drawer-content--right{right:0;transform:translateX(100%)}.app-drawer--open .app-drawer-content--right{transform:translateX(0)}.app-drawer-header{padding:16px;border-bottom:1px solid #ccc;position:sticky;top:0;background-color:white;z-index:1}.app-drawer-body{padding:16px;overflow-y:auto;flex-grow:1}.app-drawer-footer{padding:16px;border-top:1px solid #ccc;position:sticky;bottom:0;background-color:white;z-index:1}";
const IrDrawerStyle0 = irDrawerCss;

const IrDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: 'b954aeba2b57d3ca1ba7643ed5a0fa6cfea608f8', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: '5486a689e8b61db5ecaa4924b1b011bede85b786', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: 'e61d2faab1289bed0e6e8096f6a390df362773bc', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: '1965d28b1d82ab9d731208e2fc88ddefe000cb2b', class: "app-drawer-header" }, h("slot", { key: '9cb3fff1f2f68da37437b6a843f6aee0f0e26007', name: "header" }, h("h2", { key: 'b0d6ef74d48fb89c7fbc2ff94bf237be9b1a745f', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '60aff3c01587c5a15300188d2e02fd69a3e3f34d', class: "app-drawer-body" }, h("slot", { key: '26e536920892be9afe209eac446c9a6866afbcc4' })), h("div", { key: 'b19fad1bf743ec64af104871e91c392587ce40aa', class: "app-drawer-footer" }, h("slot", { key: 'd50059917dc7e3f13c2217ac3d67170c46d4d372', name: "footer" })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["openHandler"]
    }; }
};
IrDrawer.style = IrDrawerStyle0;

export { IrDrawer as ir_drawer };

//# sourceMappingURL=ir-drawer.entry.js.map