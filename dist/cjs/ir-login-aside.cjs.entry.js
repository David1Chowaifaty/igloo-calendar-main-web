'use strict';

var index = require('./index-CQkpA5n3.js');

const irLoginAsideCss = () => `ir-login-aside{display:block;height:100%;min-height:0}@media (max-width: 980px){.pms-auth{grid-template-columns:1fr}ir-login-aside{display:none}.pms-auth__form-side{padding:1.5rem 1.5rem 2.5rem}.pms-auth__card{padding:2rem 0}}fieldset{margin-bottom:1rem !important}`;

const IrLoginAside = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Which aside content to render. */
    view = 'calendar';
    /** Image URL, used when `view` is `image`. */
    imageSrc;
    /** Alternative text for the image. Empty means decorative. */
    imageAlt = '';
    /** Server-provided `Lcz_*` translations, passed through to the calendar view. */
    localeEntries = null;
    render() {
        if (this.view === 'calendar') {
            return index.h("ir-login-aside-calendar", { localeEntries: this.localeEntries });
        }
        return index.h("ir-login-aside-image", { imageSrc: this.imageSrc, imageAlt: this.imageAlt });
    }
};
IrLoginAside.style = irLoginAsideCss();

exports.ir_login_aside = IrLoginAside;
