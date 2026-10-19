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
        return (index.h("span", { key: 'fc7768a8073da889d9456c8a976d9b072f1ffb77' }, this.text));
    }
};

exports.ir_span = IrSpan;
