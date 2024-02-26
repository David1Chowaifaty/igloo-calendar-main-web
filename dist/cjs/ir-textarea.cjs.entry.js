'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-07a1d3e6.js');

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
        return (index.h("div", { key: '90ace70e7e16fefb047884fae240adccacea9bad', class: "form-group" }, index.h("label", { key: '8081b54620a4baf45eb16c17a6b3f82a7631c268' }, this.label), index.h("textarea", { key: '4e5a5f6942952ec34bf1bb0888c45dede92c00b2', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

exports.ir_textarea = IrTextArea;

//# sourceMappingURL=ir-textarea.cjs.entry.js.map