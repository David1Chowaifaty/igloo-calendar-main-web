import { r as registerInstance, h, H as Host, F as Fragment } from './index-CeHdrJeH.js';
import { _ as _formatTime } from './functions-8ZwUpUDk.js';
import { f as formatDate } from './ir-date-NNCOayR_.js';
import './moment-Mki5YqAR.js';
import { t } from './t-BVYK64UG.js';
import { c as formatNumber } from './number-D2n6n8dr.js';
import './locale-scope-CapRuPkM.js';
import './language-observer-CHgzsZkY.js';
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
        return (h(Host, { key: '6b546ea2b80a3f3c69b0c3878aee7187015147a1' }, h("div", { key: '11d696fbf99cd5b33c4a56dbefba2fb6c7d269c5', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '1bcee57c471a051a41555f903ad5522172fb9908', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '362cb249ddda36250f0d0ff0087dd2140ea4c1eb' }, this.arrival?.description))));
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
        return (h(Host, { key: '5027ea32c92094b383e887e801d6b101412d9ccb' }, this.label && h("p", { key: '4854cb723942161cbd83cf34368c4178afada242', class: "cell-label" }, this.label, ":"), h("p", { key: '2e7945cbbc9a895ede564a4f831afb423fbc7dc6', class: "booked-on-cell__date" }, formatDate(date, 'DD MMM YYYY')), this.showTime && h("p", { key: '8a505d039fa6e8664c415805c3e7883687a22333', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
        return (h(Host, { key: '193048572f0a8309159006cac7ebd256221d6234' }, h("ir-booking-status-tag", { key: '6b24a2047720a0001c61038db71e8e2d21570aa8', status: this.status, isRequestToCancel: this.isRequestToCancel }), this.showModifiedBadge && h("p", { key: 'e4ef7f5a4f448feb5c25ac3a45d387b66406b39b', class: "status-activity__modified" }, t('Lcz_Modified', { fallback: 'Modified' })), this.showManipulationBadge && (h(Fragment, { key: '7ca66521bfac57129281e7831cbdcc8513b88dab' }, h("wa-tooltip", { key: '24d215df4ef4fa04b47215781aff4126a711e5b2', for: `manipulation_badge_${this.bookingNumber}` }, t('Lcz_ModifiedByTooltip', {
            fallback: 'Modified by %1 at %2 %3:%4',
            params: [
                this.lastManipulation.user,
                formatDate(this.lastManipulation.date, 'MMM DD, YYYY'),
                formatNumber(Number(this.lastManipulation.hour), { minimumIntegerDigits: 2, useGrouping: false }),
                formatNumber(Number(this.lastManipulation.minute), { minimumIntegerDigits: 2, useGrouping: false }),
            ],
        })), h("p", { key: '07f9a93d733186bae6dc28f7025eadaf348b96e8', class: "status-activity__manipulation", id: `manipulation_badge_${this.bookingNumber}` }, t('Lcz_Modified', { fallback: 'Modified' }))))));
    }
};
IrStatusActivityCell.style = irStatusActivityCellCss();

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell, IrStatusActivityCell as ir_status_activity_cell };
