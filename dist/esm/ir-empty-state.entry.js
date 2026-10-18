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
        return (h(Host, { key: '90e77ff4c4edf6fbeb418732896c1459e6958f46' }, h("slot", { key: '613f5107eb75a6b645160e937dc8d1c84b47af22', name: "icon" }, this.showIcon && (h("div", { key: 'a0721b96c2672e8e435653cee23c9ad1e452b734', class: 'icon_container' }, h("wa-icon", { key: '19577b864d334f4ee0d4dcd63c9afc1ec876a1b8', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '82b174effaa0f13c3b8b55f575469dd4e98ad6f0', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '5f9d50439a0bd539b27a60803a427b87e2b7d402' })));
    }
};
IrEmptyState.style = irEmptyStateCss();

export { IrEmptyState as ir_empty_state };
