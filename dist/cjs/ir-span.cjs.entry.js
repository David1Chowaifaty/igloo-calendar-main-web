'use strict';

var index = require('./index-D8WscJxs.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '9b5ce99b3baf681c1b13ba2ea16c2aa6baf830bb' }, this.text));
    }
};

exports.ir_span = IrSpan;
