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
        return (h("div", { key: 'dafaf040f45a694df84add36618904fe04a44b9b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'fad0e2dc7c0daeb4efdf32e3638e50759a2df402', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f258a3c35a1a8e62d6e51beb4b50d97ac92602fc', class: "table-header" }, h("tr", { key: 'e768d0abf74f504c987e5c42272e1a937892b593' }, h("th", { key: '107bb38db18ec42a1e279f2e69a87bca3095b0db', class: "text-left" }, "Country"), h("th", { key: 'a7a56bc3acb524c6f50ab71a6b231298f8dbcc7c', class: "text-center" }, "Room nights"), h("th", { key: '1d26bb6260c91daa28e00132f13ad5130668568a', class: "text-center" }, "No of guests"), h("th", { key: 'ea6fbf7a69ea329306ca45962baedecf6b1e3521', class: "text-right" }, "Revenue"), h("th", { key: '4c8f0f02e5abee7100bd1a0bf70d92278ec257ef', class: "" }))), h("tbody", { key: 'b6e339372ccd476978daef3dd00ac7a32e5095c7' }, this.records.length === 0 && (h("tr", { key: 'a9676e8a9b6e0b874d55e6ded561fdcdb9cf8538' }, h("td", { key: '0694a9018e659b83395904c925e1a100f570f98a', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '78f1b34ed526b123b030e8ea6f53155fdded5d08' }, h("tr", { key: '04745fa4e083bc3f81185eda85f2b7ed32b64a0e', style: { fontSize: '12px' } }, h("td", { key: '59ccd32189070bb527217af09d39518ec0cd72d5', colSpan: 4 }), h("td", { key: '514f6442e161e6bf3ec3b250c2a4c160d6b82c75', style: { width: '250px' } }, h("div", { key: '0a76d28774a206c0556ecad22ea913bb1511ffc7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'e63f2e4eebcdc9bcad3a2961a25a0bd22c3896b9', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '008968fe9fde7fa5eea517e09774ba9d9311803d', class: "legend bg-primary" }), h("p", { key: 'f77218c2aa2f6d54df5ac3db855c8a6787c67317', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '2f65a35b1fea9fea0b1946a91706c04bdf21f482', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ad3f6946e79a1e25a35de6aa14b6c7d9ce09c161', class: "legend secondary" }), h("p", { key: '200cc9b1c5f592d577364b003df6239be7184068', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'e7fe17c0718737bf2f44623e9311c66d86d98be3', class: 'd-flex mx-auto' }, h("ir-button", { key: '21d73598198da5e55ac2a3b38f8f930e0428787a', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
