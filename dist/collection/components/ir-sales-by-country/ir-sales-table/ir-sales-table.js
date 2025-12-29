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
        return (h("div", { key: '993cf0021be23f34e3e755f439d07501883de535', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '7a7c7f87b684eab6293ad5fadb1b03761acc0966', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e2ac9349586ec5f7d9fa9dbb8a686288e6b3ce76', class: "table-header" }, h("tr", { key: 'eaf84317f80daa8b056cab86630fd03b6347bc9f' }, h("th", { key: '8fe1310872d3f9c50d3acb7c482f151bd0656f78', class: "text-left" }, "Country"), h("th", { key: 'f469204e2ad27b7eeb47eac9bff3b28b42dd1e16', class: "text-center" }, "Room nights"), h("th", { key: '07bd8ded39fbd48d70f1956d68c737386eaa6349', class: "text-center" }, "No of guests"), h("th", { key: '3a7ed426f4281b3a10d07903bb32cd5218502152', class: "text-right" }, "Revenue"), h("th", { key: 'ed542632b0cd933b2655931455ec60203f4d1aa7', class: "" }))), h("tbody", { key: '0860d4c14575514d296067fb3d02f360ba6144df' }, this.records.length === 0 && (h("tr", { key: '976d9c0289b6fe803467501bf1f7d692d0b98b1b' }, h("td", { key: '6fb9cca807a98a0cccaec6f9f1e8aad69157e006', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '6ebe22354a009b36dbda5fb2666b5a3c2c617700' }, h("tr", { key: '6b6335c6bbcea078cab94d89c8fdaf17f85e4382', style: { fontSize: '12px' } }, h("td", { key: '29b20d8a602460ae431347516d05e979eafc2edb', colSpan: 4 }), h("td", { key: '13a40ec7da24bdac0ce395bff665ce26e4ae00de', style: { width: '250px' } }, h("div", { key: 'e7219f90f454b0e3502c48af4f84972dcfcece78', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd9ddf5e7d2f8b3d4df78eaa09ef4d4ae719c9f40', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '7848bb7a2897670065dc163d3176cc1329b67b16', class: "legend bg-primary" }), h("p", { key: '33f07dea9f9655cc33fbc83c5e7f769f45478fec', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7c5d9382e697962abaa87f86cf8a2bff8daa0f6f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5b644266473b9ba14fa709f98cfd07b67a848740', class: "legend secondary" }), h("p", { key: '4e5e3492e0b28746f6fe98d26572dee75b602080', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'f5eb3a6fad67b0675ed3badd70a2c846df943f91', class: 'd-flex mx-auto' }, h("ir-button", { key: 'b97df66ceab536242ddd8607faa4921c0b37f4a7', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
