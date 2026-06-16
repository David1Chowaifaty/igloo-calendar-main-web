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
        return (h("div", { key: 'bd641084910c63781ddd6d9fcdd13b690d11d10b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '68945c738700740630925b79c4d226cfc7b388f5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '400647974de84f115800e10d24ae5d0d7df7cde0', class: "table-header" }, h("tr", { key: '350179635e9e35f0efc31d48a60ef3a70f81e6af' }, h("th", { key: 'b19d3ad118dfa703f54df8c629b6ce1ac31e72e0', class: "text-left" }, "Country"), h("th", { key: 'bdc2f86044ca1b0cdb1639a61cc37d37a694126c', class: "text-center" }, "Room nights"), h("th", { key: '6a35ae7f1bdd38fc1ed7c515af2446aed79ccb87', class: "text-center" }, "No of guests"), h("th", { key: '8a6e2e15747ee2d7a5bce9e3251676ab52294bb3', class: "text-right" }, "Revenue"), h("th", { key: 'f8eecfec530f27985bee39ae2dbfc0af9ac24805', class: "" }))), h("tbody", { key: '63807aaf65484659038788c2682dd507fdd088e0' }, this.records.length === 0 && (h("tr", { key: '5efd8d4ea9601077489fafdc8144821e5b435b09' }, h("td", { key: '4307c5b2caf2693837ec4307817ddc9e72be1255', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '5fc8ade1f3d936db9ea290679d7438644cadb184' }, h("tr", { key: 'c87a758633ad5b8b7af52262325e944383aeedcf', style: { fontSize: '12px' } }, h("td", { key: 'f9d9be4492f679695470c029d50f759d3838c9f6', colSpan: 4 }), h("td", { key: 'dc4a5e90fc136b6e6f9e6ee6027fdc6eaaa35c3f', style: { width: '250px' } }, h("div", { key: '4eb26581a1d5b113536500891d5bc92b38640523', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '88cf9b7f58e2300659af330e43bf8aa274164104', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'eb7a065656307ce5409d6f74700e3ce5eb5074ab', class: "legend bg-primary" }), h("p", { key: '4dc40250d23b1e3b14cd717a330428e431630d65', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '45beb808baebcd7c197418f7a92e98b3511b0d97', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '91b3c3156e3b162b732afacd13931b4dd3a940c2', class: "legend secondary" }), h("p", { key: '48f202d1ea7e396773b4dfdc80bba97d2e0d43c7', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'f9801e33fa3d73f2de3f509f4472958fa5f76429', class: 'd-flex mx-auto' }, h("ir-button", { key: '726e73f4d2f14a67daed3a6e03cf8180d839e2a6', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
