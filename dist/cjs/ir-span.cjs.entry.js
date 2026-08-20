'use strict';

var index = require('./index-DgHWBwDV.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: 'cead0f4027c0e633c7d4d4b95c944adf6541c631' }, this.text));
    }
};

exports.ir_span = IrSpan;
