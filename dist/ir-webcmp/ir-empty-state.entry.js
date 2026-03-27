import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';

const irEmptyStateCss = ":host{display:flex;align-items:center;justify-content:center;gap:1rem;flex-direction:column;box-sizing:border-box;color:var(--wa-color-neutral-60)}:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}::slotted([slot='icon']){font-size:2rem}[hidden]{display:none !important}";

const IrEmptyState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message = 'No records found';
    render() {
        return (h(Host, { key: '47239cdc2f6cd04902e452f5113bf01103c504fb' }, h("slot", { key: '979d2a11e4d16b1d83438efe2b16c64b4695016a', name: "icon" }, h("wa-icon", { key: '633821e7561220d5d0a9d1ee339dad85ba6b4a1a', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'ab425d15c54462a7b56e753995cb9ceb301627f3', part: "message", class: "message" }, this.message), h("slot", { key: '7e1055c3bc01b598adc5982f357241e8106e48ad' })));
    }
};
IrEmptyState.style = irEmptyStateCss;

export { IrEmptyState as ir_empty_state };

//# sourceMappingURL=ir-empty-state.entry.js.map