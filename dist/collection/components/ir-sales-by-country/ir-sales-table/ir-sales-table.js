import { h } from "@stencil/core";
const sampleSalesData = [
    {
        id: '1',
        country: 'United States',
        nights: 120,
        percentage: 65.5,
        last_year_percentage: 60.2,
    },
    {
        id: '2',
        country: 'United Kingdom',
        nights: 90,
        percentage: 55.3,
        last_year_percentage: 50.1,
    },
    {
        id: '3',
        country: 'Germany',
        nights: 75,
        percentage: 48.7,
        last_year_percentage: 45.0,
    },
    {
        id: '4',
        country: 'France',
        nights: 60,
        percentage: 42.9,
        last_year_percentage: 39.5,
    },
    {
        id: '5',
        country: 'Australia',
        nights: 30,
        percentage: 21.0,
        last_year_percentage: 19.0,
    },
];
export class IrSalesTable {
    constructor() {
        this.records = sampleSalesData;
    }
    render() {
        return (h("div", { key: '5b3a50e56a8b5ec3e600e8f7d574749cd0b5a3c4', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'e09abc009fbb537780765a484ded17bbf4253b35', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '595a2de7571a97cab2ddd1414cf1c6a995ba35a4', class: "table-header" }, h("tr", { key: 'ffb244aa125ed404b3c8d72378e32e87c7494857' }, h("th", { key: '6374eb672e40d6c15778ebc517e653a373ea9aa2', class: "text-left" }, "Country"), h("th", { key: 'dc39245265f452fb1b9efa79fdc87bf710b9cd40', class: "" }, "Room nights"), h("th", { key: '9a6ed4f58f78c0f0d36c45af6d9d67d44ef0494a', class: "" }))), h("tbody", { key: '34202f5ec6b9bf0b7dd827e37c434f4fb6950f07' }, this.records.length === 0 && (h("tr", { key: '91fc54453555fda9ec8ed1b2176cdb062a2a8461' }, h("td", { key: '64f8709bc99d834ee332eb75ca2c0878964263f9', colSpan: 4, style: { height: '300px' } }, "No data found."))), this.records.map(record => {
            const mainPercentage = `${parseFloat(Math.ceil(record.percentage).toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year_percentage ? `${parseFloat(Math.ceil(record.last_year_percentage).toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, record.country), h("td", null, record.nights), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), record.last_year_percentage && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: '07ec7d387b5eaf518c73cd2854ce86ba476dd8de' }, h("tr", { key: '1ac2c0ebbe47021d2ab97d7aa1209418322c76d0', style: { fontSize: '12px' } }, h("td", { key: 'ca9b7ca6d7f21df9449daa0538c2de0d7f3f7962', colSpan: 2 }), h("td", { key: '87c216dfbd0221f35f40a9c98b83c28f19e75b5c', style: { width: '250px' } }, h("div", { key: '835802f5f07edc100376345fd84d76b8aee647ce', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: 'ed2f99b96ae79ba1fe2a900acbbfad1b283a9589', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0b9c733e42d59841a966b2e28fa94811ab06fe89', class: "legend bg-primary" }), h("p", { key: '5ca1ac9ff2da445e461d6d636f8d13ceed1fc121', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c3ee3ea1528143c1b6794aaaaa8c02dbf155f180', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '42fb7302df95a9440202c21452607c61fe164c2d', class: "legend secondary" }), h("p", { key: '0aa55700eacc8dd49fbc6cf2afb90766e6d0709d', class: "p-0 m-0" }, "Previous year")))))))));
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
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-sales-by-country/ir-sales-table/ir-sales-table.tsx",
                            "id": "src/components/ir-sales-by-country/ir-sales-table/ir-sales-table.tsx::SalesRecord"
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
                "defaultValue": "sampleSalesData"
            }
        };
    }
}
//# sourceMappingURL=ir-sales-table.js.map
