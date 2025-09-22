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
        return (h("div", { key: '822804450ad53e086eb6bbf5e521a8eb119ad5a3', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '481691860b7a982b271ffcfddfb822e575341f07', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5b0b3588b8b7c967120c0da578003c6416be945d', class: "table-header" }, h("tr", { key: '79b6c3c6369b157f53d4816a8b75d0e47eefe237' }, h("th", { key: '1930b35eb742f8cf17634ab9d39b1b55a9f4f7c5', class: "text-left" }, "Country"), h("th", { key: '2cfdd4fcab36e36a1d6ad2851b85cb88f3f776a8', class: "text-center" }, "Room nights"), h("th", { key: '1b97e1b3165b502c69aa505e4cb75d65042eb915', class: "text-center" }, "No of guests"), h("th", { key: '72baad037d4f7829a8ff08871f6e4fc8bae86790', class: "text-right" }, "Revenue"), h("th", { key: '01e2e286446082e7530a2005b9d84d561df243b2', class: "" }))), h("tbody", { key: 'f5969732029bb202c80c84afeef96156e8c2f87d' }, this.records.length === 0 && (h("tr", { key: 'e2a31d8415d7820acb73ecbefe6138a42a43b35a' }, h("td", { key: '17e2eebf2d067ef72f0d37b5261505fea73af54f', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '023fdbbf60a2df56ed9c41f53cd82fd85d414e31' }, h("tr", { key: '2a2edc581ec0ecb0bf072db01d35d2a6b94d9eb2', style: { fontSize: '12px' } }, h("td", { key: '248975f4f1f88928c782e0db0d37250b96886694', colSpan: 4 }), h("td", { key: '6b65cb7257c7a76d763d56a6ab8a5e25610f3d43', style: { width: '250px' } }, h("div", { key: 'a88ab000f3860858ec000542327a71f9195136d3', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd033627d1f964a37bc6b2f7603980b6e3fb44edd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd2432c68f8e82072266c9195385816f582db1330', class: "legend bg-primary" }), h("p", { key: 'a87f3606aeb33df6e858659f961b2d257444671b', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '56b950b1b88c56ad9fb653227051a753d4f0e881', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '377da19d5d2ac197ad8da7ce86c35c182684d150', class: "legend secondary" }), h("p", { key: '4eca6f0cf5c934e871b773972a8441e58213d6c6', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '271109e38b830ad75e1eb7ba6a5247d2023673df', class: 'd-flex mx-auto' }, h("ir-button", { key: 'b5e933d36b33d01d29215a758ece726fb1f7b8ff', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
