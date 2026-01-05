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
        return (h("div", { key: '4a287c1e3666a2c5c29acaed0728e23df9339ba1', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c407fefff422398457ab50a43d3eca9c3709a177', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '50d5c8fd841e36f68e020f477dd7d935e44aed3a', class: "table-header" }, h("tr", { key: '676e032a222ae97314689616d7e8850450b71f54' }, h("th", { key: '4b90e2ae7555aad91cbc96f83802c5ac3918850c', class: "text-left" }, "Country"), h("th", { key: 'db539e6697a2c3daf0d01aafb3b4e997ece1c1eb', class: "text-center" }, "Room nights"), h("th", { key: 'a70e065158518253fae5faaf71213e2840eeb487', class: "text-center" }, "No of guests"), h("th", { key: '1e7943fc6ef4e0735f4f629022f27462b15f0fc6', class: "text-right" }, "Revenue"), h("th", { key: 'f5ba198a18295ad2592059311eefcc51124bcaaa', class: "" }))), h("tbody", { key: '6585e6fb3eedac53c85142ddceda6aa2613a627b' }, this.records.length === 0 && (h("tr", { key: '3a2ead863f80732668af54bc3374f79056c47442' }, h("td", { key: '39e8b39fbb9caa74692179b3d4ed849f76d7b1fd', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '818a656aebdd3ef6076a13a53983dc67efb795e6' }, h("tr", { key: 'c5b38f8ef6534d16a6cddb97b971d78e1528f9f5', style: { fontSize: '12px' } }, h("td", { key: 'fab9a1134d67f3bd26133eab7a4fa4a740d64a3f', colSpan: 4 }), h("td", { key: '8fcbd4eabed497aae9bc4bd8ef447bc8505438df', style: { width: '250px' } }, h("div", { key: '410a882165b9e3d4bdb6a98438ae994e875da833', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '1323ac9e857ccb3a0ae9f39dfc3689f81f07e2bf', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '96512e7d98bcb5fbb8a7b54618f198bc6f68de3b', class: "legend bg-primary" }), h("p", { key: '2d0f2afa59c72d8883e2fe323e2c4eeefcfa36a1', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4075e3d03df5405bbf731ef746713e1eebdca0e0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a2eea55607796fd493e5cc5beda795368ef998cd', class: "legend secondary" }), h("p", { key: '5471afe6c5412c6c0a114d0d034a555fac062bc8', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'f977b5ebaf051481af5a91babaca9c0469fff7da', class: 'd-flex mx-auto' }, h("ir-button", { key: '042ed29dc0273931ac4f9f60fcfe7bdedca7ba3a', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
