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
        return (h("div", { key: 'a73f39a13c60975e6d8be6f5987b59d287bca01a', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'dce702db176d9c7561518ed63e58d2dd8bb60a75', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6bbc88d56d58636c2839cc38d3a127d03da0eb35', class: "table-header" }, h("tr", { key: '72d14be36206d8d4d4ec6e29433cf4ddcf7ec545' }, h("th", { key: '9a0c0370fb11f2b30bf8726c58cfecccf2e7b0cb', class: "text-left" }, "Country"), h("th", { key: '518e621b55b0d0d960a082514019d4a80c38d3ba', class: "text-center" }, "Room nights"), h("th", { key: '03a6596364c96c2aa98642a6d710af5e746cc795', class: "text-center" }, "No of guests"), h("th", { key: 'b5cf4a3081abb571ee1f736c793bf5ea4d780f4c', class: "text-right" }, "Revenue"), h("th", { key: '4d2a5bef216de3663c2f824a62e60f6e25dce239', class: "" }))), h("tbody", { key: '8b8d4639d2c85ab990581be58cdcf380efdfadb3' }, this.records.length === 0 && (h("tr", { key: '0a939add6fc00fb7a6859510226b3a586121a978' }, h("td", { key: '4169fd54341c9286642a08669c6978f0250a73b1', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a82f74851e50793aa40b2639410202f968dc52e6' }, h("tr", { key: 'd1f16e8488e82c89d8af5a6d8a34c45f33947fb0', style: { fontSize: '12px' } }, h("td", { key: '667aab7b7175f1186e6754cf3553cb666bdbb45b', colSpan: 4 }), h("td", { key: '94b7d9b91327ca17a7a767f601e36af5e4e06d44', style: { width: '250px' } }, h("div", { key: '85b773232662c001e6d115c1547c59b034feff19', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '8266c4e94a8700150de7dbc58d06071c420aea09', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fbad07666470dd06b64f523ce8253be739c56971', class: "legend bg-primary" }), h("p", { key: '9a1b868012edd3055243dc67a1e0d182b97fc766', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4b13797529e166dabd615464af37dc0b102397fb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4df372613ec554f83916da3175dc1727522d808f', class: "legend secondary" }), h("p", { key: 'f498084b5845ad8812239e852fb9efdacd0e2736', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'b1fddf0cfb8c314cc4ca5b8c2a880365e062ee5b', class: 'd-flex mx-auto' }, h("ir-button", { key: 'e7a32b56550f08c6d6f7d48d4f5f312c2e2fefaa', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
