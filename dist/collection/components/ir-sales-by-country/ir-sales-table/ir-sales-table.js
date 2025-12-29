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
        return (h("div", { key: '4b65eb43b3932ab911c673ca2e663162d608af88', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5f8a2e3469f8a4723f33655f17b3911c3e7d74e8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f56ddae8d88ba49f7969537b2858194dd725d3ad', class: "table-header" }, h("tr", { key: 'ffaa3fdf072272f35a35c90cd7054ce531669b7c' }, h("th", { key: '8d62f98dcd3136613ce8cb45f44a07e2477f23bd', class: "text-left" }, "Country"), h("th", { key: '76e8700db1297df40830d85a98b04922abbb6b45', class: "text-center" }, "Room nights"), h("th", { key: 'a7c6c08d874ba89c2b1342fa940b295df3d57340', class: "text-center" }, "No of guests"), h("th", { key: 'b2e3c9a51a9a855899f5c7eb75e1d770382dfef7', class: "text-right" }, "Revenue"), h("th", { key: 'c3a65f0b40343f86bf2dc50d0c34a8fda05cb7c7', class: "" }))), h("tbody", { key: 'a2e5a15d85962b4bd7cee0fa680e0e9ba5e6f673' }, this.records.length === 0 && (h("tr", { key: 'd61c22861f8a808dacad6434dd2059be5f195a68' }, h("td", { key: '79ca256569007adba25522ba6649c15e0e04e91d', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'b328f722d800821bfbc055e38c16c4fca0946900' }, h("tr", { key: '4e054850bead7dcd68e7403b879d8798e9ca7d90', style: { fontSize: '12px' } }, h("td", { key: 'f8ee28ac9d739d22598bf95bf09c96ddea7d9681', colSpan: 4 }), h("td", { key: 'da60ab40f6fdc3c782ca197a8127b981116133ec', style: { width: '250px' } }, h("div", { key: '9341794512e0e61fabf30b65fc4767d140a5b855', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'b8edfc54f14fb94851de8599988e8a5c604a87f3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6aace259248d860218f21a6b724803d9a65ef22f', class: "legend bg-primary" }), h("p", { key: '01053fa22bd74fa423ec0cc924563403ec671355', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ae43cba603e1cdc8a2361f5afd7b9a7ce953a828', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '86baf583e1c207076ecd7f4d6bc35e1fa3d8319d', class: "legend secondary" }), h("p", { key: 'fddd270f7f77271c60cc3aa7f29f4d546707c817', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '4e7cf32c139d861540c021b7c83651526cd6a8b7', class: 'd-flex mx-auto' }, h("ir-button", { key: '20d12482728285f423fc6c5e486419c9f8ce2ca0', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
