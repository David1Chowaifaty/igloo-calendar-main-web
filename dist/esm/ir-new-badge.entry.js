import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { t } from './t-BVYK64UG.js';
import './locale-scope-CapRuPkM.js';

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '3883621a92ce3db3891676f6d7e2ec570c83ba39' }, h("span", { key: '28c768a7f9dd5f293845c0debe0ed7efa5b3cc61', class: "new-badge" }, t('Lcz_New', { fallback: 'new' }))));
    }
};
IrNewBadge.style = irNewBadgeCss();

export { IrNewBadge as ir_new_badge };
