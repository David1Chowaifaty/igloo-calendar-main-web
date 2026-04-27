import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irEmptyStateCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}";
const IrEmptyStateStyle0 = irEmptyStateCss;

const IrEmptyState = /*@__PURE__*/ proxyCustomElement(class IrEmptyState extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    message = 'No records found';
    render() {
        return (h(Host, { key: '499165bfa8718d86d8580ceb28d45fc99adbd566' }, h("slot", { key: '384560da58dee6cdd8875e882eef8a9f37d75a6e', name: "icon" }, h("div", { key: '72d05b34ecf14e7e1077e85e30ab510e28e46358', class: 'icon_container' }, h("wa-icon", { key: 'e8d7e1160d4cfc1563e477df67dc4d03709c9086', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: 'd35e898413a8bf6290922a1e54a662520e121ed3', part: "message", class: "message" }, this.message), h("slot", { key: '88c48c8a89cc4dfe568a859468e84103447d5fcd' })));
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