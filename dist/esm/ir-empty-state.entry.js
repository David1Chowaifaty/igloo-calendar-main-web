import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';

const irEmptyStateCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}`;

const IrEmptyState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: 'ec030a55e33076e437efff9d1b4208cff94049d6' }, h("slot", { key: '089540e4a0c6d948e1b0caa6d130efd448b3b9d8', name: "icon" }, this.showIcon && (h("div", { key: '03a615b13b068dbd9b9552514796d46eb79bc286', class: 'icon_container' }, h("wa-icon", { key: 'eea2d517f1992553da6d439c90a03c356dd3b2d5', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'a001974ab86beb6a784a4c4ac4cdf182f06cce78', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '8941dd12a26edc8cd5e4f5c51395641748853daa' })));
    }
};
IrEmptyState.style = irEmptyStateCss();

export { IrEmptyState as ir_empty_state };
