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
        this.textareaClassname = undefined;
        this.error = false;
    }
    handleAriaInvalidChange(newValue) {
        this.error = newValue === 'true';
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("div", { key: 'df55701474f9afdb2baf15bf5e9ca0de6246af8a', class: 'form-group' }, h("label", { key: 'b3ab3cb7bd4b5078a01178ccc58d173d1e8f509c' }, this.label), h("textarea", { key: 'adba6c9678e2a082478f4938076831442153d3ed', maxLength: this.maxLength, rows: this.rows, value: this.value, class: `form-control ${this.textareaClassname} ${this.error ? 'border-danger' : ''}`, placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
}, [0, "ir-textarea", {
        "rows": [2],
        "cols": [2],
        "text": [1],
        "label": [1],
        "placeholder": [1],
        "value": [1],
        "maxLength": [2, "max-length"],
        "textareaClassname": [1, "textarea-classname"],
        "error": [32]
    }, undefined, {
        "aria-invalid": ["handleAriaInvalidChange"]
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