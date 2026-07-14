import { r as registerInstance, h, H as Host } from './index-Nexq2OjX.js';

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'dcf7f76ba243c50f68596869953e70b7abb4e2a4' }, h("span", { key: '1122fa9da707d9bb05be82c1f0cc155532b4411c', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = irNewBadgeCss();

export { IrNewBadge as ir_new_badge };
