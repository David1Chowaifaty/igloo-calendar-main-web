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
        return (index.h("span", { key: '74a59f5aae375a46c25b5c8392df6346fe58aecf' }, this.text));
    }
};

exports.ir_span = IrSpan;
