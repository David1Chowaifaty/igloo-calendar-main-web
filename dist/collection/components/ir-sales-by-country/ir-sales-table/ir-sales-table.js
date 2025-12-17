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
        return (h("div", { key: '084d6e11c648792c618f2e2a52fe6de4bc90062f', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c2108844afb6df19d6f7a1ff708b66ce54bebbcd', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ba250273301d3105c9a59ecbd7673f062c6c02bc', class: "table-header" }, h("tr", { key: '5b2595fbe626ab1f2c5faefb3599cd8a72db1933' }, h("th", { key: '5aab10d250f1ed9abde59937c7beaf0f827141ed', class: "text-left" }, "Country"), h("th", { key: 'f3e95dc7949a7828630fa149d956530ef42e5728', class: "text-center" }, "Room nights"), h("th", { key: '0209fa63762ef38d0da96b2fbe5fec6ea62e3a1d', class: "text-center" }, "No of guests"), h("th", { key: 'bd752b6f89fb8cab414b6f559a5a5a91ebd2fe08', class: "text-right" }, "Revenue"), h("th", { key: '0cf2159f1d70542032092169b68cb2776848f7ff', class: "" }))), h("tbody", { key: '64cc785fe6d854afee087eceeca2f7ca318b1636' }, this.records.length === 0 && (h("tr", { key: '3306bf8572b76762610eac994c975435014a42b2' }, h("td", { key: '2197dd87a1edc95d8f78b56737f9fadcdae4fc79', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'e934f929c19ee187cc9bb67940ba6cd9075c56f7' }, h("tr", { key: '678b8707eabd6f732f035d71f9830f52a3f60413', style: { fontSize: '12px' } }, h("td", { key: '3948ca268e5b068c2f6358aa0c3deacf457878fa', colSpan: 4 }), h("td", { key: '9dca5a85ebe9e931b57f4b961f8c38e580d541a3', style: { width: '250px' } }, h("div", { key: 'e9b7a0f51018fa341087e10f61546a74e5660c46', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '28137a3240f266835c2c91f2db9c3d4fb2e26a3a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a50a728571a206d2652deec5801ed73113084068', class: "legend bg-primary" }), h("p", { key: 'd168b5e2ff1fbccc463285d4eaab69d0446c4ab4', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '440495f26c27ed96868a6b7a9f852278166c216b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9e27214ecf80aa30fc82c19de1ee5a1cf6cf74fa', class: "legend secondary" }), h("p", { key: 'b02f007a8c31c7c05b775566df83948f4d3db343', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '998ca778d107aa7c5865907cf106a37e1ac8c855', class: 'd-flex mx-auto' }, h("ir-button", { key: '91b6d142070c280456e99229a840c17589d163ef', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
