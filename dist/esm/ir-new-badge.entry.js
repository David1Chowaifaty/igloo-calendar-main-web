import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'bd9ad72d357ad73b86ab0cdfb45c64175f652c4b' }, h("span", { key: '9dbb56e295edd40960eac852e6208782339e696e', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = irNewBadgeCss();

export { IrNewBadge as ir_new_badge };
