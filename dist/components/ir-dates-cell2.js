import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';

const irDatesCellCss = ".sc-ir-dates-cell-h{box-sizing:border-box !important}.sc-ir-dates-cell-h *.sc-ir-dates-cell,.sc-ir-dates-cell-h *.sc-ir-dates-cell::before,.sc-ir-dates-cell-h *.sc-ir-dates-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-dates-cell{display:none !important}.sc-ir-dates-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-dates-cell-h{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container.sc-ir-dates-cell{display:flex;align-items:center;gap:0.25rem}.date-cell__label.sc-ir-dates-cell{font-weight:700}";
const IrDatesCellStyle0 = irDatesCellCss;

const IrDatesCell = /*@__PURE__*/ proxyCustomElement(class IrDatesCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    display = 'block';
    checkIn;
    checkOut;
    checkInLabel;
    checkoutLabel;
    overdueCheckin;
    overdueCheckout;
    formatDate(date) {
        return hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY');
    }
    render() {
        return (h(Host, { key: '5ff8c600fe7e05b685f76398b93ad516c4421061' }, h("div", { key: 'd8c2a754c15da89015c5b8d0930da5f4f68ee337', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '7dd097ed8e89eaea9201583f8262482b8003d9c9', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '3cd782aad0fe9b8b3346830f951fc4d103cc838d', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: 'f7731e723a0701cffd79e36d41d989f438f683c2', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '9f8956c301a09e5ce1a7d9a9941801c2148a7716', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: '0fbb6857454ee9d85015fe8b8b5fa01bf365728b', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
    static get style() { return IrDatesCellStyle0; }
}, [2, "ir-dates-cell", {
        "display": [513],
        "checkIn": [1, "check-in"],
        "checkOut": [1, "check-out"],
        "checkInLabel": [1, "check-in-label"],
        "checkoutLabel": [1, "checkout-label"],
        "overdueCheckin": [4, "overdue-checkin"],
        "overdueCheckout": [4, "overdue-checkout"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-dates-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-dates-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDatesCell);
            }
            break;
    } });
}

export { IrDatesCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-dates-cell2.js.map