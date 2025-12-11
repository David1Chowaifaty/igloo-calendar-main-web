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
        return (h("div", { key: 'b86c6064780756a89cb3ce43e56b26bdc7083c23', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '8ccf55518549eb22fa18d2dd6a5fe49bdf681ee6', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '0ed899b08124b17dff25c4edc46d02f442b8b2f2', class: "table-header" }, h("tr", { key: '1b5fa9d8850ec277d1bd4f6d09434c453aa35a9e' }, h("th", { key: '6e99113423826063e6fb473c3daf5f37068e3b82', class: "text-left" }, "Country"), h("th", { key: 'c4895c05b20c235cd55e6d70d51e91c2c58a24e7', class: "text-center" }, "Room nights"), h("th", { key: '9e100973e20b634d3d9bc26d135f13f3bb24264b', class: "text-center" }, "No of guests"), h("th", { key: 'ca0875c2549d1e311358acfc37a8a5e3550ba13d', class: "text-right" }, "Revenue"), h("th", { key: 'f6a411791035d610aa3b49f6b46d5114243f4c98', class: "" }))), h("tbody", { key: '15b14bdd00e2230d709bb69f0cd06f13178ca35f' }, this.records.length === 0 && (h("tr", { key: '6287416fb93cfe8ff2552ed13efb271876872957' }, h("td", { key: '3d3988f862acf799198ca8883635c4f358f7ac2f', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '1c041eb23593af58973fdc562999d73a844ea87b' }, h("tr", { key: '2e5a23e37ce432903d405560f169a838645a3fa3', style: { fontSize: '12px' } }, h("td", { key: '434f1b71bb70af1f1f8c65f920a52a6dcf46e13b', colSpan: 4 }), h("td", { key: 'c70e9e2b898c2df05034657b24c6bb6ab0b5b136', style: { width: '250px' } }, h("div", { key: '1fb4d204053c9d45a19995540f1373daa5cc1ccf', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2ff18dd9e6861a089a2941304f57e8ac0af868a3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'aa2747257ee9c1dca577119bc017cac5ca502230', class: "legend bg-primary" }), h("p", { key: '27a2842948ebcecfff4fba80b1125ef303c5add3', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '23615bbe7625cdb5d503fd7270236065b6f014e4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '7108611e9435034aba9a3f575559b450d8bbce71', class: "legend secondary" }), h("p", { key: '2b7e15cdb58df35d724af24ddfb83e07407e41ae', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '2f016a33a67d6be4c251a2b5787ae0b01ef4826e', class: 'd-flex mx-auto' }, h("ir-button", { key: '3a4630a315505dafb2248874deed7bd394e0db39', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
