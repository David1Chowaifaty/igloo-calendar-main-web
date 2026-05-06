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
        return (h(Host, { key: 'e742c9c010a2b62e11a432c6842beae69aac0391' }, h("div", { key: '37585ac4cc86b5e4aab47a7dd8cdb875fc5675e3', class: "date-cell__container" }, this.checkInLabel && h("span", { key: 'e26f5a8bf3e1b744e939cd50210e5a48d6c3e11c', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: 'da7a75b77edc37f0bf7fb8e563663689346d36ba', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: 'def43d6174cb2de2adde5bfe44165e2d71f722fc', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '1bfd524882c3a7af5b6f695de9f69b32e6723fad', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: 'dd4f45f10a715818ac24767206ef2b996ce491ed', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
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