'use strict';

var index = require('./index-P5Mginch.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: '25f8b192077b5e82227740b666da5234e4c125cf' }, this.text));
    }
};

exports.ir_span = IrSpan;
