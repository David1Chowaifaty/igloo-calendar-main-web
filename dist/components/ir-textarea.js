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
        return (h("div", { key: 'f248ba8eefa2c85fa4dd5ce934344782d861255d', class: "form-group" }, h("label", { key: '7af7d2c32b24da27f00bdfc6caeeca9bf7be1680' }, this.label), h("textarea", { key: '08cd8d745a17cbb575790ceb0e9364a7d35f06f6', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
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