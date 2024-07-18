'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-caa79d4b.js');

const IrTextArea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.rows = 3;
        this.cols = 5;
        this.text = '';
        this.label = '<label>';
        this.placeholder = '<placeholder>';
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("div", { key: '6e95ed5924220ad553b17b00f7945d6d9f9b40ee', class: "form-group" }, index.h("label", { key: '6d6774aeb9f50ee77678aad31c9cd9c103d5e47f' }, this.label), index.h("textarea", { key: 'cdb1e104eb19e2a59a393de5ccde6389319b6a06', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

exports.ir_textarea = IrTextArea;

//# sourceMappingURL=ir-textarea.cjs.entry.js.map