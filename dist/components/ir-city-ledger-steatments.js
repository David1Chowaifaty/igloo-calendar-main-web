import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService } from './index5.js';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { F as FdTypes } from './enums.js';
import { d as defineCustomElement$c } from './ir-air-date-picker2.js';
import { d as defineCustomElement$b } from './ir-city-ledger-statements-filter2.js';
import { d as defineCustomElement$a } from './ir-city-ledger-statements-table2.js';
import { d as defineCustomElement$9 } from './ir-custom-button2.js';
import { d as defineCustomElement$8 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$7 } from './ir-date-select2.js';
import { d as defineCustomElement$6 } from './ir-dialog2.js';
import { d as defineCustomElement$5 } from './ir-input2.js';
import { d as defineCustomElement$4 } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$3 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irCityLedgerStatementsCss = ".sc-ir-city-ledger-statements-h{display:block;max-width:1000px;margin-inline:auto}.cl-statements.sc-ir-city-ledger-statements{display:flex;flex-direction:column;gap:1rem}.preview-loading.sc-ir-city-ledger-statements{display:flex;align-items:center;justify-content:center;padding:3rem}.preview-body.sc-ir-city-ledger-statements{display:flex;justify-content:center;padding:1.5rem;min-height:100%}";
const IrCityLedgerStatementsStyle0 = irCityLedgerStatementsCss;

const IrCityLedgerStatements = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerStatements extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.clStmtFiltersChange = createEvent(this, "clStmtFiltersChange", 7);
    }
    agentId = null;
    agentName = '';
    currencySymbol = '$';
    currencies = [];
    ticket;
    propertyId;
    initialFilters;
    clStmtFiltersChange;
    filters = { fromDate: null, toDate: null };
    componentWillLoad() {
        if (this.initialFilters?.fromDate || this.initialFilters?.toDate) {
            this.filters = { ...this.initialFilters };
        }
    }
    statement = null;
    rows = [];
    isLoading = false;
    hasFetched = false;
    printFilters = null;
    isFetchingPdf = false;
    pdfUrl = null;
    cityLedgerService = new CityLedgerService();
    handleAgentIdChange() {
        this.statement = null;
        this.rows = [];
        this.hasFetched = false;
        this.filters = { fromDate: null, toDate: null };
        this.printFilters = null;
        this.pdfUrl = null;
    }
    async handlePrintFiltersChange(next) {
        if (!next?.fromDate || !next?.toDate || !this.agentId) {
            this.pdfUrl = null;
            return;
        }
        this.isFetchingPdf = true;
        try {
            const url = await this.cityLedgerService.printClStatement({
                agency_id: String(this.agentId),
                from_date: next.fromDate,
                to_date: next.toDate,
            });
            this.pdfUrl = url;
        }
        catch (err) {
            console.error('[ir-city-ledger-statements] printClStatement error:', err);
        }
        finally {
            this.isFetchingPdf = false;
        }
    }
    async handleDownload() {
        if (!this.pdfUrl)
            return;
        const blob = await fetch(this.pdfUrl).then(r => r.blob());
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        const from = this.printFilters?.fromDate ?? '';
        const to = this.printFilters?.toDate ?? '';
        a.download = `Statement_${from}_${to}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objectUrl);
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
                    LIST_FD_TYPE_CODE: [FdTypes.CreditReceipt, FdTypes.CreditNote, FdTypes.DebitNote, FdTypes.Invoice, FdTypes.Receipt],
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
        return `Statement - ${hooks(this.printFilters.fromDate).format('MMM DD, YYYY')} to ${hooks(this.printFilters.toDate).format('MMM DD, YYYY')}`;
    }
    render() {
        return (h(Host, { key: 'ef95d8ec4064ea008c67b6d760ab786508987cc3' }, h("section", { key: '34530afb133d3f4c9362b38d26a616350fbb2ebd', class: "cl-statements", "aria-label": "City ledger statements" }, h("ir-city-ledger-statements-filter", { key: 'ec7023e123ef944d57b3b836759e35a163d6cac0', initialFromDate: this.filters.fromDate, initialToDate: this.filters.toDate, onFiltersChange: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
            }, onCreateStatement: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
                this.fetchStatement(e.detail);
            }, onPrintStatement: e => (this.printFilters = e.detail) }), h("ir-city-ledger-statements-table", { key: '408900cd0bd1b2c8291fa8f9bde59f88aac1788c', rows: this.rows, startingBalance: this.statement?.STARTING_BALANCE ?? 0, endingBalance: this.statement?.ENDING_BALANCE ?? 0, currencySymbol: this.currencySymbol, currencies: this.currencies, isLoading: this.isLoading, hasFetched: this.hasFetched, fromDate: this.filters.fromDate, toDate: this.filters.toDate, agentId: this.agentId })), h("ir-preview-screen-dialog", { key: 'b2a5ae7bd8072b6fd1411bc1b7d35fab1f017e5e', hideDefaultAction: true, open: this.printFilters !== null, label: this.getPrintLabel(), onOpenChanged: e => {
                if (!e.detail) {
                    this.printFilters = null;
                    this.pdfUrl = null;
                }
            } }, h("div", { key: '6739caa225435392838d27098e10c2018ae4767f', slot: "header-actions" }, this.pdfUrl && (h("ir-custom-button", { key: 'f1c5e110cf24808c87b2824a26ba97b39935c2d5', size: "medium", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, h("wa-icon", { key: '2a4ac2e1b28e385cd906e9d6aae7219473ffde72', name: "download", label: "Download PDF" })))), this.printFilters &&
            (this.isFetchingPdf ? (h("div", { class: "preview-loading" }, h("ir-spinner", null))) : (h("div", { class: "preview-body" }, h("ir-pdf-viewer", { src: this.pdfUrl })))))));
    }
    static get watchers() { return {
        "agentId": ["handleAgentIdChange"],
        "printFilters": ["handlePrintFiltersChange"]
    }; }
    static get style() { return IrCityLedgerStatementsStyle0; }
}, [2, "ir-city-ledger-statements", {
        "agentId": [2, "agent-id"],
        "agentName": [1, "agent-name"],
        "currencySymbol": [1, "currency-symbol"],
        "currencies": [16],
        "ticket": [1],
        "propertyId": [2, "property-id"],
        "initialFilters": [16],
        "filters": [32],
        "statement": [32],
        "rows": [32],
        "isLoading": [32],
        "hasFetched": [32],
        "printFilters": [32],
        "isFetchingPdf": [32],
        "pdfUrl": [32]
    }, undefined, {
        "agentId": ["handleAgentIdChange"],
        "printFilters": ["handlePrintFiltersChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-statements", "ir-air-date-picker", "ir-city-ledger-statements-filter", "ir-city-ledger-statements-table", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-dialog", "ir-input", "ir-pdf-viewer", "ir-preview-screen-dialog", "ir-spinner", "ir-validator"];
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
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-pdf-viewer":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-preview-screen-dialog":
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

export { IrCityLedgerStatements as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-steatments.js.map