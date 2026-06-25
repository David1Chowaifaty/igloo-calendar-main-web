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
        return (index.h("span", { key: '3f5ba7ac1b30cce0c0eb2b9431d03cb440f49198' }, this.text));
    }
};

exports.ir_span = IrSpan;
