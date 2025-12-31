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
        return (h("div", { key: '29c2882ff0057b3d4da8033d601b2bee85c57d1e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'a671e463ce4af5c19c9069fbbaea923310280f77', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '9f411ec9837125c3fce729d525a394cf858d0c42', class: "table-header" }, h("tr", { key: 'fd1e95e7e52514a907cdbc87350a23ab1b8cc164' }, h("th", { key: 'db82b3c1041bd9f91827ad891b54f43ff9873b93', class: "text-left" }, "Country"), h("th", { key: '1b4f43db1bdf55f43c1ee73d4ab45e58bc01af80', class: "text-center" }, "Room nights"), h("th", { key: 'a206058dbf38811f68122b5ffd2817f876b36ce7', class: "text-center" }, "No of guests"), h("th", { key: '2e4fe6a2668b7b693e6e0422f9d47c93e1cf8568', class: "text-right" }, "Revenue"), h("th", { key: '050de913e75556b3ab6f8092fa950171bde2b89f', class: "" }))), h("tbody", { key: '7a47ceb620047768d863b0a76430282645c6e99f' }, this.records.length === 0 && (h("tr", { key: '45c56cc8dec9e9748de0787aaca1c0cfa734e527' }, h("td", { key: '8301608f316ea743f7da50098fed517201b4fde5', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'e2d38c5b11cade86ab6af70edd135d47de3a4798' }, h("tr", { key: 'ecbac6d16c81c23e9efe278016a50ba1ab58e4f7', style: { fontSize: '12px' } }, h("td", { key: 'fae2692f5a818b6c6f3b5ecd841957ccb9dd81b9', colSpan: 4 }), h("td", { key: 'f4a619e5fbf2fcfd856b76d7bb69731670eef1e4', style: { width: '250px' } }, h("div", { key: '147cbaf201fbd71942c535793d1294361ff0ea9e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '758303e9765845bde900feeba53bd97fc2a343a0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '87cc0f68f37abf62edd5a260f9c5bd5bfc8c9d86', class: "legend bg-primary" }), h("p", { key: 'b6dde49198be733468584799d7d4935f7823eb89', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'f4ce14310f7541e7e89e7dea7724f31d3649bfdd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '536846dd49eabca7341b1462879744f6475f9310', class: "legend secondary" }), h("p", { key: '425e87dcd07e360766e5b19debd30f9add49c167', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '9735094ef65750ad1f56f243ff0d7bfc5caff883', class: 'd-flex mx-auto' }, h("ir-button", { key: '7eb21ec875f930a841bc33269a72d95b01460022', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
