import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { z } from './index2.js';
import { d as defineCustomElement$6 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$3 } from './ir-date-select2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irCityLedgerStatementsFilterCss = ".sc-ir-city-ledger-statements-filter-h{display:block}.stmt-filters.sc-ir-city-ledger-statements-filter{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem}.stmt-filters__left.sc-ir-city-ledger-statements-filter{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.stmt-filters__date-picker.sc-ir-city-ledger-statements-filter{width:100%;min-width:280px}.stmt-filters__right.sc-ir-city-ledger-statements-filter{display:flex;align-items:center;gap:0.5rem}";
const IrCityLedgerStatementsFilterStyle0 = irCityLedgerStatementsFilterCss;

const IrCityLedgerStatementsFilter = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerStatementsFilter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.filtersChange = createEvent(this, "filtersChange", 7);
        this.createStatement = createEvent(this, "createStatement", 7);
        this.printStatement = createEvent(this, "printStatement", 7);
    }
    initialFromDate = null;
    initialToDate = null;
    fromDate = null;
    toDate = null;
    filtersChange;
    componentWillLoad() {
        this.fromDate = this.initialFromDate;
        this.toDate = this.initialToDate;
    }
    createStatement;
    printStatement;
    render() {
        const canCreate = !!(this.fromDate && this.toDate);
        return (h("form", { key: '2ca5aec1b6ee609cc7959f83c7e81d6b8fb81085', onSubmit: e => {
                e.preventDefault();
                if (canCreate)
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } }, h("div", { key: '9cfefa4573cb9ddffc074d45e00433925cc61d68', class: "stmt-filters" }, h("ir-validator", { key: 'ada19c7d4bcf638444cfc6bfd709b84c0ac18330', schema: z.object({
                fromDate: z.string().nonempty(),
                toDate: z.string().nonempty(),
            }), value: {
                fromDate: this.fromDate,
                toDate: this.toDate,
            }, class: "stmt-filters__left" }, h("ir-date-range-filter", { key: '3f119a08be45304483e1e2862c03379f0bca7f19', class: "stmt-filters__date-picker", maxDate: hooks().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), h("div", { key: '3324ed93f65cfdcd3629fa43c00363c4a6f4eab8', class: "stmt-filters__right" }, h("ir-custom-button", { key: 'e2fc7e1795dd0bfab326d1edd9f016f1215f8ff7', variant: "brand", type: "submit" }, "Create Statement"), h("ir-custom-button", { key: 'd2e6a14c7b8554a2b7287d12a0f17b0fe052d28d', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.printStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, "Print")))));
    }
    static get style() { return IrCityLedgerStatementsFilterStyle0; }
}, [2, "ir-city-ledger-statements-filter", {
        "initialFromDate": [1, "initial-from-date"],
        "initialToDate": [1, "initial-to-date"],
        "fromDate": [32],
        "toDate": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-statements-filter", "ir-air-date-picker", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-statements-filter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerStatementsFilter);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedgerStatementsFilter as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-statements-filter2.js.map