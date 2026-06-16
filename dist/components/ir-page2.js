import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-icons2.js';
import { d as defineCustomElement$7 } from './ir-interceptor2.js';
import { d as defineCustomElement$6 } from './ir-otp2.js';
import { d as defineCustomElement$5 } from './ir-otp-modal2.js';
import { d as defineCustomElement$4 } from './ir-spinner2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-toast-item2.js';
import { d as defineCustomElement$1 } from './ir-toast-provider2.js';

const irPageCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}";
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
        return (h(Host, { key: '662257dae60a7534bc6203d28abef7e52a830243' }, h("ir-interceptor", { key: '4b3b5d63ce522162867caf786643316d6b313f64' }), h("ir-toast", { key: 'f2dd3c3405fb257b365a951641d66ec4d6240722' }), h("main", { key: '9549036a3d626d58eedd8c59d0ea493dac3bf146', class: "ir-page__container" }, h("header", { key: '30a5ed90b0e62ffca1b07362d164a73a23e6d322', class: "tax-page__header" }, h("slot", { key: 'fa5fe79063dfc4822da7f3d31b96dbc83d348408', name: "heading" }, h("div", { key: 'ef5388e7a551289ace40fd55e41f1f175259b526', class: "tax-page__heading" }, h("h3", { key: '339ad620de26670d6392e3ec979c16f4b8cceeea', class: "page-title" }, this.label), this.description && (h("p", { key: '798f90036fb019904fd79163fa15149273709f20', class: "page__description" }, this.description, h("slot", { key: '24e6c71b6ad51bac0bd3f81036e0cd4d0d8e6e03', name: "page-description" }))))), h("slot", { key: '5c0365ea66f7c09caf5830ccbfc926f5e78dfb6d', name: "page-header" })), h("div", { key: '34f7645d8a32e54ba9405b569a0bfdbcd3805fa4', part: "body", class: 'page-body' }, h("slot", { key: '7fc7c26ca30f04e32b7b10b342877123c666f4ce' })))));
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
    const components = ["ir-page", "ir-button", "ir-icons", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-spinner", "ir-toast", "ir-toast-item", "ir-toast-provider"];
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
        case "ir-toast-item":
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