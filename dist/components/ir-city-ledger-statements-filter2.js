import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$5 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irCityLedgerStatementsFilterCss = ".sc-ir-city-ledger-statements-filter-h{display:block}.stmt-filters.sc-ir-city-ledger-statements-filter{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}.stmt-filters__left.sc-ir-city-ledger-statements-filter{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem}.stmt-filters__date-picker.sc-ir-city-ledger-statements-filter{width:100%;min-width:280px}.stmt-filters__right.sc-ir-city-ledger-statements-filter{display:flex;align-items:center;gap:0.5rem}";
const IrCityLedgerStatementsFilterStyle0 = irCityLedgerStatementsFilterCss;

const IrCityLedgerStatementsFilter = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerStatementsFilter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.filtersChange = createEvent(this, "filtersChange", 7);
        this.createStatement = createEvent(this, "createStatement", 7);
        this.printStatement = createEvent(this, "printStatement", 7);
    }
    fromDate = null;
    toDate = null;
    filtersChange;
    createStatement;
    printStatement;
    render() {
        const canCreate = !!(this.fromDate && this.toDate);
        return (h(Host, { key: 'ffe66918b2aa73adacdc637b25b41a83c35688af' }, h("div", { key: '28183dc368f3dce1b7339f067f03639400b7c8d9', class: "stmt-filters" }, h("div", { key: '3fc5de850844434df0c075a9bc03aaac7a7c2deb', class: "stmt-filters__left" }, h("ir-date-range-filter", { key: '6fa282ddefa908e0428a97379d2ee2d2390de3b4', class: "stmt-filters__date-picker", maxDate: hooks().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), h("div", { key: '96c5c8d3cc5320678728063f17b3de663d34b664', class: "stmt-filters__right" }, h("ir-custom-button", { key: '7805025a5e8fb4177c5861a1ef250efb6660fdea', variant: "brand", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, "Create Statement"), h("ir-custom-button", { key: '656d3d70f3eca3ba813291640e70ede4c473791b', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.printStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, "Print")))));
    }
    static get style() { return IrCityLedgerStatementsFilterStyle0; }
}, [2, "ir-city-ledger-statements-filter", {
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