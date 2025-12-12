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
        return (index.h(index.Host, { key: 'dd05dd06f20b111c18fd3fc54eb3e14762a45b8b' }, index.h("span", { key: '6ff47ceea4b37afed9cd4463cf3553cdf78e9370', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = IrNewBadgeStyle0;

exports.ir_new_badge = IrNewBadge;

//# sourceMappingURL=ir-new-badge.cjs.entry.js.map