import { r as registerInstance, h } from './index-e7294bf2.js';

const IrTextArea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rows = 3;
        this.cols = 5;
        this.text = '';
        this.label = '<label>';
        this.placeholder = '<placeholder>';
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("div", { key: 'c53063c0342c42403ef47a612c5001394014864b', class: "form-group" }, h("label", { key: 'bd0ee2473db2499fb6ba4b2cb7ee5366c37786e0' }, this.label), h("textarea", { key: '7cd4984c081219c725de00f1a243111bc5b142d7', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

export { IrTextArea as ir_textarea };

//# sourceMappingURL=ir-textarea.entry.js.map