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
        return (h("div", { key: '62a98eafc8417d5368c5e48408fc59db6cfa34f4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5268e4f4862575d40411f09f606757c8340eb369', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '29ac2167fcde3988f4565f57b88b13b80f668383', class: "table-header" }, h("tr", { key: '2dfeefff12920a0474101bae4a2e7d7cb79eb0ea' }, h("th", { key: '8ff93716529c112230a144c661232c2fea6e0c50', class: "text-left" }, "Country"), h("th", { key: '3ecd231ed23b13da05b44f35cfd12ae622ca2c7f', class: "text-center" }, "Room nights"), h("th", { key: 'b788f1f095a306547cd05df2054bbd746b507ad9', class: "text-center" }, "No of guests"), h("th", { key: '7e16ed68608d4975d0c1837e88d7145b3d34270f', class: "text-right" }, "Revenue"), h("th", { key: 'f7861b7053962f8d2fc6c63c703c671df4ec143f', class: "" }))), h("tbody", { key: 'a308b19a3789a025896b3c32cba20ea98b194f40' }, this.records.length === 0 && (h("tr", { key: '217dd2b36ecf1091a8dac27c7bdaef5333e3907b' }, h("td", { key: '8cb83b907af1813d8356d6f934ffca9ee4ff7065', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd8b44857dfbfa0fe2872510fdf4c8a57d90ad830' }, h("tr", { key: '78819c5d18ebe11bf7dd70c819e2d63823206bbb', style: { fontSize: '12px' } }, h("td", { key: '01ef26dea9b5528f3fb650c7c9a5280436d5e6ed', colSpan: 4 }), h("td", { key: '0aaa615b42864954649c0d972d1642ffe5a97e7c', style: { width: '250px' } }, h("div", { key: '620886f147f3bb96a25428bd4738c8bbf60d3cf7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'e329b09e91e891cd8335de9977cb24119beae4bb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3f8d66d9767d635806e1c9861a40da6f9eb17992', class: "legend bg-primary" }), h("p", { key: 'd87be84c45a4ac5ae7dd305a31c04c911a68518a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '470735b7c87b1c39d90a30287a278a4745c1fcac', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e92440cc8942169f7ad271b2246b215c91286420', class: "legend secondary" }), h("p", { key: '8f57f512c01c0d51eeac31a52e0f7c0e8e93270b', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'b26f3ad73a1a1e3d3d179634d902cac76d69575f', class: 'd-flex mx-auto' }, h("ir-button", { key: 'e3ae069ab55c760682a5643a75fd1b486d550c3a', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
