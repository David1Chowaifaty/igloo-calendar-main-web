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
        return (index.h(index.Host, { key: '39c75e1270d1a62dfc8b3dcb545467b3b221b340' }, index.h("div", { key: '88e18c44b40959e0f14272e1522b5f20a825f013', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && index.h("span", { key: '8ceee2d4058368777509915c2864007241981809', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), index.h("p", { key: '4a689a88746415b4dfc318394659f569ad6a9bf8' }, this.arrival?.description))));
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
        return (index.h(index.Host, { key: '922e8d76bb03fa9e483564b6659898b66553e028' }, this.label && index.h("p", { key: '051ea162187eb34d14bf034016811a5043c4f99c', class: "cell-label" }, this.label, ":"), index.h("p", { key: '8e251736e628b735b6261371044058fcfddbf9b1', class: "booked-on-cell__date" }, irDate.formatDate(date, 'DD MMM YYYY')), this.showTime && index.h("p", { key: '1d53d10fc407afafc3e221310dfd5c2c99580810', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

exports.ir_arrival_time_cell = IrArrivalTimeCell;
exports.ir_booked_on_cell = IrBookedOnCell;
