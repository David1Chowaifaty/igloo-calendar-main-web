'use strict';

var index = require('./index-CJa_TWt0.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: 'c83e3927c31cfeb1f818a9b4a5088327c65f77a0' }, this.text));
    }
};

exports.ir_span = IrSpan;
