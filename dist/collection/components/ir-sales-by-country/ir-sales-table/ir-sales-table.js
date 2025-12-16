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
        return (h("div", { key: 'e8e10a0624c8db23cef9340e8031409a272947b8', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '88c0c98768673a3a67f3b9699e42bd226ed5b0f6', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '16d8e8b25dc02c97b4dcbcd055f7d9f57621fdf6', class: "table-header" }, h("tr", { key: 'c6e64eab4a9705bbc02a8244ed6ff6139c1a2d52' }, h("th", { key: 'c3cb5c57fb39e32958bff037fbba908f125fac25', class: "text-left" }, "Country"), h("th", { key: '92846f6dc01ad7cff7b49446bebe7e8efa763d95', class: "text-center" }, "Room nights"), h("th", { key: 'fd20c41a193ea37c427341b893ba0c244c8ddf02', class: "text-center" }, "No of guests"), h("th", { key: 'fc29f975dd312a5d8126208f6a326de45572810c', class: "text-right" }, "Revenue"), h("th", { key: '41edfb50a95300f316830ae97d79586f804e83bb', class: "" }))), h("tbody", { key: '4639c79eeddf758cb650e0064aa9993a182b5585' }, this.records.length === 0 && (h("tr", { key: 'ba70419877004807419d0503eb6318d92f3c1898' }, h("td", { key: '2919d3c2d8961732d60b9845197f7b8a2d872380', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '07856c83a03f275c25ca4db6558a2538105ae3f9' }, h("tr", { key: '73c2a2e4ab10bf76bdbc983d8f7715fd08f8c149', style: { fontSize: '12px' } }, h("td", { key: '0e6f58ef2d6e50755610bb82ecbd1a5c9a64d26f', colSpan: 4 }), h("td", { key: '2a17a330263170e790d8fbdfc14342334128bf57', style: { width: '250px' } }, h("div", { key: '3f69bfa374e2608e182478a2d1490628655e6849', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a8f37aa473d09cb0c63c3001681619cceb24dc5c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'aab1f9d35e318d5892022f2a495f2451ec235654', class: "legend bg-primary" }), h("p", { key: '102966873d230d23dffd1f21b4d66417f0bc7776', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '0e2f31a48207007cad8c94f673c5ff1470bbd153', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '905d1651a3146f7ba6f7d5f7e95e9810566ef6f5', class: "legend secondary" }), h("p", { key: 'f4c2fe22116c90a171b88ab948a1d2d84bb17c0c', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '87058b312087a966afca310ecc917d7ced432cb7', class: 'd-flex mx-auto' }, h("ir-button", { key: '6724bd19428c50a016f906f57e62f1d81e8e8736', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
