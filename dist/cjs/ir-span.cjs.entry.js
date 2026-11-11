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
        return (index.h("span", { key: 'bf54a8915d635521281312d09d5610e6c6e89b0e' }, this.text));
    }
};

exports.ir_span = IrSpan;
