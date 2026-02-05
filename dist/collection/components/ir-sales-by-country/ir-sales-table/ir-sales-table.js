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
        return (h("div", { key: '2c54e4acbf83a27bf158082d3300cc78513a5c94', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '41b5669a8e1cfb9ce57384cdc9879cc9e5d32be4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '1d29c5dc599bd075db891f1d3a8e8acee668ac63', class: "table-header" }, h("tr", { key: 'e770f408ea98470353cf1103879b9629e2a4aebf' }, h("th", { key: 'c79685658cba9d0f5747e955157f2bbb3e79e778', class: "text-left" }, "Country"), h("th", { key: '3a8d9ac51063fecc27d571e01737bbab5191e142', class: "text-center" }, "Room nights"), h("th", { key: '6acde4ffb5c585615c3386c55812551de5326af7', class: "text-center" }, "No of guests"), h("th", { key: '24edc0111a5dd209850e745e026c17822b16006d', class: "text-right" }, "Revenue"), h("th", { key: '0091b3321e36a3e1823238f12dd9942e2f88076b', class: "" }))), h("tbody", { key: 'd00efcad91d4ec103155b937b33e4fb509b343a3' }, this.records.length === 0 && (h("tr", { key: '54ee0094e1bd89053330776c0fc12f678b1e9cec' }, h("td", { key: '401ca5d69850778cd9e6717636450b833400eda8', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7f5360147b6a465e88e52b3da7dfbde91d434e45' }, h("tr", { key: '804e9b04918f1d770c3697ecbd1bfc0796480695', style: { fontSize: '12px' } }, h("td", { key: 'd9592fd8f3c232115213996d19512068a874c069', colSpan: 4 }), h("td", { key: '6bc89abbabc438cd6b2f5ef1a3b108353edddd3d', style: { width: '250px' } }, h("div", { key: 'd40ff734d51c77954c1b61c2d7dba4666838a4ea', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '6510520154f79b54766a3d346e18b55704bbf277', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '36a4265fcb9a1b205fac94f8ca08afaa1d4e2f72', class: "legend bg-primary" }), h("p", { key: 'b7c06cc8d6bac84b60b5342602a0dafb3a74004a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '11432e6a2752a20283e92bb97819871eb4c10921', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c1eab29e0826aec0b8933dc808807a12a0ddfb91', class: "legend secondary" }), h("p", { key: '2012b76cb851ad93b86d9ad1b9011ccdc09749eb', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'deec60ca0821b599bcffbb94d236709f65da6855', class: 'd-flex mx-auto' }, h("ir-button", { key: '81b0922357aa691af54ba10f2af5cbcac3396b4e', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
