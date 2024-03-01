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
        return (index.h("div", { key: 'cc95217a051d89cfe9e4b38bb91a64339b9c5d1c', class: "form-group" }, index.h("label", { key: '6666b7bafcfe12b3e26d7181e0ccbd18817e18e0' }, this.label), index.h("textarea", { key: '777e00e4b9cae20b7f272c6eacf1e8e58def2d96', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

exports.ir_textarea = IrTextArea;

//# sourceMappingURL=ir-textarea.cjs.entry.js.map