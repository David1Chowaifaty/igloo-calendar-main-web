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
        return (h("div", { key: '1459fdece6122702f5edf7fb1f6cc2d54dbebcdb', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'f929521c68cedfa1a0578e571c79ff1285b14850', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '17c724ccdc546cab0732bed7c4e891751a407582', class: "table-header" }, h("tr", { key: '343d2a8056f1ce7fb95bc9c47480dba0efdecf07' }, h("th", { key: '097f2ffa0cf5b5f57b30ba787b1e5cd5048fb7ae', class: "text-left" }, "Country"), h("th", { key: '1db1da39b2ee435db4cb62700eabd13b489daff1', class: "text-center" }, "Room nights"), h("th", { key: '89bef8a5d68db8c7d145f27ff8a2e8680917e704', class: "text-center" }, "No of guests"), h("th", { key: '2b20438374be886063b05bf33badd6cef6ffbcfa', class: "text-right" }, "Revenue"), h("th", { key: '4dcd889ae804cb0f8e26da8522e2e15bb500e0b4', class: "" }))), h("tbody", { key: 'd780e6e8322b48467067a1bd24af24c8b5ffb359' }, this.records.length === 0 && (h("tr", { key: '991cf86101157c9010548092719e430278443400' }, h("td", { key: '359076a4b28d5b4c8f449ef1c3adfc3c8973fa22', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8d21f7008c4b7018c77cfb831ed2adda847a51ab' }, h("tr", { key: '791aaec67cc05796baec545a3ffd4649881a0d16', style: { fontSize: '12px' } }, h("td", { key: '515ee8678d2f1163125f8e05242eef95f0276a11', colSpan: 4 }), h("td", { key: '91ee63d8a5d060c9df6915b524c8be9a38569994', style: { width: '250px' } }, h("div", { key: '00e3ec7b8f5de44f8f9a155994bebc33266765f1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2ecff6b4afc7ca39c661765350d4557dabf92fd6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9a46d5a215a19691c6bf00143f60d2703945dd82', class: "legend bg-primary" }), h("p", { key: '35eb853c977c9cc289308ec4a807ba68b98fdc7c', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'cbe1a044ee2cbf5c2503009565b331ade9871394', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '568083bed4c5db675478715bccd8f57b128770e7', class: "legend secondary" }), h("p", { key: '7de4598b2c9af8e9a7ad113adc7fe5920c800a3d', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'c30c36438524dcef5712a17333d901b069bbf43c', class: 'd-flex mx-auto' }, h("ir-button", { key: '765c71f06211a8c3f621a28fa3fd3fa606c562fa', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
