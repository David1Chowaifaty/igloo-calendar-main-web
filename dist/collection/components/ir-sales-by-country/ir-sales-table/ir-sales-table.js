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
        return (h("div", { key: '7821137b423184ce0c40423d3aca793f2f61022f', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '742114f89b3ea50bd3912b809b827dea22c957dd', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'dd65f07b46dd1767e31db27acd545d7a4e9022b2', class: "table-header" }, h("tr", { key: 'e5adad5d4db8b03f2193915f741135d744512f55' }, h("th", { key: 'af0e74a4d8e6169c87ac926f31fd1abc502ed7c6', class: "text-left" }, "Country"), h("th", { key: '93b472baa644534d04e95647cecfaf000c37a98f', class: "text-center" }, "Room nights"), h("th", { key: '4376756492cde2f00f0da080061d5a4df6fd2e89', class: "text-center" }, "No of guests"), h("th", { key: '419a66a8bd174e62c3980fd0491d1132d8c8069a', class: "text-right" }, "Revenue"), h("th", { key: 'b30585bc21c7e18c827ce652b7a96218ea3977a2', class: "" }))), h("tbody", { key: '4e67605f91db1b994625713c69f7bb5359c6e7ff' }, this.records.length === 0 && (h("tr", { key: '7872bd02726d9473b1e9a3a0523feef890276c7c' }, h("td", { key: '02a0262f29ccecef9f500f8783f2e3e178527dea', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '88580a08d9ccf77418c43b7224c5231d4e663cf9' }, h("tr", { key: '32ceb99775f50fa59e6c1bba510ab857ab81b265', style: { fontSize: '12px' } }, h("td", { key: '58201c5fdd873a1864b378e6d918f1f6a3fd38a2', colSpan: 4 }), h("td", { key: '4d32ab69a88aaad7c8e7029310cf02c8d5d72e37', style: { width: '250px' } }, h("div", { key: '18a861e62753f1ad575b4dc0c681f68150b69d7f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'cf7848cb86f77660ba9f8dcab27388170da17e05', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '76f7e715c256b1bf67a54d519930a71d96c5af5d', class: "legend bg-primary" }), h("p", { key: 'b629ce05fd573c938ff13dba4b857635be3096e7', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '78d65eafc4412957371a2bc1fbb22270c4c8d331', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '212be52ca26e46997ebb14737a38a85180089228', class: "legend secondary" }), h("p", { key: 'cb0b16973b96b17e12f77869c66ba383845558a3', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'd5cb25ee61731dcacd644195fc58cc2943e62347', class: 'd-flex mx-auto' }, h("ir-button", { key: '2412a61b88ca68c9c4dd3ccb97286a85756b294a', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
