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
        return (h("div", { key: '0a1b9970b3ac6833fe21da6fa479b6c70d5703f4', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'f53fda922508864234655abb9c1e1e2c223e4eb3', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd9fc33993c63892cb480564803769c16bdd7831d', class: "table-header" }, h("tr", { key: '030c3df61e24076a1726ac4ea8484cb9d7a90a04' }, h("th", { key: '31a059dae4d1327c3fed38b722d641257f1b386d', class: "text-left" }, "Country"), h("th", { key: 'e418473b7f950638e0fcef147fced86d6f8f5d8f', class: "text-center" }, "Room nights"), h("th", { key: '3d682931cdd49b09760954c66a524ec546bab7a8', class: "text-right" }, "Revenue"), h("th", { key: 'c52916cc4516f2b209bacb5f5c6716ce03e40b8a', class: "" }))), h("tbody", { key: '9bdb5c313bbfe36bdbaa23abcc96911f7960ac19' }, this.records.length === 0 && (h("tr", { key: '70ba72629e2fa8b79e9886cffc08f49d8dc89d89' }, h("td", { key: '8b22721f0ceca918885b4584f27b889e0bfbfb8d', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: 'b7ca6796d7f75b4bc22ff00c83864c8c1f57fa9d' }, h("tr", { key: 'f696aa71fca9be9650cbb5c4c4bb51fee5755fb6', style: { fontSize: '12px' } }, h("td", { key: '933efb63cd31cbaaad7df4564bb660acc6a638c0', colSpan: 3 }), h("td", { key: '28ff5597420cfbd93af274540aa933c8035cca97', style: { width: '250px' } }, h("div", { key: '8b3fb86c14525d385ee917ccdc7c90f40ff1b942', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: 'ddda439ef7f6142d8b05517e2915ec3bb152d9f5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '70e89753c446d8b148ccdcb6edd86ed0dc3f0a24', class: "legend bg-primary" }), h("p", { key: '453ea354d8bc72efe3c3a1465040b0feaf8bbb94', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c0955722493719a7f659c5ddfefed4685a541fe2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '70c0ce51695552b837963d221f22d14d2a8cdfb5', class: "legend secondary" }), h("p", { key: 'a24a89dc4a46e5f37bae4abfbc52d3a9765fb919', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '4d64154171dc2b9283f148b94de742c72eb745e0', class: "d-flex justify-content-center my-2" }, h("ir-button", { key: 'd5ea4bba8b8e834607cbfe4ec90dacb7e736847c', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
