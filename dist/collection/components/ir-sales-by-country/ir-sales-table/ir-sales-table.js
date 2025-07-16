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
        return (h("div", { key: '818dd53c2a56b13e366c443915f7927a1ce2f492', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'a6a0aa6f935df758341859a183344c82449b09af', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd962317a480b66eb5de791754a3ff94a1faf7416', class: "table-header" }, h("tr", { key: '1a8b3986161cf28cd7a9f336703a52ee8db569ca' }, h("th", { key: '55f1a4db7c621361c715a7e4a34aff8447a7b595', class: "text-left" }, "Country"), h("th", { key: '5239aef09625177d11848180b88f76ecac2028b5', class: "text-center" }, "Room nights"), h("th", { key: '7b395d732b244f0603a969a7aa168350f1ded09a', class: "text-right" }, "Revenue"), h("th", { key: '589da0a1f2f154179b1d18df1e29d782b8dc86e9', class: "" }))), h("tbody", { key: '0ff4a02f24f346dc663ba56f51b4bc435aec9648' }, this.records.length === 0 && (h("tr", { key: '51afdeacbb1e32a4a175b15abfca425b214efa8e' }, h("td", { key: '208ae322d9cd47b07391c3af63c56330f2fc1ecd', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: '5e0bdecacd9a4a76c34b3e18556e45cbe4083b7e' }, h("tr", { key: '29265a1caeeb9877ab0c14953cf1fc1caccbb7af', style: { fontSize: '12px' } }, h("td", { key: '7985cf4af66c8cba3f5b7e8ef05ca1c5019b5a4e', colSpan: 3 }), h("td", { key: '3ce19bd5f65a6e7f47e080a1e82465c4a9667362', style: { width: '250px' } }, h("div", { key: '1d864b5d0efed6e0cc80ae30f8630191fc70fe10', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: '1c1c2b9062cd409120168373e2b80f7662e2b36c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4f0525075627a8140e0ef0c08fd735fb56047dbe', class: "legend bg-primary" }), h("p", { key: 'c5a79f69b0c5cb46baa72f44ecfd1333179a6211', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '82052897edb6f0fbb09a4a0d6f6a1ddfdefbbf12', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fde14285325e0b4ed6fadb26feeac210bb26b918', class: "legend secondary" }), h("p", { key: '90f75e2a33975e3b2232b154691597c7a1e36d7b', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'a73711928d3b556868167185958de89f6cbf72dc', class: "d-flex justify-content-center my-2" }, h("ir-button", { key: 'ee87f68f3d8eb007bee89d52fb66db2a6c709950', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
