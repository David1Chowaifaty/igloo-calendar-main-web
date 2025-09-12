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
        return (h("div", { key: 'f47c5527fe81c24a9db94823944d82234826f246', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '6e27bc0b77d54230740dbe0315270a9ca5db83b2', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '572aa32dcbfeefea5882fc8be5818cdba9a353ae', class: "table-header" }, h("tr", { key: '05ffc24819f3be54c35a4bad368dc72af2f2894c' }, h("th", { key: 'dd739092f1951092829b003e22fd01c89753b062', class: "text-left" }, "Country"), h("th", { key: 'b5120f6ee0cd2d02621736676cfffd6339712670', class: "text-center" }, "Room nights"), h("th", { key: 'e4b3edb29f5b69f68b17797b1cca8d9a7bef9d7f', class: "text-center" }, "No of guests"), h("th", { key: '1918051b304ffe30f947237b91da1d1f90f3294b', class: "text-right" }, "Revenue"), h("th", { key: '0f26e24a88abeffee04cbb2c73c42f8f01c5715c', class: "" }))), h("tbody", { key: 'c1bcaad9d5b53d60cf57e609c5e3d127f8facc05' }, this.records.length === 0 && (h("tr", { key: 'b57c567b9ee33d63ba619c8935ccbacb33feec74' }, h("td", { key: '5ca639a879b52a841e2d9730302afc3802cfc59e', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'b19faeed83e070063c99938981049a7d4c79d744' }, h("tr", { key: 'dfcca631bce468f36abe522f5b9b7b8f9d25d070', style: { fontSize: '12px' } }, h("td", { key: 'b72ec0b5f49d4304afb542ca47db8ed3c2c7f86d', colSpan: 4 }), h("td", { key: '686a0ce185e9073d5f3e14191128fa6639c77891', style: { width: '250px' } }, h("div", { key: '21951c59adf50f49b40bda01620756e49b351451', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '907468f402ca54c7adefac3167ba8ebf60a6ba12', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b25e1b49eafa140eea7d433211401cd2815a87e5', class: "legend bg-primary" }), h("p", { key: '74961ac6e51ec35e77dd3ce31e9c857910ead4cd', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4f3d8586039d92c8c3b003a7d8b79aeefc7c94c3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6812d6f7319dccb090efd215b27acd9acc8b2caf', class: "legend secondary" }), h("p", { key: 'e5ab4aac4f350686d4d24359095c2a5985c9f31f', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '09678353d70119fe3a73a42896e58d50e64d47f7', class: 'd-flex mx-auto' }, h("ir-button", { key: '3d7b5c41ed5b2bf8f8e9958321764eed8331150b', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
