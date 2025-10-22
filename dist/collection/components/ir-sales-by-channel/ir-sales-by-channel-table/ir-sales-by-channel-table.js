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
        return (h("div", { key: 'f9d18873c0f28c24c90035bb79dbc05b1d7956af', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '6a06e70c006e427b6e3cd13f62d4264cd164e774', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '52de2eb4e89ed52201e4d321a4b136d248606aea', class: "table-header" }, h("tr", { key: '54333b0ef66d7525abd983ceea211d8a4fca96f6' }, h("th", { key: 'dfb8b43edf087674015abba0bc40f62eb06c5977', class: "text-left" }, "Channel"), h("th", { key: 'd2a9fbf894f68e89fb707c28181ca256bc78b954', class: "text-center" }, "Room nights"), h("th", { key: 'b8139ced3f02fb13f39797471e05e390f2df4000', class: "text-right" }, "Room Revenue"), h("th", { key: 'cd9cb2bd13e85471f7b7718d9f8a88086ea719b4', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", { key: 'f9ed77be53f378b9951b29da39791eefec68ebe7' }, this.records.length === 0 && (h("tr", { key: 'a838b157925adfc5871291309782428cb113fa9f' }, h("td", { key: '7064248437639419835313174730fe9275082df9', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g;
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_a = record.last_year) === null || _a === void 0 ? void 0 : _a.SOURCE) ? 'font-weight-bold' : ''}` }, record.SOURCE), ((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.SOURCE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.NIGHTS) ? 'font-weight-bold' : ''}` }, record.NIGHTS), ((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.NIGHTS) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.REVENUE) ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.REVENUE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.PCT) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: '7a385d49991c93c513558e132c79a4634bf1a29f' }, h("tr", { key: 'c117c8093408c76429d6ef7d263d4fd9bb1b3239', style: { fontSize: '12px' } }, h("td", { key: '6ad5cf7ebc8cde47dc446edbbe7376a375c52101', colSpan: 4 }, h("div", { key: 'f052e2f138127a5ad79f55c9f7508f3f4f8b734b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '56fa5ddf2228d86d5c761fe564f176eda3e624ec', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'bebf4e63b77ef58fda9064bb0cd159ae0a65bc2f', class: "legend bg-primary" }), h("p", { key: '79ac28af6748b60603bc66daf34ea42e27bac536', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'dde912263c3a0b0111892e512710c3942bc73046', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fde2efa43dd31872ec29e4c566d7aec449ff7118', class: "legend secondary" }), h("p", { key: '98fb15b3342d0a46e2e0150bb34f981cc0d8b821', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: '00feb91924d46e0aa0f91e3ebcdf6d61bb92cbc8', class: 'd-flex mx-auto' }, h("ir-button", { key: 'afe8d61dea6cc07a2f9267967f63f4e9f091eb30', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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
