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
        return (h("div", { key: 'b5ea16ce61638c8ad66c40ab8423d79419e89589', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'b3aeda4df2812825b498f8d3a92ef0b8b48b8f57', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c3d221ef78aed6f537bd03d348734153b9bc5931', class: "table-header" }, h("tr", { key: '2e8edf4a3d36542c3fafcd5a9db556d037205a65' }, h("th", { key: '999e2d3d6ef5da89296369ce795a0c1e43990134', class: "text-left" }, "Country"), h("th", { key: '31b05f34f6eed4ab1aba2f6fa267e69fd4248d1a', class: "text-center" }, "Room nights"), h("th", { key: '5aea1c448b73fe7cf98ce649a84ef67f660f844c', class: "text-center" }, "No of guests"), h("th", { key: 'a62e454b5c5d0087b2cb48e510c9d3d2cfdafe77', class: "text-right" }, "Revenue"), h("th", { key: '407ea875b99d4727f056c496108c3fca602e4082', class: "" }))), h("tbody", { key: 'd8fd8ebd8017088e501ed5bbd9d379ca851337cb' }, this.records.length === 0 && (h("tr", { key: '06983d7b1232abd41a1120009fd85ab47c6c5d7d' }, h("td", { key: 'ce01cac9bfc35f68f51732c39b64026af23f2b65', colSpan: 4, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7cdd19736910b0e2c9207443960a39e93ba3cc9e' }, h("tr", { key: '9ac2fbd19f20a42f4aed7f9718c354fa21c433a3', style: { fontSize: '12px' } }, h("td", { key: '535b290f55f477164551225a2bcab01bf754fab0', colSpan: 4 }), h("td", { key: '05833135a0200f168d5d4ebcbeaadeb502e1d132', style: { width: '250px' } }, h("div", { key: 'c53d1e6bb129a819f53a00ce70160cffc9d2f196', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '13b9ef42dec5db00cf7d4722c513d1763e80465d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'bf1242bc96144b377eea52acbe4c2406fef35006', class: "legend bg-primary" }), h("p", { key: '89a588040bb48e8deaf58503857ed8d1d0d95532', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b082af313d24a4452fc0a5d19c33c69c6cc68832', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '97e07a49e8ec439ba6e5b26c2f6f0cb0667766ca', class: "legend secondary" }), h("p", { key: '3f19e36effc5df0671ea6c352eb123d396b6c2fb', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'a1d7891d8d8e89da934b30680d69e15cb72bbe58', class: 'd-flex mx-auto' }, h("ir-button", { key: 'd88c6588ba19833588d5f0a1e823d6ce430c7e45', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
