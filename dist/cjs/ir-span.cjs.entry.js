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
        return (index.h("span", { key: 'a9c0d1756e4595d1ea0ed6c6971854d3f113b098' }, this.text));
    }
};

exports.ir_span = IrSpan;
