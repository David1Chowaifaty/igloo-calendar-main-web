'use strict';

var index = require('./index-CJ0kc5p1.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '568ae554946b4c96a9f160ffd699309debce88d1' }, this.text));
    }
};

exports.ir_span = IrSpan;
