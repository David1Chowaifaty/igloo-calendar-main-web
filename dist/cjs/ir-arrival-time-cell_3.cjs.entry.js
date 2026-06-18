'use strict';

var index = require('./index-CJ0kc5p1.js');
var functions = require('./functions-mvRDRfzA.js');
var moment = require('./moment-CdViwxPQ.js');

const irArrivalTimeCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}`;

const IrArrivalTimeCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (index.h(index.Host, { key: 'e9e12c0f8ddad6c367d1c00f75583795d1a1f4a2' }, index.h("div", { key: '1cc23662111a15b0a7b32edb38311958e5edf890', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && index.h("span", { key: '86a75d82b12ca36b03ca1c3d768a4b47698bc616', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), index.h("p", { key: '5eb657a6a3c05700a0f8d50849ccb0be3073c248' }, this.arrival?.description))));
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
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (index.h(index.Host, { key: '8e49e0b3cdd74a02d6220e5bc7bf60bce275848d' }, this.label && index.h("p", { key: '781e5812fe12e54fbc41b2dbe4663d7d4218e0f7', class: "cell-label" }, this.label, ":"), index.h("p", { key: '7547f3d31f087930d5c2e15e5d67c7457a68fb09', class: "booked-on-cell__date" }, moment.hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), index.h("p", { key: 'f0bb5979996c8a5592bec58dde4686db03bf1e9c', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

const irStatusActivityCellCss = () => `.sc-ir-status-activity-cell-h{box-sizing:border-box !important}.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::before,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-status-activity-cell{display:none !important}.sc-ir-status-activity-cell-h{display:block;font-size:0.93rem}.status-activity__manipulation.sc-ir-status-activity-cell{color:var(--wa-color-danger)}.status-activity__modified.sc-ir-status-activity-cell,.status-activity__manipulation.sc-ir-status-activity-cell{font-size:0.875rem}`;

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
        return (index.h(index.Host, { key: 'e9245a9bbc9174a67b6371e11c12c4eca5d831f0' }, index.h("ir-booking-status-tag", { key: '0872c6280e3f4f68d38518280c62fcdeb657228c', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: '6d9033bca563eb80f4a2de97579f3e29d86a8858', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (index.h(index.Fragment, { key: '8f58c701e8f7ec1efe7b8a44fe838b3662c31cd1' }, index.h("wa-tooltip", { key: 'e8c619fc1240d40437a6083f0010da22fd9fd0fb', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), index.h("p", { key: '973cfe38adf13500c40298bda2ec874b20ac052e', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

exports.ir_arrival_time_cell = IrArrivalTimeCell;
exports.ir_booked_on_cell = IrBookedOnCell;
exports.ir_status_activity_cell = IrStatusActivityCell;
