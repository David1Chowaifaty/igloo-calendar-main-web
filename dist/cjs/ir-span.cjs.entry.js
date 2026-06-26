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
        return (index.h("span", { key: '172e0d47bea0060b69bab715f58cb0eec02d0c8a' }, this.text));
    }
};

exports.ir_span = IrSpan;
