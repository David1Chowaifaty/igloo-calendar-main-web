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
        return (h("div", { key: '6e2dba4e4370f3de77baea64686967d97d7ee824', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '931b1210fb2f78c57e93622d02ab984be4958fed', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '689813145fbcf6c7ba0865fc2d50d0d15cf1f0e2', class: "table-header" }, h("tr", { key: '0248593b1647a7bc76a789901a1c8db184dbeb50' }, h("th", { key: 'd24335c8a1bc489fdf994955d209bb26efc3b218', class: "text-left" }, "Country"), h("th", { key: '7fddfe4af5776a2c163253ef5fdc89578d975974', class: "text-center" }, "Room nights"), h("th", { key: 'e140cb9d9f666889851c4eb99b538ace03762e16', class: "text-center" }, "No of guests"), h("th", { key: '031a7f549a5fd595bf0cefa52707551174be513b', class: "text-right" }, "Revenue"), h("th", { key: 'ecdc369374ca5af3c98b952eb47e5655ae784f57', class: "" }))), h("tbody", { key: '98ff353cc2f72bc2ffe2cadf90076ec48907cc60' }, this.records.length === 0 && (h("tr", { key: '9eff0914f488b4af6c74ffc90f909a15137b350e' }, h("td", { key: '04ca874aa055449b7fc00ddb5335c7001e00d4cd', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'f50f77d6934209825726a26aa1046631bae3a204' }, h("tr", { key: '09bcfa1678641dbe4eeb0b203ec084e8fd544b05', style: { fontSize: '12px' } }, h("td", { key: '8caf94f32c83488b98cbe324848e592d7852c48f', colSpan: 4 }), h("td", { key: '9da43303e1d9eb5cec4a03a1ee7b4ba12be1957e', style: { width: '250px' } }, h("div", { key: 'e9e1c629a1adee4ff327ccce36f22eb4d8c8052b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '773694e1d93d11bfa67416fbdc31e126bf2bd76c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a45138916f1f7d09cd579a4a811250a207bf7ffc', class: "legend bg-primary" }), h("p", { key: 'd3191295ecfeda16149851a624501118445a839e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5302b2bebfe7256f850ce85b68b83a599aaad78c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0cc9064f7adfff3362d7a95b09f03b2f16d2e071', class: "legend secondary" }), h("p", { key: '35d95947edfd2e543b969ced6186c33a901dc1e3', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '5009166327762d12a68e26dc448a3a7f0052b692', class: 'd-flex mx-auto' }, h("ir-button", { key: '777db25b3199dd6ed8ac17c83f86a96d4f3ea120', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
