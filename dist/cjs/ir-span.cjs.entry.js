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
        return (index.h("span", { key: '189b766679683e05533e76f1d143aca3524a55b1' }, this.text));
    }
};

exports.ir_span = IrSpan;
