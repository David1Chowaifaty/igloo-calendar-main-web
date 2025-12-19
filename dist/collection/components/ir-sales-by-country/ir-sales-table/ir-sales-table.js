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
        return (h("div", { key: '11a13840240e3ef532f03b5a42c7ee5a56242dbb', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '7e54a2a56e5bb58cd03932f6e8bbf9339086cb73', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c21b203072b466b8a908f57e223f238d993ce266', class: "table-header" }, h("tr", { key: '03f8637f2a37f963456185f1097a092b6af8db1f' }, h("th", { key: '9f55f2b24b429bcd1d1d24db45a50bfa174bdc0e', class: "text-left" }, "Country"), h("th", { key: '39704a9cf9e4946e0c3628e64bf3bd6d1e95890f', class: "text-center" }, "Room nights"), h("th", { key: 'b72765e8d01418557a79e1fba1945f878ed28a56', class: "text-center" }, "No of guests"), h("th", { key: 'bdd7cb5d6d0181144f650b069ff446ba701ee557', class: "text-right" }, "Revenue"), h("th", { key: 'fdd93e2b9216b3ac91256bc0fa1d4c98c4c68be7', class: "" }))), h("tbody", { key: 'c1bde88931c6e7d859cb14919caa638f1eaf64e5' }, this.records.length === 0 && (h("tr", { key: 'fa7d1673e1b28ce0cf8b9cfe2af9ffb77c812cde' }, h("td", { key: 'bc3bd5eac75c07b6358d2f0efb2083bd7286eb52', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'ea62cc421db8a4bf45275e58647f6d6ad92beeeb' }, h("tr", { key: 'ee185d67de8f88b070f45973378c17d1dc8b05a3', style: { fontSize: '12px' } }, h("td", { key: '0ab6bbf037b672b973ad89cf1f14745e222e9e5d', colSpan: 4 }), h("td", { key: 'ad36467bbd1a04ea815742567fc0634a627b74ab', style: { width: '250px' } }, h("div", { key: 'e0cb0c947d39ab648aa5db6c8232b87d2d83c16e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '5e3a63ae85dd30bed2a0e223a1bbb3754d5be5b6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b45b62b355c4f51aef92e894f6eec552b92b313f', class: "legend bg-primary" }), h("p", { key: '5122452bf9e7a6487e613760b0b25f820a823cf8', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '89c18572377b250150683e3382e7d6ba35b4eb1a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '12caee4da1f3a0da68810e6f610b7c4d9c368a8f', class: "legend secondary" }), h("p", { key: 'd00694579f2fc4f027539666dd6f69641c2bb50c', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'ac9a7ecf80494e01ccd1fe8919a357a6345609bf', class: 'd-flex mx-auto' }, h("ir-button", { key: 'dd01b86f57ec062797885cc813e49b5385e4ed30', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
