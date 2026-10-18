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
        return (index.h(index.Host, { key: 'db6f3f2448472a7654194fc8a83a72760d39bf62' }, index.h("div", { key: 'c1882b40d04a55a10484e5d3a165eb593fc19c46', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && index.h("span", { key: 'fb875820d3901bf07a4947fcf08b850cc7feb170', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), index.h("p", { key: '20be6e71ec7f8e4895dbc16579fa7088d9c3aa6d' }, this.arrival?.description))));
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
        return (index.h(index.Host, { key: 'c9c65382228c1cf494011e5b13c781ab667d61b7' }, this.label && index.h("p", { key: 'cd2c7dd621bd5b39a5f2156b2fc807bf49a1afc7', class: "cell-label" }, this.label, ":"), index.h("p", { key: 'e861b7aada154d36c3f6c0f1a1439ac63cde5b81', class: "booked-on-cell__date" }, irDate.formatDate(date, 'DD MMM YYYY')), this.showTime && index.h("p", { key: '63688b856ebe7b47dbfa75f38d03a96c4a5213c9', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

exports.ir_arrival_time_cell = IrArrivalTimeCell;
exports.ir_booked_on_cell = IrBookedOnCell;
