import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const IrTextArea = /*@__PURE__*/ proxyCustomElement(class IrTextArea extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.textChange = createEvent(this, "textChange", 7);
        this.rows = 3;
        this.cols = 5;
        this.text = '';
        this.label = '<label>';
        this.placeholder = '<placeholder>';
        this.value = '';
        this.maxLength = undefined;
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("div", { key: '7a5d81612aa2e276ba575b930b847da6fcd5010e', class: "form-group" }, h("label", { key: 'd9e93366dc4d4955b99c017c6e038d7bce0140d7' }, this.label), h("textarea", { key: '314015129ccec896db19314e39e331bdc516fffc', maxLength: this.maxLength, rows: this.rows, value: this.value, class: "form-control", placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
}, [0, "ir-textarea", {
        "rows": [2],
        "cols": [2],
        "text": [1],
        "label": [1],
        "placeholder": [1],
        "value": [1],
        "maxLength": [2, "max-length"]
    }]);
function defineCustomElement() {
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

export { IrTextArea as I, defineCustomElement as d };

//# sourceMappingURL=ir-textarea2.js.map