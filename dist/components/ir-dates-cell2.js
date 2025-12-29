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
        return (h(Host, { key: '1b21ecf1c04b92bdbc3f823c0b4786f07124f19c' }, h("div", { key: '632d12e6c9c32c923ed73f6aff9045b403c7d7c0', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '67953cf12535319a864e3b77cabd2d4106cd9e94', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '45a72085a153649ab7fb9c480c98ed0b5166386d', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: '95fe913c915489c1c08fd6e476d17563b11be256', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: 'b1996921683cf5a8eb1584152e1a225b4f892f71', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: 'bce0aca022e7c62d606ff72ee51eda51e92cea62', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
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