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
        return (h("div", { key: '970cbd504c58b2031d68c8886cd114ebf47d4784', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '60280cbf9f651f7ffdb271062613d48f5816e0a8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '943c0549dbecafd8179cdc8014f39b1b62f1cbd0', class: "table-header" }, h("tr", { key: 'a8f331705b6539edf38df4a11b98e226c2e71f15' }, h("th", { key: '1ede6566c4b2d4d62e5b03422e3312e633701c33', class: "text-left" }, "Country"), h("th", { key: '41f75abe96181dcb12f39da8dbf0909c6f292913', class: "text-center" }, "Room nights"), h("th", { key: '09005568472b90df3246a2c0aa8ac1230a068b12', class: "text-center" }, "No of guests"), h("th", { key: '219d39009b0e56fb76b147e26098f4adac818b71', class: "text-right" }, "Revenue"), h("th", { key: '1b1e748249c6b9b884104550c93483c84bffc147', class: "" }))), h("tbody", { key: '7216035c7879c06f08cfda0ef7f8ca03e28f7dfd' }, this.records.length === 0 && (h("tr", { key: '2dece260f687c6f38196670c56b80b73f1bb64c4' }, h("td", { key: 'fea19bf15e7f04ae8f2b0734cdbe27c6fafcad03', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'dcc9f4a5a2f0482a0576d34ce1f8f790bf06f9bc' }, h("tr", { key: '0a95b65664fc2dbdcad043cd0baa386a2222d64b', style: { fontSize: '12px' } }, h("td", { key: '17117011e693d10eaec44fa3c85a38132a2397e3', colSpan: 4 }), h("td", { key: '2cd7470fdcb19561ac8aa755393d3333025a3e9c', style: { width: '250px' } }, h("div", { key: '85bf2ec10eef6bf54c379c1fa968bcb739817ec3', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '51a68ab84a116c60349a4a627c5a527f02b25acc', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '57412cf8b224a408d5de2d38290d658b0967e478', class: "legend bg-primary" }), h("p", { key: '9f9799cc69cc72e94ed64789f761c69345b26114', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'eb8020eac6b3c41cd8a7a62ede4eb19c3a7c58f0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '259e42c5fa34ce630162eee3ae62d693ccf4d4e3', class: "legend secondary" }), h("p", { key: 'c4a7119378dec56535b6ad0f05c26b07eae73b11', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '083ded6c6d22385feb74ed9c2eefb003eed95f51', class: 'd-flex mx-auto' }, h("ir-button", { key: '42016e8acc6796ec080e28062bbf6775f3ca6f70', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
