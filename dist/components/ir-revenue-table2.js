import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-revenue-row2.js';
import { d as defineCustomElement$1 } from './ir-revenue-row-details2.js';

const irRevenueTableCss = ".sc-ir-revenue-table-h{overflow-x:hidden;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-revenue-table-h *.sc-ir-revenue-table{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.revenue-table__header.sc-ir-revenue-table{box-sizing:border-box;background:#ececec;color:#374151;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:space-between;padding-bottom:1rem}.revenue-table__title-section.sc-ir-revenue-table p.sc-ir-revenue-table{font-size:1rem;font-weight:600}.revenue-table__date-picker-icon.sc-ir-revenue-table{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}";
const IrRevenueTableStyle0 = irRevenueTableCss;

const IrRevenueTable = /*@__PURE__*/ proxyCustomElement(class IrRevenueTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.fetchNewReports = createEvent(this, "fetchNewReports", 7);
        this.payments = new Map();
    }
    componentWillLoad() {
        let pt = {};
        this.payTypes.forEach(p => {
            pt = Object.assign(Object.assign({}, pt), { [p.CODE_NAME]: p.CODE_VALUE_EN });
        });
        this.payTypesObj = pt;
    }
    render() {
        return (h("div", { key: '1ced62b0f82ade0b7d3d1fca1631061dc24e97ce', class: "card p-1 revenue-table__table" }, h("div", { key: 'fd82cf5c88446a00f8e5d158c674dda6f7b1885b', class: 'revenue-table__title-section' }, h("p", { key: '365207bcc83a6e323e17074a9ead908395c3e6bb', class: "m-0 p-0" }, "Payment transactions"), h("div", { key: '556414eecada046f7c45f566ac864d0c1d209c35', class: "" }, h("ir-date-picker", { key: '7eb1aae967771251a416f16dc75478a06d343cda', "data-testid": "pickup_date", date: this.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.fetchNewReports.emit((_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD'));
            } }, h("div", { key: 'd2463d1217ea9ad7e371e67b5915a340e0b7cd17', slot: "trigger", class: "revenue-table__date-picker" }, h("div", { key: 'd361ca2264a0c40d17de779e1638faace705f0de', class: "revenue-table__date-picker-icon" }, h("ir-icons", { key: '33ea455c5261b16fa37a250779190d7d111eff94', name: "calendar", style: { '--icon-size': '1rem' } })), h("input", { key: '57a8f1af3356956f64bce243172357a32c624f05', type: "text", value: this === null || this === void 0 ? void 0 : this.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-center`, style: { width: '100%' } }))))), this.payments.size > 0 ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, "Method"), h("p", null, "Amount")), Array.from(this.payments.entries()).map(([key, p]) => {
            return h("ir-revenue-row", { key: key, payments: p, groupName: this.payTypesObj[key] });
        }))) : (h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
    static get style() { return IrRevenueTableStyle0; }
}, [2, "ir-revenue-table", {
        "payments": [16],
        "payTypes": [16],
        "date": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-revenue-table", "ir-button", "ir-date-picker", "ir-icons", "ir-revenue-row", "ir-revenue-row-details"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-revenue-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRevenueTable);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-revenue-row":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-revenue-row-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRevenueTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-revenue-table2.js.map