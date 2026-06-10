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
        return (h("div", { key: '53b8ef53c9641ca536b75dea3bae563b5c6c891b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'b9067531d513aac6289b76319f75a4177d3c66f1', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6a17bbb241c46fa232374c882c4e36c797d949cb', class: "table-header" }, h("tr", { key: '1990a0cd7b6fab9c556898790bb607a047b9b704' }, h("th", { key: 'fded6731ec476c282e42ff3f6bf5a6375afaecc2', class: "text-left" }, "Country"), h("th", { key: '2328a4d197c505a4ee09b7314db50b613b2ec645', class: "text-center" }, "Room nights"), h("th", { key: '52ead20bfceee26c9188ab062683c8bf2cbfe0ff', class: "text-center" }, "No of guests"), h("th", { key: 'f80f81046fb557a7ff4a59c41708672dc35c2efd', class: "text-right" }, "Revenue"), h("th", { key: 'eeb450ce31285550a4a04a0dd1b0cdf844d4013b', class: "" }))), h("tbody", { key: '85e56fe6b07221c2a8c93d9c2dd01a36eb6fcf7e' }, this.records.length === 0 && (h("tr", { key: '73eea3fa723b6f1865e342570433392bb2dc7e59' }, h("td", { key: '812dd0b70c5fdd801a950378120e165db0f94601', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'c9002b093b013d896e0b0f887b9f0dd495122ccc' }, h("tr", { key: 'ec96ce7cd46bc28e66b95555010f45cae73b1b02', style: { fontSize: '12px' } }, h("td", { key: '75a52ade292cde027b7b671b09da2ed447754ecc', colSpan: 4 }), h("td", { key: 'c01ac4cf27a90e501d7a699d02ce7c985b5ac0a8', style: { width: '250px' } }, h("div", { key: '0c0bad62196c1fb57446b28201d8b9d8e197aa31', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '4ad5243400686449c00cee864858b04c5ee64693', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4cca09311c09ade55b48a0bef963860138455d53', class: "legend bg-primary" }), h("p", { key: 'dccd4315383e5c815b8715a139b8a19e25a450c8', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c8ad1879bb08366cf4309da81e8cc197a7a294f5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '519b282ce6b30b49c35cd5b95dfa9a409993f264', class: "legend secondary" }), h("p", { key: 'ed5418cdc2aae9a95b2bf40347f8726f187c69d4', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'baf828bc451b8138e21c168d974480336be0f847', class: 'd-flex mx-auto' }, h("ir-button", { key: '2bd22a78b13069c0e7c93a0b1d67c4e79c5cef2c', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
