import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
export class IrSalesByChannelTable {
    constructor() {
        this.visibleCount = 10;
        this.properties = new Map();
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
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
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        const isSingleProperty = this.mode === 'property';
        return (h("div", { key: 'f32c37e752f9ef566d5a6e0bef32c6a7ce4ea3f8', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '01fbf98c12877c60726b655a56d136054000f15b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '842c7a0315f76b26ce86dbec539648099a33ec73', class: "table-header" }, h("tr", { key: '30d9af3e10a6894cee7b4c0caf3ac17559e3292f' }, h("th", { key: '55d054e4bff706b9439dbbdaa1c8e10f19a916d3', class: "text-left" }, "Channel"), h("th", { key: 'd2f4511f5d1a9da2facf64d03cb902a16ddc5ab6', class: "text-center" }, "Room nights"), h("th", { key: 'd293bace587a5da18b9ec4a20a7edb45b5a77aad', class: "text-right" }, "Room Revenue"), h("th", { key: '32a0e3a786d74f9b15d9cc9f65b204d32aa35ba4', class: "" }))), h("tbody", { key: '207f26244cd0b0f9d9f1a1337ccc93bf448ab05d' }, this.records.length === 0 && (h("tr", { key: '5ab9ae07ed683dcbfaec10339cb439e01045343f' }, h("td", { key: '91b4406512fff9bba8f7dc3250583025cdd7f05d', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g;
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_a = record.last_year) === null || _a === void 0 ? void 0 : _a.SOURCE) ? 'font-weight-bold' : ''}` }, record.SOURCE), ((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.SOURCE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.NIGHTS) ? 'font-weight-bold' : ''}` }, record.NIGHTS), ((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.NIGHTS) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.REVENUE) ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.REVENUE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", null, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.PCT) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: '04173d1a0cd684597aa69646f359ee8a2b5ac9fb' }, h("tr", { key: '5f01a6d8cd673d469e27f85083c4d356d8017ebd', style: { fontSize: '12px' } }, h("td", { key: 'fa7680bb2c0bc3382de74b52831e744d7c5937cc', colSpan: 4 }, h("div", { key: 'b392f6ac4f142b9af9263e5c0634bf3aea51892d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'efc18b0139db2ede6b823a595b18c97f52d5d91d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c43376933288a1f781a4ba57de43be7242c23bd1', class: "legend bg-primary" }), h("p", { key: 'd3c9758163a74dc07100c436da2c31d2b91777e2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '9f3ca3a68948d1df83415e86cb7aed220fba3b24', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5f58b67b5692dc2dbb4accac6e53bbd4d031bccd', class: "legend secondary" }), h("p", { key: '10c07745fff217ef44d2f7c3a0e8440133a5c688', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: '8ed19d07b82d382491c2ee6fc23e20d292aeb3f2', class: 'd-flex mx-auto' }, h("ir-button", { key: '341091d626545eec403b739f0a166d69d6cfd8e3', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
