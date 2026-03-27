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
        return (h("div", { key: '830a2083d73b5c7bae72903e31c4244264f864ae', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '4bcd493f3b6d9c14b9dbb361833d26bf69b1000f', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c48c55251d8cdc8b9c1b5dfe9142fc69f6c75329', class: "table-header" }, h("tr", { key: '2fc39afe1475f77744008c6e7362c755278013d6' }, h("th", { key: '294eb734f20fd74b630687b02c9eed418a2c1ef8', class: "text-left" }, "Country"), h("th", { key: '4d42ba7e8f9d1b956c565ca8121ef78ed4c22270', class: "text-center" }, "Room nights"), h("th", { key: 'ba76afa1e57199b582f5236deac81e6e502ef9b2', class: "text-center" }, "No of guests"), h("th", { key: 'adb5885f5b1aa2d66d72c5bc07bd60611df292a2', class: "text-right" }, "Revenue"), h("th", { key: 'efbb73f6e4f459dc4ff80aeec964ad1249406dfe', class: "" }))), h("tbody", { key: '5274b268ddf1dd46dc12f53db864946ec5ba95aa' }, this.records.length === 0 && (h("tr", { key: 'ea271e221aa9e7bb1d55acb76ca58993d1be8362' }, h("td", { key: '2a815d637e1a4ed40fe4a69ee800ba047a5d9ee5', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '09dbe2e023191f18b9cc115162a48c03282c8186' }, h("tr", { key: 'cbc201cbd26e66031002d7cda3a9ce7cefbaeeec', style: { fontSize: '12px' } }, h("td", { key: 'd0ad844125054ae75ea92c636b67e550ae3441ef', colSpan: 4 }), h("td", { key: '28d6ff4824179dd5daeb1e0911b5bea20fbd3800', style: { width: '250px' } }, h("div", { key: 'ddab5a87aeb3beb28988ca5fbcfff48163e4caae', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '14381ce5bd0fd2b39332e73932e2e8e168b28800', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '31295eda72fe36a1bb7c6fbcf90d9775e27ad294', class: "legend bg-primary" }), h("p", { key: 'af4dc269eae6150c75da774b9717e9ffbbe44d24', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '20250ec71319a9dc865c98877ac24ffc86b79676', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '56d057058cb7f47292a54eb46b3a9fe3e920c68a', class: "legend secondary" }), h("p", { key: '75b1cb7f1fb52a3fbe4badc3c1dceece16d21f77', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'b4ee60d3a48248404a057ebdd8c9638f56b4b253', class: 'd-flex mx-auto' }, h("ir-button", { key: '25c849f67d231cc0da63ee928352338aad45c41f', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
