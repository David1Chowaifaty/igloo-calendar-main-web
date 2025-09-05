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
        return (h("div", { key: 'f729aa01f6dd165825e2bcc040188fb14a769c36', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '569c08526a7f0e28e91dc4be9aa7dd6122ea37ce', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c9250223e3ae8a310539e412630c0465b6ca0931', class: "table-header" }, h("tr", { key: '3f4c83a89b03e0cc230f1a4eb6f982ae97f5255b' }, h("th", { key: '25374d17824eb33ca6b96a0fd906b8cb29de434c', class: "text-left" }, "Country"), h("th", { key: '9e19cae868316c509e50da483bd7a4cf53cee88b', class: "text-center" }, "Room nights"), h("th", { key: '4386c73dba389d7d201aad3c77738cc2d5b97def', class: "text-center" }, "No of guests"), h("th", { key: '84e390295a842aacbd405b2058084880861f4d7d', class: "text-right" }, "Revenue"), h("th", { key: '3074ab2a469fd6fff5b97389a9ff0fa1ccba2847', class: "" }))), h("tbody", { key: 'fccd72ff390daf306738ce5cdb933940fbe2c93d' }, this.records.length === 0 && (h("tr", { key: 'bb151d0484be20b9f3f4e6e20a43ef8c5dd7d67e' }, h("td", { key: '52cc38e726d175a8a95a3a7ffa55df29135ea0f5', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a00706ddcd165058a39bee685dd25fdbbb93199c' }, h("tr", { key: '59d1a7977a4a4c5434e88c74beb9f8aa0c5b2620', style: { fontSize: '12px' } }, h("td", { key: '8a211db6eda955437a8c54d8c83625f4310ff35f', colSpan: 4 }), h("td", { key: '34e3f15629be0238e8aa4bcb6df2349b9931f17d', style: { width: '250px' } }, h("div", { key: 'ea9a99007a51630fb6ca0aad7afcaf1c0f5e807d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '99490b5aa6bcd241acb72e86be38e277e087a68d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '8beba225f9037374a7fc8ae73570981d54f6e50b', class: "legend bg-primary" }), h("p", { key: 'bd6942c1e87e64034513582d4c3f6c3259456382', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c9f8102d488f95b0436f02150f715eb700a0cecc', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0d8bfef3e36e3d198a69e6e8de4f20f7d60a748f', class: "legend secondary" }), h("p", { key: '15a15d0ed22632ec5691bf449450e40524125c68', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '4fe09267435245f6adfb9631d3e13ab3d9b32cf3', class: 'd-flex mx-auto' }, h("ir-button", { key: 'c9713783c0e78a24350bff2a680cb740a0d2a3f2', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
