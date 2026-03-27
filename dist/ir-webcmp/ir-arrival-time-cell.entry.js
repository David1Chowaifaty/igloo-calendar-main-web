import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';

const irArrivalTimeCellCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.arrival-time-cell__container{display:flex;align-items:center;gap:0.25rem}.arrival-time-cell__label{font-weight:700}";

const IrArrivalTimeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    display = 'block';
    arrival;
    arrivalTimeLabel;
    render() {
        return (h(Host, { key: 'f40c191a976b1dbab57ef7c937b9a332c930db6f' }, h("div", { key: 'bc95e13cb63e6848ee6759e17534c37e54935001', class: "arrival-time-cell__container" }, this.arrivalTimeLabel && h("span", { key: '0f4f8e66374ec915f9a75da48f76eea1adac371b', class: "arrival-time-cell__label" }, this.arrivalTimeLabel, ": "), h("p", { key: 'cc2550378f9ecfe5563f3ae024ddd2ac6ec23b80' }, this.arrival?.description))));
    }
};
IrArrivalTimeCell.style = irArrivalTimeCellCss;

export { IrArrivalTimeCell as ir_arrival_time_cell };

//# sourceMappingURL=ir-arrival-time-cell.entry.js.map