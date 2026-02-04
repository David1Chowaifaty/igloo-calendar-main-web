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
        return (h("div", { key: '5aad869279208b8bf420b5f2ae721be1baba5e2f', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'eaeb3f9f428df75d6ee7d8e6c592efa574ee900c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '59ad1f5cda5218e47a26dd8cec3dabc2c44a6f06', class: "table-header" }, h("tr", { key: '3dbefda3353bcd978157034f97db4e7943b1faab' }, h("th", { key: '335e8fef3c6a182432ad20d1120f5bf794df01fb', class: "text-left" }, "Country"), h("th", { key: 'a9f0d1569081e54e7dea1418afa341506497358c', class: "text-center" }, "Room nights"), h("th", { key: '7bb0b534a70f04f0228f6bd6907de377fa344d62', class: "text-center" }, "No of guests"), h("th", { key: 'ddab5f3ceb37cf5430699bc88a8bf05b528b6709', class: "text-right" }, "Revenue"), h("th", { key: 'd8654a10aad35f73ad919e6840cb2c9f406a030c', class: "" }))), h("tbody", { key: '48db500b17a77a641d3917de9e9711078ba57aa2' }, this.records.length === 0 && (h("tr", { key: '6d1bd422a74415f7c61e1f86b68a638f9080078b' }, h("td", { key: '56ed11f3be759ca315a82e175cf7f40a6ef4c8f0', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '93b7d91a28f07b07d632b6ddf3b7113f3f43651f' }, h("tr", { key: '5d7f12401ed3f56cc31fcd9da0da5407355e3593', style: { fontSize: '12px' } }, h("td", { key: 'eb9cee3cec88f54bfde6e441454bf92219977bc8', colSpan: 4 }), h("td", { key: 'cc8e07d2401fcb6cd9923be77426ab5cef2e43b4', style: { width: '250px' } }, h("div", { key: 'cf2e113991514e10027c67571f9e8c63710b3171', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '4c668448737a62ba5e3f330272e000496d403263', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '536774f8644f913c96bf4e2dfdd98c30edcd35b4', class: "legend bg-primary" }), h("p", { key: '1face24f860c994e64b3f1105a060554f07b24b4', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '8dee710cc5f22c1a2bf99d1e60a5ec4133be0e16', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'edb742cdd9356fcd36741e0e15363964093c409a', class: "legend secondary" }), h("p", { key: '1322762afb9ed3099eb47dc796b36e1cf251fa54', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '4aa8418e48face30b8347348f3aec660addc6526', class: 'd-flex mx-auto' }, h("ir-button", { key: '76401e432a4b9b052d4ce760e77f09914cf06c60', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
