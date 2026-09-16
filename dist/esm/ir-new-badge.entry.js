import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { t } from './t-Bk78Wumj.js';
import './locales.store-CXJn6ls-.js';

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '0e2ba3494915ed8a749d9bee0744ec32d8cdd184' }, h("span", { key: 'd17fbede9d62dee7a76dbb8b806d24bd0f89114f', class: "new-badge" }, t('Lcz_New', { fallback: 'new' }))));
    }
};
IrNewBadge.style = irNewBadgeCss();

export { IrNewBadge as ir_new_badge };
