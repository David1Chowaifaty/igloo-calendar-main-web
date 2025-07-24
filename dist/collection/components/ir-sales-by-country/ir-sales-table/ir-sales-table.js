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
        return (h("div", { key: 'b9c7f219b5ddc4cba1fa48ac34881f2e3cec7a0f', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '989b2229abda70d4a6b3c39bf114ecfa1ec91836', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'af7f2dd54bf6c1500ae0df5ecd96bb0ea79e4708', class: "table-header" }, h("tr", { key: '0f2fb8684b077ac24c284e3108a9fb20b1eed06e' }, h("th", { key: '3699e9777a91b517b767afbf1c85d63d4a228ae4', class: "text-left" }, "Country"), h("th", { key: '198661623edab3b2259479de0bff4b28f3f7806e', class: "text-center" }, "Room nights"), h("th", { key: 'd72aa7e6e5c0b350b7d2b253bc982b87129605e6', class: "text-right" }, "Revenue"), h("th", { key: '05b8bcf21a575519b9164a0cb7fafd91113dcab9', class: "" }))), h("tbody", { key: '792d28c0b73ec26d3c919422ab587f8165b3c148' }, this.records.length === 0 && (h("tr", { key: '8fc3ad32868b99c887b136ef08d40c0c2b6e61e8' }, h("td", { key: 'b4e2121c447a01e1909529486157fc805f7e9d45', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '010f94a81348c52d721d1e9c45242325e6ae8ca4' }, h("tr", { key: '872dde951b81a9a73f692fc29e5b5db7cdccce43', style: { fontSize: '12px' } }, h("td", { key: '1e88c07aaffcb947f3f6d27d21ef018a03292faf', colSpan: 3 }), h("td", { key: 'b6d3badc581da3e18b45b11b1b9116aa1039df16', style: { width: '250px' } }, h("div", { key: '66d1287a8cf836833ccd298ef6ff83a9e8b2a831', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && h("ir-button", { key: 'd6c3b8a27f4c35c0b24f2c47082799900b70e9e0', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), h("div", { key: '1562cbda56de2f877d5e3bdcf1f3080865e0a678', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a88cd6dd16e3709df5488b0776b072ada3102161', class: "legend bg-primary" }), h("p", { key: 'f74528db61ca563c9d10360f5774fcb3200a076b', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7db64e6709df39cd7fc0a97a5dfede5079e9a5af', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4b500ed807c08cc28048bfaf0511393d45c0a3fb', class: "legend secondary" }), h("p", { key: '811f20b164ab290bc4b2d93dd478f15eeeb6c0f4', class: "p-0 m-0" }, "Previous year")))))))));
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
