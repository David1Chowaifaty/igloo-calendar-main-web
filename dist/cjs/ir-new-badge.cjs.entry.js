'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
require('./locale-scope-Cch-vf1R.js');

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd90ddfeaef661efb965b1614689e81b95f8da553' }, index.h("span", { key: '52330413b16da065c12626f89458a9fa19590319', class: "new-badge" }, t.t('Lcz_New', { fallback: 'new' }))));
    }
};
IrNewBadge.style = irNewBadgeCss();

exports.ir_new_badge = IrNewBadge;
