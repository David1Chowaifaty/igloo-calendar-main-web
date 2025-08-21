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
        return (h("div", { key: 'c15cdea128456c8d5d981a1dacbe9ae00122cf27', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '60a2f605ac606c283c454b2e435a574ac2d056cf', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c2c4473c0fcadfe3ad7dea65d2497231c46ce087', class: "table-header" }, h("tr", { key: '29432eb82320cf452d26cecc55ff9847fb34cca0' }, h("th", { key: '20dd5ca2ef3222b0522d562354994ca785150f8e', class: "text-left" }, "Country"), h("th", { key: 'bf4735cda53d0b231bdc9c493a528edeecf5386f', class: "text-center" }, "Room nights"), h("th", { key: 'ee8bf37c7736febfb79fb9a2ae5bf969e48e770b', class: "text-center" }, "No of guests"), h("th", { key: 'd38a37b346c71a9a3365853174dbf317cb394008', class: "text-right" }, "Revenue"), h("th", { key: 'e7e9e7cf29372ab1ef9cb81558e2e528377d231d', class: "" }))), h("tbody", { key: '78da5d4b5a4052de3a67ee0545efd533216fbc60' }, this.records.length === 0 && (h("tr", { key: '36a2737f0d2acdb1804533e0c9cac8ebdc2d2067' }, h("td", { key: '264a5f8c3e30b087a01ead5b7264a9c55eac636b', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'f078c4efa6cc58a1a278ae15498b07b4e142068b' }, h("tr", { key: 'e12c27b12c0740b53e5abb7b2067606ede03f05c', style: { fontSize: '12px' } }, h("td", { key: '6d777ffc721a293960b7d98e53a30664694cf93a', colSpan: 4 }), h("td", { key: 'fc8a7f5852d70ab46b27a088ebeb393bf6ff6cd3', style: { width: '250px' } }, h("div", { key: 'ad5084647ca11798d43cceaac1cd24c6cc7179d1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '66be4038f84af770f73617487fc1752b90a626f8', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2a5fe68c8518b666f605ef6e1fd071ececc42a73', class: "legend bg-primary" }), h("p", { key: '039aca6daa5c919a3af180effd73f1cf5739f1ea', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5d457886ddd8dc904fbb7e6e25865d215575d97e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd5249184ca612b8da2781dfb31dd5a82813e215f', class: "legend secondary" }), h("p", { key: '79b4ab65104e069f93b15fca97ac8ad53216e82f', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '46536726dfb1df379a792776e09618499ac3bf58', class: 'd-flex mx-auto' }, h("ir-button", { key: 'fd5a61cecf32cc7e3dce0e420a768d0f09f51809', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
