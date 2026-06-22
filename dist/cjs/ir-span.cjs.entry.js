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
        return (index.h("span", { key: '2c546706619ba0644868337957aff73a6c6f454a' }, this.text));
    }
};

exports.ir_span = IrSpan;
