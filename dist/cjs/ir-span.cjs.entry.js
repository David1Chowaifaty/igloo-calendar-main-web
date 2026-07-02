'use strict';

var index = require('./index-DYQrLNin.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '89b1260f94a0c6a3d357e8f48403c5b11fdb37aa' }, this.text));
    }
};

exports.ir_span = IrSpan;
