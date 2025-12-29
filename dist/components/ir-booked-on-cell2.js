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
        return (h(Host, { key: '5387062b7aa909183f7071eb69a1d84f06561619' }, this.label && h("p", { key: '236133817304c2dabb91e8d9b97afad5cacd13b4', class: "cell-label" }, this.label, ":"), h("p", { key: 'adf7b625a15aef8be43a1f6bdd387edc52275170', class: "booked-on-cell__date" }, hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '847243e4e3c2e032ee3034322452c641f8fc82d0', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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