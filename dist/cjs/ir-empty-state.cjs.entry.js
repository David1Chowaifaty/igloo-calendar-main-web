'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irEmptyStateCss = ":host{display:flex;align-items:center;justify-content:center;gap:1rem;flex-direction:column;box-sizing:border-box;color:var(--wa-color-neutral-60)}:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}::slotted([slot='icon']){font-size:2rem}[hidden]{display:none !important}";
const IrEmptyStateStyle0 = irEmptyStateCss;

const IrEmptyState = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message = 'No records found';
    render() {
        return (index.h(index.Host, { key: 'fd3d0737a8decb02f8f6f159258b6de1298263a2' }, index.h("slot", { key: '1601439685a6ec0b7262787326e7412e2cb40ba9', name: "icon" }, index.h("wa-icon", { key: '6bd1ce03c7b846e466cef4cd9008a4ea59b3f806', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), index.h("p", { key: '5590e99544ef249dc145a5736eda6b6e96e01fdd', part: "message", class: "message" }, this.message), index.h("slot", { key: 'f5498881a8c88a3767fc7992396dd5994c309f1c' })));
    }
};
IrEmptyState.style = IrEmptyStateStyle0;

exports.ir_empty_state = IrEmptyState;

//# sourceMappingURL=ir-empty-state.cjs.entry.js.map