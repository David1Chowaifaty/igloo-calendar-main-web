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
        return (h("div", { key: '7e838137a0369f696df33ca4e5107ad3e15fb1a9', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '37d67f8068188c621abf7ef1928d80fd27452fe3', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2dab62414e2bb3f6937dabfb37d8719ee8135f21', class: "table-header" }, h("tr", { key: '0b80d4e10d8aa63d80aab7dc1b152562070c7b36' }, h("th", { key: '61d17183fc15f73e4fc97693443d7f2542454d74', class: "text-left" }, "Country"), h("th", { key: 'ac72f7f637d6c3e60285a38b8b33ecb801f2004a', class: "text-center" }, "Room nights"), h("th", { key: 'a53965ad752613c59ca0dc312d24fd34ce02658d', class: "text-center" }, "No of guests"), h("th", { key: '801df6f5445ae6cf10190c6e56b06f712a65dac8', class: "text-right" }, "Revenue"), h("th", { key: 'abc1c5eb8de27e4024a282ef4adcf677debbd63a', class: "" }))), h("tbody", { key: '8235419495571068e18d67cfd5619c314f362de3' }, this.records.length === 0 && (h("tr", { key: '5baf9d960fddbc7dafe729d3432bc72b7fd76aa5' }, h("td", { key: '22f2b7fda05deb0c0cabe5e047a7a79bec8b45d6', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '6b2c4668d71958df92ee253f8787cdaf0d9efba2' }, h("tr", { key: '26decc02e329296ef824ba35a36279d4b21ee7ce', style: { fontSize: '12px' } }, h("td", { key: '987db142e8e564abc4c8d84f0c5e7872ddc10aa9', colSpan: 4 }), h("td", { key: '093820a49a8549df910620719257d47a5ac3cef4', style: { width: '250px' } }, h("div", { key: 'cc2e1b0fc705b1bf4d3b802bed878ce59793d7f2', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '3d30a96c2104853f467f17b6d6132f3bd1249315', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4403e0488a62ec32d81f6185c437840fc6caa8fb', class: "legend bg-primary" }), h("p", { key: '26c1e630a2d8a28bc62d9f310da902c3ec54c635', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'dab57a5d6b9571439b00b0cbd77667fae64976d0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6f5604e5f125435f5e695df88eb955f5002366bc', class: "legend secondary" }), h("p", { key: 'f3587f0da0b2cde8c945ce50ad4f2cd26ba490a2', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '2a41ad05cac92e83d08e92fb81a8e036acbd79f0', class: 'd-flex mx-auto' }, h("ir-button", { key: '22517b8037446989e48555048f1441eba32caaa7', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
