'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-wyGILxEL.js');
require('./locale-scope-C7rmpwuA.js');

const irEmptyStateCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}`;

const IrEmptyState = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message;
    showIcon = true;
    render() {
        return (index.h(index.Host, { key: '4c39c375a2cd015ec708824393ae501864ec42e6' }, index.h("slot", { key: '99aa8d5fd1eca3be9d774a61d29e0baa0ef6f5bd', name: "icon" }, this.showIcon && (index.h("div", { key: '55a6c6ebfde197db007bba640090315c3a8dc76c', class: 'icon_container' }, index.h("wa-icon", { key: '1c34fa9fdaed218aff7ebcfd65c0072fe7f4efdd', name: "ban", style: { transform: 'rotate(90deg)' } })))), index.h("p", { key: 'b6c23ee3e482da36f15097deef4912b8705d9f38', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t.t('Lcz_NoRecordsFound', { fallback: 'No records found' })), index.h("slot", { key: '051e5ae775d783a39cb61c5f61e9e9f865c10944' })));
    }
};
IrEmptyState.style = irEmptyStateCss();

exports.ir_empty_state = IrEmptyState;
