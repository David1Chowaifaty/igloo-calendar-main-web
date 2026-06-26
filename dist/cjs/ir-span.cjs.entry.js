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
        return (index.h("span", { key: 'ee1f3de58d7ded75dae797c36463f2046f0ca5e3' }, this.text));
    }
};

exports.ir_span = IrSpan;
