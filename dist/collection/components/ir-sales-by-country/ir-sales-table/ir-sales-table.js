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
        return (h("div", { key: '1ead1caa82bf5a4a8d9134c0e0274ed423adaff8', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'f51fd819fed9db6bb27ebca6dccda34f65908524', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4c2872c23240b7da2c8a47b72dff974ab57c4b2e', class: "table-header" }, h("tr", { key: 'cb4d7d8173da150bc2e4cc6031077e4320ed09b2' }, h("th", { key: 'd6e0437d761935221f64aa4da0bd2a23e057b71d', class: "text-left" }, "Country"), h("th", { key: '0708ae7ac5866ba781d8d9957f97182d501af627', class: "text-center" }, "Room nights"), h("th", { key: '3b8eceed7fdfc98d329c1caaa29e5b9cb44ca49e', class: "text-center" }, "No of guests"), h("th", { key: 'e6e26fe5002a212c44813deb50da2969a7cfc8b0', class: "text-right" }, "Revenue"), h("th", { key: 'c0ffc1d89f438b174ec1feb9761ac6d5c7f01715', class: "" }))), h("tbody", { key: '7145564df2bc7fc07e67697445093c234a4fd4cb' }, this.records.length === 0 && (h("tr", { key: '832a6b8a65e2b64c3166f43ab6a54c18a2fc9f74' }, h("td", { key: '019a35f0c123f4f17c4054ada9d9f7d9fa4bba6d', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '20503ab01d8ecc2989329207e4fa48a0c7895e26' }, h("tr", { key: '6ae9f038edc966716abc3fec710fbaf8187d3e15', style: { fontSize: '12px' } }, h("td", { key: '03fe2503b4fd0be40afde9fc842355db36c6f550', colSpan: 4 }), h("td", { key: '2a15c2c51dfaabc3964ce4aa5c40ea2320e179f7', style: { width: '250px' } }, h("div", { key: 'be21f76d5991e032ebc7ac63a064a29d813ff518', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'efe69636c2c118ef50f27ef3b28055d3f58635ed', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '85cf8c1a43f0819c649c5aa03ac2f15c2c72e349', class: "legend bg-primary" }), h("p", { key: '2e06b92703a7866b8c40ff0a1e528107b85e6d1f', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '9206997bdb612078bf482b71cb8e5d6c51490102', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e15ce59334475e3c4ccbf7dcf798e729d611a961', class: "legend secondary" }), h("p", { key: '96b2961affd8a7ac9d09dea2aed215177ce168be', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '1235dedfb3e788e60e064d6b27b68ca042babbe6', class: 'd-flex mx-auto' }, h("ir-button", { key: '474da0a63bba73d1c33e98dd03f47fcd9154b1c0', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
