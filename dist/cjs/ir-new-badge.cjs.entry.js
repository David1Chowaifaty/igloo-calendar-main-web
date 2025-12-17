'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irNewBadgeCss = ":host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}";
const IrNewBadgeStyle0 = irNewBadgeCss;

const IrNewBadge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b35cfa28afec96a6b8401351ebc735f48971d939' }, index.h("span", { key: 'e457b72e4a5aa25efc07aeab91ddfcf6d19a950c', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = IrNewBadgeStyle0;

exports.ir_new_badge = IrNewBadge;

//# sourceMappingURL=ir-new-badge.cjs.entry.js.map