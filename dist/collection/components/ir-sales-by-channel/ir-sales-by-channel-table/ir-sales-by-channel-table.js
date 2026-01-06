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
        return (h("div", { key: 'b283777fb0d9b95431804907e841862a20f82daf', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'de430907736d216a2f20c48550948e4d9ff30a6a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e2d139a29fdfc520b1eaccc393c0fc6f81d22148', class: "table-header" }, h("tr", { key: '3239e7193bdc854f4d5eee82d7ab1036f773a51f' }, h("th", { key: '6c2013b323c18cfd4e3e8dc3aca5bf924a395e74', class: "text-left" }, "Channel"), h("th", { key: '7b42f6275734bd0f01ae5834d840ac72ec38018f', class: "text-center" }, "Room nights"), h("th", { key: '8b399fcbd78329427df9180087f6f2f3c6ef1c03', class: "text-right" }, "Room Revenue"), h("th", { key: '6fe364b0c1376cfdc817a89366b17dc99f3c7db9', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", { key: '768e22eec866baee2dfe060ec5a2c77e4879f64a' }, this.records.length === 0 && (h("tr", { key: '3df5567144aa1b8d49e8af0cc7852715997495af' }, h("td", { key: '82ae60d1d4c17a7cdbc4ad26e2352ac608085043', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.SOURCE ? 'font-weight-bold' : ''}` }, record.SOURCE), record.last_year?.SOURCE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.NIGHTS ? 'font-weight-bold' : ''}` }, record.NIGHTS), record.last_year?.NIGHTS && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.REVENUE ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.PCT && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: '20aa36643ddccc8f45861792673e3a631512c5ab' }, h("tr", { key: '6e5bf4213ba8fcfd4038023042adbfd7e34abc95', style: { fontSize: '12px' } }, h("td", { key: 'd2f4eb33c46d6d5e8a6d7a7ca612701756686af9', colSpan: 4 }, h("div", { key: '2dd2fbf93fde9eaa70a38fd9686abeef9231d266', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'ab96ecf6f349e529fe04f05a29c296093e6fcdcc', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e793326dd094f564fa9b43b8927c7461cb10ef36', class: "legend bg-primary" }), h("p", { key: 'fe96b311225c28b7ce229b896d6dacc0546dd76d', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '8d7bdf6e4ba576530ba02d2222a7ec2e1752a91f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5f4793af6574cf5cfdeae8830820df5409ca8706', class: "legend secondary" }), h("p", { key: 'bae850ab34417fd3e6ed21a24f39ebf55f6d46f3', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: 'f73c48a784dcd823d588495f3dd293d3e6b02e46', class: 'd-flex mx-auto' }, h("ir-button", { key: '599a8019e32d4108cf0ccef1648b21b5da2434df', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
