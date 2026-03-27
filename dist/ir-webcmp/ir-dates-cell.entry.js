import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';
import { h as hooks } from './moment-ab846cee.js';

const irDatesCellCss = ".sc-ir-dates-cell-h{box-sizing:border-box !important}.sc-ir-dates-cell-h *.sc-ir-dates-cell,.sc-ir-dates-cell-h *.sc-ir-dates-cell::before,.sc-ir-dates-cell-h *.sc-ir-dates-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-dates-cell{display:none !important}.sc-ir-dates-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-dates-cell-h{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container.sc-ir-dates-cell{display:flex;align-items:center;gap:0.25rem}.date-cell__label.sc-ir-dates-cell{font-weight:700}";

const IrDatesCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'a52dd58efe37249ebed43d47318bff9222d9e925' }, h("div", { key: '7b100b35d7a5718aa8513dee767cfcbb945b396e', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '1955a93abcd19d0e35b56bcc27334f5d9d639f0a', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '2a76f962ab27612d10671ac2ac17ccb4c4b02142', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: '0a8c59be9331a5a7f1c705dd1d5a26de8702d8ff', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '47e62b740b0be2889860c7211b0deee5571f28b7', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: '52a7f7e0ee525bbd4eb7040bac95edb4a7b18ea2', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = irDatesCellCss;

export { IrDatesCell as ir_dates_cell };

//# sourceMappingURL=ir-dates-cell.entry.js.map