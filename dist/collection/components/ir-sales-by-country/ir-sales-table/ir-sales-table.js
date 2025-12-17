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
        return (h("div", { key: 'a5d11ec804d3f71076f0d9e8380f32383896b344', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '8806668ffbcfcf0fa8269b6052263291d75725fd', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f293fa60164988350c18ac4da1cc1b8aa02cb5c2', class: "table-header" }, h("tr", { key: '5356298029cb631d492f56eab5645ec3591ce0a5' }, h("th", { key: '8f74388317a5ab6e61bb2d557dcaf85439f28c5b', class: "text-left" }, "Country"), h("th", { key: '1b7122b9c5d8dfa3de357384716725395cc0463d', class: "text-center" }, "Room nights"), h("th", { key: 'a548662f644a94500b17f2e4b984df29d1bea966', class: "text-center" }, "No of guests"), h("th", { key: 'add9e3bf38ffa552562ccdb210a6d0724c08244e', class: "text-right" }, "Revenue"), h("th", { key: '1f796b9f917904605cbe76f0b1c64ffd87b3f2fe', class: "" }))), h("tbody", { key: 'd6f16a6e83c054088f1d44295337862992aab9dd' }, this.records.length === 0 && (h("tr", { key: '2ff6f3327757c41d0f61215b418142018380d557' }, h("td", { key: 'c16d7d2cd5c4d09f4b72ebf0074f309d4a014ec5', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a81fda259bf7753f48f7c7c7952cd1bbca810120' }, h("tr", { key: '367a6ed9771369c97d43b3829cac27e3adc193fa', style: { fontSize: '12px' } }, h("td", { key: '4c4bb6d7a98f9077263cc7abed9bea43de7fe75b', colSpan: 4 }), h("td", { key: '17dd426f5ceee37446bec3aa7295f7a1da2aa189', style: { width: '250px' } }, h("div", { key: '525a80f9de77835b19b3117fd8d065bd7cde434f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'ea767612ed04084f474f88114a02a9a607bd3e37', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9319be850222ab8869e9799fd78c83cd5fcb3acb', class: "legend bg-primary" }), h("p", { key: 'd73c9406aa1cbab52491b5502f1207016686bfdd', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5beebed0c5e81f496b95a1f32ce2a836e3d24143', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fbecfe33e6f72d5566f5398d522e10d3c1609336', class: "legend secondary" }), h("p", { key: '9625fbf0e2e53e3430d46c51704edcbf97cf99e2', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '54cff2ea0d6792e60d12c963c2e228de67e7e712', class: 'd-flex mx-auto' }, h("ir-button", { key: 'fddd5dda78ccd0f515aebbf18c3397ad89ab05e6', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
