import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrSalesTable {
    constructor() {
        this.records = [];
        this.visibleCount = 10;
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (h("div", { key: 'b24f2795581346d663da58ed6f9c58b95d082cba', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '5ac971466247bc117e816645897fd91d15d5a053', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2a6e0df473f7bff07c78b75ba9037350e2cd52de', class: "table-header" }, h("tr", { key: '40f183253d8de75b6555f3b2ea952e20f3286f2e' }, h("th", { key: '714516977c66d941b6bdf9d7475c23f92ff2aed1', class: "text-left" }, "Country"), h("th", { key: 'a5cb726ec25deaba41f1a5394a56b58acd4d1b86', class: "text-center" }, "Room nights"), h("th", { key: '59795b60f98b8bc86641b47e40e3e892ac5e5459', class: "text-right" }, "Revenue"), h("th", { key: '42609402b83e278a04b0e01afeaf4ac465922d91', class: "" }))), h("tbody", { key: 'c9fb2414b1763880a0253b0e37b0ab62b4c507e6' }, this.records.length === 0 && (h("tr", { key: '9c4a1042046f4c6422c6e4be4c2a697f61a70184' }, h("td", { key: '3f0229d525287cded810d9f217d11b86b1318365', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'ec1f5fb365025cb58126acc6a3b6354caf865e7e' }, h("tr", { key: '7ca4c650c4445aa446b7429edf9f96da9145b28c', style: { fontSize: '12px' } }, h("td", { key: '847c14fe0fe74a174f40afafff53aa6d5f366fec', colSpan: 3 }), h("td", { key: 'bcdeba9875e7569185a1803e02d872fe5b03fca8', style: { width: '250px' } }, h("div", { key: 'a9a95a90bb8aa13147131a5ec021eaf59a051c12', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && h("ir-button", { key: 'd6b3149fafd8c9b702e366ab11ba8e639a29c1bd', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), h("div", { key: 'f8a05b2f7e73cd8680871e5e9a8d791f1906e1fb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '31155bac8d0812151e5bca73805ad61b2ffc6dc5', class: "legend bg-primary" }), h("p", { key: '5b223d7ef8a54a476992ec1fa1d0713a6f5a3f55', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '018e8bd73fb92a27a6f82f0ea80e0a7e5da5f379', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b48076e7b1be753a670951a23d7bb4c484325525', class: "legend secondary" }), h("p", { key: 'f9997e8bea6cdce29231a4b90a3571a54281e629', class: "p-0 m-0" }, "Previous year")))))))));
    }
    static get is() { return "ir-sales-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-table.css", "../../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "records": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SalesRecord[]",
                    "resolved": "SalesRecord[]",
                    "references": {
                        "SalesRecord": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-country/types.ts::SalesRecord"
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
            "mappedCountries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "MappedCountries",
                    "resolved": "Map<number, Pick<ICountry, \"name\" | \"flag\">>",
                    "references": {
                        "MappedCountries": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-country/types.ts::MappedCountries"
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
            "visibleCount": {}
        };
    }
}
//# sourceMappingURL=ir-sales-table.js.map
