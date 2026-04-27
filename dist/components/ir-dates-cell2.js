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
        return (h(Host, { key: '8c3ae3eb72b799a1e8d886f175efd76f40ae212a' }, h("div", { key: '41ce9211e67341f276a34351cc7f3a1b44b07e96', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '8b0b9db4a948ae82f71432655c00aaa8cea2021e', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: 'e8d7ecc2d7d8f77888244278830a6046fa6db5f2', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: 'f0c2fe65ccc2db9a75cdb19530c378afde983db9', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '606fc57ea384c3657712caa2a72f6fdebd268d7e', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: '1ab8987e89f02268f1c77593f3d07e983011eb08', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
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