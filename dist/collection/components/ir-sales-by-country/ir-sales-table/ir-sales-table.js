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
        return (h("div", { key: 'efbcdb92bb5dd954a3c27ffc0d14e0f562375178', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '344564ede064c56e9b9512a541d2c4570ed31887', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '9bb5af6eb07c1e86d75fa545b617f9e118158c35', class: "table-header" }, h("tr", { key: 'd3e416e45bdec6d600e21d40e46ddb27778161ff' }, h("th", { key: '5eac69b5a04b5d1ce05cefae733121b913fb8df9', class: "text-left" }, "Country"), h("th", { key: '404dd64f82d9556a97691a5321fc1a4a6ccd9db1', class: "text-center" }, "Room nights"), h("th", { key: '5c7bef806622c19cb551f542558edc2f4b68474c', class: "text-center" }, "No of guests"), h("th", { key: '6b3098dee569bcb15a11f72def2aa48145d76b16', class: "text-right" }, "Revenue"), h("th", { key: '048468a630a164c941504c15e808d380dea13394', class: "" }))), h("tbody", { key: 'bcd015a9a4c9eee57bdf007080398c2583076795' }, this.records.length === 0 && (h("tr", { key: '800a45f4dea7f1e27d4a6c03903b8be5545e2d89' }, h("td", { key: '5a0a8825f1ef9a2ca5b28d0ee10db2ef981c8968', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7a8f09071d4561beeda493d4a49a022b82a17bbf' }, h("tr", { key: '54812e20c5301901279975eb9ed3e10196a3e811', style: { fontSize: '12px' } }, h("td", { key: 'cc9470f308a0ce9bbbc9faf8c1b361462d22bf42', colSpan: 4 }), h("td", { key: 'b646a8e18b7f61e6f6e7e1212c8352184efafbb2', style: { width: '250px' } }, h("div", { key: 'e681da37eb88dd326ddc36067943040294a31137', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a24ebdb38420e0fc848666e762e06cb4362164e3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'dc59f075cf954c50aa279fee7157bfdc7357112b', class: "legend bg-primary" }), h("p", { key: '43c081446a0d74ea6693fec3c8fb4a239ef9ca6b', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b0959144d23052a2983cc7235435aab46ef87de2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f8b80f777e544767f1b004a35c0fc3d44d2305e5', class: "legend secondary" }), h("p", { key: 'ee36fcc099b23f472a54fd378d2b5d1eea9089e4', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'ea2c70e34b1e4007be5447726e4d96a576afded5', class: 'd-flex mx-auto' }, h("ir-button", { key: '504faca4bc67b4ee828c6a347c5bf52bf001f404', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
