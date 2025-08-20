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
        return (h("div", { key: '17135dd379b8164ad45e9cad70053e5052ce371e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'ae89de7e9f17c778dea4bb22081efcae79123dc8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd907bf035169708ec8230315754d5a616957fe35', class: "table-header" }, h("tr", { key: '46a5cabdbd490590f869bd160439b4542b9c4afa' }, h("th", { key: '8831623bb2dfd3677bec316a6397314b427e5d04', class: "text-left" }, "Country"), h("th", { key: 'a14d69b7edb7c16824831fe459b782614d86a47c', class: "text-center" }, "Room nights"), h("th", { key: '672c6a39169b310abd8c866ae98c6e80f471e1ae', class: "text-center" }, "No of guests"), h("th", { key: 'ecc5a3a5030ebb9c2d2c492d1bb54a38552d88f1', class: "text-right" }, "Revenue"), h("th", { key: '3350d6e2ed1cd7d59a6f059081d03b65a7d27ded', class: "" }))), h("tbody", { key: '9a20185bfdb3638626d9ec4c0bb85f0cc1a4b24d' }, this.records.length === 0 && (h("tr", { key: '0a37062c40d0bc92cfe3f8b23c43373e9ccb57a0' }, h("td", { key: '7aa1e8f9ac2cfd3c2c2adfd1dfe820c53e3d8e79', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a57fc048ccf8fc2fdccd354a65baecba52e63926' }, h("tr", { key: 'ad06ad9d11ee5416104902d1a64b73792fe91da2', style: { fontSize: '12px' } }, h("td", { key: 'b5c17afcfcdec0c1ee6fd21898377c63f530a9bf', colSpan: 4 }), h("td", { key: 'a4cf21f5c350437bcbff552beb4e591b280706a0', style: { width: '250px' } }, h("div", { key: '41c7fae105c4b2920e430444c9dda6750634d3d5', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '63839b6f37ab9084ba4780c106888af31284507c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '84058abbc771f5049044cede891acc40ba389539', class: "legend bg-primary" }), h("p", { key: '525b4eda4d22823f5b767912f0ea2ead1f439e1a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4173e53df2ade0b4f71e22556e0bbc417a9cddd2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5ab9add599b3cadc082893b14d76eda2555fe5e1', class: "legend secondary" }), h("p", { key: 'da2e33001e200c6e27c014a610bdc33c4d1293ef', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'dd11162f4195e317a556f41503dadb1cd99005dc', class: 'd-flex mx-auto' }, h("ir-button", { key: 'e221a117ff313cda35252e230395e06c6a6ac87a', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
