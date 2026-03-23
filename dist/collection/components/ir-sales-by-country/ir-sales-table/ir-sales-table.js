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
        return (h("div", { key: 'd9fd7439d4244724f1e3ca80efd9e699b7fa2a93', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '0dfa1ed793a25c303e117937f14f7727a0e5e3d7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8f9814164d4aadffbba989d2e4cc16c50d3457ac', class: "table-header" }, h("tr", { key: 'b8824422ac36479813308bb7579962f9fcbf329b' }, h("th", { key: '89fdcab1c293fc0d2f26ecdeab17f5ba84bbf9a6', class: "text-left" }, "Country"), h("th", { key: 'ec5f5933a003267d5e0f930e58fcf5da6a3012a4', class: "text-center" }, "Room nights"), h("th", { key: '9284725a0c64ba1b37dd13996ea98ec411fd49d1', class: "text-center" }, "No of guests"), h("th", { key: 'c9ac7663b4df266f0979208f6ad621222596ca3c', class: "text-right" }, "Revenue"), h("th", { key: 'c0e64bd9fb45a5a2d77f3fe6896b22ff8fd99783', class: "" }))), h("tbody", { key: '5461ed19aca1a3ae8104307db989cda362c4bb4e' }, this.records.length === 0 && (h("tr", { key: 'a0613f4f10b3302090cdbd5f434eaa86c6398237' }, h("td", { key: '84d14a50bba6f6463b81275eb4c4665422d0d665', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'ffaad24df5182d6aeb82aee31bfff1305e11dc13' }, h("tr", { key: '9aa457cae82c0eece74f24639ad51ac1555c7806', style: { fontSize: '12px' } }, h("td", { key: 'a3a5d13a59e2fcfab476fcdc6e4c0c9eb58a27a5', colSpan: 4 }), h("td", { key: '90f73257398ba923b388ca36c5f69e4a15df20c5', style: { width: '250px' } }, h("div", { key: '9fb2bd484f0e7cfe03231af0c567fc282b7acaba', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '99dbf27c4261e49d34eb3a245d7579b9c4ff8388', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd8480d8a332b8566f72e13170ee75997a5d00e86', class: "legend bg-primary" }), h("p", { key: 'e8c81eb9a61d3072263baba335cb6d1eb977b081', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '831aef9d394b797301d43bccc5e275c55b36a009', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '10c726d62cd3a158f49e575f8e4a6fcb2542307a', class: "legend secondary" }), h("p", { key: '34d88b7484389721cdb1b2635003010541101671', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'fb870362c30cd541046672c75dc36179ec73bdf7', class: 'd-flex mx-auto' }, h("ir-button", { key: 'a454685407614abeeed5aae99ad88bdf6abeab0b', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
