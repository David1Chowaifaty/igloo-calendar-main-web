import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const IrTextArea = /*@__PURE__*/ proxyCustomElement(class IrTextArea extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.rows = 3;
        this.cols = 5;
        this.text = '';
        this.label = '<label>';
        this.placeholder = '<placeholder>';
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("div", { key: 'f572c8e876838219db6d0109b65b79c2d9d33964', class: "form-group" }, h("label", { key: '79658ca23c91fe860b89829fdea6ecca6a187063' }, this.label), h("textarea", { key: '641be748515179626dc978b7918d8145f6c9e636', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
}, [0, "ir-textarea", {
        "rows": [2],
        "cols": [2],
        "text": [1],
        "label": [1],
        "placeholder": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-textarea"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTextArea);
            }
            break;
    } });
}

const IrTextarea = IrTextArea;
const defineCustomElement = defineCustomElement$1;

export { IrTextarea, defineCustomElement };

//# sourceMappingURL=ir-textarea.js.map