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
        return (h(Host, { key: 'fa7bd872fcc2660227f01b1e24fd9c45a7df78ea' }, h("div", { key: 'baf9c8feac147574c3e213114d4aa991ecdb911f', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '3a4b021728adf48ff4732541921fa1b78f617f26', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '900e8826f2d2a764230f903bb5e3d1e3f22a7df1' }, this.arrival?.description))));
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
        return (h(Host, { key: '0450efcbe0202aedd80a74283f7933e47c1f037e' }, this.label && h("p", { key: 'ca9572eb06e5c10a6593cd4faf67420bf9f93998', class: "cell-label" }, this.label, ":"), h("p", { key: 'a71e18bf5baed8f34085ab63a1d8a7a08b6dfeef', class: "booked-on-cell__date" }, hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '15a9eecaf08888f00323e06c034f40e0cd47b999', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
        return (h(Host, { key: '5d615c1d35cab18db00d865ab15e19ba544d4dd7' }, h("ir-booking-status-tag", { key: '3f35cd9ac1e502f0e863b732114509a8ec960d83', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: 'b38e709b6467e1324b8b7f760d6aa6e0f42cf2eb', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: 'f5594067f034dc1358bd94acb200ab0781ec05a8' }, h("wa-tooltip", { key: 'b3c614bbd6492dd0c284e096182fe4d2eb7b205e', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: '1aab1593463aa3c54b750f0fa48940dcc9c0c819', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = IrStatusActivityCellStyle0;

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell, IrStatusActivityCell as ir_status_activity_cell };

//# sourceMappingURL=ir-arrival-time-cell_3.entry.js.map