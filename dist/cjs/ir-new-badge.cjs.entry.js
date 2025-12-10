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
        return (index.h(index.Host, { key: 'e435216e904629ae4c25feafac3e3cc71bbd8652' }, index.h("span", { key: 'edbd4f764c5cc9183fcac6dc31b069157787ad29', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = IrNewBadgeStyle0;

exports.ir_new_badge = IrNewBadge;

//# sourceMappingURL=ir-new-badge.cjs.entry.js.map