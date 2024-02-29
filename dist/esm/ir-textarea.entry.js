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
        return (h("div", { key: 'f572c8e876838219db6d0109b65b79c2d9d33964', class: "form-group" }, h("label", { key: '79658ca23c91fe860b89829fdea6ecca6a187063' }, this.label), h("textarea", { key: '641be748515179626dc978b7918d8145f6c9e636', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

export { IrTextArea as ir_textarea };

//# sourceMappingURL=ir-textarea.entry.js.map