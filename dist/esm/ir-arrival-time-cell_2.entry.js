import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';
import { _ as _formatTime } from './functions-Ebyqqazo.js';
import { f as formatDate } from './ir-date-XXNYhmSL.js';
import './moment-Mki5YqAR.js';
import './locale-scope-Jre4lb6k.js';
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
        return (h(Host, { key: '49c74ed26f0a00bba52053b7e48fceabd733b5a7' }, h("div", { key: '50b302cdd0bc3fad6f0a52caaf7b450734fc9655', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: 'edf7c68be5251c2c6bd32cad180427a6ec22e72e', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: '0539bdf85f51d076f769ecf08e43657fc25ab6a6' }, this.arrival?.description))));
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
        return (h(Host, { key: 'eee28cd88ca4ae30af3b2e2f1dacd903f4f8e7ed' }, this.label && h("p", { key: 'c49d648aac2d09dd77dd2dccdecc16146a33e5fe', class: "cell-label" }, this.label, ":"), h("p", { key: '02649ecd97a5d2eaf351db0a8171fef0b3e4ad2d', class: "booked-on-cell__date" }, formatDate(date, 'DD MMM YYYY')), this.showTime && h("p", { key: '229fd335789d4197d72cac63b278a90e5c1f9a38', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell };
