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
        return (h("div", { key: '11f36adc1d91983af72b208bc58ab268068b60a7', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3bfc29943a82e27aa45d018fc7be4a44c93496c8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a56397282de21e7a9a9d9762adf7690e279293e9', class: "table-header" }, h("tr", { key: 'fea1b2e1049450da731b55e7ef278db8fd4cfefb' }, h("th", { key: '1c92ca0ed0df9097c35c6aa2a1fc75f852d06fc2', class: "text-left" }, "Country"), h("th", { key: '95caf039fc1e41d64fdbc07b2bb70579e848ef10', class: "text-center" }, "Room nights"), h("th", { key: '4f496a10e695448e103911196232215b80e3f82c', class: "text-center" }, "No of guests"), h("th", { key: 'dbbb1d95bc4d52b7726fced50ec8d75cae87800b', class: "text-right" }, "Revenue"), h("th", { key: 'b8cb85121165e8c16afadd1f17155616c3d7c3a4', class: "" }))), h("tbody", { key: '11c8e3914b3666a87c73e346ff84bfff8c7bcc79' }, this.records.length === 0 && (h("tr", { key: '7981bdc85f395294c32f36d35efcc1f235882898' }, h("td", { key: 'f13e26d00d5f8b5542c762d00276b2c2f0d2926f', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'c4a7e7ac1fe6788b9729022aaa038bf283e74390' }, h("tr", { key: 'e83babcb227da9466c1ffc5a0bad661beb0a5bc4', style: { fontSize: '12px' } }, h("td", { key: 'bd7ef63a46bdd12e3748fdeadb592ded4e40656a', colSpan: 4 }), h("td", { key: 'e41387264658ab5efc76ad31d169a5c850a613d8', style: { width: '250px' } }, h("div", { key: 'a289b3af2e099fb499e016eb0e8217c1c605ee5d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'e2082ed241fe2bdecc66d5aaa3538bd066f794cf', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'eb77713b0f0dd46b9a772e6b7ad2e4788fc852f2', class: "legend bg-primary" }), h("p", { key: 'b7d14f02e7e0c2b0e4a8cff283588c826d7a8890', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'e555fcefd4a170ec589a51be094b1e801fc970ea', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b2363ad7827c9595d4ef699abc74eba625b7867d', class: "legend secondary" }), h("p", { key: '151ff7619a753b1149bae35add5d811abe13ef3a', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'ab605c5be71b36b9f173c448ac23ae56a3eb7f2c', class: 'd-flex mx-auto' }, h("ir-button", { key: 'e9d60add180165ae419214f72209ba98b9f39091', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
