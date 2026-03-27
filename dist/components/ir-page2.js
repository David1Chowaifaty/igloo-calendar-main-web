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

const irPageCss = ".sc-ir-page-h{display:block;height:100%}.page-title.sc-ir-page{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.ir-page__container.sc-ir-page{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%}.tax-page__header.sc-ir-page{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}";
const IrPageStyle0 = irPageCss;

const IrPage = /*@__PURE__*/ proxyCustomElement(class IrPage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    label;
    description;
    render() {
        return (h(Host, { key: 'd5a782116df73ffc03a0791a94b93b9d68d78945' }, h("ir-interceptor", { key: 'd1f944bbaae3d2cba3ad79b7965dbfdce24ed881' }), h("ir-toast", { key: '354d221c045b4b51de76945241fa7e3bd0f9da7e' }), h("main", { key: '60726f9190dfccd06d8a706d5783e519dcdac233', class: "ir-page__container" }, h("header", { key: 'd58152ec6b68d6fd48ed706fb362fffe9de9b957', class: "tax-page__header" }, h("slot", { key: '22195521f46f00c7864a228be2364f9a5bb60763', name: "heading" }, h("div", { key: 'ada0cdd0553428b2eb9ed8da0afca4f30cac205a', class: "tax-page__heading" }, h("h3", { key: '3f4674e402f4d1259f62d8c304167f1e320d9d66', class: "page-title" }, this.label), this.description && h("p", { key: '813b257055a9e12e43c35842a454173a7b1edb3c', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '5fc2d9e643feadf90322d6c4e87d25607fd54d21', name: "page-header" })), h("slot", { key: '6ff052c6a727087b2ebcd2ee20a8f798462f542a' }))));
    }
    static get style() { return IrPageStyle0; }
}, [6, "ir-page", {
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