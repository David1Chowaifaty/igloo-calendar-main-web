'use strict';

var index = require('./index-Bg4VKYKR.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: 'b9514b59347be881a118bc1eb524cec317bc54d0' }, this.text));
    }
};

exports.ir_span = IrSpan;
