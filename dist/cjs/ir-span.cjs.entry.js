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
        return (index.h("span", { key: '7b469176e2ceee54c3e8b499bbd9ac00bc9758a0' }, this.text));
    }
};

exports.ir_span = IrSpan;
