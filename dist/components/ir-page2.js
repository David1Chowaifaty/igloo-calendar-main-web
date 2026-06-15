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
        return (h(Host, { key: '22df40847b12a7a5742a40ca1ddd1c4c0cd1cfd6' }, h("ir-interceptor", { key: '34649d072de53d18a638a06e2b0ad8164f70b249' }), h("ir-toast", { key: '303d022f778223c1ba66e8244f95d6d8d88ba5fe' }), h("main", { key: '6e76fe65f279452c0f2b375172b7ccdf50f4464a', class: "ir-page__container" }, h("header", { key: '7e2d9e59fbd4ade9df4910dc6ddcaea518d0b8c7', class: "tax-page__header" }, h("slot", { key: 'b837d4bd05fe9ccde71b2c606ddbb0fe4055ad7b', name: "heading" }, h("div", { key: '34c84c1ae615af3cd43bb2bf156d2fadf2fead31', class: "tax-page__heading" }, h("h3", { key: '1ffef38aded4b1f0967c5b5559e8c90fe847d894', class: "page-title" }, this.label), this.description && (h("p", { key: '57bf0e2a9e4e9b8f79e0e9aa4d78d223da0a3d66', class: "page__description" }, this.description, h("slot", { key: '545aaeefb0219d0753c2d9bd4e17ce92ddfff783', name: "page-description" }))))), h("slot", { key: '0ed60e4797fcebe70f88152a104334e4c75cd9f3', name: "page-header" })), h("div", { key: '6cd5b1570dcfa80ae0bc8b47ce688e406388b224', part: "body", class: 'page-body' }, h("slot", { key: '97bc6441c9e93941abf33763344a9472f8db2427' })))));
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