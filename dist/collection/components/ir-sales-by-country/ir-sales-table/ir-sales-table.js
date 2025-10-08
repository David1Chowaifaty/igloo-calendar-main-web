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
        return (h("div", { key: '797e5fb5bbf776c708612a5c65f502bd59dee721', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'deaf2038a741f852b4b331da52494eed9ed33694', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f9138d9acbd55da9c020c252d1a2e14909f85e83', class: "table-header" }, h("tr", { key: '9378416e1a34cdf71e16f23d18cc98a0d457944f' }, h("th", { key: '6fca0a4ee082ae91363f2258a6dcb17c64a3f604', class: "text-left" }, "Country"), h("th", { key: '67407fea6ceb827ce082c657a2ca0d993b68ed24', class: "text-center" }, "Room nights"), h("th", { key: '2e8bf167d74808606e237ed9b31eff161e8a2792', class: "text-center" }, "No of guests"), h("th", { key: '52abfa4e5549be6282c8b09228152cc26d1513eb', class: "text-right" }, "Revenue"), h("th", { key: 'db271719825b1e01b14ebbc949e43257d4d20488', class: "" }))), h("tbody", { key: 'acc52fd6b9bcc3a7974723edc95d6d1704556c2c' }, this.records.length === 0 && (h("tr", { key: '4a326a5299aaf5c763d136655042c9b992670af6' }, h("td", { key: '3e1fc0d4c2e38811aac42bb74b9f9941823e737f', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '9cce749ac8b12b654304ccd694457780e422e0fb' }, h("tr", { key: '548b0b1672f7f5e00215118fd433f43617be5dc8', style: { fontSize: '12px' } }, h("td", { key: '7a0fc28b1bc2b27bccfbd324bb89375ce170d299', colSpan: 4 }), h("td", { key: '7a09b24d167973467f61ab88ee90dd2c5af7778e', style: { width: '250px' } }, h("div", { key: '8e07cea4bc82d85eaa88253c0a756a7f2bc8d9ba', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'bcb38ff5c407012eeaea0cb190d4570c3e843690', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '35da46b5ba3bf535e94e32d57fcd01c85ea91215', class: "legend bg-primary" }), h("p", { key: '1dabb7cff855148a468adf68e30e6cd12973589e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '8df142faed69a5a2d85a4f357d0011a515e6bf93', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '466d0e9c155295b6febc73558dcafc3c36b4189a', class: "legend secondary" }), h("p", { key: 'cbbaf934878baa51335a538d6f1acd7f605e789c', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '0e46af947c16bb22d63f64b6021716e1fddfcb4e', class: 'd-flex mx-auto' }, h("ir-button", { key: '1236d70d3285a017b114469c303a3fe85bb1017c', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
