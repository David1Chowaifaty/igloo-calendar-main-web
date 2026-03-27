import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';

const irNewBadgeCss = ":host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}";

const IrNewBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '4f5a18495fa17af489c4ce5a0b23bb47c1343dee' }, h("span", { key: '50d6adb1b47b69d0b6191a4308c2b40ac08c8605', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = irNewBadgeCss;

export { IrNewBadge as ir_new_badge };

//# sourceMappingURL=ir-new-badge.entry.js.map