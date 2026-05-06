import { r as registerInstance, h, H as Host, F as Fragment } from './index-7e96440e.js';
import { _ as _formatTime } from './functions-a2d88561.js';
import { h as hooks } from './moment-ab846cee.js';

const irArrivalTimeCellCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}";
const IrArrivalTimeCellStyle0 = irArrivalTimeCellCss;

const IrArrivalTimeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: 'b5903b80142567c45868750321447360a2586d50' }, h("div", { key: 'a067b81af302ce881516c632ed30565efb580f60', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: 'faa65f26cdab4c3b35e399e02cc19219ef6dd4d4', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '5a19fc78a927dea2948f265caffd09bc806daf28' }, this.arrival?.description))));
    }
};
IrArrivalTimeCell.style = IrArrivalTimeCellStyle0;

const irBookedOnCellCss = ".sc-ir-booked-on-cell-h{box-sizing:border-box !important}.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::before,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-on-cell{display:none !important}.sc-ir-booked-on-cell-h{display:flex;flex-direction:column;text-align:center;width:fit-content;font-size:0.93rem}[display='inline'].sc-ir-booked-on-cell-h{display:flex;gap:0.5rem;flex-direction:row;align-items:center;text-align:center}.cell-label.sc-ir-booked-on-cell{font-weight:700}@media (min-width: 1024px){.booked-on-cell__time.sc-ir-booked-on-cell{font-size:0.875rem}}";
const IrBookedOnCellStyle0 = irBookedOnCellCss;

const IrBookedOnCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    display = 'block';
    bookedOn;
    label;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: 'bb90adceb90515a310507951f5fd13bcee90a311' }, this.label && h("p", { key: 'ef02e1cdee66bf1ce19e15243ad63339f8bb3285', class: "cell-label" }, this.label, ":"), h("p", { key: 'fa8845052d3c8371591f23f718745a2e23c63118', class: "booked-on-cell__date" }, hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: 'ea569efa961d3663dd4d89829b313e215964e086', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = IrBookedOnCellStyle0;

const irStatusActivityCellCss = ".sc-ir-status-activity-cell-h{box-sizing:border-box !important}.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::before,.sc-ir-status-activity-cell-h *.sc-ir-status-activity-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-status-activity-cell{display:none !important}.sc-ir-status-activity-cell-h{display:block;font-size:0.93rem}.status-activity__manipulation.sc-ir-status-activity-cell{color:var(--wa-color-danger)}.status-activity__modified.sc-ir-status-activity-cell,.status-activity__manipulation.sc-ir-status-activity-cell{font-size:0.875rem}";
const IrStatusActivityCellStyle0 = irStatusActivityCellCss;

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
        return (h(Host, { key: '57f7390d7701be41720c576a1860c0f4d2c848fb' }, h("ir-booking-status-tag", { key: '66de07727f7bf5db5a375785e91f0e113a7f1978', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '4dd110e20e12d45d2bb616e88a584e05d0762cc9', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '965992a8b548ac1acfb21d35eb79200e67b917dd' }, h("wa-tooltip", { key: 'c3d8d58fa82f4440f34b8b691b993fd22fa5ad9d', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: '85735b050f29d9e33fe588c55df67ef2dc1381fc', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = IrStatusActivityCellStyle0;

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell, IrStatusActivityCell as ir_status_activity_cell };

//# sourceMappingURL=ir-arrival-time-cell_3.entry.js.map