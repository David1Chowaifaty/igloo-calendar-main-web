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
        return (h("div", { key: 'c3e4470cd4937327774a59a21c494d4199050a96', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'fd9bab7d0bcdb476d251734545f60e53b98d7143', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '1d4fadd34d10e661e3723206e005efba1a8c0f82', class: "table-header" }, h("tr", { key: 'ffd9988795fffdc6406b8671373029b019012e58' }, h("th", { key: '722d684cbe916162851d772966cee98fb59f38f5', class: "text-left" }, "Country"), h("th", { key: '10405c05001a1f3625515b382c60d472473ffdc3', class: "text-center" }, "Room nights"), h("th", { key: '7d5cfe07505e8749640943de8d8caa45b3956ce8', class: "text-center" }, "No of guests"), h("th", { key: '1dc27e86baec1867482c6463bad354a14c4f00f1', class: "text-right" }, "Revenue"), h("th", { key: 'bdf89aab942fa56a51e3a6f541c4d073f87ccfff', class: "" }))), h("tbody", { key: '39fa025f5b3e1119600e7a23658888fede86919d' }, this.records.length === 0 && (h("tr", { key: '96ed415c4ae73c85266e74206af3da366c15bb71' }, h("td", { key: '2e447453bc4fd87a2e846d9c6b65c421690ff920', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a166a7ddb49c9445c8beddaa1f47a7e21c4c2b77' }, h("tr", { key: 'ca36fc63a92f8fd53f4126bcf82caa6a14ce53d5', style: { fontSize: '12px' } }, h("td", { key: '308ef630a2642a5f830c048d75d78c4897fcb331', colSpan: 4 }), h("td", { key: '4d2545c260aa89aa28ba54b5ae2f69dfce0fda2d', style: { width: '250px' } }, h("div", { key: '31e58ca35405b4a01471555ad139a87caf270875', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '9f6e73d7e1b06b94416a036f589fd34fd05be08b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'bd128d90e0bcdee87d39477d2db0401865a4824e', class: "legend bg-primary" }), h("p", { key: '28b9f5df6b7d1278d41aff359e8a8e6154902c35', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '05b0bc5535ea5ae0d3bcad994e1b6c08daba8a18', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f84fb2496d67102e721d38349ac8507e0b786e87', class: "legend secondary" }), h("p", { key: '785f793aa338faef16d178787a0c38469bae091b', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '66e113579536f6ec287f9d5f70de9684b6e65ade', class: 'd-flex mx-auto' }, h("ir-button", { key: '1c353f880b1642b25a6b6e9a812d2e64f25976df', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
