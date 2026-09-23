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
        return (index.h("span", { key: 'db46a326ae88bf4cd4d9e0c1ec6b3cb088043d5b' }, this.text));
    }
};

exports.ir_span = IrSpan;
