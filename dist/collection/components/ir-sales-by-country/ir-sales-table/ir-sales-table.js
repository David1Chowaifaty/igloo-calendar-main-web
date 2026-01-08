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
        return (h("div", { key: '7ed8b0eb404e6ffc9fa6173e5b119a4dd135454d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5b86573798de9f7a726157cc7a61676dc9d8ab59', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '72729fd4aa4c1e35ecfb6bacc1e712c6881b13c8', class: "table-header" }, h("tr", { key: 'a3b480ecb092561f01f2c5d1fc36c4d2df8a57ae' }, h("th", { key: '00ebec82cc7cb382b8cfbfd8cc2e0efd7bcc5585', class: "text-left" }, "Country"), h("th", { key: 'cb6f57bb5fcd1bc832b7b4a74323abcad31ac76d', class: "text-center" }, "Room nights"), h("th", { key: '42b7849454a0dcad9829c4d30d1487b27cda97c6', class: "text-center" }, "No of guests"), h("th", { key: '30db7ec94f5d36bab95d2d79f1444c803cb52a65', class: "text-right" }, "Revenue"), h("th", { key: '9f18ceb06bc125b81d1b42f1c53356c74a8dbd4a', class: "" }))), h("tbody", { key: '8b9b08be579306a06a370340f8720d5b50146099' }, this.records.length === 0 && (h("tr", { key: '86f0ba022232d90970593422be01445b1fb408ba' }, h("td", { key: '5fd04c4bdf720d0b1e4470f69016e8224bef0ebe', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '1878ae36e8f9a955c336c66c24f7efc3fd1c96ac' }, h("tr", { key: '98057d66430994a934afecb1debf91d1a7195177', style: { fontSize: '12px' } }, h("td", { key: 'df47241112bea8322b5e62fd162e40bfc3d0d3d9', colSpan: 4 }), h("td", { key: 'ac4433626baca73b47c9f8c332a788471f35b7fd', style: { width: '250px' } }, h("div", { key: '73968e4e2fbc702400b8d8caeac039cfc293f217', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '5cb013d36a1e3d44e5053b5a1aef6ca502a31670', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '573aadff933ccfd305287c9cbce99384360b96a2', class: "legend bg-primary" }), h("p", { key: '596bdb45149974aa699f40f364d1fda8c881e0d6', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7273ea239e66654fa66021fcb691ea2369c39326', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '83568597c38e37d4dfefd7f18b9e33decfae0a54', class: "legend secondary" }), h("p", { key: 'd8c84ca60c742260123c8e6cd5032a8b47621c31', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'f6c0c030ce802ba75475403963362399232d1829', class: 'd-flex mx-auto' }, h("ir-button", { key: 'cabd38d721213c5c2b0f9a22ffa29e8ea914f4c0', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
