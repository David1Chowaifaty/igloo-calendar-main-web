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
        return (h("div", { key: '829fafb4780ab8f0f060b1badf4af170c626479c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '57a6515b46354e1e7d5a5264d34fbf7211307301', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '158c1d3d2a0d04cd8a954ac917f06c79508a2565', class: "table-header" }, h("tr", { key: '3e6e01458d76b5aa9a678a8a8663a578a41baded' }, h("th", { key: 'e366d7c58cc2b05e404cd10211e2ec13f89713d3', class: "text-left" }, "Channel"), h("th", { key: '23e9c222f64772fec6c7a5a03a33dcb74810147b', class: "text-center" }, "Room nights"), h("th", { key: '4f7e3ef5010a0b4cb51a70d8ca4c20a44a556e51', class: "text-right" }, "Room Revenue"), h("th", { key: '9a95cdf9e912246fdbc292d687dc1efeda9e74f5', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", { key: '30c3f8db82b9d53456b9d6e6ddd4a987f8254596' }, this.records.length === 0 && (h("tr", { key: '8357e852259afba2a4fec356ab8f2dd15f17551f' }, h("td", { key: 'e0fa9f79e5a2f382d5c43a00b268529c7fca5002', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.SOURCE ? 'font-weight-bold' : ''}` }, record.SOURCE), record.last_year?.SOURCE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.NIGHTS ? 'font-weight-bold' : ''}` }, record.NIGHTS), record.last_year?.NIGHTS && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.REVENUE ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.PCT && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: '31f8e473f409f5dfbcadd5ac03cfffcc7072398c' }, h("tr", { key: 'd1f3b4d92fb7ee2a26de5b641f5fd56a1d828eed', style: { fontSize: '12px' } }, h("td", { key: '978ea759f62886a1756680a05a58146d5b3b7158', colSpan: 4 }, h("div", { key: '0cd29f0fc9efd1d3a5a472da39050e0c20cca9f1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '0cba56066a4260639578f9cf70eda8a3b84cd886', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5117431cea37703a9530b6906ee47ed3751f2d19', class: "legend bg-primary" }), h("p", { key: 'd3556010656d0b9401f370ac656cb68687b8fa1e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '90ca26ef445d6c537072efc9a0030cb5cef62464', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '58c06dcb2cd4c4cc137781cb32297acad6553c53', class: "legend secondary" }), h("p", { key: '4c73eb81baf7b6360032955c931a5c7f5c402ec0', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: '2c3476b4f54a6667e8852209e449ecd5264aa597', class: 'd-flex mx-auto' }, h("ir-button", { key: '68b4c0fdcfd0f98e77c2157990c301ba1b081413', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
