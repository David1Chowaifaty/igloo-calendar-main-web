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
        return (h("div", { key: 'ecaed6fe4716999bd93b78620b9cace684377bce', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9754c6cd14cacf16c0b86627536599b25e440332', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4b37c7ad4bc86202f99ce6032acbcee805aa7bf4', class: "table-header" }, h("tr", { key: '1e74c7f43819b211371b2ef6b389f8c9b31e89d4' }, h("th", { key: '64a87650c1c86147a04399ec74f191707c0b534d', class: "text-left" }, "Country"), h("th", { key: 'fc559ec67afbe87c0d79407c5b6906db46751841', class: "text-center" }, "Room nights"), h("th", { key: '575e124098cf7f79a6784ffb7715da4c24f40100', class: "text-center" }, "No of guests"), h("th", { key: 'a4179a45c7a320b480bb60db72d894ca79aba84c', class: "text-right" }, "Revenue"), h("th", { key: '3f1243314d901c45b6ff06d21fd73e0d4de5fd2d', class: "" }))), h("tbody", { key: 'bed2b800c64be62fda378dede3e3f9e58f57b37c' }, this.records.length === 0 && (h("tr", { key: '40d24aaf977a10d8d48bf39fbcf42c94aa4e7926' }, h("td", { key: 'a1fee5e4bc3bef5a31a41d11d9c5d35faed4d8f4', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7925fbf5c058c45eff554463dd2d2f327fce595f' }, h("tr", { key: 'e8b6df971b85a7e7f0f9ac92ac8318c133912fac', style: { fontSize: '12px' } }, h("td", { key: '0c5fadd27cc03b78f237056f20a1598d25e51df8', colSpan: 4 }), h("td", { key: '126e8259e9e9e4960e34c62934bdf426b92d8ac8', style: { width: '250px' } }, h("div", { key: '336957757ceb08e59cd4f343b03872d5886d8370', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '213271a17dcad2478e0bad6576cfccacd8dd3f54', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '39a5372a0d66e5f490c846a6f8d50d2fc2660ffc', class: "legend bg-primary" }), h("p", { key: 'a8e306c69fa8c620fb5327dac9e8684865425893', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a749df072969f51f387ea90e93ba8b1d3e2223e7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f202da0186e48616a400d21fa9edfa3a08361b7a', class: "legend secondary" }), h("p", { key: 'b62d8ecab1a3d951a4ffef7167e01843d1b8ae9c', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '07adc63717712397e383d26c0816915d6c7ffbe7', class: 'd-flex mx-auto' }, h("ir-button", { key: '25dbcbf2bb5ebc6e7ba160ffd8acac93c168524b', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
