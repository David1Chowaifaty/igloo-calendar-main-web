'use strict';

var index = require('./index-Bp205iz4.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '3a799503ae0f59992760af38d130c2cab8b9f85c' }, this.text));
    }
};

exports.ir_span = IrSpan;
