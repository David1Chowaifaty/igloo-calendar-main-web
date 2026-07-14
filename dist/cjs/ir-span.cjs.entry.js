'use strict';

var index = require('./index-Du1V06mp.js');

const IrSpan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (index.h("span", { key: 'cb401cc005bd8a3ace4ed122b879f6bf80d55cd9' }, this.text));
    }
};

exports.ir_span = IrSpan;
