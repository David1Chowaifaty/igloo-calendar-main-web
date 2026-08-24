'use strict';

var index = require('./index-DgHWBwDV.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '02dc9e163e07ae921f92962d9888f212fe32843a' }, this.text));
    }
};

exports.ir_span = IrSpan;
