import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irEmptyStateCss = ":host{display:flex;align-items:center;justify-content:center;gap:1rem;flex-direction:column;box-sizing:border-box;color:var(--wa-color-neutral-60)}:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}";
const IrEmptyStateStyle0 = irEmptyStateCss;

const IrEmptyState = /*@__PURE__*/ proxyCustomElement(class IrEmptyState extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    message = 'No records found';
    render() {
        return (h(Host, { key: '9a1b942b93530bf303d460e49e855f06f57d5595' }, h("slot", { key: '840f849f9d1eab4745d567bce6cb7a6d9b84ac9f', name: "icon" }, h("wa-icon", { key: 'eb7a01377e4768fade0eba3f094f2c0d470f85fc', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '3ded84a621fe54d5767019c4dd63f793e0a29f56', part: "message", class: "message" }, "No records found"), h("slot", { key: '7588c29df7262d3096002d38814adefd1cdefff3' })));
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