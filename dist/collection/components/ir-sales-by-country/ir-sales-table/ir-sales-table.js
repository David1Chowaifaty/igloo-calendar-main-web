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
        return (h("div", { key: '8359aacf1ff37b2b147eeab2cd75c235a0f916d3', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9b77233ad2c54628d111d01a8763bffb28536e5e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3b88168a28e3f0964eeae7f71dcfba3c6d2a296d', class: "table-header" }, h("tr", { key: 'afd6e90520ea85e4a0420d883a7cb1fa0aba8671' }, h("th", { key: 'c061e52e03a6db3c958dde284a5ca57541cce84e', class: "text-left" }, "Country"), h("th", { key: '69c87fbfffb7152f9192948c961f4c3a8fae624f', class: "text-center" }, "Room nights"), h("th", { key: 'be5fae1e66beb6269ac3aad691a4fafbb0bb6320', class: "text-center" }, "No of guests"), h("th", { key: '8513cdc277e068eb026a728513963da8f5c340db', class: "text-right" }, "Revenue"), h("th", { key: '75f67d3b005e7e0fce9955d072fb06375e2c915a', class: "" }))), h("tbody", { key: '945ae394d99bb3ff7c3deb28418d3fc31c2ec13f' }, this.records.length === 0 && (h("tr", { key: '0a0663fe8fdb08dad008fb442ad87bb307d26575' }, h("td", { key: 'e7f1ebe03af6f0e3e421d4a1d63e6ddf4464772a', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'f93bde7493e343bd97b15f59c24f3e4ad4b50114' }, h("tr", { key: '941dd61874b1c897e97125f96155b846749ceba7', style: { fontSize: '12px' } }, h("td", { key: 'fafcc496cc04f37ebfd2b7156c6f1572ce34e6fe', colSpan: 4 }), h("td", { key: 'd68fee54d05048d73d8428be3f5c1c4ad1e88d91', style: { width: '250px' } }, h("div", { key: '5034c7b8bb54a1165dd59c22324b8dbce419fa05', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd319801debf53fb4ef264247badd13028438071f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5a2ede874e919e6b6ebf7e3e20415aa27e5db511', class: "legend bg-primary" }), h("p", { key: 'f8d0d9e78b67c607c326c0dd9f72bee522c0ce14', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'da8566b8bf9c53ad5aeec3e40d056ececbc53a23', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e5e52cf3fad5932e09f0284ee65e4b82330489b6', class: "legend secondary" }), h("p", { key: '7c2d268ca5b8f7dec9cc398d35b2f6676f1dede9', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '85be714807636c43cd9bddbc18cdd82b5b038cdd', class: 'd-flex mx-auto' }, h("ir-button", { key: '7863e0593cf24b118ec8985490de7334c685ce52', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
