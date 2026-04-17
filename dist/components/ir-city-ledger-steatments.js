import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService } from './index6.js';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { a as FdTypes } from './enums.js';
import { d as defineCustomElement$c } from './ir-air-date-picker2.js';
import { d as defineCustomElement$b } from './ir-city-ledger-statements-filter2.js';
import { d as defineCustomElement$a } from './ir-city-ledger-statements-table2.js';
import { d as defineCustomElement$9 } from './ir-cl-document-header2.js';
import { d as defineCustomElement$8 } from './ir-cl-statement-preview2.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$5 } from './ir-date-select2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irCityLedgerStatementsCss = ".sc-ir-city-ledger-statements-h{display:block}.cl-statements.sc-ir-city-ledger-statements{display:flex;flex-direction:column;gap:1rem}";
const IrCityLedgerStatementsStyle0 = irCityLedgerStatementsCss;

const IrCityLedgerStatements = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerStatements extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    agentId = null;
    agentName = '';
    currencySymbol = '$';
    currencies = [];
    ticket;
    propertyId;
    filters = { fromDate: null, toDate: null };
    statement = null;
    rows = [];
    isLoading = false;
    hasFetched = false;
    printFilters = null;
    cityLedgerService = new CityLedgerService();
    handleAgentIdChange() {
        this.statement = null;
        this.rows = [];
        this.hasFetched = false;
        this.filters = { fromDate: null, toDate: null };
        this.printFilters = null;
    }
    async fetchStatement(filters) {
        if (!this.agentId || !filters.fromDate || !filters.toDate)
            return;
        const currencyId = calendar_data?.property?.currency?.id;
        if (!currencyId)
            return;
        this.isLoading = true;
        try {
            const [result, fiscalDocuments] = await Promise.all([
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: currencyId,
                    START_DATE: filters.fromDate,
                    END_DATE: filters.toDate,
                }),
                this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: this.agentId,
                    START_DATE: filters.fromDate,
                    END_DATE: filters.toDate,
                    LIST_FD_TYPE_CODE: [FdTypes.CreditNote, FdTypes.DebitNote, FdTypes.Invoice, FdTypes.Receipt],
                }),
            ]);
            this.statement = result ?? null;
            this.rows = fiscalDocuments ?? [];
        }
        catch (err) {
            console.error('[ir-city-ledger-statements] getCLStatement error:', err);
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    getPrintLabel() {
        if (!this.printFilters?.fromDate || !this.printFilters?.toDate)
            return 'Statement Preview';
        return `Statement — ${hooks(this.printFilters.fromDate).format('MMM DD, YYYY')} to ${hooks(this.printFilters.toDate).format('MMM DD, YYYY')}`;
    }
    render() {
        const currencyId = calendar_data?.property?.currency?.id;
        return (h(Host, { key: '0ba61b83185a349a59b4e056f4db8052b6d85d85' }, h("section", { key: '5304b154a20582d769484d41d28d786fb6c383a6', class: "cl-statements", "aria-label": "City ledger statements" }, h("ir-city-ledger-statements-filter", { key: '81fdc59b1f8b1a8cbda0157a8cb7a9106c2cdfb3', onFiltersChange: e => (this.filters = e.detail), onCreateStatement: e => {
                this.filters = e.detail;
                this.fetchStatement(e.detail);
            }, onPrintStatement: e => (this.printFilters = e.detail) }), h("ir-city-ledger-statements-table", { key: 'f415c1c4b985ef8d9c5bb3a7643b1aa98a99798c', rows: this.rows, startingBalance: this.statement?.STARTING_BALANCE ?? 0, endingBalance: this.statement?.ENDING_BALANCE ?? 0, currencySymbol: this.currencySymbol, currencies: this.currencies, isLoading: this.isLoading, hasFetched: this.hasFetched, fromDate: this.filters.fromDate, toDate: this.filters.toDate })), h("ir-preview-screen-dialog", { key: '7cdfb5d496428cbe1962bc127e57895422c0feea', open: this.printFilters !== null, label: this.getPrintLabel(), action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.printFilters = null;
            } }, this.printFilters && this.agentId && currencyId && (h("ir-cl-statement-preview", { key: '1c181d25401cbf32fd793c25c39417267ed39692', ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, agentName: this.agentName, fromDate: this.printFilters.fromDate, toDate: this.printFilters.toDate, currencyId: currencyId })))));
    }
    static get watchers() { return {
        "agentId": ["handleAgentIdChange"]
    }; }
    static get style() { return IrCityLedgerStatementsStyle0; }
}, [2, "ir-city-ledger-statements", {
        "agentId": [2, "agent-id"],
        "agentName": [1, "agent-name"],
        "currencySymbol": [1, "currency-symbol"],
        "currencies": [16],
        "ticket": [1],
        "propertyId": [2, "property-id"],
        "filters": [32],
        "statement": [32],
        "rows": [32],
        "isLoading": [32],
        "hasFetched": [32],
        "printFilters": [32]
    }, undefined, {
        "agentId": ["handleAgentIdChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-statements", "ir-air-date-picker", "ir-city-ledger-statements-filter", "ir-city-ledger-statements-table", "ir-cl-document-header", "ir-cl-statement-preview", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-dialog", "ir-input", "ir-preview-screen-dialog", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-statements":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerStatements);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-city-ledger-statements-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-city-ledger-statements-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-cl-document-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-cl-statement-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedgerStatements as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-steatments.js.map