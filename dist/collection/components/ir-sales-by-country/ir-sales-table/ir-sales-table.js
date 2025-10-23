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
        return (h("div", { key: 'c25f80890ffceb9c98d1c2546676b790e22ead8b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3d73998d567111875f9b6b086d390883ef70a74c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '093e24d6d6e1e591f4eece01f849c15f32c5a442', class: "table-header" }, h("tr", { key: 'e536deef0ce6e68ca355eab750e6a8bbb20c8cbe' }, h("th", { key: '72ddf10e992fc2fd965000affd1d800a24bdddde', class: "text-left" }, "Country"), h("th", { key: 'acb5350808cb4254a9c8a6fb8ed2fdab7dd23e9d', class: "text-center" }, "Room nights"), h("th", { key: '47fcf89815aa5e17725ed3b732590fe78c09058c', class: "text-center" }, "No of guests"), h("th", { key: 'eab42191e55125544856b2abcb463c1319413403', class: "text-right" }, "Revenue"), h("th", { key: '09aa27d671a99b4a5ee224bd0777209bc745b6e1', class: "" }))), h("tbody", { key: '932f3b3238c8083ca9292bca12d90f26f0896fdc' }, this.records.length === 0 && (h("tr", { key: '74760741fc7fb435fa1d8c52326815889cb05426' }, h("td", { key: '10dce6de13c2f689cd19c4c40e95289b12841478', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8110de17202be43a84368d8e919dfc368cf8d874' }, h("tr", { key: '9cd96310c4eab4704cea52f9e42c4d863648db84', style: { fontSize: '12px' } }, h("td", { key: '3524b77e0de9ad54f6a0bec9260a6e292d850c0b', colSpan: 4 }), h("td", { key: 'c46477cd0a5212ba55de2815629684ddb3647505', style: { width: '250px' } }, h("div", { key: 'e505f6b93ef97e33072a6208fe03d15864b8462c', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'e19d16a73be919738e69b04e15a08a75cc8ca1b0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd8dca1be6398d45e374b3dee8c3e9fca7aebf4fd', class: "legend bg-primary" }), h("p", { key: 'a5841b40b2cb14df67f082e190c54b28c72e6466', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c21f1a178ccfbc561146e192f280467c170275be', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0a36c6450df9f5f3078ab97e4f890fb8f1faecf2', class: "legend secondary" }), h("p", { key: 'b8074f07c9c90050399166652ec2975d57cc9a67', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '74281e365e9e2e7024911c2983a37f3e8ed75f53', class: 'd-flex mx-auto' }, h("ir-button", { key: 'dd0f61028a7c3f024a6f626f5586b17359a4653d', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
