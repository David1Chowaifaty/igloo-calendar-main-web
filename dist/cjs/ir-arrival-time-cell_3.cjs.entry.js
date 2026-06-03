'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const functions = require('./functions-9552a026.js');
const moment = require('./moment-1780b03a.js');

const irArrivalTimeCellCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}";
const IrArrivalTimeCellStyle0 = irArrivalTimeCellCss;

const IrArrivalTimeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (index.h(index.Host, { key: 'ec389374fef5ccea8ee2309b5da6e722ed9abb79' }, index.h("div", { key: 'b2242531c55bbe857986da5fb3eef62072f1bb57', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && index.h("span", { key: '1d7d8aa9a7c28a9a5f01c0af1fafb10565e8f3a5', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), index.h("p", { key: '974cb552d0ed77f019517ec548a3ad38a24d9b9c' }, this.arrival?.description))));
    }
};
IrArrivalTimeCell.style = IrArrivalTimeCellStyle0;

const irBookedOnCellCss = ".sc-ir-booked-on-cell-h{box-sizing:border-box !important}.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::before,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-on-cell{display:none !important}.sc-ir-booked-on-cell-h{display:flex;flex-direction:column;text-align:center;width:fit-content;font-size:0.93rem}[display='inline'].sc-ir-booked-on-cell-h{display:flex;gap:0.5rem;flex-direction:row;align-items:center;text-align:center}.cell-label.sc-ir-booked-on-cell{font-weight:700}@media (min-width: 1024px){.booked-on-cell__time.sc-ir-booked-on-cell{font-size:0.875rem}}";
const IrBookedOnCellStyle0 = irBookedOnCellCss;

const IrBookedOnCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    bookedOn;
    label;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (index.h(index.Host, { key: '05f56a9f4987073081eb627ce3429f072bee6d31' }, this.label && index.h("p", { key: '62b0496147184f2ffe1a013bf8d999830a44e7b5', class: "cell-label" }, this.label, ":"), index.h("p", { key: '4e5c3fa1b6cd698d15bc4a672330bc462107c6ca', class: "booked-on-cell__date" }, moment.hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), index.h("p", { key: '69359c7158647f941cec78905d1a8a3dbf783853', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = IrBookedOnCellStyle0;

const irStatusActivityCellCss = ".sc-ir-status-activity-cell-h{box-sizing:border-box !important}.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::before,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-status-activity-cell{display:none !important}.sc-ir-status-activity-cell-h{display:block;font-size:0.93rem}.status-activity__manipulation.sc-ir-status-activity-cell{color:var(--wa-color-danger)}.status-activity__modified.sc-ir-status-activity-cell,.status-activity__manipulation.sc-ir-status-activity-cell{font-size:0.875rem}";
const IrStatusActivityCellStyle0 = irStatusActivityCellCss;

const IrStatusActivityCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    isRequestToCancel;
    status;
    showModifiedBadge;
    showManipulationBadge;
    lastManipulation;
    bookingNumber;
    render() {
        return (index.h(index.Host, { key: '0fbd6e59da8491e6babb1ed2326131c9fc0fd281' }, index.h("ir-booking-status-tag", { key: '77f916e43a47fd5882dfbcc991066252d7b1312d', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: '93bc624f623c0c9ea211fcf747645e9a3a6ee1dc', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (index.h(index.Fragment, { key: '903c6e5054150904afab48bbd1589ce2314059bd' }, index.h("wa-tooltip", { key: 'e3adef78d34854b0c690e7c6b72da0acf4782cd1', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), index.h("p", { key: '01711f364f1f80dc0ca089cb012f7f81d82aab7b', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = IrStatusActivityCellStyle0;

exports.ir_arrival_time_cell = IrArrivalTimeCell;
exports.ir_booked_on_cell = IrBookedOnCell;
exports.ir_status_activity_cell = IrStatusActivityCell;

//# sourceMappingURL=ir-arrival-time-cell_3.cjs.entry.js.map