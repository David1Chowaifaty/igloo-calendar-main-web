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
        return (index.h("ir-drawer", { key: '2f2be28cd163a675f305c522c77ef339249b4c15', open: this.open, label: t.t('Lcz_CopyRatesToFutureDates'), onDrawerHide: this.handleDrawerHide }, this.open && (index.h("ir-clone-rates", { key: '0ff2050b60aac9bdf61959519b0a01dd61dd4c08', mode: "drawer", ticket: this.ticket, p: this.p, language: this.language, propertyid: this.propertyid, onRatesCloned: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.cloneRatesDrawerClosed.emit();
            } })), index.h("div", { key: '507f0fb9813ad83b6d51d69fec58e6cd240492f7', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '2f0b1cada64e9dbc120874484b8a22f04615dd60', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t.t('Lcz_Cancel')), index.h("ir-custom-button", { key: '6890bbfe4889723c0f72db41d52e8ee24e68fd94', size: "m", variant: "brand", type: "submit", form: "clone-rates-form" }, t.t('Lcz_Review')))));
    }
};
IrCloneRatesDrawer.style = irCloneRatesDrawerCss();

exports.ir_clone_rates_drawer = IrCloneRatesDrawer;
