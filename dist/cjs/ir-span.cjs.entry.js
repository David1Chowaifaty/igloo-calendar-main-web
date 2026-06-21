'use strict';

var index = require('./index-DYQrLNin.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: 'd3d1f941c043ce8bb40d409f2826e8bd53fffe62' }, this.text));
    }
};

exports.ir_span = IrSpan;
