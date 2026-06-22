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
        const records = this.records ?? [];
        const visibleRecords = records.slice(0, this.visibleCount);
        const isSingleProperty = this.mode === 'property';
        if (records.length === 0) {
            return (h("wa-card", { class: "channel-table__card" }, h("div", { class: "channel-table__empty-wrapper" }, h("ir-empty-state", { message: "No sales data found." }))));
        }
        return (h("wa-card", { class: "channel-table__card" }, h("div", { class: "channel-table__scroll" }, h("table", { class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { class: "table-header" }, h("tr", null, h("th", { class: "cell--left" }, "Source"), h("th", { class: "cell--center" }, "Room nights"), h("th", { class: "cell--right" }, "Room Revenue"), h("th", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", null, visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": "record_row", class: { 'task-table-row ir-table-row': true } }, h("td", { class: "cell--left" }, h("div", { class: "cell-stack" }, h("p", { class: record.last_year?.SOURCE ? 'value--primary' : '' }, record.SOURCE), record.last_year?.SOURCE && h("p", { class: "value--previous" }, record.last_year.SOURCE))), h("td", { class: "cell--center" }, h("div", { class: "cell-stack" }, h("p", { class: record.last_year?.NIGHTS ? 'value--primary' : '' }, record.NIGHTS), record.last_year?.NIGHTS && h("p", { class: "value--previous" }, record.last_year.NIGHTS))), h("td", { class: "cell--right" }, h("div", { class: "cell-stack" }, h("p", { class: record.last_year?.REVENUE ? 'value--primary' : '' }, formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && h("p", { class: "value--previous" }, formatAmount(record.currency, record.last_year.REVENUE)))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(record.PCT.toString()) })), record.last_year?.PCT && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(record.last_year.PCT.toString()) }))))))));
        })), isSingleProperty && (h("tfoot", null, h("tr", { style: { fontSize: '12px' } }, h("td", { colSpan: 3 }), h("td", { class: "legend-cell" }, h("div", { class: "legend-row" }, h("div", { class: "legend-item" }, h("div", { class: "legend-dot legend-dot--current" }), h("p", null, "Selected period")), h("div", { class: "legend-item" }, h("div", { class: "legend-dot legend-dot--previous" }), h("p", null, "Previous year")))))))), this.visibleCount < records.length && (h("div", { class: "channel-table__load-more" }, h("ir-custom-button", { variant: "neutral", appearance: "outlined", size: "s", onClickHandler: this.handleLoadMore }, "Load More"))))));
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
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelReportResult",
                            "referenceLocation": "ChannelReportResult"
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
                            "id": "src/services/property.service.ts::AllowedProperties",
                            "referenceLocation": "AllowedProperties"
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
                            "id": "src/components/ir-sales-by-channel/types.ts::SalesByChannelMode",
                            "referenceLocation": "SalesByChannelMode"
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
                "reflect": false,
                "attribute": "mode"
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
