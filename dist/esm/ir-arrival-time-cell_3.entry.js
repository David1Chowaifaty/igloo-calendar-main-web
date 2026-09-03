import { r as registerInstance, h, H as Host, F as Fragment } from './index-BYqrdgY9.js';
import { _ as _formatTime } from './functions-DdLUcNoJ.js';
import { f as formatDate } from './ir-date-BT3QqYg6.js';
import './moment-Mki5YqAR.js';
import './index-CimhgHoX.js';
import './locales.store-C9qsbKR0.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irArrivalTimeCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}`;

const IrArrivalTimeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: '94b37c7a5c5545bb8861b0fd47e35c88a618bdb2' }, h("div", { key: '94cfad2bb13f156cbc90515de8b03ffab00378d4', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '7c8569c287cad2f1f677cfaf8a4b5451e4a123be', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '36659bcf9fe158218962815d65754668399ee925' }, this.arrival?.description))));
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
        return (h(Host, { key: '9a3231a7c345459e1801d501ae20d5113d90c72d' }, this.label && h("p", { key: 'c1df0d7db3e8a6f4ca0580358b8576477fa77e2b', class: "cell-label" }, this.label, ":"), h("p", { key: 'da028227eb24c02ec7ea391181ccb0e1c60cdb56', class: "booked-on-cell__date" }, formatDate(date, 'DD MMM YYYY')), this.showTime && h("p", { key: '8fbef679ccd7adea522ea68f7195f3cb87f22d99', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
        return (h(Host, { key: 'a0ec006ff6818739b9e0b007de1ac6d4e4b21966' }, h("ir-booking-status-tag", { key: 'd4f569f168f216af77c64e56c99f0a71e98f8fdb', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '338f8d63076c09b0d48307e6aff46f04bd1d9bb5', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '9e033a8ebb5f2f8b4b695c026930b87e665303f6' }, h("wa-tooltip", { key: 'f74208a52d166a7225d4d855197ac13975bb570d', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: '910fd4b557842907f900967cc7d8f953ad839d4c', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell, IrStatusActivityCell as ir_status_activity_cell };
