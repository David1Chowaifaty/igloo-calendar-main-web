import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';
import { _ as _formatTime } from './functions-Bw7dbbaF.js';
import { f as formatDate } from './ir-date-XXNYhmSL.js';
import './moment-Mki5YqAR.js';
import './utils-BBOkGbMg.js';
import './calendar-data-DknGMMFc.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-DGwE7ON6.js';
import './type-9FR4Ndkd.js';
import './types-CB66a07H.js';
import './calendar-dates-D3hVfsrC.js';
import './t-Bvz1wS_D.js';
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
        return (h(Host, { key: '992f1b97596c08c35fc9afd9d79e259a82a10b98' }, h("div", { key: '5e51c1ccfbd80ef3173f37a5136ac7154d1000cc', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '033ddfff29edb727fd4c42caf53de163678a16e5', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '6a6e66dd2612a82d5205c08d1b52d1a0ecd8e8d6' }, this.arrival?.description))));
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
        return (h(Host, { key: '965a488f06db269fce167d820ae9575b3c8ebb70' }, this.label && h("p", { key: 'bfa40320283e031603bb157ee221d5fa1d6704de', class: "cell-label" }, this.label, ":"), h("p", { key: '9ed1e8debb83b17572b330c9c1879a4075f52c0b', class: "booked-on-cell__date" }, formatDate(date, 'DD MMM YYYY')), this.showTime && h("p", { key: 'd7d1f03f5233ad2196664eb50fb965536d1fc568', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell };
