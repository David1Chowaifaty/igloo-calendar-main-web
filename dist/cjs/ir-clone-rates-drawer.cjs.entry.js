'use strict';

var index = require('./index-IDeZZwEK.js');
require('./types-sp5nWPAa.js');
require('./locale-scope-Cch-vf1R.js');
var t = require('./t-CqJPQrfm.js');
require('./types-BVJQZ50e.js');

const irCloneRatesDrawerCss = () => `.sc-ir-clone-rates-drawer-h{display:block;--ir-drawer-width:60rem}`;

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
        return (index.h("ir-drawer", { key: '09b093dea41400ffc07e6d96c7a9ca7dddac4422', open: this.open, label: t.t('Lcz_CopyRatesToFutureDates'), onDrawerHide: this.handleDrawerHide }, this.open && (index.h("ir-clone-rates", { key: '5f81c75aa419da9f5be3ff665d3c06fb2cc4ac39', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), index.h("div", { key: 'f79c1830494c8e8021fad5ce86affd4f449a1375', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '812f1f44b0fc4dceb5eea48e6930a1d4ef5f1f7b', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t.t('Lcz_Cancel')), index.h("ir-custom-button", { key: '9dc77bc4af0beb87574c62ea18e042752551d300', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, t.t('Lcz_Review')))));
    }
};
IrCloneRatesDrawer.style = irCloneRatesDrawerCss();

exports.ir_clone_rates_drawer = IrCloneRatesDrawer;
