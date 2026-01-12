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
        return (h("div", { key: 'bc47606bdfa1c31c48cc5abfb2453ed521606f02', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '969599479004c7b58c15c1d7b2bc7b9eb35feabf', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '88c9be21fe247fbbe03a68be425f1efc41a32628', class: "table-header" }, h("tr", { key: 'addecc70e70d63082e24a55ad177d16fc3207c1a' }, h("th", { key: '20da037ad97c28457fd28ac3b71f998c01fa6df7', class: "text-left" }, "Country"), h("th", { key: '96a6ec15a2592730b697f9cec09a0eb08cfa5edc', class: "text-center" }, "Room nights"), h("th", { key: '71e008d5d52a241ef0ed06ec18a14e992d1b9649', class: "text-center" }, "No of guests"), h("th", { key: '213ed81f2c0296e1162a8cc469a86f6c596d9196', class: "text-right" }, "Revenue"), h("th", { key: '3b2f58c85ca5c7b63f12c2f3ea1a20a2bd043564', class: "" }))), h("tbody", { key: 'ad1832a58a4fcf0c6f60dec1e21ddc2dc80f884c' }, this.records.length === 0 && (h("tr", { key: 'd5f5ab37e28d8b38043e5f62cb293a6e1b429189' }, h("td", { key: 'e5677899b1ce9ec399cb04e8747c2edd26b72091', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '484ee13cebba2db7143fd75244f0ca31c8611a90' }, h("tr", { key: 'eb1ee6e7ff2b6381d643e0f40e3a76daf280aa28', style: { fontSize: '12px' } }, h("td", { key: '7934247c5ca399e62a0fceae740ea0c64f9144f4', colSpan: 4 }), h("td", { key: '2541095249c2c281b4284ffa5c540c69a6d633e0', style: { width: '250px' } }, h("div", { key: '9d3047ead20c74463fea4f2bb5b10fc2b16a0e21', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '1b54a10a432e794dd473e22ba5b370a5cf48da5d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2af17ca751f940938e2065b912884937a7d9c2d0', class: "legend bg-primary" }), h("p", { key: '3957bbc81f8c4ead9f644bf1e9fa5215b87999c6', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '8d060f62dedb64f50f82fc35e18d202db395e1f7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '87096e1e975f7caf15a25e9f7782c602336e939b', class: "legend secondary" }), h("p", { key: '107eb217e05f20ccca13201fb991cf70477ec943', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '76adf1822681bc39983a3315af0262779769095f', class: 'd-flex mx-auto' }, h("ir-button", { key: '6f1c7c0cdaf421e314ae5578b60864c7c69f8a88', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
