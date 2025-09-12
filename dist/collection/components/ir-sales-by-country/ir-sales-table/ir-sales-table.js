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
        return (h("div", { key: '5bd0e9ac9543c9df30229523901e562e9ff13a02', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '479a5ea835d21a1831c4de341b2e1ef5b3ff689e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c0653c3e83a26f6c297c02ccd3778f5ca30827f2', class: "table-header" }, h("tr", { key: 'b2f13094fa1466c82b9c2fbeb2dea0b95aacb8be' }, h("th", { key: '033c7432757de687f572b17615ab09bf0a8eda73', class: "text-left" }, "Country"), h("th", { key: 'e6346a52020aebb7f3e4878a8c6f0180eea17e59', class: "text-center" }, "Room nights"), h("th", { key: '6b97e87ca7cc2de07e214d63a64178349c2caaca', class: "text-center" }, "No of guests"), h("th", { key: '0e5509cd4470380a8a26a05151a15be19ba9016d', class: "text-right" }, "Revenue"), h("th", { key: 'fcccc438aebf1bfc998e326380241bc4c0f1f45d', class: "" }))), h("tbody", { key: '39356fea9b417e9f84651dbe4edc79fbfa0123fa' }, this.records.length === 0 && (h("tr", { key: 'd6c87187c0c6c3457919ad44ccb29ae347487251' }, h("td", { key: '5ece488ce0b109f2eed8bb51a2de08ca2d99b7ac', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '10b522f2bab7e61f91a267929784c22fbb57bf87' }, h("tr", { key: '2834186d3a0d8f6a5542ae6fec6aca920fb4ec2c', style: { fontSize: '12px' } }, h("td", { key: '40439df75de2b9e1a9f545b94860992f1077544c', colSpan: 4 }), h("td", { key: 'ee8fb86f7a10ca31cc83b21bcd8e1d86e8e5a2b5', style: { width: '250px' } }, h("div", { key: 'ebd1e907fc01415f2b0894c2d5f19a40aa27f70a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'be784719e20296b76063c9aea4be1da687505ef5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '64562aabce4db9f81998a245edb09379868a1c2d', class: "legend bg-primary" }), h("p", { key: 'a3a00f9ee25bddb8b4a54ada1b3b1bc2e863e538', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a85ce62cabde1c880faacf2e977c6142e5a3e5a7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'be55221fe4c7a30e2f654c294076e4d2d857981d', class: "legend secondary" }), h("p", { key: 'c70833421f1f931045ce9f86736300960d83ef69', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '974663e0f1e8800d108c65214c1c4e4747e9ee05', class: 'd-flex mx-auto' }, h("ir-button", { key: '9ddb471dc747986445a63f647ae5cd1273125fe1', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
