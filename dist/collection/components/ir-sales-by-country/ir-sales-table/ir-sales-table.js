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
        return (h("div", { key: 'b4df1fc03982a377981f5973e79d7bd47f13f6f7', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '24ffed43aa67019f741f6360c98b9837f95fcdac', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '108154d6392e16e818d394fec1df7ffcba088231', class: "table-header" }, h("tr", { key: 'a50e9d37cc170a9e24122773476609af67ed97ee' }, h("th", { key: '290ba6ed91d6ca8172861649a2a0f66def347b63', class: "text-left" }, "Country"), h("th", { key: '00b29fb3a626112296d7ebefe6588467e1fc3792', class: "text-center" }, "Room nights"), h("th", { key: 'ffdae4fa93af731eb46b36cae72b2f3b8983300d', class: "text-center" }, "No of guests"), h("th", { key: '54f6b44a5748f80e4615a5997a6ed5cdc4e49a93', class: "text-right" }, "Revenue"), h("th", { key: '0eb4d3286efe4e3c0a0ffd850abd9fcaff4ff25f', class: "" }))), h("tbody", { key: 'e68107696a17639df293347be5a35c183f9237cb' }, this.records.length === 0 && (h("tr", { key: 'be6c9307025447f623a057197050c8882fa3f23c' }, h("td", { key: '6ddfb263bf05679a092d82e253f6493405d7bc77', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'b8fb6172e278e19ab857d43bb5a9e3d5dd9a020d' }, h("tr", { key: '8c437ec8c7c61b5186671e3872db3e0f34c998c2', style: { fontSize: '12px' } }, h("td", { key: 'dabd0c057383349890c7fdb9ed752330e55d488b', colSpan: 4 }), h("td", { key: '0bb31e93a3e79e9ebef30388575c3429ef029f15', style: { width: '250px' } }, h("div", { key: '6a7829ffa32163ca3fc43a58588fb49d83ae55b9', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a751b53dac2029a7d58c45f0f1b62af3461ec37b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '81c7d006a6de2fefee7eb237d1c2e0b4ba8e16e1', class: "legend bg-primary" }), h("p", { key: 'c225ae2d93f2fca4ba8c6c1f12ee84c884d8fc74', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '6544e2c2189f1de8adbc18be1e6e7879b16908f2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '84db7c6ead45200eb541102c623af6a3036bac35', class: "legend secondary" }), h("p", { key: 'e423577f5f88f03987ad47c238d98d57f0acbc84', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'fdabd6d79bf4557935abfed6a7b93bb0dbbe4603', class: 'd-flex mx-auto' }, h("ir-button", { key: '1953ba6c93e9c5e75201f1f48c8709a0dda77f24', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
