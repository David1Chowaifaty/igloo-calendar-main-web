'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
require('./locale-scope-Cch-vf1R.js');

const irEmptyStateCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}`;

const IrEmptyState = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message;
    showIcon = true;
    render() {
        return (index.h(index.Host, { key: '09a66053bafce392d2414b1f090547a9c788537c' }, index.h("slot", { key: 'c4de0f4cbc2c70dd6197abf9fc106a618f9462af', name: "icon" }, this.showIcon && (index.h("div", { key: '1c79a01378d1989de21f032835d74c82c0439cb3', class: 'icon_container' }, index.h("wa-icon", { key: 'e3b7e1b334a39cb31d2dfafdd06ee6df8ebf84be', name: "ban", style: { transform: 'rotate(90deg)' } })))), index.h("p", { key: '538c9a39e0e77b776396a385ab6fed7d3487b6b0', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t.t('Lcz_NoRecordsFound', { fallback: 'No records found' })), index.h("slot", { key: '2d3258025f395ec07ec51a38fe2e1a4aba7a5f22' })));
    }
};
IrEmptyState.style = irEmptyStateCss();

exports.ir_empty_state = IrEmptyState;
