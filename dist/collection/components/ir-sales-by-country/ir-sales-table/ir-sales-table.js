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
        return (h("div", { key: '96bd782b63be0984f81cdb9feb6f72fc691cf7bb', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'e8fd0bfba504342afc1030ce5dbc8ee5da2910b2', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '17b517c791a7dc101b066d3b18afefdee1b4c70b', class: "table-header" }, h("tr", { key: 'd1714c1cd8daaf3f44b127c632cf2456f23f77e4' }, h("th", { key: 'e6343cae4a5bef11ab749d448dc08cf0ccee4c68', class: "text-left" }, "Country"), h("th", { key: '49f603df0a3c2768002bf4cbc69db7a144211a32', class: "text-center" }, "Room nights"), h("th", { key: 'eafa86a5c418abebbe5038d1bd67eea6b40fa519', class: "text-center" }, "No of guests"), h("th", { key: 'dd3f1ad2baeb8d336243bea7bf9e9d6266f7d443', class: "text-right" }, "Revenue"), h("th", { key: '3d07be53650175d8fca73c3715eb84b5d75d3049', class: "" }))), h("tbody", { key: 'cdde5e92a3d1b9e1994462472b80e2b3a52a2b4c' }, this.records.length === 0 && (h("tr", { key: 'ccfcc39da2ec935b257ea5f71e57517ec1f2d2ec' }, h("td", { key: '8c3e44e2371626dd37d562373bfa92b29b307636', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'cdc3e6c7acd0b5237b0a71a7c87d3e4eefbdaf32' }, h("tr", { key: '801dc19c869d4ffdf5461e050e0cdaa356d72c50', style: { fontSize: '12px' } }, h("td", { key: 'd462098b4b04189d7cdf6df2e70b0c1a70410579', colSpan: 4 }), h("td", { key: '3c4a4b00e059d346490ec7268783272664ea5212', style: { width: '250px' } }, h("div", { key: 'f2ae11f76af1f8ddff177766f131840dcbd070a1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'f59991f4328dad813495db9a65e3974630b181a9', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5d5c62aecacec90ccaa301a02350445d2e4093b0', class: "legend bg-primary" }), h("p", { key: 'b14cc24843459acdebbab57f8dc760e4e425eca2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5e0034555644fc091da60ad4b9b7475314877214', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6760a502d971e4be773ec81f106d52f81c8e442b', class: "legend secondary" }), h("p", { key: '1f3b2c1774a0ac0feda517cff8a0f1a3521b20f2', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '8473b7e1e6476d44f8750f8c8fad8b8c28c5bf75', class: 'd-flex mx-auto' }, h("ir-button", { key: 'b6614e56e489d371d7c97161561c4dcf4bfa80d4', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
