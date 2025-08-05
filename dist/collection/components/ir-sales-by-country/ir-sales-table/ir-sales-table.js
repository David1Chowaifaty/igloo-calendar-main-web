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
        return (h("div", { key: '6406e64e0ae39494eac45bb835ffd2be4f44e873', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '896197d728c963bf4497e156b361949f275d430c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c5dc1c9cdab1b61ea49f49cc72431c9811835a05', class: "table-header" }, h("tr", { key: '9b78bebdfcaa2d6d51489ed9c47660f990b74762' }, h("th", { key: '190389eca44ce0741b2ba71e521dc9fd2fa9362a', class: "text-left" }, "Country"), h("th", { key: '351e0dcd265de88d62f2bbbeccd593da9e8d4931', class: "text-center" }, "Room nights"), h("th", { key: '09b2cb1cfd9376e08e2d1e08476c4a54341e931e', class: "text-center" }, "No of guests"), h("th", { key: '751c581a023604d20f3083c031ef062ad2c65f29', class: "text-right" }, "Revenue"), h("th", { key: '80d6cde2ec4dc8ba511b9284470142da45718261', class: "" }))), h("tbody", { key: '4b05651015ae6d7e524a97f6cfaeb5bd26a93b86' }, this.records.length === 0 && (h("tr", { key: '4a3e375199ea11ce6146e673689a855e4cbf3ab3' }, h("td", { key: 'b0d3870d3dce38ebe3e5c151624cf56368b6eea8', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '33adf84afc771a73bdcb4db9556798bdf2d85b7c' }, h("tr", { key: 'ee6792bbd424fed562ccd6ef4e7c21a6b373994e', style: { fontSize: '12px' } }, h("td", { key: 'caf69e0c6bab79b357535cc7a635ee58ff9d3311', colSpan: 4 }), h("td", { key: 'ecfc735c590812d1ae55ff73bb99326a7e85fe41', style: { width: '250px' } }, h("div", { key: 'aaffb0391fb5f416bb1078c67cc5624dd2fa437a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd1968d577870cb72ef017877760c3ff0ef5e0a20', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0e5ac9528bd28fdfbaa195f681ca180d35a630cb', class: "legend bg-primary" }), h("p", { key: 'bd7000e3381a3d8d9507f94838cb7df5aeb484f1', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'de7b6dd2d0bcc713994682c38ecca97306e0cd4f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9891fd0f5a4efc1276d84d274470f7b52061148e', class: "legend secondary" }), h("p", { key: '228d365e25899f6109a5b0aba377fa2062eca1c0', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '762e63f0e2a5349253df49bf01aa20c832df99cd', class: 'd-flex mx-auto' }, h("ir-button", { key: '6b8f4294901160d072ea838428febd227bbc2566', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
