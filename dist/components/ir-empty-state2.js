import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irEmptyStateCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}";
const IrEmptyStateStyle0 = irEmptyStateCss;

const IrEmptyState = /*@__PURE__*/ proxyCustomElement(class IrEmptyState extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'ae81508e06cad04b1e636f28894633d3fb58f232' }, h("slot", { key: '65ecbd8732f232bd98be3762faae3de303f4fb3e', name: "icon" }, this.showIcon && (h("div", { key: '7bfde73d449608fc96f99b82ea687fcc11efb806', class: 'icon_container' }, h("wa-icon", { key: '4761288f3c7bd868def18cbd33df1d1b6cf13262', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '10ba4724de0c778b6b491b7e6c5a012971cbb75a', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '89d286aed71b842f7ea5d179dc0d2bf19f8918f1' })));
    }
    static get style() { return IrEmptyStateStyle0; }
}, [1, "ir-empty-state", {
        "message": [1],
        "showIcon": [4, "show-icon"]
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