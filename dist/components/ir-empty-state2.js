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
        return (h(Host, { key: 'd9c02e20fd4761614a43ac47b97ae6dd0cfc521f' }, h("slot", { key: '29bc47153280f3df3837b493b58f6fc3babb06f4', name: "icon" }, h("wa-icon", { key: '6d72416d48278f776d15510a74f4fe1eef39681d', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '7684277c417766d27a9f2c1b961d25590df9be6f', part: "message", class: "message" }, "No records found"), h("slot", { key: 'f65f08d1163856cb2a6e6b4e13be8209ae7d1d28' })));
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