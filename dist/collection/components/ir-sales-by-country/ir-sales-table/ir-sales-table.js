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
        return (h("div", { key: 'c62bb7a82e2334d8a8a56a963cf93cca811b4b40', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '7f6b130a4818634b2a27b39973b5da2d81e77a00', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f608bbf8c92dea672c14fbf2b6b62f0373393436', class: "table-header" }, h("tr", { key: '3601a6e707f25de99ab3053dc3483328a033e2b5' }, h("th", { key: 'c4ca647a37c6e5e5e71f72bddf16031aec4dbe21', class: "text-left" }, "Country"), h("th", { key: 'df15e78fb0ff9857a52076f3973eb294a01822c6', class: "text-center" }, "Room nights"), h("th", { key: 'a53daedd38ad03a2522d57d276d198d48e58f150', class: "text-center" }, "No of guests"), h("th", { key: '5b4f561200a10265f44cf3d5f91b7662edd5eb5a', class: "text-right" }, "Revenue"), h("th", { key: '70935dc4148531517c823ef134e3099dd0ab6a44', class: "" }))), h("tbody", { key: 'e9a7293cfe8d216a09f164a7fd0c01d6254b139d' }, this.records.length === 0 && (h("tr", { key: '286026501db2aa5bc84a011ed09166a3ea7f0ecf' }, h("td", { key: '13ee7de339e0d3c3ba2c2270d0b9c9da848a843b', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '177ddf2538d9707ce7e95c9e4d34153c0649737a' }, h("tr", { key: '3eecd92f3c8910d66a8895700563495e508769bb', style: { fontSize: '12px' } }, h("td", { key: '6a2f4a42bbc0d0bf3a6570ad5fe4cb9e28bbc283', colSpan: 4 }), h("td", { key: '178c3779002e2be4ea89d44553444d3c3dc001ff', style: { width: '250px' } }, h("div", { key: '1e23f7720986d16c611cbedf6db1000b1b4fa808', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '5e894fd70e7c477a60e2682185bfcb6e5d37c804', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b91576c27f34681850ef3b38cac73a39c9d0b08f', class: "legend bg-primary" }), h("p", { key: '1249dc4eb713cc73288ead4fbf12de83dac988c4', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ca37bf49acb1955a1d94044cf2d403090b43398b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '870d1e796f94d6c9b2bf1b0f3aa200cf127044f6', class: "legend secondary" }), h("p", { key: '40c873de75ee2f499eae1da9a88c0b95fe5eebf0', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '756a5edf501e87d0abc279960ee0355672a91b4b', class: 'd-flex mx-auto' }, h("ir-button", { key: 'c349d0d7028d463bb4d7998e49a76712c789350c', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
