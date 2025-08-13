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
        return (h("div", { key: '295cc3ff9a7a07627013f4f85b7b4a27f25f0dc4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '4554c3d8839e96ce21e3f6a2fbb31fa1b1da2d83', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '10d7f8cea0ba3cb2b225df95d79ed868e33d11aa', class: "table-header" }, h("tr", { key: 'b3c87b45b2bb836b331681ac5408d9cecf9da4a6' }, h("th", { key: 'bd4767529bbba24643133db3b8787e40870a54f7', class: "text-left" }, "Country"), h("th", { key: 'f48f724147f806da3eba8881e285b370d618012c', class: "text-center" }, "Room nights"), h("th", { key: '1a8f015ace3e763d25210520a99cf38691a5bc8b', class: "text-center" }, "No of guests"), h("th", { key: 'a3ebd378ca5a46acb952de813b266d39d7210c55', class: "text-right" }, "Revenue"), h("th", { key: '24231d6b227b3949e47b9f1191e19f63e277e16e', class: "" }))), h("tbody", { key: '6781600fd428faeba4cf2f939e6da88428a4217b' }, this.records.length === 0 && (h("tr", { key: 'd62075b497165b7244173dbe0837965891f3a7b1' }, h("td", { key: '352b5b2d66c0437e412f5dda6f4fb3a60afe9853', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8a487c1b7f19c53012aac54692df6f66f3d2e54e' }, h("tr", { key: '829f6e544d3cc29897c7b821f078297b3de93f49', style: { fontSize: '12px' } }, h("td", { key: '4b38a9decd98ea3ed8da21b56c682563914d64e0', colSpan: 4 }), h("td", { key: '757c2b78166d62b077ebb356eefc35557c7730bc', style: { width: '250px' } }, h("div", { key: '0e48c50c8d8f4ad48702bbee0251bb3c1ab046e7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'bfbbf3353565c5a1faad7c1c54bc9104fb5f8741', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f64c84132c07be8c448244083434bdd83c7e87ac', class: "legend bg-primary" }), h("p", { key: '1bfe16cfa7f2de1643d54a90eb6273944961ff92', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a1e1f13be1a63e029f726a1ffd141055d75475d8', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0f2ab2d20401bebbee2cc2c61239e19fc4a43d5f', class: "legend secondary" }), h("p", { key: '56b0d90249cd1f4ac4421fe58a0f15b95112f3fc', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '7b548184ffdd454913a3a2a0d5ca078390d46ef8', class: 'd-flex mx-auto' }, h("ir-button", { key: '45a6b5c97a2395cf0e932902ea24b93351c63a0d', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
