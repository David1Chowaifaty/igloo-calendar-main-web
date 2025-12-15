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
        return (h("div", { key: '83925d3f684fc1eced61cc92e55fb51e2e52ad78', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '43ab06375df6f84132a059444977db3e7d595955', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '66eebb03aeffbf5babdd3c22c2c1049882333a59', class: "table-header" }, h("tr", { key: 'cf4d9f5d9ae08372c615d61fbaebd3a8164764e6' }, h("th", { key: 'e4c7b80ee3011d2bf76995f0239b71eeb50578bc', class: "text-left" }, "Country"), h("th", { key: '097ead5356b5d067b910d262df3993731b18436e', class: "text-center" }, "Room nights"), h("th", { key: 'b54b6fc033d2b7df06b02efac0f34b96020e253c', class: "text-center" }, "No of guests"), h("th", { key: 'd97f48bd2f7d3fcde4165bb43378ccef607beef3', class: "text-right" }, "Revenue"), h("th", { key: '6c65376de294d80a7248489315c8cc904df44d44', class: "" }))), h("tbody", { key: '36a5a04a1eb40ff4104fa65abe13b03294ece33c' }, this.records.length === 0 && (h("tr", { key: 'a9fc6be164ee28b958bb0aafd6785f151f61ca87' }, h("td", { key: 'dc79a264d4bf2aef4cc349219ea02c0ec334f5ef', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '24f987988cafc3bbeff62ff3abcded179fba1cfa' }, h("tr", { key: 'f30aa2b4d0b6499374d0337be66c7da4d1bb0021', style: { fontSize: '12px' } }, h("td", { key: 'c73292dadf6615fa1ad7416dda076c19dbbb73a7', colSpan: 4 }), h("td", { key: '219489c9677fbf3fa4574d56a870517877d99a0f', style: { width: '250px' } }, h("div", { key: '5a06e77625a14e54640ed41d49305bce39a64303', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '32a2328b5741da2f359e31db50ef8650d3f17c78', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4bf22dc83e2a182160a69e2ecc81e2235b8f6f1d', class: "legend bg-primary" }), h("p", { key: '0bebc7a99c12656283196c4459b0784cd38d3cd2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '8dce22d0c944a77c221d640108f56c1a0d10983b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '25c8ae7e09cfa09875983e3ed03d82dc14587e17', class: "legend secondary" }), h("p", { key: 'e46d43fed9af261d857dbbcfbda83bfa1d44a1f6', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '2ad3f4aabc75a2fc1fc792121ae3e07417f952d4', class: 'd-flex mx-auto' }, h("ir-button", { key: 'f4410b623ffd96492f089847a7c362d6d542f5c3', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
