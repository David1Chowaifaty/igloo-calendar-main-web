import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrSalesTable {
    records = [];
    mappedCountries;
    visibleCount = 10;
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (h("div", { key: '72ce9ca743b40a74ad5bcd9a08621b9faf3c86a0', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '6f668a2c1928dc814edb037a0d88db76c2a0d7a8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '219902a70a8889f0ad0cf480fee45bfe25fa947b', class: "table-header" }, h("tr", { key: '9726d9f8b1c0776b45dbb234b5e3b0f4c19187bd' }, h("th", { key: '17ac542a6fb6f7f3ba4121f3d2e425a6547e5a7a', class: "text-left" }, "Country"), h("th", { key: 'c2529672fbc04cce8d3652cf7a44218b5d5fa355', class: "text-center" }, "Room nights"), h("th", { key: 'fbaebd4b87e745539af8e2d216bae537bd4a3efd', class: "text-center" }, "No of guests"), h("th", { key: 'f1b717f6d6c4917aa034c3fd612f73f41d3814ca', class: "text-right" }, "Revenue"), h("th", { key: 'a22a1e30af11533df3a4a8a6aabccb195b51d5f8', class: "" }))), h("tbody", { key: 'a3a223f858f9dda2b3df7c209ba455104b2ba6cc' }, this.records.length === 0 && (h("tr", { key: '7f9c01556573ac116fd95f76cfc077a1790b82fc' }, h("td", { key: 'a5cd4f2061cc3e47adb35868165fece8522e3fd7', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a3a96e533604b8107a12bfca787625b8222de0dd' }, h("tr", { key: '4c18a067c18eb713232f8a7299bdc7d7145f30a1', style: { fontSize: '12px' } }, h("td", { key: '6a67db720beadf92df596210e23ebf205bec48e0', colSpan: 4 }), h("td", { key: '51a1d18208527e4d09d2812b8f6ce3a5ea1ca201', style: { width: '250px' } }, h("div", { key: '7d8ca48556871390d34dcc6bfb054d1f22cbbf3a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '40a43fc6e8e5d24cee9a8e5e255da33039696b67', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e6acf3c031ee32e895e34422fa7fd61ff6ba0fb9', class: "legend bg-primary" }), h("p", { key: '36282aaf0924323cea3f60e300bd1d452c41a063', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'dbf74deeb9416c26a0b03d09689b5bd14997887a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '67edb0a00be37fdb6c21a7fe8760f9b75d172bed', class: "legend secondary" }), h("p", { key: '423ca4effc77767bb705c3534c23c0f8ebd33105', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '1dffacf1c08ce9d6d9dce61159ef9686072a2c7c', class: 'd-flex mx-auto' }, h("ir-button", { key: 'dc4453e3553e9b940fdf6cae977d03f87174321e', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
