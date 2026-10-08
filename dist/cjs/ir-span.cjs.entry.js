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
        return (index.h("span", { key: '5d908a51b094f3ae9b1e687e33f0d17b9041aa63' }, this.text));
    }
};

exports.ir_span = IrSpan;
