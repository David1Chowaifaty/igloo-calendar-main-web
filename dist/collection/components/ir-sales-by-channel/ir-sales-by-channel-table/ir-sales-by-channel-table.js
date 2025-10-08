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
        return (h("div", { key: '106ceec2c0d9e49af94ed4e612ed841cf6ecf161', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '0844154c927efb9defb5c6fd05da1ad8a36a5fdb', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'bcf8cdec4b81a70cf2e904a28b302f102ea14cbc', class: "table-header" }, h("tr", { key: '4431e98cee99595352a09b6da615d08c201a81b5' }, h("th", { key: 'd53aa2f6e17ed14b5242829357ebdaedbf98e052', class: "text-center" }, "Channel"), h("th", { key: '0b3a24b958aa65994989ffc207d43bed2c54ed1d', class: "text-center" }, "Room nights"), h("th", { key: '197c1a789b39cb48f244ae03eaaf6bd780e0a35c', class: "text-right" }, "Room Revenue"), h("th", { key: '6fa165dd0ed61b97381ab96cee92692460089b44', class: "" }))), h("tbody", { key: '8faa28bf820f7aa3ca59cf41483ea7c1523d86be' }, this.records.length === 0 && (h("tr", { key: 'cb6a069228e67f12b3fd036c30ab7a6276b97c97' }, h("td", { key: '8c68e74c63582b2efe9616e0c4a7184c4a33e214', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g;
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_a = record.last_year) === null || _a === void 0 ? void 0 : _a.SOURCE) ? 'font-weight-bold' : ''}` }, record.SOURCE), ((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.SOURCE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.NIGHTS) ? 'font-weight-bold' : ''}` }, record.NIGHTS), ((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.NIGHTS) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.REVENUE) ? 'font-weight-bold' : ''}` }, formatAmount(record.currency.symbol, record.REVENUE)), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.REVENUE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency.symbol, record.last_year.REVENUE))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.PCT) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '47df0812cfd60cbac87956735bfc7a71665bdaea' }, h("tr", { key: '393e8bb8189b51cc60b64c67d080b68bc1f44152', style: { fontSize: '12px' } }, h("td", { key: '00edd9e405d4019b8fe8d4b06e4a30d0c2c9786e', colSpan: 4 }, h("div", { key: 'b9461efa5a0b922dfdcf6b85b8b93c2f37fb6e4a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '80a7058ff2eed43d0cf3971b8aae3c091eba4698', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a7cc62133c2b498992dd24071cff6d4e3c5ae983', class: "legend bg-primary" }), h("p", { key: '8603c5862b19ae9d47e1954d16cc82bdcbae5336', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4b930e8820184dcd589ad8f74b02fc81f34af67a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'eb3eda955fb52875efffb23361b0eb74771c9b7a', class: "legend secondary" }), h("p", { key: '8b221c365fc6f95f669ed28d55342a6ccaa3134d', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '0b0f8f9f7e0ca9e2dad25dea8fbe1aacb08571d4', class: 'd-flex mx-auto' }, h("ir-button", { key: '4f605c9b2a760816e6b4811f3d496d2d23bac14d', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
