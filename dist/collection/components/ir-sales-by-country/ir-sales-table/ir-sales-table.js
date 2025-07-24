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
        return (h("div", { key: '48e5e6bdc120734936b07e9423d154bda353a09e', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '31aaaca613502ff170735434357d44b1b255d39e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '0bea8c5545df1ce613e74b384eeea3ef79ae21d9', class: "table-header" }, h("tr", { key: 'd6c52cc0ae5021241f4d463a9889a34cd1575a51' }, h("th", { key: 'b6a9371ffbf462fc8824ea29c209fd2296901d1e', class: "text-left" }, "Country"), h("th", { key: 'be0e752a257cbc2a476ead6afc67b7d2ce254ca3', class: "text-center" }, "Room nights"), h("th", { key: '9f736cfb534be3e85593991f9d4afd70af190ddc', class: "text-right" }, "Revenue"), h("th", { key: '5b53e09dca8f8da2da59018af70a8272d988926d', class: "" }))), h("tbody", { key: '8c76ae2c7364511a84b5f9c201d19b422f6b0a32' }, this.records.length === 0 && (h("tr", { key: '155af97d2f618d9d24af95d8f024327156afec5b' }, h("td", { key: '2b4aebe087d86ab00dfd1cdd5e093130528d86a7', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '476c4b7bb79b52efb1e2340233436329f7d69d16' }, h("tr", { key: '2c71b79da033989fee5d13d90b101a5616241ba6', style: { fontSize: '12px' } }, h("td", { key: '9133938ffae255e56fea20f1699ee419256be604', colSpan: 3 }), h("td", { key: '4f5878aa73017813ea6d70d5203f79929c2258d5', style: { width: '250px' } }, h("div", { key: '8fbe1ce4edeb5c0f77193afe8108d9bff1d85649', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, this.visibleCount < this.records.length && h("ir-button", { key: 'e3d5dda993f071e64dfbe3f4f44f721825a8873c', size: "sm", text: "Load More", onClickHandler: this.handleLoadMore }), h("div", { key: '3cd366b3e10f1d34bb702e7dc5735a2851366065', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a027b5b32b67e9017db3a1a288d9824c547a9830', class: "legend bg-primary" }), h("p", { key: '7eabd2944e94c6e54aab4b8fc1b22db6fd9cb21a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'f7536bea9c797771d517c27f2f061b033d66288d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0e8d9a635d55015cc1d7fa9ca12e2e73ac02c3bf', class: "legend secondary" }), h("p", { key: '0043dfd9399367d6f422081ccbbe593be1b50062', class: "p-0 m-0" }, "Previous year")))))))));
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
