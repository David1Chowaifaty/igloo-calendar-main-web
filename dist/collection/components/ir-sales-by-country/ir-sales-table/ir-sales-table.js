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
        return (h("div", { key: '0b4f8dd3c8d232d33975cd7f694ce48a859bb721', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '117ce65ca5c95b9c68d05cd78ed89ceaf547caf9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7110f462228cc1ced861087d8e9f70e47dd83648', class: "table-header" }, h("tr", { key: '195b18a6419a2baaaf5ef88f4343247522c6894c' }, h("th", { key: '0e481bafb23e23f4bc2e9a16c1583a8dd018658c', class: "text-left" }, "Country"), h("th", { key: '7a9acdd23a8bdc268cc45aec089f88471a4c9464', class: "text-center" }, "Room nights"), h("th", { key: '3da04c040dae98c130dd14401aca60b66d89f0cc', class: "text-center" }, "No of guests"), h("th", { key: '20eb1a938c6ddca44a010bfd280e65a354c5da10', class: "text-right" }, "Revenue"), h("th", { key: '4acddbe05757969ba068c3b2ce1cd2472c91236b', class: "" }))), h("tbody", { key: 'abc1a0cc6d35cea5d36fe39dfa543cea0b407fb7' }, this.records.length === 0 && (h("tr", { key: '05c0e6394d11e1cf181734b4b49e715f60ab4754' }, h("td", { key: 'b2d9ded33d930cab9dc13f013b06f43172d990ba', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '9349e51572c63c9a9d4168051e77542c628c737c' }, h("tr", { key: '2771cd661a30ddd7bf568d509b6f2a129f84d876', style: { fontSize: '12px' } }, h("td", { key: '90efd603f02ebbcf8b5427e113bd35820957d046', colSpan: 4 }), h("td", { key: '241659ee6964a2cc935010326225651f531677d7', style: { width: '250px' } }, h("div", { key: '82f21df8bbe02c21189b34ca1527aeb97a5a6486', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'e5e2163af66df8ed9f3050dcd6f7311eead290d9', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '85408312ff788a50af5d46bf31e09d733e9ac40c', class: "legend bg-primary" }), h("p", { key: '64ff0c0c892ebae14449b3a6ba13bc8c2ecc4dc1', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'd3a7bd89316d892e8413e2a424d16e926d4c1731', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f3b08b0c2b0dddba5f7020222cb803e072bf6eb2', class: "legend secondary" }), h("p", { key: 'a6521cca3216024308cc968f3a82a2caf48a5604', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'fd52a7befa8dc0a985a740c1a46e8cf0e8f09acb', class: 'd-flex mx-auto' }, h("ir-button", { key: 'c3c55f3676e0817446fb3282a4b7dcce69062f0c', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
