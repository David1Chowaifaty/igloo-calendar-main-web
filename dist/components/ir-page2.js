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
        return (h(Host, { key: 'e5a2e71bde796341588573ede68f5cd21a794ee7' }, h("ir-interceptor", { key: 'be46042405c1221efe13d8d858dec3ed91c9c253' }), h("ir-toast", { key: '8d2962d23f62e6bba2271ff464c3efbd2e5ca538' }), h("main", { key: '806002262c3b7854c907a4ca3be4dad8ae49e392', class: "ir-page__container" }, h("header", { key: 'ff696481bdd219444f4c9274262dd589a4071ac8', class: "tax-page__header" }, h("slot", { key: '97037eb966311cd9e6fa9588610110ae0c36e4a3', name: "heading" }, h("div", { key: 'c5c354075fa2830a77050adca01422db4ada72c6', class: "tax-page__heading" }, h("h3", { key: 'ace9a0e87d536abbb453c94fd6310384472561c0', class: "page-title" }, this.label), this.description && (h("p", { key: 'ef9ea423ff4a511e1d44789150ca1a3aeae79d81', class: "page__description" }, this.description, h("slot", { key: '1d624ddf1498d40d9a0d3e966e4796819ed253db', name: "page-description" }))))), h("slot", { key: '86ec727a1529d2ce51fd778bbfc20af75ef9fff0', name: "page-header" })), h("div", { key: 'fc29ee1cfab2aa94a7668d67498a6838a2470ed3', part: "body", class: 'page-body' }, h("slot", { key: '1f2b91b912791e64f5d42e9eefe0b58e79b4b1c8' })))));
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