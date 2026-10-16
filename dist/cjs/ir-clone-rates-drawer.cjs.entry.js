'use strict';

var index = require('./index-Bp205iz4.js');

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
        return (index.h("ir-drawer", { key: 'e53a7298b6aff15c97d31473d601d55fee1605dc', open: this.open, label: "Copy rates to future dates", onDrawerHide: this.handleDrawerHide }, this.open && (index.h("ir-clone-rates", { key: 'e9554a8c348dfbb79c7214d6b6e4268e1d5bc424', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), index.h("div", { key: '05a78aa3404e34baf88fde61da44ccea168c382c', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'e098eb1a686d2d5bca4ce3767b374dbb6454cc85', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: 'b1b34e28d57c0cd2d0a8e43ceb641707f51b96c3', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, "Review"))));
    }
};
IrCloneRatesDrawer.style = irCloneRatesDrawerCss();

exports.ir_clone_rates_drawer = IrCloneRatesDrawer;
