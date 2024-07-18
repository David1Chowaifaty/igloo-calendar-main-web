import { r as registerInstance, h } from './index-d2ec0a5d.js';

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
        return (h("div", { key: '6e95ed5924220ad553b17b00f7945d6d9f9b40ee', class: "form-group" }, h("label", { key: '6d6774aeb9f50ee77678aad31c9cd9c103d5e47f' }, this.label), h("textarea", { key: 'cdb1e104eb19e2a59a393de5ccde6389319b6a06', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

export { IrTextArea as ir_textarea };

//# sourceMappingURL=ir-textarea.entry.js.map