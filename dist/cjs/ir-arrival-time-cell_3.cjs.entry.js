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
        return (index.h(index.Host, { key: 'f878fc401c4b0116987d54f83cbcdd5c3a22b64c' }, index.h("div", { key: 'c62159c6896ef3aa80b8d590a915ce5fb9e9efde', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && index.h("span", { key: '4b8bb774bc53a448ed98c52afbb45d47eb92e6e7', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), index.h("p", { key: '35d5636629dd3d179d7b6f5124ac53d12ba47a03' }, this.arrival?.description))));
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
        return (index.h(index.Host, { key: 'c60b2083e41c3292bcc280998816b4eae4df72dc' }, this.label && index.h("p", { key: '1180734b07ef6485ec655ecd91cb9235254d79d5', class: "cell-label" }, this.label, ":"), index.h("p", { key: '6349600d28a84060e33bc0d5ff5e4e9c21a631ff', class: "booked-on-cell__date" }, moment.hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), index.h("p", { key: '43d8ac7f4ffaf7dc612ad75e070adf832b918e56', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
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
        return (index.h(index.Host, { key: '2bef8ebe29d72055879420b47389e001f780ca1a' }, index.h("ir-booking-status-tag", { key: 'c74d705bbfee792d041db05c001502cad208e8cb', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: '5ab05f47f53d316a39883338cfde43d3671fdd30', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (index.h(index.Fragment, { key: 'bdb7fc8bc28c5eae13eed50a3a96d55649b388d2' }, index.h("wa-tooltip", { key: 'e8c71c24f8a02470f8b60634157b56e5805e138b', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), index.h("p", { key: '2f962330ad259d50b0cb941b2a65c1a08eef7a74', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = IrStatusActivityCellStyle0;

exports.ir_arrival_time_cell = IrArrivalTimeCell;
exports.ir_booked_on_cell = IrBookedOnCell;
exports.ir_status_activity_cell = IrStatusActivityCell;

//# sourceMappingURL=ir-arrival-time-cell_3.cjs.entry.js.map