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
        return (index.h("span", { key: '5bb25dac3d648a263762950903050f7f8b353b41' }, this.text));
    }
};

exports.ir_span = IrSpan;
