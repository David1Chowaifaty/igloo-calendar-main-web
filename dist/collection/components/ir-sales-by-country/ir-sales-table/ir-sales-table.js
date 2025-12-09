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
        return (h("div", { key: 'ceef71bc3429263149ac8582200f1aa92b91d78c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'ae3d09e84aa4ae520611401172a65c3f2428bc1b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ff37a88af60f54486251e922b284e861a636aa70', class: "table-header" }, h("tr", { key: 'e101f4ce6a4b50809b35632a6a2697361be197f7' }, h("th", { key: '4cdeeeb96ce508e5b93b48b78df2db99468a63ce', class: "text-left" }, "Country"), h("th", { key: '4b6fe8e127be148a258eabc49d89c761e35e4f56', class: "text-center" }, "Room nights"), h("th", { key: 'e33baf1761379c1894ac5e7763a40c6cac72909d', class: "text-center" }, "No of guests"), h("th", { key: '7b4d845564cae89c6b00227493ae6dd670c5559f', class: "text-right" }, "Revenue"), h("th", { key: '73386a2e199e257701bed45ed61fc9161860c9cf', class: "" }))), h("tbody", { key: 'e3bd70578d2e5ed45162ce4c60487bc5fac56e48' }, this.records.length === 0 && (h("tr", { key: '73a74159063e1d4a215258bf358de3a8a33eacb2' }, h("td", { key: 'de8de2f78aa4ff7ee563128a625530cff457a508', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '84853020879d93e6e1165bed8fb2b955674f625b' }, h("tr", { key: '0b5573576d17ae35c260b808878b563d9321ae96', style: { fontSize: '12px' } }, h("td", { key: '93e588efb7a2ef69b2f440964a0ba9591c08bc01', colSpan: 4 }), h("td", { key: '722c92cb738ea4b7136dbd452a2bfce08bf02f38', style: { width: '250px' } }, h("div", { key: '69d9f0ac2b14a904c171729d02742c192fa2ec18', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '61b9d91b19a77b34d5a2d681a7a64581ff42e776', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f0a974e92cfaa99b762baaa3635e87cd4b3dcfa2', class: "legend bg-primary" }), h("p", { key: '6faa69f0cc9a31fe201319cc7dbf7e01b64fc1e4', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '282654e184449d87d40f7db0c1cbf66663d98aac', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'aec8689960bce29d660498103ce792c58237a18c', class: "legend secondary" }), h("p", { key: '87fe30bb798cd714f1dd39e669a35edbe9c7c0e3', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '427d58672b00666e9e101233181688abbc47feb3', class: 'd-flex mx-auto' }, h("ir-button", { key: 'f61546054d2a761f406317397d00435278f70c7d', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
