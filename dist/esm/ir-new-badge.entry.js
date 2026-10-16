import { r as registerInstance, h, H as Host } from './index-CwWmK1sZ.js';

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7d6f85f5a60354c143d8ae9b2589c6d0328f3436' }, h("span", { key: 'fa0b7f71a4e13e0ebcbb15100cbdada01c458933', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = irNewBadgeCss();

export { IrNewBadge as ir_new_badge };
