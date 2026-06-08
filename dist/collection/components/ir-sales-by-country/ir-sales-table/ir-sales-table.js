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
        return (h("div", { key: 'e38cb0f1c803d3baf427d136a65bf4ab85486e11', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '4576aaa6471a79fceb8cafb6ccc84e70a96c9a25', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '78865292a01681f6715795c06697875e7f91942c', class: "table-header" }, h("tr", { key: 'ed9ec9e329154b692b12c31c8f45edf7190a82fb' }, h("th", { key: '7449e5b89bfbfb77f0b765653735a58597c35e05', class: "text-left" }, "Country"), h("th", { key: 'c1cc444884e6be3cb8d010d0ae39951009f121cd', class: "text-center" }, "Room nights"), h("th", { key: '7f9be249a03e7bd8a22150582c097aef53f7f05c', class: "text-center" }, "No of guests"), h("th", { key: '242bb76c43b5210c6cb51564091e7ab924d65b4c', class: "text-right" }, "Revenue"), h("th", { key: '0c9910c01282d1df9f6d6b3b1ca280f6c79e5d5b', class: "" }))), h("tbody", { key: '6b2465bfea9ebe2a65642846732ef5f2c98d5e60' }, this.records.length === 0 && (h("tr", { key: '12d674eee7139d6ccffc3172e90cf57995ae9286' }, h("td", { key: '576bbf126c2e5f2a0153f37dcd22917c8e59293e', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '1e8bf60d899ad85ef6292937125f64a8ac23bd93' }, h("tr", { key: 'f59b8d8aae7dd041eba50501b19bc426e647a014', style: { fontSize: '12px' } }, h("td", { key: '530473020684c90d9a6329d3ba92776e26d3863a', colSpan: 4 }), h("td", { key: 'a2a2a53bb6b54ac6599b4a72da978c0b94df5008', style: { width: '250px' } }, h("div", { key: '86ae134abfb3fec237156f970faf465b181dabec', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'e4daf2acfd2996a9f9ef8ab6cf64d0be8791010e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '99cc8870572da21389f48f38eb04f58996b1517e', class: "legend bg-primary" }), h("p", { key: 'c0667836f6e9325c00ed66360efa3fcaf8cb75ab', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '2e353e3470bbaebb0d2a29ce0d766f50ad2168d1', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c34695f194cd171c6377128c6d9e74575633ad0a', class: "legend secondary" }), h("p", { key: '8bd37896aa4e2b0aa121dfe2d2a2562434d86f84', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '2978e3a68da9188d28c685c87d4c758b1eec4205', class: 'd-flex mx-auto' }, h("ir-button", { key: '3e4c3b6f57a0177507397da474103555d5387a93', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
