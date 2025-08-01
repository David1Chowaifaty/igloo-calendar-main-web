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
        return (h("div", { key: '8355e87df42ff3b53ce83fb416f3b5d033ddceb4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'eb3274c75622e00844d37e09b48e3b246813343b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ddddf26b8772c43208f018a202cf5dd6b22901f0', class: "table-header" }, h("tr", { key: '2bbc31cb3a6db6f7a8a1126883348332ffe612b4' }, h("th", { key: 'ea8376a10539f28c0c44fd15d3c2dbf62ec061a8', class: "text-left" }, "Country"), h("th", { key: '507c7af656ac15e4bc49985263e8e42a69761997', class: "text-center" }, "Room nights"), h("th", { key: '3b48646ea201a3444df9f7806ab40ff5d6294b11', class: "text-center" }, "No of guests"), h("th", { key: '937282b9102fbcb74099e907631dd7563382ace5', class: "text-right" }, "Revenue"), h("th", { key: 'e1d4d94c304af0a9734a1c5075502d378f571c9d', class: "" }))), h("tbody", { key: '66c0f5a631385afa9fa365663293876f2277f4c9' }, this.records.length === 0 && (h("tr", { key: 'c60bf681427cd1a1e334eb9c011abe42178dd934' }, h("td", { key: '8f07d49127a3f12c1f11635220a62b1dcbf44b14', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8ad129660bd7fd791537da8a59486f5dabe928da' }, h("tr", { key: '6fa720d7ad01e8f9e3799e7d789097fa6f71a758', style: { fontSize: '12px' } }, h("td", { key: 'c328dda51c4a9866c81d2e60f0ba547c80a277e9', colSpan: 4 }), h("td", { key: '3360753ba1ddd843bab73bbe61649526401b75ad', style: { width: '250px' } }, h("div", { key: '41f0618ea8ccc74d32d1bb1fe5dd11c5721215af', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'f193544dd4b74ecfce4f3409ace29caf04e268a4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '607a2c09de8df176384cde74122816b25bbda73b', class: "legend bg-primary" }), h("p", { key: 'bcedf18b57013d694f0ef8c66f8940ab3e15cbca', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c97227ecb31360b2f249389255a5fec63816dc7e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'efd878ea85ea07308c8f1d90c559a126f0694e4f', class: "legend secondary" }), h("p", { key: 'd15d9fe1b80251ade572e5ef64a5184cffacec11', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'c6331156fa6cb60563206118c36bca725c8aaf3c', class: 'd-flex mx-auto' }, h("ir-button", { key: '7c248a62025efad5bbf789323ad406d79239b5b2', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
