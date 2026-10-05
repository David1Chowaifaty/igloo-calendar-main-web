import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { t } from './t-BG8YaZr6.js';
import './locales.store-CXJn6ls-.js';

const irEmptyStateCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}`;

const IrEmptyState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message;
    showIcon = true;
    render() {
        return (h(Host, { key: 'a4be0096468acfde8817310011ec5f55a4dd4e2b' }, h("slot", { key: 'd1fd011c3fd09c0bf48da7fe6db4cde3361c8a22', name: "icon" }, this.showIcon && (h("div", { key: '9ae2c1eab718dd3a7aea44fe37ecb0d4d5c2e795', class: 'icon_container' }, h("wa-icon", { key: '8aa01b009d433ed6ff8a29f6dd66d38dcd1917d8', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '88f18294ed3d0973152eb5bfcb95e71d4868996c', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t('Lcz_NoRecordsFound', { fallback: 'No records found' })), h("slot", { key: '622bff18729fe78ff1a5addf2c8b8f26af781afc' })));
    }
};
IrEmptyState.style = irEmptyStateCss();

export { IrEmptyState as ir_empty_state };
