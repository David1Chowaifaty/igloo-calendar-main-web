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
        return (index.h(index.Host, { key: 'f68e9d3a1d9559bd694d8fe1ea207ce74095e981' }, index.h("slot", { key: 'cd70e2a1dbfdd21e16e429ab61ab904814d0fd54', name: "icon" }, index.h("wa-icon", { key: 'bbe74357f5be951f38fc8094361df50fc67749ea', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), index.h("p", { key: 'a5aeb48e1897cbc143d009d3deba81ca4944c598', part: "message", class: "message" }, this.message), index.h("slot", { key: '241bbca67382bc6c8a1bbc5ad8a0cb61ad8d778a' })));
    }
};
IrEmptyState.style = IrEmptyStateStyle0;

exports.ir_empty_state = IrEmptyState;

//# sourceMappingURL=ir-empty-state.cjs.entry.js.map