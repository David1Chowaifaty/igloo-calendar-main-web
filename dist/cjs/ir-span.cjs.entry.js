'use strict';

var index = require('./index-DYQrLNin.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '4bcd06e219768adc85ac9237b98b94e533e8cd69' }, this.text));
    }
};

exports.ir_span = IrSpan;
