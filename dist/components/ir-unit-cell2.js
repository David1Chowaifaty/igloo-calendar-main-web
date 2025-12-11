import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irUnitCellCss = ".sc-ir-unit-cell-h{box-sizing:border-box !important}.sc-ir-unit-cell-h *.sc-ir-unit-cell,.sc-ir-unit-cell-h *.sc-ir-unit-cell::before,.sc-ir-unit-cell-h *.sc-ir-unit-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-unit-cell{display:none !important}.sc-ir-unit-cell-h{display:flex;align-items:center;gap:0.5rem;font-size:0.93rem}";
const IrUnitCellStyle0 = irUnitCellCss;

const IrUnitCell = /*@__PURE__*/ proxyCustomElement(class IrUnitCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    room;
    render() {
        return (h(Host, { key: '1dcc7225d14321fcb57534892104655a1de03a01' }, h("p", { key: '0e65f8767c29a8bf4c9fac7c7bee5386d891c1e9' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: 'e6294d1e093b51af55a2b5f7972c8932d0c9a535', unit: this.room.unit.name })));
    }
    static get style() { return IrUnitCellStyle0; }
}, [2, "ir-unit-cell", {
        "room": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-unit-cell", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-unit-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUnitCell);
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrUnitCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-unit-cell2.js.map