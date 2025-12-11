import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irEmptyStateCss = ":host{display:'flex';align-items:center;justify-content:center;gap:1rem;flex-direction:column;color:var(--wa-color-neutral-60)}";
const IrEmptyStateStyle0 = irEmptyStateCss;

const IrEmptyState = /*@__PURE__*/ proxyCustomElement(class IrEmptyState extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    message = 'No records found';
    render() {
        return (h(Host, { key: 'f51e8a4c77d058d39aa1dfb9520b4ffbb6278669' }, h("slot", { key: '890d873c22da39173f10f648d2f983f664c06617', name: "icon" }, h("wa-icon", { key: '925b25de4d0704645c69fe493b6745eeccd1700a', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '31de7e096836b0d96bf05251417b63286b12fbc8', part: "message" }, "No records found"), h("slot", { key: '2f45fbb2c1c4e34fb66ec81809007472e0e41478' })));
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