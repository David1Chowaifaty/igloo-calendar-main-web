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
        return (index.h("span", { key: '29fa43c664e18e43c25944e5491c165d4402e552' }, this.text));
    }
};

exports.ir_span = IrSpan;
