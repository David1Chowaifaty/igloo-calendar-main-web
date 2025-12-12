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
        return (h("div", { key: '2cd57fe200f9a1a0ba0be92d0fa5dcfb3d35a70d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'e7d2e6d31fda032979f1fe92d4fb82a5e55c44ef', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '15967b9fb5c98644e0fb991b3361eb3600c222aa', class: "table-header" }, h("tr", { key: '23f22c042d06b1f6c5808ebdc758889021a861e3' }, h("th", { key: 'd07d24647339affd062777d7089a0dd55d173e0a', class: "text-left" }, "Country"), h("th", { key: 'a5ca378c3068550f364ce7c5da4f50b8eb106950', class: "text-center" }, "Room nights"), h("th", { key: 'efc21781df4b30b2b9cf4c07aa6ee210144eb77c', class: "text-center" }, "No of guests"), h("th", { key: 'e4da0147aab499ee4bb9de39460ab24b3d56d13c', class: "text-right" }, "Revenue"), h("th", { key: 'acafb615f2f1212d95d0de7acaf6cf89733f9629', class: "" }))), h("tbody", { key: '57799044f1bf46a9518c95418dc962039e0ad89f' }, this.records.length === 0 && (h("tr", { key: 'dab8fac0949878ad3097a848d9e0b5e803c4c25f' }, h("td", { key: 'c69687d61723d51b314ac1ddf1ae0fc1c1614fbe', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '56220ed9e5f27435581ce0ded54c19695967de6a' }, h("tr", { key: '5b83012a7e67674b6243d81ca2162ad493190a0b', style: { fontSize: '12px' } }, h("td", { key: '3dddf140adaeea6051bd752102a4783eb3400d32', colSpan: 4 }), h("td", { key: 'c12f716040ec714d1d8963436d92a556228f5764', style: { width: '250px' } }, h("div", { key: 'd07aa7e81ea69392624a9a866176b135f392935c', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a59f2dd5ec2631f772f7f907898ab926df8691aa', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '06bc15f10aa635ee701f915ab4d19b27c5a1e271', class: "legend bg-primary" }), h("p", { key: 'ac414aeb6c72ef0dc2f53dfe84729a9bd53b4d2a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '51962f485062bf09d54c8f25afece4b92edf34e5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6950e31626c288e078da06e715b2c4d0c40ed5fa', class: "legend secondary" }), h("p", { key: '38faa10aa28758d68ef6970e9343462ffb5726ee', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '95e22eb012f2ebe3b81def9bf0c6cf42859fa26b', class: 'd-flex mx-auto' }, h("ir-button", { key: '2d19f7292549249b19e991ba073ddc3c3cb29ea9', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
