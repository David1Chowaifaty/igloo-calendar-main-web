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
        return (h("div", { key: '4bd600fa908c110527fdb634c3fc402674a15fe3', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '70e92495ce68ffecf6f01717d12d6ac819be130f', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4b315adcfd77b19ded09e37b26b15cf4153c8651', class: "table-header" }, h("tr", { key: 'f12b27dba1f09b4493dd909a2594380d4c4ef43e' }, h("th", { key: '7617a1cc9a7bacb3efd0793b4c8ee93546e07af7', class: "text-left" }, "Country"), h("th", { key: 'e39aad0129c41f203c9d1f6e0cf78a6409de39ea', class: "text-center" }, "Room nights"), h("th", { key: '5cc47c07555ecfc5fc19c2c0511b79de2ed2711a', class: "text-center" }, "No of guests"), h("th", { key: 'a29c2a42d3e9bb969897e62e3b60eab487ee32b1', class: "text-right" }, "Revenue"), h("th", { key: '9690dcb099317afe52f4307817ff70b512f0cbd0', class: "" }))), h("tbody", { key: 'e12f0ae28bccab5eca06dd7aa05d7d9d66e9ebec' }, this.records.length === 0 && (h("tr", { key: '50df4dc81c28c1d5bd337af99b781a2d84931a9d' }, h("td", { key: '248924796f9c7342a571ee9bdc72982d4d6ff867', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd85893e87220039c85434351d1a133997ea2ee39' }, h("tr", { key: 'b8e05f93b938f8413b2659dc9cacd3e64e9d8412', style: { fontSize: '12px' } }, h("td", { key: '651bcf2a5043f6b2eed4b6e6551275fdbb256a7d', colSpan: 4 }), h("td", { key: '7eb35fcbddad09bcc4efd329285273f8b28ea128', style: { width: '250px' } }, h("div", { key: 'f45a3a29c4513bf99c287e8a2df3e99b9d7f9580', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '6371fbe6bbaf74aa62230c09ac7caddeb5714d9c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '468527315bfe00e2d7b821bad217222dcec6c692', class: "legend bg-primary" }), h("p", { key: 'd65e7769d66c1d2ce4a3f81c674467dbd698ab4f', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '234eb130f3d5abc786c0b971104e36b0d3cdb7bd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3b9a8cb640651976a07cf1603b4c9def35935382', class: "legend secondary" }), h("p", { key: '97647a4c4dc63f7439d5fb6aa816f1795777aa2d', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'faf4e394eec7d63a63cca1093ce5a700496d0e17', class: 'd-flex mx-auto' }, h("ir-button", { key: 'a8da2b7d4b8daad501885eda0a9d3f43054444ee', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
