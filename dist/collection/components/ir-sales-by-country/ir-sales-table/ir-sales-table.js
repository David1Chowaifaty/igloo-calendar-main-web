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
        return (h("div", { key: 'b837bcb1823180baada9e9a3badfd2cf03ad744d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '00dba2a4d1498e0868c8057fc66e94f6519d8af5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '0d10be7db82725cb6b3ff68950c82d6c692e2928', class: "table-header" }, h("tr", { key: 'a3bfae725485840b69b3866ff7a722e0f0c92c80' }, h("th", { key: '0fe540b785c91ea0fbc8795439ae0b0ab28a3cf6', class: "text-left" }, "Country"), h("th", { key: '8a7fea9d28fc012ab8199f93cb237d48f312f941', class: "text-center" }, "Room nights"), h("th", { key: '6c7ff6cd909ba94b702786d28e60e055b5bbeb8b', class: "text-center" }, "No of guests"), h("th", { key: 'c677603154b0e8951fbf2608dd06248cdfb41c15', class: "text-right" }, "Revenue"), h("th", { key: '91caf721416a5b0bb9e3632769cc2e766dae066b', class: "" }))), h("tbody", { key: 'e0613e70e1200ea050216f7399ca365ad8f2f765' }, this.records.length === 0 && (h("tr", { key: '90886e824d8ae833d7f0706f58430a0d6e8c20b1' }, h("td", { key: 'b700036bf3a7a8194e36ad86aea82f4e934a234b', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'e3b373297fb51400b09c5f11c626de77b768fb90' }, h("tr", { key: '48be98e30b8273ca8cd3ff1ff6b87717db505ae4', style: { fontSize: '12px' } }, h("td", { key: 'eac064f5f279eca8eccc38a3bd26378a3218a937', colSpan: 4 }), h("td", { key: '3fa551f29a507b0a8c48c3c26454943b87884c36', style: { width: '250px' } }, h("div", { key: '2c41cd2aecf1fb16c5da9cdb9d7e7aecff20e080', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '3c3f138c1d52aea43aa4f907c4c6ae33ee819e47', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '7fc284bb16652387409ce78bf9c90bca7a5a8cd4', class: "legend bg-primary" }), h("p", { key: '1a8da75c3172932e53ed0762c1a50476fc8dc6da', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '566023bee51562db3926497ce479cfed2d39bf02', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4b5a46e8d9b83ae1c1c83b831de259848b2bbd45', class: "legend secondary" }), h("p", { key: '102aa4f26a349c400e2fd2249ea5ced810d9d6f2', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'f46c2bba9c458282acbd1ca02d789029825ed9ea', class: 'd-flex mx-auto' }, h("ir-button", { key: '1849ffd026689daa19eab5bc7aae06f580e0a43f', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
