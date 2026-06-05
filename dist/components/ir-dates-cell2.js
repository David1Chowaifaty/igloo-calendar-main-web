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
        return (h(Host, { key: '099695572dbde1dcbf53fcb857e064d1219fd57f' }, h("div", { key: 'd975b61aa407e8f7eb92e8e29c63ee4e807d097a', class: "date-cell__container" }, this.checkInLabel && h("span", { key: 'd0f310e2a63f54e01ab2e00f79aa2d7af044caf4', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '8cc297bc4e7e291d0c44dbbe8b0b90f141853396', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: 'e44125dab1d8a5ee2b04aac9b9f82d8616a59f5a', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '8f3b9fc2a8ee0a7f221531995e11b9061647c803', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: 'fcc3a05b6ee028721fd1f3db8d6915c5f481277f', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
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