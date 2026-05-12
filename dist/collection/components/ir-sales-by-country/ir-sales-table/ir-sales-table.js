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
        return (h("div", { key: 'd79e27505fb08f3ad059df75a1a4d23f53970801', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '13971f9346b5833bf0941d451d43bfff63eae05c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd6f334348a6e9416a8b9788c6e96868047454406', class: "table-header" }, h("tr", { key: '275091de3f168409d4714084ec9301874a013bd6' }, h("th", { key: '573e033533e31a51f56ab2cd7718d764956e2ebc', class: "text-left" }, "Country"), h("th", { key: 'e2729231a07a01b22170331b6c74507e4a83fbeb', class: "text-center" }, "Room nights"), h("th", { key: '752acb9264cb74850376d16362587634d961be40', class: "text-center" }, "No of guests"), h("th", { key: '6fbd5b27de362271a9845928e0132b0b12a38d3a', class: "text-right" }, "Revenue"), h("th", { key: 'c99f5a875a944709cacd29a4c69f736953a70d13', class: "" }))), h("tbody", { key: '7d3f1e4a6c9e97c9f3a0b9a966c7168edac1cd08' }, this.records.length === 0 && (h("tr", { key: '1c63698b71f080132efe93ee6a0be7dd11bdb112' }, h("td", { key: '5bad7cc056d1009f8fe43c74d9553457c03c27e1', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'c008f1d887f7a0c3d84c6904e059bc41dec521f9' }, h("tr", { key: 'c8af36606d44d6b442132dc3802e2fdf6525d2ba', style: { fontSize: '12px' } }, h("td", { key: '195199c5bcdd45db33a00e154c4e3973696f48d8', colSpan: 4 }), h("td", { key: '77b46c3e69805c2c27c0f14361355a84e399b00e', style: { width: '250px' } }, h("div", { key: 'befd162b95bf646ef4c146dec688b0901aba3dcf', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '1801ffb60779a2f4cd70c26c0293b809605abed5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '48f60a8025eece3b022ff174c73a8aa6af2b7bbc', class: "legend bg-primary" }), h("p", { key: '0967474ea4164deee1f914ba55e9c3f1618d2bc6', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'cdb9b2c19f228cb3af7f0bdc7902d9942dc4f096', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '469f89a98037c00f08ec790d4ffe63e95bd859b0', class: "legend secondary" }), h("p", { key: '76ef9885b2baa19e76f49ffcdbd9e2593c13def2', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'd218079915cd7ed12c85bd54731de88cde0cb0e9', class: 'd-flex mx-auto' }, h("ir-button", { key: '175b3bb8f5c907844e2434c4f438a373707885cd', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
