import { h } from "@stencil/core";
export class IrSalesTable {
    constructor() {
        this.records = [];
    }
    render() {
        return (h("div", { key: '28c232486dc2e2068db25f7a9d671cd75de67bd6', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'f4a4855113f980a0ff7e92a90e92483d0164dc51', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '505f54675f6bb9a57be9a6423532b7e5718a68cb', class: "table-header" }, h("tr", { key: '696767a835d1ad0bff90d1720bd816544359d016' }, h("th", { key: '34710003a5aaf483e4f5eb59c6e3409aa31f8865', class: "text-left" }, "Country"), h("th", { key: 'fc1edcaac631834a21837d391da90f503eed55c5', class: "" }, "Room nights"), h("th", { key: 'cc39fecf99429d7cd75c53113db2043e65179b8e', class: "" }))), h("tbody", { key: 'b446fffc9597a63f5f95cbe7dc3e33fb0977c3a1' }, this.records.length === 0 && (h("tr", { key: '5ba84be71965048b3c0d9f02056ccd6553b549db' }, h("td", { key: '62e1dfdc3413d57c41139a3cc03cbc7a1ce392ce', colSpan: 4, style: { height: '300px' } }, "No data found."))), this.records.map(record => {
            const mainPercentage = `${parseFloat(Math.ceil(record.percentage).toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year_percentage ? `${parseFloat(Math.ceil(record.last_year_percentage).toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, record.country), h("td", null, record.nights), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), record.last_year_percentage && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: 'd2c9407388716ecd14974ebcb21c72e13f3928e6' }, h("tr", { key: '78ccdc7aab73e2ab9db4d5d067f8875c6599442d', style: { fontSize: '12px' } }, h("td", { key: '3e5969c9c87995d71388d13f3557884a613b7afa', colSpan: 2 }), h("td", { key: '1cdd403424f57656f889275bbde28198520fc9b4', style: { width: '250px' } }, h("div", { key: '3aafc35cb3228b4660d5024fa2280db4ca16700f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: '16e8a67dbe19370c83efc56832651c5b2918fe6d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'de901c0ed923c5afdfe08c5595e753c438e55f65', class: "legend bg-primary" }), h("p", { key: '4f84548dda9df58f54261a0350b6c588006d710f', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c980235734b464b063b23ad9ec439c82d0a8f385', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '66d824b28f1e5ffa0eb69d5e7ca407802dc58655', class: "legend secondary" }), h("p", { key: '5c5e53a984dfe04495318e0292cc133ef0ef26de', class: "p-0 m-0" }, "Previous year")))))))));
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
            }
        };
    }
}
//# sourceMappingURL=ir-sales-table.js.map
