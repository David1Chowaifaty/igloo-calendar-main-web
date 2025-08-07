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
        return (h("div", { key: 'b022ef42cefaae6e1f0288e794522107362f121b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5ddaea95c2a2ae38c8e0a8f99aef1b021ba9a63c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'cc4d436e01d07ff591a8f4f7bd3c9fc65a79622c', class: "table-header" }, h("tr", { key: '4bd9cb83b7b6357760dbb74db88a992397f92e24' }, h("th", { key: '373168feb7bfe0e19dc2cfab57004140d00f831d', class: "text-left" }, "Country"), h("th", { key: '63d599a738f41db6a7af7b2139370038e1241dd9', class: "text-center" }, "Room nights"), h("th", { key: 'e0702c62df3ceabd3718b5e2bed5ecbcf61cdd16', class: "text-center" }, "No of guests"), h("th", { key: 'a485987a8f54feddfcb238fa63be80173ccf0a1f', class: "text-right" }, "Revenue"), h("th", { key: '1695c551bd98b715adf8bfa7aad8420e7ad7378c', class: "" }))), h("tbody", { key: '99357371dd4727d3714bfacb4c47bad5c6b96d69' }, this.records.length === 0 && (h("tr", { key: '8e6e0d7b5817448617e4eb388a7a83dc085702d1' }, h("td", { key: '6673b2b42fc94ade722b602453cf1ad9f8b5875a', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7978ea6a741e60b8bf0573d67f2a7f5a1bf5aa92' }, h("tr", { key: '712039fce46b5330d31b70396660a2429e439416', style: { fontSize: '12px' } }, h("td", { key: '9ff808bbd227c337c6553c2e3a751395085d5a3a', colSpan: 4 }), h("td", { key: '8b76dcf02cc485951be9dd917d07a51f8028439d', style: { width: '250px' } }, h("div", { key: '48a97baacc377390f7a84fe2caa5fad128e45cda', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'c69e57b03048d02ca7a6945f44a0f21ea9d6687d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4c56a83a2982dd23e00d036430e2910e0aea4e2d', class: "legend bg-primary" }), h("p", { key: '7040504b76109a2f0c2363efdb15a9ef7858f082', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7817ad98f9db1c4b58c7cb931b691f3af263d9f2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '86cf197c05e8061e152e6b38205d723797e314e3', class: "legend secondary" }), h("p", { key: '02fa6398dd99087770e13f77055ab821147bb053', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '04a4ab5736e73602b5101ac4b0735676e50f4512', class: 'd-flex mx-auto' }, h("ir-button", { key: '1c7fb3971f348dc2dc3ca43ea186f4d23568f97d', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
