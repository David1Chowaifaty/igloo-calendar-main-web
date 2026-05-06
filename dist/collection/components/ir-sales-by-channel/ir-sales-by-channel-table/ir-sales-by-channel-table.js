import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
export class IrSalesByChannelTable {
    records;
    allowedProperties;
    mode;
    visibleCount = 10;
    properties = new Map();
    componentWillLoad() {
        this.setupProperties();
    }
    handlePropertiesChange() {
        this.setupProperties();
    }
    setupProperties() {
        const map = new Map();
        for (const property of this.allowedProperties) {
            map.set(property.id, property.name);
        }
        this.properties = new Map(map);
    }
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        const isSingleProperty = this.mode === 'property';
        return (h("div", { key: 'f2d32fe3085c013b5b65b0e7b98e4758ca3cc7d2', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'dcc06916f459f4d42e4ae2fe5c6ca1c684c44cf9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8ecbb6d6f234a1c0e6f3bec7b7faf13caff0561f', class: "table-header" }, h("tr", { key: 'ef6e3bd9ab82300a71266fe4422b4eaf4b880399' }, h("th", { key: 'a28e06ffa358cd975d17a945fbafc1647bf2226e', class: "text-left" }, "Channel"), h("th", { key: 'f1b22639db4257421785ccdbc8b78d35306f6a16', class: "text-center" }, "Room nights"), h("th", { key: '8ecd44247a81cbb912380d482116840e0605a2f2', class: "text-right" }, "Room Revenue"), h("th", { key: 'ee13940eb0f7378cce90f682055dce65674ea6bc', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", { key: '25f6521ef81da170be8db32073fb478192fa0d14' }, this.records.length === 0 && (h("tr", { key: '73abbb5020eccc7fa3eea49055c952a6fa199090' }, h("td", { key: '05e5040b0d5dd5076ee703d4ac2a1aadba9c7d34', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.SOURCE ? 'font-weight-bold' : ''}` }, record.SOURCE), record.last_year?.SOURCE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.NIGHTS ? 'font-weight-bold' : ''}` }, record.NIGHTS), record.last_year?.NIGHTS && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.REVENUE ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.PCT && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: 'cbb6be2372aaf26a31cb2bf46153c6157e1ba779' }, h("tr", { key: 'ac783fd38e77d7c158bfbea41095d84ed41d7b75', style: { fontSize: '12px' } }, h("td", { key: '4d5f66e4cd1d9471cfa99f0bf85ea3850c72544e', colSpan: 4 }, h("div", { key: '2e0e508cf0df8861b965d9a6ce489ae905492b04', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '9e29c07596d8318c379309323adddbe9dfa43c50', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'af968af0aeadce9b52f801a98e70229e4acdae4f', class: "legend bg-primary" }), h("p", { key: 'c2a7582c6a6ec247add2504535ed8f65a6b156a2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5db258b80d449b0bfc0543122f91d4e7be75dc06', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '26432d3687b7cd6a7c1c050c7fd6c52425cb73ec', class: "legend secondary" }), h("p", { key: 'bcd6e09242c7858cd7d55feb248abe0fadf2f72d', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: '356c350084165c54e4af9de34e08704e90a3336a', class: 'd-flex mx-auto' }, h("ir-button", { key: 'f6229ff1a77307d46b719b2813ef25ba3c9b122b', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
    static get is() { return "ir-sales-by-channel-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-by-channel-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-by-channel-table.css", "../../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "records": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ChannelReportResult",
                    "resolved": "{ currency?: string; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; last_year?: { currency?: string; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; }; }[]",
                    "references": {
                        "ChannelReportResult": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelReportResult"
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
            },
            "allowedProperties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AllowedProperties",
                    "resolved": "{ name?: string; id?: number; }[]",
                    "references": {
                        "AllowedProperties": {
                            "location": "import",
                            "path": "@/services/property.service",
                            "id": "src/services/property.service.ts::AllowedProperties"
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
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SalesByChannelMode",
                    "resolved": "\"mpo\" | \"property\"",
                    "references": {
                        "SalesByChannelMode": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::SalesByChannelMode"
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
                "attribute": "mode",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "visibleCount": {},
            "properties": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "allowedProperties",
                "methodName": "handlePropertiesChange"
            }];
    }
}
//# sourceMappingURL=ir-sales-by-channel-table.js.map
