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
        return (h("div", { key: '564cfa73946985aa5eb22b63c8edd4cd90cbceb6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'bd90cb99c5e4a82ab5783752675e0336847914a6', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c2291d57a8aca769b224daff448c4be7ebff593a', class: "table-header" }, h("tr", { key: '527987e56433e70878bd1ed65240a8d83ae6795d' }, h("th", { key: '24d123fd987efbb30cf36cd22f7fbdf3540e05af', class: "text-left" }, "Country"), h("th", { key: 'e2a774d1b55bd9f6c1e87a71f6832f8654becbf3', class: "text-center" }, "Room nights"), h("th", { key: '5fd0478acd50c19abc33d1bb28ebebf7e899da8a', class: "text-center" }, "No of guests"), h("th", { key: '0125646a58efde4c68c30de95c5b9bd1b10a5ab9', class: "text-right" }, "Revenue"), h("th", { key: '5a75c28c46376219fa6b5bc2272cb21b14eb4a71', class: "" }))), h("tbody", { key: 'e8e71fc489d862ca1942ec14c80ffd0c754ebbf3' }, this.records.length === 0 && (h("tr", { key: 'e30524414a953300b5f4fc42afa46b3b33a56332' }, h("td", { key: '60326b79bc2a5d727e6c978116b4560407366545', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '2bc0d8764658690b8d3abcc9130004d25eefc852' }, h("tr", { key: '36b091b69561e811feef70fb606a1675116101be', style: { fontSize: '12px' } }, h("td", { key: '52a7912e3f8476c06389e752ca8f7b7539342c76', colSpan: 4 }), h("td", { key: 'b8721d1212f10851776b1f8135a7ecab41a12fc2', style: { width: '250px' } }, h("div", { key: '349ef329c555e865898ebb2d05be03298ed0f562', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '590208855aca9bf56cbca18ed8bae95ddb88cf2c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '425a04f204ed5c5b519ca6696caced3c49d635fb', class: "legend bg-primary" }), h("p", { key: 'a9bf8d9ab229c65200d7f15e17c661228aef5572', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '2ed6a3cdde3619c1812d55dcdc7551bfa99fef7b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '945039603d864835e2790394b46f4685f55ebcd0', class: "legend secondary" }), h("p", { key: '25f7b7273a13f5d3b754f1401564a28e3b0b6da2', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '95a6f1eff6def89654c2a8efa8aff4cbb99c6c1b', class: 'd-flex mx-auto' }, h("ir-button", { key: '3b9a08a5a6c0ac24647ac89b5b605641feeb9675', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
