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
        return (h("div", { key: '2645f53f8813fb22529b82d81e016f4ad34b7480', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '574cf113dbee92c1c43c898a6adaf9c53ef826ee', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e120ea835c5e09d3251527200f0bd5503a308eb8', class: "table-header" }, h("tr", { key: '6ab21336dcd24392317413ae11ac891418f01141' }, h("th", { key: '4cd3a5918dd7102e5828ceb1d243ef71ed09887c', class: "text-left" }, "Country"), h("th", { key: '4226c3c8ddd1200292ec33bbde5aac6fabc136ab', class: "text-center" }, "Room nights"), h("th", { key: 'b8c604996d6ac43ff30743863ddc6bd35439f8dd', class: "text-center" }, "No of guests"), h("th", { key: 'c4f2ec4531da5cad8701b060b7c0a02b2f10d5a8', class: "text-right" }, "Revenue"), h("th", { key: '0afa319d29cd48b51d925bdd4911bdfff85ff6f6', class: "" }))), h("tbody", { key: '72f2df35d0afa776d6102b9c718346beab634d0a' }, this.records.length === 0 && (h("tr", { key: '308a769d062dd3f608cee7f2739b440f44fb3a99' }, h("td", { key: 'e6f4e027af5d272afd7139dafb4870a3cb2c05a0', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a0bb84013ef5602d887995bfaae4d2b623d31826' }, h("tr", { key: '9b5325ede0d550a2cd8d6b0eb2bd81de33f72e7a', style: { fontSize: '12px' } }, h("td", { key: 'f615f34cdc3a3d7be1570d08893719632dfe240a', colSpan: 4 }), h("td", { key: '7750aec108921a91d25331d7962381478b4959c0', style: { width: '250px' } }, h("div", { key: '39273bd6fb15738e5bc0585ba97ba5101da99f4d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '45587b8cf023760e5648736dd18f5089a4ca8417', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '95f4d5a915012261e56c3492b4cb5162148b074e', class: "legend bg-primary" }), h("p", { key: '536955c318b18c65fc70e5069a45309c96d51382', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '89bc11af3daaa84f6d655484281ae4852153eff6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e8435e8755a368d906ff1fd68d955c5274cfcdfc', class: "legend secondary" }), h("p", { key: 'a3f564717a0f6ea6e2d3ff2e9db0c073c66f0605', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '52f291ec9046637a1aa6bbb6ede12bed34f7375d', class: 'd-flex mx-auto' }, h("ir-button", { key: '766ff9821961f87838725951af78585ecaa0a141', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
