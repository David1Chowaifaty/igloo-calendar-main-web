import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { t } from './t-BG8YaZr6.js';
import './locales.store-CXJn6ls-.js';

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'a5d3c2f89ea857b4a444a79697c240289ebb1241' }, h("span", { key: 'fa34a00be5404b78cd29f22a46e81233582cfc2a', class: "new-badge" }, t('Lcz_New', { fallback: 'new' }))));
    }
};
IrNewBadge.style = irNewBadgeCss();

export { IrNewBadge as ir_new_badge };
