'use strict';

var index = require('./index-CJ0kc5p1.js');

const irEmptyStateCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}`;

const IrEmptyState = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message = 'No records found';
    showIcon = true;
    render() {
        return (index.h(index.Host, { key: '08c8e0734b6346375ff8d8cd122abbfdca48f7ef' }, index.h("slot", { key: 'b2670e966a084490a2c225bd1493ad3e7154a4bc', name: "icon" }, this.showIcon && (index.h("div", { key: '0d4ccf4cb5927e9a53841137ead26b26bfa0eb3c', class: 'icon_container' }, index.h("wa-icon", { key: '6c9093acfacc91ac808197bc3d0612908d514420', name: "ban", style: { transform: 'rotate(90deg)' } })))), index.h("p", { key: '8a546282aee6e4d274d1913e66b462d6c0edbf47', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), index.h("slot", { key: '038b424fa8e10faf730a6c187467b808982ae155' })));
    }
};
IrEmptyState.style = irEmptyStateCss();

exports.ir_empty_state = IrEmptyState;
