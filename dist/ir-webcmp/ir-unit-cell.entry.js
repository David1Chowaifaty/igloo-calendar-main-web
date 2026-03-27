import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';

const irUnitCellCss = ".sc-ir-unit-cell-h{box-sizing:border-box !important}.sc-ir-unit-cell-h *.sc-ir-unit-cell,.sc-ir-unit-cell-h *.sc-ir-unit-cell::before,.sc-ir-unit-cell-h *.sc-ir-unit-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-unit-cell{display:none !important}.sc-ir-unit-cell-h{display:flex;align-items:center;gap:0.5rem;font-size:0.93rem}";

const IrUnitCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    room;
    showDeparture = false;
    render() {
        return (h(Host, { key: 'e219c1b7fd371cfe13eb648cf450f76de1b1e216' }, h("p", { key: '50a2723b1c448b4a4cad6410d4bb0ac01e987bf7' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: 'e14c6b279cbe9cfdb5bb5be0b4815abae14b899f', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: '61ad3ed273f26716f6a74c98e04e74bc2cac9cdd' }, this.room?.departure_time?.description)));
    }
};
IrUnitCell.style = irUnitCellCss;

export { IrUnitCell as ir_unit_cell };

//# sourceMappingURL=ir-unit-cell.entry.js.map