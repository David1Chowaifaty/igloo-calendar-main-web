'use strict';

var index = require('./index-CQkpA5n3.js');

const irGuestNameCellCss = () => `.sc-ir-guest-name-cell-h{box-sizing:border-box !important}.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::before,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-guest-name-cell{display:none !important}.sc-ir-guest-name-cell-h{display:block;font-size:0.93rem}`;

const IrGuestNameCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    name;
    render() {
        return (index.h(index.Host, { key: '9f4ad64c18fa97846d9f6e28cc56aef50360037c' }, this.name.first_name, " ", this.name.last_name));
    }
};
IrGuestNameCell.style = irGuestNameCellCss();

exports.ir_guest_name_cell = IrGuestNameCell;
