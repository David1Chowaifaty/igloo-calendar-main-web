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
        return (h("div", { key: 'c68fb2490422fd7795a8963dfd2827164acc6e1c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '235db2d8896de2fd10e75962ae7882c757f900d6', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '94387d07f96087fe1edcb835b3266efe87858279', class: "table-header" }, h("tr", { key: 'bb86c630c36b34ac59493c22749bdabeba0c32f3' }, h("th", { key: 'ff8de5276ac16efb989e5f6e21e71da90c2c5095', class: "text-left" }, "Country"), h("th", { key: 'dc138f04e0622579dd9508fe32806983e4fa378f', class: "text-center" }, "Room nights"), h("th", { key: '50323d1e062acc116cb21bd8a6b2638347fca7fc', class: "text-center" }, "No of guests"), h("th", { key: '7ffbfe09f3645816f8d5ca962db86cda49049cc2', class: "text-right" }, "Revenue"), h("th", { key: 'ddfee20172666ee1bf02fd2a52840cfd0e9ad6ea', class: "" }))), h("tbody", { key: '55654ed05b9e9bc9cef1e187bf54add37685fcee' }, this.records.length === 0 && (h("tr", { key: 'ea935c3ef6ade6ddff858fa8f9ffc78968bed04b' }, h("td", { key: 'faaddb22f3640bc650cf43746811ff7196996823', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '602cd531b9c8b675c3d29f09818f16799c433cae' }, h("tr", { key: '27613db24e689d3f64d5402aa12eeeaa568e8a25', style: { fontSize: '12px' } }, h("td", { key: 'd008d51e510519ca4bbb20650b0195ebfa99ed42', colSpan: 4 }), h("td", { key: 'b61e9ad45bb6a5055976e32f33424f77a3a44ce4', style: { width: '250px' } }, h("div", { key: 'a50167ab36f8f09067844867fd28865da304795d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'ea12be126cbfe39b752a4e4b06c37a5a53e27db5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'cdd8907aea7f8fc7bd6e06a2c7c6171a18c7e29e', class: "legend bg-primary" }), h("p", { key: '80e407097353aa2c52d4d513c30fc5fc68ec8747', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '0248f28b9ffb3750b2493af8c2e5f81ead261873', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b12d5ae7435945dbe2e5cd5ffcb90173dce1dd37', class: "legend secondary" }), h("p", { key: '85e0839415e52f07b9ba0b6f5b9d76cf5864b0f9', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '0f72aca774c6f325d0f7af1b5a66f23515e5b036', class: 'd-flex mx-auto' }, h("ir-button", { key: '0c4ec39a42555edf8d9a7ef2250b778f2718620c', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
