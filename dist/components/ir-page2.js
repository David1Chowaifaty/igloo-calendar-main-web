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
        return (h(Host, { key: 'e9b2a5b511265d866b02b938e50bd66d59c00dca' }, h("ir-interceptor", { key: '21873629b743b15411c3d977f8c268e973038501' }), h("ir-toast", { key: 'c93108912cf1fecbd6b75aa08de07af49b726842' }), h("main", { key: '0b17f0793133301cd6c2bb4b80c13796f9c159b1', class: "ir-page__container" }, h("header", { key: '47ea1b62266582b1b143ab78d36e57439654a693', class: "tax-page__header" }, h("slot", { key: '09eb3d770e1c0cdc70d156a53c14210935fc1842', name: "heading" }, h("div", { key: '73478b575ac791c89d283d8afac2ca3f8ad5b33c', class: "tax-page__heading" }, h("h3", { key: '5eb0cbf484af74536af16f2d5c6833d5dad5d29a', class: "page-title" }, this.label), this.description && h("p", { key: '0d77bb9a5a7b719809b519a9c01831759386791e', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '6670ed568b8b23ca2a6e8f0b90732dc865811da6', name: "page-header" })), h("slot", { key: 'a2dd68182bd7a60bdd12454464a472f4a3fc5119' }))));
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