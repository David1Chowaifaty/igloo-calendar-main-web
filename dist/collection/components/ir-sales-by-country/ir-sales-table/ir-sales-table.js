import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrSalesTable {
    constructor() {
        this.records = [];
        this.visibleCount = 10;
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (h("div", { key: 'ee1a74430d0efc9fe27759b114e926d967b6486f', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '12ed3ab4639b5d8430a3d86bf7730dbc25fb9852', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8aa6f124a119f7bb8a60b9b396565bc7427875b0', class: "table-header" }, h("tr", { key: '40660e0b58aadcd7b6927a5d7cac8b083aed1889' }, h("th", { key: 'cdf63e74d36594ff5eeba9290cf89523cf241d2e', class: "text-left" }, "Country"), h("th", { key: 'cf7d55c416d74fa37e4e354287f4e90bbb9e274a', class: "text-center" }, "Room nights"), h("th", { key: '980a7990284d8d33a16ad78f9107c9f35e44af77', class: "text-center" }, "No of guests"), h("th", { key: '214bbe0185f9ab1ae8c1489baeabefedb5171924', class: "text-right" }, "Revenue"), h("th", { key: '87beb18891a19f691dc56a9255397504dc5504f8', class: "" }))), h("tbody", { key: '3f4a3d501498eb98dc75675bfb4f003ec0fc05d9' }, this.records.length === 0 && (h("tr", { key: '93a60dd1308011d6ea27b607d4d98590c03f3b79' }, h("td", { key: '51705b36fee9f04bb544817c04deb4c01efca83d', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '696987c68d053c654d99d16e7d8c33e2688c1259' }, h("tr", { key: 'c94e411ccd5ae2d34193776b58453ed5e385a16a', style: { fontSize: '12px' } }, h("td", { key: '893042c008ee5a13f687ecfe217cc6fe602f6bbe', colSpan: 4 }), h("td", { key: 'bd600b3971fc6a165b33a2395cd86e78ae0d61a2', style: { width: '250px' } }, h("div", { key: '8cf5bdf5f9432bb8e38e6f9190151f79f43bb1db', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd2b8d7ae6c27775a509f8c464e8f9f62e763d3cd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '31ad94d30c216ace3d14a91c45e4c71e80a2de85', class: "legend bg-primary" }), h("p", { key: '5f592bdebc429a69775633acfd804398dd7daefa', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '64a628d789a1e20870038c6ff5f50e9de8b36674', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9c07dea62f3d1d77d8d91a85f48af8907e3fa1f8', class: "legend secondary" }), h("p", { key: 'd09d42e2ca8f171617ffeb492a1e0de7f6bb6d15', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '2e7e7585282ea42f99a6801dc33512766037623d', class: 'd-flex mx-auto' }, h("ir-button", { key: '6153aeb069b54ebbbb715ac3152f95ad3fd89319', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
