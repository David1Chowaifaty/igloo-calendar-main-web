'use strict';

var index = require('./index-IDeZZwEK.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '2ff098c00b4cc389296b52eb4f95de5186443f14' }, this.text));
    }
};

exports.ir_span = IrSpan;
