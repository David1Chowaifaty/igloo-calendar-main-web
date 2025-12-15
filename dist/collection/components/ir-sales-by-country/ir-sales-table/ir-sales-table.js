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
        return (h("div", { key: 'c3950615cd12669c8901aabad0ac649fd6cdd966', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '17a27a66accc6ee2c1455691466cdd60ae5e67da', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '07b4fbe505168fa1ee19039662c7530af39b2bd9', class: "table-header" }, h("tr", { key: '37ff072045211a5b87668423423bc8de60a3eb6d' }, h("th", { key: 'b657f760d6cbdf2dddedd3d1ee89f1b75f8916d3', class: "text-left" }, "Country"), h("th", { key: 'c6bfd316327b5527b2ebc0c3aa8e179dc85fce23', class: "text-center" }, "Room nights"), h("th", { key: '3a21ca8812e1526e27d20682a6e618b6e4bbb44b', class: "text-center" }, "No of guests"), h("th", { key: '69767214b1264bb928d2c87ae834285248fd9155', class: "text-right" }, "Revenue"), h("th", { key: '13170c3fd9ea07cd99feb250451e029e37308c84', class: "" }))), h("tbody", { key: '69e6ea20839c0493e2e4ac43dc26f86f3b6c99f6' }, this.records.length === 0 && (h("tr", { key: 'cb7a5ca1124c0a7eae8a84ab73ca7681c6954ae6' }, h("td", { key: 'b604027a7dc9a114a325c1bbf4ceddff4e8dbdfc', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '44f64a1bb7de3f9d0252ee2c72660e612af6fc41' }, h("tr", { key: '22b3a09a1f4166830de5d471e9e7847388996377', style: { fontSize: '12px' } }, h("td", { key: '4393b49511bf88604c97f363791a01d1abeaacce', colSpan: 4 }), h("td", { key: '5dfffd8a95c1c502242e4c7a5084a751e40d7e3b', style: { width: '250px' } }, h("div", { key: 'edddcd6244c713c567e5431923b2d9c54fb9c2e3', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '35e44286f9817cc3e6d269ce9d54e9f41f989102', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '541bb02122128a5a571daabdb7a5b5ab6bb38af9', class: "legend bg-primary" }), h("p", { key: 'b557ab7ad05d14e118c87821bd54d2086fff57b3', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5dc41d5d26ed589fe1b8c37bcea7a017ae49513f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '843c09fe708f25cf3ddab4a0101992c83d08f2d3', class: "legend secondary" }), h("p", { key: '16261e922a40cdda79fab3d2fdbd0329c8c152a6', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '5647de7532768a5df6b175e3309d232d63dc163d', class: 'd-flex mx-auto' }, h("ir-button", { key: '542a4fcb54f5fcd6640f308a2b02186d0d27965c', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
