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
        return (h("div", { key: '7e6342dcd07d2163a6f6845cb2a5cf1c80aea3bd', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3807ada29162df5e7599240bbe2a1d50f78779b5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2680a93a2b5986d03db0ae659c77d3b1106866ec', class: "table-header" }, h("tr", { key: '13a606fd0c5337c86c5476a5a6ce276206c8714e' }, h("th", { key: '9cb9e30bed743b6fb46f98905e0952c880b4c2ae', class: "text-left" }, "Country"), h("th", { key: 'aec0e77138df4fe21ed9a800be2e858d1cc5ac24', class: "text-center" }, "Room nights"), h("th", { key: '3d6afaf365367214ed950f3979f34dc4aec224d4', class: "text-center" }, "No of guests"), h("th", { key: '68091af029ff4b80b9cdb844a20da9efb51a888a', class: "text-right" }, "Revenue"), h("th", { key: 'cd76b6d2e33b52b48f7ee4be5249d24107969fd1', class: "" }))), h("tbody", { key: 'f1868afcb002a88edc94dd7c4403d78e17e99560' }, this.records.length === 0 && (h("tr", { key: 'fad160611d7f91f312a273e48885d7b8b354cad0' }, h("td", { key: '1f2ca7f0a451eb7ec6e4fb15ceed68494dc1f1e9', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '944f5c945292ccb69467c88fcf130d442f7cfa12' }, h("tr", { key: '6ead48306e6646363abd68f0de76e121901c9ea7', style: { fontSize: '12px' } }, h("td", { key: '441bb0cbc5df1c69648811b43d72e7ce4eb11250', colSpan: 4 }), h("td", { key: '46ef822c4b6ced58a3d2d1ca7b5f486b3bcf43ac', style: { width: '250px' } }, h("div", { key: '51e5fad16806cc439ba56fbc9cb47f710d9d0fb7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'f6db6cdfdad43218be6f06eb0cca1d4d36721d86', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd8801709569704c9cfd7d5aa1e34dd03abacaa5f', class: "legend bg-primary" }), h("p", { key: '3ba65870be4568f88335545c1f0723c799d09b16', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '67c551224c1d9a8d89e1ad8a6e24f0cb130a3146', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0b7784d6ba6330841ab9a65561e834fd41c23ffc', class: "legend secondary" }), h("p", { key: 'ccece61f97aed290b400ba29bea9564874b974f8', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '82e8e90012c818ed61c9d3731bb6e183ddd5f526', class: 'd-flex mx-auto' }, h("ir-button", { key: '36a529f261723e9781ee2781aa232dca314d2582', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
