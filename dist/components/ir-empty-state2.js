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
        return (h(Host, { key: '6e15de6b0e5c8956406322ac11506737751c1161' }, h("slot", { key: 'cff2a9af9db4a62653f1a63d7f17dec04553c972', name: "icon" }, h("wa-icon", { key: 'd06f59604e37488e9cf9a3eddee76a91830c8da8', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'a33b546c956b7823455a8c79469f876e83813d98', part: "message", class: "message" }, this.message), h("slot", { key: '4e4bf1508818ba05d75da4712c8aaada9d86cc02' })));
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