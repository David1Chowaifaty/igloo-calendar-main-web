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
        return (h("div", { key: '8d6e79f5b569e045d8d6ffb4f7e79c7bba8c8420', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'beb3666fd037d32bd5e2d1884d0a0ffe861132b7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ba6bf097cac11df6272e14dc10e81048ccce5fea', class: "table-header" }, h("tr", { key: '36c9c090a95ba49b794179151b55680cbb72b4ed' }, h("th", { key: '0474114e3d4197e9566a7f2283f70820ae55e15f', class: "text-left" }, "Country"), h("th", { key: '808e2f18d2271a545e177882cec34cd4fab89173', class: "text-center" }, "Room nights"), h("th", { key: '015b1030175e9bd4ec8a2a9774f44063286331b7', class: "text-center" }, "No of guests"), h("th", { key: 'a59d787a091fcd22a4dbb6832250dc53ac001398', class: "text-right" }, "Revenue"), h("th", { key: 'd3756ac5e192dc7ce3a809e7701b21eece8286a1', class: "" }))), h("tbody", { key: 'f20c6b8da3e815d9029b56cb78f808255a7b7919' }, this.records.length === 0 && (h("tr", { key: '88a6cc6879157dc815a3d1922b04bed98f8eb1b6' }, h("td", { key: 'c769fce886aa3bf83b5cbbfda24be9301ebf71b5', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '37b87dcf4e209ed1ff19ba89bd894cac9c4c2f0c' }, h("tr", { key: '5757ecc4f2da1a65a8e1a0e7f1cfdf349444173d', style: { fontSize: '12px' } }, h("td", { key: '28d21a8965609c098e6ad14f9ff205f4f455d564', colSpan: 4 }), h("td", { key: '07a35a126917c43bdaad5783f1c7459d81d7caa3', style: { width: '250px' } }, h("div", { key: 'b8a589435c6142715e3c4bb578da48da8d19d802', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '9d20eb3b4ffd48044380491c359c3d17167e7344', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3121cd6b4b388cf02c43fea6adb08242eac8e188', class: "legend bg-primary" }), h("p", { key: '26390c187bffb7c6341bcdc82ac1554b02fa9d98', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '28f34251bf2f6abe0be3e8531c4015a2b38f0a15', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a6132f0e83356099a9ab07bda18598d4a4d12300', class: "legend secondary" }), h("p", { key: '649e3d3c1e2823abfd2cc8e41ffc9d89e45d0e70', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'b324f8ac4e2f6b25f8a9bf20fe3a1bb8558936bf', class: 'd-flex mx-auto' }, h("ir-button", { key: '14efa1576866dfdb345e96122d002852ce4a3d0c', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
