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
        const haveMultipleProperties = this.allowedProperties.length > 1;
        return (h("div", { key: '46aef23542658a0cf44b595e8f687667c3476231', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'edd821501afad683a1af48ec248c2f084b261175', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '20c9148a9e7544d17078ecc90622bb08d2be6bb5', class: "table-header" }, h("tr", { key: '3947f64bf5786f6d92023443c954c4646e5e7815' }, haveMultipleProperties && h("th", { key: 'd57ac18919e1d21fd462f5880d4da53f66fcdef5', class: "text-center" }, "Property"), h("th", { key: '8ba0b1dfd5d3c28a9436323d3bb767185db3e3bc', class: "text-center" }, "Channel"), h("th", { key: '0c2f93741932d008e27dd67f05aba13f57b2ffd3', class: "text-center" }, "Room nights"), h("th", { key: '9cbe2e6327f6a48b1728cf88bf53071cff7e2d60', class: "text-right" }, "Room Revenue"), h("th", { key: '987e440d17acf051e3b3af86250a1e4a5bbc30a9', class: "" }))), h("tbody", { key: 'afc86014ddae0ae9ff55d529b5e8796e80d4e3c0' }, this.records.length === 0 && (h("tr", { key: '451994014ec5d7ceb65ba1a14a5018ec1e8b658a' }, h("td", { key: 'a2012945104f48ce014e6ff3aa6b063b56402277', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g;
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.REVENUE.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, haveMultipleProperties && h("td", { class: "text-center" }, record.PROPERTY_NAME), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_a = record.last_year) === null || _a === void 0 ? void 0 : _a.SOURCE) ? 'font-weight-bold' : ''}` }, record.SOURCE), ((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.SOURCE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.NIGHTS) ? 'font-weight-bold' : ''}` }, record.NIGHTS), ((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.NIGHTS) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.REVENUE) ? 'font-weight-bold' : ''}` }, formatAmount(record.currency.symbol, record.REVENUE)), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.REVENUE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency.symbol, record.last_year.REVENUE))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.PCT) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '3ae6923ad8c450a53c08425529c9e63942055f37' }, h("tr", { key: '1449d74bfa714a64c9c9c96b8c5fe8c9fceb7e42', style: { fontSize: '12px' } }, h("td", { key: '55bf64ca0027599b99255b77c322b281e6b37f24', colSpan: haveMultipleProperties ? 5 : 4 }, h("div", { key: '21d3e8520180d4900569240baceb018811c164ac', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'ca9c0f24f7dce50e141a884c9c4a014d64c537bb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '18c4cab6123f8b77e9600ebef8322ee4c6d775ad', class: "legend bg-primary" }), h("p", { key: 'ef11f408c0c780300d30217fdb93eae38cac1b87', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c4865d7ee1a0f47bc11b9f3a94968605a66b500c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1cfb7f7475e18cb22383b3a93ab9008ff7c3b5db', class: "legend secondary" }), h("p", { key: 'e408465ffa81483cc05f6342ad704d19e3de0988', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '437d5b4537dabae99d0e91ac064801c84b689dcf', class: 'd-flex mx-auto' }, h("ir-button", { key: 'ce05d8ad345dc2b4884be4691a560896dec42ce0', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
                    "resolved": "{ currency?: { symbol?: string; code?: string; id?: number; }; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; last_year?: { currency?: { symbol?: string; code?: string; id?: number; }; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; }; }[]",
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
