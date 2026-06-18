'use strict';

var index = require('./index-CJ0kc5p1.js');

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a637421e494b95a776cc087f70ea5b0f638fc674' }, index.h("span", { key: '6b6b66a56b035404867408feedd33fa19474d70d', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = irNewBadgeCss();

exports.ir_new_badge = IrNewBadge;
