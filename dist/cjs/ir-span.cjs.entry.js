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
        return (index.h("span", { key: '26b60adadc20180e4a08c8bf5b66ca8d33b05dbb' }, this.text));
    }
};

exports.ir_span = IrSpan;
