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
        return (h("div", { key: '9e5af8afd2d77b3ee22b21f0d007513301e8788f', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '34e0eb0d06569cc7472214e922df8234d6cd085a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '72b583effb9a90ce2934c2d53d1920ed941a088c', class: "table-header" }, h("tr", { key: 'a01f637b59ffe340ed6ed226ba2d9f55f37b8d32' }, h("th", { key: '7cbd32ce5590969a3693a5f4cc2c19a98ab5dbbc', class: "text-left" }, "Country"), h("th", { key: '7123723acddb18fa3ef898f6fecf28d14aa2a79a', class: "text-center" }, "Room nights"), h("th", { key: '87dffa53cf601aee6964898c7660ddb220da6d11', class: "text-center" }, "No of guests"), h("th", { key: '966304ba5128c2ea9420648f723b355055056314', class: "text-right" }, "Revenue"), h("th", { key: '397afd68add6adc626061021bdb35a740482ad63', class: "" }))), h("tbody", { key: '423f3ff01f71cf20b1518a38e35b18087fa8b3f7' }, this.records.length === 0 && (h("tr", { key: 'a5eb63121a8a6eb2ba7cf40dedf89f3e87791aaa' }, h("td", { key: '0dc4acf847680dfaa77e6aa04e137dcf8deb6ddb', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '2e92b9463d16689528625bf9589107171c21efeb' }, h("tr", { key: 'b96687c9045f6a0006da33709165b17f626546fd', style: { fontSize: '12px' } }, h("td", { key: '7146071aaa9c5555fa7e219ae5f2e016dd92104c', colSpan: 4 }), h("td", { key: '095e926ba56096fb566ba1697c1b9fe039e5a510', style: { width: '250px' } }, h("div", { key: '5b196f4124db6da7235d01ccdf774ccee0af4590', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '3f1dff2648b97ba228409ae0463fb6f08fdc37af', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3e16e86d7686633a34044fae53a60a93e7b7f234', class: "legend bg-primary" }), h("p", { key: 'e16da5dea3a4b8ef17bc3c9956e500179c06cdcb', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7d5163b6b3172b0ee76ff5663f477368da0e6144', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '062e3ed033af8a9b2ce3d12dbe5d480b25346fa8', class: "legend secondary" }), h("p", { key: '58ae3922522b0fb8c19a3b584eb99cdd27ffb483', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'bb73b211cea4678c00ae8b1b4721d8c6567f55fb', class: 'd-flex mx-auto' }, h("ir-button", { key: '68d4164367e6858ccdb43f1178c67594c604a6a0', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
