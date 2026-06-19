import { CityLedgerService } from "../../../services/city-ledger/index";
import calendar_data from "../../../stores/calendar-data";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { FdTypes } from "../../../types/enums";
export class IrCityLedgerStatements {
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
        return `Statement - ${moment(this.printFilters.fromDate).format('MMM DD, YYYY')} to ${moment(this.printFilters.toDate).format('MMM DD, YYYY')}`;
    }
    render() {
        return (h(Host, { key: '586d800787a907624ef6a55c8a815a28b9666db1' }, h("section", { key: 'e69862062a3faed43f822eb3b15ebad344b5c6ea', class: "cl-statements", "aria-label": "City ledger statements" }, h("ir-city-ledger-statements-filter", { key: 'fc12dbad639c81f1bf3ac29e58e75e97ec986229', initialFromDate: this.filters.fromDate, initialToDate: this.filters.toDate, onFiltersChange: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
            }, onCreateStatement: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
                this.fetchStatement(e.detail);
            }, onPrintStatement: e => (this.printFilters = e.detail) }), h("ir-city-ledger-statements-table", { key: '252474575e440862255607de9afc6037e4b710d0', rows: this.rows, startingBalance: this.statement?.STARTING_BALANCE ?? 0, endingBalance: this.statement?.ENDING_BALANCE ?? 0, currencySymbol: this.currencySymbol, currencies: this.currencies, isLoading: this.isLoading, hasFetched: this.hasFetched, fromDate: this.filters.fromDate, toDate: this.filters.toDate, agentId: this.agentId })), h("ir-preview-screen-dialog", { key: '236e559b2a47013aae4c44dc35ff6f9868bb1f9b', hideDefaultAction: true, open: this.printFilters !== null, label: this.getPrintLabel(), onOpenChanged: e => {
                if (!e.detail) {
                    this.printFilters = null;
                    this.pdfUrl = null;
                }
            } }, h("div", { key: '7ffd76943f5739c745e8e7a2853156a9b327c2a2', slot: "header-actions" }, this.pdfUrl && (h("ir-custom-button", { key: '8ce8e8bf5be990bec113701ef8a2152c626e7337', size: "m", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, h("wa-icon", { key: '6b8339e7f01daa97b2f43204f7a1ee4728992993', name: "download", label: "Download PDF" })))), this.printFilters &&
            (this.isFetchingPdf ? (h("div", { class: "preview-loading" }, h("ir-spinner", null))) : (h("div", { class: "preview-body" }, h("ir-pdf-viewer", { src: this.pdfUrl })))))));
    }
    static get is() { return "ir-city-ledger-statements"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-statements.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-statements.css"]
        };
    }
    static get properties() {
        return {
            "agentId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "agent-id",
                "defaultValue": "null"
            },
            "agentName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "agent-name",
                "defaultValue": "''"
            },
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "currency-symbol",
                "defaultValue": "'$'"
            },
            "currencies": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICurrency[]",
                    "resolved": "ICurrency[]",
                    "references": {
                        "ICurrency": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::ICurrency",
                            "referenceLocation": "ICurrency"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "property-id"
            },
            "initialFilters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "StatementFilters",
                    "resolved": "StatementFilters",
                    "references": {
                        "StatementFilters": {
                            "location": "import",
                            "path": "./ir-city-ledger-statements-filter/ir-city-ledger-statements-filter",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx::StatementFilters",
                            "referenceLocation": "StatementFilters"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "filters": {},
            "statement": {},
            "rows": {},
            "isLoading": {},
            "hasFetched": {},
            "printFilters": {},
            "isFetchingPdf": {},
            "pdfUrl": {}
        };
    }
    static get events() {
        return [{
                "method": "clStmtFiltersChange",
                "name": "clStmtFiltersChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "StatementFilters",
                    "resolved": "StatementFilters",
                    "references": {
                        "StatementFilters": {
                            "location": "import",
                            "path": "./ir-city-ledger-statements-filter/ir-city-ledger-statements-filter",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx::StatementFilters",
                            "referenceLocation": "StatementFilters"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "agentId",
                "methodName": "handleAgentIdChange"
            }, {
                "propName": "printFilters",
                "methodName": "handlePrintFiltersChange"
            }];
    }
}
