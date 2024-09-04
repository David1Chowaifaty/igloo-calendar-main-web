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
        return (h("div", { key: '91c39c0911e323c2e495e54b58d0fad4db4afdd3', class: 'form-group' }, h("label", { key: 'a074c0f9d8fa3f5c4288ac31d816da243f23cc88' }, this.label), h("textarea", { key: '1d543a64c5c1892fc2e3bfe2ef913afe12efdc7a', maxLength: this.maxLength, rows: this.rows, value: this.value, class: `form-control ${this.textareaClassname} ${this.error ? 'border-danger' : ''}`, placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
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