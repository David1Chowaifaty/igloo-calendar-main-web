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
        return (h("div", { key: '04d6e39f76dbd13a57e41219e2145e8b4c96edd6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9501645954987754f9a9ff24102d377b7731ec5a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '518546276a26f42cafcad64c5bdfcda529a9a08f', class: "table-header" }, h("tr", { key: '0820936b5592c5863ed4bea6ea1cc3e5bbba72ef' }, h("th", { key: '9010175364782611e691538177ad6304d954bfe6', class: "text-left" }, "Country"), h("th", { key: 'ea4ae833eacacc81ba85360fe49db8ab8b89324c', class: "text-center" }, "Room nights"), h("th", { key: '7812411cf04084a702e6981ac0ac23aec202e892', class: "text-center" }, "No of guests"), h("th", { key: '8e8bac2bff578732656147fd1006bd4dd670483a', class: "text-right" }, "Revenue"), h("th", { key: '2141c1ef66cae5147005aafb4e12cfc237659c67', class: "" }))), h("tbody", { key: '40fee5f1cb948b7b1f2de4bb7d4059e921ebd19a' }, this.records.length === 0 && (h("tr", { key: '7acf1de6cc21331a0fb46b9b4be85254f3d4fceb' }, h("td", { key: '444e5b739f0fb7f58336d63348b7405f48b921f2', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '9360dc50be9ad7dc843a5f785d758f977cb4ef41' }, h("tr", { key: '12b77bb4faec32f233469fd287b092f072c2b2b6', style: { fontSize: '12px' } }, h("td", { key: 'e332a21fece249cbbd3e99321ca38aac9c51852e', colSpan: 4 }), h("td", { key: 'fe6a0e966973a551aee2479a3468f4fac0937080', style: { width: '250px' } }, h("div", { key: '9e643c800291e2707e18b9406daffc29ea2822cc', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd79170afb32376aa211968710d5c54bf0a8b4890', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b283dcf0d3614afa12f07fd19109f198827acb7e', class: "legend bg-primary" }), h("p", { key: '78dcd9c981570c468abfb4a7ecc5e73c84e67c1d', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a42ae442ee8ca8d7e6537127ff8c167bfbc0c8a8', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '00f059bbb18a53be9fab3681325df2e542ea7895', class: "legend secondary" }), h("p", { key: '7c3de184585a9f328475554538de1bc208f62ec0', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '4ed123af8e3817b4341466755b90c5013d9d674b', class: 'd-flex mx-auto' }, h("ir-button", { key: '371fa2ce3536d048a0819459f4a499c4538c9fbc', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
