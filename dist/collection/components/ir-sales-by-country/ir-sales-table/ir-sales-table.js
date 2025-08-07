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
        return (h("div", { key: '8ed761449f35a7227a33768bc6a985bd4f19ccb4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'f7e568b7a9b0a2301814f7589b66f551d6295f88', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e2d79dcdab6682ee5afd10fb0c182418674431ce', class: "table-header" }, h("tr", { key: '4f12277fb7b43005bd401af56376925bd52e37cd' }, h("th", { key: 'b8cd7f66b0d58b747b35a6671167b025907018a7', class: "text-left" }, "Country"), h("th", { key: 'd0d27128a6826b98972e313d5737f30d6445861f', class: "text-center" }, "Room nights"), h("th", { key: '157453431e3766cf90be74b9d3809eed1f608bfd', class: "text-center" }, "No of guests"), h("th", { key: '65112b9982158c8ce69e8f5fed65fd99ef17debf', class: "text-right" }, "Revenue"), h("th", { key: '39f99d7e6ec13c98016268bd0b6c20eb9a692f4b', class: "" }))), h("tbody", { key: '0136961e6989069a0c53e32ea56627e2ed979a06' }, this.records.length === 0 && (h("tr", { key: '6c9cb91f00883f05375faeef6b197f21411e7e20' }, h("td", { key: '17c731edb9098c522c41f2425b4398069045852d', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a82d1e2110d43ba98529d0531ad055865851bb15' }, h("tr", { key: 'bfb0585f32aad3ced1da9c15724053bf8e999d7c', style: { fontSize: '12px' } }, h("td", { key: '7718f3485c33e0238e0df57e72e5f82248906d6f', colSpan: 4 }), h("td", { key: '951b19f9b1d0f3ca8960896ec20802348bdf53ec', style: { width: '250px' } }, h("div", { key: '925e7e731dd88f2d6df23a2e5bb4cb303744cebd', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '81333c581c3b4da73cbbc54834c36585007dfed3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b3745dfc4bd83357f71bac64c9897a18966cfa4b', class: "legend bg-primary" }), h("p", { key: 'e371e9f57d89deece30403f420ccba12f9ae504a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'db5ee6ae2324a98312793efb655935f1903bb7ea', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1c0261e337653062348add2f057f8229f1d48c10', class: "legend secondary" }), h("p", { key: '39c229d18be9fb12def8d8077ee50db3374af944', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'dc7d9fb063fbc9ec90ecf071cb2d64cd14ae78cf', class: 'd-flex mx-auto' }, h("ir-button", { key: '088f94126f7208b703f911607e948d17b479011e', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
