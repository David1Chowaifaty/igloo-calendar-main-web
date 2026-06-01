import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-icons2.js';
import { d as defineCustomElement$7 } from './ir-interceptor2.js';
import { d as defineCustomElement$6 } from './ir-otp2.js';
import { d as defineCustomElement$5 } from './ir-otp-modal2.js';
import { d as defineCustomElement$4 } from './ir-spinner2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-toast-alert2.js';
import { d as defineCustomElement$1 } from './ir-toast-provider2.js';

const irPageCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}";
const IrPageStyle0 = irPageCss;

const IrPage = /*@__PURE__*/ proxyCustomElement(class IrPage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    label;
    description;
    render() {
        return (h(Host, { key: '899d27305d85fdcf444cd3ebe3b9ebc750841145' }, h("ir-interceptor", { key: 'c89c44d476ef9f4bbc882e5dc92ad56e4265317c' }), h("ir-toast", { key: 'aa62778d8415c3c23d863ee2cf13178aeacb7483' }), h("main", { key: '9097064a7a835a3098bb2c5ea054c06e855f6ab7', class: "ir-page__container" }, h("header", { key: '4b4832595e2dba2fc9ddd7cc9d7f9180dae94c50', class: "tax-page__header" }, h("slot", { key: '4772a088f113ddb6427c91893c8084c0bed8424b', name: "heading" }, h("div", { key: '8921f60f00e57f74d71fe877c08cea5d7e8edf03', class: "tax-page__heading" }, h("h3", { key: '0aafa99904db79a00e725120f914942cf4dde66a', class: "page-title" }, this.label), this.description && (h("p", { key: 'ad5a1fe6336c06b4a87adc9c8a16fc1cdd2ce560', class: "page__description" }, this.description, h("slot", { key: '269b777cb51ad02eb6468e7dbe7885f11a3a4f43', name: "page-description" }))))), h("slot", { key: '8a5b242714d97ba7d2195e1c59459c1bae83eff5', name: "page-header" })), h("slot", { key: '5b5f80a102f56e0e14327d057605c0c4c71b4a84' }))));
    }
    static get style() { return IrPageStyle0; }
}, [1, "ir-page", {
        "label": [1],
        "description": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-page", "ir-button", "ir-icons", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPage);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPage as I, defineCustomElement as d };

//# sourceMappingURL=ir-page2.js.map