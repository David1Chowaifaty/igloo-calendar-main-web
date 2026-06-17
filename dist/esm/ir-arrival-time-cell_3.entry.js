import { r as registerInstance, h, H as Host, F as Fragment } from './index-DF2__fQU.js';
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
        return (h(Host, { key: '61ce602d68ec89694719b17d2781ab8477f73089' }, h("div", { key: '3ae59f188bd7a9b004cfb4b51d554f29eca0df61', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '4cea2a97d7c6c22060380fcf3fd595b67063f357', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '5c1205720a7a845d9a5b37cdf20703c495aa5919' }, this.arrival?.description))));
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
        return (h(Host, { key: 'aecfeda542793ff4b95f0aa586b6eef7add9d62c' }, this.label && h("p", { key: '7d5999764fbe295d3b1fa369000fa4daa91276ad', class: "cell-label" }, this.label, ":"), h("p", { key: 'c44fe223766e92d2914ed3dc5387fa95f936052f', class: "booked-on-cell__date" }, hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '18057155dd0922d75f9653c1ce824d3ac58c3ad4', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
        return (h(Host, { key: 'f58f49aa78fa55667917060a72a7693480394e24' }, h("ir-booking-status-tag", { key: '45328044f0cf38470971d213772b0aa065f394c3', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: '7cf986a84e37986a44962a4bfbeccdaf972a2ea0', class: "status-activity__modified" }, "Modified"), this.showManipulationBadge && (h(Fragment, { key: '1b1dab55332d7ddf28064b45e61398935363ec89' }, h("wa-tooltip", { key: '065950638235eb134190669c1a99010a71e861f6', for: `manipulation_badge_${this.bookingNumber}` }, `Modified by ${this.lastManipulation.user} at ${this.lastManipulation.date} ${this.lastManipulation.hour}:${this.lastManipulation.minute}`), h("p", { key: '764fd56bbfa1afe6d98134ed158e55429d6915fa', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, "Modified")))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell, IrStatusActivityCell as ir_status_activity_cell };
