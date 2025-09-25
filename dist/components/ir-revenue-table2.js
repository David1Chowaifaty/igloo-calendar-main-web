import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$5 } from './ir-accordion2.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-revenue-row2.js';
import { d as defineCustomElement$1 } from './ir-revenue-row-details2.js';

const irRevenueTableCss = ".sc-ir-revenue-table-h{overflow-x:hidden;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-revenue-table-h *.sc-ir-revenue-table{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table{background:#ececec;color:#374151}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__method_header.sc-ir-revenue-table{color:black}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}@media (min-width: 1024px){.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{width:100%;justify-content:flex-start}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child{width:calc(40vw + 1.375rem + 0.5rem + 1rem)}}";
const IrRevenueTableStyle0 = irRevenueTableCss;

const IrRevenueTable = /*@__PURE__*/ proxyCustomElement(class IrRevenueTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.payments = new Map();
        this.groupType = 'method';
    }
    componentWillLoad() {
        const buildPaymentLookup = (key) => {
            let pt = {};
            this.paymentEntries[key].forEach(p => {
                pt = Object.assign(Object.assign({}, pt), { [p.CODE_NAME]: p.CODE_VALUE_EN });
            });
            return pt;
        };
        this.payTypesObj = buildPaymentLookup('types');
        this.payMethodObj = buildPaymentLookup('methods');
    }
    /**
     * Groups payments by method, then by type.
     * - Never throws on bad input (null/undefined, non-Map, malformed keys, non-array values).
     * - Keys are parsed defensively; unknown parts fall back to "UNKNOWN".
     */
    regroupPaymentsByMethod() {
        var _a, _b;
        const result = new Map();
        // Early return on empty/invalid source
        const src = this.payments;
        if (!(src instanceof Map) || src.size === 0)
            return result;
        // Helper: parse "TYPE_METHOD" into [type, method] safely
        const parseKey = (key) => {
            if (typeof key !== 'string')
                return ['UNKNOWN', 'UNKNOWN'];
            // Allow extra underscores on the method side: TYPE_METHOD_WITH_UNDERSCORES
            const [type, ...rest] = key.split('_');
            const method = rest.join('_');
            const safeType = (type && type.trim()) || 'UNKNOWN';
            const safeMethod = (method && method.trim()) || 'UNKNOWN';
            return [safeType, safeMethod];
        };
        for (const [rawKey, rawList] of src.entries()) {
            const [paymentType, paymentMethod] = parseKey(rawKey);
            // Normalize value to a clean array of FolioPayment
            const list = Array.isArray(rawList) ? rawList.filter(Boolean) : [];
            // Skip silently if nothing to add
            if (list.length === 0) {
                // Still ensure the buckets exist so consumers can rely on them if needed
                if (!result.has(paymentMethod))
                    result.set(paymentMethod, new Map());
                if (!result.get(paymentMethod).has(paymentType)) {
                    result.get(paymentMethod).set(paymentType, []);
                }
                continue;
            }
            const typeMap = (_a = result.get(paymentMethod)) !== null && _a !== void 0 ? _a : new Map();
            const existing = (_b = typeMap.get(paymentType)) !== null && _b !== void 0 ? _b : [];
            typeMap.set(paymentType, existing.concat(list));
            result.set(paymentMethod, typeMap);
        }
        return result;
    }
    render() {
        const hasPayments = this.payments instanceof Map && this.payments.size > 0;
        return (h("div", { key: 'a8e5abdc940cb4dca967b11224123ee9647ba8d6', class: "card p-1 revenue-table__table" }, hasPayments ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, "Method"), h("p", null, "Amount")), this.groupType === 'type' &&
            Array.from(this.payments.entries()).map(([key, list]) => {
                var _a, _b, _c;
                const [paymentType, paymentMethod] = key.split('_');
                const groupName = PAYMENT_TYPES_WITH_METHOD.includes(paymentType)
                    ? `${(_a = this.payTypesObj[paymentType]) !== null && _a !== void 0 ? _a : paymentType}: ${(_b = this.payMethodObj[paymentMethod]) !== null && _b !== void 0 ? _b : paymentMethod}`
                    : (_c = this.payTypesObj[paymentType]) !== null && _c !== void 0 ? _c : paymentType;
                return h("ir-revenue-row", { key: key, payments: list, groupName: groupName });
            }), this.groupType === 'method' &&
            Array.from(this.regroupPaymentsByMethod().entries()).flatMap(([methodKey, byType]) => {
                var _a;
                const total = Array.from(byType.entries()).reduce((prev, [_, list]) => prev + list.reduce((p, c) => p + c.amount, 0), 0);
                return (h("div", { key: `method_${methodKey}` }, h("div", { class: "revenue-table__method_header" }, h("p", null, (_a = this.payMethodObj[methodKey]) !== null && _a !== void 0 ? _a : methodKey), h("p", null, formatAmount(calendar_data.currency.symbol, total))), Array.from(byType.entries()).map(([typeKey, list]) => {
                    var _a, _b;
                    const groupName = PAYMENT_TYPES_WITH_METHOD.includes(typeKey) ? `${(_a = this.payTypesObj[typeKey]) !== null && _a !== void 0 ? _a : typeKey}` : (_b = this.payTypesObj[typeKey]) !== null && _b !== void 0 ? _b : typeKey;
                    return (h("div", { key: `type_${typeKey}`, class: "px-1" }, h("ir-revenue-row", { payments: list, groupName: groupName })));
                })));
            }))) : (h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
    static get style() { return IrRevenueTableStyle0; }
}, [2, "ir-revenue-table", {
        "payments": [16],
        "paymentEntries": [16],
        "filters": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-revenue-table", "ir-accordion", "ir-button", "ir-icons", "ir-revenue-row", "ir-revenue-row-details"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-revenue-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRevenueTable);
            }
            break;
        case "ir-accordion":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-button":
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