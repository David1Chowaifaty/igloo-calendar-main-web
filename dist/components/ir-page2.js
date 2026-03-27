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
        return (h(Host, { key: 'd9cd297e35185a6b18affbe773dbbdcdda56aaf9' }, h("ir-interceptor", { key: 'cafeda0eccada08c55f5541cc92ad66ee4ce1a58' }), h("ir-toast", { key: 'eac7278e563831a180e31017e3f6616d2fd85699' }), h("main", { key: '68eaee848c13146456a38591a38ad757974c9297', class: "ir-page__container" }, h("header", { key: '20e81a0b540a71f123d97acc503a2b234d8bbaaf', class: "tax-page__header" }, h("slot", { key: 'c59ce4bf3127a450856d99d4e81bed5b4df36da6', name: "heading" }, h("div", { key: 'ba3175d80f48934bde3003f4f1462b941d503c80', class: "tax-page__heading" }, h("h3", { key: '33791e7b424ba26e94a45ce282cd35525bd06df6', class: "page-title" }, this.label), this.description && h("p", { key: 'ba994ac3ce03962ec4a91512a9b699c868a3bf2b', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'f03a1d14eedcbd745a01d65cdd8a046c04e8b59a', name: "page-header" })), h("slot", { key: 'c2f75d8cc0e5b6eae6987f8d2baa72ef9ef50809' }))));
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