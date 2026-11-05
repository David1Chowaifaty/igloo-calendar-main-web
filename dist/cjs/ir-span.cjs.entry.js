'use strict';

var index = require('./index-IDeZZwEK.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '4a290957a918bee5418f4ec316bdfee4dcd70b3e' }, this.text));
    }
};

exports.ir_span = IrSpan;
