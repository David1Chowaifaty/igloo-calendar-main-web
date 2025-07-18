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
        return (h("div", { key: '0db2864a17902a429f021284298c78859a6eade6', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'ab9b7012e18ddda445f15f42a672f398d3bc98e5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c1960fa01f332adc8a2a54b889ff9847ee37bb35', class: "table-header" }, h("tr", { key: 'fea97f3878fccc5b40b6ed76ea221c4e3944de10' }, h("th", { key: '8fb0c3e0e2acebec47ad83e61069cccc9137527a', class: "text-left" }, "Country"), h("th", { key: 'fb15bfb1009a09ad3143cd8c89582e85d3ab0962', class: "text-center" }, "Room nights"), h("th", { key: '86a448ce88021fa301f7a8272937022559ca1b7b', class: "text-right" }, "Revenue"), h("th", { key: '1acb6c7412263fd2164f9fae21521bd7206bf1cf', class: "" }))), h("tbody", { key: 'a31af7ab66bd593e669f5533cba42214ce23533b' }, this.records.length === 0 && (h("tr", { key: '3940cd800fc5790b9fcd8de89f2185de05cc3a54' }, h("td", { key: 'da1e9bd810ae9d796d2e240b50d474d57473c16a', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: '9bbb69104340c8f1ce928ab9fa6ab8f3412cd5a0' }, h("tr", { key: 'e463f952ac5fec29a23b6f2407a14d203d637f02', style: { fontSize: '12px' } }, h("td", { key: 'bbf0c61f731c2ed4a491cc56f655c1e79cc00fa1', colSpan: 3 }), h("td", { key: '86eeac90d5e2d9bef723311bf1b3fe4bdac39674', style: { width: '250px' } }, h("div", { key: 'e30acfd4f3f6dd97e5ef79edb6799e94793cb0b3', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && h("ir-button", { key: 'e45e8dddcab2ad93487dbf605f5b980a16b14982', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), h("div", { key: 'ea7ddf69aed3979f16e8575f15e4b1896ee8b5d5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2554d8191cbfac8d8a9d3ba55dffe9ce8895c743', class: "legend bg-primary" }), h("p", { key: '4026d5be0bcf343c9fdf08ad2da617711a2274e4', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '457a3c93d006d382d716740a409cf9cf0239471d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f7acdc649a89e04a83ec4ca99e08fb1d783cbdd6', class: "legend secondary" }), h("p", { key: '6e12dd0dcac1baf6985ce5492e29fc05d46e9089', class: "p-0 m-0" }, "Previous year")))))))));
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
