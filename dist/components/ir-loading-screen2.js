import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irLoadingScreenCss = ".sc-ir-loading-screen-h{display:fixed;height:100vh;width:100vw;z-index:1000;top:0;left:0;display:flex;align-items:center;justify-content:center;background:white}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = /*@__PURE__*/ proxyCustomElement(class IrLoadingScreen extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.message = '';
    }
    render() {
        return (h(Host, { key: 'f510a9deda10569f3a95c56ee8e97d845182ed18' }, h("span", { key: '8bef927804b8c0335fedb88616d1b20f313572e0', class: "loader" })));
    }
    static get style() { return IrLoadingScreenStyle0; }
}, [2, "ir-loading-screen", {
        "message": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-loading-screen"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLoadingScreen);
            }
            break;
    } });
}

export { IrLoadingScreen as I, defineCustomElement as d };

//# sourceMappingURL=ir-loading-screen2.js.map