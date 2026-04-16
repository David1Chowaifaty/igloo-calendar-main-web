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
        return (h("div", { key: '7be95f7de5f9bb228daa4452af55b321b7a9798e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '2326995e82e2f05c7372899ea2b12feb5d4089f4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'fd43ebe4df68f78f729a2cf25d083274b79479e9', class: "table-header" }, h("tr", { key: 'a834d0dc527b4e5e3a43506121475bf0e68738db' }, h("th", { key: '04fd13ce9d9f13dcbae071c9060c59f7a99b09fa', class: "text-left" }, "Country"), h("th", { key: '920d8cd7fd3c1f9564158b8d7e4b1afa3ea351ee', class: "text-center" }, "Room nights"), h("th", { key: '17830b34d262effe4312466a1358fae8785a5497', class: "text-center" }, "No of guests"), h("th", { key: '9df37a3f2026659794dff74b802cdf392059ee99', class: "text-right" }, "Revenue"), h("th", { key: 'b724c5505aa95390e59f8977968f6b94200419a6', class: "" }))), h("tbody", { key: 'b17463cd0aa0bbac0a7cb51ae664a0a3c3df8c94' }, this.records.length === 0 && (h("tr", { key: '306f23967b05c6f492c91061876bbeb8e7f776d9' }, h("td", { key: 'd1653da5a1abc9ed074f37a8b68791cd1a7bad75', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '2285ec7575b873f9936143b7d15377b69b3874f9' }, h("tr", { key: '5afa9f74df1d6c4d5811441ab94d8914f7f13185', style: { fontSize: '12px' } }, h("td", { key: 'b06f7a03985c65d94f5650ca44195f68ca639f09', colSpan: 4 }), h("td", { key: '2114313be6ae57c853d805594c229c0ec00a599f', style: { width: '250px' } }, h("div", { key: '477328f4c143e6244ae140a9f29442cbe0cb6daa', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'ee74bd642c54f9fb2c58c891233851c44ae92f5e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9ee15ab0e67aa06e2cccfdbf4b084bfefd18344e', class: "legend bg-primary" }), h("p", { key: '37cb8a58a3e7a18f3a74e5e8d9747ff7ed8766de', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'e8e14eceaf1543efeb660fd3c903453474f0458d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '62cd7daa221306e7601496822ab3ead5db87c671', class: "legend secondary" }), h("p", { key: 'b902ed2019cd30e77aeb7c65e9609969425c11f7', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '891d4d533003d79733141f96464bf47ef0889ba1', class: 'd-flex mx-auto' }, h("ir-button", { key: 'b2d8eaf273d038a2d75d706b62e6caa7ea90ee9b', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
