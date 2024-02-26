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
        return (h("div", { key: '3ae8b95512eba678328459bb00f6a6905a9238f9', class: `lds-default ${this.size}` }, h("div", { key: '771d84e576ec2731f3646a54a825d965c7cf7812' }), h("div", { key: '389bd49fe8ce10044fc5794ea116a2b53926919e' }), h("div", { key: '4c5de0a35c121861ab3419e1a4d6e4355529a2c6' }), h("div", { key: '932ac437e2f6238273b4842adc5a79ba9dc5b167' }), h("div", { key: 'd5ee6e3b5ce09d60542c7584baadf9c1c7216e18' }), h("div", { key: '3c1e0f2ca360564e77f1b59fd055238a8bdc93e6' }), h("div", { key: 'a024004e22de35883064584f57fbbe9fcad9e027' }), h("div", { key: '0eba04006282f4a740be1ce1be53645254e5fd93' }), h("div", { key: '2bb62b3d173cd5f1516ff324207ab0b4b8e848a0' }), h("div", { key: 'e6134b37f2a09148c6ef4daf1cdbf5afb2980240' }), h("div", { key: '8e507a7e8e38484ce404e59aeac48219dad5558c' }), h("div", { key: '6b6554221ebc42218de6271961aff6a20650edfb' })));
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