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
        return (h("div", { key: '9aa8e2b946c5ff7a7b8c96df474366d25f7bf88d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '95c6b29c8981e9127b29332cea393997f4a26a03', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '713cccda5cc4899d8ce77ceaf5ae4409ba713e7e', class: "table-header" }, h("tr", { key: '3ff813465effa5b7ce13dcc92312f517479f0600' }, h("th", { key: '7d52516594faa01baa011dbe51b0e926a4684db5', class: "text-left" }, "Country"), h("th", { key: 'de6def37192bd2eb40776539108b0a5fa009f3be', class: "text-center" }, "Room nights"), h("th", { key: 'acc06b0ed18d91ee526c42de698b0b0cf74590cd', class: "text-center" }, "No of guests"), h("th", { key: '35775402b0709bdd3c0a8fd18802db9579ba6f29', class: "text-right" }, "Revenue"), h("th", { key: '6f266579004a7f262f88f5c7cc65edf2088d684b', class: "" }))), h("tbody", { key: '047dbd4a6771ca07933f278fd31e4014d8c84676' }, this.records.length === 0 && (h("tr", { key: '836af2d5d5ceb0a462987b2f010f6e578a511d9c' }, h("td", { key: '63000438a2cf16b1548184db7d19ae52c1a6c7d6', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '157e968c0b3b4c8e2627ff25f2e5ffedaaeaf13c' }, h("tr", { key: '8b9e76c80f4d487b1294be5262313cd86fd353e7', style: { fontSize: '12px' } }, h("td", { key: '3538eceb5c358fa828bc404b184cf262a08c4037', colSpan: 4 }), h("td", { key: '910b82854aaf802d7f6878896502f8e15e24989b', style: { width: '250px' } }, h("div", { key: '84b1d2a58ab9c9e65dea30598d347f03dff04a77', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '0ba9b5ca861eb4c52d394943dcbd8194ed4e1af6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b9c34af21deb853dc2594de89b06f21a762f5bde', class: "legend bg-primary" }), h("p", { key: '6c1e65d33c0add03f2772a94d20823601940465e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '95500256840dae0c05119911fd264b05981f7a34', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '749a2ab180fe41c5ac9b8493819dda4cca3ceadc', class: "legend secondary" }), h("p", { key: 'ca641543e9bb23ecdbfa335b4b7efc22710d4c0c', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '3b85aebc75fb907e7795fbc262b3a3a8cdef8e06', class: 'd-flex mx-auto' }, h("ir-button", { key: '8757a86228247e018913367ec7f34fafb9ab921d', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
