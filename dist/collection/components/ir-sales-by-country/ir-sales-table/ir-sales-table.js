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
        return (h("div", { key: '20a5208a478a1a760c044385da0ca48eda1cdf3b', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '9809666d0b28b28dd1bfc4470e77bcbc7e2ff8ed', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'dd9261313044acca423359c520257449cf25b725', class: "table-header" }, h("tr", { key: '52a4a6419207ccab9ff8ff19ed85b4988d05e83e' }, h("th", { key: '89352b2caa576a30ff1ae2b5b4ff52fb0658439a', class: "text-left" }, "Country"), h("th", { key: 'ae6ab6bc4676ce8a6f7d17d3dd71754f2e15b965', class: "text-center" }, "Room nights"), h("th", { key: '4c02e413da23eeaf7f9a6fa835f88d7f3448c481', class: "text-right" }, "Revenue"), h("th", { key: '140578f987b2a52470c91d13285da4c8631b9d4b', class: "" }))), h("tbody", { key: '144bee1b21bc99cd73bfac0abd2f0d50aa7cc529' }, this.records.length === 0 && (h("tr", { key: 'a8c8818fc0df2011daa6804fcaf991ca9b1b3385' }, h("td", { key: 'aa70a2bcaac04c08991adf9dd157bba8bf63ee66', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: '42ae2e1851de812f55a037391e7c95b09d8bd307' }, h("tr", { key: 'b56326d91714c1f22f2846841c6944d22715dbdf', style: { fontSize: '12px' } }, h("td", { key: '34c23a44ede29a30d92ccedaed1e70b3ce90f24d', colSpan: 3 }), h("td", { key: 'a65e34e4f022e8e2ac2f64d05cd6c3fbbbb656a6', style: { width: '250px' } }, h("div", { key: 'a8b8ed19076a2ecbe0ed4ff73c053fbbcbf46aa9', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: 'e148ef759d99731c514d6a06c8adfb21a39a242b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b08566dd3a99dd72a630b4f6e8632460a625f19c', class: "legend bg-primary" }), h("p", { key: '55c2b34930436aeff51e87e1ff4d32080bfcf5a3', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '59c538845fd46de6e7373d5724d1f9c956f5ceca', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2b05e40065fdadf0d8921d8dec8de1aee65cdf66', class: "legend secondary" }), h("p", { key: '97f2faa68a3b50ba8667ac939c4c574250bb1237', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '64d011a3b985c0cd8890639c7182c289fa65d342', class: "d-flex justify-content-center my-2" }, h("ir-button", { key: '64bfded441fb7d45a370cdf2d210195991702b6b', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
