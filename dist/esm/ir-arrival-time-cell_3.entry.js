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
        return (h(Host, { key: 'fb33615697dcfbb8803ce39472928537e5736da6' }, h("div", { key: 'adeabd99453f88167415aa5e1947de7759232fa2', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '2b4efdf774279e3bfad352f6c90d3c2f7e9eceee', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '7040bda489b1df42eef4b151fa20b102bda7b05f' }, this.arrival?.description))));
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
        return (h(Host, { key: 'b5f452f0b07c416fa50efe3ff5c3971c97bc359f' }, this.label && h("p", { key: '1f087199a35c5650e3cfd3aaf8279b53d0c8e0bb', class: "cell-label" }, this.label, ":"), h("p", { key: '1e0121b54aa201c61e3b1f3d770d84aafb541a9f', class: "booked-on-cell__date" }, hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '3b2194e231697a045484ec41ef4beee56d92f985', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
        return (h(Host, { key: 'db7cc1420ecaa3fb2f7c6bcf34228810205ad542' }, h("ir-booking-status-tag", { key: '3b29e8f61c8a616e1418aeeebb8416e68e3068c4', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '4ecc136d7eabcd834069865ab2ceef58993b5504', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: 'ba51754bbacf5620911672721938c51af45631ff' }, h("wa-tooltip", { key: '7c173144b9e122e50ef7508ac86adc66ee4574f2', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: 'cdee1e553cd2c392a14127609718cfb80dcdbae4', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = IrStatusActivityCellStyle0;

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell, IrStatusActivityCell as ir_status_activity_cell };

//# sourceMappingURL=ir-arrival-time-cell_3.entry.js.map