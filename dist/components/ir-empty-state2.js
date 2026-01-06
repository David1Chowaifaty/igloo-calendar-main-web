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
        return (h(Host, { key: '7779d183ee28825428afc250d69fe230cab65cd6' }, h("slot", { key: '0e0af03f17406a42e39bece870e48c39250d4d9e', name: "icon" }, h("wa-icon", { key: '7a69ac21238aa84430d13b49e601dd53bddd32a4', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '6403da5910f8139d9f8081ef74b062e508526a08', part: "message", class: "message" }, this.message), h("slot", { key: '1e8a174dbc6301a943bb597c73a83f4bb9c1f8f2' })));
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