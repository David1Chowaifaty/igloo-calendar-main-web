import { r as registerInstance, c as createEvent, h, a as getElement } from './index-ChgcZQN7.js';

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
        return (h("div", { key: '36125a8d73d0691b58728ab004d3c273932f34b9', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: 'd6550f45af2e752bfa6d23a219e4ca9468fec778', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: 'db31610cabeebedc1d8f6cff2e4467227c131a1d', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: 'a96a8493725d78148b3c79b730fc39e51859635b', class: "app-drawer-header" }, h("slot", { key: '4e03da5feb1883f6d43483fa40136148372f0a7c', name: "header" }, h("h2", { key: '5d20e621eaf4299f4710b49faab38103e9b026ac', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '54af734239add147d354d8523a02c0775204ba77', class: "app-drawer-body" }, h("slot", { key: 'c716ccdbffe2849fc71bba96eda3bf7dc76e720e' })), h("div", { key: '7937364e84788ae907b6f77e254f9c57f4b9fd64', class: "app-drawer-footer" }, h("slot", { key: '84fff7d0fded1cdd167870f75615456a7d87c140', name: "footer" })))));
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