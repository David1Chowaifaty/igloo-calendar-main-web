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
        return (h("div", { key: 'f564459c7283b50f00636b7102507b5035db1964', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'e9a08246ee6e457e998e1342756a8d68256e3595', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7e4d333c0139908ffd9f7466731808a7df15e295', class: "table-header" }, h("tr", { key: 'c813130663ee5fb1f6386221374afd0839f00993' }, h("th", { key: 'fc080949ea8fe1c60b9b31366b6f45fb2052989e', class: "text-left" }, "Country"), h("th", { key: '083ce2e201e34670b9995c0d0f80a83b3781c119', class: "text-center" }, "Room nights"), h("th", { key: 'd4570ef733d033662235a2f0aca3e70d003b3bba', class: "text-center" }, "No of guests"), h("th", { key: '72f9fb8d0fe4527013e19dba501a094158e5f5a4', class: "text-right" }, "Revenue"), h("th", { key: '597eb95f997cae9686927a9b5a1644e4560aec37', class: "" }))), h("tbody", { key: '9c10d6aa166a1e5a25d0cc838c03eb57b3db6146' }, this.records.length === 0 && (h("tr", { key: '65a01e466413b1e430a647f22fcd25f0eb2796ad' }, h("td", { key: 'babe0277ac57f2ff04b5e8a21dc24d802aea5e47', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '10f03363dbb7077e423721592b1dce20436baf61' }, h("tr", { key: '80e6314d41d05d733281985f9a33f12130dfe9f1', style: { fontSize: '12px' } }, h("td", { key: '9724c279b4f633c37d543f7df96b97c3f6c6cdbb', colSpan: 4 }), h("td", { key: '7e063fbcb1a3f4ee90c0605f74d480b955b9dd1c', style: { width: '250px' } }, h("div", { key: 'd3c4cf1037ce6717440679a06a88cd9ac57a4792', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'e7ab455bc2265c7ae02a19325fde41c33d1682b0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd3b5697edf58cf693160101cf63637a216f49745', class: "legend bg-primary" }), h("p", { key: '14f55ff10fe54c5ccce8eb19ef32d6de0064b326', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '3ffb3644b174ec582f50ad88c8b7db2db730c658', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'aca6457346bebef65da54cc50a0e56c09a221d83', class: "legend secondary" }), h("p", { key: 'ede48c96d710e8e229009f458a7e148bbc109223', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'f24418a13d4d993e80af23dfdd6c073df23fe039', class: 'd-flex mx-auto' }, h("ir-button", { key: '24540f7c9b9888e2ea5a19faec34e891f0676b21', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
