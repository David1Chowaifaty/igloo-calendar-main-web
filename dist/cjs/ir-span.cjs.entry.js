'use strict';

var index = require('./index-OzksjAXP.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '02b24caee9caab8d50e9190f47477333ead525e3' }, this.text));
    }
};

exports.ir_span = IrSpan;
