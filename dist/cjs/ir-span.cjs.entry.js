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
        return (index.h("span", { key: '99b5dd3617b137167ccbe09b0fdc22b61ae9a68a' }, this.text));
    }
};

exports.ir_span = IrSpan;
