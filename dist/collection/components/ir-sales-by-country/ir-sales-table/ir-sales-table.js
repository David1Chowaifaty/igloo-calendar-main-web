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
        return (h("div", { key: '0bdf2040c8b23399fc087532a482fa56671c0ba1', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '389fa823446b728e96770cb8bf34b764f97471c2', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '388c9e86fcd22e52b97b957de6ea689550c5052b', class: "table-header" }, h("tr", { key: '133705fee288024b4ca0700fb91a980769a84546' }, h("th", { key: 'f62f62af9aeda1f65c487ab6fd591b0337ea7827', class: "text-left" }, "Country"), h("th", { key: '4d2707d6fe19cb1c0fb7bc61e396ecb883859912', class: "text-center" }, "Room nights"), h("th", { key: 'c7ae2a9389f0d3f50e8b01559b850aace2b67882', class: "text-center" }, "No of guests"), h("th", { key: '0600e38ea92a794209d207f99213be55dc99cc94', class: "text-right" }, "Revenue"), h("th", { key: '3be1d8df235de011a3d36ec7df9c802a390c62eb', class: "" }))), h("tbody", { key: 'ab35c0e0faf781bbf2f6fbdfe59b65f3e63e9a74' }, this.records.length === 0 && (h("tr", { key: '35aa92efab047094e3832177741e6bb3fc1c3544' }, h("td", { key: '9070d50eb1e56cb9d3763ed350f8fa01eb8c0cb9', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '9b9b3e4d0d6e61982fad8de21f23683562df63fb' }, h("tr", { key: '46e4836c8bdd22657fd65c16417ce455c1d04e61', style: { fontSize: '12px' } }, h("td", { key: 'b5353f0d1dcde9eff87f812222f4e56b54924b72', colSpan: 4 }), h("td", { key: 'aca5fe6d85da6cb41ab05421769182e81948e578', style: { width: '250px' } }, h("div", { key: 'a441382ba135f0a70d12e97e598925ecf658c2f5', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '8453c94c19709df192e1c9e1ef1ee2d367b48383', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'cc3ae13a2be0d8ac45e03c1952161f5ce1cd198c', class: "legend bg-primary" }), h("p", { key: 'ebf9511688f7c9beba715656681699816bc30e53', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7d811a52dce036d7c603608302eed2857d39a1cd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0e63447cfbdcb24eac00cf64a5fbce97b3147aa6', class: "legend secondary" }), h("p", { key: 'e25f083df88138fd503882711d1718191e3fd0f6', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '32fc528dfede5871f432c0969da21e89edbc3722', class: 'd-flex mx-auto' }, h("ir-button", { key: 'd5092ee1cbc3e5c9d24b77dbf736b44aa5390157', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
