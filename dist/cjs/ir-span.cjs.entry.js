'use strict';

var index = require('./index-jMqrfjaT.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '4433e42c64181d0c35a8c2e9c935af73216546c1' }, this.text));
    }
};

exports.ir_span = IrSpan;
