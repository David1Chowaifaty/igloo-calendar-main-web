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
        return (index.h("span", { key: 'b5bd48276bcb573408412ec64834b843a0c6e3bb' }, this.text));
    }
};

exports.ir_span = IrSpan;
