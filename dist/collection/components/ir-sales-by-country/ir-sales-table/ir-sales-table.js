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
        return (h("div", { key: '3b240fd9759563ef00db0d1c17945a89fea14d7f', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'bf676614692dff3b4321e288a529a0e916c662b8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '23993027b4e13757d0dfda5a5d2595a7fd3c9253', class: "table-header" }, h("tr", { key: 'e8894f5ee6a3e85d74a456447c5628d8f29a4c82' }, h("th", { key: '561329b3f2b7665bb649cf1c0c3d592619ab377e', class: "text-left" }, "Country"), h("th", { key: 'd91e4ffaca488a7885af660fff80d76911084f77', class: "text-center" }, "Room nights"), h("th", { key: '1f8f991f2ff30f903f0a13a0bbab2ab79790bd5d', class: "text-center" }, "No of guests"), h("th", { key: '4d0f0615ded75b29de0eb96ea9729c27c8a24fbc', class: "text-right" }, "Revenue"), h("th", { key: '303d78bb6fd73bb4f8f60658e43df1e96e42fd66', class: "" }))), h("tbody", { key: '64def2933eb46857d1203d55c80f3b7b1a3ece09' }, this.records.length === 0 && (h("tr", { key: 'd5194daff95f54b5a97434745c7e25088d4286b8' }, h("td", { key: 'f83b62ead0568e92fbe3bbb5b254b574114f4004', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a7c6ffd0f0be5f0826e539d12b7e2fc93e890e4a' }, h("tr", { key: '0f17516e12c104f0d74f374b171f604d72228976', style: { fontSize: '12px' } }, h("td", { key: 'ce66a64b7c112676918fbe138731449f6cf0c140', colSpan: 4 }), h("td", { key: 'f562f3a67070aca748144cfa39801176fa668b5f', style: { width: '250px' } }, h("div", { key: '0b74d01db76b23ebc4878597e983ac7d25209d0c', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'c7dbe4b318657ab2a52a49ee93d5e603a9d0e372', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '10719450ef69766beeb91b6346b5749fd87d6d27', class: "legend bg-primary" }), h("p", { key: 'd500807167b99091595e685f0f20777532428c6f', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5b5673f59ca8b219d29bc1d589345b9c0c541fc2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '672a8f74a0ece69c0d3e0d387b740c4a9ea36dd6', class: "legend secondary" }), h("p", { key: 'c57b08e395650c46e798897a6b90acca379537c3', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '9d7a3812a12b1972b4466770302425f34a9b3e16', class: 'd-flex mx-auto' }, h("ir-button", { key: 'f1d9c439cd9778075225d991144ba7de4402d622', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
                            "id": "src/components/ir-sales-by-country/types.ts::SalesRecord",
                            "referenceLocation": "SalesRecord"
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
                            "id": "src/components/ir-sales-by-country/types.ts::MappedCountries",
                            "referenceLocation": "MappedCountries"
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
