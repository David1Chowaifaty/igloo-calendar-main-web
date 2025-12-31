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
        return (h("div", { key: '377607fee44d1fb030aa683a2a272f19605cf632', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '7de51d2a97aa440a5ad64b92f092bd0b49e0d611', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f6c2bb4fe1d34cedf3ae14421288d355c8bb4677', class: "table-header" }, h("tr", { key: '8416f244869764ba5b7d660d6af384f6eda639b1' }, h("th", { key: '8e5f3f842807ea444b3b7ff2e794af983d5bf0e4', class: "text-left" }, "Country"), h("th", { key: '085391b17ca4b9a43e5d85548058f0f1d37a3cf6', class: "text-center" }, "Room nights"), h("th", { key: 'aff252aeddd8e2561c7a284bd849cecfd07f06ba', class: "text-center" }, "No of guests"), h("th", { key: '43c5aedae90cfedd7834e5e3d0018aa8e2e563e0', class: "text-right" }, "Revenue"), h("th", { key: 'f7eb23afce0c0c3fb340b6f7bf0c50218cc30fb3', class: "" }))), h("tbody", { key: '4d86602fe061c23966d6151d98fdac30096d9770' }, this.records.length === 0 && (h("tr", { key: '3d3678174cd2c3bc4f130eb6e60c5df6861aa187' }, h("td", { key: '216829a9f19a0fb21019e5915682f48dae5da6c1', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '530774c800e20513275cf3633a7294c78a221b68' }, h("tr", { key: '8b81a1ab348b6d2d7e728777c66f1d6125d18424', style: { fontSize: '12px' } }, h("td", { key: '0323c16db680c4318281e1c6e9f5f432c5e16c41', colSpan: 4 }), h("td", { key: '13674014f302e022b3c44d2087b1e178f142a1e6', style: { width: '250px' } }, h("div", { key: '4efc4eb1c1d35e40c7f055297ec499a6e6a47d06', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'f5fba17f992c3b0bafc2244ee81e428c4556b3ad', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9b7c640c1ff254bd53713639a4a138c12d1b56a0', class: "legend bg-primary" }), h("p", { key: 'd1b0143aff2e8f8c2027e6a6162938e9f2bed711', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '888bc86ac6dca9cc799bda8e860f3c37850e6719', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '226cf691d30ac900062d001daf0176b9fc4f0438', class: "legend secondary" }), h("p", { key: 'db4e83090f07913ac7d0cca2397b2a5ec54d309f', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'e5a84bdb4d593f2bf36e0061fd3b26e6608adbab', class: 'd-flex mx-auto' }, h("ir-button", { key: '5ce1b168fba5a04fc94264c39f3c9ed43a617e2a', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
