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
        return (index.h("span", { key: '681b60f24fab99a183ef02f01ff2b1d394710dfd' }, this.text));
    }
};

exports.ir_span = IrSpan;
