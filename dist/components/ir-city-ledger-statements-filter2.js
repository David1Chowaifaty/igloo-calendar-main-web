import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$5 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

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
        return (h(Host, { key: '1ae616a430306dadda631a966d2f7f2f8fd0decc' }, h("div", { key: '83339a6312a48b317d7e6f5a1f7f64181e9a3bd2', class: "stmt-filters" }, h("div", { key: '0f33439a8d81201183af83183fd27767e29b2b34', class: "stmt-filters__left" }, h("ir-date-range-filter", { key: '34396773da5492fe50e7b610697598fdbfeca2d4', class: "stmt-filters__date-picker", maxDate: hooks().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), h("div", { key: '02098e2cb6c69931de574c8ee1f75dfe38567329', class: "stmt-filters__right" }, h("ir-custom-button", { key: 'd6701c0987b65e737f72ced9f242a0b07847cdbe', variant: "brand", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, "Create Statement"), h("ir-custom-button", { key: 'db1bffc24144484149cd374c9cb8d670a9d3ebd2', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
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
    const components = ["ir-city-ledger-statements-filter", "ir-air-date-picker", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-statements-filter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerStatementsFilter);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedgerStatementsFilter as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-statements-filter2.js.map