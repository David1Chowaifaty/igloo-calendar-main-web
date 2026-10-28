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
        return (index.h("span", { key: '98f6b0fd32cc161391c5cd207d76234eefadbf98' }, this.text));
    }
};

exports.ir_span = IrSpan;
