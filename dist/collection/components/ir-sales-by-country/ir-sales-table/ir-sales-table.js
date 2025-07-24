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
        return (h("div", { key: '2b843616b9b8972b6c87840969364d8b807ae16d', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '58ca2cbe68b4a9f17cc560b2b1e18e225b9ac1f9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a655a3ddebe13b3a8ae33b4e7760325f84e67a7b', class: "table-header" }, h("tr", { key: '4cba889158847b33d1e148490419a43f3993b695' }, h("th", { key: '0ab682bce655cc8fb50ab24566bf1aeb5da19f11', class: "text-left" }, "Country"), h("th", { key: '2ae38f171dedb04fabfb734b3995686c2634a98c', class: "text-center" }, "Room nights"), h("th", { key: 'f62b2f91a989ef2791f3bf349c0127f93a6dbcc5', class: "text-right" }, "Revenue"), h("th", { key: '0c925fa1054a303de8d4818fcfd84355d65d913f', class: "" }))), h("tbody", { key: '646a0550068ab17d7b7c8dc2d1de70d411d86805' }, this.records.length === 0 && (h("tr", { key: '671630f62717ad5549c4afcc51ad6b1dccbb7915' }, h("td", { key: '47a77b699cec7f9e53f6be3a6d2dd8e402018dc9', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '3c18929e3d87dc2e72e9ac063ca22252895d6fe4' }, h("tr", { key: '89b464edc62b5fc8b3910a43a95c5eedbd3de137', style: { fontSize: '12px' } }, h("td", { key: '7847fe7e9735f13edb413698af25cbf8031628d6', colSpan: 3 }), h("td", { key: '9e1a28da7186987954f4bad1f2b98833560682c5', style: { width: '250px' } }, h("div", { key: 'ca4d6aa605feee137152abae873851fa75258803', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && h("ir-button", { key: '29e430f26054ec7da6c093a37d73753d33033b28', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), h("div", { key: 'bba60cb702ac33be8fcce49e9180bec74cc394e2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fa9b9eea86a47d79ad0bf2839f00658232b88577', class: "legend bg-primary" }), h("p", { key: '24558689d15a2b80376c2c67c85d4af602e2bd2b', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'e73ee576c30f9764ce5f1b6d79b69c6151e4378e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fe62a1700cac64d2bd2854199c9a96c921683d4a', class: "legend secondary" }), h("p", { key: 'dac45a2bab22ba095e4091cccc99ac6510e4ab9c', class: "p-0 m-0" }, "Previous year")))))))));
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
