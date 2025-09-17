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
        return (h("div", { key: 'c494462be77455d196c6ebed233bd7b61c179947', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'd8bd6429ade4e8e68f9719900fcf2c2015b96a29', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6dbafb42a4cadbba7ab05a47078c14c3e55a832c', class: "table-header" }, h("tr", { key: 'b7eeafb6b2401aa7e7422e8efb89a49c2bbba277' }, h("th", { key: '0470752b434e1b32bef3810d4fb0b6f9b5410c7c', class: "text-left" }, "Country"), h("th", { key: '8ebbd66c22bd95b8c1cea384967fb731cf500de5', class: "text-center" }, "Room nights"), h("th", { key: '161d52edde4bbf76f45f221014ddd36c0dc5e42b', class: "text-center" }, "No of guests"), h("th", { key: '80c68c815ecec3310713c6a72945d758c7b5435e', class: "text-right" }, "Revenue"), h("th", { key: '5a98ea80877642c177922b51eb8badaafb974882', class: "" }))), h("tbody", { key: '6946c7fe734f901f91800848fd3211263a4f0e3d' }, this.records.length === 0 && (h("tr", { key: 'bc2cd0eaf54ddf32555edcf40b247f70ffba65b9' }, h("td", { key: '292b03b9e6bb309a24b837a0ba703643b1e4c658', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '94c6ebd88aac0b454cbde2fccdbb29269f5630ea' }, h("tr", { key: '022b269062a140e830fe435d1d1ddf45a2cd3a8f', style: { fontSize: '12px' } }, h("td", { key: 'ddaf97f5f03e23d5cdd799caf978e0f65fbd4121', colSpan: 4 }), h("td", { key: 'b75311274ee070bce3645af354987253647f6ce8', style: { width: '250px' } }, h("div", { key: '5111082eae4543247e49942a37fcb8c2a0ecddb8', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '7860d65ab3c73ea12d38b81acca7a4e93c6ea79c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '908b8c601af6fb1b8f3ee8d880670000c3d4c7c0', class: "legend bg-primary" }), h("p", { key: '07d040d4e5db861cd6c9b859bbd74ea755988f2d', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '97ff5443e4da7615e7113a307fa41fcfeca4166a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd33343745fd740adcf0b977fa57d6c6a3ab90ff9', class: "legend secondary" }), h("p", { key: 'bb078f44486cbaa99ee38645c23fe5a52a7da199', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'dcedd3b08927f1923ef2adb129547a039f59ef49', class: 'd-flex mx-auto' }, h("ir-button", { key: '4a2e5c71d3b4e75ce1af17e4180447ef2e44327e', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
