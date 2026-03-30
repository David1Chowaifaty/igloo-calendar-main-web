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
        return (index.h(index.Host, { key: 'ed70e7cad5caa3c6149d33e454ca6a57bfcbade5' }, index.h("slot", { key: 'b65a956381aa0a3d23aab7fcf61a2f8cad66a3ec', name: "icon" }, index.h("wa-icon", { key: 'b5e03e3308a7ef0593940e8362bba88d7a7f61ab', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), index.h("p", { key: '50d07b3c1071b33b52575daaba96098572b3f14f', part: "message", class: "message" }, this.message), index.h("slot", { key: 'dadf67ef2b8933eed1bec47746db7674a6f63f61' })));
    }
};
IrEmptyState.style = IrEmptyStateStyle0;

exports.ir_empty_state = IrEmptyState;

//# sourceMappingURL=ir-empty-state.cjs.entry.js.map