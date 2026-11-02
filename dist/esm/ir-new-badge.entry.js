import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';

const irNewBadgeCss = () => `:host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}`;

const IrNewBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'b873cdfc1e64ebb067ecbbb5e6f372a515925cb9' }, h("span", { key: '1a463d5b8e55d70b558861ca9bfcfa187bf39a1f', class: "new-badge" }, t('Lcz_New', { fallback: 'new' }))));
    }
};
IrNewBadge.style = irNewBadgeCss();

export { IrNewBadge as ir_new_badge };
