'use strict';

var index = require('./index-IDeZZwEK.js');
require('./locale.controller-BE9t6L_N.js');
var t = require('./t-CqJPQrfm.js');
require('./locale-scope-Cch-vf1R.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./language-observer-DKp37LIu.js');
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
        return (index.h("ir-drawer", { key: 'cbe1b17129090dc270ef858e5830a519719feadd', open: this.open, label: t.t('Lcz_CopyRatesToFutureDates'), onDrawerHide: this.handleDrawerHide }, this.open && (index.h("ir-clone-rates", { key: '2ec53de9ceb9394e1ff6e4444371f74690f52d1c', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), index.h("div", { key: '18e69ba81e7272da89a3df989cc50d43df2bd7d0', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '620a3de241bcf47a37271897868eb3e816666bfb', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t.t('Lcz_Cancel')), index.h("ir-custom-button", { key: 'c639a0ae5ab6753673c80e90ba2fc9828b29b5a1', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, t.t('Lcz_Review')))));
    }
};
IrCloneRatesDrawer.style = irCloneRatesDrawerCss();

exports.ir_clone_rates_drawer = IrCloneRatesDrawer;
