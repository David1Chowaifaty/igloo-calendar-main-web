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
        return (h("div", { key: '086f9306537a097213f1832cd380d46d749c6e9c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '7d83562e23cf73e7f221c0439f0c6c22c6a7bcca', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e0d4887d78461991c58c6f48ff3822a56c0a588d', class: "table-header" }, h("tr", { key: '478d1479e79c803b030ea2f89a768b22f9261c82' }, h("th", { key: 'b331176a5cf77bfc439b3c7f6fe685e5503ff217', class: "text-left" }, "Country"), h("th", { key: 'f05ceeb9d2a3ebc8959f9c630b63d02dbf7c21d7', class: "text-center" }, "Room nights"), h("th", { key: '04d49c57f62ed9e5d2d39cf5fd5f000ac0d4e711', class: "text-center" }, "No of guests"), h("th", { key: 'c91c8cfb86f7ac12bd30fb0d1e0e6c5630737581', class: "text-right" }, "Revenue"), h("th", { key: '5737e0cf7400f30f924556ef0fb3d07a31720421', class: "" }))), h("tbody", { key: 'bdea337658d6f5279e91b949c89fceb5a4552b3d' }, this.records.length === 0 && (h("tr", { key: 'd31d8344f7f64d19aaa735009a5972cbc3e2d88c' }, h("td", { key: 'c141bf5f5c09e90cd959ab51b815e6ba6e039cf1', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '357f510aeb7ed256b4d7569c7c302d9edb200ec1' }, h("tr", { key: 'a6a2cb04497a3cb2d9bf1945d716e788e3fd6715', style: { fontSize: '12px' } }, h("td", { key: 'ead4d301c0ecbc3438e0a3f908aba533d29b4289', colSpan: 4 }), h("td", { key: '2ac1288b2a03d87fbd97757eb6019f294cdfa019', style: { width: '250px' } }, h("div", { key: 'c537098ff9597c69ca4cc3b635d62a72931a840c', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '88643547dbcaecd407f073134e9223155c069977', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1637106bc0af347b60b2cabeeeae99e98b8ef2f8', class: "legend bg-primary" }), h("p", { key: '055b7db807df5df4c0bf5fdbb208b244a8ac4a77', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '3cc76f5edf83337b083b24596d0c91da564cbfe4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a993a38d3353abfb2c5352e77874e403ea5423ef', class: "legend secondary" }), h("p", { key: '95e22d2a8b2b19ed9ffec5807544886694aa4c5b', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '545a1d15ce97f827ca03a4131cdc43b97fef79aa', class: 'd-flex mx-auto' }, h("ir-button", { key: '92e41a19f614f0a90f76a25ed2aba8af75f4b15a', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
