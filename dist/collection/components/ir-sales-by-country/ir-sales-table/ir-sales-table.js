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
        return (h("div", { key: 'e874fc87f024daa7375f752e00bc46570a0320de', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9e2bf8da73bca37681f1de16795d02e2fd86aa81', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '0cdfec7b2ac8cdb9fd1312760f81bf7b4a6c318f', class: "table-header" }, h("tr", { key: '6d27c1218578c6a2b6caa5def6301334ecd52150' }, h("th", { key: '6de1d8763866798b66746129b10caed1befb44ff', class: "text-left" }, "Country"), h("th", { key: '947403882109fed551b3e46c482e9787b1e4b7ec', class: "text-center" }, "Room nights"), h("th", { key: '26d05c680d381cf10b3a7e8777884f297bd015ff', class: "text-center" }, "No of guests"), h("th", { key: '011357901157e953a8c32a52ce04d105a7c7a95d', class: "text-right" }, "Revenue"), h("th", { key: '86a2b3258b54705261005135c131a73cb26ccf09', class: "" }))), h("tbody", { key: 'f1fe025b6ef6c344b75d97421c1038bcb1ed5ba5' }, this.records.length === 0 && (h("tr", { key: '830517ad879a66c1d8ae842cbbcdb921e102728b' }, h("td", { key: '4cc9429c043a54c4cf3b82d4f1569481a6994474', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '911edbfff13d41ab84e53c1b84278705270589f9' }, h("tr", { key: '9d0505bebb70c6eb8f1c35ddc6360f36bc2174ee', style: { fontSize: '12px' } }, h("td", { key: '9f8d4250476aa44c2c3dc9165514251e19643c42', colSpan: 4 }), h("td", { key: '66bffd8649cae434fd50d7247dc803815b8d1999', style: { width: '250px' } }, h("div", { key: 'b821fac6c44c74c925abb318ab64766da9387a90', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '826c211348d91224bc4bafd58b6e4e8cb60a76d7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '7dce1b965f891c5216951c9dd481f9a27de5b20c', class: "legend bg-primary" }), h("p", { key: 'be4f44d7abf719b62725d856ee23101de7503667', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '2c656516462bb6dc620125450148177df0af46de', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '8fdce47faa6fc1a07665330bfa0db99f6a479c9e', class: "legend secondary" }), h("p", { key: '26852f0d93c0a2c2a7dc69dc76e9ad625d4d88d7', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '8cbfd921989642f3803d2993be6f8239f4111465', class: 'd-flex mx-auto' }, h("ir-button", { key: '1e055c038ee35f5975d8f2d64fd00afd647d2b2f', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
