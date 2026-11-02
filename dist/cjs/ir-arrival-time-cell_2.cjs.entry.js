'use strict';

var index = require('./index-IDeZZwEK.js');
var functions = require('./functions-CaNAUyCw.js');
var irDate = require('./ir-date-CbkOKs2C.js');
require('./moment-CdViwxPQ.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irArrivalTimeCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}`;

const IrArrivalTimeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (index.h(index.Host, { key: 'c46608320fab24ff6551931b5afd705aba770915' }, index.h("div", { key: '8fd736559184ab491f2e58d57c6215337055fcb6', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && index.h("span", { key: '7dd2d93da23d89572075368b82543e78057488b5', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), index.h("p", { key: 'a607b71391789f9496d521db7c26c271b4c88970' }, this.arrival?.description))));
    }
};
IrArrivalTimeCell.style = irArrivalTimeCellCss();

const irBookedOnCellCss = () => `.sc-ir-booked-on-cell-h{box-sizing:border-box !important}.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::before,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-on-cell{display:none !important}.sc-ir-booked-on-cell-h{display:flex;flex-direction:column;text-align:center;width:fit-content;font-size:0.93rem}[display='inline'].sc-ir-booked-on-cell-h{display:flex;gap:0.5rem;flex-direction:row;align-items:center;text-align:center}.cell-label.sc-ir-booked-on-cell{font-weight:700}@media (min-width: 1024px){.booked-on-cell__time.sc-ir-booked-on-cell{font-size:0.875rem}}`;

const IrBookedOnCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    bookedOn;
    label;
    showTime = true;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (index.h(index.Host, { key: 'ec34ecc0d2131e26e9b4a85024ebfda991c5f70c' }, this.label && index.h("p", { key: '38169675cf1c2926a6fcba3f7a3fc142cb41e40c', class: "cell-label" }, this.label, ":"), index.h("p", { key: '6c9342bbdb86332e681742bc6de5cc221d63a97c', class: "booked-on-cell__date" }, irDate.formatDate(date, 'DD MMM YYYY')), this.showTime && index.h("p", { key: '5154596e44b0735ba3a7f8a94e1c8fe9d277726f', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

exports.ir_arrival_time_cell = IrArrivalTimeCell;
exports.ir_booked_on_cell = IrBookedOnCell;
