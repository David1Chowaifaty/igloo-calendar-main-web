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
        return (h("div", { key: '3c72eb784b80403784294d1c8d9ee03fd38a4ddb', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '7c612fb1c80f43b85edb936420a48febc7af03be', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'bb9f4a41d7e9f98739537fa988e7193a5bc71a00', class: "table-header" }, h("tr", { key: '36760e7cf05ca39b0fc13a107e0e1a9d68eb5133' }, h("th", { key: 'c9718c92aed556c58e2befdf6d76f3daba101176', class: "text-left" }, "Country"), h("th", { key: '5979930fb2b87e96f6e2d3934ad359b6baa2467c', class: "text-center" }, "Room nights"), h("th", { key: 'c6c6cad89bfa161a88c4e62fb0d5d53136b8b52b', class: "text-center" }, "No of guests"), h("th", { key: '4a6de186e46b01ec8579996b4f17b88a4956ced5', class: "text-right" }, "Revenue"), h("th", { key: '0c17a49d4ca1b253b3d658bf006e61559d19b5fe', class: "" }))), h("tbody", { key: '056036647b22013c61b5984b9ffcd4994bcfbe38' }, this.records.length === 0 && (h("tr", { key: '0e3aa53a67dead76e1f45ef8d1cc5b3f58062133' }, h("td", { key: '3703aee401f795b367c04db3f9d6982f7a29bad4', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '4e4ae67c3acad428ef6c606c41f854ca674835bb' }, h("tr", { key: '27278ed6622840840a45f415bdfc48c3d5bfe91c', style: { fontSize: '12px' } }, h("td", { key: '4b80c12f366dc2655553e045796607f4aac5154c', colSpan: 4 }), h("td", { key: '57c548c0d5914b260a2a071353dd00a1a433ee30', style: { width: '250px' } }, h("div", { key: 'c5e851702fbaa7ca42650107a9fc24378f48566f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a2e8b2106c4c3163a53e5c5f1ac0f6266cb1d34f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'dda6171fa38653b9934b90cb0948a8ff6f9b63f9', class: "legend bg-primary" }), h("p", { key: 'aff8779604453610777b9173bae86cc70b6d943a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '53ee4602419eda2c5d295d4c788977b9f94c9e8a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6faf4fe195828851ab78e60c1790c5e5d86b17b9', class: "legend secondary" }), h("p", { key: '8c5cd80b210d2ac65ca0f0550e2ce2633cdd4b96', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '7fc284988a1be9ab04b2ff45fddfc7ba50f4b79a', class: 'd-flex mx-auto' }, h("ir-button", { key: '6453926d3a7434e755457a8c464371130843f630', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
