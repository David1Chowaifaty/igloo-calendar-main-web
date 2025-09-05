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
        return (h("div", { key: '272dce6bb344f13c893bfa87ffbaf3044039eafc', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '0bc7bd5515a376e231c6ba357ed14038b0142fa2', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3c35ea01a8446949fcbc64c4aebc34e014ee509e', class: "table-header" }, h("tr", { key: 'a33835adf6fb84919e2301f8e1ed51a4bc4d15e0' }, h("th", { key: '27ce2df0340f0f04741d6b8918f8e806f3980e51', class: "text-left" }, "Country"), h("th", { key: '402db29ca7e012873f352a5ad967135cd667a944', class: "text-center" }, "Room nights"), h("th", { key: 'ebb0618e945bc19fe4ea95a7f06e5524cef0649d', class: "text-center" }, "No of guests"), h("th", { key: 'f70d2452d714ad3bf3427c1e9101076e47b87508', class: "text-right" }, "Revenue"), h("th", { key: 'ea69e737ef2fbc7d18ed2135a5bb650cb5d9d6c1', class: "" }))), h("tbody", { key: 'f47b384b53af5f57db8d0a15827f61577d47381d' }, this.records.length === 0 && (h("tr", { key: '53c159b18fa9cd454eca64cc2e6787b46e085b3b' }, h("td", { key: 'cdbafa80cc4307dc86f5a9e0db2802c30509c9ef', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8f6e39175c43a06e17306393c8b697518ed8bfa4' }, h("tr", { key: '246d7691223c70e3e62edf11335079af94e15e94', style: { fontSize: '12px' } }, h("td", { key: '71f3d4fd5200b89313efd361791f23e3aeb56642', colSpan: 4 }), h("td", { key: '0b02bc7dd2e336cae90c19795080fc35d6efa3e7', style: { width: '250px' } }, h("div", { key: '3219637fd30face44245ad2eb07cff7bcb6f24f4', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '506a8e821343de8a63dcb5f4aba9cd382a1141dd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'efe5ec336a2f07d4e34245b13eda8f844f60b022', class: "legend bg-primary" }), h("p", { key: 'eea811b151888d16f9e09d176906345b594afb54', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5405e1feede0ad917b747a3dda69b678ff56a87f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1003738e3e031a9d48c787481d27f10374d8ff1e', class: "legend secondary" }), h("p", { key: '56a89a70c3f9be7770c691d479e0036cc42dec9e', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'e2f7ecd47b4b989cc309f5b055baf984ba897265', class: 'd-flex mx-auto' }, h("ir-button", { key: '2865b4e148c1c5b35dac0f7538766994984d49ab', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
