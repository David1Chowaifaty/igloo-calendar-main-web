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
        return (h("form", { key: '8e6dab2700624131c28608c77434b54af728b0e9', onSubmit: e => {
                e.preventDefault();
                if (canCreate)
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } }, h("div", { key: '80dd6e63f4790e00dab0550d23b62d104deb460f', class: "stmt-filters" }, h("ir-validator", { key: 'b9750f6fe5fc2f5e6d2f73009bec33bae4db28ca', schema: z.object({
                fromDate: z.string().nonempty(),
                toDate: z.string().nonempty(),
            }), value: {
                fromDate: this.fromDate,
                toDate: this.toDate,
            }, class: "stmt-filters__left" }, h("ir-date-range-filter", { key: '8b50812910c2cc9bcf32ab6482ca7bb9d103e272', class: "stmt-filters__date-picker", maxDate: hooks().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), h("div", { key: '9498cb0d2922d215a00357da61f81a50e53781b9', class: "stmt-filters__right" }, h("ir-custom-button", { key: 'f04ce51ab8b532a8842f9b465265f18cd42b060a', variant: "brand", type: "submit" }, "Create Statement"), h("ir-custom-button", { key: '4b9b882b4382277ff1b766a83cdfe9a8e330c2d2', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
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