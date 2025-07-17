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
        return (h("div", { key: '5a030b5b2d002caa325f1aa4029feefc1fe882c1', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'facfff8513d3fc65df4d5c44caf1b775198cd36c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b56e8e1a33b58acdfbc772480d9e959f2c0b289d', class: "table-header" }, h("tr", { key: '194d7dde6c5923167b14adff6463df0bc976a7ef' }, h("th", { key: 'bbe7d61b9657a531388ce9e880e20653b431d814', class: "text-left" }, "Country"), h("th", { key: 'b01ce839d04d9ec62eb721a79e7796c696c8fa2b', class: "text-center" }, "Room nights"), h("th", { key: 'b4a7a18c8f9b59873639344123d6e65dd4c1571e', class: "text-right" }, "Revenue"), h("th", { key: '7507e8c4005453fbf982e083fee6b556636e2f33', class: "" }))), h("tbody", { key: '8e7f2a0449d64761fe68bd7e1d586ffbc924c3f0' }, this.records.length === 0 && (h("tr", { key: '09c4838c4f210dd79ff42629e44d6ca2c6bcaede' }, h("td", { key: '692801f3eacdabacfa81d958a2b3369840086c2d', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: 'a3222c5737ce6c42ebce33acf475417a539f02f3' }, h("tr", { key: 'b23580ba3cac03a74b97d6cd42278768eb5e966e', style: { fontSize: '12px' } }, h("td", { key: '32ed3f6aaa1b8906dd0263d4855c15edd11c04fd', colSpan: 3 }), h("td", { key: '77f64beb71aeb5436c3f616e7f2759a07fed4f39', style: { width: '250px' } }, h("div", { key: '2504975646f231dbb176e391df9bbe431bb6f91a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && h("ir-button", { key: 'ab8900ed855d6f47da8c8d4a6322507759c1a24d', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), h("div", { key: '8c31e1f5a101af89e3788120c5666603ce10834a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '36d384349191cb465028ab67d8cc12e884c0ac61', class: "legend bg-primary" }), h("p", { key: '650feea8b32eeb7e231d5d7e71c21d545b1746e8', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ef89f96a5c9bc12222d235aabb2fa464f640a25d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b6c3299d14ea75b2ce803410096168f0e4c2ce4d', class: "legend secondary" }), h("p", { key: 'a8958205895641ef650733c955a4727976dfd424', class: "p-0 m-0" }, "Previous year")))))))));
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
