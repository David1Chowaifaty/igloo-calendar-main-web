'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3eb932d8.js');

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
        return (index.h("div", { key: '07e7a42b4e07a39c3a06e0342e7b6cb11182a3af', class: "form-group" }, index.h("label", { key: '0e1336de2ec8abd7b1a13d97ed9b3ddb3ae7bad6' }, this.label), index.h("textarea", { key: 'be9c4bced786e6f12f0a91d9c7ec7014898e366f', rows: this.rows, class: "form-control", placeholder: this.placeholder })));
    }
};

exports.ir_textarea = IrTextArea;

//# sourceMappingURL=ir-textarea.cjs.entry.js.map