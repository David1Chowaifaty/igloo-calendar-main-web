import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irEmptyStateCss = ":host{display:flex;align-items:center;justify-content:center;gap:1rem;flex-direction:column;box-sizing:border-box;color:var(--wa-color-neutral-60)}:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}::slotted([slot='icon']){font-size:2rem}[hidden]{display:none !important}";
const IrEmptyStateStyle0 = irEmptyStateCss;

const IrEmptyState = /*@__PURE__*/ proxyCustomElement(class IrEmptyState extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    message = 'No records found';
    render() {
        return (h(Host, { key: 'bbf849c0b3805a184df2370739e3fb1872aa88c1' }, h("slot", { key: '90b76561c06542d1fd042dcd9d9dceeb85bb5d51', name: "icon" }, h("wa-icon", { key: '9f126d79cf227ea62c13b1d2acec56c1bc27d07d', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '1c5b35ff8d88333408e763b4b6fb97cd974ba369', part: "message", class: "message" }, this.message), h("slot", { key: '5396ea7bd5c43c69368d043321ebefbd2dcf062c' })));
    }
    static get style() { return IrEmptyStateStyle0; }
}, [1, "ir-empty-state", {
        "message": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-empty-state"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrEmptyState);
            }
            break;
    } });
}

export { IrEmptyState as I, defineCustomElement as d };

//# sourceMappingURL=ir-empty-state2.js.map