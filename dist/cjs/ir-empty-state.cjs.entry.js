'use strict';

var index = require('./index-DYQrLNin.js');

const irEmptyStateCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}`;

const IrEmptyState = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message = 'No records found';
    showIcon = true;
    render() {
        return (index.h(index.Host, { key: '4bf635cf1faf0f7771ee3878e5e903977835a2e2' }, index.h("slot", { key: 'be770582063920dcc5022ea77fb64cde2bfdb09f', name: "icon" }, this.showIcon && (index.h("div", { key: 'eedb19436d43ceb62edbe62d259de46767d157a5', class: 'icon_container' }, index.h("wa-icon", { key: 'e863be42ed60840c831eb361c407674365c6f496', name: "ban", style: { transform: 'rotate(90deg)' } })))), index.h("p", { key: 'a93aabc8782a298d07d49a7e7ee2a8b3cdf3fbdf', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), index.h("slot", { key: '5eb8a65bc79ddc66857395e15ceb9bf2407dd697' })));
    }
};
IrEmptyState.style = irEmptyStateCss();

exports.ir_empty_state = IrEmptyState;
