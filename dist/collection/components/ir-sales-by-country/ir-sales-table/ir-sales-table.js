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
        return (h("div", { key: '2405768e6c89b84dae286557a32ef08a55e9260b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'e1d875b52ef4e20f0edd8568b07a7bd6bcdaa21c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b61c66b3f96e35d3b513ea2c3a507f7a034ff520', class: "table-header" }, h("tr", { key: '5607aa40741a2ccd4bafa19c4d07f4808dfdbd3c' }, h("th", { key: '880f0975af507d3c2ee0a956aafd37949f68c0d9', class: "text-left" }, "Country"), h("th", { key: '8f5cac267778056b4bdf75950d1fea95f7c13c36', class: "text-center" }, "Room nights"), h("th", { key: '7ebf2d5189a347ba367db2258175144e8fc73175', class: "text-center" }, "No of guests"), h("th", { key: '007bbef47e9465fa22a587cc44f36cdebaced54d', class: "text-right" }, "Revenue"), h("th", { key: '29c0fb16a4532813cf2a1ddc85d5451b65a47460', class: "" }))), h("tbody", { key: '092291a829571bc905087360fb95f3b40979503e' }, this.records.length === 0 && (h("tr", { key: 'c984877209b1c9b82a30efcdbab99f82ef2a757a' }, h("td", { key: '70d69c3698b5f62447be29c2301c025ea385b467', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '73598d842f70c1f56efec368b6a9d4d84ee34b90' }, h("tr", { key: '9d9e0a776efc93c1a23b2534e64e95a754ecab36', style: { fontSize: '12px' } }, h("td", { key: '73230d3d7f6f429eb0ce8f6dade8f526f8d18d9f', colSpan: 4 }), h("td", { key: '642b48296be3714d39827fa44c6ace15d764c32b', style: { width: '250px' } }, h("div", { key: '697d521d6f63b221ddc323f8abb9dc3dbd047273', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '4d4ba7d1c40397bc3513761fbd4d687049c708bc', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'eeb5bb66f6e71c43f6302c6558b30fc24a4b2211', class: "legend bg-primary" }), h("p", { key: '0c853e1c4ff38418e7c5cfabc337b548fa7bdccc', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '80dccb838f561d688d05d81ec15e358cac9706d4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ce0b280e72f3f858a2ca00be876e889eca8ff1ed', class: "legend secondary" }), h("p", { key: '0e56e450eda4a5dda0b2b5b0219cfe4ad91e783b', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '432157c0099b83fd7e344cc64f2154c58fe88f83', class: 'd-flex mx-auto' }, h("ir-button", { key: 'a7942f3753651063ee522d8eeb7fc97dc3eb9f14', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
