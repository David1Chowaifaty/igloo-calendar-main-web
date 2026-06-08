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
        return (h("div", { key: '90e176073dcff0b7dbae5279c79d41dd7749b341', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'fe6b5d3691fcfec884e705b0f8168c9ad9adba86', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '009bfc2b5f195212d56f57f266f706bf24fe2f51', class: "table-header" }, h("tr", { key: '12f46d61260cba4f012c761b759551e98a814984' }, h("th", { key: '15b139b1f0019ff5ff42842d799d7893372e471b', class: "text-left" }, "Country"), h("th", { key: 'e9df1c871f832efb1f0e0bea0b360dedf9c95e26', class: "text-center" }, "Room nights"), h("th", { key: '1ceb483b0d85c4f67d5502ef32f59833245c4cfb', class: "text-center" }, "No of guests"), h("th", { key: 'a877d7b9da3c0066454692e6b45560467e63fc89', class: "text-right" }, "Revenue"), h("th", { key: '4a77af075639449411e12336c766390aac5bd030', class: "" }))), h("tbody", { key: '3b21c9466d2295828312c8e26153630951b8d559' }, this.records.length === 0 && (h("tr", { key: '5bb2bef66ad3cba72511cb6a0c11cd20dd755ef8' }, h("td", { key: 'c0e52a9c1a44acbbbb47eea60488e5ae3d8c4e00', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '71a74a54f8d66aee41cc63943069ff3de4444ac9' }, h("tr", { key: '48789906be3e51815cbe4edfaceff5093b35e7ec', style: { fontSize: '12px' } }, h("td", { key: 'd4800931cb7cb4b8bcf6af98f3cede34f6aa711d', colSpan: 4 }), h("td", { key: '17ad817e4ed218b3408e012608d3246673625c8b', style: { width: '250px' } }, h("div", { key: '45dabe94ac4bc58d537c30d63eedbdb370e03b53', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '5c0d1286a285203318faa2647e90f6c6a3308a98', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '48eaf181e2e7524dc8bd4f6e5ce41bd5412865e2', class: "legend bg-primary" }), h("p", { key: '987bd8ea0f9f93adc2096ad4174d0e8e7c79be3e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'd25b7ce7c0f82b4c14a1519da9b69c938242b337', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '287b73c3e24f3a09fa18b9b5a3955cc8feae4080', class: "legend secondary" }), h("p", { key: '03398bf5dbb83ca45a4c4c0a24e5ab3ec445f1f4', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'a9e2c0ab1fe31689e631a402ed0a2e80fed818f5', class: 'd-flex mx-auto' }, h("ir-button", { key: 'feccddd865843e14e90c8ef10c524516b3175ba7', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
