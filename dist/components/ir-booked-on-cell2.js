import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { _ as _formatTime } from './functions.js';
import { h as hooks } from './moment.js';

const irBookedOnCellCss = ".sc-ir-booked-on-cell-h{box-sizing:border-box !important}.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::before,.sc-ir-booked-on-cell-h *.sc-ir-booked-on-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-on-cell{display:none !important}.sc-ir-booked-on-cell-h{display:flex;flex-direction:column;text-align:center;width:fit-content;font-size:0.93rem}[display='inline'].sc-ir-booked-on-cell-h{display:flex;gap:0.5rem;flex-direction:row;align-items:center;text-align:center}.cell-label.sc-ir-booked-on-cell{font-weight:700}@media (min-width: 1024px){.booked-on-cell__time.sc-ir-booked-on-cell{font-size:0.875rem}}";
const IrBookedOnCellStyle0 = irBookedOnCellCss;

const IrBookedOnCell = /*@__PURE__*/ proxyCustomElement(class IrBookedOnCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    display = 'block';
    bookedOn;
    label;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: 'e0640a5f95364bf5a981c9150c613d25eeca934d' }, this.label && h("p", { key: 'c47aa43a0712fdd2ec0b2f81218f3e8766ddb264', class: "cell-label" }, this.label, ":"), h("p", { key: '1e590de5f379a1b9cb9e2df65ee17fe578ea0d39', class: "booked-on-cell__date" }, hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '368f52c72bcd274a3f8f4f8d6734feae88400aec', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
    }
    static get style() { return IrBookedOnCellStyle0; }
}, [2, "ir-booked-on-cell", {
        "display": [513],
        "bookedOn": [16],
        "label": [1]
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