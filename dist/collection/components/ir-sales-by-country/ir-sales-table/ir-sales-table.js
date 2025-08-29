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
        return (h("div", { key: '94d75155ee08e3627d6682b8252135b991d6c80f', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '7303117526f5b3fe0020ee893f3821521dc09b18', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'bca030fbe38d12ac9253f1ee04bf548d5b154024', class: "table-header" }, h("tr", { key: '34bd9d22518eec5610bbe3e86e045f14f13c715f' }, h("th", { key: '552bac9ebfce70cd39ad535a418ffd3bc65f2418', class: "text-left" }, "Country"), h("th", { key: 'f4808ef379d448bdc16f4d1e1c1a59eacd911850', class: "text-center" }, "Room nights"), h("th", { key: '3f29387245aa595416eba75e0ec53af2a4c9e792', class: "text-center" }, "No of guests"), h("th", { key: '17b24658b14545da3f9633ce514ed805c7cb4c15', class: "text-right" }, "Revenue"), h("th", { key: '78f81a87f3564faabe79b5e194edd6f2339d7267', class: "" }))), h("tbody", { key: 'ed94eddf6ecd218f83a6f6829b9e016463c0898c' }, this.records.length === 0 && (h("tr", { key: 'e51244edda9a6b51fd83877bac0c372c25066ef8' }, h("td", { key: 'a3fdc428c80a1a15187aa5187027d51471c1873c', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'e3674e3dc036ca5504bd3e6a9f74d9856c3c920d' }, h("tr", { key: '0d79f47367dc1881c7498c8922e4cb52be6d3eab', style: { fontSize: '12px' } }, h("td", { key: '1b72f1493edbe3a4d5e44d45f727963307002bf6', colSpan: 4 }), h("td", { key: '2e3bf6a67e99fe95bd56e9f463ed36a7301aea7f', style: { width: '250px' } }, h("div", { key: 'e4e485ad4bdd556393bfe4de0cbc008ae14fcb31', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'f2bd3965a5a3796728c198bd69308da74b60d7be', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2f61b0f31b5d303429d7f5757162ade6af01c666', class: "legend bg-primary" }), h("p", { key: '44378d7e78b827ffc73c22b6aa5705e83594015d', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a42390381d8c93c9cc5b99c883c58956a68b5da8', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9b84ddad391d7417846075a8001dc482cdb663e1', class: "legend secondary" }), h("p", { key: '72e27a527dfd8c5f8124dd1e10dc4f7a92e56fee', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '9369001ce85c5710a7673cee9047d6ff05f35df5', class: 'd-flex mx-auto' }, h("ir-button", { key: 'c6c520bd79fa82239efee0862577da622861b8d4', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
