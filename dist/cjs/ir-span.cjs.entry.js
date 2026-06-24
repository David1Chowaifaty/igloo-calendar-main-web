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
        return (index.h("span", { key: '549fad7cc1f3fe2e774a400f38e0075cbce96acd' }, this.text));
    }
};

exports.ir_span = IrSpan;
