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
        return (h("div", { key: '24f81d4ce5d82ce33053b9b48cc8562dab2444e9', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c4f9c6403187d9223386545581e74cb7bdc00480', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5779e837ee922aa7cfa6e3f62b98a62277f7e1e4', class: "table-header" }, h("tr", { key: '3a6a38e0547c4a653dd6fea189254db4fab4e2fa' }, h("th", { key: '375531684054a779fc251a052392dbc7a00b9050', class: "text-left" }, "Country"), h("th", { key: '251175ad9219ad1f0a81f93c151d72c2bce4fad6', class: "text-center" }, "Room nights"), h("th", { key: 'dd76abf92b2f2e49c3b98505d6f392c06f0849ac', class: "text-center" }, "No of guests"), h("th", { key: 'd663706fa6914608e0140c8b001a16de6769ea09', class: "text-right" }, "Revenue"), h("th", { key: '68563ec87e0763d9af0e6259e215d50675ebd22b', class: "" }))), h("tbody", { key: '17acb9e362aae0cae208d3d5e6e2fc2b970713ae' }, this.records.length === 0 && (h("tr", { key: 'b7104c7e642926e7b8fdec696da1b56e78e4a174' }, h("td", { key: '129247075ffafcecd6a344567499c45fe84c7ead', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '94254b443a724b4ee0627bcd3a2ed1e2289abc73' }, h("tr", { key: '078240dd420ef8ded801aa9c69ebb7a9e5f85b82', style: { fontSize: '12px' } }, h("td", { key: '6eb365ed5e299faed4a3d06297f67f0ecd201675', colSpan: 4 }), h("td", { key: 'cd78eea6a129eda106edec62d5dbed2a5c7ea767', style: { width: '250px' } }, h("div", { key: '59ede7bf5c3c164116005c82fc31441a44c8a2e4', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '82831ee2de836922343c5b7735c6be147079b349', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'add07c5b281b04e3583b4f7885eec75dad72c52b', class: "legend bg-primary" }), h("p", { key: '8a3d02e64e3817fce5bec5b4eb655785d9aa3b59', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '584b2eb798aa0c686b5e2fa47eeb98c585e9cd26', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b812de6ce69a72fc2bb23cebaabd243e338c5449', class: "legend secondary" }), h("p", { key: '584ab21c6785016668cae6e2fb28f9a7c6389f98', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '3f3106a53b1f383553e0925fac3e2e9b748d7cce', class: 'd-flex mx-auto' }, h("ir-button", { key: 'eab5a44cc2f49c0544c0f13d270d1cd4186b30a7', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
