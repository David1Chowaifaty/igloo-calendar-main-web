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
        return (h("div", { key: 'cdf26be914dbb0385e807845de7356cc9ac7d1b6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '295ab44b5e5ca26a867389f6a277ae65bdacdefe', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6f0026dd1c99e5442658a8c88b91d24986dcacbc', class: "table-header" }, h("tr", { key: '5b1223f5e0b395c82d763f8efc1ec7555d6aa085' }, h("th", { key: '1c2a741862819d52fd3f956a4f69419b349baa7e', class: "text-left" }, "Country"), h("th", { key: '3296d9f5e59e607eb7992ea4af33cc1fe0c06b06', class: "text-center" }, "Room nights"), h("th", { key: 'c407bbaa6aac1b6706abe8668251fdd8795028f5', class: "text-center" }, "No of guests"), h("th", { key: '95d830eb7a00edbfdb025f1a0ea91bfd730943e8', class: "text-right" }, "Revenue"), h("th", { key: '5fd1b0a02d462435babe417cf6a27d3085d4259d', class: "" }))), h("tbody", { key: '1d2ca35220dd57b234792f4f1487e98b7f244d8e' }, this.records.length === 0 && (h("tr", { key: '056f000245471edefdb2ad510b333b644a09d12d' }, h("td", { key: '0197541b22aaec5baa5d4a1b65c2d770dae0fcb2', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd2f98c1c6dbd80772cdfc6986015f3bf4233ad3d' }, h("tr", { key: '03ea8bb13270bd7f8081bdbc36399369118b224d', style: { fontSize: '12px' } }, h("td", { key: '2617abbe20b7c41b2005abaa1a3a74e6c94fcd6e', colSpan: 4 }), h("td", { key: '7d988d4729c1e5b1ce8572ccb9ca675842a6a116', style: { width: '250px' } }, h("div", { key: '90c841934f2e3161ddc29517c44e38f8611fcdc4', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'b3a6deea9de942e68c0a635076fe14214591ecab', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fdda7d0508ed253892f2ece065f68884cc79e753', class: "legend bg-primary" }), h("p", { key: '76eb6ae4726108362a6b6f82753dbf92983edb22', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '9f66c18eed57dc6a2aefdd9146840d1332095214', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '09276e29bbe22436f6f1c7a01a83c9b78e0e3bb2', class: "legend secondary" }), h("p", { key: '7e9df36594fb79120b53ce3601c04a7a5ab686cf', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '5349b3f515b9be2eb9ddaba91b09d946e116bf44', class: 'd-flex mx-auto' }, h("ir-button", { key: '20eb0fd9ccc6bc978d7d5ca46fd40be50fa25df2', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
