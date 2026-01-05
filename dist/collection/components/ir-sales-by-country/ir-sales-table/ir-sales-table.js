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
        return (h("div", { key: 'b42f45b33176e3cf6409494845f53133f69b13a6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c7085684c0d95934b7a70f78e2bdfea7f3331af1', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b6eb045ddfef657f9689565fc5c781e108a5131b', class: "table-header" }, h("tr", { key: '90ad812e77b9b2fe82808ae85e68cf568f041ab1' }, h("th", { key: 'a1c767add20e067e6770a4ccc9f78c2d876ea231', class: "text-left" }, "Country"), h("th", { key: 'c654295e52beb69133a3708b09fb2d22072652cb', class: "text-center" }, "Room nights"), h("th", { key: '85870e5de48610c2e1446d287f35b1a0ce2e632e', class: "text-center" }, "No of guests"), h("th", { key: 'e929a2983c1d60555907fa6a2df90901a0a609d4', class: "text-right" }, "Revenue"), h("th", { key: '9289d78bd984f8427896dcd734d1e2e4fd007927', class: "" }))), h("tbody", { key: '06f01e2d5fe168827ccc601a0c8470e155e89640' }, this.records.length === 0 && (h("tr", { key: '39b7daab6f1dad91a1cb56a027ff15f744b4f7b8' }, h("td", { key: 'b2191c32a34c8d744d45fe1734ee9b513c92f3df', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '0aa283f040e00352ffcf5e42a75ecc4408036221' }, h("tr", { key: '4cef5c7a0c21c8b4a879f7352590f99d259d604c', style: { fontSize: '12px' } }, h("td", { key: 'dd07719ad1d15bb4694e7badb8faf4ce3145983a', colSpan: 4 }), h("td", { key: 'e0c529181535d82fc206d67036da3ecc954321fd', style: { width: '250px' } }, h("div", { key: 'b55c21382f5e1db2214ce879aac01ecaaf57f64e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'dbd280c9d546359e8380ad9d5f109b04f523de50', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '21004324b3c751d3b1b09f8f58bbbc4763b1bab0', class: "legend bg-primary" }), h("p", { key: 'b6db9273730d79ef6ec4fe92599af7a3b49c3e5d', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a5f5fdedacc51cb9d0b2f5653ecdd12b3389283a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '54a5da24a9e0ac2bdf955dbef1d60829c59c1985', class: "legend secondary" }), h("p", { key: '7551ad2d1bf02f0c80e0fd119174f06ea8508687', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'caae5949f9c5d4df90b8bf91f5d1306dd0f4696a', class: 'd-flex mx-auto' }, h("ir-button", { key: 'e0e9b951eb3dc6be1671938d737f953f5ba33dd4', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
