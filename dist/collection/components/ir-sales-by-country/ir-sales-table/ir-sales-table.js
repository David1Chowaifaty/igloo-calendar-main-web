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
        return (h("div", { key: '4bb6da891f9865818c0772f13d872eb6ecaeb51a', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '0dbfe023c6cf07653aaaa9fac1bcf377c8cf8f7b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '08b1b7deedf6763d5ed00e47aed00cf1ee44e6ee', class: "table-header" }, h("tr", { key: 'a7821ab63b45343f9d7020ca84c2353464eabe23' }, h("th", { key: 'a76d3423e6a754f131e316f548fecb11f8522e2c', class: "text-left" }, "Country"), h("th", { key: 'a3dd97bf1060ccca78be22d0245eab6f22454d96', class: "text-center" }, "Room nights"), h("th", { key: '67a1d78ce47b12f8be19851088045dd6a05d8c71', class: "text-right" }, "Revenue"), h("th", { key: '0793a34671d430f8ffa45b04f1adbd95889b0e53', class: "" }))), h("tbody", { key: '271be77a1000990d73b10c76cd252c8e1f02d5ab' }, this.records.length === 0 && (h("tr", { key: 'e221801482320a9d2c2c775431ec8b9dfaeae12a' }, h("td", { key: 'a892a9cca5af6887d27360e8a49784a3e3ee8aa3', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: '6fff7cebdfc4d763f04d55de4dd7cb391e034864' }, h("tr", { key: 'add49df34816ba51b19ee3ed8346eba76d872f1e', style: { fontSize: '12px' } }, h("td", { key: '9833d2170767cba3ffcc61fc45ddd9415b1787af', colSpan: 3 }), h("td", { key: 'e7aa614cec65e909bdd4b2bf9b3c7de3ebf188d9', style: { width: '250px' } }, h("div", { key: '022f18711271d471ea212e62a6951cb740fca86b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: 'c21523a66f765b90fe755491fcd65ded6ab28887', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'cc585f6ff9d05f0a13ba666d770e6358afc89864', class: "legend bg-primary" }), h("p", { key: '966b783af4b08e9102eb3685aa99bcf02b0e025e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '3e7444b0e141d4b4fe3a56f738d664776fddb575', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0ecaece8292ba9aa4b1902625ad37f19ff8a4a9e', class: "legend secondary" }), h("p", { key: '0da239596d86ed4416b266b4f425d9724766c88d', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'c18f2fc0e545d53edfafb7d485edd197b6c04420', class: "d-flex justify-content-center my-2" }, h("ir-button", { key: 'a40a33b5f27500608bfc17e32c58f95de5266763', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
