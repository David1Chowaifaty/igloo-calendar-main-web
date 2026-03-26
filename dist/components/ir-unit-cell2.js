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
    showDeparture = false;
    render() {
        return (h(Host, { key: '63f57e172b42a575a0289426d5cd51c8b1abdfc2' }, h("p", { key: '2d632c31ca5692e3b55427e0a6f037f64edd9e24' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '1be3f84f7e4d5a2fe63547b7d2ed4be55a2f757b', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: '14c8e8c0b039b83918a84632c9114f7276f91130' }, this.room?.departure_time?.description)));
    }
    static get style() { return IrUnitCellStyle0; }
}, [2, "ir-unit-cell", {
        "room": [16],
        "showDeparture": [4, "show-departure"]
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