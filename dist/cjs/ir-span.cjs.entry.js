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
        return (index.h("span", { key: '4abcdd820f9e9678068229920663ab4f0eafe720' }, this.text));
    }
};

exports.ir_span = IrSpan;
