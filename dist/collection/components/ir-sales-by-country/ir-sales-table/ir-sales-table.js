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
        return (h("div", { key: '769eaf023baab83d924be29aebfe3c8800571796', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'bd5a39e2dd675bd87b05ba319c7bd4714345ccb2', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6a31a66fc6cba65f961d843b6bc7a7fccd65b58f', class: "table-header" }, h("tr", { key: '4c8b197fdf94e30b693a37c56474132fc662961d' }, h("th", { key: '973da870a9f4497251098f6042c3cdd883735445', class: "text-left" }, "Country"), h("th", { key: 'fba73e9d78d0d58c345ccdbc6ff31f182287ae9d', class: "text-center" }, "Room nights"), h("th", { key: 'a272766b2f48582debbfe989af098fe7bc261eae', class: "text-center" }, "No of guests"), h("th", { key: '6881c310d878a6cd24ac5f586d181f4a7120087f', class: "text-right" }, "Revenue"), h("th", { key: '164b88f1b3e95121070a535b82b15df97484d898', class: "" }))), h("tbody", { key: '9ad129112ce0f68ba04dc4737e1f06c1e79e405c' }, this.records.length === 0 && (h("tr", { key: '8f75760baf9ba76730a1edc76db873a5e01ccf32' }, h("td", { key: '7dfe33d1ba98740e07985f2dfefa963caae750da', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'cf645d7c59b7d2b0bee48518d0f924561d1f587b' }, h("tr", { key: 'a1275d279361d503baca756061eb1168d7b5c164', style: { fontSize: '12px' } }, h("td", { key: 'de77d627060018b071d8720be3b817258dc481de', colSpan: 4 }), h("td", { key: '8a4d457ea52430ea33e1ef3d1cd0d56507f89279', style: { width: '250px' } }, h("div", { key: 'f7eab291551a6938aff5d304bb6bacc9f3278ac4', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a476e6bf4bc4ba647096bc8d007ad428e3a38ecb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c43e3967736bc26c0da0ea3c10208d5c0c532968', class: "legend bg-primary" }), h("p", { key: '676dca44aac8d546f8061e5d44b74933ea9a4e3e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '86fac304ef79d699b65059d2df72a69c00bff14f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e24f3e17792a630c6d1ccf170523358b7a63db9e', class: "legend secondary" }), h("p", { key: '4b15384e2d4fbfebbf024099c9f79aa567932e83', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '55cc284fff4a27d52cde918849bc8d850a55670e', class: 'd-flex mx-auto' }, h("ir-button", { key: '3f5c9a4c2707b02de03114b05a6090d6320fea21', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
