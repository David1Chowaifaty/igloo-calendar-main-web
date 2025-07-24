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
        return (h("div", { key: '0358f243ff8a708042a28069c08220ef8c9a6feb', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '422f2ab6231fa51f933e53eeebdb2fd46590af65', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ed739ced9d11950fdb97557af9875b4b59142431', class: "table-header" }, h("tr", { key: '0da59089a1a293d098b153fccbc6c3be89868645' }, h("th", { key: 'b9849fd9332bddce2f7b21f4bf8ebca0e47e6d40', class: "text-left" }, "Country"), h("th", { key: 'b4dbd44b00f2d7b85d10d5b1f005b808db2e8f46', class: "text-center" }, "Room nights"), h("th", { key: 'd4c32eb40abf1d5b2befc1b5b4c46fa3576771dc', class: "text-right" }, "Revenue"), h("th", { key: '059bf60b83cbbf93962fa900a65162104f458b6b', class: "" }))), h("tbody", { key: '3f3d1241dc4c80cd880840d1f5121a6d373b4d1c' }, this.records.length === 0 && (h("tr", { key: 'ff8e06eda1d4b7ef050701587ab7006db22d1e4e' }, h("td", { key: '09334e3acda767b3ce291e32b699abd939c91538', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '352bd487b215f84797c7f0be8cc20cea71cdd746' }, h("tr", { key: '2368ffe9c14b9843805cec43961a2b5d844efb47', style: { fontSize: '12px' } }, h("td", { key: '821316ae397a47a9575f5c3a2793a79d73768a47', colSpan: 3 }), h("td", { key: '899d6dedda84c1a4a32f3bc462b34faebd4bcb4a', style: { width: '250px' } }, h("div", { key: '526f49a037822e42f9afa6634145fe35e92f3fd6', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && h("ir-button", { key: 'f85f6b0fa3e71b28c2ed231f92978a871ffc740c', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), h("div", { key: 'd9efdadc408eab5baaadf46423577e5ba9b5e331', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '59787c179a3c57abc00bf8197777b8e8e57dc306', class: "legend bg-primary" }), h("p", { key: 'b5f73a9847aba13a361e1b580b734a3e3c434af2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c3434e1e208e46d20c8e3550f7884cb747db2373', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9cb9d933e9ae13747e3dfb3fde24d708d4f9a10d', class: "legend secondary" }), h("p", { key: 'b1e5a9ea30ed0233b5cf2514608f1ed8116e2de5', class: "p-0 m-0" }, "Previous year")))))))));
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
