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
        return (index.h("span", { key: 'ab3659119a15e4d13e27cd96f8c50d03462656fe' }, this.text));
    }
};

exports.ir_span = IrSpan;
