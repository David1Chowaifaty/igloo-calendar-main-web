import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irPrintingLabelCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}:host([display='inline']) .ir-printing-label__container{display:inline-flex !important;max-width:100%;align-items:center}.ir-printing-label__container{display:flex;align-items:center;gap:0.25rem}.ir-printing-label__header{font-size:0.75rem;font-weight:600}.ir-printing-label__label{font-size:var(--wa-font-size-m);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.ir-printing-label__content{font-size:0.875rem}.ir-printing-label__text{margin:0}.ir-printing-label__footer{margin-top:0.25rem}";
const IrPrintingLabelStyle0 = irPrintingLabelCss;

const IrPrintingLabel = /*@__PURE__*/ proxyCustomElement(class IrPrintingLabel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * Fallback label text (used if no label slot is provided)
     */
    label;
    asHtml;
    display = 'flex';
    /**
     * Fallback content text (used if no content slot is provided)
     */
    content;
    render() {
        if (!this.content) {
            return null;
        }
        return (h(Host, { class: "ir-printing-label" }, h("section", { part: "container", class: "ir-printing-label__container" }, this.label && (h("p", { class: "ir-printing-label__label", part: "label" }, this.label)), this.asHtml ? (h("p", { part: "content", class: "ir-printing-label__text", innerHTML: this.content })) : (h("p", { part: "content", class: "ir-printing-label__text" }, this.content)))));
    }
    static get style() { return IrPrintingLabelStyle0; }
}, [1, "ir-printing-label", {
        "label": [1],
        "asHtml": [4, "as-html"],
        "display": [513],
        "content": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-printing-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPrintingLabel);
            }
            break;
    } });
}

export { IrPrintingLabel as I, defineCustomElement as d };

//# sourceMappingURL=ir-printing-label2.js.map