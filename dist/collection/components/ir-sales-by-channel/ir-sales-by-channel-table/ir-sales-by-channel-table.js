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
        return (h("div", { key: 'ba3a1c0c01e55c70ca9871af0c0eb1435b6e7997', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '02803c1c440e0aaf2cc342a84785248e8d5187f6', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8fb75e4e92bda3b9e2818037dc800009b142f79a', class: "table-header" }, h("tr", { key: '25e58e6da92fc35060553937a7a33afadcec1d68' }, h("th", { key: '266ae1340643e6c5fc97fc44b63eb192b350c63b', class: "text-left" }, "Channel"), h("th", { key: '61057a46de3af15303b0974684b7268128581e05', class: "text-center" }, "Room nights"), h("th", { key: 'f05e901a06922b3f9b102789b2d025ee9889b5a6', class: "text-right" }, "Room Revenue"), h("th", { key: '79ccccf3d1a4ba96438cbd445b429235d8725672', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", { key: 'dc9af5d1f319281782836622ac61c3b053238024' }, this.records.length === 0 && (h("tr", { key: 'd7b9e42d3a4ab60ccac2e227bb8ae7079951d89f' }, h("td", { key: 'b9d0755da6846e291f805257eb63cdf5bec97ff4', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.SOURCE ? 'font-weight-bold' : ''}` }, record.SOURCE), record.last_year?.SOURCE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.NIGHTS ? 'font-weight-bold' : ''}` }, record.NIGHTS), record.last_year?.NIGHTS && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.REVENUE ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.PCT && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: 'b30aa9351214d144a9aefb5691ca6a16770ebe43' }, h("tr", { key: 'd0d84068d48ff3cd202b4992fc45fe65e279e9bf', style: { fontSize: '12px' } }, h("td", { key: '38c99f3d677cc54435c69bb11885f540fe62575f', colSpan: 4 }, h("div", { key: 'caf4a83c91ec162964a987e4211c0085d2d7f772', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'de478a2e36d619a4306223651e5dc987788e1823', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '20c474af7dca4b291d923b20e689d3708898fdd7', class: "legend bg-primary" }), h("p", { key: '87325ffe631bb5a49a97af50a4b9eeb49af48995', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '9024f9eb8db035350206de5a071bb83f28f9afcd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'bfc9662770238d726401581b2e84db64f113c8ec', class: "legend secondary" }), h("p", { key: '5314cd7e1deef98aebd00c63744823977f87437e', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: '095e6c1f6e51a4391dc65d48cedb8fbeb5395fd2', class: 'd-flex mx-auto' }, h("ir-button", { key: 'd86b0a4fc957ddbb765a932ca9c7ff4823f0e24e', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
