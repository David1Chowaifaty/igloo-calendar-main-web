import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const irLoaderCss = ".lds-default.xs{scale:0.25}.lds-default.sm{scale:0.5}.lds-default.md{scale:1}.lds-default.lg{scale:1.5}.lds-default{display:inline-block;position:relative;width:80px;height:80px}.lds-default div{position:absolute;width:6px;height:6px;background:#000;border-radius:50%;animation:lds-default 1.2s linear infinite}.lds-default div:nth-child(1){animation-delay:0s;top:37px;left:66px}.lds-default div:nth-child(2){animation-delay:-0.1s;top:22px;left:62px}.lds-default div:nth-child(3){animation-delay:-0.2s;top:11px;left:52px}.lds-default div:nth-child(4){animation-delay:-0.3s;top:7px;left:37px}.lds-default div:nth-child(5){animation-delay:-0.4s;top:11px;left:22px}.lds-default div:nth-child(6){animation-delay:-0.5s;top:22px;left:11px}.lds-default div:nth-child(7){animation-delay:-0.6s;top:37px;left:7px}.lds-default div:nth-child(8){animation-delay:-0.7s;top:52px;left:11px}.lds-default div:nth-child(9){animation-delay:-0.8s;top:62px;left:22px}.lds-default div:nth-child(10){animation-delay:-0.9s;top:66px;left:37px}.lds-default div:nth-child(11){animation-delay:-1s;top:62px;left:52px}.lds-default div:nth-child(12){animation-delay:-1.1s;top:52px;left:62px}@keyframes lds-default{0%,20%,80%,100%{transform:scale(1)}50%{transform:scale(1.5)}}";
const IrLoaderStyle0 = irLoaderCss;

const IrLoader = /*@__PURE__*/ proxyCustomElement(class IrLoader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.size = 'md';
    }
    render() {
        return (h("div", { key: '10cffa1fb9d14269cf4ac499c7c6b45f21c6c419', class: `lds-default ${this.size}` }, h("div", { key: 'fdb8c95f00d6ee0093c30afd914445d65602902d' }), h("div", { key: 'cfce1a11bd6abd051a85d59f36863332d7747562' }), h("div", { key: 'a7d75a08a9beb3ac2ee2d41d1f0f0d3a49bab256' }), h("div", { key: 'a8b3b1d8b6790905bb6b9bc6ff57e6b36823fe6e' }), h("div", { key: '9ab98fa0b3ebb6b24fc4a3716cdbc6fabd7fd188' }), h("div", { key: 'cd4864a1bf985a1aaed5b94d9ee4bdf895e604a6' }), h("div", { key: '74a9e24e4757deaabc0de96ad8de5f7f1373ce8b' }), h("div", { key: '5568efba1da13864829b2a948c05a288229a1bb8' }), h("div", { key: '29ac9453d76f525b376085eeb587830d54571306' }), h("div", { key: 'fa769949fc88fcef2548883993bf4901943e9480' }), h("div", { key: '038cd91bf74686ed9772071b266139b54acf742c' }), h("div", { key: '0645f3a79ca4e4b655a54a1cf100574903b997a4' })));
    }
    static get style() { return IrLoaderStyle0; }
}, [0, "ir-loader", {
        "size": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-loader":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLoader);
            }
            break;
    } });
}

export { IrLoader as I, defineCustomElement as d };

//# sourceMappingURL=ir-loader2.js.map