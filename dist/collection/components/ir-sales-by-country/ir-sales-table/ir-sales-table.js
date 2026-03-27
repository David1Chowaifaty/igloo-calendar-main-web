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
        return (h("div", { key: 'e40136ea13dc6b8c5909e6928b9a7f46fdf00483', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5b275d3ff14724a4f397c17def42cbfdf8296140', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c2340a05e36c9b3d12f64a4967b1f020861b3b01', class: "table-header" }, h("tr", { key: '1b58948ed3a6cb4d46ebc5630b20a706dff14c91' }, h("th", { key: 'f32a61e559c2a63b83b5f6d8f77ba8659e61b145', class: "text-left" }, "Country"), h("th", { key: '1d8a7216a548fc569d937d210c48c1d91100433e', class: "text-center" }, "Room nights"), h("th", { key: 'af9724784990534578a13ca5be982b4447569e4c', class: "text-center" }, "No of guests"), h("th", { key: 'a54237592265f7ec794fa2b180f0c852485decf3', class: "text-right" }, "Revenue"), h("th", { key: '1340665c994828326589615b72387bfebb0aade0', class: "" }))), h("tbody", { key: '219097b6ec53b2630ce364cd3068f6c4364c3875' }, this.records.length === 0 && (h("tr", { key: 'ef5cfa254c5c008e6c644fe11aeede853bc63520' }, h("td", { key: 'b155a1c1084f791255c29cb0b06b378526f1343a', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '9bca979b9ce560bc9d56af7943eb0df88dab45b9' }, h("tr", { key: 'a9b5520f95e7c1044b0a1f0d84a22bc032e63a76', style: { fontSize: '12px' } }, h("td", { key: '6772401d40620a897feed20462b1c178291441bb', colSpan: 4 }), h("td", { key: '3d9389db045b11f89c58e1e2ca572dc2c972d646', style: { width: '250px' } }, h("div", { key: 'f6cb472c7e28378d7d3b49eb3d7f6882817db91b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '3247982d8b8803efb723e17cf1ea1a2c7e482ad2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0e8b3e0fb556d0c133813a9e183f420f2fa0db44', class: "legend bg-primary" }), h("p", { key: '5a593346076d979b89fac8d8066fd0b4e7d11bc6', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '078fc8429784171c5c1b2fab796846870894e4df', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '41593bec3bbf15e525eb8c1aca658084e5bf1200', class: "legend secondary" }), h("p", { key: '065b94f0aae3e5917eba8db0fabfaaae84db0de5', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'c1c5269789799eeba826c0aa5134ca48c34d7d2f', class: 'd-flex mx-auto' }, h("ir-button", { key: 'e2777227507446f8fdfe2c2828df2525b8767b7b', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
