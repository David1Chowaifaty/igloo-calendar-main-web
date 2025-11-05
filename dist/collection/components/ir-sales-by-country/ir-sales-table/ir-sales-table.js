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
        return (h("div", { key: 'f491b79046c0a0d118c88fb324974935fa9a4e11', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '1e61f9e8949a13a0f1641ad3bef4fd1a8198b821', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '1ebc280b4861740d70b78034b4fbec3593ed57c9', class: "table-header" }, h("tr", { key: 'bdd63985cf4c86728c26712fecdb734aeeb81f6f' }, h("th", { key: '3d547d9b58d7779755893958aad82de9268ecd2f', class: "text-left" }, "Country"), h("th", { key: 'ccbc3f522701b9d2a22af420d16d5ef6b9b9dc77', class: "text-center" }, "Room nights"), h("th", { key: '320b2533da0f2c678f12c4a305addeee83234c4a', class: "text-center" }, "No of guests"), h("th", { key: '5e3131eae208f93bf58411bb11b3e3b786bf51c0', class: "text-right" }, "Revenue"), h("th", { key: 'c039d64bab8cc58ec0efb3ba07eae712c92d5208', class: "" }))), h("tbody", { key: '71d7139368451886f5e8554548fcd80f7ce27fe3' }, this.records.length === 0 && (h("tr", { key: '83bfada764c43562784c0cf09f199158ed233b16' }, h("td", { key: '3e6e90ae67da46531eb38197c79841049f4eb19d', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'dd7705b70e7f3a1da0a516a5cccae80d60ae3fc3' }, h("tr", { key: 'f57fd867f87b098baff72f8ab7a2d1817c2b8d24', style: { fontSize: '12px' } }, h("td", { key: '86832a6fcad79d63f021b12a5f9ae0344fce8414', colSpan: 4 }), h("td", { key: 'adaf8c3af44be47cfe069c02b8f22e54555ce996', style: { width: '250px' } }, h("div", { key: '8c73449c42576b85dac8ff50d2815b677d86754e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '99438a85cb301957700eca89b93e876b1af46224', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5d23563f32d88de6b7707a4f94afe4b1b7e53b98', class: "legend bg-primary" }), h("p", { key: '78ad34b0b3c8cfc428bfa32b98817b5f5d7a1c75', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '666b03f4780f09da8af01b88613b6bf26599df98', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2cf648528a8885ddda2595c085ca778fa9488adb', class: "legend secondary" }), h("p", { key: '4d7f10a6d4f634e94b4b289b6083d79c015ecb24', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'f2e54725b2868b82568d446836a121d2dda9dbf6', class: 'd-flex mx-auto' }, h("ir-button", { key: '121aaa086cd070e1bd92412afd0d67e6459ca036', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
