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
        return (h("div", { key: '32e98060b12997108c02cb1080ad2213c73d254a', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '643bccdbaa6a707d533f7e671b8b86b3b7972cb4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7aa1cc0e17098a887ad7cf2f9f03960059641a8a', class: "table-header" }, h("tr", { key: '25ca854cbe26bf96b528d5b9c53dd3fbf3ba95c0' }, h("th", { key: '33f68bf094e89fe460e4dc6ed94672192bf7c997', class: "text-left" }, "Country"), h("th", { key: '24520f22baf3b7b7e752c33010a0300307d6920e', class: "text-center" }, "Room nights"), h("th", { key: '7c47d73b9dd015330d20f498a54c768b5aeb4c8f', class: "text-center" }, "No of guests"), h("th", { key: '7b015416da4e4e9a7c79ad060badd72480baa9b0', class: "text-right" }, "Revenue"), h("th", { key: 'c63938514da3567f229dcee6aa6e207fd83b02aa', class: "" }))), h("tbody", { key: '3cb6e79f170d1e790c5da9d91ae6d91ffd3e8ada' }, this.records.length === 0 && (h("tr", { key: '70faff4c930ee430d8cb40ade23e8dd391bc5cf0' }, h("td", { key: 'bd81e232e684651670c7f7147c280e078a461ad6', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '57cb47184b2093a230ace68e04d15d266f9d2196' }, h("tr", { key: '6dec342632de3d5621c5f366b27e92ec8736d32c', style: { fontSize: '12px' } }, h("td", { key: 'c04e9f80eefac74dc7ef703b8192eb87703812d4', colSpan: 4 }), h("td", { key: '32e0faf5f776ca682384a887daf2721328ded6f1', style: { width: '250px' } }, h("div", { key: '9f7d2f1a2115a9933789cbe6028249511c1ad17e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'c3237c8eaccbbd90fe0b4b24520a1cbacc2842e4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ba7d5ed6a5168d2a1f174b91e893968f7a17dc94', class: "legend bg-primary" }), h("p", { key: 'b1618133558fbd6073d60ecee5491eb8f91e2dba', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ee132f57a290e3bd32e49043cda1050f74944f6b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4a18497f9c963855cf77521cfa4f38287dbb776e', class: "legend secondary" }), h("p", { key: '8ac78dc579e8a6497a5f63a234bedc68514e51db', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '782c37b556eb807e837dbe64624c0cb2a8fe9e0e', class: 'd-flex mx-auto' }, h("ir-button", { key: '46121ab92cf547007fa17b068aa37bc20992d9a9', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
