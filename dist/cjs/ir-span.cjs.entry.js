'use strict';

var index = require('./index-P5Mginch.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '8f3375d90e8a0bac7a4cb3531613684d693be6a9' }, this.text));
    }
};

exports.ir_span = IrSpan;
