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
        return (h("div", { key: '4cffb0fa0f5e470404cbf6f90ce38b67e5ac134e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '4c89f0d13976bfe738aad152d756e444bb6b8f93', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6537ab327e9fa98f8004169a4484f14762c40081', class: "table-header" }, h("tr", { key: '1077acb5c0a32321b41c490b9a1716c9b6892808' }, h("th", { key: 'cf585328f38ad688465fc50dd2b9c117e5a359ae', class: "text-left" }, "Country"), h("th", { key: '4fec98cfcf6c63aa136ed7609d9f6d9f79666cfa', class: "text-center" }, "Room nights"), h("th", { key: '5cd75b20fc1c2fc559a2ec14bf4b2286d6683315', class: "text-center" }, "No of guests"), h("th", { key: '99ad0b6e9d55093582aa2eb09ccad089819a1d46', class: "text-right" }, "Revenue"), h("th", { key: '3ba84deb2e076a5868b269f3497301bcb37db21d', class: "" }))), h("tbody", { key: '8fb2992211d5c68293066824a4e10f5a33c55d48' }, this.records.length === 0 && (h("tr", { key: 'c7c98b108851579af84fa5c4a1f1d4fc9f991a11' }, h("td", { key: 'd79b6eb9e748c805349744ddcf4fa610369edb35', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '364a45d409d77a5f1102a8be873feb5a423a5f01' }, h("tr", { key: 'cfd94425263da3a8be910d7d9ef21c9aae5b6ff4', style: { fontSize: '12px' } }, h("td", { key: 'fd12bb1530beae3e7bbf4d2220deb3271ef1f6d5', colSpan: 4 }), h("td", { key: 'fd5182ea35e2d6174e480b0f86d55088c36ce9d7', style: { width: '250px' } }, h("div", { key: 'c6f511270cdfa4efb3dd1a18a3361e4664d4115e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '988016c57f8918aa1714ccaac9ae1f1a0ede1d10', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1107835bdfd245858464c463605ee41ba20eb66d', class: "legend bg-primary" }), h("p", { key: 'dcf77f2439fb049118efb11936357f5aa2b203a8', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '38a24673fe45b8203f1ea406c46d383c2a7befc9', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '957839e746968861ab531eecddefe976f3f060a4', class: "legend secondary" }), h("p", { key: '00c06266725477396c6b56a631c9a925f3cd0c1c', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '5415c81f67114b78df7a798c7e55ac035a677e87', class: 'd-flex mx-auto' }, h("ir-button", { key: '0b79eeaabe1c6c26352320d736b83c08f1a88254', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
