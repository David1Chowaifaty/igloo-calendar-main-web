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
        return (h("div", { key: 'f76e5029397cc4707d5a05af9731be6409672947', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'e341e78c1f125f08ac1b13e9dfa2eeb2d7781a71', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a8f365705b15270744aab376e920e1a3c7c61107', class: "table-header" }, h("tr", { key: 'f990c1095f0f49ed373848e36e5494b9fa52aa47' }, h("th", { key: 'f57002a440122779bc6a23a0944d22e8d1a7d5e8', class: "text-left" }, "Country"), h("th", { key: 'd10f779602133817ed4ad0ed9b7e395ed9acadba', class: "text-center" }, "Room nights"), h("th", { key: '6d2cd342bcb184d0205c4f41136d6471a8019388', class: "text-right" }, "Revenue"), h("th", { key: '4db75ae096c451321a1282512073829b6acc4f9d', class: "" }))), h("tbody", { key: '4bc19a563bccd80be6f5dbde76cf308931dbaac3' }, this.records.length === 0 && (h("tr", { key: 'c5526986a19c2846b5bfd9a60ea76bbeb4d0682f' }, h("td", { key: '94942db37ff31cdb24723894b7f9d16e37d80682', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd1e80344dafe08a999f14595cf4f1290de47f477' }, h("tr", { key: '00d1d7bd827261de98e1e23cb952080969e0f9e0', style: { fontSize: '12px' } }, h("td", { key: '93c61dd7923d3592077ebe205c73315b5d1ea134', colSpan: 3 }), h("td", { key: '243325bac8139bcbc6cd57dfe065beab9e4b3003', style: { width: '250px' } }, h("div", { key: 'd27c3dfe8c8ed0a49e84be3941ab741ae3e6ddab', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && h("ir-button", { key: 'ce449f527d35c7a1533ee2ab5928cb36d0305840', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), h("div", { key: 'd13973fa3c200a1cc59d9104b79fcc316843b4d1', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '60bf0b47d5dbf840f4bf5fd76940b3c615e6cc8c', class: "legend bg-primary" }), h("p", { key: 'e8097e7acf3296076b0ef3ad721f202f97d4a0b3', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '3d9a3a3b22b343e2cbf9d18f05edd94b5f949a4d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'aaf7d8a16b42363a5eaa13aa84c1a96249b55447', class: "legend secondary" }), h("p", { key: '33e2cb6784d091215e8d8435567e78a44429bcc7', class: "p-0 m-0" }, "Previous year")))))))));
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
