'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-sd8HJHNy.js');
require('./locales.store-D6DJIhoZ.js');

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b992ab45da50ab330449bf4d546698019e244240' }, index.h("span", { key: '02d0f7f7467305b154cf8990a4586cf550be09a1', class: "new-badge" }, t.t('Lcz_New', { fallback: 'new' }))));
    }
};
IrNewBadge.style = irNewBadgeCss();

exports.ir_new_badge = IrNewBadge;
