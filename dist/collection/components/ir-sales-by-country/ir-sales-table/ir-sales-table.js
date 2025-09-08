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
        return (h("div", { key: '24aad472967fdf818e26832096c5e18b138d2754', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3b19f53f01fdaa851c7b5a84ec97407bfc71f0a6', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f91263abac76fcd656ffec67a96cee74dd3e8b4e', class: "table-header" }, h("tr", { key: '0ef44caff81dc82f4d94e5237d99509a74dc3818' }, h("th", { key: '72c56b40f92e7a74325d637d8f57eb85e3c423fb', class: "text-left" }, "Country"), h("th", { key: '9b83598f5247142d25f221693dfee771290ec1e9', class: "text-center" }, "Room nights"), h("th", { key: '207b7a0f7d9adbfd4a18a272b66ad67b01136a5e', class: "text-center" }, "No of guests"), h("th", { key: 'ad28a72a2ae93d5ee2efb8bcda96300d15f61664', class: "text-right" }, "Revenue"), h("th", { key: '0965df6156cff39e233080bee547e287f58c13ba', class: "" }))), h("tbody", { key: 'ffcb3e1ef2265d2247532ce8fe085df5db3a1d60' }, this.records.length === 0 && (h("tr", { key: '4b733e2a815f0e2b25f527df203c41f4ebcb2c18' }, h("td", { key: 'b39889c1db6d60a740b2ee1596d53daed9361593', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'e28e5ebfd2fbe3958f70f204e54d64177573b908' }, h("tr", { key: '9b1f82dd1fd82301db2214adfc93d2a8b28506a4', style: { fontSize: '12px' } }, h("td", { key: '9ed58e94c61cf8dbef315bffb8a25906ed96f34c', colSpan: 4 }), h("td", { key: 'dd704c0e25df67ba34bd48f24c4f320d1e5d020d', style: { width: '250px' } }, h("div", { key: 'c5a3bd8ecd2fe0ae7082fc350b007865cb83a50e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'b18f417874c6a702b682e34841c78754d976c872', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'bf54fb4c1b48ba0913d97f658c049654c5ac4129', class: "legend bg-primary" }), h("p", { key: 'e5658f44399cc73520d25581d59296afb8d1d512', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '8cb5374adba7fb47d4749926ac3a92294e44229f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3d16f8cdf9e99ce44c4bcdb3cd8852f832c67323', class: "legend secondary" }), h("p", { key: 'b5b738ac1def9cca2d1814599ec928068ae81a34', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '42e5e7b55552fe3f7779802508500c34fa3b8f06', class: 'd-flex mx-auto' }, h("ir-button", { key: 'c389c46ad8b8cd86d917109ee7c438f5d03ae0a2', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
