'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-009c7daa.js');

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
        return (index.h("div", { key: 'f248ba8eefa2c85fa4dd5ce934344782d861255d', class: "form-group" }, index.h("label", { key: '7af7d2c32b24da27f00bdfc6caeeca9bf7be1680' }, this.label), index.h("textarea", { key: '08cd8d745a17cbb575790ceb0e9364a7d35f06f6', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

exports.ir_textarea = IrTextArea;

//# sourceMappingURL=ir-textarea.cjs.entry.js.map