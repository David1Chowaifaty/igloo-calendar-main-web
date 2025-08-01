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
        return (h("div", { key: '7a2ea35f762ea011b7839102a0f05d9d6f38e5e6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'fcda469b83a301a31345cac2d705812efb4e8e7a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd224276cadafbcec44e37b296ffd1f8bcb57c4ef', class: "table-header" }, h("tr", { key: 'f8957ff0eea9b1d43e01c9ef41a9b325145faa1c' }, h("th", { key: '3dfde9314cff2afff1b16b5d414f16ca796ed282', class: "text-left" }, "Country"), h("th", { key: '7a83ddeb39021ef38d9eea6e670129e122271b75', class: "text-center" }, "Room nights"), h("th", { key: 'c77d84495a44bd34d008f6a675d1e04ca13fd79f', class: "text-center" }, "No of guests"), h("th", { key: 'f9a8a3dcdc5ef22816951c1e422d90415585ff8b', class: "text-right" }, "Revenue"), h("th", { key: '5da2519fffd1cacde9179ae689bf3f813f7650e4', class: "" }))), h("tbody", { key: '3afe397514d7983588c4f5c3573b67aa28ebd958' }, this.records.length === 0 && (h("tr", { key: 'e9526df85c358926c3a3ffb333fb21e22dee2b2c' }, h("td", { key: 'df3d62f05bd6f55f3afdc83a6e593ce64f51a017', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'cfbfccb3d022a9e63cacdb5f0540a988dc99832f' }, h("tr", { key: '91890d989c44a160e4ffdc405a08a6ea173c4978', style: { fontSize: '12px' } }, h("td", { key: 'c58a0f5a0e9b048fc3245b241f81dae1393c4d64', colSpan: 4 }), h("td", { key: 'c9f407023507b1b851ae1a0e524187efe677e091', style: { width: '250px' } }, h("div", { key: '1c591e920460b7eae444c280c6bb817b4d7793e5', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2921ddb5e1284bcaff08bc8db8d5d582f027472e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a4a5516b79060222326f53df0b9b1ac942c1636f', class: "legend bg-primary" }), h("p", { key: '5f5c70335b65c6f7159f3705a94626d0a915313c', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '31fb8ad2520c78b7f60f751eecaf818bd55fb152', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2023ea587dce1f93b93c3a4939ab46b83a3c1c94', class: "legend secondary" }), h("p", { key: 'e066df545d6874c66e11f139ae9f22131947494f', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'db9c372ee974c2ae96e2b76f2c9d24784c46c02a', class: 'd-flex mx-auto' }, h("ir-button", { key: 'dd21e165dfd0dced28f67cff51707ea3d93e0b8d', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
