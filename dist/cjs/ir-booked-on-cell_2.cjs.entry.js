'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const functions = require('./functions-1d46da3c.js');
const moment = require('./moment-1780b03a.js');

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
        return (index.h(index.Host, { key: '6e963561eac87fcda3138113f4d2d202a1e57209' }, this.label && index.h("p", { key: 'c8c7f8f099da14c30b8d62928c65e0b17c77e31d', class: "cell-label" }, this.label, ":"), index.h("p", { key: 'c12449e49b8265e68c8c1dd6c7b5acc6888c175e', class: "booked-on-cell__date" }, moment.hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), index.h("p", { key: '00edf9c7d81c9cdd311f2f25271fae5347a21ceb', class: "booked-on-cell__time" }, functions._formatTime(hour.toString(), minute.toString()))));
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
        return (index.h(index.Host, { key: '6488c00e756d16e0d08918a5bacca7a9279b8222' }, index.h("ir-booking-status-tag", { key: '32a5306d37ea483f1d0ded65ad2ba3ea69371f69', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && index.h("p", { key: '722408e8e05df57ab6bc7c597e05ca1a65881e97', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (index.h(index.Fragment, { key: '45d2ac7415ba0de737790cf5ee04e41f166eeb66' }, index.h("wa-tooltip", { key: '03cd9dbf84b5cb78b390e0bd0d8927a1ea268726', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), index.h("p", { key: '52993321154a13fa092d7bb29290ce234a60ab42', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = IrStatusActivityCellStyle0;

exports.ir_booked_on_cell = IrBookedOnCell;
exports.ir_status_activity_cell = IrStatusActivityCell;

//# sourceMappingURL=ir-booked-on-cell_2.cjs.entry.js.map