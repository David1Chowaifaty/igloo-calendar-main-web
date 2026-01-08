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
        return (h("div", { key: '6d9cf0d5ccccc17c1252c0f5be9e18c6c7c0cfb1', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '6241a036cd1100d7b66840c652a6824c63a32b0c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'dd5e815c1de3a96b732fc02a73950e62c429ed11', class: "table-header" }, h("tr", { key: '23c625c6c3211b620b58a5f371b36bd0828858e3' }, h("th", { key: 'c06607051c7f4828e98884e92389e9b302a2e01b', class: "text-left" }, "Country"), h("th", { key: '2b172d31967aaf15ee0e5b6941e915399701d823', class: "text-center" }, "Room nights"), h("th", { key: 'e556c64a8b32d558209ad78572f3de05cd5a30a7', class: "text-center" }, "No of guests"), h("th", { key: 'a352ec849618fb531d58414eef5c55eb4f73c72e', class: "text-right" }, "Revenue"), h("th", { key: '22aafb5669181d391362bf993c56ce413cfd68c8', class: "" }))), h("tbody", { key: '11e49f0c8257c1a4f8b24140b62403e677c0a65c' }, this.records.length === 0 && (h("tr", { key: '996d91b7e5e2a30cf7f85302d7d455337e816652' }, h("td", { key: 'a35b5ac306f090d2b397f3e13cc6fa429ae5a2a2', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'cdfd91060280592d5890b108d21bebb24d64e75e' }, h("tr", { key: 'c6495b0c2b62a22bfb2bb61ebe501f6e8de092f4', style: { fontSize: '12px' } }, h("td", { key: '7107e4c1139e5bdf891775536cb4e6745786c090', colSpan: 4 }), h("td", { key: '4464a3ff75b2f5bf721511a2be92df8208458406', style: { width: '250px' } }, h("div", { key: 'b7591f778c38731afcf0796632ef5be30d83ea94', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '52ee808f2a0e7c74d8969c2b25195abc0b0d8050', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2acd74554fd3311530dc0faff03339bdeb45b6c1', class: "legend bg-primary" }), h("p", { key: '912477c1a3ca5c92ce2b05ae46588198c226134a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a65e97a68074fac58ae0510c5812d4e9424f1f78', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '11a097a3b4655a47b69c26b7de5aec13cffe14e1', class: "legend secondary" }), h("p", { key: 'ee5cabdbe0f9afab179e0a4796139c77cc3c09af', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '52de6c435a6628d68015df52d51677daef39597c', class: 'd-flex mx-auto' }, h("ir-button", { key: '68e8882f1cd04b414b80edc6c2a1a7eab12adc39', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
