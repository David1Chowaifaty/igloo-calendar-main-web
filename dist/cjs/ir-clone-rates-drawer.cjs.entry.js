'use strict';

var index = require('./index-CQkpA5n3.js');

const irCloneRatesDrawerCss = () => `.sc-ir-clone-rates-drawer-h{display:block}`;

const IrCloneRatesDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cloneRatesDrawerClosed = index.createEvent(this, "cloneRatesDrawerClosed");
    }
    open = false;
    ticket;
    p;
    language = 'en';
    propertyid;
    /** Fired when the drawer closes: Cancel, the close button, Escape, light dismiss, or a successful copy. The parent should set `open` to false. */
    cloneRatesDrawerClosed;
    handleDrawerHide = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.cloneRatesDrawerClosed.emit();
    };
    render() {
        return (index.h("ir-drawer", { key: '6c8c31c2980ff42169837881e0e0e3ec18d9261f', open: this.open, label: "Copy rates to future dates", onDrawerHide: this.handleDrawerHide }, this.open && (index.h("ir-clone-rates", { key: 'bc3d43d3d9c9143dc5a3a95f2c3ffc4d891d3f4c', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), index.h("div", { key: 'fe559fa760475e796373b5a04fe71c6fa6b59261', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '758287d231f7ca62e0b477e76e0deae9ade23be9', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: 'cf656ff6ed23ea8f5c5a108a6a741a89f683a660', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, "Review"))));
    }
};
IrCloneRatesDrawer.style = irCloneRatesDrawerCss();

exports.ir_clone_rates_drawer = IrCloneRatesDrawer;
