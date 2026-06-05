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
        return (h("div", { key: '1ae96fcbabe24d5eaa35b482afc80684285ea267', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '39dcbde3b17720c499f1c42ff33da3b43988603f', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'be2fb174e3706d23bf748eba93d8c41f435080b5', class: "table-header" }, h("tr", { key: '15679e0192ce18e3fa59397bfeaf4d4c8ab4ff62' }, h("th", { key: '3976fc1fa92b2cfe8915482a6460cf9049440d3e', class: "text-left" }, "Country"), h("th", { key: '468e23405485a4e5b1022493458668e579b52c15', class: "text-center" }, "Room nights"), h("th", { key: '1ff9d1345f95408ffd097d735753093cbee42386', class: "text-center" }, "No of guests"), h("th", { key: 'cc26a7171ce8ac79f4c98718ecb1afb036c9ec29', class: "text-right" }, "Revenue"), h("th", { key: '2e5ea882918aa2cd96ad15463c0a1e13ca608a6d', class: "" }))), h("tbody", { key: '01445603b5293b8e982b5e132676fdf2098ce3be' }, this.records.length === 0 && (h("tr", { key: 'd9a5e20965841b9bbe009a9a26874e7a646ca2d6' }, h("td", { key: '416b96c81a233729a16544c5d4c09da6c51dd2f1', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '0be1f082160e463512e1b32535ff5e4bba1dcd14' }, h("tr", { key: '747ad64ad928743f88acaaace79c7efb7fd5bc9e', style: { fontSize: '12px' } }, h("td", { key: 'ebf0934b905483a8a505ac31dfcaa2cdcd0a2594', colSpan: 4 }), h("td", { key: 'bb34420a6a6d475928aca7c217fedf4de31f4c95', style: { width: '250px' } }, h("div", { key: 'c146da844181119e9de949cb3123a53b16e4f8e7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '0655a667b78e0ff78f76c4e3a67a9a534961ba6b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a686d968f4d56a2a463a0c78fc437ba9ebb4162c', class: "legend bg-primary" }), h("p", { key: 'e3c44a42421816535081ebffd28f8b0a9817650c', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5aa54552a49adf3e714026dfc0932170c957e25c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '419b18a3581334e0d6e2755771a3443d09e48a82', class: "legend secondary" }), h("p", { key: '4264608a0f58a539d1b5667c441fd9436becca46', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '1e46a3d5bc11aa90e143e39e68acc1d5fa6e57e2', class: 'd-flex mx-auto' }, h("ir-button", { key: '04d9d317fbf50c7b3e191cc6ca005ac147bb6db3', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
