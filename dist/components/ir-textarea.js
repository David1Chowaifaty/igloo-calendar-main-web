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
        return (h("div", { key: '25efe3cb8cb9ef08d42d286bb8bd0c231701873f', class: "form-group" }, h("label", { key: '15f2a41bdc4df0c98138451846f227074827b06b' }, this.label), h("textarea", { key: 'ca05308bfebd4012fc08aa12e65b81f94822b17e', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
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