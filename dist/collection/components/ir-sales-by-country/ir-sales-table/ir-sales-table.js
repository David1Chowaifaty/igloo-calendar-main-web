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
        return (h("div", { key: 'a3559178996b853ea9f9e4b8ef4b5478f505eb0b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '6757efdde0bbf8a263b9ee1ccd9dc40ea09d913f', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4975a4bbf4b9689d94b1cb3cb7c89cf921923659', class: "table-header" }, h("tr", { key: '03b10b47caeaf95a9d032161bdc414fab4807cdf' }, h("th", { key: 'cb75e7912db2dc44dd168719282f606645795e0a', class: "text-left" }, "Country"), h("th", { key: '006b853dda9f24b4548192ffbddfb00948c35244', class: "text-center" }, "Room nights"), h("th", { key: '2203dcc71cdd08fc0201f73c805be9601c9ff743', class: "text-center" }, "No of guests"), h("th", { key: '0ed3e49bf80b2fd4d00676d2f5e8d52977a8846c', class: "text-right" }, "Revenue"), h("th", { key: '865da442be9d295857f978267f0c7ee57821f79c', class: "" }))), h("tbody", { key: '6e2e6b039ee797c67b6e93d88165cbdae9e5fd82' }, this.records.length === 0 && (h("tr", { key: '5df2e1342c3dd26e45577feba3bba5917d718234' }, h("td", { key: '40142b3faa835ea79d578262098fd7f04ee7725d', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '024c0aa0175567f780ef4899b7c6d70b0def87d6' }, h("tr", { key: '6d024bd4bdb66180b4d03efc5f565e79781ec675', style: { fontSize: '12px' } }, h("td", { key: '083dd3fb909e5716dfc744eb2f27b22c78724ea3', colSpan: 4 }), h("td", { key: '2e139aa40a176960e9d1a9792f0eced3a7314fe8', style: { width: '250px' } }, h("div", { key: 'e166a38a860ade3a271ba3e1bda79abe1c8f69c0', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '008458400ac5d520cf7e7e5cb05b811d5bf24a2b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a69e277abb5e4f2b95b7f0f61702a904bad5d62d', class: "legend bg-primary" }), h("p", { key: 'eb68dc2e0dd8961e493790c818949c732191bbbb', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '9c18a075703e6087a3b27d1dbcf85d24745a2247', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4ac7db24e88566ac25f8109f5c521aa0383c9350', class: "legend secondary" }), h("p", { key: '13b47d17b0d66ccb57f8545af803234f94e8ad73', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'bd190a208e9e84a562d4616b83764637e678c10b', class: 'd-flex mx-auto' }, h("ir-button", { key: '65c73ab2ad031a12426c28be2fba901770c66bf6', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
