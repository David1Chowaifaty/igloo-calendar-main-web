'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const functions = require('./functions-337ee2a2.js');
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
        return (index.h(index.Host, { key: '71effb90b3317937c68d46af4cb61da9e4c80b09' }, index.h("div", { key: '59eb894fcd1914b106494c77e6d68f10baf79895', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && index.h("span", { key: 'f3d0890bc2aa9c3f843d6ebd41b37ee345abca8b', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), index.h("p", { key: '5253230425965b343c22b14d5c4210a3d33bf8e8' }, this.arrival?.description))));
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
        return (index.h(index.Host, { key: '90bb7fe0b66744f1fb6310def9e57b77a03c0402' }, this.label && index.h("p", { key: '08736162cd9fafc81c17bda725d17790abdb94c0', class: "cell-label" }, this.label, ":"), index.h("p", { key: '7b065a37a022266d2debb398c431f052eb186e59', class: "booked-on-cell__date" }, moment.hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), index.h("p", { key: 'a79285316f63843d141d43115b5f055ad6121eda', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
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
        return (index.h(index.Host, { key: '74e0707791ac4551cc0361050c5678a464ba9240' }, index.h("ir-booking-status-tag", { key: '4ef4ebf525297d233fe73a2d8ebe9e94a677b078', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: '6494680633753fdd05ccda1c6577340cab19ec54', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (index.h(index.Fragment, { key: 'a89e9220fb959c8b3ed148cba23a103e266c5e26' }, index.h("wa-tooltip", { key: '1e3b183485c8c5e4609e48da1aef668ea6295365', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), index.h("p", { key: '4660292bbdb1e0c71074d1cf2a02c429eaf3a0bb', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = IrStatusActivityCellStyle0;

exports.ir_arrival_time_cell = IrArrivalTimeCell;
exports.ir_booked_on_cell = IrBookedOnCell;
exports.ir_status_activity_cell = IrStatusActivityCell;

//# sourceMappingURL=ir-arrival-time-cell_3.cjs.entry.js.map