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
        return (h("div", { key: 'e937380302a7629931dc5aad45a8ce9517f26f99', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '8dcb7e028f1fe8f0e247c9409d4360e4560883d5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '9e2d19b4e0adb10a8769eb43c5b6d5d1d699122f', class: "table-header" }, h("tr", { key: '5f3bf43879b6ca821b384cb987b040c4ae4bc7d6' }, h("th", { key: '346b1ca2c4080e989e9a2143754b3b72482748b0', class: "text-left" }, "Country"), h("th", { key: '9e3438cd28085104f81034e817dcb48a04fea9ac', class: "text-center" }, "Room nights"), h("th", { key: '501d68bd788483731b30d379996627475669b79b', class: "text-center" }, "No of guests"), h("th", { key: 'b541274181c751ea56e25803e0f54f0ec5dbdf8d', class: "text-right" }, "Revenue"), h("th", { key: 'c853d660d93179bf5c8f7d276af1b1664f55065e', class: "" }))), h("tbody", { key: 'f9ce732c0fe496e618ca5e6f230977288f2950c2' }, this.records.length === 0 && (h("tr", { key: '0d9dd6ff1d78ee90f21704293eb3f4959c918d2b' }, h("td", { key: '5a452eaea3ea23345d95442f05a2911bc69ed728', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '4de944836e8f0821d1146d6723d993eaa9750d05' }, h("tr", { key: '623eeaac32407b3fc695bd51794160c79018cad8', style: { fontSize: '12px' } }, h("td", { key: '92fdb4d4840605c6fbc3f587251da75f0205e385', colSpan: 4 }), h("td", { key: '1a17fbc4fba976b3b72e1cdf239507984c5e556f', style: { width: '250px' } }, h("div", { key: 'e1dc4d3b1e85c0e0cc1671a30913d0aa4b5f1eff', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'db5fc505d45226b74a085640830a8e1d02d3ed1f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a9bc88243b5f1a959352050d1eca03bc26d8e3dc', class: "legend bg-primary" }), h("p", { key: 'a142cb09a5df218c6899c40b94f5adb225483407', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '9faf328f1f59335ae8ae1cffcfeef06ac6a7998c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3c46e6164d954ffcfa06213c52ae246f39eb323a', class: "legend secondary" }), h("p", { key: 'c11114c720fe7a460090f3a8e4d0b188977900da', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'f2a8837e79df77a1aee9df09853287217853349a', class: 'd-flex mx-auto' }, h("ir-button", { key: 'ed8bd3d954aa9543e894913e30fccfd934d84a16', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
