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
        return (h("div", { key: '189819bf6a0f1ad3753517b8f33fd358d541f1d0', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'afdb05eb148199f5bdb271c85fe9c9e2a957fdd3', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '51cc021f47b91a56b26a4a8fd100b4073b29165a', class: "table-header" }, h("tr", { key: 'c69ecbeb175fd239f020bfeff0a1292af5083c82' }, h("th", { key: 'd8078e6bc264efc2e7f292ac31ca57a5468c3904', class: "text-left" }, "Country"), h("th", { key: '173154267ce39f2d262b03dfd3b71699adc6675d', class: "text-center" }, "Room nights"), h("th", { key: '2ae66507f8262699d57c130a4c1ea35048b8c3e0', class: "text-center" }, "No of guests"), h("th", { key: 'e32e1ddf4e7aaa770fa7c7eec52574f3a71c7935', class: "text-right" }, "Revenue"), h("th", { key: '81575e4874dd34d6c687a3dd698afdd0f54cabc3', class: "" }))), h("tbody", { key: '49db9af18e254b24355489dae2a9d578acd394dd' }, this.records.length === 0 && (h("tr", { key: 'ddaa65cc3146c523d1382be9332a1e82bee170f4' }, h("td", { key: 'bb69e116e9ed2e0a8529269b0a058ab59e36a889', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'b42ee725fbff8387830e15e4f0b9600cbc57cfa5' }, h("tr", { key: '25478c80a61cad99d394ea75aaa200fa48c62c59', style: { fontSize: '12px' } }, h("td", { key: 'dd28b68a177aaf7c3e7717fb90c90e1db6434f80', colSpan: 4 }), h("td", { key: 'ca1bd19d2e75bc57e3e703a732b5606c685bc023', style: { width: '250px' } }, h("div", { key: '5abc8aac040f450ad533eaf47eafcf6287d07516', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '42c46b081242d13ab0c8972d0350d2d357e529b6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '666bf051e3c0ffe12f87f3989cf61f1f5026ea5f', class: "legend bg-primary" }), h("p", { key: '1c0cecf34ef25930b60d4c359d5cfffcf46b8fa2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '27abee3c31f15baf093c8426d02ecfb592c18352', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0305cd59512a2217927eac733caec249f7d2d04a', class: "legend secondary" }), h("p", { key: '5473886a5f9851997e1e35be9a2eab4367f15d24', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '86a0a41ab13863cf1e3dde8a61118e07f6698fbb', class: 'd-flex mx-auto' }, h("ir-button", { key: '2df9d8e9c4d8254fbe364a92c24ac24407488a48', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
