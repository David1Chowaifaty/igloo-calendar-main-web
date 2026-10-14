'use strict';

var index = require('./index-IDeZZwEK.js');

const irArrivalTimeCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}`;

const IrArrivalTimeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (index.h(index.Host, { key: '61fbd18058e9a6c9ee2ffca59aa62c0bf7635821' }, index.h("div", { key: '166207f5f4c0e75ea545309563a467ee629a720b', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && index.h("span", { key: 'eae090b238a5fcdf42fba4e76200eecd8b732a93', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), index.h("p", { key: 'e9ce14904c6ad431b86a975d13af7c67d7094b1a' }, this.arrival?.description))));
    }
};
IrArrivalTimeCell.style = irArrivalTimeCellCss();

exports.ir_arrival_time_cell = IrArrivalTimeCell;
