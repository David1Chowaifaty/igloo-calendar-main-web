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
        return (h("div", { key: 'c9771a84ec68fad3b6913b225dd621c99ef8cb63', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '953427b771b8c76eb82130d1554161dc86833867', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2798a8f35e460790b6000998d5824bb40cf0fd40', class: "table-header" }, h("tr", { key: '86866b1b7c5d10ea2f4c845dd972db18244461a0' }, h("th", { key: '05ed8bb4dc894aaf08562dba7c4b58b3ed4416b4', class: "text-left" }, "Country"), h("th", { key: '672f90f26045887e86d7bb3a24ce90ebc5c95393', class: "text-center" }, "Room nights"), h("th", { key: '040128bbfdac6609e34f24a0e0e1ae2be3a7ddb9', class: "text-center" }, "No of guests"), h("th", { key: '4500682294589c829b8dc0df0812cad8091bc219', class: "text-right" }, "Revenue"), h("th", { key: '2e24d0c9fd6eaf8efaeb650a0a0faa54a16b59de', class: "" }))), h("tbody", { key: '379032f964a925122a618b47adf8af111e4faf29' }, this.records.length === 0 && (h("tr", { key: '686930d9b3fe6e0b43dfff5566819ac684130b02' }, h("td", { key: '1714b42cb5a3c73ee222c5b624f21c38e4fb0503', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '572d5b4a02cff123d1762b3513e54d47cf0db65a' }, h("tr", { key: '192b120c609fb616a187cd406e089ea626429781', style: { fontSize: '12px' } }, h("td", { key: '6b7fa1f1b908e12940f595429bf7f38072012767', colSpan: 4 }), h("td", { key: '952bc3b49df8058a47d419edcff57536b759998c', style: { width: '250px' } }, h("div", { key: '8a2806817d124507607839c29ce8f757c9db8814', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2cb96299eecb9ce41239d33dd0b41fb48db596b3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '20253c05f91ae9d87c75af7208e5222649357ab0', class: "legend bg-primary" }), h("p", { key: '9172a60eb54633998f0a26b4eb651de254a838ed', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'aa091146594d995fbc700254e3634a8dff248497', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a775c36eb34b18c64fda944984a5355cb3bc67c1', class: "legend secondary" }), h("p", { key: '5ce19f2f6c797c63e4d77dde5cbca95a889cea84', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '0f6c3289a9fe6435c42398b49b492f7cc858358d', class: 'd-flex mx-auto' }, h("ir-button", { key: '357d48821da851c1fe792dc048b8126b31054b70', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
