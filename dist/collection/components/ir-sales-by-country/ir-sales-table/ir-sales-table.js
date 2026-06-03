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
        return (h("div", { key: 'be6f2cc105f3e8bcdfd9954a6c6dab9724051239', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'd8e57b500f145f973c28ef7ba64be975c69068a0', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a67cf63a680fa3b95b19bd2e580c02f04fe480e5', class: "table-header" }, h("tr", { key: 'f2032bc7513484c0f2240f8c2125f521a8f0f045' }, h("th", { key: '6e1e44ec9666e55ecb64b716088d26c5cc9c785e', class: "text-left" }, "Country"), h("th", { key: '5b921bd6eb4f092040ee4d80c57c716d4dec84e3', class: "text-center" }, "Room nights"), h("th", { key: '702d6afe42bffdf43e2d64a0536e322f884fed3c', class: "text-center" }, "No of guests"), h("th", { key: '4b0e9be440478e46bec0bad245db7d355d2f45f6', class: "text-right" }, "Revenue"), h("th", { key: '015c6b1f16e3fa98c42c9b524d04591d99121413', class: "" }))), h("tbody", { key: '498e21cc8795793d2a4fa5b724fc44f0aed718e0' }, this.records.length === 0 && (h("tr", { key: '378d6f90770e6e5c33d1c3b14e00a8eeedf7dec9' }, h("td", { key: '61d5285279c5d30683318245001cd72094a937a7', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'c86e2d7e891b33b4a58ae784d93ff2ec076a4c51' }, h("tr", { key: '650fae8a310999c69702a954396c8dc76293a464', style: { fontSize: '12px' } }, h("td", { key: '403dd7a3629e5e4e07882d6f5cabc8e7ebe10782', colSpan: 4 }), h("td", { key: '8c72276d95769b2f3e5f9448935e09114b8e2610', style: { width: '250px' } }, h("div", { key: '93fbf15f29d4f0b74a86fc8ed037c7a738ad51a4', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '89b78a2bba5be23ababeeccbf94a8563e7b6039b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '10541408b0247d5c8910254fc14e10ee350d25b0', class: "legend bg-primary" }), h("p", { key: 'f1a986c34bc709dabb1149b74a08f9e66d6e47f3', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c4d174bc01da55bda46e0025dd8664ee4addfe02', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '63ae0e4b65cf74bcc22d899138fdfdad6cc00765', class: "legend secondary" }), h("p", { key: '000c45eb49f6eb22fc611bdd822b8621c6ebdc30', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'fb99e965223ba799e3c76354377b0b1d67ee39a6', class: 'd-flex mx-auto' }, h("ir-button", { key: '5d46bb0bafcb351c24abae7a244750d6fe1af346', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
