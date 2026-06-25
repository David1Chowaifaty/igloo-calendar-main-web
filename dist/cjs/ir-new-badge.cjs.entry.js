'use strict';

var index = require('./index-DYQrLNin.js');

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'de72d918ab59b43e4a123a9dacd5a05bc63d5226' }, index.h("span", { key: '40948ca7f90eabfc63ecba80e088346622248af4', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = irNewBadgeCss();

exports.ir_new_badge = IrNewBadge;
