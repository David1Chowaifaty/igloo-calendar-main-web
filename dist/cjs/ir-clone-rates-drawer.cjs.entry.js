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
        return (index.h("ir-drawer", { key: '7150e95092087a822628cc8567ff6d3f376ba2a2', open: this.open, label: t.t('Lcz_CopyRatesToFutureDates'), onDrawerHide: this.handleDrawerHide }, this.open && (index.h("ir-clone-rates", { key: '33245838d8576a304d0ba80da06266881f5b908a', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), index.h("div", { key: '3ee1adb016b9da2ba30fe724d170adedf1c00c7b', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '04f13934e136cffee2d0fc0ab1626596dc53a3c7', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t.t('Lcz_Cancel')), index.h("ir-custom-button", { key: 'def8340db2f00283754abe511bcb875186893e9c', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, t.t('Lcz_Review')))));
    }
};
IrCloneRatesDrawer.style = irCloneRatesDrawerCss();

exports.ir_clone_rates_drawer = IrCloneRatesDrawer;
