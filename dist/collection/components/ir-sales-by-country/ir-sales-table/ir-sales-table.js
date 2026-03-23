import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrSalesTable {
    records = [];
    mappedCountries;
    visibleCount = 10;
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (h("div", { key: 'b64d315de2416ea9274887372f45a18dc39249f6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'b972a4523b08b3924609ddcf740c02c9afda6638', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '63a0898d50abbb8b31111e6bd78147396684fedf', class: "table-header" }, h("tr", { key: '452b6a7fda30d1e7ea7d10aff6836070215a1762' }, h("th", { key: 'db5003c4c9612815e361854bea1cea8cdad181a7', class: "text-left" }, "Country"), h("th", { key: 'ac9e3c945e0c4743ed115844f10b918fe3debd51', class: "text-center" }, "Room nights"), h("th", { key: '6c77d553a59c508515c47eb3261586a0e25bfc06', class: "text-center" }, "No of guests"), h("th", { key: 'f6aa7c6192c209cea42527e414b8750494d87337', class: "text-right" }, "Revenue"), h("th", { key: 'b5eca6e609ddbbd26b2cb02578a8f29852c187c7', class: "" }))), h("tbody", { key: '9aefce9525af04806209d66204e8d6421d97391e' }, this.records.length === 0 && (h("tr", { key: 'a3a121a2da48a13c1027ef825e63c9d4c26f020d' }, h("td", { key: '52b1f56120271ea439dc7f6ed780da81817b2c46', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd6d3ddf158a4460b3d07429333ed5d40402603b6' }, h("tr", { key: 'f6d1f0fbd8482ddadadba97f85d8cba94f8a60d0', style: { fontSize: '12px' } }, h("td", { key: 'd9cf16ac8d620756074ca42834a5c557d278a33e', colSpan: 4 }), h("td", { key: '7fcac9eb24f26148917076933898670ef7185a90', style: { width: '250px' } }, h("div", { key: '0a40bf8209694c7aaaad70a01c4fadbb174c5bad', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '38b850a99c6fc20d614f18e7d8c38100a62844e0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4a9b35d87c1c73fc868954ffd173517011694b43', class: "legend bg-primary" }), h("p", { key: 'ca2108479281b27096aef569e92fd654e2e5a588', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'cbc984dff1353655915c48a5f59363b41e5de259', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5b36d4b6a0c6cb7377a516a5d349d7f218addf20', class: "legend secondary" }), h("p", { key: 'ce2b0acd6e1b0195d154f3361883fc7fbabb89d7', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '44064e4eedcc6bcd0f2d989bb7c791f72a4b1d6f', class: 'd-flex mx-auto' }, h("ir-button", { key: 'e64a34bf5b504ce4feca03a8b75dc59b493a37f6', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
