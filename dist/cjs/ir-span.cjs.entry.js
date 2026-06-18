'use strict';

var index = require('./index-CJ0kc5p1.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '053f5f14ac35a751edea2cf155d2c87692616d70' }, this.text));
    }
};

exports.ir_span = IrSpan;
