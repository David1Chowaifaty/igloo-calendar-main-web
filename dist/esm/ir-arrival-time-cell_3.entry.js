import { r as registerInstance, h, H as Host, F as Fragment } from './index-Nexq2OjX.js';
import { _ as _formatTime } from './functions-81yL-Vms.js';
import { h as hooks } from './moment-Mki5YqAR.js';

const irArrivalTimeCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}`;

const IrArrivalTimeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: 'c5854b4ea94a505f03caafdfa2eec2eeaaf7d440' }, h("div", { key: '8524e259d49b8baa7744c82f8d1cc6feae05530e', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '0c2a9973aacc501704204084b568093fdc5a8bbc', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: 'a91cc5357127d5f3cf33d51cca88d04d362ffe16' }, this.arrival?.description))));
    }
};
IrArrivalTimeCell.style = irArrivalTimeCellCss();

const irBookedOnCellCss = () => `.sc-ir-booked-on-cell-h{box-sizing:border-box !important}.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::before,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-on-cell{display:none !important}.sc-ir-booked-on-cell-h{display:flex;flex-direction:column;text-align:center;width:fit-content;font-size:0.93rem}[display='inline'].sc-ir-booked-on-cell-h{display:flex;gap:0.5rem;flex-direction:row;align-items:center;text-align:center}.cell-label.sc-ir-booked-on-cell{font-weight:700}@media (min-width: 1024px){.booked-on-cell__time.sc-ir-booked-on-cell{font-size:0.875rem}}`;

const IrBookedOnCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    display = 'block';
    bookedOn;
    label;
    showTime = true;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: '068a626ae5a2223a1e1af07d06dcd41fc2f117c4' }, this.label && h("p", { key: '39cadb897e598d931ff3c9dcb15d58f18586fded', class: "cell-label" }, this.label, ":"), h("p", { key: '3051877d00dd33cd47cb1e04bf1dad3c8e760394', class: "booked-on-cell__date" }, hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), this.showTime && h("p", { key: 'ba9ae09e7e749c2d26bb568df45869ed3a9cf5b8', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

const irStatusActivityCellCss = () => `.sc-ir-status-activity-cell-h{box-sizing:border-box !important}.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::before,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-status-activity-cell{display:none !important}.sc-ir-status-activity-cell-h{display:block;font-size:0.93rem}.status-activity__manipulation.sc-ir-status-activity-cell{color:var(--wa-color-danger)}.status-activity__modified.sc-ir-status-activity-cell,.status-activity__manipulation.sc-ir-status-activity-cell{font-size:0.875rem}`;

const IrStatusActivityCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    isRequestToCancel;
    status;
    showModifiedBadge;
    showManipulationBadge;
    lastManipulation;
    bookingNumber;
    render() {
        return (h(Host, { key: 'efae17967132aeca8c584b0b614e6f1dff6d90ad' }, h("ir-booking-status-tag", { key: '1cb18d3c1f56c28ae16879fadb58ca9c281968c6', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '9db0793ef81889543ff1ce196e22ea4d4c08fe7d', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '689beb6dd3994c74629d5cf7dc748db052d826c6' }, h("wa-tooltip", { key: '9a3b3b750cc3434dae75c2ecb6b6ef0cbe22c914', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: 'b482ef973f0d010fc8bf2737c55ddfc38b0f7109', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell, IrStatusActivityCell as ir_status_activity_cell };
