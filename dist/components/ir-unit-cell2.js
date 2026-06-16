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
        return (h(Host, { key: '941a52bcbf741f21f801e6ceaa2cb9f524b5094c' }, h("p", { key: '67a9aa164b2ce928322cccba63521690bd9b359f' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '27dc2bd589d96e012a39b8985af115b662a674e5', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: '5f7950bee0024ad34a68214bda8ffb00c0271e66' }, this.room?.departure_time?.description)));
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