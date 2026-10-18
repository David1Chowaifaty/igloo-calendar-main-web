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
        return (index.h("span", { key: 'b20760075a857b73a71c4eea0c8a4ae9fa9b5184' }, this.text));
    }
};

exports.ir_span = IrSpan;
