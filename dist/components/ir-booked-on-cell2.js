import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as _formatTime } from './functions.js';
import { h as hooks } from './moment.js';

const irBookedOnCellCss = ".sc-ir-booked-on-cell-h{box-sizing:border-box !important}.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::before,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-on-cell{display:none !important}.sc-ir-booked-on-cell-h{display:flex;flex-direction:column;align-items:center}.booked-on-cell__time.sc-ir-booked-on-cell{font-size:0.875rem}";
const IrBookedOnCellStyle0 = irBookedOnCellCss;

const IrBookedOnCell = /*@__PURE__*/ proxyCustomElement(class IrBookedOnCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    bookedOn;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: '1945ab030d0baaffc51b19980246b513aabb4df4' }, h("p", { key: '6530cb13bab5377c83df4191ac2af7853f757b99', class: "booked-on-cell__date" }, hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '949184390e752ccd549209b5fa661c8eb77d7999', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
    }
    static get style() { return IrBookedOnCellStyle0; }
}, [2, "ir-booked-on-cell", {
        "bookedOn": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booked-on-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booked-on-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookedOnCell);
            }
            break;
    } });
}

export { IrBookedOnCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-booked-on-cell2.js.map