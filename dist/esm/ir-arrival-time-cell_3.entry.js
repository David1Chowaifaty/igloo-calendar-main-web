import { r as registerInstance, h, H as Host, F as Fragment } from './index-D7D7fhZS.js';
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
        return (h(Host, { key: '0319c8ceb5dcfbc5b93340ffa030b6a7e4426481' }, h("div", { key: 'ff1878842263538e7e24c00cd28044ddf3a286c2', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '6e8f9f733f6aab4f2bb06a76f8f18b4902854f93', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: 'd615b5f6959ff76435589e512a404c235508734c' }, this.arrival?.description))));
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
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: '5bc7dcd93fe28a5e73eba25fdfe18ed65d290ce5' }, this.label && h("p", { key: '67e9b125099ef7386a52c2652b1c6c2b3e7b01ba', class: "cell-label" }, this.label, ":"), h("p", { key: 'dbeedd40401fbade4a8ca2be4955949ba8786d93', class: "booked-on-cell__date" }, hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: 'a6d5d0c31ed8c356563f6b07d358b7614ab3892e', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
        return (h(Host, { key: 'f044753abc1e6024ce5205fe6edbc3b2fcfff479' }, h("ir-booking-status-tag", { key: 'c87cee85cf464d5c9b6fc0cd2a2343a7c4c1a3d6', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: 'ec19b3ef6f3f2a2e003655baeb02853485434b72', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: 'e081950cd3521c4a1c46659dd055ef46f0206de3' }, h("wa-tooltip", { key: '48ceb0b0d8461686cb7a732e5a3025b358732ecb', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: '7391c8f8b4ff2f865d631ed8c8af23cd58e9ebaf', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell, IrStatusActivityCell as ir_status_activity_cell };
