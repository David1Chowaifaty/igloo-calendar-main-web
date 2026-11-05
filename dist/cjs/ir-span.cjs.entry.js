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
        return (index.h("span", { key: '42e94a17f486e90b67662c2b3a7c40e683336310' }, this.text));
    }
};

exports.ir_span = IrSpan;
