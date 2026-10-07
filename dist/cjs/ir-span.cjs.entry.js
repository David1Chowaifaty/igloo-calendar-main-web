'use strict';

var index = require('./index-CQkpA5n3.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '5510d5ce767be1327076a6a90260310254329d39' }, this.text));
    }
};

exports.ir_span = IrSpan;
