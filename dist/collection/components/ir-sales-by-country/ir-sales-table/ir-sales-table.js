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
        return (h("div", { key: '86010e3fc4034eeda83a756e2cff43f219fc91f4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c61b2a274357a308b2f617c941f449c6c3ae24b6', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '45234041e57602890b4b497ab0e1306038bf15f4', class: "table-header" }, h("tr", { key: '50d950f82b38877a173cfa0becb7fad6d55a1aa9' }, h("th", { key: '66a6f290b4df4bd6d67745592d06cafc25e0369b', class: "text-left" }, "Country"), h("th", { key: '8870e661bed7532212cb3fab736c4d376bcfba9f', class: "text-center" }, "Room nights"), h("th", { key: '1ee7d6ce9451ddae92549fabc08e71634dcb4d17', class: "text-center" }, "No of guests"), h("th", { key: '3bddb298bc30a057d5bfb7dc3d509c7b01ba1007', class: "text-right" }, "Revenue"), h("th", { key: 'b5569ded5cccdf96ed57a15db585151ede80e821', class: "" }))), h("tbody", { key: '84ea9fbb55292f3e8858f906f00387059e2d0bc8' }, this.records.length === 0 && (h("tr", { key: 'ed066636bbc0d6ef19e5a5f0f7529beaa08471b6' }, h("td", { key: '88aec205ebfa7b2044eb0e51b3e4e6ccb175a178', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '10ffeb6232949b531c86423f86d4e76dd14c2bf0' }, h("tr", { key: 'ae62cfd03ee6bf933f4d9268ceb3d035171ac75c', style: { fontSize: '12px' } }, h("td", { key: '3c75846656b62a0f05da362357eb341605e047c8', colSpan: 4 }), h("td", { key: '87fc09bed0c23f8cbd85346c7ab00e00e05361c1', style: { width: '250px' } }, h("div", { key: 'b77bc18f1479496cc62b18a8637fb0ea86827c97', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a9817f13b6d5c0486b3bf3fc2860d11fb578517e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '92a8dcb2abfbc893784006fcca00031b22339f4b', class: "legend bg-primary" }), h("p", { key: 'a529d2a1803cda2ab9f13bb28a0a0ddb2fb3141e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5f233107dd4cecafb572180d98c336c2e8ad2ac2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '33a8f89c6fe8ee903ddff7b8e7da966488454a8b', class: "legend secondary" }), h("p", { key: 'f86410e76606bd328e1b48c4a8179cfb3e171a0e', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'cd5bc3e784503d9aa6845e90ec2c453d0aa000ee', class: 'd-flex mx-auto' }, h("ir-button", { key: '0967943c0bc763a7a99670881765bf75695e6313', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
