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
        return (h("div", { key: '5ff6288b17bd0b30e00836679496669ff40f3d1a', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '2594120d4cbd01281479f409f449d5301c863a15', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '14ab9fa539ffa10806af474d47dce003ec59a08d', class: "table-header" }, h("tr", { key: '1b070552388e646f2b360f298cf0819bc2525bac' }, h("th", { key: '30cd76fb73515100ce9a324de131585f96c7f164', class: "text-left" }, "Country"), h("th", { key: '5fe87663189f4030f40ee205c478f6834fcd98b1', class: "text-center" }, "Room nights"), h("th", { key: 'f8975f64bc0fa1a6e2b894b04d0623f176a1f0e6', class: "text-center" }, "No of guests"), h("th", { key: 'b2cfc10b5b453723289cab8d092b985ea209428d', class: "text-right" }, "Revenue"), h("th", { key: 'd9f2d77527875a11f4b1b283719f06be1ed2965c', class: "" }))), h("tbody", { key: '3cd8b2bf87676a62c8a9223e3dcc51ef065e812d' }, this.records.length === 0 && (h("tr", { key: '8c825e36265c1f4ffca726482b415325cd4dc0bf' }, h("td", { key: '6407cd85e915f707297828633b98f4a74681a466', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'edd999d482618d49628dc2d13d593fee9af3a939' }, h("tr", { key: 'c52e50376a6952d15669f6c9c6aa64be5943563c', style: { fontSize: '12px' } }, h("td", { key: '6d3b4cd6aa2b006660ba378299e4288bf48cfa14', colSpan: 4 }), h("td", { key: 'd9f3a3bed827c85576e56c610c536c052d3c4192', style: { width: '250px' } }, h("div", { key: '43c92d5972f057e85bf753181d171ee1f866e78b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '4eec00e2f9f7d0337c407c103f8245489b8fb9ec', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '114c1dc1adcc5d431283811c7c24fe2561ecae26', class: "legend bg-primary" }), h("p", { key: '04c34801500f3506da825ba2793851ad40506ae1', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'f9c1569d4227b059bfa55fda3a2c0a2fa3e7b845', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '623304be48fc4491fca0a45f8ea56a64f936aeea', class: "legend secondary" }), h("p", { key: 'ef9b8435636a2ea17659a8d5d0ee717dbd3a8aaa', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '29fc0c711708e43ba42c8afc9beab54ccdf834d7', class: 'd-flex mx-auto' }, h("ir-button", { key: '3fbc3a12f05852b291b3b92c82d091ede33f1cff', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
