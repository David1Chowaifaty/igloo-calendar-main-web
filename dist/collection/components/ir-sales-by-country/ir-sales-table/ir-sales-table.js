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
        return (h("div", { key: '149b9522f81a6cae0fc447b7ecbdd78d95fcd46a', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'bb747aa01c0133a3dfc0f575b3f8750142c969ed', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a58e9a6ecaddc521fc79f65991940255cdeaf90b', class: "table-header" }, h("tr", { key: '690bd89d0d1ed7c773e60986fe51c51264cd2c56' }, h("th", { key: '334bd3acc39fac529cab2ceabb415fa189b0310b', class: "text-left" }, "Country"), h("th", { key: '1b6addefa705a50af5ba3b71cd54cff629fe9e4e', class: "text-center" }, "Room nights"), h("th", { key: '49084329c841f3ea4d9ee980bb07ff32927dbd87', class: "text-center" }, "No of guests"), h("th", { key: '13df961be24e70f381b3411d6b906d8324d922fe', class: "text-right" }, "Revenue"), h("th", { key: '87a92ba1ef95400df36d1b1e17ea1be6da71cf57', class: "" }))), h("tbody", { key: '951a9c735c09aba55a4f432645115a78b7608b3e' }, this.records.length === 0 && (h("tr", { key: 'ae10fe1ed5cd37727684941c1b17e733de69b163' }, h("td", { key: '9c254e79353671eb05d1113d94cba7325ce7c3ba', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '6b76fc64a41871ef0f2ba740b47a5cb31e4a19cd' }, h("tr", { key: 'b35917f75a735736e4c363c8bafb250f3685cb17', style: { fontSize: '12px' } }, h("td", { key: 'f7ab405dc0a71eebc47097d7bac030e15b7e1011', colSpan: 4 }), h("td", { key: '2676160ec621f4422ae246f6ad7d252a4de8f7be', style: { width: '250px' } }, h("div", { key: 'a17e646da50d5c393b830900d2761b851dbc798e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd00eb6030ed15013ef456d17e903e25cb9711239', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9bc16c8025a63b49d2f4e89b25898ebd48b40791', class: "legend bg-primary" }), h("p", { key: 'e9194b6bf245bdd0db350b7d995fe60e7a2b7914', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '27d82bf8e9a816f67705432c98af4280fbc072dc', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'facfd608c323feb11ffc6dc12dd063659b627fdd', class: "legend secondary" }), h("p", { key: 'e07f06ae2f62b393ee92ba2fd9e4b576e76c42fa', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'a68a8287c8bd9682082fec408108ecc3b1b338e7', class: 'd-flex mx-auto' }, h("ir-button", { key: 'd7f04e810d939cdfa8928a9f61e63f13dc07b6b6', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
