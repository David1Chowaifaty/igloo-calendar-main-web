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
        return (h("div", { key: '59234aa184b6030748c034637cb7777052cbdf75', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '31710115f9fb5f0e2fb6045f9d202178afd21624', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '210c20652a18b54c0dbfa243a3b80a3810536b97', class: "table-header" }, h("tr", { key: '7ade6f47bb98189e6c0b6afa1d7fdf7432315c74' }, h("th", { key: '59044224f313bc06901b9af0def71c4e58e8e251', class: "text-left" }, "Country"), h("th", { key: '6973345d343df7366b7be21feb46015489b542df', class: "text-center" }, "Room nights"), h("th", { key: '66c268d3799df9149cce007e6e1a5b97aa5406e6', class: "text-center" }, "No of guests"), h("th", { key: '9425a54c75bdb2d763c1655f134867d57c29230b', class: "text-right" }, "Revenue"), h("th", { key: '21e90ed1151363401669619dfe0509b95982c9bc', class: "" }))), h("tbody", { key: '32fd48d3a5e2ca5cdc5cc8a3d5274115a1ec7fd5' }, this.records.length === 0 && (h("tr", { key: '9a6f49ca471851caa41a2de55c43fb7224b42faf' }, h("td", { key: '53338eadcf8280cd4b07f17d10a78962543227f2', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'be9d77fb9d9103b8b2453909a80989683ed7e874' }, h("tr", { key: 'c44f1086b276c024a303cac1e575ca56d2c0f3d9', style: { fontSize: '12px' } }, h("td", { key: '970bfb7e2b726f7924977b2487211f0892f557b4', colSpan: 4 }), h("td", { key: 'e11a5d56a23b02306f1e43cc8ee958b36293dab9', style: { width: '250px' } }, h("div", { key: 'a2372ff610f749347c4dd0987ccb1440e1bfabb0', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '7c2d04add9a5fe9afb78f6880a1add68867c412a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '623be6be52f96749baf6aa2fe7c526ce9998f44e', class: "legend bg-primary" }), h("p", { key: '176a33a01bdaa7b6a7d55f7d0411fbe2cbf95126', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '15e68540f48a91994636b4c4c118928359c49102', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '488c634279f4e3da9aa95ea35536b54ccad7961a', class: "legend secondary" }), h("p", { key: '866bb69857980195c8fad2ac5905b011c95acf4e', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '699681feb59d5fcaeb93f0e84be8487c75524f10', class: 'd-flex mx-auto' }, h("ir-button", { key: '279ede2aada0e3ccc9fe2fc1b17f762fd30d62a8', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
