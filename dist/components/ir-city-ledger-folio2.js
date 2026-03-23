import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$g } from './ir-city-ledger-folio-filters2.js';
import { d as defineCustomElement$f } from './ir-city-ledger-folio-table2.js';
import { d as defineCustomElement$e } from './ir-city-ledger-transaction-drawer2.js';
import { d as defineCustomElement$d } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$c } from './ir-custom-button2.js';
import { d as defineCustomElement$b } from './ir-custom-date-range2.js';
import { d as defineCustomElement$a } from './ir-date-range-filter2.js';
import { d as defineCustomElement$9 } from './ir-date-select2.js';
import { d as defineCustomElement$8 } from './ir-dialog2.js';
import { d as defineCustomElement$7 } from './ir-drawer2.js';
import { d as defineCustomElement$6 } from './ir-hold-transaction-dialog2.js';
import { d as defineCustomElement$5 } from './ir-input2.js';
import { d as defineCustomElement$4 } from './ir-input-cell2.js';
import { d as defineCustomElement$3 } from './ir-pagination2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irCityLedgerFolioCss = ".sc-ir-city-ledger-folio-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}";
const IrCityLedgerFolioStyle0 = irCityLedgerFolioCss;

const IrCityLedgerFolio = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerFolio extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.folioSummaryUpdate = createEvent(this, "folioSummaryUpdate", 7);
    }
    agentId = null;
    propertyId;
    taxOptions = [];
    serviceCategoryOptions = [];
    currencySymbol = '$';
    currencies = [];
    isTransactionOpen = false;
    filters = {};
    folioSummaryUpdate;
    render() {
        return (h(Host, { key: '4ad7b73e3db93f46566935074765c52aa08128d4' }, h("ir-city-ledger-folio-filters", { key: '402e4693a8f2c7d8c23622c491b29ca456dec338', onFiltersChange: e => (this.filters = e.detail), onAddEntry: () => (this.isTransactionOpen = true) }), h("ir-city-ledger-folio-table", { key: 'a01c21f0c02be9e0d5664535a179f354010c514d', agentId: this.agentId, propertyId: this.propertyId, currencySymbol: this.currencySymbol, currencies: this.currencies, filters: this.filters, onFolioSummaryLoaded: e => this.folioSummaryUpdate.emit(e.detail), onGenerateInvoice: e => console.log('Generate invoice for', e.detail) }), h("ir-city-ledger-transaction-drawer", { key: '599133db24623b61cf1a52f71ca63eb326037763', open: this.isTransactionOpen, taxOptions: this.taxOptions, serviceCategoryOptions: this.serviceCategoryOptions, currencySymbol: this.currencySymbol, agentId: this.agentId, onTransactionSaved: () => { }, onCloseDrawer: () => (this.isTransactionOpen = false) })));
    }
    static get style() { return IrCityLedgerFolioStyle0; }
}, [2, "ir-city-ledger-folio", {
        "agentId": [2, "agent-id"],
        "propertyId": [2, "property-id"],
        "taxOptions": [16],
        "serviceCategoryOptions": [16],
        "currencySymbol": [1, "currency-symbol"],
        "currencies": [16],
        "isTransactionOpen": [32],
        "filters": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-folio", "ir-city-ledger-folio-filters", "ir-city-ledger-folio-table", "ir-city-ledger-transaction-drawer", "ir-city-ledger-transaction-form", "ir-custom-button", "ir-custom-date-range", "ir-date-range-filter", "ir-date-select", "ir-dialog", "ir-drawer", "ir-hold-transaction-dialog", "ir-input", "ir-input-cell", "ir-pagination", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-folio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerFolio);
            }
            break;
        case "ir-city-ledger-folio-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-city-ledger-folio-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-hold-transaction-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
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

export { IrCityLedgerFolio as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-folio2.js.map