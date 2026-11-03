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
        return (index.h("span", { key: '581857b880888c090753baf70900821cd8a875af' }, this.text));
    }
};

exports.ir_span = IrSpan;
