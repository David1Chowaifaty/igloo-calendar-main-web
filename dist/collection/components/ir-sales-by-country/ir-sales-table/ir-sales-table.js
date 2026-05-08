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
        return (h("div", { key: '986ba5b6568f32881b951b9906609bd92b8c779d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'daf605b2d1b6cbcc7aedf50e1398fdccd540284d', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '449654a4ce7d12d7935b1c0f44f1b238574193b2', class: "table-header" }, h("tr", { key: 'a2e0b9ca34ad3050690d26d2fb08fe627ec1b019' }, h("th", { key: '1b2b925125a03ffe7d638859bf1fb1134785677f', class: "text-left" }, "Country"), h("th", { key: 'f81ee10a1f79e404edcab519b49a8b4c2fd3bd7c', class: "text-center" }, "Room nights"), h("th", { key: 'fa0e49f6807b75d584bccd6dae7e581920f67458', class: "text-center" }, "No of guests"), h("th", { key: '84615f4e148ed3051e1fe5019946237b94b4ec38', class: "text-right" }, "Revenue"), h("th", { key: '408aa60d0d85cbef0172ce45e6e4214556d128ef', class: "" }))), h("tbody", { key: '82f883b42cf727269500745b22228f68d9714f72' }, this.records.length === 0 && (h("tr", { key: '63a46450b16446b74a4a440310b3f4b5120f7b05' }, h("td", { key: '4aed580cad233f14b2009ac0894a336311143479', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '2da1b02d35734c39223757792fb7c74f71897c7c' }, h("tr", { key: 'ca533468f7792a64310f471edfa9cddcb141332f', style: { fontSize: '12px' } }, h("td", { key: 'a4de3ddce0eeeab5e2451c3f3480944513e19d1b', colSpan: 4 }), h("td", { key: '13a8148da73cbbc5f9fbb3ee87e7cea7be4e2dbf', style: { width: '250px' } }, h("div", { key: '40c7e2bc7efd158d7f8b4acaff80c011ce25033f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '66bd0576fbaefd4c168ecdd90d40583fb51f490d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b7c0a1d456050fd32569b7ec152727bbe5b5cb28', class: "legend bg-primary" }), h("p", { key: '21d9884a550cef9a3ca2f9224b237b24e3394883', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c347f2916a8823f3fe2beeb58ec7734365ae4d99', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '58135966423e0054474260a178eb89430be68d43', class: "legend secondary" }), h("p", { key: '18f6bd0e53bd7a5a96627752f5ac7891618c5165', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'e9e7874ef5764681d8dffefd229862ecd9f41491', class: 'd-flex mx-auto' }, h("ir-button", { key: '661a6b62f3c911aa94f6f13761cfc96d1b8190cf', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
