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
        return (h(Host, { key: 'c46608320fab24ff6551931b5afd705aba770915' }, h("div", { key: '8fd736559184ab491f2e58d57c6215337055fcb6', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '7dd2d93da23d89572075368b82543e78057488b5', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: 'a607b71391789f9496d521db7c26c271b4c88970' }, this.arrival?.description))));
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
        return (h(Host, { key: 'ec34ecc0d2131e26e9b4a85024ebfda991c5f70c' }, this.label && h("p", { key: '38169675cf1c2926a6fcba3f7a3fc142cb41e40c', class: "cell-label" }, this.label, ":"), h("p", { key: '6c9342bbdb86332e681742bc6de5cc221d63a97c', class: "booked-on-cell__date" }, formatDate(date, 'DD MMM YYYY')), this.showTime && h("p", { key: '5154596e44b0735ba3a7f8a94e1c8fe9d277726f', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
    }
};
IrBookedOnCell.style = irBookedOnCellCss();

export { IrArrivalTimeCell as ir_arrival_time_cell, IrBookedOnCell as ir_booked_on_cell };
