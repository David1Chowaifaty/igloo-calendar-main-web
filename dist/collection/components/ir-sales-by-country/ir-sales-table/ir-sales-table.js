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
        return (h("div", { key: 'df2c6c10c537ae9ba7ced9ffa7d1d033e912995a', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '15450637a3c1ae87c221292139bb5e1a92613d50', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'dcda0d0c3f1580a58541a71c8d1d80ec6d971f42', class: "table-header" }, h("tr", { key: '30069047104800ea52f7d68b9dbaf6b6ccbc58bb' }, h("th", { key: '8a2d6b5ec4ce0cec78d2b4ecc448b58b11a45dae', class: "text-left" }, "Country"), h("th", { key: 'f2fb06b616eb821d61fde8818c44ec245a6a10d8', class: "text-center" }, "Room nights"), h("th", { key: 'c35cfddace4d2016aebd3896ae3b9b5a557e0245', class: "text-center" }, "No of guests"), h("th", { key: '08255193dd1fa72066ce701aafb670dc5d5fc829', class: "text-right" }, "Revenue"), h("th", { key: '746656d2a48a283eb40c9f68f928737b4db3bef7', class: "" }))), h("tbody", { key: '14544c72af17cb22ec1c26eee8845ec8091a8ceb' }, this.records.length === 0 && (h("tr", { key: '5c4cde6945de6a7ba9816de4238430578da79bd8' }, h("td", { key: '0cf1b0143c482926974407f9a528eaed08c0651d', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '33fff640ee7859cedfdc6d37ff9aec6eb94b33d5' }, h("tr", { key: 'c71fb4e83a857e6d9e83465e1207b18c68e03055', style: { fontSize: '12px' } }, h("td", { key: '2a304b44a1aa34ba989b4f46af8955be21863fca', colSpan: 4 }), h("td", { key: '636530bdf4dc92ca59a39507b24b296d6a519b7b', style: { width: '250px' } }, h("div", { key: 'e48182ff9f7d9326facc770e70331e40f455dbc5', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '31fdd2f88486d2259352edce4f7a3f060344489e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '726d0b301918e1a31092cde4b27b401544d5ba14', class: "legend bg-primary" }), h("p", { key: 'd6aed7de16cb8212942793263e2bf31dcfdee940', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '0a6686a793039b68f405425167d1f16f3d2c5a4e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '7a2d829ad33d63e924181c1907849b42da1abf45', class: "legend secondary" }), h("p", { key: '4a4266839ae2632892b0a1c05945ac0be2f74c9d', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'b41f8583fa08847a6ae491337a3a2b33838b49fd', class: 'd-flex mx-auto' }, h("ir-button", { key: 'dbc50abc5e61be013e6de52bd07883e2223a1776', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
