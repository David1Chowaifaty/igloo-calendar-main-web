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
        return (h("div", { key: 'd2c2e165a5484788e65555dd919b4fa2b24ef716', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3299e526efa5ac6a64bbc1bbc2e1be41388b8c72', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '97ae0360f62d3856a306b7a23e7be710f443833f', class: "table-header" }, h("tr", { key: '49cdf068f47f5d57dca7c8abb98b524a66492ba4' }, h("th", { key: 'a13437eae1612a861c92ea0f5ec3dee476e48d2f', class: "text-left" }, "Country"), h("th", { key: '427aa2a95d801c3ef0d0f43807d81af2e7b3fbf5', class: "text-center" }, "Room nights"), h("th", { key: 'fc2e66951537cbb0b53e0e886cf5d936251e3ff6', class: "text-center" }, "No of guests"), h("th", { key: '4170e168d9bd281761b896cc241d626b03306c08', class: "text-right" }, "Revenue"), h("th", { key: '6ea14c4af13e19fc04ceb8884abe3d2556ae1473', class: "" }))), h("tbody", { key: '5701091d7943391b3292d95e281245bfd28737fa' }, this.records.length === 0 && (h("tr", { key: '7c391bd7c6290b9a37b01d134a9cfe35fb3d8210' }, h("td", { key: 'b3e40786d568a21e3a11dac63c5acf929c1bec8c', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'ec95daf5f5d0f15ba050a582128723dd0eeb28f4' }, h("tr", { key: 'cf269005ba6960bcb4a9a24c2834bc1a789e4de0', style: { fontSize: '12px' } }, h("td", { key: '06209ac0150d6093d9c10d73f99e8745db9c2d31', colSpan: 4 }), h("td", { key: '15f7c7a32071e8939d880b9a1eb6224f06fb7520', style: { width: '250px' } }, h("div", { key: 'f79ea625b5ee8d31b3459538ea52ba78a9363804', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '25c987e9b2c6cb8e18c46b86abfbe4a1f9559fbb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fb7a67f13384526bcb11c4e47a3ec911bc96b8e0', class: "legend bg-primary" }), h("p", { key: 'e2ade069e70e384bd5938f71bd6ce3ba5a85847a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'af0b72c9b21cacdd79d4469d05d594c4c3cd3d7b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '98f1e2b3ec4a7306bcc0c010c5a8fc24f1e28e02', class: "legend secondary" }), h("p", { key: '6c642d7ccebca7cc8a8dc69410bf55d349582a5f', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '9927624547c7abcf37f081c76226642a403d7a53', class: 'd-flex mx-auto' }, h("ir-button", { key: '92a6904ebf9c4f5ed938dbf80bb17f600f5e0193', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
