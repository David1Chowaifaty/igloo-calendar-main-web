'use strict';

var index = require('./index-DN8J4ULi.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: 'b7ce82ba6537ed316616149f226ac2fbe642508e' }, this.text));
    }
};

exports.ir_span = IrSpan;
